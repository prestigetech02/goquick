import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { CookiePreferenceActions } from "@/components/CookiePreferenceActions";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookies Policy",
  description:
    "How GoQuick uses cookies on goquickapp.com.ng and how you can accept optional cookies or keep necessary ones only.",
  path: "/cookies",
});

function TitleSquiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "mx-auto mt-4 w-44 text-[#ffe600] sm:w-56"}
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 10 C18 2 28 12 44 8 C60 4 70 12 86 7 C102 2 112 12 128 8 C144 4 156 11 178 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function toTelHref(phone: string) {
  return `tel:+${phone.replace(/\(0\)/g, "").replace(/\D/g, "")}`;
}

const lastUpdated = new Date().toLocaleDateString("en-NG", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const cookieTypes = [
  {
    n: "01",
    tag: "Always on",
    title: "Strictly necessary",
    copy: "Core functions: page navigation, security, and storing your cookie consent choice. These do not require consent.",
    featured: true,
  },
  {
    n: "02",
    tag: "Optional",
    title: "Analytics",
    copy: "Help us understand traffic, popular pages, and issues. We only use these if you accept optional cookies.",
    featured: false,
  },
  {
    n: "03",
    tag: "Optional",
    title: "Functional",
    copy: "Remember preferences that make the visit smoother. We only use these if you accept optional cookies.",
    featured: false,
  },
] as const;

const uses = [
  "Keep the website working reliably and remember your cookie preferences.",
  "Measure how visitors use our pages so we can improve content and performance.",
  "Remember settings that make your visit smoother.",
] as const;

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="cookies-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="cookies-heading"
            className="text-[1.85rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Cookies <span className="text-[#ffe600]">Policy</span>
          </h1>
          <TitleSquiggle className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44" />
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#e8f4ea]/80 sm:text-sm">
            Last updated {lastUpdated}
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        aria-labelledby="cookies-intro-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Overview</span>
            <h2
              id="cookies-intro-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
            >
              Small files, clear rules
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
            <article className="home2-service-card bg-white p-5 sm:p-8">
              <span className="home2-street-tag bg-[#308030] text-[#ffe600]">01</span>
              <h3 className="mt-5 font-montserrat text-2xl font-black leading-tight tracking-tight text-[#308030]">
                What they are
              </h3>
              <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base">
                Cookies are small text files stored on your device when you visit a website. Similar
                technologies include local storage, session storage, pixels, and device identifiers.
                They help websites remember your choices, keep the site secure, and understand how it
                is used.
              </p>
            </article>
            <article className="home2-service-card bg-[#308030] p-5 text-[#e8f4ea] sm:p-8">
              <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">02</span>
              <h3 className="mt-5 font-montserrat text-2xl font-black leading-tight tracking-tight">
                How we use them
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {uses.map((use) => (
                  <li key={use} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffe600]" aria-hidden />
                    <span className="font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
                      {use}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 max-w-3xl font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
            This policy explains how {siteConfig.name} uses cookies on our website. Read it with our{" "}
            <Link href="/privacy" className="font-extrabold text-[#1b5c2a] underline underline-offset-2">
              Privacy Policy
            </Link>
            . By using the site and, where required, giving consent, you agree to cookies as described
            here.
          </p>
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#308030] text-[#e8f4ea]"
        id="types"
        aria-labelledby="cookie-types-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Types</span>
            <h2
              id="cookie-types-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              What we store
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
          </div>

          <ul className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3">
            {cookieTypes.map((type) => (
              <li key={type.n}>
                <article
                  className={`home2-service-card flex h-full flex-col p-5 sm:p-7 ${
                    type.featured ? "bg-white text-[#0d2412]" : "bg-[#e8f4ea] text-[#0d2412]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`home2-street-tag w-fit ${
                        type.featured ? "bg-[#0d2412] text-[#ffe600]" : "bg-[#308030] text-[#ffe600]"
                      }`}
                    >
                      {type.tag}
                    </span>
                    <span className="font-montserrat text-sm font-black tracking-tight text-[#0d2412]/35">
                      {type.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-montserrat text-2xl font-black leading-tight tracking-tight text-[#308030]">
                    {type.title}
                  </h3>
                  <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base">
                    {type.copy}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
            We do not use cookies to sell your personal information or to serve third-party advertising
            on our website.
          </p>
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        id="choices"
        aria-labelledby="cookie-choices-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.85fr)] lg:items-start lg:gap-8">
            <article className="home2-service-card bg-white p-5 sm:p-8">
              <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Choices</span>
              <h2
                id="cookie-choices-heading"
                className="mt-5 font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-4xl"
              >
                You stay in control
              </h2>
              <p className="mt-4 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base">
                When you visit, you can accept optional cookies or continue with necessary cookies
                only. You can also control cookies in your browser, including blocking or deleting
                them. Blocking strictly necessary cookies may affect how the site works.
              </p>
              <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base">
                Your consent choice is stored on this device so we do not ask again on every visit.
                Clearing site data in your browser will reset that choice.
              </p>
              <CookiePreferenceActions />
            </article>

            <aside className="flex flex-col gap-4">
              <article className="home2-service-card bg-[#308030] p-5 text-[#e8f4ea] sm:p-7">
                <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Third parties</span>
                <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight sm:text-2xl">
                  Trusted helpers only
                </h3>
                <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90">
                  Some cookies may be set by providers who help us host, analyse, or operate the
                  website. They process information under contracts that protect your data, as in our{" "}
                  <Link href="/privacy" className="font-extrabold text-[#ffe600] underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </article>
              <article className="home2-service-card bg-white p-5 sm:p-7">
                <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Updates</span>
                <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight text-[#308030] sm:text-2xl">
                  This page can change
                </h3>
                <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80">
                  We may update this Cookies Policy from time to time. The revised policy is posted
                  here with a new last-updated date. Continued use after changes means you accept the
                  updated policy.
                </p>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="cookies-contact-heading"
      >
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Help</span>
            <h2
              id="cookies-contact-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl"
            >
              Questions?
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
            <p className="mt-5 max-w-[40ch] font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
              If you have questions about this Cookies Policy, reach us here.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="home2-service-card home2-flat-card flex h-full flex-col bg-[#e8f4ea] p-5 text-[#0d2412] sm:p-6"
              >
                <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">Email</span>
                <p className="mt-5 break-all font-montserrat text-lg font-black leading-tight tracking-tight">
                  {siteConfig.contact.email}
                </p>
              </a>
            </li>
            <li>
              <a
                href={toTelHref(siteConfig.contact.phone)}
                className="home2-service-card home2-flat-card flex h-full flex-col bg-[#e8f4ea] p-5 text-[#0d2412] sm:p-6"
              >
                <span className="home2-street-tag w-fit bg-[#0d2412] text-[#ffe600]">Phone</span>
                <p className="mt-5 font-montserrat text-lg font-black leading-tight tracking-tight">
                  {siteConfig.contact.phone}
                </p>
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="home2-service-card home2-flat-card flex h-full flex-col bg-[#e8f4ea] p-5 text-[#0d2412] sm:p-6"
              >
                <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">Form</span>
                <p className="mt-5 font-montserrat text-lg font-black leading-tight tracking-tight">
                  Contact page
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Home2Footer />
    </div>
  );
}
