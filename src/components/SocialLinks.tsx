"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  NewTwitterIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: WhatsappIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook01Icon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, icon: NewTwitterIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TiktokIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
];

type SocialLinksVariant = "default" | "light";

export function SocialLinks({ variant = "default" }: { variant?: SocialLinksVariant }) {
  const isLight = variant === "light";
  return (
    <div className="flex items-center gap-3" aria-label="Social media">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            isLight
              ? "text-slate-600 hover:bg-slate-200/80 hover:text-[var(--primary)]"
              : "text-slate-400 hover:bg-slate-700/80 hover:text-[var(--primary)]"
          }`}
          aria-label={label}
        >
          <HugeiconsIcon icon={icon} size={22} color="currentColor" />
        </a>
      ))}
    </div>
  );
}
