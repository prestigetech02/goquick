import type { Metadata } from "next";
import { Home2Header } from "@/components/Home2Header";
import { AboutCoreValues } from "@/components/AboutCoreValues";
import { AboutBrains } from "@/components/AboutBrains";
import { Home2Faq } from "@/components/Home2Faq";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Footer } from "@/components/Home2Footer";
import { siteConfig, webAppLinks } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About | Errand Platform in Lagos",
  description:
    "GoQuick connects you with verified runners in Lagos for errands, deliveries, and daily tasks so you can reclaim your time.",
  path: "/about",
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

function FlatCloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 130"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M58 108 C24 108 10 82 28 64 C18 36 54 16 80 34 C96 10 140 8 158 34 C194 20 228 46 216 74 C240 84 236 108 204 108 Z"
        fill="#fff6d8"
        stroke="#0d2412"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030]"
        aria-labelledby="about-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_18%,color-mix(in_srgb,#0d2412_22%,transparent),transparent_70%)]"
          aria-hidden
        />
        <FlatCloud className="pointer-events-none absolute -left-24 -top-6 w-56 sm:-left-28 sm:-top-8 sm:w-72 lg:-left-32 lg:-top-10 lg:w-80" />
        <FlatCloud className="pointer-events-none absolute -bottom-10 right-[12%] w-52 -scale-x-100 sm:-bottom-12 sm:right-[16%] sm:w-64 lg:-bottom-14 lg:right-[18%] lg:w-80" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center font-montserrat sm:min-h-[88svh] sm:px-8 sm:pb-20 sm:pt-32 md:pt-36">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">About</span>
          <h1
            id="about-hero-heading"
            className="mt-5 text-[2.35rem] font-black leading-[0.95] tracking-tight text-[#fff6d8] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Why Go when we can
            <br />
            <span className="text-[#ffe600]">GOQuick</span>
          </h1>
          <TitleSquiggle />
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4">
            <a
              href={webAppLinks.requestErrand()}
              className="home2-create-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0d2412] px-6 py-3.5 text-sm font-extrabold text-[#ffe600] transition hover:bg-[#08180c] sm:w-auto sm:px-7 sm:text-base"
            >
              Create errand
              <span aria-hidden>→</span>
            </a>
            <a
              href={siteConfig.stores.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-[#0d2412] bg-[#fff6d8] px-6 py-3.5 text-sm font-extrabold text-[#0d2412] shadow-[0_3px_0_#0d2412] transition hover:translate-y-px hover:bg-white hover:shadow-[0_2px_0_#0d2412] sm:w-auto sm:px-7 sm:text-base"
            >
              Download runner app
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <AboutCoreValues />
      <AboutBrains />
      <Home2Faq />
      <Home2Cta />
      <Home2Footer />
    </div>
  );
}
