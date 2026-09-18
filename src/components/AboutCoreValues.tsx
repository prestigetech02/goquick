import Link from "next/link";
import { webAppLinks } from "@/lib/site";

const values = [
  {
    n: "01",
    tag: "Speed",
    title: "Done today, not someday",
    copy: "If it can move now, it should. We treat every errand like your time is the most expensive thing in the room.",
    tagClass: "bg-[#308030] text-[#ffe600]",
  },
  {
    n: "02",
    tag: "Trust",
    title: "See it. Believe it.",
    copy: "Verified runners, live tracking, and a clear trail from pickup to done. You should never have to wonder where it went.",
    tagClass: "bg-[#0d2412] text-[#ffe600]",
  },
  {
    n: "03",
    tag: "Fairness",
    title: "No funny numbers",
    copy: "Honest prices for you. Fair earnings for runners. The platform only works when both sides leave feeling looked after.",
    tagClass: "bg-[#e23d28] text-white",
  },
  {
    n: "04",
    tag: "Heart",
    title: "Built for real life",
    copy: "Traffic, queues, last-minute plans. We build for the city you actually live in, not a polished version of it.",
    tagClass: "bg-[#f08a24] text-[#1a2e12]",
  },
] as const;

function TitleSquiggle() {
  return (
    <svg
      className="mt-3 w-40 text-[#f0b429] sm:w-52"
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

export function AboutCoreValues() {
  return (
    <section
      className="relative overflow-hidden bg-[#fff6d8] text-[#0d2412]"
      id="core-values"
      aria-labelledby="about-values-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-12">
          <div className="max-w-xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Core values</span>
            <h2
              id="about-values-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
            >
              The way we
              <br />
              get things done
            </h2>
            <TitleSquiggle />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:col-span-2">
            {values.map((value) => (
              <li key={value.title}>
                <article
                  tabIndex={0}
                  className="home2-service-card home2-flat-card flex h-full flex-col p-5 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`home2-street-tag ${value.tagClass}`}>{value.tag}</span>
                    <span className="font-montserrat text-sm font-black tracking-tight text-[#0d2412]/35">
                      {value.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
                    {value.copy}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row lg:col-start-2 lg:row-start-1 lg:mt-0 lg:w-auto lg:shrink-0">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-[#0d2412] bg-white px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#0d2412] shadow-[0_3px_0_#0d2412] transition hover:translate-y-px hover:bg-[#e8f4ea] hover:shadow-[0_2px_0_#0d2412] sm:px-7 sm:text-base"
            >
              Join Us
              <span aria-hidden>→</span>
            </Link>
            <a
              href={webAppLinks.requestErrand()}
              className="home2-create-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] sm:px-7 sm:text-base"
            >
              Create errand
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
