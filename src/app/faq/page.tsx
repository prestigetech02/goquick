import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about GoQuick: errands, payments, becoming a runner, service areas, and real-time tracking.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto min-h-[60vh] w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <section aria-labelledby="faq-heading" className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Help</p>
          <h1 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h1>
        </section>

        <FAQ showHeading={false} />

        <div className="mt-16">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
