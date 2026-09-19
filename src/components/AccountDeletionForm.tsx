"use client";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { siteConfig } from "@/lib/site";

const ROLE_OPTIONS = [
  { value: "buyer", label: "Requester (web app)" },
  { value: "runner", label: "Runner (mobile app)" },
];

const DELETION_API = `${siteConfig.apiBaseUrl}/account-deletion-request`;

const fieldClass =
  "mt-1.5 w-full rounded-xl border-[2.5px] border-[#0d2412] bg-white px-4 py-3 font-montserrat text-sm font-semibold text-[#0d2412] outline-none transition placeholder:text-[#0d2412]/40 focus:bg-[#e8f4ea]";

const labelClass = "font-montserrat text-sm font-extrabold text-[#0d2412]";

export function AccountDeletionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim();
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim();
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.trim();
    const role = (form.querySelector('[name="role"]') as HTMLInputElement)?.value?.trim();
    const reason = (form.querySelector('[name="reason"]') as HTMLTextAreaElement)?.value?.trim();

    if (!name || !email || !phone || !role) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[0-9]{11}$/.test(phone)) {
      setStatus("error");
      setStatusMessage("Phone number must be 11 digits (e.g. 08012345678).");
      return;
    }

    if (!confirmed) {
      setStatus("error");
      setStatusMessage("Please confirm that you understand account deletion is permanent.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch(DELETION_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, role, reason: reason || undefined }),
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
        setStatusMessage(
          data.message ??
            "Your request has been received. We will email you within 7 business days when your account is deleted.",
        );
        form.reset();
        setConfirmed(false);
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ??
            (res.ok
              ? "Something went wrong. Please try again."
              : `Request failed (${res.status}). You can also email ${siteConfig.contact.email}.`),
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        `Could not reach the server. Email us at ${siteConfig.contact.email} with your registered phone number and account type.`,
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="del-name" className={labelClass}>
          Full name
        </label>
        <input
          id="del-name"
          name="name"
          type="text"
          required
          placeholder="Name on your GoQuick account"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="del-email" className={labelClass}>
          Email address
        </label>
        <input
          id="del-email"
          name="email"
          type="email"
          required
          placeholder="Email registered on your account"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="del-phone" className={labelClass}>
          Phone number
        </label>
        <input
          id="del-phone"
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          pattern="[0-9]{11}"
          placeholder="08012345678"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="del-role" className={labelClass} id="del-role-label">
          Account type
        </label>
        <Dropdown
          id="del-role"
          name="role"
          options={ROLE_OPTIONS}
          defaultValue="buyer"
          placeholder="Select account type"
          variant="street"
          className="mt-1.5"
        />
      </div>

      <div>
        <label htmlFor="del-reason" className={labelClass}>
          Reason <span className="font-semibold text-[#0d2412]/45">(optional)</span>
        </label>
        <textarea
          id="del-reason"
          name="reason"
          rows={3}
          placeholder="Tell us why you're leaving"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border-[2.5px] border-[#0d2412] bg-[#e8f4ea] px-4 py-3.5">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#308030]"
        />
        <span className="font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80">
          I understand that deleting my GoQuick account is permanent. I will lose access to my
          errands, wallet balance (if any), messages, and profile data, subject to our data
          retention policy.
        </span>
      </label>

      <div className="space-y-3 pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="home2-create-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] disabled:opacity-70 sm:w-auto sm:px-7 sm:text-base"
        >
          {status === "loading" ? "Submitting…" : "Submit deletion request"}
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
