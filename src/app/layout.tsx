import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Home2CookieConsent } from "@/components/Home2CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMontserrat = Montserrat({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: "/appicon.png", type: "image/png", sizes: "32x32" },
      { url: "/appicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/appicon.png",
  },
  title: {
    default: `Errand Service in Lagos | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `Errand Service in Lagos | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      { url: "/logo.png", width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Errand Service in Lagos | ${siteConfig.name}`,
    description: siteConfig.description,
    creator: siteConfig.social.twitterHandle,
    images: ["/logo.png"],
  },
  robots:
    process.env.VERCEL_ENV === "production"
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="icon" type="image/png" href="/appicon.png" />
        <link rel="apple-touch-icon" href="/appicon.png" />
      </head>
      <body className={`${fontSans.variable} ${fontMontserrat.variable} font-sans antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()]} />
        {children}
        <Home2CookieConsent />
      </body>
    </html>
  );
}
