import type { Metadata } from "next";
import Image from "next/image";
import { Home2Header } from "@/components/Home2Header";
import { Home2Faq } from "@/components/Home2Faq";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Footer } from "@/components/Home2Footer";
import { OurServicesGrid } from "@/components/OurServicesGrid";
import { WhyChooseGoQuick } from "@/components/WhyChooseGoQuick";
import { webAppLinks } from "@/lib/site";
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Errand Services in Lagos | Pickup, Shopping, Queues",
  description:
    "GoQuick errand services in Lagos: pickup and drop off, shopping, pharmacy runs, queues, food errands, domestics, and custom tasks.",
  path: "/services",
});

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-4 w-44 text-[#ffe600] sm:w-56"
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          serviceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <Home2Header />

      <section
        className="relative min-h-[100svh] overflow-hidden bg-[#8ec8ea]"
        aria-labelledby="services-hero-heading"
      >
        <Image
          src="/services-hero-bg.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#c8e8f6]/75 to-transparent sm:h-56"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center px-5 pb-[34vh] pt-28 text-center font-montserrat sm:px-8 sm:pb-[38vh] sm:pt-32 md:pt-36">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Our services</span>
          <h1
            id="services-hero-heading"
            className="mt-5 text-[2.35rem] font-black leading-[0.95] tracking-tight text-[#0d2412] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Everyday errands in Lagos,
            <br />
            delivered with <span className="text-[#308030]">ease</span>
          </h1>
          <TitleSquiggle />
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4">
            <a
              href={webAppLinks.requestErrand()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#308030] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#286828] hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              Book an errand
              <span aria-hidden>→</span>
            </a>
            <a
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-[#0d2412] bg-white/80 px-6 py-3.5 text-sm font-extrabold text-[#0d2412] shadow-[0_4px_0_#ffe600] backdrop-blur-[2px] transition hover:translate-y-px hover:bg-white hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              See pricing
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <main>
        <OurServicesGrid />
        <WhyChooseGoQuick />
        <Home2Faq />
        <Home2Cta />
      </main>

      <Home2Footer />
    </div>
  );
}
