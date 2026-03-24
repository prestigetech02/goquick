import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PAGES: { url: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { url: "", changeFrequency: "weekly", priority: 1 },
  { url: "about", changeFrequency: "monthly", priority: 0.9 },
  { url: "contact", changeFrequency: "monthly", priority: 0.9 },
  { url: "careers", changeFrequency: "weekly", priority: 0.9 },
  { url: "how-it-works", changeFrequency: "monthly", priority: 0.9 },
  { url: "faq", changeFrequency: "monthly", priority: 0.9 },
  { url: "blog", changeFrequency: "weekly", priority: 0.8 },
  { url: "privacy", changeFrequency: "yearly", priority: 0.4 },
  { url: "terms", changeFrequency: "yearly", priority: 0.4 },
];

type BlogPost = { slug: string; lastModified: string | null };

async function getBlogSlugs(): Promise<BlogPost[]> {
  const base = siteConfig.apiBaseUrl.replace(/\/$/, "");
  try {
    const res = await fetch(`${base}/blog/posts?per_page=100`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const posts = json?.data?.posts ?? [];
    return posts.map((p: { slug: string; updated_at?: string | null; published_at?: string | null }) => ({
      slug: p.slug,
      lastModified: p.updated_at ?? p.published_at ?? null,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ url, changeFrequency, priority }) => ({
    url: url ? `${base}/${url}` : base,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const slugs = await getBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map(({ slug, lastModified }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: lastModified ? new Date(lastModified) : now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
