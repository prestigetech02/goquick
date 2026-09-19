import { siteConfig, webAppLinks } from "@/lib/site";

const customerFeatures = [
  "Transparent pricing",
  "Secure payments",
  "Real-time tracking",
  "24/7 support",
];

const runnerFeatures = [
  "Free to join",
  "Get paid instantly",
  "Flexible work hours",
  "Bonuses & incentives",
];

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

export function PricingPlans() {
  return (
    <section
      className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
      aria-labelledby="pricing-plans-heading"
    >
      <div className="site-container py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Plans</span>
          <h2
            id="pricing-plans-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            Pay when you
            <br />
            need it
          </h2>
          <TitleSquiggle />
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
          <article className="home2-service-card flex flex-col bg-white p-5 sm:p-8">
            <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">Requesters</span>
            <h3 className="mt-5 font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-4xl">
              Pay
              <br />
              per errand
            </h3>
            <p className="mt-4 max-w-[28ch] font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
              You only pay for what you need. No monthly fees or hidden charges.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {customerFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#308030]" aria-hidden />
                  <span className="font-montserrat text-sm font-extrabold text-[#0d2412] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={webAppLinks.requestErrand()}
              className="home2-create-cta mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22]"
            >
              Book an errand
              <span aria-hidden>→</span>
            </a>
          </article>

          <article className="home2-service-card flex flex-col bg-[#308030] p-5 text-[#e8f4ea] sm:p-8">
            <span className="home2-street-tag w-fit bg-[#0d2412] text-[#ffe600]">Runners</span>
            <h3 className="mt-5 font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight sm:text-4xl">
              0%
              <br />
              to join
            </h3>
            <p className="mt-4 max-w-[28ch] font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/85 sm:text-base">
              It&apos;s free to sign up. You keep more of what you earn.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {runnerFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffe600]" aria-hidden />
                  <span className="font-montserrat text-sm font-extrabold sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.stores.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#0d2412] px-6 py-3 font-montserrat text-sm font-extrabold text-[#ffe600] shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#08180c] hover:shadow-[0_3px_0_#ffe600]"
            >
              Become a runner
              <span aria-hidden>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
