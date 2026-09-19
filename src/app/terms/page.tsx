import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Rules for using GoQuick’s errand and runner platform in Lagos, including accounts, payments, and conduct.",
  path: "/terms",
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

function SectionNum({ n }: { n: string }) {
  return <span className="home2-street-tag mt-0.5 shrink-0 bg-[#308030] text-[#ffe600]">{n}</span>;
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="terms-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="terms-heading"
            className="text-[1.65rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Terms of <span className="text-[#ffe600]">Service</span>
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
              <span>Agreement to Terms</span>
            </h2>
            <p className={bodyClass}>
              These Terms of Service (&quot;Terms&quot;) govern your use of the GoQuick app, website, and related services
              operated by {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By creating an account, downloading the app,
              or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not
              agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="02" />
              <span>Eligibility</span>
            </h2>
            <p className={bodyClass}>
              You must be at least 18 years old and able to form a binding contract to use GoQuick. By using our
              services, you represent that you meet these requirements and that the information you provide is
              accurate and complete. We reserve the right to refuse service or terminate accounts that violate
              these Terms or that we believe are fraudulent or abusive.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="03" />
              <span>Account and registration</span>
            </h2>
            <p className={bodyClass}>
              You may need to register for an account to use certain features. You are responsible for keeping
              your login details confidential and for all activity under your account. You must notify us promptly
              of any unauthorised use. We are not liable for losses resulting from someone else using your account.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="04" />
              <span>Description of services</span>
            </h2>
            <p className={bodyClass}>
              GoQuick connects users who need errands, deliveries, or other tasks with runners who can perform
              them. We provide the platform, matching, communication in the app, and payment processing. We do not
              employ runners; they are independent. The nature, quality, and timing of tasks are agreed between you
              and the runner, subject to these Terms and our policies. Service availability may vary by location.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="05" />
              <span>User and runner conduct</span>
            </h2>
            <p className={bodyClass}>You agree not to:</p>
            <ul className={listClass}>
              <li>Use the service for any illegal purpose or in violation of any laws.</li>
              <li>
                Request or facilitate delivery of prohibited or restricted items (e.g. illegal substances,
                hazardous materials).
              </li>
              <li>Harass, abuse, or harm other users or runners, or our staff.</li>
              <li>Impersonate others or provide false information.</li>
              <li>
                Circumvent the app to arrange or pay for errands outside the platform to avoid fees or safety
                measures.
              </li>
              <li>Interfere with the operation of the app, systems, or other users&apos; use.</li>
              <li>Scrape data, reverse engineer, or attempt to gain unauthorised access to our systems or data.</li>
            </ul>
            <p className={bodyClass}>
              We may suspend or terminate accounts and report illegal activity to authorities. Runners must comply
              with all applicable laws and our runner guidelines.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="06" />
              <span>Payments and fees</span>
            </h2>
            <p className={bodyClass}>
              Fees for errands (including runner pay and platform fees) are displayed in the app before you
              confirm. You are responsible for paying all amounts due. Payment is processed through our payment
              partners; by using the service you agree to their terms. Refunds and cancellations are subject to our
              cancellation and refund policy as shown in the app. We may change fees with notice where required by
              law. Disputes about charges should be raised with us promptly.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="07" />
              <span>Intellectual property</span>
            </h2>
            <p className={bodyClass}>
              The GoQuick name, logo, app, website, and all related content and materials are owned by us or our
              licensors. You may not copy, modify, distribute, or create derivative works without our written
              permission. You may use the app only for its intended purpose in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="08" />
              <span>Disclaimers</span>
            </h2>
            <p className={bodyClass}>
              Our services are provided &quot;as is&quot; and &quot;as available&quot;. We do not guarantee uninterrupted or error
              free service. We are not responsible for the actions, quality, or conduct of runners or other users,
              or for the quality, legality, or safety of items or tasks. You use the platform and interact with
              runners at your own risk. Nothing in these Terms excludes or limits our liability where it would be
              unlawful to do so (e.g. death or personal injury caused by our negligence, or fraud).
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="09" />
              <span>Limitation of liability</span>
            </h2>
            <p className={bodyClass}>
              To the fullest extent permitted by law, we (and our directors, employees, and affiliates) shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of
              profits, data, or goodwill, arising from your use of the service or inability to use it. Our total
              liability for any claim arising from or related to these Terms or the service shall not exceed the
              amount you paid to us in the twelve (12) months before the claim arose, or one hundred (100) US
              dollars, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="10" />
              <span>Indemnification</span>
            </h2>
            <p className={bodyClass}>
              You agree to indemnify and hold harmless {siteConfig.name}, its affiliates, and their respective
              officers, directors, employees, and agents from any claims, damages, losses, or expenses (including
              legal fees) arising from your use of the service, your violation of these Terms, or your violation of
              any third party rights.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="11" />
              <span>Termination</span>
            </h2>
            <p className={bodyClass}>
              You may stop using the service and close your account at any time. We may suspend or terminate your
              account or access if you breach these Terms or for other reasons we consider appropriate. Upon
              termination, your right to use the service ceases. Provisions that by their nature should survive
              (including disclaimers, limitation of liability, and indemnification) will remain in effect.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="12" />
              <span>Disputes and governing law</span>
            </h2>
            <p className={bodyClass}>
              These Terms are governed by the laws of Nigeria. Any dispute arising from or relating to these Terms
              or the service shall first be addressed through good faith negotiation. If that fails, disputes may
              be submitted to the courts of Nigeria. If you are a consumer, you may have rights under local
              consumer protection laws that cannot be waived by these Terms.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="13" />
              <span>Changes to the Terms</span>
            </h2>
            <p className={bodyClass}>
              We may update these Terms from time to time. We will post the revised Terms on this page and update
              the &quot;Last updated&quot; date. For material changes, we may notify you via the app or email. Continued use
              of the service after changes constitutes acceptance of the new Terms. If you do not agree, you must
              stop using the service.
            </p>
          </section>

          <section>
            <h2 className={headingClass}>
              <SectionNum n="14" />
              <span>General</span>
            </h2>
            <p className={bodyClass}>
              If any part of these Terms is found to be unenforceable, the rest remains in effect. Our failure to
              enforce any right or provision does not waive that right or provision. These Terms, together with our{" "}
              <Link href="/privacy" className="font-extrabold text-[#1b5c2a] underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and any other policies we publish, constitute the entire agreement between you and {siteConfig.name}{" "}
              regarding the service.
            </p>
          </section>
        </article>
      </main>

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="terms-contact-heading"
      >
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Help</span>
            <h2
              id="terms-contact-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl"
            >
              Questions?
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
            <p className="mt-5 max-w-[40ch] font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
              For questions about these Terms of Service, reach us here.
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
