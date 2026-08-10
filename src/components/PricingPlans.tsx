import { FluidButton, FluidStoreButton } from "@/components/FluidButton";
import { webAppLinks } from "@/lib/site";

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

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
      style={{ backgroundColor: "var(--primary)" }}
      aria-hidden
    >
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

function CustomerIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function RunnerIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  );
}

export function PricingPlans() {
  return (
    <section
      className="site-container mt-14 sm:mt-16 lg:mt-20"
      aria-labelledby="pricing-plans-heading"
    >
      <h2 id="pricing-plans-heading" className="sr-only">
        Pricing for customers and runners
      </h2>

      <div
        className="relative overflow-hidden rounded-[1.75rem] px-4 py-8 sm:rounded-[2rem] sm:px-6 sm:py-10 lg:px-4 lg:py-10"
        style={{ backgroundColor: "#f3f4f3" }}
      >
        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-0">
          {/* Vertical dashed divider (desktop) */}
          <div
            className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-px -translate-x-1/2 border-l border-dashed border-slate-300/90 lg:block"
            aria-hidden
          />

          {/* For Customers */}
          <article className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-8 lg:mx-4 lg:rounded-[1.75rem] lg:rounded-r-2xl lg:px-10 lg:py-10 xl:mx-6 xl:px-12">
            <div className="flex flex-col items-center text-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 14%, white)",
                  color: "var(--primary)",
                }}
              >
                <CustomerIcon />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl">For Customers</h3>
              <p className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                <span className="block" style={{ color: "var(--primary)" }}>
                  Pay
                </span>
                <span className="block text-slate-900">per errand</span>
              </p>
              <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
                You only pay for what you need. No monthly fees or hidden charges.
              </p>
            </div>

            <div className="my-6 border-t border-slate-200/80" />

            <ul className="mx-auto w-full max-w-[15rem] space-y-3.5">
              {customerFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-800 sm:text-[0.95rem]">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex justify-center pt-8">
              <FluidButton
                href={webAppLinks.requestErrand()}
                variant="primary"
                showArrow
                className="min-w-[13rem]"
              >
                Book an Errand
              </FluidButton>
            </div>
          </article>

          {/* For Runners */}
          <article className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-8 lg:mx-4 lg:rounded-[1.75rem] lg:rounded-l-2xl lg:px-10 lg:py-10 xl:mx-6 xl:px-12">
            <div className="flex flex-col items-center text-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 14%, white)",
                  color: "var(--primary)",
                }}
              >
                <RunnerIcon />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl">For Runners</h3>
              <p className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                <span className="block" style={{ color: "var(--primary)" }}>
                  0%
                </span>
                <span className="block text-slate-900">to join</span>
              </p>
              <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
                It&apos;s free to sign up. You keep more of what you earn.
              </p>
            </div>

            <div className="my-6 border-t border-slate-200/80" />

            <ul className="mx-auto w-full max-w-[15rem] space-y-3.5">
              {runnerFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-800 sm:text-[0.95rem]">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex justify-center pt-8">
              <FluidStoreButton variant="primary" showArrow className="min-w-[13rem]">
                Become a Runner
              </FluidStoreButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
