import type { Metadata } from "next";
import Image from "next/image";
import { Home2Header } from "@/components/Home2Header";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Footer } from "@/components/Home2Footer";
import { RunnersFeatures } from "@/components/RunnersFeatures";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Become a GoQuick Runner in Lagos",
  description:
    "Download the GoQuick runner app, get verified, pick errands around you in Lagos, and earn extra at your own pace.",
  path: "/runners",
});

function TitleSquiggle() {
  return (
    <svg
      className="mt-3 w-40 text-[#ffe600] sm:w-52"
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

export default function RunnersPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Runners", path: "/runners" },
        ])}
      />
      <Home2Header />

      <section
        className="relative overflow-x-clip bg-[#e8f4ea]"
        id="runners-hero"
        aria-labelledby="runners-hero-heading"
      >
        <div className="site-container relative grid min-h-[100svh] items-stretch gap-8 pt-28 sm:gap-10 sm:pt-32 lg:grid-cols-2 lg:gap-0 lg:pt-0">
          <div className="relative z-[1] flex min-h-[24rem] items-end justify-center bg-[#0d2412] sm:min-h-[32rem] lg:min-h-[100svh]">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-screen bg-[#0d2412] lg:block"
              aria-hidden
            />
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden px-4 pt-8 sm:px-6 lg:px-2 lg:pt-0">
              <Image
                src="/runner.png"
                alt={`${siteConfig.name} runner ready to take an errand`}
                width={1254}
                height={1254}
                priority
                className="relative z-[1] h-auto w-full max-w-[400px] translate-y-[12%] object-contain object-bottom sm:max-w-[520px] sm:translate-y-[14%] lg:max-w-[640px] lg:translate-y-[16%]"
                sizes="(min-width: 1024px) 42vw, 80vw"
              />
            </div>
          </div>

          <div className="relative z-[1] flex max-w-xl flex-col justify-start bg-[#e8f4ea] pb-16 pt-4 lg:justify-center lg:pb-12 lg:pl-12 lg:pt-36">
            <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">For runners</span>
            <h1
              id="runners-hero-heading"
              className="mt-5 font-montserrat text-[2.85rem] font-black leading-[0.92] tracking-tight text-[#308030] sm:text-6xl md:text-7xl lg:text-[5rem]"
            >
              Become a
              <br />
              GoRunner
            </h1>
            <TitleSquiggle />
            <p className="mt-6 max-w-[34ch] font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/80 sm:text-lg">
              Run errands at your pace and earn extra. Download the app, get verified, and pick jobs
              around you, bills can&apos;t wait.
            </p>
            <a
              href={siteConfig.stores.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block w-fit transition hover:opacity-90"
              aria-label="Get the GoQuick runner app on Google Play"
            >
              <Image
                src="/playstore.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </a>
          </div>
        </div>
      </section>

      <RunnersFeatures />
      <Home2Cta />

      <Home2Footer />
    </div>
  );
}
