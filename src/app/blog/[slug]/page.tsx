import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { BlogHero } from "@/components/BlogHero";
import { BlogPostView } from "@/components/BlogPostView";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { blogImageSrc, fetchBlogPost, fetchBlogSidebar, fetchPrebuiltSlugs } from "@/lib/blog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

// Required for "output: export" — must be exported and return at least one param set (Next.js 16).
// Posts published after the build are served client-side by /blog/read/.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await fetchPrebuiltSlugs({ cache: "no-store" });
  if (slugs.length === 0) return [{ slug: "_" }];
  return slugs.map((slug) => ({ slug }));
}

export const dynamic = "force-static";

const getPost = (slug: string) => fetchBlogPost(slug, { next: { revalidate: 60 } });

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post" };
  const image = blogImageSrc(post.image);
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
  const [post, sidebar, prebuiltSlugs] = await Promise.all([
    getPost(slug),
    fetchBlogSidebar({ next: { revalidate: 60 } }),
    fetchPrebuiltSlugs({ next: { revalidate: 60 } }),
  ]);

  if (!post) notFound();

  const imgSrc = blogImageSrc(post.image);
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
      <BlogHero />

      <main className="site-container py-12 sm:py-16 lg:py-20">
        <BlogPostView
          slug={post.slug}
          initialPost={post}
          initialSidebar={sidebar}
          prebuiltSlugs={prebuiltSlugs}
        />
      </main>

      <Home2Footer />
    </div>
  );
}
