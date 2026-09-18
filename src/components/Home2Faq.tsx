const faqs = [
  {
    n: "01",
    question: "What kind of errands can I get done?",
    answer:
      "Grocery runs, pickups, drop-offs, queues, pharmacy, food — the everyday stuff you don’t have time for. Create it, a runner nearby takes it.",
  },
  {
    n: "02",
    question: "How do I pay for an errand?",
    answer:
      "Payment is protected. Pay with bank transfer, credit or debit cards, QR codes, and more. You don’t need to save a card.",
  },
  {
    n: "03",
    question: "Can I track my errand live?",
    answer:
      "Yes. Once a runner accepts, you follow pickup to drop on the web and can message them if anything needs clarifying.",
  },
  {
    n: "04",
    question: "How do I become a runner?",
    answer:
      "Download the runner app, sign up, and complete verification. After approval you pick jobs around you, work at your pace, and get paid per errand.",
  },
  {
    n: "05",
    question: "Where does GoQuick operate?",
    answer:
      "We’re live in Lagos and expanding. Open the app or web to see if we’re in your area yet.",
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

export function Home2Faq() {
  return (
    <section
      className="relative overflow-hidden bg-[#fff6d8] text-[#0d2412]"
      id="faq"
      aria-labelledby="home2-faq-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">FAQ</span>
          <h2
            id="home2-faq-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            Got questions?
          </h2>
          <TitleSquiggle />
        </div>

        <ul className="mt-12 divide-y-[2.5px] divide-[#0d2412] border-y-[2.5px] border-[#0d2412] sm:mt-16">
          {faqs.map((item) => (
            <li
              key={item.n}
              className="grid gap-4 py-7 sm:gap-6 sm:py-8 lg:grid-cols-2 lg:gap-12 lg:py-10"
            >
              <h3 className="flex items-start gap-3 font-montserrat text-lg font-black leading-tight tracking-tight sm:text-xl lg:text-[1.35rem]">
                <span className="home2-street-tag mt-0.5 shrink-0 bg-[#1b5c2a] text-[#ffe600]">
                  {item.n}
                </span>
                <span>{item.question}</span>
              </h3>
              <p className="font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base lg:pt-1">
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
