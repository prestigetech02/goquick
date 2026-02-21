"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactElement, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

type NavLink = { label: string; href: string };
type NavMegaItem = { label: string; href: string; description: string; icon: "building" | "briefcase" | "document" | "steps" | "question" | "support" };
type NavDropdown = { label: string; children: NavMegaItem[] };

/** Hash links (#section) must go to home page first so they work from /contact etc. */
function navHref(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

/** Extract section id from href for observer/active state. "/" -> home, "/#services" -> services, "/contact" -> null */
function getSectionIdFromHref(href: string): string | null {
  if (href === "/") return "home";
  const m = href.match(/#([^#]+)$/);
  return m ? m[1] : null;
}

const navItems: (NavLink | NavDropdown)[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#services" },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about", description: "Learn about our mission, vision, and values", icon: "building" },
      { label: "Careers", href: "/careers", description: "Join our team and explore open roles", icon: "briefcase" },
      { label: "Blog", href: "/blog", description: "Read the latest news and insights from GoQuick", icon: "document" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "How it works", href: "/how-it-works", description: "See the 6 simple steps to get errands done", icon: "steps" },
      { label: "FAQ", href: "/faq", description: "Find answers to common questions", icon: "question" },
      { label: "Contact", href: "/contact", description: "Get in touch with our support team", icon: "support" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const megaMenuIcons: Record<NavMegaItem["icon"], ReactElement> = {
  building: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  briefcase: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  document: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  steps: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18V6z" />
    </svg>
  ),
  question: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  ),
  support: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
};

function MobileDropdown({
  label,
  children,
  activeId,
  pathname,
  expanded,
  onToggle,
  onLinkClick,
}: {
  label: string;
  children: NavMegaItem[];
  activeId: string;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 hover:text-[var(--primary)] dark:text-slate-100 sm:py-3 sm:text-base"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="flex flex-col gap-1 pl-4">
          {children.map((child) => {
            const sectionId = getSectionIdFromHref(child.href);
            const isActive = sectionId
              ? pathname === "/" && activeId === sectionId
              : pathname === child.href;
            return (
              <Link
                key={child.label}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "nav-link-active bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]"
                    : "text-slate-900 hover:bg-slate-100 hover:text-[var(--primary)] dark:text-slate-300"
                }`}
                href={navHref(child.href)}
                onClick={onLinkClick}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-none items-center justify-center">
      <span
        className={`absolute h-0.5 w-6 bg-current transition-all duration-200 ${
          open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-current transition-all duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-current transition-all duration-200 ${
          open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
        }`}
      />
    </span>
  );
}

const SCROLL_THRESHOLD = 24;

function getHomeSectionIds(items: (NavLink | NavDropdown)[]): string[] {
  const ids = new Set<string>(["home"]);
  for (const item of items) {
    const list = "href" in item ? [item.href] : item.children.map((c) => c.href);
    for (const href of list) {
      const id = getSectionIdFromHref(href);
      if (id) ids.add(id);
    }
  }
  return Array.from(ids);
}

export function Header() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      setActiveId(hash || "home");
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActiveId(id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    getHomeSectionIds(navItems).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", updateActive);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/20 bg-white/65 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] backdrop-blur-xl"
          : "border-slate-200 bg-white/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-10 sm:py-4">
        <Link
          className="flex shrink-0 items-center gap-3"
          href="/"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            alt={`${siteConfig.name} logo`}
            className="h-8 w-auto object-contain sm:h-10"
            height={40}
            priority
            src="/logo.png"
            width={120}
          />
        </Link>

        {/* Desktop nav: mega menu style, inactive items use inline dark color so they stay visible on light header */}
        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => {
            if ("href" in item) {
              const sectionId = getSectionIdFromHref(item.href);
              const isActive = sectionId
                ? pathname === "/" && activeId === sectionId
                : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={navHref(item.href)}
                  className="relative pb-1.5 text-sm font-bold transition-colors hover:text-[var(--primary)]"
                  style={{
                    color: isActive ? "var(--primary)" : "#1e293b",
                    borderBottom: isActive ? "2px solid var(--primary)" : undefined,
                  }}
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openDropdown === item.label;
            const isActive = item.children.some((c) => {
              const sid = getSectionIdFromHref(c.href);
              return sid ? pathname === "/" && activeId === sid : pathname === c.href;
            });
            return (
              <div
                key={item.label}
                className="relative"
                ref={isOpen ? dropdownRef : undefined}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 pb-1.5 text-sm font-bold transition-colors hover:text-[var(--primary)]"
                  style={{
                    color: isActive ? "var(--primary)" : "#1e293b",
                    borderBottom: isActive ? "2px solid var(--primary)" : undefined,
                  }}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className={`ml-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 pt-2 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                  } transition-opacity`}
                >
                  <div
                    className="rounded-xl border border-slate-200 border-b-[3px] bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:p-6"
                    style={{ borderBottomColor: "var(--primary)" }}
                  >
                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                      {item.children
                        .filter((child, index, arr) => arr.findIndex((c) => c.label === child.label) === index)
                        .map((child) => (
                          <Link
                            key={child.label}
                            className="group flex flex-col rounded-lg p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
                            href={navHref(child.href)}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div
                              className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12"
                              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 12%, white)" }}
                            >
                              <span style={{ color: "var(--primary)" }}>{megaMenuIcons[child.icon]}</span>
                            </div>
                            <span className="mb-1 font-bold text-slate-900 group-hover:text-[var(--primary)] dark:text-slate-100">
                              {child.label}
                            </span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">{child.description}</span>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <a
            className="hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-95 md:inline-block"
            href={siteConfig.appDownloadUrl ?? "/"}
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Get GoQuick
          </a>
          <button
            type="button"
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-slate-900 dark:text-slate-200 transition-colors hover:bg-slate-100 md:hidden sm:h-10 sm:w-10 ${drawerOpen ? "hidden" : ""}`}
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />

      {/* Mobile drawer panel - full viewport height, nav scrolls when content overflows */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-72 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-200 ease-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile menu"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
          <span className="text-base font-bold text-slate-900 sm:text-lg">Menu</span>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 sm:h-10 sm:w-10"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <span className="text-xl leading-none sm:text-2xl">&times;</span>
          </button>
        </div>
        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Main mobile">
          {navItems.map((item) => {
            if ("href" in item) {
              const sectionId = getSectionIdFromHref(item.href);
              const isActive = sectionId
                ? pathname === "/" && activeId === sectionId
                : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:py-3 sm:text-base ${
                    isActive
                      ? "nav-link-active bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]"
                      : "text-slate-900 dark:text-slate-200 hover:bg-slate-100 hover:text-[var(--primary)]"
                  }`}
                  href={navHref(item.href)}
                  onClick={closeDrawer}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <MobileDropdown
                key={item.label}
                label={item.label}
                children={item.children}
                activeId={activeId}
                pathname={pathname}
                expanded={expandedMobile === item.label}
                onToggle={() => setExpandedMobile((prev) => (prev === item.label ? null : item.label))}
                onLinkClick={closeDrawer}
              />
            );
          })}
        </nav>
        <div className="shrink-0 border-t border-slate-200 p-4">
          <a
            className="block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:opacity-95 sm:py-3"
            href={siteConfig.appDownloadUrl ?? "/"}
            style={{ backgroundColor: "var(--primary)" }}
            onClick={closeDrawer}
          >
            Get GoQuick
          </a>
        </div>
      </div>
    </header>
  );
}
