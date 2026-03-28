"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Status = "idle" | "loading" | "success" | "error";
type JoinRole = "runner" | "requester";

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<JoinRole | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setRole("");
      setStatus("idle");
      setErrorMessage("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Keyboard: close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (role !== "runner" && role !== "requester") {
      setStatus("error");
      setErrorMessage("Please select whether you want to join as Runner or Requester.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, role }),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (!isOpen || !mounted) return null;

  return createPortal(
    /* Backdrop */
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal
      aria-labelledby="waitlist-heading"
    >
      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
        aria-live="polite"
        style={{ overflow: "hidden" }}
      >
        <div className="max-h-[88vh] overflow-y-auto">
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: "var(--primary)" }} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="px-7 pb-8 pt-6">
          {status === "success" ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center gap-4 py-4 text-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">You're on the list!</h2>
              <p className="text-sm text-slate-500">
                We'll send you a heads-up the moment GoQuick lands in the stores.
                Keep an eye on your inbox.
              </p>
              <button
                onClick={onClose}
                className="mt-2 w-full rounded-xl py-3 text-sm font-bold text-white transition hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Awesome, see you soon!
              </button>
            </div>
          ) : (
            /* ── Default / form state ── */
            <>
              {/* Branding */}
              <h2
                id="waitlist-heading"
                className="mb-3 text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl"
              >
                Hey GoQuicker 👋
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                We're coming to the stores sooner than you think. But while you wait, would
                you mind joining our waitlist so you can be the{" "}
                <span className="font-semibold" style={{ color: "var(--primary)" }}>
                  first to know
                </span>{" "}
                when we launch?
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <fieldset className="mb-4">
                  <legend className="mb-2 block text-sm font-semibold text-slate-700">
                    Want to join GoQuick as
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 transition hover:border-slate-300">
                      <input
                        type="radio"
                        name="join-role"
                        value="runner"
                        checked={role === "runner"}
                        onChange={() => {
                          setRole("runner");
                          if (status === "error") {
                            setStatus("idle");
                            setErrorMessage("");
                          }
                        }}
                        className="h-4 w-4"
                        disabled={status === "loading"}
                      />
                      <span>Errand Runner</span>
                    </label>
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 transition hover:border-slate-300">
                      <input
                        type="radio"
                        name="join-role"
                        value="requester"
                        checked={role === "requester"}
                        onChange={() => {
                          setRole("requester");
                          if (status === "error") {
                            setStatus("idle");
                            setErrorMessage("");
                          }
                        }}
                        className="h-4 w-4"
                        disabled={status === "loading"}
                      />
                      <span>Requester</span>
                    </label>
                  </div>
                </fieldset>

                <label htmlFor="waitlist-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Your email address
                </label>
                <input
                  ref={inputRef}
                  id="waitlist-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  disabled={status === "loading"}
                  className="mb-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-transparent focus:ring-2 disabled:opacity-60"
                  style={{ focusRingColor: "var(--primary)" } as React.CSSProperties}
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px var(--primary)")}
                  onBlur={(e) => (e.target.style.boxShadow = "")}
                />

                {status === "error" && errorMessage && (
                  <p className="mb-3 text-xs text-red-500">{errorMessage}</p>
                )}
                {status !== "error" && <div className="mb-3" />}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90 active:scale-95 disabled:opacity-60"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Signing you up…
                    </span>
                  ) : (
                    "Yes, let me join 🚀"
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </form>
            </>
          )}
        </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
