"use client";

import Image from "next/image";
import { siteConfig, webAppLinks } from "@/lib/site";
import { StoreButton } from "@/components/StoreButton";

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:px-6 sm:py-3 sm:text-base";

/** Primary CTA for requesters → buyer web app */
export function RequestErrandButton({
  className = primaryBtn,
  label = "Request an errand",
  children,
}: {
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={webAppLinks.requestErrand()} className={className}>
      {children ?? label}
    </a>
  );
}

/** Nav / single CTA for requesters → web signup */
export function GetStartedButton({
  className = primaryBtn,
  label = "Request an errand",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={webAppLinks.getStarted()} className={className}>
      {label}
    </a>
  );
}

/** Secondary CTA for runners → mobile store download */
export function RunErrandsButton({
  className = secondaryBtn,
  label = "Run errands",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <StoreButton className={className}>
      {label}
    </StoreButton>
  );
}

export function SignInLink({
  className = "text-sm font-semibold text-[var(--primary)] underline-offset-2 hover:underline",
}: {
  className?: string;
}) {
  return (
    <a href={webAppLinks.signIn()} className={className}>
      Sign in
    </a>
  );
}

/** Hero CTAs: request on web + run errands via app download */
export function HeroStoreButtons() {
  return (
    <div className="flex flex-col items-start gap-3 sm:gap-4">
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <RequestErrandButton />
        <RunErrandsButton />
      </div>
      <p className="text-sm text-slate-600">
        Already have an account? <SignInLink />
      </p>
    </div>
  );
}

/** Store badges for runners (mobile app). */
export function RunnerStoreBadges({
  className = "flex flex-wrap gap-3 sm:gap-4",
  imageClassName = "h-7 w-auto object-contain sm:h-9 md:h-10",
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={className}>
      <a
        href={siteConfig.stores.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition hover:opacity-90"
        aria-label="Download on the App Store"
      >
        <Image
          src="/appstore.jpg"
          alt="Download on the App Store"
          width={160}
          height={56}
          className={imageClassName}
        />
      </a>
      <a
        href={siteConfig.stores.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition hover:opacity-90"
        aria-label="Get it on Google Play"
      >
        <Image
          src="/playstore.png"
          alt="Get it on Google Play"
          width={160}
          height={56}
          className={imageClassName}
        />
      </a>
    </div>
  );
}

/** @deprecated Prefer RequestErrandButton / RunErrandsButton */
export function WaitlistButton({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a href={webAppLinks.requestErrand()} className={className} style={style}>
      {children}
    </a>
  );
}
