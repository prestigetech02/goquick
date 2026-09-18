import type { Metadata } from "next";
import Image from "next/image";
import { Home2CookieConsent } from "@/components/Home2CookieConsent";
import { Home2Footer } from "@/components/Home2Footer";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Customize } from "@/components/Home2Customize";
import { Home2Header } from "@/components/Home2Header";
import { Home2Hero } from "@/components/Home2Hero";
import { Home2Faq } from "@/components/Home2Faq";
import { Home2ForRunners } from "@/components/Home2ForRunners";
import { Home2Testimonials } from "@/components/Home2Testimonials";
import { Home2HowItWorks } from "@/components/Home2HowItWorks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Reliable Runners For Everyday Tasks",
  description:
    "Get errands done faster with GoQuick. Trusted runners, live tracking, and secure payment from pickup to delivery.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    ...(siteConfig.contact.phone && { telephone: siteConfig.contact.phone }),
    ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
    areaServed: siteConfig.business.areaServed,
    ...(siteConfig.business.address && {
      address: { "@type": "PostalAddress", addressLocality: siteConfig.business.address },
    }),
  };

  return (
    <div className="min-h-screen min-w-0 bg-[#e8f4ea] text-slate-900">
      <Home2Header />

      <section className="relative min-h-[100svh] overflow-hidden" id="home" aria-label="Hero">
        <Image
          src="/home2-hero-bg.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_90%] translate-y-[14%] scale-[1.12] sm:object-[center_94%] sm:translate-y-[16%]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#eaf6ec]/80 to-transparent"
          aria-hidden
        />
        <Home2Hero />
      </section>

      <Home2Customize />
      <Home2HowItWorks />
      <Home2ForRunners />
      <Home2Testimonials />
      <Home2Faq />
      <Home2Cta />

      <Home2Footer />
      <Home2CookieConsent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </div>
  );
}
