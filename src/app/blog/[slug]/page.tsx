import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

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

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = await getPost(slug);
  const post = res?.data;
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const res = await getPost(slug);
  const post = res?.data;

  if (!post) notFound();

  const imgSrc = postImageSrc(post.image);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto min-h-[60vh] w-full max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <Link href="/blog" className="text-[var(--primary)] hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-600">{post.title}</span>
        </nav>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <time dateTime={post.published_at ?? undefined}>
                {formatDate(post.published_at)}
              </time>
              {post.author?.name && <span>By {post.author.name}</span>}
            </div>
          </header>

          {imgSrc && (
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:text-slate-700 prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline">
            {post.body.includes("<") ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              post.body
                .split(/\n\n+/)
                .filter((p) => p.trim())
                .map((p, i) => (
                  <p key={i} className="mb-4 text-slate-700">
                    {p}
                  </p>
                ))
            )}
          </div>
        </article>

        <p className="mt-12">
          <Link href="/blog" className="font-medium text-[var(--primary)] hover:underline">
            ← Back to blog
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
