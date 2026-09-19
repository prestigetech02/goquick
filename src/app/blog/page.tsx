import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Errand Tips in Lagos",
  description:
    "News, tips, and product updates from GoQuick. Learn about errands, runners, and everyday tasks in Lagos.",
  path: "/blog",
});

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

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44"
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 10 C18 2 28 12 44 8 C60 4 70 12 86 7 C102 2 112 12 128 8 C144 4 156 11 178 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default async function BlogPage() {
  const data = await getPosts();
  const posts = data?.data?.posts ?? [];
  const pagination = data?.data?.pagination;

  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="blog-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="blog-heading"
            className="text-[1.85rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            GoQuick <span className="text-[#ffe600]">Blog</span>
          </h1>
          <TitleSquiggle />
        </div>
      </section>

      <main className="site-container py-12 sm:py-16 lg:py-20">
        {posts.length === 0 ? (
          <div className="home2-service-card mx-auto max-w-xl bg-white px-6 py-16 text-center">
            <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Soon</span>
            <p className="mt-5 font-montserrat text-lg font-black tracking-tight text-[#308030] sm:text-xl">
              No posts yet
            </p>
            <p className="mt-2 font-montserrat text-sm font-semibold text-[#0d2412]/70">
              Check back soon for tips and updates.
            </p>
          </div>
        ) : (
          <ul className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const imgSrc = postImageSrc(post.image);
              return (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="home2-service-card home2-press-card group flex h-full min-w-0 flex-col overflow-hidden bg-white"
                  >
                    {imgSrc ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[color-mix(in_srgb,#308030_16%,white)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgSrc}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05] motion-reduce:transform-none"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full shrink-0 bg-[color-mix(in_srgb,#308030_16%,white)]" />
                    )}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      {post.published_at ? (
                        <time
                          className="home2-street-tag w-fit bg-[#e8f4ea] text-[#0d2412]"
                          dateTime={post.published_at}
                        >
                          {formatDate(post.published_at)}
                        </time>
                      ) : null}
                      <h2 className="mt-3 font-montserrat text-[1.05rem] font-black leading-tight tracking-tight text-[#0d2412] sm:text-lg">
                        {post.title}
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-2 line-clamp-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/70">
                          {post.excerpt}
                        </p>
                      ) : null}
                      {post.author?.name ? (
                        <p className="mt-auto pt-4 font-montserrat text-xs font-extrabold uppercase tracking-[0.12em] text-[#308030]">
                          By {post.author.name}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {pagination && pagination.last_page > 1 ? (
          <p className="mt-10 text-center font-montserrat text-sm font-extrabold text-[#0d2412]/55">
            Page {pagination.current_page} of {pagination.last_page}
          </p>
        ) : null}
      </main>

      <Home2Footer />
    </div>
  );
}
