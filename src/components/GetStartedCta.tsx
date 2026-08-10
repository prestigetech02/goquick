import Image from "next/image";
import { Container } from "@/components/Container";
import { HeroCtaButtons } from "@/components/FluidButton";
import { siteConfig } from "@/lib/site";

type GetStartedCtaProps = {
  /** Navy (default / homepage) or app green */
  variant?: "default" | "green";
  className?: string;
};

export function GetStartedCta({ variant = "default", className = "" }: GetStartedCtaProps) {
  const isGreen = variant === "green";

  return (
    <Container as="section" aria-labelledby="get-started-cta-heading" className={className}>
      <div
        className="relative overflow-visible rounded-2xl sm:rounded-3xl"
        style={{ backgroundColor: isGreen ? "var(--primary)" : "#070b1a" }}
      >
        {/* Clipped backgrounds — figure overflows above via reduced card top padding */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl"
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute right-[6%] top-[10%] h-40 w-40 rounded-full opacity-70 sm:h-52 sm:w-52 lg:right-[10%] lg:h-64 lg:w-64"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.55) 1.25px, transparent 1.35px)",
              backgroundSize: "14px 14px",
              maskImage: "radial-gradient(circle, black 35%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 72%)",
            }}
          />
          <div
            className="absolute bottom-[16%] left-[52%] h-28 w-28 rounded-full opacity-50 sm:h-36 sm:w-36 lg:left-[55%]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.45) 1.1px, transparent 1.2px)",
              backgroundSize: "12px 12px",
              maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-[-2%] bottom-[6%] h-36 w-36 opacity-60 sm:h-44 sm:w-44"
            style={{
              backgroundImage: isGreen
                ? "radial-gradient(circle, rgba(255,255,255,0.5) 1.3px, transparent 1.4px)"
                : "radial-gradient(circle, color-mix(in srgb, var(--primary) 70%, white) 1.3px, transparent 1.4px)",
              backgroundSize: "16px 16px",
              maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-full opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1.15px)",
              backgroundSize: "18px 18px",
              maskImage: "radial-gradient(ellipse 70% 80% at 70% 45%, black 20%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 70% 45%, black 20%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-4 px-6 pb-10 pt-6 text-white sm:space-y-5 sm:px-8 sm:pb-12 sm:pt-7 md:px-12 lg:pb-12 lg:pl-14 lg:pr-6 lg:pt-8">
            <h2
              id="get-started-cta-heading"
              className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl"
            >
              Ready to get started?
            </h2>
            <p className="max-w-md text-sm font-normal text-white/70 sm:text-base">
              Join thousands of people who save time with {siteConfig.name} every day.
            </p>
            <HeroCtaButtons tone={isGreen ? "onBrand" : "default"} />
          </div>

          <div className="relative z-10 flex min-h-[220px] items-end justify-center px-4 sm:min-h-[260px] lg:min-h-0 lg:justify-end lg:px-4 lg:pr-6">
            <Image
              src="/cta-image.png"
              alt={`${siteConfig.name} runner ready to deliver`}
              width={560}
              height={600}
              className="relative w-full max-w-[300px] object-contain object-bottom sm:max-w-[360px] lg:absolute lg:bottom-0 lg:right-4 lg:h-[calc(100%+2.75rem)] lg:w-auto lg:max-w-[min(460px,48vw)]"
              sizes="(max-width: 1024px) 360px, 460px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
