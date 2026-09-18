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

const fieldClass =
  "mt-1.5 w-full rounded-xl border-[2.5px] border-[#0d2412] bg-white px-4 py-3 font-montserrat text-sm font-semibold text-[#0d2412] outline-none transition placeholder:text-[#0d2412]/40 focus:bg-[#e8f4ea]";

const labelClass = "font-montserrat text-sm font-extrabold text-[#0d2412]";

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
        setStatusMessage(data.message ?? "Thanks. We'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ??
            (res.ok ? "Something went wrong. Please try again." : `Request failed (${res.status}). Check that the API is at ${CONTACT_API} and CORS allows this site.`)
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Could not reach the server. Ensure the backend is running and, for local dev, set NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1 in the landing .env then restart the dev server."
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="topic" className={labelClass} id="topic-label">
          Topic
        </label>
        <Dropdown
          id="topic"
          name="topic"
          options={TOPIC_OPTIONS}
          defaultValue="support"
          placeholder="Select a topic"
          variant="street"
          className="mt-1.5"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="space-y-3 pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="home2-create-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] disabled:opacity-70 sm:w-auto sm:px-7 sm:text-base"
        >
          {status === "loading" ? "Sending…" : "Send message"}
          {status !== "loading" ? <span aria-hidden>→</span> : null}
        </button>
        {status === "success" ? (
          <p className="font-montserrat text-sm font-semibold text-[#308030]">{statusMessage}</p>
        ) : null}
        {status === "error" ? (
          <p className="font-montserrat text-sm font-semibold text-[#e23d28]">{statusMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
