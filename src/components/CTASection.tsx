"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { WaitlistModal } from "@/components/WaitlistModal";


export function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    <div className="px-4 sm:px-6 lg:px-10 -mt-6 sm:-mt-8 md:-mt-10">
      <section
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-4 py-1 sm:px-6 sm:py-2 md:px-10 md:py-2 lg:px-14 lg:py-3 mb-10 sm:mb-12 md:mb-14"
        style={{ backgroundColor: "var(--primary)" }}
        aria-labelledby="cta-heading"
      >
        {/* Background: subtle grid only */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left column: text + store buttons */}
        <div className="space-y-6 text-white">
          <h2
            id="cta-heading"
            className="text-xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Download the app. Get errands done.
          </h2>
          <p className="max-w-md text-base text-white/90 sm:text-xl">
            Book trusted runners for pickups, deliveries, and daily tasks. Save time, get it done.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-block overflow-hidden transition hover:opacity-90"
              aria-label="Download on the App Store"
              style={{ borderRadius: "6px", background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <Image
                src="/appstore.jpg"
                alt="Download on the App Store"
                width={160}
                height={56}
                className="h-8 w-auto object-contain sm:h-11 md:h-12"
              />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-block transition hover:opacity-90"
              aria-label="Get it on Google Play"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <Image
                src="/playstore.png"
                alt="Get it on Google Play"
                width={160}
                height={56}
                className="h-8 w-auto object-contain sm:h-11 md:h-12"
              />
            </button>
          </div>
        </div>

        {/* Right column: image */}
        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[320px] lg:min-h-[400px]">
          <div className="relative drop-shadow-2xl">
            <Image
              src="/goquick-image.png"
              alt={`${siteConfig.name} app on phone`}
              width={320}
              height={600}
              className="h-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]"
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 320px"
            />
          </div>
        </div>
        </div>
      </section>
    </div>
    </>
  );
}
