"use client";

import { languages } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const { lang, setLang } = useT();

  const base =
    "font-mono text-[11px] uppercase tracking-[0.14em] transition-colors px-2 py-1 rounded-sm";
  const activeStyle =
    variant === "light"
      ? "text-ink font-semibold"
      : "text-paper-2 font-semibold";
  const inactiveStyle =
    variant === "light"
      ? "text-ink-muted hover:text-ink"
      : "text-paper/60 hover:text-paper";

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${
        variant === "light" ? "text-ink-muted" : "text-paper/60"
      }`}
      role="group"
      aria-label="Select language"
    >
      {languages.map((l, i) => (
        <span key={l.code} className="inline-flex items-center">
          {i > 0 && (
            <span
              aria-hidden="true"
              className={
                variant === "light"
                  ? "text-ink-line"
                  : "text-paper/30"
              }
            >
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            className={`${base} ${
              lang === l.code ? activeStyle : inactiveStyle
            }`}
            aria-pressed={lang === l.code}
            aria-label={`Switch to ${l.label}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
