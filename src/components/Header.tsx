"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import SealMark from "./SealMark";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { label: t.nav.home, href: "#top" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.practice, href: "#practice" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper-2 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <SealMark size={44} />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide text-ink">
              {site.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
              {t.top.tagline}
            </span>
          </div>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 md:inline-flex"
          >
            <Phone size={14} className="text-gold" />
            <span className="font-display text-base font-semibold text-ink">
              {site.phone}
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="text-ink lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-ink-line bg-paper-2 px-6 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-3 font-mono text-sm uppercase tracking-[0.14em] text-ink hover:bg-cream hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-ink-line pt-4">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-2 text-ink"
            >
              <Phone size={14} className="text-gold" />
              <span className="font-display text-base font-semibold">
                {site.phone}
              </span>
            </a>
            <LanguageSwitcher variant="light" />
          </div>
        </nav>
      )}
    </header>
  );
}
