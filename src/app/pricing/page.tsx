import type { Metadata } from "next";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { Home2Cta } from "@/components/Home2Cta";
import { PricingPlans } from "@/components/PricingPlans";
import { HowPricingWorks } from "@/components/HowPricingWorks";
import { PricingFAQ, PRICING_FAQS } from "@/components/PricingFAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pricing in Lagos | Pay Per Errand",
  description:
    "Pay per errand with GoQuick in Lagos. No monthly fees for requesters. Free for runners to join. Transparent service fees.",
  path: "/pricing",
});

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44"
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 10 C18 2 28 12 44 8 C60 4 70 12 86 7 C102 2 112 12 128 8 C144 4 156 11 178 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <JsonLd
        data={[
          faqJsonLd(PRICING_FAQS),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="pricing-heading"
            className="text-[1.65rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Simple <span className="text-[#ffe600]">pricing</span>
          </h1>
          <TitleSquiggle />
        </div>
      </section>

      <PricingPlans />
      <HowPricingWorks />
      <PricingFAQ />
      <Home2Cta />
      <Home2Footer />
    </div>
  );
}
