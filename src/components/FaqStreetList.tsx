"use client";

import { useMemo, useState } from "react";
import type { FAQCategory, FAQItem } from "@/lib/faq-data";
import { DEFAULT_FAQS } from "@/lib/faq-data";

const CATEGORY_LABELS: Record<FAQCategory, string> = {
  all: "All",
  requesters: "Requesters",
  runners: "Runners",
  payments: "Payments",
  service: "Areas",
};

const CHIP_CATEGORIES: FAQCategory[] = ["all", "requesters", "runners", "payments", "service"];

export function FaqStreetList({ items = DEFAULT_FAQS }: { items?: FAQItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CHIP_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`home2-street-tag ${
                active ? "bg-[#308030] text-[#ffe600]" : "bg-white text-[#0d2412] hover:bg-[#308030] hover:text-[#ffe600]"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          );
        })}
      </div>

      {filteredItems.length === 0 ? (
        <p className="mt-10 font-montserrat text-sm font-semibold text-[#0d2412]/70">
          No questions in this category yet.
        </p>
      ) : (
        <ul className="mt-10 divide-y-[2.5px] divide-[#0d2412] border-y-[2.5px] border-[#0d2412] sm:mt-12">
          {filteredItems.map((item, index) => (
            <li
              key={`${item.category}-${item.question}`}
              className="grid gap-4 py-7 sm:gap-6 sm:py-8 lg:grid-cols-2 lg:gap-12 lg:py-10"
            >
              <h2 className="flex items-start gap-3 font-montserrat text-lg font-black leading-tight tracking-tight sm:text-xl lg:text-[1.35rem]">
                <span className="home2-street-tag mt-0.5 shrink-0 bg-[#1b5c2a] text-[#ffe600]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </h2>
              <p className="font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base lg:pt-1">
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
