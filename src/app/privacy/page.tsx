import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GoQuick Privacy Policy: how we collect, use, and protect your data when you use our errand and runner app.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-2 text-slate-600">
              {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the GoQuick app and related services,
              which connect users with runners for errands, deliveries, and other tasks. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our app and services. By
              using GoQuick, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p className="mt-2 text-slate-600">
              We may collect information that you provide directly, that we obtain when you use our services, or that
              we receive from third parties.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li><strong className="text-slate-800">Account information:</strong> name, email address, phone number, and profile details when you register.</li>
              <li><strong className="text-slate-800">Location data:</strong> to match you with nearby runners, show delivery progress, and improve service areas.</li>
              <li><strong className="text-slate-800">Transaction and payment information:</strong> payment method details, transaction history, and billing information processed through our payment partners.</li>
              <li><strong className="text-slate-800">Errand and communication data:</strong> errand descriptions, instructions, in-app messages, and support correspondence.</li>
              <li><strong className="text-slate-800">Device and usage data:</strong> device type, operating system, app version, and how you use the app (e.g. features used, session length).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-2 text-slate-600">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Provide, maintain, and improve our errand and runner services.</li>
              <li>Match users with runners and facilitate pickups, deliveries, and task completion.</li>
              <li>Process payments and prevent fraud.</li>
              <li>Send you updates, support messages, and (with your consent) marketing communications.</li>
              <li>Comply with legal obligations and enforce our terms of service.</li>
              <li>Analyse usage patterns to improve the app and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Sharing of Information</h2>
            <p className="mt-2 text-slate-600">
              We may share your information with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li><strong className="text-slate-800">Runners or users</strong> as needed to complete errands (e.g. delivery address, contact details).</li>
              <li><strong className="text-slate-800">Service providers</strong> such as payment processors, cloud hosting, and analytics providers, under contracts that protect your data.</li>
              <li><strong className="text-slate-800">Authorities</strong> when required by law or to protect rights, safety, or property.</li>
            </ul>
            <p className="mt-4 text-slate-600">
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Data Retention and Security</h2>
            <p className="mt-2 text-slate-600">
              We retain your information for as long as your account is active or as needed to provide services, comply
              with law, resolve disputes, and enforce our agreements. We implement technical and organisational
              measures to protect your data against unauthorised access, loss, or misuse. No method of transmission
              or storage is completely secure; we encourage you to use a strong password and keep your account
              details confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Your Rights and Choices</h2>
            <p className="mt-2 text-slate-600">
              Depending on applicable law, you may have the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Access, correct, or delete your personal information.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Data portability (receive a copy of your data in a structured format).</li>
              <li>Withdraw consent where we rely on it for processing.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className="mt-4 text-slate-600">
              You can update your profile and preferences in the app. For other requests, contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Cookies and Similar Technologies</h2>
            <p className="mt-2 text-slate-600">
              Our website may use cookies and similar technologies to remember preferences, analyse traffic, and
              improve your experience. You can manage cookie settings in your browser. Our app may use identifiers
              and local storage for functionality and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">8. Children&apos;s Privacy</h2>
            <p className="mt-2 text-slate-600">
              Our services are not directed at individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have collected such information, please
              contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">9. Changes to This Policy</h2>
            <p className="mt-2 text-slate-600">
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and
              update the &quot;Last updated&quot; date. For material changes, we may notify you via the app or email.
              Continued use of GoQuick after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">10. Contact Us</h2>
            <p className="mt-2 text-slate-600">
              If you have questions about this Privacy Policy or your personal data, please contact us:
            </p>
            <ul className="mt-4 list-none space-y-1 text-slate-600">
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--primary)] hover:underline">{siteConfig.contact.email}</a></li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Contact Us: <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact page</Link></li>
            </ul>
          </section>
        </div>

        <p className="mt-12 text-center">
          <Link href="/" className="text-[var(--primary)] font-medium hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
