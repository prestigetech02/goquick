import type { Metadata } from "next";
import { Home2Header } from "@/components/Home2Header";
import { Home2Faq } from "@/components/Home2Faq";
import { Home2Cta } from "@/components/Home2Cta";
import { Home2Footer } from "@/components/Home2Footer";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contact Lagos | Errand Support",
  description:
    "Contact GoQuick in Lagos for errand support, runner signups, payment help, partnerships, and feedback.",
  path: "/contact",
});

function TitleSquiggle({ className = "mx-auto mt-4 w-44 text-[#ffe600] sm:w-56" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 14" fill="none" aria-hidden>
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

const channels = [
  {
    tag: "Email",
    tagClass: "bg-[#308030] text-[#ffe600]",
    label: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    tag: "Phone",
    tagClass: "bg-[#0d2412] text-[#ffe600]",
    label: siteConfig.contact.phone,
    href: toTelHref(siteConfig.contact.phone),
  },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Home2Header />

      <section
        className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]"
        aria-labelledby="contact-hero-heading"
      >
        <div className="mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center font-montserrat sm:min-h-[88svh] sm:px-8 sm:pb-20 sm:pt-32 md:pt-36">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">Contact</span>
          <h1
            id="contact-hero-heading"
            className="mt-5 text-[2.35rem] font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Talk to
            
            <span className="text-[#ffe600]"> GoQuick</span>
          </h1>
          <TitleSquiggle />
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4">
            <a
              href="#message"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0d2412] px-6 py-3.5 text-sm font-extrabold text-[#ffe600] shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#08180c] hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              Send a message
              <span aria-hidden>→</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-[#0d2412] bg-transparent px-6 py-3.5 text-sm font-extrabold text-[#e8f4ea] shadow-[0_4px_0_#ffe600] transition hover:translate-y-px hover:bg-[#0d2412]/20 hover:shadow-[0_3px_0_#ffe600] sm:w-auto sm:px-7 sm:text-base"
            >
              Email us
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative scroll-mt-32 overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
        id="message"
        aria-label="Contact form"
      >
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.85fr)] lg:items-start lg:gap-8">
            <div className="home2-service-card bg-white p-5 sm:p-8">
              <ContactForm />
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel) => (
                <li key={channel.tag}>
                  <a
                    href={channel.href}
                    className="home2-service-card home2-flat-card flex h-full flex-col p-5 sm:p-7"
                  >
                    <span className={`home2-street-tag w-fit ${channel.tagClass}`}>{channel.tag}</span>
                    <p className="mt-5 break-all font-montserrat text-lg font-black leading-tight tracking-tight sm:text-xl">
                      {channel.label}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Home2Faq />
      <Home2Cta />
      <Home2Footer />
    </div>
  );
}
