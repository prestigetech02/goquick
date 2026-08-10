import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingPlans } from "@/components/PricingPlans";
import { HowPricingWorks } from "@/components/HowPricingWorks";
import { PricingFAQ } from "@/components/PricingFAQ";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, fair, transparent pricing from GoQuick. Whether you need something done or want to earn on your own terms, we keep it affordable.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="min-h-[60vh] pb-16 pt-24 sm:pt-28 sm:pb-20 lg:pt-32">
        <section
          aria-labelledby="pricing-heading"
          className="site-container relative overflow-hidden"
        >
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[1fr_minmax(0,28rem)_1fr] lg:gap-4 xl:gap-6">
            {/* Left visual */}
            <div
              className="pricing-hero-fade relative order-2 flex min-w-0 justify-center lg:order-1 lg:justify-start"
              style={{ animationDelay: "0.12s" }}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
                <Image
                  src="/pricing-left.png"
                  alt={`${siteConfig.name} app with packages and shopping bag`}
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 60vw, 32vw"
                />
              </div>
            </div>

            {/* Center copy */}
            <div
              className="pricing-hero-fade order-1 mx-auto max-w-xl px-2 text-center lg:order-2 lg:px-0"
              style={{ animationDelay: "0s" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-sm">
                Simple. Fair. Transparent.
              </p>
              <h1
                id="pricing-heading"
                className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:mt-5 sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl"
              >
                Pricing that works for{" "}
                <span style={{ color: "var(--primary)" }}>everyone.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
                Whether you need something done or want to earn on your own terms,{" "}
                {siteConfig.name} keeps it simple and affordable.
              </p>
            </div>

            {/* Right visual */}
            <div
              className="pricing-hero-fade relative order-3 flex min-w-0 justify-center lg:justify-end"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none">
                <Image
                  src="/pricing-right.png"
                  alt={`${siteConfig.name} runner holding a delivery package`}
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 55vw, 32vw"
                />
              </div>
            </div>
          </div>
        </section>

        <PricingPlans />
        <HowPricingWorks />
        <PricingFAQ />
      </main>

      <Footer />
    </div>
  );
}
