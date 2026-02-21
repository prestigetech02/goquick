"use client";

import { useState, useRef, useEffect } from "react";

type CareerApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
};

const ACCEPTED_CV_TYPES = "application/pdf,.doc,.docx";
const MAX_CV_SIZE_MB = 5;

export function CareerApplyModal({ isOpen, onClose, positionTitle }: CareerApplyModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setStatusMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const location = (formData.get("location") as string)?.trim();
    const cv = formData.get("cv") as File | null;

    if (!name || !location) {
      setStatus("error");
      setStatusMessage("Please enter your name and location.");
      return;
    }
    if (!cv || cv.size === 0) {
      setStatus("error");
      setStatusMessage("Please upload your CV.");
      return;
    }
    if (cv.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      setStatus("error");
      setStatusMessage(`CV must be under ${MAX_CV_SIZE_MB}MB.`);
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const payload = new FormData();
      payload.append("position", positionTitle);
      payload.append("name", name);
      payload.append("location", location);
      payload.append("cv", cv);
      const coverLetter = (formData.get("coverLetter") as string)?.trim();
      const portfolioLink = (formData.get("portfolioLink") as string)?.trim();
      const socialLink = (formData.get("socialLink") as string)?.trim();
      if (coverLetter) payload.append("coverLetter", coverLetter);
      if (portfolioLink) payload.append("portfolioLink", portfolioLink);
      if (socialLink) payload.append("socialLink", socialLink);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: payload,
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

      if (res.ok && (data.success ?? res.ok)) {
        setStatus("success");
        setStatusMessage(data.message ?? "Application submitted. We'll be in touch!");
        form.reset();
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ?? (res.ok ? "Something went wrong. Please try again." : `Request failed (${res.status}).`)
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("Could not submit. Please check your connection and try again.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/60"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <h2 id="apply-modal-title" className="text-lg font-bold text-slate-900">
            Apply for {positionTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-6">
          <input type="hidden" name="position" value={positionTitle} readOnly />

          <div>
            <label htmlFor="apply-name" className="block text-sm font-medium text-slate-800">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              id="apply-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="apply-location" className="block text-sm font-medium text-slate-800">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              id="apply-location"
              name="location"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="e.g. Lagos, Nigeria"
            />
          </div>

          <div>
            <label htmlFor="apply-cv" className="block text-sm font-medium text-slate-800">
              Upload CV <span className="text-red-500">*</span>
            </label>
            <input
              id="apply-cv"
              name="cv"
              type="file"
              required
              accept={ACCEPTED_CV_TYPES}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-[var(--primary)] file:px-4 file:py-2 file:text-white file:transition hover:file:opacity-90"
            />
            <p className="mt-1 text-xs text-slate-500">PDF or Word, max {MAX_CV_SIZE_MB}MB</p>
          </div>

          <div>
            <label htmlFor="apply-cover" className="block text-sm font-medium text-slate-800">
              Cover letter <span className="text-slate-400">(optional)</span>
            </label>
            <textarea
              id="apply-cover"
              name="coverLetter"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="Tell us why you're a great fit..."
            />
          </div>

          <div>
            <label htmlFor="apply-portfolio" className="block text-sm font-medium text-slate-800">
              Portfolio link <span className="text-slate-400">(optional)</span>
            </label>
            <input
              id="apply-portfolio"
              name="portfolioLink"
              type="url"
              autoComplete="url"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="https://..."
            />
          </div>

          <div>
            <label htmlFor="apply-social" className="block text-sm font-medium text-slate-800">
              Social media link <span className="text-slate-400">(optional)</span>
            </label>
            <input
              id="apply-social"
              name="socialLink"
              type="url"
              autoComplete="url"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              placeholder="LinkedIn, Twitter, etc."
            />
          </div>

          {status === "success" && (
            <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800" role="status">
              {statusMessage}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800" role="alert">
              {statusMessage}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex-1 rounded-lg bg-[var(--primary)] px-4 py-2.5 font-medium text-white transition hover:opacity-95 disabled:opacity-70"
            >
              {status === "loading" ? "Submitting…" : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
