import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, tips, and updates from GoQuick. Learn about errands, runners, and how we're making everyday tasks easier in Lagos.",
  alternates: { canonical: "/blog" },
};

const API_BASE = siteConfig.apiBaseUrl;

type PostItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
  published_at: string | null;
  author: { id: number; name: string } | null;
};

type ListResponse = {
  success: boolean;
  data: {
    posts: PostItem[];
    pagination: { current_page: number; last_page: number; per_page: number; total: number };
  };
};

async function getPosts(): Promise<ListResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/blog/posts?per_page=12`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function formatDate(iso: string | null): string {
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

function postImageSrc(image: string | null): string | null {
  if (!image) return null;
  if (image.startsWith("http")) return image;
  const base = API_BASE.replace(/\/v1$/, "");
  return `${base}${image.startsWith("/") ? "" : "/"}${image}`;
}

export default async function BlogPage() {
  const data = await getPosts();
  const posts = data?.data?.posts ?? [];
  const pagination = data?.data?.pagination;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto min-h-[60vh] w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <section aria-labelledby="blog-heading" className="mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Blog
          </p>
          <h1 id="blog-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            News &amp; updates from {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Tips, product updates, and stories from the GoQuick team.
          </p>
        </section>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 py-16 text-center">
            <p className="text-slate-600">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <ul className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const imgSrc = postImageSrc(post.image);
              return (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300 hover:bg-slate-50/50"
                  >
                    {imgSrc ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgSrc}
                          alt=""
                          className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className="aspect-[16/10] w-full shrink-0"
                        style={{ backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)" }}
                      />
                    )}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <time className="text-xs text-slate-500" dateTime={post.published_at ?? undefined}>
                        {formatDate(post.published_at)}
                      </time>
                      <h2 className="mt-2 font-semibold text-slate-900 group-hover:text-[var(--primary)] sm:text-lg">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
                      )}
                      {post.author?.name && (
                        <p className="mt-3 text-xs text-slate-500">By {post.author.name}</p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {pagination && pagination.last_page > 1 && (
          <p className="mt-8 text-center text-sm text-slate-500">
            Page {pagination.current_page} of {pagination.last_page}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
