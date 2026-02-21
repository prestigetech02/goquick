import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButton } from "@/components/StoreButton";
import {
  IconCreate,
  IconDetails,
  IconMatch,
  IconChat,
  IconTrack,
  IconPay,
} from "@/components/StepIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Get your errands done in 6 simple steps: create, set details, get matched, chat, track, and pay. See how GoQuick works.",
};

const STEPS = [
  {
    step: 1,
    title: "Create an Errand",
    description:
      "Open the app and create your errand: shopping, delivery, queue help, pickups and more.",
    Icon: IconCreate,
  },
  {
    step: 2,
    title: "Set the Details",
    description:
      "Add location, instructions, budget, and deadline so runners know exactly what to do.",
    Icon: IconDetails,
  },
  {
    step: 3,
    title: "Get Matched Instantly",
    description:
      "Nearby verified runners receive your request and accept the job.",
    Icon: IconMatch,
  },
  {
    step: 4,
    title: "Chat & Confirm",
    description:
      "Use in-app messaging to clarify instructions or special requirements.",
    Icon: IconChat,
  },
  {
    step: 5,
    title: "Track in Real Time",
    description:
      "Follow your errand live and stay updated every step of the way.",
    Icon: IconTrack,
  },
  {
    step: 6,
    title: "Pay Securely & Rate",
    description:
      "Complete payment safely in the app and rate your experience.",
    Icon: IconPay,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto min-h-[60vh] w-full min-w-0 max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-32">
        <section aria-labelledby="how-heading" className="mb-8 min-w-0 sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            How it works
          </p>
          <h1
            id="how-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Get your errands done in 6 simple steps
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            From creating your errand to payment and rating — here&apos;s how {siteConfig.name} gets things done for you.
          </p>
        </section>

        <section className="min-w-0 space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {STEPS.map(({ step, title, description, Icon }) => (
              <article
                key={step}
                className="flex min-w-0 flex-col items-start rounded-xl border border-slate-200 bg-white p-4 text-left sm:p-5 lg:p-6"
              >
                <div
                  className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-[var(--primary)] sm:[&_svg]:h-5 sm:[&_svg]:w-5"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <Icon />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Step {step}
                </span>
                <h2
                  className="mt-1 text-base font-bold sm:text-lg"
                  style={{ color: "var(--primary)" }}
                >
                  {title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>

          <p className="text-center text-lg font-bold text-slate-800 sm:text-xl lg:text-2xl">
            Less stress. Less waiting. More done.
          </p>

          <div className="flex min-w-0 flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:pt-4">
            <StoreButton
              className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-6 py-3 text-base font-medium text-white transition hover:opacity-95"
            >
              Download {siteConfig.name}
            </StoreButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
