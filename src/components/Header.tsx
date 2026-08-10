"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GetStartedButton } from "@/components/HeroStoreButtons";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

type NavLink = { label: string; href: string };

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

const navItems: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "For Runners", href: "/#for-runners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help", href: "/faq" },
];

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

function getHomeSectionIds(items: NavLink[]): string[] {
  const ids = new Set<string>(["home"]);
  for (const item of items) {
    const id = getSectionIdFromHref(item.href);
    if (id) ids.add(id);
  }
  return Array.from(ids);
}

function isNavItemActive(item: NavLink, pathname: string, activeId: string): boolean {
  const sectionId = getSectionIdFromHref(item.href);
  if (sectionId) {
    return pathname === "/" && activeId === sectionId;
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD);
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
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
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

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const isActive = isNavItemActive(item, pathname, activeId);
            return (
              <Link
                key={item.label}
                href={navHref(item.href)}
                className="relative pb-1.5 text-sm font-semibold tracking-tight transition-colors hover:text-[var(--primary)]"
                style={{ color: isActive ? "var(--primary)" : "#1e293b" }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200"
                  style={{
                    backgroundColor: "var(--primary)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <GetStartedButton className="hidden rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-95 md:inline-block" />
          <button
            type="button"
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100 lg:hidden sm:h-10 sm:w-10 ${
              drawerOpen ? "hidden" : ""
            }`}
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-72 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-200 ease-out lg:hidden ${
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
            const isActive = isNavItemActive(item, pathname, activeId);
            return (
              <Link
                key={item.label}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors sm:py-3 sm:text-base ${
                  isActive
                    ? "nav-link-active bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]"
                    : "text-slate-900 hover:bg-slate-100 hover:text-[var(--primary)]"
                }`}
                href={navHref(item.href)}
                onClick={closeDrawer}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="shrink-0 border-t border-slate-200 p-4">
          <GetStartedButton className="block w-full rounded-lg bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:opacity-95 sm:py-3" />
        </div>
      </div>
    </header>
  );
}
