import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const APP_STORE_URL = "https://apps.apple.com/app/goquick/id";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.goquick.app";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GoQuick: we connect you with trusted runners for errands, deliveries, and daily tasks so you can reclaim your time.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="w-full px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        {/* Hero: CTA-style container (same width as other About sections) */}
        <div className="mx-auto max-w-5xl">
          <section
            className="relative overflow-hidden rounded-2xl px-4 py-0.5 sm:px-6 sm:py-1 md:px-10 md:py-2 lg:px-14 lg:py-2"
            style={{ backgroundColor: "var(--primary)" }}
            aria-labelledby="about-hero-heading"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="space-y-6 text-white">
                <h1
                  id="about-hero-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                >
                  About {siteConfig.name}
                </h1>
                <p className="max-w-md text-lg text-white/90 sm:text-xl">
                  We&apos;re building the go-to platform for getting everyday errands done so you can focus on what matters most.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    className="inline-block overflow-hidden rounded transition hover:opacity-90"
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    style={{ borderRadius: "4px" }}
                  >
                    <Image
                      src="/appstore.jpg"
                      alt="Download on the App Store"
                      width={160}
                      height={56}
                      className="h-10 w-auto object-contain sm:h-11 md:h-12"
                    />
                  </a>
                  <a
                    className="inline-block overflow-hidden rounded transition hover:opacity-90"
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    style={{ borderRadius: "4px" }}
                  >
                    <Image
                      src="/playstore.png"
                      alt="Get it on Google Play"
                      width={160}
                      height={56}
                      className="h-10 w-auto object-contain sm:h-11 md:h-12"
                    />
                  </a>
                </div>
              </div>
              <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[320px] lg:min-h-[400px]">
                <div className="relative drop-shadow-2xl">
                  <Image
                    src="/goquick-image.png"
                    alt={`${siteConfig.name} app on phone`}
                    width={320}
                    height={600}
                    className="h-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 320px"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto mt-16 w-full max-w-5xl">
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Who we are
          </h2>
          <p className="mt-4 text-slate-600">
            {siteConfig.name} is your trusted errand and delivery partner. We connect people who need tasks done,
            from grocery runs and pickups to queue help and deliveries, with verified runners who get the job
            done quickly and reliably.
          </p>
          <p className="mt-4 text-slate-600">
            We started with a simple idea: in busy cities like Lagos, time is one of your most valuable resources.
            Everyday errands shouldn’t eat into your day. With {siteConfig.name}, you book a runner, track progress
            in real time, and pay securely, all from your phone.
          </p>
        </section>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
            <div
              className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 10-18 0 9 9 0 0018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>
            <h2
              className="inline-block rounded-lg px-3 py-1.5 text-xl font-bold text-white sm:text-2xl"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Our mission
            </h2>
            <p className="mt-4 text-slate-600">
              To give you back your time by making errands simple, fast, and stress-free. We want every user to feel
              confident that their task is in good hands, and every runner to have a fair, flexible way to earn. We’re
              committed to building a service that works for the way you actually live.
            </p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
            <div
              className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2
              className="inline-block rounded-lg px-3 py-1.5 text-xl font-bold text-white sm:text-2xl"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Our vision
            </h2>
            <p className="mt-4 text-slate-600">
              To be the trusted platform that makes everyday tasks effortless across every city we serve. We envision a
              future where anyone can get errands done reliably and affordably, and where runners can build flexible,
              rewarding work on their own terms.
            </p>
          </section>
        </div>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            What we do
          </h2>
          <p className="mt-4 text-slate-600">
            Through the {siteConfig.name} app, you can request a wide range of everyday tasks:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
              <span className="text-slate-600">Grocery shopping and market runs</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
              <span className="text-slate-600">Pickups and deliveries</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
              <span className="text-slate-600">Queue help (e.g. bank, government offices)</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
              <span className="text-slate-600">Document and package delivery</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>✔</span>
              <span className="text-slate-600">Other everyday tasks you’d rather not do yourself</span>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Why choose us
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>•</span>
              <div>
                <strong className="text-slate-800">Trusted runners</strong>
                <span className="text-slate-600"> We work with verified runners so you can rely on the people handling your errands.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>•</span>
              <div>
                <strong className="text-slate-800">Real-time tracking</strong>
                <span className="text-slate-600"> See where your errand is and stay updated from request to completion.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>•</span>
              <div>
                <strong className="text-slate-800">Secure payments</strong>
                <span className="text-slate-600"> Pay safely in the app with transparent pricing and no surprise charges.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[var(--primary)]" aria-hidden>•</span>
              <div>
                <strong className="text-slate-800">Built for your city</strong>
                <span className="text-slate-600"> We’re focused on serving our users where they live, starting with Lagos and expanding to more cities.</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Get started today
          </h2>
          <p className="mt-3 text-slate-600">
            Download the app and book your first errand, or join our runner network and start earning.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#home"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:opacity-95"
            >
              Download the app
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Contact us
            </Link>
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
