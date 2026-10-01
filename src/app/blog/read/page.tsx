import type { Metadata } from "next";
import { Suspense } from "react";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { BlogHero } from "@/components/BlogHero";
import { BlogReadView } from "@/components/BlogPostView";
import { fetchBlogSidebar, fetchPrebuiltSlugs } from "@/lib/blog";

// Reader for posts published after the last static build (no /blog/[slug]/ page exists yet).
export const metadata: Metadata = {
  title: "Blog",
  robots: { index: false, follow: true },
};

export default async function BlogReadPage() {
  const [sidebar, prebuiltSlugs] = await Promise.all([
    fetchBlogSidebar({ next: { revalidate: 60 } }),
    fetchPrebuiltSlugs({ next: { revalidate: 60 } }),
  ]);

  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />
      <BlogHero />

      <main className="site-container py-12 sm:py-16 lg:py-20">
        <Suspense>
          <BlogReadView initialSidebar={sidebar} prebuiltSlugs={prebuiltSlugs} />
        </Suspense>
      </main>

      <Home2Footer />
    </div>
  );
}
