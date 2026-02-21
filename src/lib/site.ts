const fallbackSiteUrl = "https://goquickapp.com.ng";

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "GoQuick",
  description:
    "GoQuick helps you book trusted runners for pickups, deliveries, and daily tasks across your city.",
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
  ),
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    "https://api.goquickapp.com.ng/v1",
  appDownloadUrl:
    process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL?.trim() || "/",
  social: {
    twitterHandle: "@goquickapp",
    whatsapp: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP?.trim() || "#",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK?.trim() || "#",
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER?.trim() || "https://twitter.com/goquickapp",
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK?.trim() || "#",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM?.trim() || "#",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN?.trim() || "#",
  },
  contact: {
    email: "support@goquickapp.com.ng",
    phone: "+234 (0) 906 906 3200",
  },
};
