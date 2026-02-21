"use client";

import { useEffect, useState } from "react";

const WORDS = ["GoQuick", "Deliveries", "Queues", "Shopping"];
const TYPE_MS = 100;
const PAUSE_MS = 2000;
const DELETE_MS = 50;

export function TypingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  const word = WORDS[wordIndex];

  useEffect(() => {
    if (phase === "typing") {
      if (visibleLength >= word.length) {
        const t = setTimeout(() => setPhase("pause"), PAUSE_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setVisibleLength((n) => n + 1), TYPE_MS);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("deleting"), PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (visibleLength <= 0) {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setPhase("typing");
        return () => {};
      }
      const t = setTimeout(() => setVisibleLength((n) => n - 1), DELETE_MS);
      return () => clearTimeout(t);
    }

    return () => {};
  }, [phase, visibleLength, word.length]);

  const displayText = word.slice(0, visibleLength);

  return (
    <span
      className="inline-block rounded px-1.5 py-0.5 text-white"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {displayText}
      <span
        className="ml-0.5 inline-block h-[0.9em] w-0.5 animate-pulse bg-white"
        aria-hidden
      />
    </span>
  );
}
