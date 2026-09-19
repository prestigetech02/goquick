"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";
import { webAppLinks } from "@/lib/site";
import {
  DomesticsArt,
  FoodErrandsArt,
  GroceryArt,
  PharmacyArt,
  PickupDropoffArt,
  QueueForMeArt,
} from "@/components/home2-service-arts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function TitleSquiggle() {
  return (
    <svg
      className="mt-2 w-40 text-[#f0b429] sm:w-52"
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

function StreetTag({
  label,
  className,
  tone = "green",
}: {
  label: string;
  className?: string;
  tone?: "green" | "tomato" | "orange" | "cream" | "ink";
}) {
  const tones = {
    green: "bg-[#1b5c2a] text-[#ffedb3]",
    tomato: "bg-[#e23d28] text-white",
    orange: "bg-[#f08a24] text-[#1a2e12]",
    cream: "bg-white text-[#1b5c2a]",
    ink: "bg-[#0d2412] text-[#ffedb3]",
  } as const;

  return (
    <span className={`home2-street-tag ${tones[tone]} ${className ?? ""}`.trim()}>
      {label}
    </span>
  );
}

type ServiceCardData = {
  title: string;
  description: string;
  Art: () => ReactNode;
};

const cardPairs: ServiceCardData[][] = [
  [
    {
      title: "Pickup and Drop off",
      description: "Collect it from anywhere and send it where it needs to go. Both ends, one errand.",
      Art: PickupDropoffArt,
    },
    {
      title: "Queue for me",
      description: "Banks, offices, food spots. A runner stands in line so you don’t have to.",
      Art: QueueForMeArt,
    },
  ],
  [
    {
      title: "Pharmacy runs",
      description: "Prescriptions, the chemist, whatever you need from the counter. We go for you.",
      Art: PharmacyArt,
    },
    {
      title: "Grocery shopping",
      description: "Send the list. A runner shops the market or store and brings it home.",
      Art: GroceryArt,
    },
  ],
  [
    {
      title: "Domestics",
      description: "Cleaning, laundry, the house stuff that never ends. Hand it off.",
      Art: DomesticsArt,
    },
    {
      title: "Food Errands",
      description: "From the restaurant, the buka, or a home cook. Hot food, to your door.",
      Art: FoodErrandsArt,
    },
  ],
];

function ServiceCard({ title, description, Art }: ServiceCardData) {
  return (
    <article className="home2-service-card flex h-full flex-col overflow-hidden bg-white">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Art />
      </div>
      <div className="flex flex-col px-3 py-3 sm:px-3.5 sm:py-3.5">
        <h3 className="font-montserrat text-[0.95rem] font-black leading-tight tracking-tight text-[#0d2412] sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 font-montserrat text-[0.75rem] font-semibold leading-snug text-[#0d2412]/70 sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

function CardPairGrid({ pair }: { pair: ServiceCardData[] }) {
  return (
    <div className="grid w-full shrink-0 grid-cols-2 items-stretch gap-2.5 p-1.5 sm:gap-3">
      {pair.map((card) => (
        <ServiceCard key={card.title} {...card} />
      ))}
    </div>
  );
}

function CopyColumn() {
  return (
    <div className="relative z-[1] max-w-xl py-4 lg:py-0">
      <StreetTag label="Your way" tone="ink" />

      <h2
        id="home2-customize-heading"
        className="mt-5 font-montserrat text-[2.35rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.5rem]"
      >
        More than
        <br />
        just errands
      </h2>
      <TitleSquiggle />

      <p className="mt-6 max-w-[34ch] font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/80 sm:text-lg">
        Customize your errands to fit into what you need to get done in your{" "}
        <span className="home2-own-way">own way</span>.
      </p>

      <a
        href={webAppLinks.requestErrand()}
        className="home2-create-cta mt-8 inline-flex items-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#ffedb3] transition hover:bg-[#164a22] sm:px-7 sm:text-base"
      >
        Create an errand
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export function Home2Customize() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const slides = gsap.utils.toArray<HTMLElement>("[data-card-slide]", section);
      if (slides.length < 2) return;

      const push = 1;
      const sit = 0.5;

      slides.forEach((slide, index) => {
        gsap.set(slide, {
          xPercent: 0,
          yPercent: index === 0 ? 0 : 118,
          rotate: index === 0 ? 0 : -8,
          autoAlpha: 1,
          zIndex: index === 0 ? 2 : 1,
          transformOrigin: "50% 8%",
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.max(1, slides.length - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((current, index) => {
        if (index === slides.length - 1) return;
        const next = slides[index + 1];
        const at = index * (push + sit);

        tl.set(next, { zIndex: 20 + index }, at);
        tl.set(current, { zIndex: 10 + index }, at);

        tl.to(
          current,
          {
            yPercent: -118,
            xPercent: 12,
            rotate: 12,
            duration: push,
          },
          at,
        );
        tl.to(
          next,
          {
            yPercent: 0,
            xPercent: 0,
            rotate: 0,
            duration: push,
          },
          at,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-x-clip bg-[#ffedb3] text-[#0d2412]"
      aria-labelledby="home2-customize-heading"
    >
      <div className="site-container relative grid min-h-svh w-full items-center gap-6 py-8 lg:grid-cols-2 lg:gap-8 lg:py-0">
        <CopyColumn />

        <div className="relative z-[1] flex min-h-0 w-full items-center lg:min-h-svh">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-screen bg-[#1b5c2a] lg:block"
            aria-hidden
          />
          <div className="relative w-full bg-[#1b5c2a] p-3 sm:p-4 lg:bg-transparent">
            <div className="relative overflow-hidden">
              <div className="invisible" aria-hidden>
                <CardPairGrid pair={cardPairs[0]} />
              </div>
              <div className="absolute inset-0 overflow-hidden">
                {cardPairs.map((pair) => (
                  <div
                    key={pair[0].title}
                    data-card-slide
                    className="absolute inset-0"
                  >
                    <CardPairGrid pair={pair} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
