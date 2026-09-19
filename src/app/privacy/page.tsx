import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How GoQuick collects, uses, and protects your data when you book errands or run jobs in Lagos.",
  path: "/privacy",
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

const headingClass =
  "flex items-start gap-3 font-montserrat text-lg font-black leading-tight tracking-tight text-[#308030] sm:text-xl";
const bodyClass = "mt-3 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base";
const listClass = "mt-4 space-y-2 font-montserrat text-sm font-semibold leading-relaxed text-[#0d2412]/80 sm:text-base";
const linkClass = "font-extrabold text-[#1b5c2a] underline underline-offset-2";

function SectionNum({ n }: { n: string }) {
  return <span className="home2-street-tag mt-0.5 shrink-0 bg-[#308030] text-[#ffe600]">{n}</span>;
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="privacy-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="privacy-heading"
            className="text-[1.85rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Privacy <span className="text-[#ffe600]">Policy</span>
          </h1>
          <TitleSquiggle className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44" />
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#e8f4ea]/80 sm:text-sm">
            Last updated {lastUpdated}
          </p>
        </div>
      </section>

      <main className="site-container py-12 sm:py-16 lg:py-20">
        <article className="home2-service-card mx-auto max-w-3xl space-y-10 bg-white p-5 sm:space-y-12 sm:p-10">
          <section>
            <h2 className={headingClass}>
              <SectionNum n="01" />
              <span>Introduction</span>
            </h2>
            <p className={bodyClass}>
              {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the GoQuick app and related
              services, which connect users with runners for errands, deliveries, and other tasks. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you use our app
              and services. By using GoQuick, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="02" />
              <span>Information we collect</span>
            </h2>
            <p className={bodyClass}>
              We may collect information that you provide directly, that we obtain when you use our services, or
              that we receive from third parties.
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-[#0d2412]">Account information:</strong> name, email address, phone number,
                and profile details when you register.
              </li>
              <li>
                <strong className="text-[#0d2412]">Location data:</strong> to match you with nearby runners, show
                delivery progress, and improve service areas.
              </li>
              <li>
                <strong className="text-[#0d2412]">Transaction and payment information:</strong> payment method
                details, transaction history, and billing information processed through our payment partners.
              </li>
              <li>
                <strong className="text-[#0d2412]">Errand and communication data:</strong> errand descriptions,
                instructions, messages in the app, and support correspondence.
              </li>
              <li>
                <strong className="text-[#0d2412]">Device and usage data:</strong> device type, operating system, app
                version, and how you use the app (e.g. features used, session length).
              </li>
            </ul>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="03" />
              <span>How we use your information</span>
            </h2>
            <p className={bodyClass}>We use the information we collect to:</p>
            <ul className={listClass}>
              <li>Provide, maintain, and improve our errand and runner services.</li>
              <li>Match users with runners and facilitate pickups, deliveries, and task completion.</li>
              <li>Process payments and prevent fraud.</li>
              <li>Send you updates, support messages, and (with your consent) marketing communications.</li>
              <li>Comply with legal obligations and enforce our terms of service.</li>
              <li>Analyse usage patterns to improve the app and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="04" />
              <span>Sharing of information</span>
            </h2>
            <p className={bodyClass}>We may share your information with:</p>
            <ul className={listClass}>
              <li>
                <strong className="text-[#0d2412]">Runners or users</strong> as needed to complete errands (e.g.
                delivery address, contact details).
              </li>
              <li>
                <strong className="text-[#0d2412]">Service providers</strong> such as payment processors, cloud
                hosting, and analytics providers, under contracts that protect your data.
              </li>
              <li>
                <strong className="text-[#0d2412]">Authorities</strong> when required by law or to protect rights,
                safety, or property.
              </li>
            </ul>
            <p className={bodyClass}>
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="05" />
              <span>Data retention and security</span>
            </h2>
            <p className={bodyClass}>
              We retain your information for as long as your account is active or as needed to provide services,
              comply with law, resolve disputes, and enforce our agreements. We implement technical and
              organisational measures to protect your data against unauthorised access, loss, or misuse. No method
              of transmission or storage is completely secure; we encourage you to use a strong password and keep
              your account details confidential.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="06" />
              <span>Your rights and choices</span>
            </h2>
            <p className={bodyClass}>Depending on applicable law, you may have the right to:</p>
            <ul className={listClass}>
              <li>Access, correct, or delete your personal information.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Data portability (receive a copy of your data in a structured format).</li>
              <li>Withdraw consent where we rely on it for processing.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className={bodyClass}>
              You can update your profile and preferences in the app. To delete your account, use the in-app option
              or our{" "}
              <Link href="/account-deletion" className={linkClass}>
                account deletion page
              </Link>
              . For other requests, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="07" />
              <span>Cookies and similar technologies</span>
            </h2>
            <p className={bodyClass}>
              Our website may use cookies and similar technologies to remember preferences, analyse traffic, and
              improve your experience. You can manage cookie settings in your browser or through our cookie banner.
              See our{" "}
              <Link href="/cookies" className={linkClass}>
                Cookies Policy
              </Link>{" "}
              for details. Our app may use identifiers and local storage for functionality and analytics.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="08" />
              <span>Children&apos;s privacy</span>
            </h2>
            <p className={bodyClass}>
              Our services are not directed at individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have collected such information, please contact us so we
              can delete it.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="09" />
              <span>Changes to this policy</span>
            </h2>
            <p className={bodyClass}>
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and
              update the &quot;Last updated&quot; date. For material changes, we may notify you via the app or email.
              Continued use of GoQuick after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </article>
      </main>

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="privacy-contact-heading"
      >
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Help</span>
            <h2
              id="privacy-contact-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl"
            >
              Questions?
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
            <p className="mt-5 max-w-[40ch] font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
              If you have questions about this Privacy Policy or your personal data, reach us here.
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
