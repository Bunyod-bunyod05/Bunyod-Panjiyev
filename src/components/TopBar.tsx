"use client";

import { MapPin, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBar() {
  const { t } = useT();

  return (
    <div className="hidden border-b border-ink-line bg-paper-2 text-ink-muted md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] font-medium">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} className="text-gold" />
            {t.top.location}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 hover:text-ink"
          >
            <Mail size={12} className="text-gold" />
            {site.email}
          </a>
        </div>
        <LanguageSwitcher variant="light" />
      </div>
    </div>
  );
}
