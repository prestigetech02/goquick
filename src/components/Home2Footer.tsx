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

const quickLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "For Runners", href: "/runners" },
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Delete Account", href: "/account-deletion" },
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
      <h3>
        <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">{title}</span>
      </h3>
      <div className="flex flex-col gap-2.5 font-montserrat text-sm font-semibold text-[#0d2412]/75">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="transition-colors hover:text-[#1b5c2a]">
      {children}
    </Link>
  );
}

export function Home2Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[2.5px] border-[#0d2412] bg-[#fff6d8] text-[#0d2412]">
      <div className="site-container py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={120}
                height={40}
                className="h-7 w-auto object-contain sm:h-9"
              />
            </Link>
            <p className="max-w-xs font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/70">
              {siteConfig.description}
            </p>
            <Image
              src="/trust.png"
              alt="GoQuick — Best Errand Platform"
              width={220}
              height={220}
              className="h-24 w-auto object-contain sm:h-28"
            />
          </div>

          <FooterColumn title="Quick links">
            {quickLinks.map(({ label, href }) => (
              <FooterLink key={label} href={href}>
                {label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalLinks.map(({ label, href }) => (
              <FooterLink key={label} href={href}>
                {label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-[#1b5c2a]"
            >
              {siteConfig.contact.email}
            </a>
            <p>{siteConfig.contact.phone}</p>
            <FooterLink href="/contact">Contact page</FooterLink>
            <div className="flex items-center gap-2.5 pt-1" aria-label="Social media">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-[#0d2412] bg-white text-[#0d2412] shadow-[2px_2px_0_#ffe600] transition hover:bg-[#308030] hover:text-white"
                  aria-label={label}
                >
                  <HugeiconsIcon icon={icon} size={16} color="currentColor" />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        <div className="mt-10 border-t-[2.5px] border-[#0d2412] pt-6">
          <p className="text-center font-montserrat text-sm font-semibold text-[#0d2412]/60">
            © {year} {siteConfig.name}. All rights reserved.
            <span className="mx-2 text-[#0d2412]/30" aria-hidden>
              ·
            </span>
            Developed and managed by{" "}
            <a
              href="https://techyx360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d2412]/80 underline-offset-2 transition hover:text-[#1b5c2a] hover:underline"
            >
              TechyX360
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
