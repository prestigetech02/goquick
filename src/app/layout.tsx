import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    default: `Fast, Trusted Errand Delivery | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | Fast, Trusted Errand Delivery`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.siteUrl}/appicon.png`, width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Fast, Trusted Errand Delivery`,
    description: siteConfig.description,
    creator: siteConfig.social.twitterHandle,
    images: [`${siteConfig.siteUrl}/appicon.png`],
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/appicon.png" />
        <link rel="apple-touch-icon" href="/appicon.png" />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
