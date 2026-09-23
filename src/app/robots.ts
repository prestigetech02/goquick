import type { MetadataRoute } from "next";
import { isIndexableProduction, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      isIndexableProduction
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
