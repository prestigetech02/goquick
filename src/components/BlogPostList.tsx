"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  blogImageSrc,
  blogPostHref,
  fetchBlogPosts,
  formatBlogDate,
  type BlogFilters,
  type BlogPagination,
  type BlogPostSummary,
} from "@/lib/blog";

type GridProps = {
  posts: BlogPostSummary[];
  pagination: BlogPagination | null;
  prebuiltSlugs: readonly string[];
  loading?: boolean;
  emptyMessage?: string;
};

export function BlogPostGrid({ posts, pagination, prebuiltSlugs, loading, emptyMessage }: GridProps) {
  if (posts.length === 0) {
    return (
      <div className="home2-service-card mx-auto max-w-xl bg-white px-6 py-16 text-center">
        {loading ? (
          <p className="font-montserrat text-sm font-extrabold text-[#0d2412]/55">Loading posts…</p>
        ) : (
          <>
            <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Soon</span>
            <p className="mt-5 font-montserrat text-lg font-black tracking-tight text-[#308030] sm:text-xl">
              No posts yet
            </p>
            <p className="mt-2 font-montserrat text-sm font-semibold text-[#0d2412]/70">
              {emptyMessage ?? "Check back soon for tips and updates."}
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <ul className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const imgSrc = blogImageSrc(post.image);
          return (
            <li key={post.id}>
              <Link
                href={blogPostHref(post.slug, prebuiltSlugs)}
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
                      {formatBlogDate(post.published_at)}
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

      {pagination && pagination.last_page > 1 ? (
        <p className="mt-10 text-center font-montserrat text-sm font-extrabold text-[#0d2412]/55">
          Page {pagination.current_page} of {pagination.last_page}
        </p>
      ) : null}
    </>
  );
}

type ListProps = {
  initialPosts: BlogPostSummary[];
  initialPagination: BlogPagination | null;
  prebuiltSlugs: readonly string[];
};

type Result = {
  key: string;
  posts: BlogPostSummary[];
  pagination: BlogPagination | null;
};

function filterLabel(filters: BlogFilters): string | null {
  if (filters.category) return `Category: ${filters.category}`;
  if (filters.tag) return `Tag: #${filters.tag}`;
  if (filters.year) return `Archive: ${filters.year}`;
  return null;
}

/** Reads ?category / ?tag / ?year; must be rendered inside <Suspense>. */
export function BlogPostList({ initialPosts, initialPagination, prebuiltSlugs }: ListProps) {
  const searchParams = useSearchParams();
  const filters: BlogFilters = {
    category: searchParams.get("category") ?? undefined,
    tag: searchParams.get("tag") ?? undefined,
    year: searchParams.get("year") ?? undefined,
  };
  const key = JSON.stringify(filters);
  const label = filterLabel(filters);

  const [result, setResult] = useState<Result | null>(
    label ? null : { key, posts: initialPosts, pagination: initialPagination },
  );

  useEffect(() => {
    let cancelled = false;
    const current: BlogFilters = JSON.parse(key);
    fetchBlogPosts({ cache: "no-store" }, current).then((fresh) => {
      if (cancelled) return;
      setResult((prev) =>
        fresh
          ? { key, posts: fresh.posts, pagination: fresh.pagination }
          : prev?.key === key
            ? prev
            : { key, posts: [], pagination: null },
      );
    });
    return () => {
      cancelled = true;
    };
  }, [key]);

  const ready = result?.key === key;

  return (
    <>
      {label ? (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 font-montserrat">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">{label}</span>
          <Link href="/blog/" className="text-sm font-extrabold text-[#308030] hover:text-[#1b5c2a]">
            Clear filter
          </Link>
        </div>
      ) : null}
      <BlogPostGrid
        posts={ready ? result.posts : []}
        pagination={ready ? result.pagination : null}
        prebuiltSlugs={prebuiltSlugs}
        loading={!ready}
        emptyMessage={label ? "No posts match this filter yet." : undefined}
      />
    </>
  );
}
