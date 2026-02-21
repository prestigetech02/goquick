import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceCards } from "@/components/ServiceCards";
import { StoreButton } from "@/components/StoreButton";
import {
  IconChat,
  IconCreate,
  IconDetails,
  IconMatch,
  IconPay,
  IconTrack,
} from "@/components/StepIcons";
import { TypingWord } from "@/components/TypingWord";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Reliable Runners For Everyday Tasks",
  description:
    "Get errands done faster with GoQuick. Trusted runners, real-time tracking, secure payment—from pickup to delivery.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  return (
    <div className="min-h-screen min-w-0 bg-white text-slate-900">
      <Header />

      <main className="flex min-w-0 flex-col gap-12 pt-14 sm:gap-16 sm:pt-16 md:gap-24">
        <div className="relative w-full min-w-0 overflow-hidden pt-8 pb-0 sm:pt-10 sm:pb-0">
          {/* Hero background elements - full width */}
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 40%, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 50%), linear-gradient(180deg, color-mix(in srgb, var(--primary) 4%, white) 0%, white 100%)",
            }}
          />
          <div
            className="absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-[0.07] sm:h-96 sm:w-96"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <div
            className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full opacity-[0.06] sm:h-80 sm:w-80"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] sm:h-64 sm:w-64"
            style={{ backgroundColor: "var(--primary)" }}
          />

          <section
            id="home"
            className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 pb-4 pt-6 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:pb-6 sm:pt-8 lg:px-10 md:gap-16 md:pb-8 md:pt-10"
          >
            <div className="flex flex-col justify-center gap-4 sm:gap-6">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                Got <TypingWord />?
              </h1>
              <p className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-5xl">
                Stop Wasting Time.
                <br />
                Get it done ASAP.
              </p>
              <p className="max-w-xl text-lg font-medium text-slate-600 sm:text-lg">
                Get errands done fast — grocery shopping, deliveries, queues &
                more — right here in Lagos.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  className="inline-block transition hover:opacity-90"
                  href="https://apps.apple.com/app/goquick/id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/appstore.jpg"
                    alt="Download on the App Store"
                    width={160}
                    height={56}
                    className="h-8 w-auto object-contain sm:h-9 md:h-10"
                  />
                </a>
                <a
                  className="inline-block transition hover:opacity-90"
                  href="https://play.google.com/store/apps/details?id="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={56}
                    className="h-8 w-auto object-contain sm:h-9 md:h-10"
                  />
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                src="/hero-image2.png"
                alt="GoQuick runner with delivery backpack and bike"
                width={560}
                height={640}
                className="h-auto w-full max-w-md object-contain object-center"
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </section>
        </div>

        <section
          id="about"
          className="w-full min-w-0 pt-4 py-10 sm:pt-6 sm:py-14 md:pt-8 md:py-16"
          style={{
            backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)",
          }}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:px-10">
            <div className="relative order-2 flex min-w-0 items-center justify-center sm:order-1">
              <Image
                src="/goquick-image.png"
                alt="GoQuick app on two phones — home screen and runner screen"
                width={400}
                height={600}
                className="h-auto w-full max-w-[280px] object-contain object-center sm:max-w-[320px] md:max-w-[360px]"
                sizes="(max-width: 640px) 280px, 360px"
              />
            </div>
            <div className="order-1 flex min-w-0 flex-col justify-center space-y-4 sm:order-2 sm:space-y-6">
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                Time is valuable. Get errands done ASAP with GoQuick.
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Between work, traffic, family, and daily responsibilities, simple
                errands can consume hours of your day.
              </p>
              <p className="text-base text-slate-600 sm:text-lg">
                GoQuick is built for modern living. We connect you with reliable
                errand runners in your city who handle everyday tasks quickly and
                professionally.
              </p>
              <p className="text-base text-slate-600 sm:text-lg">
               GoQuick helps you reclaim your time with just a
                few taps.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 lg:px-10">
        <section id="steps" className="space-y-10 pt-2 pb-12 text-center sm:space-y-12 sm:pt-4 sm:pb-16">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl" style={{ color: "var(--primary)" }}>
            Get Your Errands Done in 6 Simple Steps
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconCreate />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Create an Errand</h3>
              <p className="mt-2 text-sm text-slate-600">
                Open the app and create your errand: shopping, delivery, queue help, pickups etc.
              </p>
            </article>
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconDetails />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Set the Details</h3>
              <p className="mt-2 text-sm text-slate-600">
                Add location, instructions, budget, and deadline so runners know exactly what to do.
              </p>
            </article>
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconMatch />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Get Matched Instantly</h3>
              <p className="mt-2 text-sm text-slate-600">
                Nearby verified runners receive your request and accept the job.
              </p>
            </article>
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconChat />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Chat & Confirm</h3>
              <p className="mt-2 text-sm text-slate-600">
                Use in-app messaging to clarify instructions or special requirements.
              </p>
            </article>
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconTrack />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Track in Real Time</h3>
              <p className="mt-2 text-sm text-slate-600">
                Follow your errand live and stay updated every step of the way.
              </p>
            </article>
            <article className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left sm:p-6">
              <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                <IconPay />
              </div>
              <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>Pay Securely & Rate</h3>
              <p className="mt-2 text-sm text-slate-600">
                Complete payment safely in the app and rate your experience.
              </p>
            </article>
          </div>
          <p className="mx-auto max-w-xl text-xl font-bold text-slate-800 sm:text-2xl">
            Less stress. Less waiting. More done.
          </p>
        </section>
        </div>

        <section
          id="services"
          className="w-full min-w-0 py-12 sm:py-16"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)" }}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:px-10 md:gap-16">
            <div className="min-w-0 space-y-6">
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl" style={{ color: "var(--primary)" }}>
                Your Personal Errand Service, right in your pocket
              </h2>
              <p className="text-slate-600">
               GoQuick is your trusted errand service app that connects you with reliable runners for everyday tasks quickly and stress-free.
              </p>
              <ServiceCards />
            </div>
            <div className="relative flex min-w-0 items-center justify-center">
              <Image
                src="/for-runner.png"
                alt="GoQuick app screens: errand details, chat with runner, and new errand form"
                width={480}
                height={640}
                className="h-auto w-full max-w-md object-contain object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section
          id="runners"
          className="w-full min-w-0 -mt-12 py-12 sm:-mt-16 sm:py-16 md:-mt-24"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)" }}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:px-10 md:gap-16">
            <div className="relative flex min-w-0 items-center justify-center">
              <Image
                src="/for-runner.png"
                alt="GoQuick app screens for runners: errand details, chat, and new errand"
                width={480}
                height={640}
                className="h-auto w-full max-w-md object-contain object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center space-y-6 py-6 sm:space-y-8 sm:py-8">
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl" style={{ color: "var(--primary)" }}>
                Earn Money Running Errands, On Your Schedule
              </h2>
              <p className="text-slate-600">
                Turn your bike, car, or free time into steady income with our flexible errand runner app.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: "var(--primary)" }} aria-hidden>✔</span>
                  <span className="text-sm text-slate-700 sm:text-base"><strong className="text-slate-900">Flexible Hours</strong> : Choose when you work and accept on-demand errand jobs that fit your schedule.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: "var(--primary)" }} aria-hidden>✔</span>
                  <span className="text-sm text-slate-700 sm:text-base"><strong className="text-slate-900">Transparent Earnings</strong> : See exactly how much you earn per task with clear pricing and no hidden deductions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: "var(--primary)" }} aria-hidden>✔</span>
                  <span className="text-sm text-slate-700 sm:text-base"><strong className="text-slate-900">Instant Job Notifications</strong> : Receive real-time alerts for nearby delivery and errand requests in your area.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: "var(--primary)" }} aria-hidden>✔</span>
                  <span className="text-sm text-slate-700 sm:text-base"><strong className="text-slate-900">Secure Payouts</strong> : Get paid safely and reliably through our trusted in-app payment system.</span>
                </li>
              </ul>
              <p className="font-medium text-slate-800">
                Join one of the fastest growing errand and delivery partner networks in your city.
              </p>
              <StoreButton className="inline-block w-fit rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:opacity-95">
                Become a Runner
              </StoreButton>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}
