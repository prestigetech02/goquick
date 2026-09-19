import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  return {
    rules: [
      isProduction
        ? {
            userAgent: "*",
            allow: "/",
            disallow: ["/home2/"],
          }
        : {
            userAgent: "*",
            disallow: "/",
          },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
