export const PRICING_FAQS = [
  {
    question: "Is there a monthly subscription?",
    answer:
      "No. GoQuick is pay-as-you-go. Customers only pay when they book an errand, and runners join free with no monthly fees.",
  },
  {
    question: "How are fees calculated?",
    answer:
      "Pricing is based on the type of errand, distance, and complexity. You’ll always see the full amount before you confirm, so there are no surprises at checkout.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No hidden charges. The price shown when you book is what you pay. GoQuick takes a small transparent service fee to keep the platform safe and reliable.",
  },
  {
    question: "When do I get charged?",
    answer:
      "Payment is authorized when you book and completed once the errand is successfully finished. If something goes wrong, our support team can help resolve it.",
  },
  {
    question: "How do runners get paid?",
    answer:
      "Runners earn based on each completed task. Earnings are credited to their GoQuick wallet and can be withdrawn according to the payout options in the app.",
  },
  {
    question: "Does GoQuick take a cut from runners?",
    answer:
      "Yes — a small service fee helps cover verification, support, and platform operations. Runners still keep most of what they earn on every completed errand.",
  },
  {
    question: "Can I get a refund if an errand isn’t completed?",
    answer:
      "If an errand isn’t completed as agreed, you can report the issue in the app. Eligible cases are reviewed and refunded according to our refund policy.",
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

export function PricingFAQ() {
  return (
    <section
      className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
      aria-labelledby="pricing-faq-heading"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">FAQ</span>
          <h2
            id="pricing-faq-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            Pricing questions
          </h2>
          <TitleSquiggle />
        </div>

        <ul className="mt-12 divide-y-[2.5px] divide-[#0d2412] border-y-[2.5px] border-[#0d2412] sm:mt-16">
          {PRICING_FAQS.map((item, index) => (
            <li
              key={item.question}
              className="grid gap-4 py-7 sm:gap-6 sm:py-8 lg:grid-cols-2 lg:gap-12 lg:py-10"
            >
              <h3 className="flex items-start gap-3 font-montserrat text-lg font-black leading-tight tracking-tight sm:text-xl lg:text-[1.35rem]">
                <span className="home2-street-tag mt-0.5 shrink-0 bg-[#1b5c2a] text-[#ffe600]">
                  {String(index + 1).padStart(2, "0")}
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
