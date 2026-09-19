"use client";

import { useEffect, useState } from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type ConsentChoice,
} from "@/lib/cookie-consent";

export function CookiePreferenceActions() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setChoice(readCookieConsent());
  }, []);

  function choose(value: ConsentChoice) {
    writeCookieConsent(value);
    setChoice(value);
  }

  return (
    <div className="mt-8">
      <p className="font-montserrat text-sm font-semibold text-[#0d2412]/70">
        {choice === "accepted"
          ? "Your current choice: optional cookies on."
          : choice === "necessary"
            ? "Your current choice: necessary cookies only."
            : "You have not saved a choice on this device yet."}
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="inline-flex items-center justify-center rounded-full border-[2.5px] border-[#0d2412] bg-white px-6 py-3 font-montserrat text-sm font-extrabold text-[#0d2412] shadow-[0_4px_0_#0d2412] transition hover:translate-y-px hover:bg-[#e8f4ea] hover:shadow-[0_3px_0_#0d2412]"
        >
          Necessary only
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="home2-create-cta inline-flex items-center justify-center rounded-full bg-[#1b5c2a] px-6 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22]"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
