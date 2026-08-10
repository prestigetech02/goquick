import type { ReactNode } from "react";

/** Modern soft-3D icons for the Why GoQuick feature cards */

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-12 w-12 sm:h-14 sm:w-14"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function Icon3dLightning() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="bolt-body" x1="18" y1="8" x2="46" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="0.45" stopColor="#308030" />
          <stop offset="1" stopColor="#1E5A1E" />
        </linearGradient>
        <linearGradient id="bolt-shine" x1="24" y1="10" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="bolt-shadow" x="8" y="8" width="48" height="52" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="14" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <path
        filter="url(#bolt-shadow)"
        d="M36.5 8.5 22 30.8c-.45.7.05 1.6.9 1.6h9.2l-4.1 21.6c-.2 1.05 1.15 1.7 1.85.85L44.8 30.2c.5-.7 0-1.7-.9-1.7h-9.4l3.3-18.2c.2-1.05-1.15-1.7-1.85-.8Z"
        fill="url(#bolt-body)"
      />
      <path
        d="M35.2 11.2 24.4 29.8h8.4l-3.2 16.2 12.8-18.8h-8.6l3.4-15.99Z"
        fill="url(#bolt-shine)"
      />
    </IconFrame>
  );
}

export function Icon3dShield() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="shield-body" x1="16" y1="8" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6DD66D" />
          <stop offset="0.4" stopColor="#308030" />
          <stop offset="1" stopColor="#184818" />
        </linearGradient>
        <linearGradient id="shield-face" x1="22" y1="14" x2="42" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="shield-shadow" x="10" y="6" width="44" height="54" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="14" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <path
        filter="url(#shield-shadow)"
        d="M32 8.5c4.8 1.6 9.4 2.4 14 2.4.7 0 1.2.5 1.2 1.2v14.2c0 9.4-5.5 17.6-14.2 21.4-.5.2-1.1.2-1.6 0C22.7 43.9 17.2 35.7 17.2 26.3V12.1c0-.7.5-1.2 1.2-1.2 4.6 0 9.2-.8 13.6-2.4Z"
        fill="url(#shield-body)"
      />
      <path
        d="M32 12.2c4.2 1.3 8.2 2 12.2 2.1v12c0 7.6-4.4 14.3-11.4 17.6C25.8 40.6 21.4 33.9 21.4 26.3v-12c4 .1 8-.8 10.6-2.1Z"
        fill="url(#shield-face)"
      />
      <path
        d="m27.2 31.2 3.4 3.4 7.2-8.2"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

export function Icon3dPin() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="pin-body" x1="20" y1="6" x2="44" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="0.5" stopColor="#308030" />
          <stop offset="1" stopColor="#1A4F1A" />
        </linearGradient>
        <radialGradient id="pin-hole" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 22) rotate(90) scale(7.5)">
          <stop stopColor="#E8F8E8" />
          <stop offset="1" stopColor="#C8ECC8" />
        </radialGradient>
        <filter id="pin-shadow" x="12" y="4" width="40" height="56" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="12" ry="3" fill="#1E5A1E" opacity="0.12" />
      <path
        filter="url(#pin-shadow)"
        d="M32 7c8.3 0 15 6.6 15 14.7 0 10.4-12.2 24.6-14.3 27-.4.5-1.1.5-1.5 0C29.2 46.3 17 32.1 17 21.7 17 13.6 23.7 7 32 7Z"
        fill="url(#pin-body)"
      />
      <circle cx="32" cy="22" r="7" fill="url(#pin-hole)" />
      <circle cx="29.5" cy="19.5" r="2.2" fill="#FFFFFF" opacity="0.45" />
    </IconFrame>
  );
}

export function Icon3dHeadset() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="hs-band" x1="12" y1="10" x2="52" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6DD66D" />
          <stop offset="1" stopColor="#286828" />
        </linearGradient>
        <linearGradient id="hs-cup" x1="8" y1="28" x2="24" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CB04C" />
          <stop offset="1" stopColor="#1E5A1E" />
        </linearGradient>
        <linearGradient id="hs-cup-r" x1="40" y1="28" x2="56" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="1" stopColor="#184818" />
        </linearGradient>
        <filter id="hs-shadow" x="4" y="8" width="56" height="50" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="16" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <g filter="url(#hs-shadow)">
        <path
          d="M16 30.5c0-9.1 7.2-16.5 16-16.5s16 7.4 16 16.5"
          stroke="url(#hs-band)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect x="8" y="28" width="12" height="20" rx="6" fill="url(#hs-cup)" />
        <rect x="44" y="28" width="12" height="20" rx="6" fill="url(#hs-cup-r)" />
        <rect x="10.5" y="31" width="7" height="14" rx="3.5" fill="#FFFFFF" opacity="0.22" />
        <rect x="46.5" y="31" width="7" height="14" rx="3.5" fill="#FFFFFF" opacity="0.18" />
        <path
          d="M44 46.5c0 3.6-2.9 6.5-6.5 6.5H32"
          stroke="#286828"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="30.5" cy="53" r="2.4" fill="#1E5A1E" />
      </g>
    </IconFrame>
  );
}

export function Icon3dPhoneOrder() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="phone-body" x1="20" y1="6" x2="44" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A5568" />
          <stop offset="0.5" stopColor="#2D3748" />
          <stop offset="1" stopColor="#1A202C" />
        </linearGradient>
        <linearGradient id="phone-screen" x1="24" y1="12" x2="40" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8F8E8" />
          <stop offset="1" stopColor="#C5E8C5" />
        </linearGradient>
        <linearGradient id="doc-body" x1="30" y1="18" x2="52" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6DD66D" />
          <stop offset="1" stopColor="#286828" />
        </linearGradient>
        <filter id="phone-shadow" x="10" y="4" width="48" height="58" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.25" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="14" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <g filter="url(#phone-shadow)">
        <rect x="18" y="8" width="22" height="42" rx="4" fill="url(#phone-body)" />
        <rect x="21" y="12" width="16" height="32" rx="1.5" fill="url(#phone-screen)" />
        <rect x="25" y="9.5" width="8" height="1.5" rx="0.75" fill="#718096" />
        <rect x="32" y="20" width="18" height="24" rx="3" fill="url(#doc-body)" />
        <rect x="35" y="25" width="12" height="2" rx="1" fill="#FFFFFF" opacity="0.85" />
        <rect x="35" y="30" width="12" height="2" rx="1" fill="#FFFFFF" opacity="0.65" />
        <rect x="35" y="35" width="8" height="2" rx="1" fill="#FFFFFF" opacity="0.5" />
      </g>
    </IconFrame>
  );
}

export function Icon3dRunner() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="runner-body" x1="20" y1="10" x2="44" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="0.5" stopColor="#308030" />
          <stop offset="1" stopColor="#1E5A1E" />
        </linearGradient>
        <linearGradient id="runner-head" x1="26" y1="8" x2="38" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7ED67E" />
          <stop offset="1" stopColor="#308030" />
        </linearGradient>
        <filter id="runner-shadow" x="10" y="4" width="44" height="56" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="14" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <g filter="url(#runner-shadow)">
        <circle cx="32" cy="15" r="7.5" fill="url(#runner-head)" />
        <circle cx="29.5" cy="12.5" r="2" fill="#FFFFFF" opacity="0.35" />
        <path
          d="M32 24c-7 0-12 4.5-12 11v4c0 1.1.9 2 2 2h4.5l2 10c.2 1 1.1 1.7 2.1 1.5.9-.2 1.5-1 1.5-1.9V41h3v9.6c0 .9.6 1.7 1.5 1.9 1 .2 1.9-.5 2.1-1.5l2-10H42c1.1 0 2-.9 2-2v-4c0-6.5-5-11-12-11Z"
          fill="url(#runner-body)"
        />
        <path d="M22 32c-3 1-5.5 3.5-6 7" stroke="#286828" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M42 32c3 1 5.5 3.5 6 7" stroke="#286828" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </IconFrame>
  );
}

export function Icon3dMap() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="map-left" x1="10" y1="14" x2="28" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6DD66D" />
          <stop offset="1" stopColor="#286828" />
        </linearGradient>
        <linearGradient id="map-mid" x1="24" y1="10" x2="40" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="1" stopColor="#1E5A1E" />
        </linearGradient>
        <linearGradient id="map-right" x1="36" y1="14" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CB04C" />
          <stop offset="1" stopColor="#184818" />
        </linearGradient>
        <filter id="map-shadow" x="6" y="8" width="52" height="50" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="16" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <g filter="url(#map-shadow)">
        <path d="M12 18 26 14v34L12 52V18Z" fill="url(#map-left)" />
        <path d="M26 14 38 18v34L26 48V14Z" fill="url(#map-mid)" />
        <path d="M38 18 52 14v34L38 52V18Z" fill="url(#map-right)" />
        <path d="M16 28h6M30 24h6M42 30h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="33" cy="34" r="5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="33" cy="34" r="2.2" fill="#308030" />
      </g>
    </IconFrame>
  );
}

export function Icon3dPackage() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="box-top" x1="16" y1="12" x2="48" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8C56A" />
          <stop offset="1" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="box-front" x1="16" y1="28" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4A84B" />
          <stop offset="1" stopColor="#A67C2A" />
        </linearGradient>
        <linearGradient id="box-side" x1="40" y1="22" x2="54" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4922E" />
          <stop offset="1" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="check-bg" x1="40" y1="38" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BC45B" />
          <stop offset="1" stopColor="#1E5A1E" />
        </linearGradient>
        <filter id="box-shadow" x="8" y="8" width="52" height="52" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E5A1E" floodOpacity="0.25" />
        </filter>
      </defs>
      <ellipse cx="32" cy="56" rx="16" ry="3.5" fill="#1E5A1E" opacity="0.12" />
      <g filter="url(#box-shadow)">
        <path d="M16 24 32 16l16 8-16 8-16-8Z" fill="#E8C56A" />
        <path d="M16 24v20l16 8V32L16 24Z" fill="url(#box-front)" />
        <path d="M48 24v20L32 52V32l16-8Z" fill="url(#box-side)" />
        <path d="M32 16v16M16 24l16 8 16-8" stroke="#8B6914" strokeWidth="1.2" opacity="0.45" />
        <circle cx="48" cy="46" r="9" fill="url(#check-bg)" />
        <path
          d="m43.5 46.2 3 3 6-6.5"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </IconFrame>
  );
}
