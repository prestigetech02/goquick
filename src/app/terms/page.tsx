import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GoQuick Terms of Service: rules and agreement for using our errand and runner app and related services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Legal
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-600">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Agreement to Terms</h2>
            <p className="mt-2 text-slate-600">
              These Terms of Service (&quot;Terms&quot;) govern your use of the GoQuick app, website, and related services
              operated by {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By creating an account, downloading the app,
              or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree,
              you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Eligibility</h2>
            <p className="mt-2 text-slate-600">
              You must be at least 18 years old and able to form a binding contract to use GoQuick. By using our
              services, you represent that you meet these requirements and that the information you provide is
              accurate and complete. We reserve the right to refuse service or terminate accounts that violate
              these Terms or that we believe are fraudulent or abusive.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Account and Registration</h2>
            <p className="mt-2 text-slate-600">
              You may need to register for an account to use certain features. You are responsible for keeping your
              login details confidential and for all activity under your account. You must notify us promptly of any
              unauthorised use. We are not liable for losses resulting from someone else using your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Description of Services</h2>
            <p className="mt-2 text-slate-600">
              GoQuick connects users who need errands, deliveries, or other tasks with runners who can perform them.
              We provide the platform, matching, in-app communication, and payment processing. We do not employ
              runners; they are independent. The nature, quality, and timing of tasks are agreed between you and
              the runner, subject to these Terms and our policies. Service availability may vary by location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. User and Runner Conduct</h2>
            <p className="mt-2 text-slate-600">
              You agree not to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Use the service for any illegal purpose or in violation of any laws.</li>
              <li>Request or facilitate delivery of prohibited or restricted items (e.g. illegal substances, hazardous materials).</li>
              <li>Harass, abuse, or harm other users or runners, or our staff.</li>
              <li>Impersonate others or provide false information.</li>
              <li>Circumvent the app to arrange or pay for errands off-platform to avoid fees or safety measures.</li>
              <li>Interfere with the operation of the app, systems, or other users&apos; use.</li>
              <li>Scrape data, reverse engineer, or attempt to gain unauthorised access to our systems or data.</li>
            </ul>
            <p className="mt-4 text-slate-600">
              We may suspend or terminate accounts and report illegal activity to authorities. Runners must comply
              with all applicable laws and our runner guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Payments and Fees</h2>
            <p className="mt-2 text-slate-600">
              Fees for errands (including runner pay and platform fees) are displayed in the app before you confirm.
              You are responsible for paying all amounts due. Payment is processed through our payment partners;
              by using the service you agree to their terms. Refunds and cancellations are subject to our
              cancellation and refund policy as shown in the app. We may change fees with notice where required by
              law. Disputes about charges should be raised with us promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Intellectual Property</h2>
            <p className="mt-2 text-slate-600">
              The GoQuick name, logo, app, website, and all related content and materials are owned by us or our
              licensors. You may not copy, modify, distribute, or create derivative works without our written
              permission. You may use the app only for its intended purpose in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">8. Disclaimers</h2>
            <p className="mt-2 text-slate-600">
              Our services are provided &quot;as is&quot; and &quot;as available&quot;. We do not guarantee uninterrupted or
              error-free service. We are not responsible for the actions, quality, or conduct of runners or other
              users, or for the quality, legality, or safety of items or tasks. You use the platform and interact with
              runners at your own risk. Nothing in these Terms excludes or limits our liability where it would be
              unlawful to do so (e.g. death or personal injury caused by our negligence, or fraud).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">9. Limitation of Liability</h2>
            <p className="mt-2 text-slate-600">
              To the fullest extent permitted by law, we (and our directors, employees, and affiliates) shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of
              profits, data, or goodwill, arising from your use of the service or inability to use it. Our total
              liability for any claim arising from or related to these Terms or the service shall not exceed the
              amount you paid to us in the twelve (12) months before the claim arose, or one hundred (100) US
              dollars, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">10. Indemnification</h2>
            <p className="mt-2 text-slate-600">
              You agree to indemnify and hold harmless {siteConfig.name}, its affiliates, and their respective
              officers, directors, employees, and agents from any claims, damages, losses, or expenses (including
              legal fees) arising from your use of the service, your violation of these Terms, or your
              violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">11. Termination</h2>
            <p className="mt-2 text-slate-600">
              You may stop using the service and close your account at any time. We may suspend or terminate your
              account or access if you breach these Terms or for other reasons we consider appropriate. Upon
              termination, your right to use the service ceases. Provisions that by their nature should survive
              (including disclaimers, limitation of liability, and indemnification) will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">12. Disputes and Governing Law</h2>
            <p className="mt-2 text-slate-600">
              These Terms are governed by the laws of Nigeria. Any dispute arising from or relating to these Terms
              or the service shall first be addressed through good-faith negotiation. If that fails, disputes may
              be submitted to the courts of Nigeria. If you are a consumer, you may have rights under local
              consumer protection laws that cannot be waived by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">13. Changes to the Terms</h2>
            <p className="mt-2 text-slate-600">
              We may update these Terms from time to time. We will post the revised Terms on this page and update
              the &quot;Last updated&quot; date. For material changes, we may notify you via the app or email. Continued
              use of the service after changes constitutes acceptance of the new Terms. If you do not agree, you
              must stop using the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">14. General</h2>
            <p className="mt-2 text-slate-600">
              If any part of these Terms is found to be unenforceable, the rest remains in effect. Our failure to
              enforce any right or provision does not waive that right or provision. These Terms, together with
              our Privacy Policy and any other policies we publish, constitute the entire agreement between you and
              {siteConfig.name} regarding the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">15. Contact Us</h2>
            <p className="mt-2 text-slate-600">
              For questions about these Terms of Service:
            </p>
            <ul className="mt-4 list-none space-y-1 text-slate-600">
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--primary)] hover:underline">{siteConfig.contact.email}</a></li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Website: <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact page</Link></li>
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
