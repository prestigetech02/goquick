import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCtaButtons } from "@/components/FluidButton";
import { Container } from "@/components/Container";
import { WhyGoQuick } from "@/components/WhyGoQuick";
import { GetStartedCta } from "@/components/GetStartedCta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Reliable Runners For Everyday Tasks",
  description:
    "Get errands done faster with GoQuick. Trusted runners, live tracking, secure payment from pickup to delivery.",
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
    ...(siteConfig.business.address && { address: { "@type": "PostalAddress", addressLocality: siteConfig.business.address } }),
  };

  return (
    <div className="min-h-screen min-w-0 bg-white text-slate-900">
      <Header />

      <main className="flex min-w-0 flex-col gap-12 pt-14 pb-16 sm:gap-16 sm:pt-16 sm:pb-20 md:gap-24">
        <div className="relative w-full min-w-0 overflow-hidden pt-8 pb-0 sm:pt-10 sm:pb-0">
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 40%, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 50%), linear-gradient(180deg, color-mix(in srgb, var(--primary) 4%, white) 0%, white 100%)",
            }}
          />
          <div
            className="absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-[0.07] sm:h-96 sm:w-96"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <div
            className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full opacity-[0.06] sm:h-80 sm:w-80"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] sm:h-64 sm:w-64"
            style={{ backgroundColor: "var(--primary)" }}
          />

          <Container
            as="section"
            id="home"
            className="relative grid gap-8 pb-4 pt-6 sm:grid-cols-2 sm:gap-12 sm:pb-6 sm:pt-8 md:gap-16 md:pb-8 md:pt-10"
          >
            <div className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-7">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold sm:text-sm"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)",
                  color: "var(--primary)",
                }}
              >
                <svg
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13 2 4.8 13.2c-.3.4 0 1 .5 1H11l-1 7.8c-.1.6.7 1 1.1.5L19.2 10c.3-.4 0-1-.5-1H13l1-6.5c.1-.6-.7-1-1-.5z" />
                </svg>
                Your Task, Our Priority
              </span>

              <h1 className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Get things done, the{" "}
                <span style={{ color: "var(--primary)" }}>{siteConfig.name}</span>{" "}
                way.
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                From pick-ups to drop-offs and everything in-between. We connect you with
                trusted runners to get your errands done quickly and safely.
              </p>

              <HeroCtaButtons />
            </div>
            <div className="relative flex items-center justify-center overflow-visible sm:justify-center lg:justify-end">
              <Image
                src="/hero-new.png"
                alt="GoQuick app showing live errand tracking on a phone"
                width={720}
                height={820}
                className="h-auto w-full max-w-[22rem] object-contain object-center sm:max-w-[32rem] sm:w-full lg:max-w-[38rem] lg:translate-x-2"
                priority
                sizes="(max-width: 640px) 90vw, 50vw"
              />
            </div>
          </Container>
        </div>

        <WhyGoQuick />

        <GetStartedCta />
      </main>

      <Footer />

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
