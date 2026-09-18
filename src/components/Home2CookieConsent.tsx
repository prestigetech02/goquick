"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "goquick-cookie-consent";

type ConsentChoice = "accepted" | "necessary";

function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value?: string };
    return parsed.value === "accepted" || parsed.value === "necessary" ? parsed.value : null;
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: Date.now() }));
  } catch {
    // Ignore storage failures (private mode, blocked storage).
  }
}

export function Home2CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!readConsent());
  }, []);

  function choose(value: ConsentChoice) {
    writeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-labelledby="home2-cookie-title"
      aria-describedby="home2-cookie-desc"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="pointer-events-auto site-container">
        <div className="rounded-[1.35rem] border-[2.5px] border-[#0d2412] bg-[#fff6d8] p-4 shadow-[4px_4px_0_#0d2412] sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0">
              <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Cookies</span>
              <h2 id="home2-cookie-title" className="sr-only">
                Cookie consent
              </h2>
              <p
                id="home2-cookie-desc"
                className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-[0.95rem]"
              >
                We use cookies to keep the site working and, with your OK, to understand how people use GoQuick.
                Read our{" "}
                <Link href="/cookies" className="font-extrabold text-[#1b5c2a] underline underline-offset-2">
                  Cookies Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => choose("necessary")}
                className="inline-flex items-center justify-center rounded-full border-[2.5px] border-[#0d2412] bg-white px-5 py-2.5 font-montserrat text-sm font-extrabold text-[#0d2412] shadow-[0_3px_0_#0d2412] transition hover:translate-y-px hover:bg-[#e8f4ea] hover:shadow-[0_2px_0_#0d2412]"
              >
                Necessary only
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="home2-create-cta inline-flex items-center justify-center rounded-full bg-[#1b5c2a] px-5 py-2.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22]"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
