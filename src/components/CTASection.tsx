import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { RequestErrandButton, RunErrandsButton } from "@/components/HeroStoreButtons";

export function CTASection() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 -mt-6 sm:-mt-8 md:-mt-10">
      <section
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-4 py-1 sm:px-6 sm:py-2 md:px-10 md:py-2 lg:px-14 lg:py-3 mb-10 sm:mb-12 md:mb-14"
        style={{ backgroundColor: "var(--primary)" }}
        aria-labelledby="cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 text-white">
            <h2
              id="cta-heading"
              className="text-xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Request an errand. Get it done.
            </h2>
            <p className="max-w-md text-base text-white/90 sm:text-xl">
              Book trusted runners on the web, or download the app to run errands and earn.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <RequestErrandButton
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-white/95 sm:px-6 sm:py-3 sm:text-base"
              />
              <RunErrandsButton
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
              />
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[320px] lg:min-h-[400px]">
            <div className="relative drop-shadow-2xl">
              <Image
                src="/goquick-image.png"
                alt={`${siteConfig.name} on web and mobile`}
                width={320}
                height={600}
                className="h-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 320px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
