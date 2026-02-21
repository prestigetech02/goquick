"use client";

import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/goquick/id";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.goquick.app";

function getStoreUrl(): string {
  if (typeof navigator === "undefined") return PLAY_STORE_URL;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isIOS ? APP_STORE_URL : PLAY_STORE_URL;
}

type StoreButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: React.ReactNode;
};

export function StoreButton({ children, className, style, ...rest }: StoreButtonProps) {
  const [href, setHref] = useState(PLAY_STORE_URL);

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
