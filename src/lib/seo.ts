import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const OG_IMAGE = "/logo.png";

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return `${base}${withSlash.endsWith("/") ? withSlash : `${withSlash}/`}`;
}

export function socialSameAs(): string[] {
  return [
    siteConfig.social.facebook,
    siteConfig.social.twitter,
    siteConfig.social.instagram,
    siteConfig.social.tiktok,
    siteConfig.social.linkedin,
  ].filter((href): href is string => Boolean(href) && href !== "#");
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  authors,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  type?: "website" | "article";
  publishedTime?: string | null;
  authors?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image || OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_NG",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && authors?.length ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.social.twitterHandle,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function organizationJsonLd() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl(OG_IMAGE),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    sameAs: socialSameAs(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
      ...(siteConfig.business.address ? { streetAddress: siteConfig.business.address } : {}),
    },
  };
}

export function localBusinessJsonLd() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    image: absoluteUrl(OG_IMAGE),
    logo: absoluteUrl("/logo.png"),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: siteConfig.business.areaServed || "Lagos, Nigeria",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
      ...(siteConfig.business.address ? { streetAddress: siteConfig.business.address } : {}),
    },
    sameAs: socialSameAs(),
    parentOrganization: { "@id": `${url}#organization` },
  };
}

export function websiteJsonLd() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    inLanguage: "en-NG",
    publisher: { "@id": `${url}#organization` },
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd() {
  const url = absoluteUrl("/services");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoQuick errand services",
    url,
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: {
      "@type": "City",
      name: siteConfig.business.areaServed || "Lagos, Nigeria",
    },
    serviceType: [
      "Pickup and drop off",
      "Shopping",
      "Pharmacy runs",
      "Queue services",
      "Food errands",
      "Domestic help",
      "Custom errands",
    ],
    description:
      "On-demand errand runners in Lagos for pickups, deliveries, shopping, pharmacy runs, queues, and more.",
  };
}
