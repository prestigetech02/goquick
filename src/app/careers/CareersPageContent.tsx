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

      <main>
        <section
          className="relative overflow-hidden"
          aria-labelledby="careers-hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 15% 20%, color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 90% 70%, color-mix(in srgb, var(--primary) 9%, transparent) 0%, transparent 50%), linear-gradient(180deg, color-mix(in srgb, var(--primary) 5%, white) 0%, white 72%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-[0.08] sm:h-96 sm:w-96"
            style={{ backgroundColor: "var(--primary)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full opacity-[0.06] sm:h-72 sm:w-72"
            style={{ backgroundColor: "var(--primary)" }}
            aria-hidden
          />

          <div className="site-container relative flex min-h-[72vh] flex-col justify-center pb-16 pt-28 sm:min-h-[68vh] sm:pb-20 sm:pt-32">
            <p
              className="careers-hero-fade text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
              style={{ animationDelay: "0ms" }}
            >
              Careers
            </p>
            <h1
              id="careers-hero-heading"
              className="careers-hero-fade mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              {siteConfig.name}
            </h1>
            <p
              className="careers-hero-fade mt-5 max-w-md text-lg font-medium leading-snug text-slate-600 sm:mt-6 sm:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Build the platform that gets Lagos moving. Small team. Real impact.
            </p>
            <div
              className="careers-hero-fade mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base"
              >
                View open roles
              </a>
              <a
                href={`mailto:${careersEmail}`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:border-slate-400 hover:bg-white sm:px-6 sm:py-3 sm:text-base"
              >
                Email us
              </a>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
            aria-hidden
          />
        </section>

        <div className="site-container pb-16 pt-12 sm:pt-16">
          <section className="mb-16">
            <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">
              Why join us
            </h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>
                    ✔
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="open-positions" className="mb-16 scroll-mt-28">
            <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">
              Open positions
            </h2>
            <p className="mt-2 text-slate-600">
              Don&apos;t see a fit? Send your CV to{" "}
              <a
                href={`mailto:${careersEmail}`}
                className="font-medium text-[var(--primary)] hover:underline"
              >
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">Get in touch</h2>
            <p className="mt-3 text-slate-600">
              Have questions about working at {siteConfig.name}? Reach out to our team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${careersEmail}`}
                className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base"
              >
                Email careers
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:px-6 sm:py-3 sm:text-base"
              >
                Contact us
              </Link>
            </div>
          </section>
        </div>
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
