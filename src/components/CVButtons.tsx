"use client";

import { Download } from "lucide-react";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function CVButtons({ dark = false }: { dark?: boolean }) {
  const { t } = useT();
  const files = [
    { href: site.cvEn, lang: t.cv.en, code: "EN" },
    { href: site.cvRu, lang: t.cv.ru, code: "RU" },
  ];

  return (
    <div>
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
          dark ? "text-paper/60" : "text-ink-soft"
        }`}
      >
        {t.cv.label}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {files.map(({ href, lang, code }) => (
          <a
            key={code}
            href={href}
            target="_blank"
            rel="noreferrer"
            download
            className={`inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
              dark
                ? "border-gold text-gold-bright hover:bg-gold hover:text-ink"
                : "border-ink text-ink hover:border-gold hover:text-gold"
            }`}
          >
            <Download size={13} aria-hidden="true" />
            CV · {lang}
          </a>
        ))}
      </div>
    </div>
  );
}
