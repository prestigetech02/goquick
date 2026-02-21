"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  NewTwitterIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const APP_STORE_URL = "https://apps.apple.com/app/goquick/id";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.goquick.app";

const quickLinks = [
  { label: "Features", href: "/#services" },
  { label: "For Runners", href: "/#for-runners" },
  { label: "Pricing", href: "/#pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/#services" },
  { label: "Compliance", href: "/#services" },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook01Icon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, icon: NewTwitterIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TiktokIcon },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </h3>
      <div
        className="h-px w-10 bg-white/40"
        aria-hidden
      />
      <div className="flex flex-col gap-2 text-sm text-slate-300">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Company */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link
              href="/#home"
              className="inline-block"
              aria-label={`${siteConfig.name} home`}
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={120}
                height={40}
                className="h-7 w-auto object-contain sm:h-9"
              />
            </Link>
            <p className="max-w-xs text-sm text-slate-300">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3" aria-label="Social media">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] sm:h-9 sm:w-9"
                  aria-label={label}
                >
                  <HugeiconsIcon icon={icon} size={16} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <FooterColumn title="Quick Links">
            {quickLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </FooterColumn>

          {/* Column 3: Legal */}
          <FooterColumn title="Legal">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </FooterColumn>

          {/* Column 4: Contact + Download App */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <div className="h-px w-10 bg-white/40" aria-hidden />
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span aria-hidden>
                  <svg
                    className="h-4 w-4 shrink-0 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                {siteConfig.contact.phone}
              </p>
            </div>
            <div className="pt-2">
              <p className="mb-3 text-sm font-semibold text-white">
                Download App
              </p>
              <div className="flex flex-nowrap items-center gap-2">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 overflow-hidden rounded bg-black transition hover:opacity-90"
                  style={{ borderRadius: "4px" }}
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/appstore.jpg"
                    alt="Download on the App Store"
                    width={120}
                    height={36}
                    className="h-7 w-auto object-contain sm:h-9"
                  />
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 overflow-hidden rounded bg-black transition hover:opacity-90"
                  style={{ borderRadius: "4px" }}
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={36}
                    className="h-7 w-auto object-contain sm:h-9"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700/80 pt-8">
          <p className="text-center text-sm text-slate-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
