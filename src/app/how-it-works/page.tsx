import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RequestErrandButton } from "@/components/HeroStoreButtons";
import { GetStartedCta } from "@/components/GetStartedCta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how GoQuick works in 4 simple steps: place an order, get matched, track in real time, and complete your errand.",
  alternates: { canonical: "/how-it-works" },
};

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Place an Order",
    description: "Tell us what you need done, where to pick up, and where to deliver.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "We Match You",
    description: "We find the best available runner near you and match you instantly.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Track in Real-time",
    description: "Track your runner in real-time and stay updated until your errand is complete.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-13.018l7.5 3.75a.75.75 0 010 1.348l-7.5 3.75a.75.75 0 01-.614 0l-7.5-3.75a.75.75 0 010-1.348l7.5-3.75a.75.75 0 01.614 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Task Completed",
    description: "Your errand is completed safely. Payment is released to the runner.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
] as const;

const TRUST_SIGNALS = [
  {
    title: "Trusted Runners",
    description: "We verify all runners for your safety.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 12 2.75c2.3 0 4.474.523 6.418 1.454a.75.75 0 0 1 .432.678v5.668c0 3.832-2.237 7.27-5.7 8.85a.75.75 0 0 1-.65 0C8.937 17.82 6.7 14.382 6.7 10.55V5.882a.75.75 0 0 1 .432-.678A11.959 11.959 0 0 1 12 2.714z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Your payments are held safely until completion.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Tracking",
    description: "Track your runner every step of the way.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.75-10.5h-7.5A2.25 2.25 0 0 0 6 8.25v10.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V8.25a2.25 2.25 0 0 0-2.25-2.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "We're here to help anytime, anywhere.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 1 15 0v5.25a1.5 1.5 0 0 1-1.5 1.5h-1.125a1.125 1.125 0 0 1-1.125-1.125V15.75c0-.621.504-1.125 1.125-1.125H19.5M4.5 12v2.625c0 .621.504 1.125 1.125 1.125H6.75c.621 0 1.125.504 1.125 1.125v1.875A1.125 1.125 0 0 1 6.75 18.75H5.25a1.5 1.5 0 0 1-1.5-1.5V12z"
        />
      </svg>
    ),
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="min-h-[60vh] pb-16 pt-24 sm:pt-28 sm:pb-20 lg:pt-32">
        <section
          aria-labelledby="how-heading"
          className="site-container mb-12 grid min-w-0 items-center gap-8 sm:mb-16 sm:gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-12"
        >
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
            How it works
          </p>
          <h1
            id="how-heading"
              className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
              Moving made
              <br />
              <span style={{ color: "var(--primary)" }}>simple.</span>
          </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              {siteConfig.name} connects you with trusted runners to get your errands
              done—fast, safe, and stress-free.
            </p>
          </div>

          <div className="relative flex min-w-0 items-center justify-center lg:justify-end">
            <Image
              src="/how-it-works-hero.png"
              alt={`${siteConfig.name} connecting requesters with trusted runners`}
              width={720}
              height={560}
              className="h-auto w-full max-w-xl object-contain object-center lg:max-w-none"
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>
        </section>

        <section
          className="site-container mb-12 sm:mb-16 lg:mb-20"
          aria-label="Why choose GoQuick"
        >
          <ul
            className="grid grid-cols-1 gap-6 rounded-2xl px-5 py-6 sm:grid-cols-2 sm:gap-5 sm:rounded-3xl sm:px-6 sm:py-7 lg:grid-cols-4 lg:gap-4 lg:px-8 lg:py-8"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 5%, #f8faf8)" }}
          >
            {TRUST_SIGNALS.map((item) => (
              <li key={item.title} className="flex items-start gap-3 sm:gap-3.5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--primary) 14%, white)",
                    color: "var(--primary)",
                  }}
                >
                  {item.icon}
                </span>
                <div className="min-w-0 pt-0.5">
                  <h2 className="text-sm font-bold text-slate-900 sm:text-base">{item.title}</h2>
                  <p className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="site-container">
          <section className="min-w-0" aria-labelledby="process-heading">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold text-[var(--primary)] sm:text-base">
                It&apos;s as easy as 1, 2, 3, 4
              </p>
              <h2
                id="process-heading"
                className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
              >
                Here&apos;s how <span style={{ color: "var(--primary)" }}>{siteConfig.name}</span> works
              </h2>
          </div>

            <ul className="relative mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
              <div
                className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden border-t-2 border-dashed border-slate-200 lg:block"
                aria-hidden
              />
              {PROCESS_STEPS.map(({ step, title, description, icon }) => (
                <li key={step} className="relative flex flex-col items-center">
                  <span
                    className="relative z-[1] flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white sm:h-11 sm:w-11 sm:text-base"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {step}
                  </span>
                  <article className="mt-5 flex w-full flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--primary) 14%, white)",
                          color: "var(--primary)",
                        }}
                      >
                        {icon}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                  </article>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <RequestErrandButton className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:px-6 sm:py-3 sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </section>
          </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <GetStartedCta />
          </div>
      </main>

      <Footer />
    </div>
  );
}
