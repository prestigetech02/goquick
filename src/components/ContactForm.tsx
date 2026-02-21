"use client";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { siteConfig } from "@/lib/site";

const TOPIC_OPTIONS = [
  { value: "support", label: "App support / Errand help" },
  { value: "runner", label: "Become a runner" },
  { value: "payment", label: "Payment or payout issue" },
  { value: "partnership", label: "Partnership / Business" },
  { value: "press", label: "Press & media" },
  { value: "feedback", label: "Feedback or suggestion" },
  { value: "other", label: "Other" },
];

const CONTACT_API = `${siteConfig.apiBaseUrl}/contact`;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim();
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim();
    const topic = (form.querySelector('[name="topic"]') as HTMLInputElement)?.value?.trim();
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim();

    if (!name || !email || !topic || !message) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });
      const contentType = res.headers.get("content-type");
      let data: { success?: boolean; message?: string } = {};
      if (contentType?.includes("application/json")) {
        try {
          data = (await res.json()) as { success?: boolean; message?: string };
        } catch {
          data = {};
        }
      }

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message ?? "Thanks for reaching out! We'll get back to you within 24 hours.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ??
            (res.ok ? "Something went wrong. Please try again." : `Request failed (${res.status}). Check that the API is at ${CONTACT_API} and CORS allows this site.`)
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Could not reach the server. Ensure the backend is running and, for local dev, set NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1 in the landing .env then restart the dev server."
      );
    }
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-base font-medium text-slate-800">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Adebola Johnson"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-base font-medium text-slate-800">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="topic" className="text-base font-medium text-slate-800">
          Topic
        </label>
        <Dropdown
          id="topic"
          name="topic"
          options={TOPIC_OPTIONS}
          defaultValue="support"
          placeholder="Select a topic"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-base font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your errand, issue, or enquiry. Include order ID if you're reporting a problem..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2.5 text-base font-medium text-white shadow-sm transition hover:bg-[var(--primary-hover)] disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Sending…" : "Send to GoQuick"}
        </button>
        {status === "success" && (
          <p className="text-base font-medium text-[var(--primary)]">{statusMessage}</p>
        )}
        {status === "error" && (
          <p className="text-base font-medium text-red-600">{statusMessage}</p>
        )}
      </div>
    </form>
  );
}
