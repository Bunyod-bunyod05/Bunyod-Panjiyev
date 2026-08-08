"use client";

import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function PracticeAreas() {
  const { t } = useT();

  return (
    <section
      id="practice"
      className="bg-burgundy px-6 py-24 text-paper md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold-bright">
            {t.practice.eyebrow}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
            <h2 className="font-display text-4xl leading-tight text-paper-2 sm:text-5xl md:text-[3.25rem]">
              {t.practice.heading}
            </h2>
            <p className="text-base leading-relaxed text-paper/80">
              {t.practice.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border-t border-burgundy-line sm:grid-cols-2">
          {t.practice.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="group relative border-b border-burgundy-line px-2 py-8 sm:px-8"
            >
              {/* Right border on odd items (for the vertical divider) */}
              <div
                aria-hidden="true"
                className={`absolute top-0 bottom-0 right-0 w-px bg-burgundy-line ${
                  i % 2 === 0 ? "hidden sm:block" : "hidden"
                }`}
              />
              <div className="flex items-start gap-5">
                <span className="mt-1 font-mono text-xs tracking-[0.14em] text-gold-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-paper-2 transition-colors group-hover:text-gold-bright">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/75">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
