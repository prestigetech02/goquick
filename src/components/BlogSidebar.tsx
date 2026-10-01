"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  blogFilterHref,
  blogImageSrc,
  blogPostHref,
  fetchBlogSidebar,
  formatBlogDate,
  type BlogPostSummary,
  type BlogSidebarData,
} from "@/lib/blog";

type Props = {
  initialData: BlogSidebarData | null;
  related: BlogPostSummary[];
  prebuiltSlugs: readonly string[];
};

function SidebarSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="home2-service-card bg-white p-5">
      <h2 className="font-montserrat text-base font-black tracking-tight text-[#308030]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CountBadge({ count }: { count: number }) {
  return (
    <span className="rounded-full bg-[#e8f4ea] px-2 py-0.5 text-xs font-extrabold text-[#0d2412]/70">
      {count}
    </span>
  );
}

function tagSizeClass(count: number, max: number): string {
  if (max <= 1) return "text-xs";
  const ratio = (count - 1) / (max - 1);
  if (ratio > 0.66) return "text-base";
  if (ratio > 0.33) return "text-sm";
  return "text-xs";
}

export function BlogSidebar({ initialData, related, prebuiltSlugs }: Props) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let cancelled = false;
    fetchBlogSidebar({ cache: "no-store" }).then((fresh) => {
      if (!cancelled && fresh) setData(fresh);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = data?.categories ?? [];
  const tags = data?.tags ?? [];
  const archives = data?.archives ?? [];
  const maxTagCount = Math.max(1, ...tags.map((t) => t.count));

  return (
    <aside className="flex min-w-0 flex-col gap-6 font-montserrat" aria-label="Blog sidebar">
      {categories.length > 0 ? (
        <SidebarSection title="Categories">
          <ul className="flex flex-col gap-1">
            {categories.map((c) => (
              <li key={c.name}>
                <Link
                  href={blogFilterHref({ category: c.name })}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm font-bold text-[#0d2412] transition hover:bg-[#e8f4ea] hover:text-[#1b5c2a]"
                >
                  <span className="truncate">{c.name}</span>
                  <CountBadge count={c.count} />
                </Link>
              </li>
            ))}
          </ul>
        </SidebarSection>
      ) : null}

      {tags.length > 0 ? (
        <SidebarSection title="Tags">
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t.name}>
                <Link
                  href={blogFilterHref({ tag: t.name })}
                  title={`${t.count} post${t.count === 1 ? "" : "s"}`}
                  className={`inline-flex rounded-full border-2 border-[#0d2412] bg-white px-3 py-1 font-extrabold text-[#0d2412] transition hover:bg-[#ffe600] ${tagSizeClass(t.count, maxTagCount)}`}
                >
                  #{t.name}
                </Link>
              </li>
            ))}
          </ul>
        </SidebarSection>
      ) : null}

      {archives.length > 0 ? (
        <SidebarSection title="Archives">
          <ul className="flex flex-col gap-1">
            {archives.map((a) => (
              <li key={a.year}>
                <Link
                  href={blogFilterHref({ year: String(a.year) })}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm font-bold text-[#0d2412] transition hover:bg-[#e8f4ea] hover:text-[#1b5c2a]"
                >
                  <span>{a.year}</span>
                  <CountBadge count={a.count} />
                </Link>
              </li>
            ))}
          </ul>
        </SidebarSection>
      ) : null}

      {related.length > 0 ? (
        <SidebarSection title="Related posts">
          <ul className="flex flex-col gap-4">
            {related.map((post) => {
              const imgSrc = blogImageSrc(post.image);
              return (
                <li key={post.id}>
                  <Link href={blogPostHref(post.slug, prebuiltSlugs)} className="group flex gap-3">
                    {imgSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded-lg border-2 border-[#0d2412] object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-16 w-16 shrink-0 rounded-lg border-2 border-[#0d2412] bg-[color-mix(in_srgb,#308030_16%,white)]" />
                    )}
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-sm font-black leading-snug text-[#0d2412] transition group-hover:text-[#1b5c2a]">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#0d2412]/60">
                        {[formatBlogDate(post.published_at), post.author?.name].filter(Boolean).join(" · ")}
                      </p>
                      {post.category ? (
                        <p className="mt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#308030]">
                          {post.category}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SidebarSection>
      ) : null}
    </aside>
  );
}
