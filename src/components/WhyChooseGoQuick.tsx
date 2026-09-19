const YELLOW = "#dbab29";
const MINT = "#e8f4ea";

const reasons = [
  {
    n: "01",
    tag: "People",
    tagClass: "bg-[#0d2412] text-[#dbab29]",
    title: "Verified runners",
    copy: "Screened before they pick up a single bag. You see who is coming.",
    featured: true,
  },
  {
    n: "02",
    tag: "Money",
    tagClass: "bg-[#308030] text-[#dbab29]",
    title: "Pay when it’s done",
    copy: "Escrow holds the fee until the drop is complete. No funny releases.",
    featured: false,
  },
  {
    n: "03",
    tag: "Live",
    tagClass: "bg-[#1b5c2a] text-[#dbab29]",
    title: "Track every stop",
    copy: "Pickup to door, on the map. You are never guessing where it went.",
    featured: false,
  },
  {
    n: "04",
    tag: "Help",
    tagClass: "bg-[#0d2412] text-[#dbab29]",
    title: "Support that answers",
    copy: "Stuck at a gate? Message us. Someone is on it, day or night.",
    featured: false,
  },
  {
    n: "05",
    tag: "Promise",
    tagClass: "bg-[#dbab29] text-[#0d2412]",
    title: "We make it right",
    copy: "If the run is off, we don’t hide. We fix it and keep your time.",
    featured: false,
  },
] as const;

function TitleSquiggle() {
  return (
    <svg
      className="mt-3 w-40 text-[#dbab29] sm:w-52"
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

function RouteDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 180" fill="none" aria-hidden>
      <path
        d="M12 148 C70 40 140 170 210 70 C280 -10 340 120 408 36"
        stroke={YELLOW}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 12"
        opacity="0.4"
      />
      <circle cx="210" cy="70" r="10" fill={MINT} stroke={YELLOW} strokeWidth="3" />
      <circle cx="12" cy="148" r="7" fill={YELLOW} />
      <circle cx="408" cy="36" r="7" fill={YELLOW} />
    </svg>
  );
}

function ReasonCard({
  n,
  tag,
  tagClass,
  title,
  copy,
  featured,
}: (typeof reasons)[number]) {
  return (
    <article
      tabIndex={0}
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border-[3px] border-[#0d2412] transition duration-200 ease-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_#dbab29] focus-visible:translate-x-1 focus-visible:translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 ${
        featured
          ? "bg-[#dbab29] p-6 shadow-[6px_7px_0_#0d2412] sm:p-8"
          : "bg-[#e8f4ea] p-5 shadow-[5px_6px_0_#dbab29] sm:p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`home2-street-tag ${tagClass}`}>{tag}</span>
        <span
          className={`font-montserrat text-sm font-black tracking-tight ${
            featured ? "text-[#0d2412]/40" : "text-[#308030]/45"
          }`}
        >
          {n}
        </span>
      </div>
      <h3
        className={`mt-5 font-montserrat font-black leading-[0.95] tracking-tight ${
          featured
            ? "text-[1.85rem] text-[#0d2412] sm:text-4xl lg:text-[2.6rem]"
            : "text-xl text-[#308030] sm:text-2xl"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 font-montserrat font-semibold leading-relaxed text-[#0d2412]/80 ${
          featured ? "max-w-[28ch] text-base sm:text-lg" : "text-sm sm:text-[0.95rem]"
        }`}
      >
        {copy}
      </p>
      {featured ? (
        <p className="mt-auto pt-8 font-montserrat text-xs font-extrabold uppercase tracking-[0.16em] text-[#0d2412]/55">
          On every errand
        </p>
      ) : null}
    </article>
  );
}

export function WhyChooseGoQuick() {
  const featured = reasons[0];
  const rest = reasons.slice(1);

  return (
    <section
      className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
      id="why-goquick"
      aria-labelledby="why-choose-heading"
    >
      <RouteDoodle className="pointer-events-none absolute -right-8 top-8 hidden w-[28rem] lg:block" />
      <RouteDoodle className="pointer-events-none absolute -left-16 bottom-4 hidden w-80 rotate-12 opacity-70 lg:block" />

      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#0d2412] text-[#dbab29]">Why GoQuick</span>
          <h2
            id="why-choose-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#e8f4ea] sm:text-5xl lg:text-[3.35rem]"
          >
            Peace of mind
            <br />
            on every <span className="text-[#dbab29]">run</span>
          </h2>
          <TitleSquiggle />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:grid-rows-2 lg:gap-5">
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <ReasonCard {...featured} />
          </div>
          {rest.map((reason) => (
            <div key={reason.n} className="lg:col-span-2">
              <ReasonCard {...reason} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
