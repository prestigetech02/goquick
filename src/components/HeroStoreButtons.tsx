"use client";

import { useState } from "react";
import Image from "next/image";
import { WaitlistModal } from "@/components/WaitlistModal";

export function HeroStoreButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block transition hover:opacity-90"
          aria-label="Download on the App Store"
        >
          <Image
            src="/appstore.jpg"
            alt="Download on the App Store"
            width={160}
            height={56}
            className="h-7 w-auto object-contain sm:h-9 md:h-10"
          />
        </button>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block transition hover:opacity-90"
          aria-label="Get it on Google Play"
        >
          <Image
            src="/playstore.png"
            alt="Get it on Google Play"
            width={160}
            height={56}
            className="h-7 w-auto object-contain sm:h-9 md:h-10"
          />
        </button>
      </div>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// Standalone CTA button (e.g. "Become a Runner") that opens the waitlist modal.
export function WaitlistButton({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)} className={className} style={style}>
        {children}
      </button>
      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
