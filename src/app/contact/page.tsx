import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact GoQuick for errand support, runner signups, payment help, partnerships, and feedback. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <section aria-labelledby="contact-heading" className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Contact Us
          </p>
          <h1
            id="contact-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Get in touch with the GoQuick team
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Whether you need help with an errand, have a question about the app, want to
            become a runner, or have a partnership idea, we&apos;re here to help. Reach
            out and we&apos;ll respond within 24 hours.
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Send us a message
            </h2>
            <p className="text-base text-slate-600">
              Tell us what you need: app support, runner enquiries, partnership proposals,
              or feedback. We read every message and will get back to you soon.
            </p>
            <ContactForm />
          </div>

          <aside className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:min-w-0">
            <h2 className="text-xl font-bold text-slate-900">
              GoQuick headquarters
            </h2>
            <p className="text-base text-slate-600">
              Our team is based in Lagos and ready to help with errands, app issues,
              runner signups, and business enquiries.
            </p>

            <div className="space-y-4 text-base text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Support email</p>
                <a href="mailto:support@goquickapp.com.ng" className="text-[var(--primary)] hover:underline">
                  support@goquickapp.com.ng
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Partnerships &amp; press</p>
                <a href="mailto:hello@goquickapp.com.ng" className="text-[var(--primary)] hover:underline">
                  hello@goquickapp.com.ng
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                <p>+234 (0) 800 000 0000</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Lagos office</p>
                <p>
                  Lagos, Nigeria
                  <br />
                  <span className="text-slate-500">Serving errand requests across the city</span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Support hours</p>
                <p>Monday – Friday, 8:00am – 6:00pm (WAT)</p>
              </div>
            </div>
            <div className="text-base">
              <p className="mb-3 font-semibold text-slate-900">Follow us</p>
              <SocialLinks variant="light" />
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

