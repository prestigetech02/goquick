"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BlogSidebar } from "@/components/BlogSidebar";
import {
  blogFilterHref,
  blogImageSrc,
  fetchBlogPost,
  formatBlogDate,
  startBlogReadTracking,
  type BlogPostDetail,
  type BlogSidebarData,
} from "@/lib/blog";

type Props = {
  slug: string;
  initialPost?: BlogPostDetail | null;
  initialSidebar: BlogSidebarData | null;
  prebuiltSlugs: readonly string[];
};

type State =
  | { status: "loading" }
  | { status: "ready"; post: BlogPostDetail }
  | { status: "missing" }
  | { status: "error" };

function BlogLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
      <div className="min-w-0">{children}</div>
      <div className="min-w-0 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:overscroll-contain lg:pb-2 lg:pr-2">
        {sidebar}
      </div>
    </div>
  );
}

function StatusCard({ status }: { status: Exclude<State["status"], "ready"> }) {
  const message =
    status === "loading"
      ? "Loading post…"
      : status === "missing"
        ? "This post doesn't exist or is no longer available."
        : "We couldn't load this post. Please try again shortly.";
  return (
    <div className="home2-service-card bg-white px-6 py-16 text-center">
      <p className="font-montserrat text-sm font-extrabold text-[#0d2412]/70">{message}</p>
      {status !== "loading" ? (
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-1 font-montserrat text-sm font-extrabold text-[#308030] transition hover:text-[#1b5c2a]"
        >
          <span aria-hidden>←</span>
          All posts
        </Link>
      ) : null}
    </div>
  );
}

export function BlogPostView({ slug, initialPost, initialSidebar, prebuiltSlugs }: Props) {
  const [state, setState] = useState<State>(
    initialPost ? { status: "ready", post: initialPost } : { status: "loading" },
  );

  useEffect(() => {
    let cancelled = false;
    fetchBlogPost(slug, { cache: "no-store" }).then((post) => {
      if (cancelled) return;
      if (post) {
        setState({ status: "ready", post });
        if (!initialPost) document.title = `${post.title} | GoQuick`;
      } else if (post === null) {
        setState({ status: "missing" });
      } else {
        setState((prev) => (prev.status === "ready" ? prev : { status: "error" }));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug, initialPost]);

  const ready = state.status === "ready";
  useEffect(() => {
    if (!ready) return;
    return startBlogReadTracking(slug);
  }, [ready, slug]);

  const related = state.status === "ready" ? (state.post.related ?? []) : [];
  const sidebar = (
    <BlogSidebar initialData={initialSidebar} related={related} prebuiltSlugs={prebuiltSlugs} />
  );

  if (state.status !== "ready") {
    return (
      <BlogLayout sidebar={sidebar}>
        <StatusCard status={state.status} />
      </BlogLayout>
    );
  }

  const { post } = state;
  const imgSrc = blogImageSrc(post.image);
  const tags = post.tags ?? [];

  return (
    <BlogLayout sidebar={sidebar}>
      <article className="home2-service-card overflow-hidden bg-white">
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

          {post.category ? (
            <Link
              href={blogFilterHref({ category: post.category })}
              className="mt-5 block w-fit font-montserrat text-xs font-extrabold uppercase tracking-[0.14em] text-[#308030] hover:text-[#1b5c2a]"
            >
              {post.category}
            </Link>
          ) : null}

          <h1
            className={`${post.category ? "mt-2" : "mt-5"} font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-4xl`}
          >
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {post.published_at ? (
              <time className="home2-street-tag bg-[#e8f4ea] text-[#0d2412]" dateTime={post.published_at}>
                {formatBlogDate(post.published_at)}
              </time>
            ) : null}
            {post.author?.name ? (
              <span className="home2-street-tag bg-[#308030] text-[#ffe600]">{post.author.name}</span>
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

          {tags.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2 border-t-2 border-[#0d2412]/10 pt-6" aria-label="Tags">
              {tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={blogFilterHref({ tag })}
                    className="inline-flex rounded-full border-2 border-[#0d2412] px-3 py-1 font-montserrat text-xs font-extrabold text-[#0d2412] transition hover:bg-[#ffe600]"
                  >
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </article>
    </BlogLayout>
  );
}

/** Client-side reader for /blog/read/?slug=…; must be rendered inside <Suspense>. */
export function BlogReadView(props: Omit<Props, "slug" | "initialPost">) {
  const slug = useSearchParams().get("slug")?.trim() ?? "";
  if (!slug) {
    return (
      <BlogLayout
        sidebar={<BlogSidebar initialData={props.initialSidebar} related={[]} prebuiltSlugs={props.prebuiltSlugs} />}
      >
        <StatusCard status="missing" />
      </BlogLayout>
    );
  }
  return <BlogPostView key={slug} slug={slug} {...props} />;
}
