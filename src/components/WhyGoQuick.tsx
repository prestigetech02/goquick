import { Container } from "@/components/Container";
import {
  Icon3dHeadset,
  Icon3dLightning,
  Icon3dMap,
  Icon3dPackage,
  Icon3dPhoneOrder,
  Icon3dPin,
  Icon3dRunner,
  Icon3dShield,
} from "@/components/WhyGoQuickIcons";

const features = [
  {
    title: "Fast & Reliable",
    description: "Get your errands done quickly by verified and trusted runners.",
    Icon: Icon3dLightning,
  },
  {
    title: "Secure Payments",
    description: "Your payments are safe with escrow protection until completion.",
    Icon: Icon3dShield,
  },
  {
    title: "Real-time Tracking",
    description: "Track your runner in real time and stay updated every step of the way.",
    Icon: Icon3dPin,
  },
  {
    title: "24/7 Support",
    description: "Our support team is always here to assist you anytime.",
    Icon: Icon3dHeadset,
  },
] as const;

const steps = [
  {
    step: 1,
    title: "Place an Order",
    description: "Tell us what you need done and where.",
    Icon: Icon3dPhoneOrder,
  },
  {
    step: 2,
    title: "We Match You",
    description: "We connect you with the best available runner.",
    Icon: Icon3dRunner,
  },
  {
    step: 3,
    title: "Track in Real-time",
    description: "Track your runner and get live updates.",
    Icon: Icon3dMap,
  },
  {
    step: 4,
    title: "Task Completed",
    description: "Your errand is completed safely and you pay.",
    Icon: Icon3dPackage,
  },
] as const;

export function WhyGoQuick() {
  return (
    <Container as="section" aria-labelledby="why-goquick-heading">
      <div
        className="rounded-2xl px-4 py-12 sm:rounded-3xl sm:px-6 sm:py-14 md:px-10 md:py-16"
        style={{ backgroundColor: "color-mix(in srgb, var(--primary) 5%, #f8faf8)" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-goquick-heading"
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Why GoQuick?
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            We make errands effortless, so you can focus on what truly matters.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map(({ title, description, Icon }) => (
            <li key={title}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center sm:mb-5 sm:h-16 sm:w-16">
                  <Icon />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-t border-slate-200/80 pt-12 sm:mt-16 sm:pt-14" aria-labelledby="how-goquick-heading">
          <h2
            id="how-goquick-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            How GoQuick Works
          </h2>

          <ol className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-0">
            {steps.map(({ step, title, description, Icon }, index) => (
              <li key={title} className="relative flex flex-col items-center text-center">
                {index < steps.length - 1 ? (
                  <div
                    className="pointer-events-none absolute top-[2.75rem] right-0 hidden h-0 w-full translate-x-1/2 border-t-2 border-dashed border-slate-300 lg:block"
                    aria-hidden
                  />
                ) : null}

                <div className="relative z-[1] flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 sm:h-24 sm:w-24">
                  <Icon />
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">{title}</h3>
                </div>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
}
