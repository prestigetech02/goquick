import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccountDeletionForm } from "@/components/AccountDeletionForm";
import { siteConfig, webAppLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Request deletion of your GoQuick account. Delete your requester or runner account from the app, or submit a deletion request online.",
  alternates: { canonical: "/account-deletion" },
};

const deletionSteps = [
  {
    title: "Requesters (web app)",
    steps: [
      "Sign in at the GoQuick web app.",
      "Open Profile → Account & Security.",
      "Scroll to Danger zone and choose Delete account.",
      "Enter your password to confirm. Your account will be deleted immediately.",
    ],
    cta: { label: "Open web app", href: webAppLinks.accountSecurity() },
  },
  {
    title: "Runners (mobile app)",
    steps: [
      "Open the GoQuick runner app and sign in.",
      "Go to Profile → Account & Security.",
      "Tap Delete Account, enter your password, and confirm.",
      "Your account will be deleted immediately.",
    ],
    cta: { label: "Get the runner app", href: siteConfig.stores.playStore },
    external: true,
  },
];

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Account
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Delete your GoQuick account
          </h1>
          <p className="mt-4 text-slate-600">
            You can delete your account directly in the GoQuick app. If you cannot sign in, use the
            form below to request deletion. We process requests within 7 business days.
          </p>
        </header>

        <div className="space-y-12">
          <section aria-labelledby="delete-in-app-heading">
            <h2 id="delete-in-app-heading" className="text-xl font-bold text-slate-900">
              Delete in the app (recommended)
            </h2>
            <p className="mt-2 text-slate-600">
              The fastest way to delete your account is from inside GoQuick while signed in.
            </p>

            <div className="mt-6 space-y-6">
              {deletionSteps.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600">
                    {block.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="mt-5">
                    {block.external ? (
                      <a
                        href={block.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                      >
                        {block.cta.label}
                      </a>
                    ) : (
                      <a
                        href={block.cta.href}
                        className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                      >
                        {block.cta.label}
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="data-retention-heading">
            <h2 id="data-retention-heading" className="text-xl font-bold text-slate-900">
              What happens to your data
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                Your profile, login access, push tokens, and in-app preferences are removed when your
                account is deleted.
              </li>
              <li>
                Errand history, chat messages, and payment records may be retained for a limited
                time where required for fraud prevention, dispute resolution, tax, or legal
                compliance.
              </li>
              <li>
                Wallet balances must be withdrawn before deletion where possible. Outstanding
                disputes or active errands may delay deletion until resolved.
              </li>
              <li>
                For more detail, see our{" "}
                <Link href="/privacy" className="text-[var(--primary)] hover:underline">
                  Privacy Policy
                </Link>
                .
              </li>
            </ul>
          </section>

          <section
            aria-labelledby="request-form-heading"
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <h2 id="request-form-heading" className="text-xl font-bold text-slate-900">
              Can&apos;t sign in? Request deletion here
            </h2>
            <p className="mt-2 text-slate-600">
              Submit the details registered on your account. We will verify ownership and delete
              your account, then email you at the address below.
            </p>
            <div className="mt-6">
              <AccountDeletionForm />
            </div>
          </section>

          <section aria-labelledby="contact-support-heading">
            <h2 id="contact-support-heading" className="text-xl font-bold text-slate-900">
              Need help?
            </h2>
            <p className="mt-2 text-slate-600">
              Email{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[var(--primary)] hover:underline"
              >
                {siteConfig.contact.email}
              </a>{" "}
              with the phone number and email on your account, or visit our{" "}
              <Link href="/contact" className="text-[var(--primary)] hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-center">
          <Link href="/" className="font-medium text-[var(--primary)] hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
