const features = [
  {
    n: "01",
    title: "Jobs around you",
    copy: "See errands nearby and take the ones that fit your route. No hunting across town.",
  },
  {
    n: "02",
    title: "Your hours",
    copy: "Go online when you have time. Go offline when you don’t. The app waits.",
  },
  {
    n: "03",
    title: "Paid per errand",
    copy: "Finish the job, get paid. Earnings land after each completed run.",
  },
  {
    n: "04",
    title: "In-app chat",
    copy: "Need a gate code or a clearer drop? Message the requester without leaving the job.",
  },
  {
    n: "05",
    title: "Easy withdrawals",
    copy: "Cash out when you want. Send your earnings to your bank straight from the app.",
  },
  {
    n: "06",
    title: "Quick to start",
    copy: "Download, sign up, get verified. Then pick your first errand around you.",
  },
] as const;

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

export function RunnersFeatures() {
  return (
    <section
      className="relative overflow-hidden bg-[#fff6d8] text-[#0d2412]"
      id="runner-features"
      aria-labelledby="runners-features-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">The app</span>
          <h2
            id="runners-features-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            Tools that keep you moving
          </h2>
          <TitleSquiggle />
          <p className="mt-5 font-montserrat text-base font-semibold leading-relaxed text-[#0d2412]/75 sm:text-lg">
            Everything you need to pick jobs and get paid.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.n}>
              <article
                tabIndex={0}
                className="home2-service-card home2-flat-card flex h-full flex-col p-5 sm:p-7"
              >
                <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">{feature.n}</span>
                <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
                  {feature.copy}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
