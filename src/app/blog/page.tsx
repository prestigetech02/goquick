import type { Metadata } from "next";
import { Suspense } from "react";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { BlogPostGrid, BlogPostList } from "@/components/BlogPostList";
import { JsonLd } from "@/components/JsonLd";
import { fetchBlogPosts } from "@/lib/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Errand Tips in Lagos",
  description:
    "News, tips, and product updates from GoQuick. Learn about errands, runners, and everyday tasks in Lagos.",
  path: "/blog",
});

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
  const data = await fetchBlogPosts({ next: { revalidate: 60 } });
  const initialPosts = data?.posts ?? [];
  const initialPagination = data?.pagination ?? null;
  const prebuiltSlugs = initialPosts.map((p) => p.slug);

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
        <Suspense
          fallback={
            <BlogPostGrid posts={initialPosts} pagination={initialPagination} prebuiltSlugs={prebuiltSlugs} />
          }
        >
          <BlogPostList
            initialPosts={initialPosts}
            initialPagination={initialPagination}
            prebuiltSlugs={prebuiltSlugs}
          />
        </Suspense>
      </main>

      <Home2Footer />
    </div>
  );
}
