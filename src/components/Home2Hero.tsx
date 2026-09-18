"use client";

import { useEffect, useState } from "react";
import { webAppLinks } from "@/lib/site";

const NEEDS = ["Shopping", "Pickup", "Deliveries", "Queues"];

function RotatingNeed() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(hold);
  }, [index]);

  useEffect(() => {
    if (visible) return;
    const swap = window.setTimeout(() => {
      setIndex((i) => (i + 1) % NEEDS.length);
      setVisible(true);
    }, 280);
    return () => window.clearTimeout(swap);
  }, [visible]);

  return (
    <span
      className={`inline-block text-[#dbab29] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {NEEDS[index]}?
    </span>
  );
}

export function Home2Hero() {
  const [address, setAddress] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = new URL(webAppLinks.requestErrand());
    const value = address.trim();
    if (value) url.searchParams.set("address", value);
    window.location.href = url.toString();
  }

  return (
    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center px-5 pb-[38vh] pt-28 text-center font-montserrat sm:px-8 sm:pb-[42vh] sm:pt-32 md:pt-36">
      <h1 className="max-w-[16ch] text-[2.35rem] font-black leading-[1.05] tracking-tight text-[#308030] sm:max-w-none sm:text-5xl md:text-6xl lg:text-[4.25rem]">
        What do you need
        <br />
        done today?
        <br />
        <RotatingNeed />
      </h1>

      <form
        onSubmit={onSubmit}
        className="mt-8 flex w-full max-w-xl items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_10px_40px_rgba(15,40,20,0.12)] ring-1 ring-black/5 sm:mt-10 sm:p-2"
      >
        <label className="flex min-w-0 flex-1 items-center gap-2 pl-3 sm:gap-3 sm:pl-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary)_14%,white)] text-[var(--primary)]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
          </span>
          <span className="sr-only">Delivery address</span>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Where do you need the errand done?"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm font-semibold text-slate-800 outline-none placeholder:font-semibold placeholder:text-slate-400 sm:text-base"
            autoComplete="street-address"
          />
        </label>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-95 sm:px-6 sm:py-3"
        >
          Create errand
          <span aria-hidden>→</span>
        </button>
      </form>
    </div>
  );
}
