import { siteConfig } from "@/lib/site";

const API_BASE = siteConfig.apiBaseUrl;

export type BlogAuthor = { id: number; name: string };

export type BlogPostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category?: string | null;
  tags?: string[];
  image: string | null;
  published_at: string | null;
  author: BlogAuthor | null;
};

export type BlogPostDetail = BlogPostSummary & {
  body: string;
  related?: BlogPostSummary[];
};

export type BlogPagination = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

export type BlogFilters = {
  category?: string;
  tag?: string;
  year?: string;
};

export type BlogSidebarData = {
  categories: { name: string; count: number }[];
  tags: { name: string; count: number }[];
  archives: { year: number; count: number }[];
};

type ListResponse = {
  success: boolean;
  data?: { posts: BlogPostSummary[]; pagination: BlogPagination };
};

type ShowResponse = {
  success: boolean;
  message?: string;
  data?: BlogPostDetail;
};

type SidebarResponse = {
  success: boolean;
  data?: BlogSidebarData;
};

/** Backend caps `per_page` at 20. */
export const BLOG_PAGE_SIZE = 12;

export async function fetchBlogPosts(
  init?: RequestInit,
  filters: BlogFilters = {},
): Promise<{ posts: BlogPostSummary[]; pagination: BlogPagination | null } | null> {
  const params = new URLSearchParams({ per_page: String(BLOG_PAGE_SIZE) });
  for (const [key, value] of Object.entries(filters)) {
    if (value) params.set(key, value);
  }
  try {
    const res = await fetch(`${API_BASE}/blog/posts?${params}`, init);
    if (!res.ok) return null;
    const json: ListResponse = await res.json();
    if (!json.success || !json.data) return null;
    return { posts: json.data.posts ?? [], pagination: json.data.pagination ?? null };
  } catch {
    return null;
  }
}

/** Returns `undefined` on network failure and `null` when the post doesn't exist. */
export async function fetchBlogPost(
  slug: string,
  init?: RequestInit,
): Promise<BlogPostDetail | null | undefined> {
  try {
    const res = await fetch(`${API_BASE}/blog/posts/${encodeURIComponent(slug)}`, init);
    if (res.status === 404) return null;
    if (!res.ok) return undefined;
    const json: ShowResponse = await res.json();
    return json.success && json.data ? json.data : null;
  } catch {
    return undefined;
  }
}

export async function fetchBlogSidebar(init?: RequestInit): Promise<BlogSidebarData | null> {
  try {
    const res = await fetch(`${API_BASE}/blog/sidebar`, init);
    if (!res.ok) return null;
    const json: SidebarResponse = await res.json();
    return json.success && json.data ? json.data : null;
  } catch {
    return null;
  }
}

/** Slugs that get a static /blog/[slug]/ page; must match `generateStaticParams`. */
export async function fetchPrebuiltSlugs(init?: RequestInit): Promise<string[]> {
  const result = await fetchBlogPosts(init);
  return result?.posts.map((p) => p.slug) ?? [];
}

/** Posts published after the last build have no static page, so they open in the client-side reader. */
export function blogPostHref(slug: string, prebuiltSlugs: readonly string[]): string {
  return prebuiltSlugs.includes(slug)
    ? `/blog/${slug}/`
    : `/blog/read/?slug=${encodeURIComponent(slug)}`;
}

export function blogFilterHref(filters: BlogFilters): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    if (value) params.set(key, value);
  }
  const query = params.toString();
  return query ? `/blog/?${query}` : "/blog/";
}

export function formatBlogDate(iso: string | null): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

/**
 * Counts one view per post per browser session, then reports active reading time and scroll depth
 * once when the reader leaves. Returns a cleanup that also reports, for in-app navigation.
 */
export function startBlogReadTracking(slug: string): () => void {
  if (typeof window === "undefined" || !slug) return () => {};
  const base = `${API_BASE}/blog/posts/${encodeURIComponent(slug)}`;

  const viewedKey = `gq_blog_viewed_${slug}`;
  try {
    if (!sessionStorage.getItem(viewedKey)) {
      sessionStorage.setItem(viewedKey, "1");
      void fetch(`${base}/view`, { method: "POST", keepalive: true }).catch(() => {});
    }
  } catch {
    void fetch(`${base}/view`, { method: "POST", keepalive: true }).catch(() => {});
  }

  let activeMs = 0;
  let visibleSince = document.visibilityState === "visible" ? Date.now() : null;
  let maxScrollPct = 0;
  let reported = false;

  const measureScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable <= 0 ? 100 : ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
    maxScrollPct = Math.max(maxScrollPct, Math.min(100, Math.round(pct)));
  };

  const report = () => {
    if (reported) return;
    if (visibleSince != null) activeMs += Date.now() - visibleSince;
    visibleSince = null;
    const seconds = Math.round(activeMs / 1000);
    if (seconds <= 0) return;
    reported = true;
    const body = new URLSearchParams({ seconds: String(seconds), scroll_pct: String(maxScrollPct) });
    if (!navigator.sendBeacon?.(`${base}/read`, body)) {
      void fetch(`${base}/read`, { method: "POST", body, keepalive: true }).catch(() => {});
    }
  };

  const onVisibility = () => {
    if (document.visibilityState === "hidden") {
      report();
    } else if (!reported) {
      visibleSince = Date.now();
    }
  };

  measureScroll();
  window.addEventListener("scroll", measureScroll, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", report);

  return () => {
    report();
    window.removeEventListener("scroll", measureScroll);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", report);
  };
}

export function blogImageSrc(image: string | null): string | null {
  if (!image) return null;
  if (image.startsWith("http")) return image;
  const base = API_BASE.replace(/\/v1$/, "");
  return `${base}${image.startsWith("/") ? "" : "/"}${image}`;
}
