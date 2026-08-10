import Link from "next/link";
import { webAppLinks } from "@/lib/site";

const services = [
  {
    title: "Parcel Delivery",
    description: "Send documents, parcels, or packages anywhere within the city.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
  {
    title: "Shopping & Errands",
    description: "We'll shop for groceries, essentials, or anything you need.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.121-5.2 0-7.5H6.006L5.106 4.272A1.125 1.125 0 004.006 3.375H2.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm11.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Document Pick-up & Drop-off",
    description: "Secure pick-up and delivery of important documents.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18A2.25 2.25 0 0020.25 16.5V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Gift Delivery",
    description: "Surprise your loved ones with thoughtful gifts on time.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18.75"
        />
      </svg>
    ),
  },
  {
    title: "Pharmacy Runs",
    description: "Get your medications delivered safely and discreetly.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Errands",
    description: "Have a unique request? We're here to help you get it done.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
] as const;

export function OurServicesGrid() {
  const bookHref = webAppLinks.requestErrand();

  return (
    <section
      className="site-container mt-16 sm:mt-20 lg:mt-24"
      aria-labelledby="our-services-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-sm">
          What We Do
        </p>
        <h2
          id="our-services-heading"
          className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
        >
          Our Services
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <li key={service.title}>
            <article className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-7 text-center sm:px-6 sm:py-8">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)",
                  color: "var(--primary)",
                }}
              >
                {service.icon}
              </span>
              <h3 className="mt-5 text-base font-extrabold text-slate-900 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              <Link
                href={bookHref}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
