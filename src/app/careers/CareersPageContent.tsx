"use client";

import { useState } from "react";
import { Home2Header } from "@/components/Home2Header";
import { Home2Faq } from "@/components/Home2Faq";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Footer } from "@/components/Home2Footer";
import { CareerApplyModal } from "@/components/CareerApplyModal";

type Role = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
};

type CareersPageContentProps = {
  openPositions: Role[];
  careersEmail: string;
};

function TitleSquiggle({ className = "mx-auto mt-4 w-44 text-[#ffe600] sm:w-56" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 14" fill="none" aria-hidden>
      <path
        d="M2 10 C18 2 28 12 44 8 C60 4 70 12 86 7 C102 2 112 12 128 8 C144 4 156 11 178 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CareersPageContent({
  openPositions,
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
      <Home2Header />

      <section className="relative overflow-hidden bg-[#0d2412] text-[#e8f4ea]" aria-labelledby="careers-hero-heading">
        <div className="mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center font-montserrat sm:min-h-[88svh] sm:px-8 sm:pb-20 sm:pt-32 md:pt-36">
          <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Careers</span>
          <h1
            id="careers-hero-heading"
            className="mt-5 text-[2.35rem] font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Come build
            <br />
            with <span className="text-[#ffe600]">GoQuick</span>
          </h1>
          <TitleSquiggle />
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4">
            <a
              href="#open-positions"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#308030] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#286828] hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              View open roles
              <span aria-hidden>→</span>
            </a>
            <a
              href={`mailto:${careersEmail}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-[#308030] bg-transparent px-6 py-3.5 text-sm font-extrabold text-[#e8f4ea] shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#308030]/15 hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              Email us
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        id="open-positions"
        aria-labelledby="careers-roles-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl">
            <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Open roles</span>
            <h2
              id="careers-roles-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
            >
              Roles we need filled
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#f0b429] sm:w-52" />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
            {openPositions.map((role) => (
              <li key={role.title}>
                <article className="home2-service-card flex h-full flex-col bg-white p-5 sm:p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="home2-street-tag bg-[#308030] text-[#ffe600]">{role.department}</span>
                    <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">{role.type}</span>
                  </div>
                  <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 font-montserrat text-sm font-semibold text-[#0d2412]/55">
                    {role.location}
                  </p>
                  <p className="mt-3 flex-1 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
                    {role.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => openApplyModal(role.title)}
                    className="home2-create-cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] sm:w-auto"
                  >
                    Apply now
                    <span aria-hidden>→</span>
                  </button>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.35rem] border-[3px] border-[#0d2412] bg-transparent px-5 py-5 shadow-[5px_6px_0_#0d2412] sm:mt-16 sm:flex-row sm:items-center sm:px-8 sm:py-6 lg:mt-20">
            <p className="font-montserrat text-xl font-black leading-tight tracking-tight text-[#0d2412] sm:text-2xl lg:text-[1.75rem]">
              Don&apos;t see a fit?
            </p>
            <a
              href={`mailto:${careersEmail}`}
              className="home2-create-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] sm:w-auto sm:px-7 sm:text-base"
            >
              Email us
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <Home2Faq />
      <Home2Cta />
      <Home2Footer />

      <CareerApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        positionTitle={selectedPosition}
      />
    </div>
  );
}
