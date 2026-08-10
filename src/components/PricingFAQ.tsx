"use client";

import { useState } from "react";

const PRICING_FAQS = [
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

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="site-container mt-16 sm:mt-20 lg:mt-24"
      aria-labelledby="pricing-faq-heading"
    >
      <h2
        id="pricing-faq-heading"
        className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
      >
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white sm:mt-10">
        <ul className="divide-y divide-slate-200">
          {PRICING_FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `pricing-faq-panel-${index}`;
            const buttonId = `pricing-faq-button-${index}`;

            return (
              <li key={item.question}>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/70 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">{item.question}</span>
                  <ChevronDown open={isOpen} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[0.95rem]">
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
