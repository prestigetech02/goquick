"use client";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { siteConfig } from "@/lib/site";

const ROLE_OPTIONS = [
  { value: "buyer", label: "Requester (web app)" },
  { value: "runner", label: "Runner (mobile app)" },
];

const DELETION_API = `${siteConfig.apiBaseUrl}/account-deletion-request`;

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
      <div className="space-y-1.5">
        <label htmlFor="del-name" className="text-base font-medium text-slate-800">
          Full name
        </label>
        <input
          id="del-name"
          name="name"
          type="text"
          required
          placeholder="Name on your GoQuick account"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="del-email" className="text-base font-medium text-slate-800">
          Email address
        </label>
        <input
          id="del-email"
          name="email"
          type="email"
          required
          placeholder="Email registered on your account"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="del-phone" className="text-base font-medium text-slate-800">
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
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="del-role" className="text-base font-medium text-slate-800">
          Account type
        </label>
        <Dropdown
          id="del-role"
          name="role"
          options={ROLE_OPTIONS}
          defaultValue="buyer"
          placeholder="Select account type"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="del-reason" className="text-base font-medium text-slate-800">
          Reason (optional)
        </label>
        <textarea
          id="del-reason"
          name="reason"
          rows={3}
          placeholder="Tell us why you're leaving (optional)"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)]"
        />
        <span>
          I understand that deleting my GoQuick account is permanent. I will lose access to my
          errands, wallet balance (if any), messages, and profile data, subject to our data
          retention policy below.
        </span>
      </label>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2.5 text-base font-medium text-white shadow-sm transition hover:bg-[var(--primary-hover)] disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Submitting…" : "Submit deletion request"}
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
