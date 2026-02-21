"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const DURATION_MS = 2000;

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

function formatStatValue(value: number, format: "compact" | "number", suffix: string): string {
  if (format === "compact" && value >= 1000) {
    const k = Math.floor(value / 1000);
    return `${k}K${suffix}`;
  }
  return `${Math.round(value)}${suffix}`;
}

export function StatsBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const [displayValues, setDisplayValues] = useState<number[]>(
    siteConfig.stats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = siteConfig.stats.map((s) => s.numericValue);

    const observer = new IntersectionObserver(
      (entries) => {
        if (hasAnimated) return;
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        setHasAnimated(true);
        const startTime = performance.now();

        const animate = () => {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / DURATION_MS, 1);
          const eased = easeOutQuart(progress);

          setDisplayValues(
            targets.map((target) => Math.round(eased * target))
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="mx-auto w-full min-w-0 max-w-6xl rounded-2xl border border-slate-200/80 bg-slate-50/80 py-8 sm:py-10"
      aria-label="Platform stats"
    >
      <div className="mx-auto grid w-full grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:px-10">
        {siteConfig.stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <span
              className="text-2xl font-extrabold tabular-nums tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--primary)" }}
            >
              {formatStatValue(
                displayValues[index] ?? 0,
                stat.format,
                stat.suffix
              )}
            </span>
            <span className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
