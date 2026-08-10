"use client";

import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { siteConfig, webAppLinks } from "@/lib/site";

type FluidVariant = "primary" | "secondary" | "light" | "outlineLight";

type FluidButtonProps = {
  href: string;
  children: ReactNode;
  variant?: FluidVariant;
  /** Dark circle arrow — typical for primary CTAs */
  showArrow?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

const sizeClasses =
  "inline-flex h-12 items-center justify-center rounded-full text-sm font-semibold sm:h-14 sm:text-base";

const variantClasses: Record<FluidVariant, string> = {
  primary: "btn-fluid-primary py-0 pl-5 pr-1.5 sm:pl-6 sm:pr-2",
  secondary: "btn-fluid-secondary border border-slate-300 px-5 sm:px-6",
  light: "btn-fluid-light py-0 pl-5 pr-1.5 sm:pl-6 sm:pr-2",
  outlineLight: "btn-fluid-outline-light px-5 sm:px-6",
};

function ArrowCircle({ tone = "dark" }: { tone?: "dark" | "brand" }) {
  return (
    <span
      className={[
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition group-hover:translate-x-0.5 sm:h-9 sm:w-9",
        tone === "brand" ? "bg-[var(--primary)]" : "bg-[#1e5a1e]",
      ].join(" ")}
      aria-hidden
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </span>
  );
}

function getStoreUrl(): string {
  if (typeof navigator === "undefined") return siteConfig.stores.playStore;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isIOS ? siteConfig.stores.appStore : siteConfig.stores.playStore;
}

/** Pill button with fluid fill hover. Use anywhere CTAs need this treatment. */
export function FluidButton({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
  ...rest
}: FluidButtonProps) {
  return (
    <a
      href={href}
      className={[
        "btn-fluid",
        sizeClasses,
        variantClasses[variant],
        showArrow ? "group gap-2.5" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <span className="btn-fluid-blob" aria-hidden />
      <span className={`btn-fluid-content${showArrow ? " gap-2.5" : ""}`}>
        <span>{children}</span>
        {showArrow ? <ArrowCircle tone={variant === "light" ? "brand" : "dark"} /> : null}
      </span>
    </a>
  );
}

/** Fluid button that links to the correct mobile store for the device. */
export function FluidStoreButton({
  children,
  variant = "secondary",
  showArrow = false,
  className = "",
  ...rest
}: Omit<FluidButtonProps, "href">) {
  const [href, setHref] = useState(siteConfig.stores.playStore);

  useEffect(() => {
    setHref(getStoreUrl());
  }, []);

  return (
    <FluidButton
      href={href}
      variant={variant}
      showArrow={showArrow}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </FluidButton>
  );
}

/** Homepage hero CTA pair: Book an Errand + Become a Runner */
export function HeroCtaButtons({
  className = "",
  tone = "default",
}: {
  className?: string;
  /** Use light buttons on green / dark brand backgrounds */
  tone?: "default" | "onBrand";
}) {
  const primaryVariant = tone === "onBrand" ? "light" : "primary";
  const secondaryVariant = tone === "onBrand" ? "outlineLight" : "secondary";

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`.trim()}>
      <FluidButton href={webAppLinks.requestErrand()} variant={primaryVariant} showArrow>
        Book an Errand
      </FluidButton>
      <FluidStoreButton variant={secondaryVariant}>Become a Runner</FluidStoreButton>
    </div>
  );
}
