"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, webAppLinks } from "@/lib/site";

type NavLink = { label: string; href: string };
type NavItem = NavLink | { label: string; children: readonly NavLink[] };

const navItems: readonly NavItem[] = [
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Runners", href: "/runners" },
  { label: "Contact Us", href: "/contact" },
];

function isDropdown(item: NavItem): item is { label: string; children: readonly NavLink[] } {
  return "children" in item;
}

function NavZigzag({ position }: { position: "top" | "bottom" }) {
  return (
    <svg
      className={`home2-nav-zigzag ${position}`}
      viewBox="0 0 72 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M1 6 L7 2 L13 6 L19 2 L25 6 L31 2 L37 6 L43 2 L49 6 L55 2 L61 6 L67 2 L71 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NigeriaFlag() {
  return (
    <svg viewBox="0 0 9 6" className="h-3 w-4 rounded-[2px]" aria-hidden>
      <rect width="3" height="6" fill="#008751" />
      <rect x="3" width="3" height="6" fill="#fff" />
      <rect x="6" width="3" height="6" fill="#008751" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isCompanyActive(pathname: string, children: readonly NavLink[]) {
  return children.some((child) => isActive(pathname, child.href));
}

export function Home2Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div
        className={`pointer-events-auto mx-auto max-w-5xl rounded-full border-[2.5px] border-[#0d2412] bg-white font-montserrat shadow-[4px_4px_0_#dbab29] ${
          scrolled ? "shadow-[5px_6px_0_#dbab29]" : ""
        }`}
      >
        <div className="relative flex items-center justify-between gap-3 px-4 py-2 sm:px-5 sm:py-2.5">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              if (isDropdown(item)) {
                const current = isCompanyActive(pathname, item.children);
                return (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className="home2-nav-link"
                      aria-current={current ? "page" : undefined}
                      aria-haspopup="menu"
                    >
                      <NavZigzag position="top" />
                      {item.label}
                      <NavZigzag position="bottom" />
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border-[2.5px] border-[#0d2412] bg-white py-1 shadow-[4px_4px_0_#ffe600]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="home2-subnav-link"
                            aria-current={isActive(pathname, child.href) ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const current = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="home2-nav-link"
                  aria-current={current ? "page" : undefined}
                >
                  <NavZigzag position="top" />
                  {item.label}
                  <NavZigzag position="bottom" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <span
              className="home2-street-tag hidden gap-1.5 bg-[#e8f4ea] text-[#0d2412] sm:inline-flex"
              aria-label="Country: Nigeria"
            >
              <NigeriaFlag />
              NG
            </span>
            <a
              href={webAppLinks.requestErrand()}
              className="home2-create-cta hidden items-center gap-1.5 rounded-full bg-[#1b5c2a] px-4 py-2 font-montserrat text-sm font-extrabold text-[#e8f4ea] md:inline-flex"
            >
              Create errand
              <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d2412] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="pointer-events-auto mx-auto mt-3 max-w-5xl rounded-[1.75rem] border-[2.5px] border-[#0d2412] bg-white px-4 py-4 font-montserrat shadow-[4px_4px_0_#dbab29] lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => {
              if (isDropdown(item)) {
                return (
                  <div key={item.label} className="pb-1">
                    <p className="px-4 pb-1 pt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#0d2412]/45">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block rounded-full px-4 py-2.5 text-sm font-extrabold ${
                          isActive(pathname, child.href)
                            ? "bg-[#308030] text-[#ffe600]"
                            : "text-[#0d2412] hover:bg-[#308030] hover:text-[#ffe600]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full px-4 py-2.5 text-sm font-extrabold ${
                    isActive(pathname, item.href) ? "bg-[#e8f4ea] text-[#1b5c2a]" : "text-[#0d2412]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={webAppLinks.requestErrand()}
            className="home2-create-cta mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#1b5c2a] px-5 py-3 font-montserrat text-sm font-extrabold text-[#e8f4ea]"
          >
            Create errand
            <span aria-hidden>→</span>
          </a>
        </div>
      ) : null}
    </header>
  );
}
