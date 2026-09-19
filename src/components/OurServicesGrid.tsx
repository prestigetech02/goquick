import type { ReactNode } from "react";
import Image from "next/image";
import { webAppLinks } from "@/lib/site";
import {
  CustomErrandsArt,
  DomesticsArt,
  PharmacyArt,
} from "@/components/home2-service-arts";

const services: {
  title: string;
  description: string;
  Art?: () => ReactNode;
  image?: string;
}[] = [
  {
    title: "Pickup and drop off",
    description: "Collect from one place and deliver to another.",
    image: "/services/pnd.png",
  },
  {
    title: "Shopping",
    description: "Groceries, market runs, and anything on your list.",
    image: "/services/shopping.png",
  },
  {
    title: "Pharmacy runs",
    description: "Medicines and chemist trips, brought to you.",
    Art: PharmacyArt,
  },
  {
    title: "Queues",
    description: "Banks, offices, and lines. A runner waits so you don’t.",
    image: "/services/queue.png",
  },
  {
    title: "Food errands",
    description: "Pickup from restaurants, bukas, or a cook nearby.",
    image: "/services/fooddev.png",
  },
  {
    title: "Domestics",
    description: "Cleaning, laundry, and the house jobs that pile up.",
    Art: DomesticsArt,
  },
  {
    title: "Custom errands",
    description: "Not on the list? Tell us what you need done.",
    Art: CustomErrandsArt,
  },
];

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

export function OurServicesGrid() {
  const bookHref = webAppLinks.requestErrand();

  return (
    <section
      className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
      aria-labelledby="our-services-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Errands</span>
          <h2
            id="our-services-heading"
            className="mt-5 font-montserrat text-[2.35rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.5rem]"
          >
            What you can
            <br />
            get done
          </h2>
          <TitleSquiggle />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => {
            const Art = service.Art;
            return (
              <li key={service.title}>
                <article className="home2-service-card home2-press-card group flex h-full flex-col overflow-hidden bg-white">
                  <div className="relative aspect-square w-full overflow-hidden bg-[color-mix(in_srgb,#308030_16%,white)]">
                    <div className="absolute inset-0 origin-center transition-transform duration-300 ease-out group-hover:scale-[1.05] motion-reduce:transform-none motion-reduce:transition-none">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={`${service.title} errand in Lagos`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                          className="object-contain"
                        />
                      ) : (
                        Art && <Art />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-3 py-3 sm:px-3.5 sm:py-3.5">
                    <h3 className="font-montserrat text-[0.95rem] font-black leading-tight tracking-tight text-[#0d2412] sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 font-montserrat text-[0.75rem] font-semibold leading-snug text-[#0d2412]/70 sm:text-sm">
                      {service.description}
                    </p>
                    <a
                      href={bookHref}
                      className="mt-3 inline-flex items-center gap-1 font-montserrat text-sm font-extrabold text-[#308030] transition hover:text-[#1b5c2a]"
                    >
                      Book this errand
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
