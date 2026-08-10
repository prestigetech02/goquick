import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FluidButton } from "@/components/FluidButton";
import { OurServicesGrid } from "@/components/OurServicesGrid";
import { WhyChooseGoQuick } from "@/components/WhyChooseGoQuick";
import { GetStartedCta } from "@/components/GetStartedCta";
import { siteConfig, webAppLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GoQuick offers reliable on-demand errand services designed to save you time—fast pickups, safe deliveries, and real-time tracking.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="min-h-[60vh] pb-16 pt-24 sm:pt-28 sm:pb-20 lg:pt-32">
        <section
          aria-labelledby="services-heading"
          className="site-container grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8 xl:gap-12"
        >
          <div className="min-w-0 max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
              Our Services
            </p>
            <h1
              id="services-heading"
              className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:mt-4 sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Everyday errands,{" "}
              <span style={{ color: "var(--primary)" }}>delivered with ease.</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              {siteConfig.name} offers reliable on-demand services designed to save you time and get
              things done, so you can focus on what truly matters.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-5">
              <FluidButton href={webAppLinks.requestErrand()} variant="primary" showArrow>
                Book an Errand
              </FluidButton>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-slate-800 transition hover:text-[var(--primary)] sm:text-base"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition group-hover:border-[var(--primary)]/30"
                  aria-hidden
                >
                  <svg
                    className="ml-0.5 h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "var(--primary)" }}
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative flex min-w-0 justify-center lg:justify-end">
            <Image
              src="/services-hero.png"
              alt={`${siteConfig.name} runner delivering a package with fast, safe, reliable, and trackable service`}
              width={900}
              height={900}
              className="h-auto w-full max-w-lg object-contain sm:max-w-xl lg:max-w-none"
              priority
              sizes="(max-width: 1024px) 90vw, 55vw"
            />
          </div>
        </section>

        <OurServicesGrid />
        <WhyChooseGoQuick />
        <GetStartedCta className="mt-16 sm:mt-20 lg:mt-24" />
      </main>

      <Footer />
    </div>
  );
}
