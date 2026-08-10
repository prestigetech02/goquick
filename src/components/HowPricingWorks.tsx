const items = [
  {
    title: "Customers",
    description:
      "You pay a fair price based on the type, distance and complexity of your errand.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: "Runners",
    description: "You earn based on the task. Keep more, earn more.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "GoQuick",
    description: "We take a small service fee to keep the platform safe and reliable.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
] as const;

export function HowPricingWorks() {
  return (
    <section
      className="site-container mt-16 sm:mt-20 lg:mt-24"
      aria-labelledby="how-pricing-works-heading"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span
          className="h-px w-8 sm:w-10"
          style={{ backgroundColor: "var(--primary)" }}
          aria-hidden
        />
        <h2
          id="how-pricing-works-heading"
          className="text-center text-xs font-bold uppercase tracking-[0.18em] sm:text-sm"
          style={{ color: "var(--primary)" }}
        >
          How Pricing Works
        </h2>
        <span
          className="h-px w-8 sm:w-10"
          style={{ backgroundColor: "var(--primary)" }}
          aria-hidden
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-0">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={[
              "flex flex-col items-center px-4 text-center sm:px-6 lg:px-10",
              index > 0 ? "lg:border-l lg:border-slate-200" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)",
                color: "var(--primary)",
              }}
            >
              {item.icon}
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-slate-900 sm:text-xl">{item.title}</h3>
            <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
