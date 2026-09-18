import { siteConfig, webAppLinks } from "@/lib/site";

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

export function Home2Cta() {
  return (
    <section
      className="relative overflow-hidden bg-[#0d2412] text-[#e8f4ea]"
      id="get-started"
      aria-labelledby="home2-cta-heading"
    >
      <div className="site-container py-10 text-center sm:py-12 lg:py-14">
        <h2
          id="home2-cta-heading"
          className="mx-auto max-w-[16ch] font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:max-w-[18ch] sm:text-5xl lg:text-[3.35rem]"
        >
          Want to get an errand done faster?
        </h2>
        <p className="mx-auto mt-5 max-w-[28ch] font-montserrat text-lg font-extrabold leading-snug text-[#ffe600] sm:text-2xl">
          Or earn while running errands.
        </p>
        <TitleSquiggle />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          <a
            href={webAppLinks.requestErrand()}
            className="inline-flex items-center gap-2 rounded-full bg-[#308030] px-6 py-3.5 font-montserrat text-sm font-extrabold text-white shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#286828] hover:shadow-[0_3px_0_#ffe600] sm:px-7 sm:text-base"
          >
            Create errand
            <span aria-hidden>→</span>
          </a>
          <a
            href={siteConfig.stores.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-[#308030] bg-transparent px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#308030]/15 hover:shadow-[0_3px_0_#ffe600] sm:px-7 sm:text-base"
          >
            Download runner app
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
