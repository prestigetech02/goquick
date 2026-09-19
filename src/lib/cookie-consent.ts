export const COOKIE_CONSENT_KEY = "goquick-cookie-consent";

export type ConsentChoice = "accepted" | "necessary";

export function readCookieConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value?: string };
    return parsed.value === "accepted" || parsed.value === "necessary" ? parsed.value : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(value: ConsentChoice) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ value, at: Date.now() }));
  } catch {
    // Ignore storage failures (private mode, blocked storage).
  }
}
