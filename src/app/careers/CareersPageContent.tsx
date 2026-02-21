"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareerApplyModal } from "@/components/CareerApplyModal";
import { siteConfig } from "@/lib/site";

type Role = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
};

type CareersPageContentProps = {
  openPositions: Role[];
  benefits: string[];
  careersEmail: string;
};

export function CareersPageContent({
  openPositions,
  benefits,
  careersEmail,
}: CareersPageContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  function openApplyModal(positionTitle: string) {
    setSelectedPosition(positionTitle);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Careers
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Join the {siteConfig.name} team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We&apos;re building the go-to platform for errands and deliveries. If you want to help people reclaim their
            time and give runners a better way to earn, we&apos;d love to hear from you.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Why join us
          </h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Open positions
          </h2>
          <p className="mt-2 text-slate-600">
            Don&apos;t see a fit? Send your CV to{" "}
            <a href={`mailto:${careersEmail}`} className="text-[var(--primary)] font-medium hover:underline">
              {careersEmail}
            </a>
            .
          </p>
          <ul className="mt-6 space-y-4">
            {openPositions.map((role) => (
              <li
                key={role.title}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 sm:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 sm:text-lg">{role.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {role.department} · {role.type} · {role.location}
                    </p>
                    <p className="mt-2 text-slate-600">{role.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openApplyModal(role.title)}
                    className="mt-3 shrink-0 rounded-lg bg-[var(--primary)] px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-95 sm:mt-0"
                  >
                    Apply
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Get in touch
          </h2>
          <p className="mt-3 text-slate-600">
            Have questions about working at {siteConfig.name}? Reach out to our team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${careersEmail}`}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:opacity-95"
            >
              Email careers
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <CareerApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        positionTitle={selectedPosition}
      />
    </div>
  );
}
