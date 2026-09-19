import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { Home2Cta } from "@/components/Home2Cta";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

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

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="not-found-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="not-found-heading"
            className="text-[1.65rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Page <span className="text-[#ffe600]">not found</span>
          </h1>
          <TitleSquiggle />
        </div>
      </section>

      <main className="site-container py-16 text-center sm:py-20">
        <p className="mx-auto max-w-[36ch] font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/75 sm:text-lg">
          That link doesn&apos;t exist. Head home or book an errand in Lagos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="home2-create-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22]"
          >
            Back home
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-[#0d2412] bg-white px-6 py-3 font-montserrat text-sm font-extrabold text-[#0d2412] shadow-[0_4px_0_#dbab29] transition hover:translate-y-px hover:bg-[#e8f4ea]"
          >
            See services
          </Link>
        </div>
      </main>

      <Home2Cta />
      <Home2Footer />
    </div>
  );
}
