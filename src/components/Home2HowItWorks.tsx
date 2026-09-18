import Image from "next/image";
import { webAppLinks } from "@/lib/site";

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-40 text-[#f0b429] sm:w-52"
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

function StreetTag({ label }: { label: string }) {
  return <span className="home2-street-tag bg-[#308030] text-[#ffe600]">{label}</span>;
}

const steps = [
  {
    n: "01",
    title: "Create it",
    description: "Tell us what you need. A few taps and you’re set.",
    image: "/how-it-works/step1.png",
  },
  {
    n: "02",
    title: "We match you",
    description: "A verified runner picks it up around you.",
    image: "/how-it-works/step2.png",
  },
  {
    n: "03",
    title: "Track it",
    description: "Watch the errand live, from pickup to drop.",
    image: "/how-it-works/step-3.png",
  },
  {
    n: "04",
    title: "Done",
    description: "It lands. You confirm. Payment releases.",
    image: "/how-it-works/step-4.png",
  },
] as const;

export function Home2HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-[#fff6d8] text-[#0d2412]"
      id="how-it-works"
      aria-labelledby="home2-how-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <StreetTag label="How it works" />
          <h2
            id="home2-how-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            Getting things done
            <br />
            is super easy!
          </h2>
          <TitleSquiggle />
          <p className="mx-auto mt-5 max-w-[34ch] font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/75 sm:text-lg">
            Just a few taps and your errand is on the way.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <li key={step.title} className="home2-service-card flex flex-col overflow-hidden bg-white">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#0d2412]">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain"
                />
                <span className="home2-street-tag absolute left-3 top-3 bg-[#e8f4ea] text-[#0d2412]">
                  {step.n}
                </span>
              </div>
              <div className="px-3.5 py-4 sm:px-4 sm:py-5">
                <h3 className="font-montserrat text-base font-black tracking-tight sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-montserrat text-[0.8rem] font-semibold leading-snug text-[#0d2412]/70 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={webAppLinks.requestErrand()}
            className="home2-create-cta inline-flex items-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] sm:px-7 sm:text-base"
          >
            Create errand
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
