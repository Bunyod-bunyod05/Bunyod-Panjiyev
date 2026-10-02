"use client";

import Image from "next/image";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import CVButtons from "./CVButtons";

export default function AboutSection() {
  const { t } = useT();

  return (
    <section className="bg-paper px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-20">
        {/* Image */}
        <Reveal>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/workspace.jpg"
              alt="Bunyod Panjiyev at his workspace"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
            />
            {/* Subtle warm overlay to match palette */}
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(239,232,216,0.05) 0%, rgba(92,32,40,0.08) 100%)",
              }}
            />
            {/* Corner label */}
            <div className="absolute bottom-4 left-4 rounded-sm bg-paper-2/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              {site.location}
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-[3.25rem]">
              {t.about.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <CVButtons />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink-line pt-8 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {t.contact.labels.email}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-display text-lg font-semibold text-ink hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {t.contact.labels.telegram}
                </p>
                <a
                  href={site.telegramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-display text-lg font-semibold text-ink hover:text-gold"
                >
                  {site.telegramHandle}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {t.contact.labels.phone}
                </p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-1 block font-display text-lg font-semibold text-ink hover:text-gold"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
