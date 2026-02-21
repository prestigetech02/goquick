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
  IconVerify,
  IconClock,
  IconBell,
  IconCheckCircle,
  IconWallet,
} from "@/components/StepIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Get your errands done in 6 simple steps: create, set details, get matched, chat, track, and pay. See how GoQuick works.",
  alternates: { canonical: "/how-it-works" },
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

const RUNNER_STEPS = [
  {
    step: 1,
    title: "Sign up & get verified",
    description:
      "Download the app, create your runner account, and complete verification so you can start accepting jobs.",
    Icon: IconVerify,
  },
  {
    step: 2,
    title: "Set your availability",
    description:
      "Choose when you're available to run errands. Work around your schedule and turn on or off anytime.",
    Icon: IconClock,
  },
  {
    step: 3,
    title: "Receive requests",
    description:
      "Get real-time notifications when errand requests match your area and preferences.",
    Icon: IconBell,
  },
  {
    step: 4,
    title: "Accept & confirm",
    description:
      "Review the details and accept the job. Chat with the requester if you need to clarify anything before you start.",
    Icon: IconMatch,
  },
  {
    step: 5,
    title: "Complete the errand",
    description:
      "Head to pickup, do the task, and update status in the app. Requesters can track progress in real time.",
    Icon: IconCheckCircle,
  },
  {
    step: 6,
    title: "Get paid",
    description:
      "Payment is released when the job is done. Earn per task with transparent pricing and reliable payouts.",
    Icon: IconWallet,
  },
];

function StepCard({
  step,
  title,
  description,
  Icon,
}: {
  step: number;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="flex min-w-0 flex-col items-start rounded-xl border border-slate-200 bg-white p-4 text-left sm:p-5 lg:p-6">
      <div
        className="mb-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10 [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:text-[var(--primary)] sm:[&_svg]:h-5 sm:[&_svg]:w-5"
        style={{ borderColor: "var(--primary)" }}
      >
        <Icon />
      </div>
      <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
        Step {step}
      </span>
      <h2
        className="mt-1 text-sm font-bold sm:text-lg"
        style={{ color: "var(--primary)" }}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}

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
            className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Get your errands done in 6 simple steps
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            From creating your errand to payment and rating, here&apos;s how {siteConfig.name} gets things done for you.
          </p>
        </section>

        {/* For requesters */}
        <section className="min-w-0 space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {STEPS.map(({ step, title, description, Icon }) => (
              <StepCard key={step} step={step} title={title} description={description} Icon={Icon} />
            ))}
          </div>

          <p className="text-center text-base font-bold text-slate-800 sm:text-xl lg:text-2xl">
            Less stress. Less waiting. More done.
          </p>

          <div className="flex min-w-0 flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:pt-4">
            <StoreButton
              className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base"
            >
              Download {siteConfig.name}
            </StoreButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:px-6 sm:py-3 sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* For runners */}
        <section
          id="for-runners"
          className="min-w-0 pt-16 sm:pt-20 lg:pt-24"
          aria-labelledby="runner-heading"
        >
          <div className="mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
              For runners
            </p>
            <h2
              id="runner-heading"
              className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              style={{ color: "var(--primary)" }}
            >
              Earn on your schedule in 6 simple steps
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
              From sign-up to payout, here&apos;s how running errands with {siteConfig.name} works.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {RUNNER_STEPS.map(({ step, title, description, Icon }) => (
              <StepCard key={step} step={step} title={title} description={description} Icon={Icon} />
            ))}
          </div>

          <p className="mt-8 text-center text-base font-bold text-slate-800 sm:text-xl lg:text-2xl">
            Flexible hours. Clear earnings. Get paid when you deliver.
          </p>

          <div className="flex min-w-0 flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:pt-4">
            <StoreButton
              className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95 sm:px-6 sm:py-3 sm:text-base"
            >
              Become a runner
            </StoreButton>
            <Link
              href="/#for-runners"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:px-6 sm:py-3 sm:text-base"
            >
              Learn more on homepage
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
