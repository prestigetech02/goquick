"use client";

import { useState, useMemo } from "react";
import type { FAQCategory, FAQItem } from "@/lib/faq-data";
import { DEFAULT_FAQS } from "@/lib/faq-data";

export type { FAQCategory, FAQItem };

const CATEGORY_LABELS: Record<FAQCategory, string> = {
  all: "All",
  requesters: "For requesters",
  runners: "For runners",
  payments: "Payments",
  service: "Service & areas",
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform sm:h-5 sm:w-5 ${open ? "rotate-180" : ""}`}
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
            <h2 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl" style={{ color: "var(--primary)" }}>
              Frequently Asked Questions
            </h2>
          )}
          <h3 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
            We&apos;re always here to help
          </h3>
          <p className="max-w-md text-base text-slate-600 sm:text-lg">
            Get quick answers to common questions about errands, payments, becoming a runner, and how GoQuick works.
          </p>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex gap-3">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white sm:h-8 sm:w-8"
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
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white sm:h-8 sm:w-8"
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
                  Straightforward answers from our team. No bots, no runaround.
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
                      className="flex w-full items-center justify-between gap-4 py-3 text-left text-sm transition-colors hover:bg-slate-50/50 sm:py-5 sm:text-base"
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
