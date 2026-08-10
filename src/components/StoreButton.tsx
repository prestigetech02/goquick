"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

function getStoreUrl(): string {
  if (typeof navigator === "undefined") return siteConfig.stores.playStore;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isIOS ? siteConfig.stores.appStore : siteConfig.stores.playStore;
}

type StoreButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: React.ReactNode;
};

/** Platform-aware store link for runners (mobile app). */
export function StoreButton({ children, className, style, ...rest }: StoreButtonProps) {
  const [href, setHref] = useState(siteConfig.stores.playStore);

  useEffect(() => {
    setHref(getStoreUrl());
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}
