import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "GoQuick Cookies Policy: how we use cookies and similar technologies on our website, and how you can manage your choices.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Legal
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cookies Policy
          </h1>
          <p className="mt-4 text-slate-600">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-2 text-slate-600">
              This Cookies Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies
              and similar technologies on our website. It should be read together with our{" "}
              <Link href="/privacy" className="text-[var(--primary)] hover:underline">
                Privacy Policy
              </Link>
              . By using our website and, where required, giving your consent, you agree to our use of cookies
              as described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. What Are Cookies?</h2>
            <p className="mt-2 text-slate-600">
              Cookies are small text files stored on your device when you visit a website. Similar technologies
              include local storage, session storage, pixels, and device identifiers. They help websites remember
              your choices, keep the site secure, and understand how it is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Cookies</h2>
            <p className="mt-2 text-slate-600">
              We use cookies and similar technologies to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Keep the website working reliably and remember your cookie preferences.</li>
              <li>Measure how visitors use our pages so we can improve content and performance.</li>
              <li>Remember settings that make your visit smoother.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Types of Cookies We Use</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
              <li>
                <strong className="text-slate-800">Strictly necessary:</strong> required for core functions such as
                page navigation, security, and storing your cookie consent choice. These do not require consent.
              </li>
              <li>
                <strong className="text-slate-800">Analytics and performance:</strong> help us understand traffic,
                popular pages, and issues. We only use these if you accept optional cookies.
              </li>
              <li>
                <strong className="text-slate-800">Functional:</strong> remember preferences that improve your
                experience. We only use these if you accept optional cookies.
              </li>
            </ul>
            <p className="mt-4 text-slate-600">
              We do not use cookies to sell your personal information or to serve third-party advertising on our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Your Choices</h2>
            <p className="mt-2 text-slate-600">
              When you visit our website, you can accept optional cookies or continue with necessary cookies only.
              You can also control cookies through your browser settings, including blocking or deleting them.
              Blocking strictly necessary cookies may affect how the site works.
            </p>
            <p className="mt-4 text-slate-600">
              Your consent choice is stored on your device so we do not ask again on every visit. Clearing site
              data in your browser will reset that choice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Third Parties</h2>
            <p className="mt-2 text-slate-600">
              Some cookies may be set by trusted service providers who help us host, analyse, or operate the
              website. Those providers process information under contracts that protect your data, as described in
              our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Changes to This Policy</h2>
            <p className="mt-2 text-slate-600">
              We may update this Cookies Policy from time to time. The revised policy will be posted on this page
              with an updated &quot;Last updated&quot; date. Continued use of the website after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">8. Contact Us</h2>
            <p className="mt-2 text-slate-600">
              If you have questions about this Cookies Policy, please contact us:
            </p>
            <ul className="mt-4 list-none space-y-1 text-slate-600">
              <li>
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--primary)] hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>
                Contact Us:{" "}
                <Link href="/contact" className="text-[var(--primary)] hover:underline">
                  Contact page
                </Link>
              </li>
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
