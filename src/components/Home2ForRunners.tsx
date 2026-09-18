import Image from "next/image";
import { siteConfig } from "@/lib/site";

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

export function Home2ForRunners() {
  return (
    <section
      className="relative overflow-x-clip bg-[#e8f4ea] text-[#0d2412]"
      id="for-runners"
      aria-labelledby="home2-runners-heading"
    >
      <div className="site-container relative grid items-stretch gap-10 py-16 sm:py-20 lg:min-h-[80vh] lg:grid-cols-2 lg:gap-12 lg:py-0">
        <div className="relative z-[1] flex min-h-[22rem] items-end justify-center sm:min-h-[28rem] lg:min-h-[80vh]">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-screen bg-[#0d2412] lg:block"
            aria-hidden
          />
          <div className="relative flex h-full w-full items-end justify-center bg-[#0d2412] px-4 pt-6 sm:px-6 lg:bg-transparent lg:px-2 lg:pt-0">
            <Image
              src="/runner.png"
              alt={`${siteConfig.name} runner ready to take an errand`}
              width={1254}
              height={1254}
              className="relative z-[1] h-auto w-full max-w-[360px] object-contain object-bottom sm:max-w-[440px] lg:max-w-[520px]"
              sizes="(min-width: 1024px) 36vw, 80vw"
            />
          </div>
        </div>

        <div className="relative z-[1] max-w-xl py-2 lg:py-16">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">For runners</span>
          <h2
            id="home2-runners-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.35rem]"
          >
            Got some free time?
            <br />
            to run errands?
          </h2>
          <TitleSquiggle />
          <p className="mt-6 max-w-[34ch] font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/80 sm:text-lg">
            Get people's errands done at your pace to earn some buck cos bills can&apos;t wait. Download
            the runner app now.
          </p>
          <a
            href={siteConfig.stores.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block transition hover:opacity-90"
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
  );
}
