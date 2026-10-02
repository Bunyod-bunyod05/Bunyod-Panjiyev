"use client";

import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function WhySection() {
  const { t } = useT();

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            {t.why.eyebrow}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-[3.25rem]">
              {t.why.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink-muted">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-burgundy">
                {t.why.body1}
              </p>
              <p>{t.why.body2}</p>
              <div>
                <p className="font-semibold text-ink">{t.why.listLead}</p>
                <ul className="mt-3 space-y-2">
                  {t.why.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
