import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { AccountDeletionForm } from "@/components/AccountDeletionForm";
import { siteConfig, webAppLinks } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Delete Your GoQuick Account",
  description:
    "Delete your GoQuick requester or runner account from the app, or submit an account deletion request online.",
  path: "/account-deletion",
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

const deletionPaths = [
  {
    n: "01",
    tag: "Web",
    tagClass: "bg-[#308030] text-[#ffe600]",
    title: "Requesters",
    copy: "Delete from the web app while signed in.",
    steps: [
      "Sign in at the GoQuick web app.",
      "Open Profile → Account & Security.",
      "Scroll to Danger zone and choose Delete account.",
      "Enter your password. Your account is deleted immediately.",
    ],
    cta: { label: "Open web app", href: webAppLinks.accountSecurity() },
    external: false,
  },
  {
    n: "02",
    tag: "App",
    tagClass: "bg-[#0d2412] text-[#ffe600]",
    title: "Runners",
    copy: "Delete from the runner app on your phone.",
    steps: [
      "Open the GoQuick runner app and sign in.",
      "Go to Profile → Account & Security.",
      "Tap Delete Account, enter your password, and confirm.",
      "Your account is deleted immediately.",
    ],
    cta: { label: "Get the runner app", href: siteConfig.stores.playStore },
    external: true,
  },
] as const;

const dataFacts = [
  {
    n: "01",
    title: "Profile is gone",
    copy: "Login access, push tokens, and in-app preferences are removed when the account is deleted.",
  },
  {
    n: "02",
    title: "Some records stay",
    copy: "Errand history, chats, and payments may be kept for a limited time for fraud, disputes, tax, or the law.",
  },
  {
    n: "03",
    title: "Clear the wallet",
    copy: "Withdraw balances first where you can. Active errands or disputes can delay deletion until they close.",
  },
  {
    n: "04",
    title: "Full policy",
    copy: "The Privacy Policy has the full picture of what we keep and for how long.",
    href: "/privacy",
    linkLabel: "Read privacy policy",
  },
] as const;

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="delete-account-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="delete-account-heading"
            className="text-[1.65rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Delete your <span className="text-[#ffe600]">account</span>
          </h1>
          <TitleSquiggle className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44" />
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        id="in-app"
        aria-labelledby="delete-in-app-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Fastest</span>
            <h2
              id="delete-in-app-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
            >
              Delete in the app
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
            {deletionPaths.map((path) => (
              <article key={path.n} className="home2-service-card flex flex-col bg-white p-5 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className={`home2-street-tag w-fit ${path.tagClass}`}>{path.tag}</span>
                  <span className="font-montserrat text-sm font-black tracking-tight text-[#308030]/45">
                    {path.n}
                  </span>
                </div>
                <h3 className="mt-5 font-montserrat text-2xl font-black leading-[0.95] tracking-tight text-[#0d2412] sm:text-[1.75rem]">
                  {path.title}
                </h3>
                <p className="mt-2 font-montserrat text-sm font-semibold text-[#0d2412]/70 sm:text-base">
                  {path.copy}
                </p>
                <ol className="mt-6 flex flex-1 flex-col gap-3">
                  {path.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="home2-street-tag mt-0.5 shrink-0 bg-[#e8f4ea] text-[#0d2412]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1 font-montserrat text-sm font-semibold leading-snug text-[#0d2412]/80 sm:text-[0.95rem]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-8">
                  <a
                    href={path.cta.href}
                    {...(path.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="home2-create-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22]"
                  >
                    {path.cta.label}
                    <span aria-hidden>→</span>
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#fff6d8] text-[#0d2412]"
        aria-labelledby="data-retention-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Data</span>
            <h2
              id="data-retention-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
            >
              What happens next
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
          </div>

          <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {dataFacts.map((fact) => (
              <li key={fact.n} className="home2-service-card flex flex-col bg-white p-5 sm:p-6">
                <span className="home2-street-tag w-fit bg-[#308030] text-[#ffe600]">{fact.n}</span>
                <h3 className="mt-5 font-montserrat text-xl font-black leading-tight tracking-tight">
                  {fact.title}
                </h3>
                <p className="mt-2 flex-1 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75">
                  {fact.copy}
                </p>
                {"href" in fact ? (
                  <Link
                    href={fact.href}
                    className="mt-4 inline-flex items-center gap-1 font-montserrat text-sm font-extrabold text-[#308030] transition hover:text-[#1b5c2a]"
                  >
                    {fact.linkLabel}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        id="request"
        aria-labelledby="request-form-heading"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.85fr)] lg:items-start lg:gap-8">
            <div className="home2-service-card bg-white p-5 sm:p-8">
              <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Form</span>
              <h2
                id="request-form-heading"
                className="mt-5 font-montserrat text-[1.85rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-4xl"
              >
                Can&apos;t sign in?
              </h2>
              <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/75 sm:text-base">
                Submit the details on your account. We verify ownership, delete it, and email you
                within 7 business days.
              </p>
              <div className="mt-8">
                <AccountDeletionForm />
              </div>
            </div>

            <aside className="home2-service-card bg-[#0d2412] p-5 text-[#e8f4ea] sm:p-8">
              <span className="home2-street-tag bg-[#308030] text-[#ffe600]">Help</span>
              <h2
                id="contact-support-heading"
                className="mt-5 font-montserrat text-2xl font-black leading-[0.95] tracking-tight sm:text-[1.75rem]"
              >
                Need a hand?
              </h2>
              <p className="mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/80 sm:text-base">
                Email us with the phone and email on the account, or use the contact page.
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-6 inline-block break-all font-montserrat text-lg font-black leading-tight tracking-tight text-[#ffe600] transition hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
              <Link
                href="/contact"
                className="home2-create-cta mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#308030] px-6 py-3 font-montserrat text-sm font-extrabold text-white transition hover:bg-[#286828]"
              >
                Contact page
                <span aria-hidden>→</span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <Home2Footer />
    </div>
  );
}
