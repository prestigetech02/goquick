const testimonials = [
  {
    quote:
      "I sent a runner to the market while I was on a call. Groceries were at my door before I hung up.",
    name: "Tosin A.",
    city: "Lagos",
    role: "Requester",
  },
  {
    quote:
      "I pick jobs around me when I have time. Extra cash without a 9-to-5 — bills don’t wait and neither do I.",
    name: "Ibrahim M.",
    city: "Lagos",
    role: "Runner",
  },
  {
    quote:
      "Queueing at the bank used to eat my whole morning. Now I create the errand and get back to work.",
    name: "Amaka O.",
    city: "Lagos",
    role: "Requester",
  },
  {
    quote:
      "Food drop, pickup, queue — I take what fits my day. Most flexible way I’ve earned in Lagos.",
    name: "Blessing K.",
    city: "Lagos",
    role: "Runner",
  },
  {
    quote:
      "Pharmacy run for my mum, no drama. I watched it live and paid when it was done.",
    name: "Chioma E.",
    city: "Lagos",
    role: "Requester",
  },
  {
    quote:
      "I run errands between gigs. The app is straightforward and I get paid per job.",
    name: "David N.",
    city: "Lagos",
    role: "Runner",
  },
  {
    quote:
      "Picked up a package in Ikeja and dropped it in Lekki the same afternoon. Tracking made it easy to trust.",
    name: "Kunle S.",
    city: "Lagos",
    role: "Requester",
  },
  {
    quote:
      "I accept what’s around me and work at my pace. It’s how I fill the gaps in my week.",
    name: "Ngozi P.",
    city: "Lagos",
    role: "Runner",
  },
] as const;

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-40 text-[#ffe600] sm:w-52"
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

function TestimonialCard({
  quote,
  name,
  city,
  role,
}: (typeof testimonials)[number]) {
  return (
    <article className="home2-service-card flex w-[18.5rem] shrink-0 flex-col justify-between bg-white p-5 sm:w-[22rem] sm:p-6">
      <p className="font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412] sm:text-base">
        “{quote}”
      </p>
      <div className="mt-6 flex items-end justify-between gap-3">
        <div>
          <p className="font-montserrat text-sm font-black tracking-tight text-[#0d2412] sm:text-base">
            {name}
          </p>
          <p className="mt-0.5 font-montserrat text-xs font-semibold text-[#0d2412]/60 sm:text-sm">
            {city}
          </p>
        </div>
        <span
          className={`home2-street-tag shrink-0 ${
            role === "Runner" ? "bg-[#308030] text-[#ffe600]" : "bg-[#0d2412] text-[#ffe600]"
          }`}
        >
          {role}
        </span>
      </div>
    </article>
  );
}

export function Home2Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
      id="stories"
      aria-labelledby="home2-stories-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto text-center">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Stories</span>
          <h2
            id="home2-stories-heading"
            className="mt-5 whitespace-nowrap font-montserrat text-[clamp(1.35rem,4.2vw,3.25rem)] font-black leading-none tracking-tight text-[#308030]"
          >
            Loved by people on the move
          </h2>
          <TitleSquiggle />
          <p className="mx-auto mt-5 whitespace-nowrap font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-lg">
            See how GoQuick is making everyday tasks easier.
          </p>
        </div>
      </div>

      <div className="home2-testimonial-marquee pb-16 sm:pb-20 lg:pb-24" aria-label="Customer stories">
        <div className="home2-testimonial-track">
          <ul className="flex gap-4 sm:gap-5">
            {testimonials.map((item) => (
              <li key={`${item.name}-a`}>
                <TestimonialCard {...item} />
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 sm:gap-5" aria-hidden>
            {testimonials.map((item) => (
              <li key={`${item.name}-b`}>
                <TestimonialCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
