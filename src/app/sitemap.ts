import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const STATIC_PAGES: { url: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { url: "", changeFrequency: "weekly", priority: 1 },
  { url: "about", changeFrequency: "monthly", priority: 0.9 },
  { url: "contact", changeFrequency: "monthly", priority: 0.9 },
  { url: "careers", changeFrequency: "weekly", priority: 0.9 },
  { url: "how-it-works", changeFrequency: "monthly", priority: 0.9 },
  { url: "faq", changeFrequency: "monthly", priority: 0.9 },
  { url: "blog", changeFrequency: "weekly", priority: 0.8 },
  { url: "privacy", changeFrequency: "yearly", priority: 0.4 },
  { url: "terms", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  return STATIC_PAGES.map(({ url, changeFrequency, priority }) => ({
    url: url ? `${base}/${url}` : base,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
