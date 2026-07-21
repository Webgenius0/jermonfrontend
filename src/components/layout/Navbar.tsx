"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMainNavigation, getNavButtons, siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true">
      <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true">
      <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
    </svg>
  );
}

function isActivePath(pathname: string, href?: string, children?: { href: string }[]) {
  if (href && href !== "#") {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }
  return children?.some((child) => pathname.startsWith(child.href)) ?? false;
}

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = getMainNavigation(language);
  const buttons = getNavButtons(language);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-gold text-brand-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm lg:px-6">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 font-semibold text-xs md:text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-brand-charcoal/70 transition-colors"
              >
                <EnvelopeIcon className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phone}
            </li>
            <li>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-charcoal/70 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-white/10 bg-brand-charcoal">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold tracking-tight text-white">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href, item.children);

              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                        active
                          ? "text-brand-gold"
                          : "text-white/90 hover:text-brand-gold"
                      }`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDownIcon className="h-3 w-3" />
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 min-w-[260px] overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-charcoal py-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-brand-gold hover:text-brand-black ${
                            pathname === child.href
                              ? "bg-brand-gold text-brand-black"
                              : "text-white/85"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-brand-gold"
                      : "text-white/90 hover:text-brand-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/order-tracking"
              className="rounded-full border border-brand-gold px-5 py-2 text-xs font-bold uppercase tracking-wider text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {buttons.followUp}
            </Link>
            <Link
              href="/offers-and-subscriptions"
              className="rounded-full border border-brand-gold bg-brand-gold px-5 py-2 text-xs font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-gold-light"
            >
              {buttons.login}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="h-5 w-5">{mobileOpen ? <CloseIcon /> : <MenuIcon />}</span>
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-white/10 bg-brand-charcoal px-4 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {navigation.map((item) => {
                if (item.children) {
                  const expanded = openDropdown === item.label;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-white"
                        onClick={() =>
                          setOpenDropdown(expanded ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded && (
                        <ul className="ml-3 space-y-1 border-l border-white/10 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`block rounded-md px-3 py-2 text-sm ${
                                  pathname === child.href
                                    ? "text-brand-gold"
                                    : "text-white/75 hover:text-brand-gold"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "#"}
                      className={`block rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === item.href
                          ? "text-brand-gold"
                          : "text-white/90 hover:text-brand-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex justify-center px-4 pb-2">
              <LanguageSwitcher variant="dark" />
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Link
                href="/order-tracking"
                className="rounded-full border border-brand-gold px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-brand-gold"
              >
                {buttons.followUp}
              </Link>
              <Link
                href="/offers-and-subscriptions"
                className="rounded-full bg-brand-gold px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-brand-black"
              >
                {buttons.login}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}


