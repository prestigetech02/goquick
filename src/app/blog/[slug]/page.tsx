import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

// Required for "output: export" — must be exported and return at least one param set (Next.js 16).
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://api.goquickapp.com.ng/v1";
  try {
    const res = await fetch(`${apiBase}/blog/posts?per_page=100`, { cache: "no-store" });
    if (!res.ok) return [{ slug: "_" }];
    const json = await res.json();
    const posts = json?.data?.posts ?? [];
    if (posts.length === 0) return [{ slug: "_" }];
    return posts.map((p: { slug: string }) => ({ slug: p.slug }));
  } catch {
    return [{ slug: "_" }];
  }
}

export const dynamic = "force-static";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://api.goquickapp.com.ng/v1";

type PostData = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  image: string | null;
  published_at: string | null;
  author: { id: number; name: string } | null;
};

type ShowResponse = {
  success: boolean;
  message?: string;
  data?: PostData;
};

async function getPost(slug: string): Promise<ShowResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/blog/posts/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (!res.ok) return json;
    return json;
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

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = await getPost(slug);
  const post = res?.data;
  if (!post) return { title: "Post" };
  const image = postImageSrc(post.image);
  return pageMetadata({
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the GoQuick blog.`,
    path: `/blog/${slug}`,
    image,
    type: "article",
    publishedTime: post.published_at,
    authors: post.author?.name ? [post.author.name] : undefined,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_") notFound();
  const res = await getPost(slug);
  const post = res?.data;

  if (!post) notFound();

  const imgSrc = postImageSrc(post.image);
  const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || undefined,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: post.published_at || undefined,
    dateModified: post.published_at || undefined,
    ...(post.author?.name && { author: { "@type": "Person", name: post.author.name } }),
    ...(imgSrc && { image: imgSrc }),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
  };

  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <JsonLd
        data={[
          articleSchema,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-label="Blog"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <p className="text-[1.85rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl">
            GoQuick <span className="text-[#ffe600]">Blog</span>
          </p>
          <TitleSquiggle />
        </div>
      </section>

      <main className="site-container py-12 sm:py-16 lg:py-20">
        <article className="home2-service-card mx-auto max-w-3xl overflow-hidden bg-white">
          {imgSrc ? (
            <div className="relative aspect-video w-full overflow-hidden bg-[color-mix(in_srgb,#308030_16%,white)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgSrc} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : null}

          <div className="p-5 sm:p-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-montserrat text-sm font-extrabold text-[#308030] transition hover:text-[#1b5c2a]"
            >
              <span aria-hidden>←</span>
              All posts
            </Link>

            <h1 className="mt-5 font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {post.published_at ? (
                <time
                  className="home2-street-tag bg-[#e8f4ea] text-[#0d2412]"
                  dateTime={post.published_at}
                >
                  {formatDate(post.published_at)}
                </time>
              ) : null}
              {post.author?.name ? (
                <span className="home2-street-tag bg-[#308030] text-[#ffe600]">
                  {post.author.name}
                </span>
              ) : null}
            </div>

            <div className="mt-8 max-w-none font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base [&_a]:font-extrabold [&_a]:text-[#1b5c2a] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-8 [&_h2]:font-montserrat [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-[#308030] [&_h3]:mt-6 [&_h3]:font-montserrat [&_h3]:text-lg [&_h3]:font-black [&_h3]:text-[#308030] [&_li]:mt-1 [&_p]:mb-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5">
              {post.body.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
              ) : (
                post.body
                  .split(/\n\n+/)
                  .filter((p) => p.trim())
                  .map((p, i) => (
                    <p key={i} className="mb-4">
                      {p}
                    </p>
                  ))
              )}
            </div>
          </div>
        </article>
      </main>

      <Home2Footer />
    </div>
  );
}
