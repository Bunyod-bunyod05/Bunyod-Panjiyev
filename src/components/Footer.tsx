"use client";

import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import SealMark from "./SealMark";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-2 bg-ink px-6 py-8 text-paper/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <SealMark size={30} className="border-gold-bright text-gold-bright" />
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-paper-2">
              {site.name}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-bright">
              {t.footer.tagline}
            </p>
          </div>
        </div>
        <p className="text-center font-mono text-[11px] sm:text-right">
          © {year} {site.firstName} Panjiyev. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
