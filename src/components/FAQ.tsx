"use client";

import { useState, useMemo } from "react";

export type FAQCategory = "all" | "requesters" | "runners" | "payments" | "service";

export type FAQItem = { question: string; answer: string; category: Exclude<FAQCategory, "all"> };

const CATEGORY_LABELS: Record<FAQCategory, string> = {
  all: "All",
  requesters: "For requesters",
  runners: "For runners",
  payments: "Payments",
  service: "Service & areas",
};

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What kind of errands can I get done with GoQuick?",
    answer:
      "You can use GoQuick for grocery shopping, food and package delivery, queue services (e.g. paying bills, bank errands), pickups and drop-offs, and other everyday tasks. Create an errand with details and budget, and nearby runners will accept the job.",
    category: "requesters",
  },
  {
    question: "How do I pay for an errand?",
    category: "payments",
    answer:
      "Payment is handled securely inside the app. You add a payment method, and the agreed amount is held safely until the errand is completed. You only pay when you’re satisfied with the result. We support cards and other methods via our payment partners.",
  },
  {
    question: "Where does GoQuick operate?",
    category: "service",
    answer:
      "GoQuick currently operates in Lagos. We’re expanding to more cities. Check the app or contact us for the latest service areas.",
  },
  {
    question: "How do I become a runner and earn money?",
    answer:
      "Download the GoQuick app, sign up as a runner, and complete the verification steps. Once approved, you can accept errand requests in your area, set your own availability, and get paid for each completed task.",
    category: "runners",
  },
  {
    question: "How are runners verified?",
    answer:
      "Runners go through identity verification and approval before they can accept jobs. We also use ratings and reviews so you can see how others rate their experience.",
    category: "runners",
  },
  {
    question: "Can I track my errand in real time?",
    answer:
      "Yes. Once a runner accepts your errand, you can follow progress in the app and message them directly if you need to share or clarify anything.",
    category: "requesters",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
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

const CHIP_CATEGORIES: FAQCategory[] = ["all", "requesters", "runners", "payments", "service"];

export function FAQ({ items = DEFAULT_FAQS, showHeading = true }: { items?: FAQItem[]; showHeading?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const handleCategoryChange = (cat: FAQCategory) => {
    setSelectedCategory(cat);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="w-full min-w-0 py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        {/* Left: General help section */}
        <div className="flex flex-col space-y-6 sm:space-y-8">
          {showHeading && (
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl" style={{ color: "var(--primary)" }}>
              Frequently Asked Questions
            </h2>
          )}
          <h3 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
            We&apos;re always here to help
          </h3>
          <p className="max-w-md text-base text-slate-600 sm:text-lg">
            Get quick answers to common questions about errands, payments, becoming a runner, and how GoQuick works.
          </p>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex gap-3">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <div>
                <strong className="text-slate-900">Fast support</strong>
                <p className="mt-1 text-sm text-slate-600">
                  We respond within 24 hours. Reach us via the contact form or email for any questions.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <div>
                <strong className="text-slate-900">Real answers</strong>
                <p className="mt-1 text-sm text-slate-600">
                  Straightforward answers from our team — no bots, no runaround.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Chips + accordions card */}
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-wrap gap-2">
            {CHIP_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory !== cat ? "hover:bg-slate-200" : ""
                }`}
                style={
                  selectedCategory === cat
                    ? { backgroundColor: "var(--primary)", color: "#fff" }
                    : { backgroundColor: "#f1f5f9", color: "#000000" }
                }
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
          <div
            className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            style={{ borderTopWidth: "3px", borderTopColor: "var(--primary)" }}
          >
            <ul className="space-y-0 divide-y divide-slate-200">
              {filteredItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-slate-50/50 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-slate-900 sm:text-base">{item.question}</span>
                      <span className="shrink-0" style={{ color: "var(--primary)" }}>
                        <ChevronDown open={isOpen} />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <div className="pb-4 pr-4 pt-0 sm:pb-5 sm:pr-5">
                        <p className="text-slate-600 sm:text-base">{item.answer}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
