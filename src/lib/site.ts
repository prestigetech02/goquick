const fallbackSiteUrl = "https://goquickapp.com.ng";
const fallbackWebAppUrl = "https://app.goquickapp.com.ng";

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "GoQuick",
  description:
    "GoQuick is an errand service in Lagos. Book trusted runners for pickups, deliveries, shopping, pharmacy runs, and daily tasks.",
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
  ),
  /** Buyer web app — requesters use this instead of the mobile store. */
  webAppUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_WEB_APP_URL?.trim() || fallbackWebAppUrl,
  ),
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    "https://api.goquickapp.com.ng/api/v1",
  appDownloadUrl:
    process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL?.trim() || "/",
  stores: {
    appStore:
      process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
      "https://apps.apple.com/app/goquick/id",
    playStore:
      process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() ||
      "https://play.google.com/store/apps/details?id=com.errands.marketplace",
  },
  social: {
    twitterHandle: "@goquickapp",
    whatsapp: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP?.trim() || "#",
    facebook:
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK?.trim() ||
      "https://www.facebook.com/profile.php?id=61561904180152",
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER?.trim() || "https://twitter.com/goquickapp",
    tiktok:
      process.env.NEXT_PUBLIC_SOCIAL_TIKTOK?.trim() || "https://www.tiktok.com/@goquickapp.ng",
    instagram:
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM?.trim() || "https://www.instagram.com/goquick.app",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN?.trim() || "#",
  },
  contact: {
    email: "support@goquickapp.com.ng",
    phone: "+234 (0) 906 906 3200",
  },
  /** For LocalBusiness/Service schema (address optional; areaServed helps local SEO). */
  business: {
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() || undefined,
    areaServed: process.env.NEXT_PUBLIC_BUSINESS_AREA_SERVED?.trim() || "Lagos, Nigeria",
  },
  /** Stats for the homepage stats block. Count-up animates from 0 to numericValue. */
  stats: [
    { numericValue: 10000, suffix: "+", label: "Errands completed", format: "compact" as const },
    { numericValue: 50, suffix: "+", label: "Verified runners", format: "number" as const },
    { numericValue: 500, suffix: "+", label: "Errand requesters", format: "number" as const },
  ],
};

/** Web app paths for requester CTAs */
export const webAppLinks = {
  home: () => siteConfig.webAppUrl,
  getStarted: () => `${siteConfig.webAppUrl}/signup`,
  signIn: () => `${siteConfig.webAppUrl}/login`,
  requestErrand: () => `${siteConfig.webAppUrl}/signup`,
  accountSecurity: () => `${siteConfig.webAppUrl}/profile/security`,
} as const;
