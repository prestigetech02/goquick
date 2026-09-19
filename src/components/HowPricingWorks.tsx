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

const items = [
  {
    n: "01",
    tag: "You",
    title: "Customers",
    description:
      "You pay a fair price based on the type, distance and complexity of your errand.",
  },
  {
    n: "02",
    tag: "Them",
    title: "Runners",
    description: "You earn based on the task. Keep more, earn more.",
  },
  {
    n: "03",
    tag: "Us",
    title: "GoQuick",
    description: "We take a small service fee to keep the platform safe and reliable.",
  },
] as const;

export function HowPricingWorks() {
  return (
    <section
      className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
      aria-labelledby="how-pricing-works-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Split</span>
          <h2
            id="how-pricing-works-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.25rem]"
          >
            How the fee
            <br />
            breaks down
          </h2>
          <TitleSquiggle />
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {items.map((item) => (
            <li key={item.n}>
              <article className="home2-service-card flex h-full flex-col bg-[#e8f4ea] p-5 text-[#0d2412] sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">{item.tag}</span>
                  <span className="font-montserrat text-sm font-black tracking-tight text-[#308030]/45">
                    {item.n}
                  </span>
                </div>
                <h3 className="mt-5 font-montserrat text-2xl font-black leading-tight tracking-tight text-[#308030]">
                  {item.title}
                </h3>
                <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
