const features = [
  {
    title: "Verified Runners",
    description: "Every runner is carefully screened and verified for your safety.",
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 12 2.75c2.3 0 4.474.523 6.418 1.454a.75.75 0 0 1 .432.678v5.668c0 3.832-2.237 7.27-5.7 8.85a.75.75 0 0 1-.65 0C8.937 17.82 6.7 14.382 6.7 10.55V5.882a.75.75 0 0 1 .432-.678A11.959 11.959 0 0 1 12 2.714z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Pay safely with escrow protection. You pay only when the job is done.",
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Tracking",
    description: "Track your runner live and stay updated at every step.",
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Our support team is available anytime to assist you.",
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.059-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We're committed to delivering the best experience, every time.",
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.41.276.61.265.52.798.87 1.392.87h3.45a.75.75 0 0 0 .75-.75V8.854"
        />
      </svg>
    ),
  },
] as const;

export function WhyChooseGoQuick() {
  return (
    <section
      className="site-container mt-16 sm:mt-20 lg:mt-24"
      aria-labelledby="why-choose-heading"
    >
      <div
        className="rounded-3xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
        style={{ backgroundColor: "color-mix(in srgb, var(--primary) 4%, #f4f6f4)" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-sm">
            Why Choose GoQuick?
          </p>
          <h2
            id="why-choose-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Built for speed, safety &amp; trust
          </h2>
        </div>

        <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-y-10 sm:mt-12 lg:mt-14 lg:flex-nowrap lg:gap-0">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={[
                "flex w-full flex-col items-center px-4 text-center sm:w-1/2 lg:w-auto lg:flex-1 lg:px-5 xl:px-6",
                index > 0 ? "lg:border-l lg:border-slate-200" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 14%, white)",
                  color: "var(--primary)",
                }}
              >
                {feature.icon}
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-slate-900 sm:text-base">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-slate-500 sm:text-sm">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
