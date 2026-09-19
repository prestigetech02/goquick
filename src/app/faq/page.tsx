import type { Metadata } from "next";
import Link from "next/link";
import { Home2Header } from "@/components/Home2Header";
import { Home2Footer } from "@/components/Home2Footer";
import { Home2Cta } from "@/components/Home2Cta";
import { FaqStreetList } from "@/components/FaqStreetList";
import { DEFAULT_FAQS } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Errands, Payments & Runners",
  description:
    "Answers about GoQuick in Lagos: what errands we do, how payment works, becoming a runner, live tracking, and service areas.",
  path: "/faq",
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

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#e8f4ea] text-[#0d2412]">
      <JsonLd
        data={[
          faqJsonLd(DEFAULT_FAQS),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
          <h1
            id="faq-heading"
            className="text-[1.65rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl"
          >
            Got <span className="text-[#ffe600]">questions?</span>
          </h1>
          <TitleSquiggle className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44" />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        aria-label="Frequently asked questions"
      >
        <div className="site-container py-12 sm:py-16 lg:py-20">
          <FaqStreetList />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="faq-contact-heading"
      >
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Help</span>
            <h2
              id="faq-contact-heading"
              className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl"
            >
              Still stuck?
            </h2>
            <TitleSquiggle className="mt-3 w-40 text-[#ffe600] sm:w-52" />
            <p className="mt-5 max-w-[40ch] font-montserrat text-sm font-semibold leading-relaxed text-[#e8f4ea]/90 sm:text-base">
              We answer within a day. Email, call, or use the contact page.
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

      <Home2Cta />
      <Home2Footer />
    </div>
  );
}
