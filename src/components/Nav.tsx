"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import SealMark from "./SealMark";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-line bg-ink/95 backdrop-blur"
          : "border-transparent bg-ink/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#preamble" className="flex items-center gap-3">
          <SealMark size={34} />
          <span className="font-mono text-sm uppercase tracking-[0.16em] text-ink-soft">
            {site.name}
            <span className="hidden text-brass sm:inline"> / AI Counsel</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-brass-strong"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="text-ink-soft md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-line px-6 pb-5 pt-2 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft hover:bg-ink-2 hover:text-brass-strong"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
