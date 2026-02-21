"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  DeliveryTruck01Icon,
  LegalDocument01Icon,
  MagicWand01Icon,
  Medicine01Icon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";

const services = [
  { icon: ShoppingCart01Icon, title: "Grocery Shopping" },
  { icon: Clock01Icon, title: "Queue Standing" },
  { icon: DeliveryTruck01Icon, title: "Pickup & Delivery" },
  { icon: Medicine01Icon, title: "Pharmacy Runs" },
  { icon: LegalDocument01Icon, title: "Document Drop-Offs" },
  { icon: MagicWand01Icon, title: "Custom Errands" },
];

export function ServiceCards() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
      {services.map((item) => (
        <article
          key={item.title}
          className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-left sm:p-5"
        >
          <div className="absolute top-0 right-0 h-20 w-20 -right-10 opacity-20" aria-hidden>
              <Image
                src="/element.png"
                alt=""
                fill
                className="object-contain object-top-right"
                sizes="80px"
              />
            </div>
          <div className="relative z-10 mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-200" style={{ color: "var(--primary)" }}>
            <HugeiconsIcon icon={item.icon} size={28} color="currentColor" />
          </div>
          <h4 className="relative z-10 font-bold text-slate-900 sm:text-base" style={{ color: "var(--primary)" }}>
            {item.title}
          </h4>
        </article>
      ))}
    </div>
  );
}
