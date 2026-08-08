"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

export default function Hero() {
  const { t } = useT();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* Background portrait */}
      <div className="absolute inset-0">
        <Image
          src="/images/portrait.png"
          alt="Bunyod Panjiyev, AI consultant and legal-tech engineer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_15%] md:object-[65%_20%]"
        />
        {/* Dark gradient overlay — heavy on the left where the text sits,
            softer on the right so the face reads clearly. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,20,40,0.94) 0%, rgba(15,20,40,0.86) 30%, rgba(15,20,40,0.55) 55%, rgba(15,20,40,0.20) 80%, rgba(15,20,40,0.05) 100%)",
          }}
        />
        {/* On mobile the text sits over the full width, so we need a
            uniform darkening layer that only shows below md.
            50% keeps the small intro paragraph above the WCAG-AA 4.5:1
            contrast threshold even over the brightest face highlights. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "rgba(15,20,40,0.50)" }}
        />
        {/* Extra bottom fade for the CTA cards to sit on */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(15,20,40,0.65))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-6 pb-32 pt-20 md:min-h-[640px] md:pt-28">
        <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold-bright">
          {t.hero.eyebrow}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-paper-2 sm:text-5xl md:text-[3.75rem] lg:text-[4.25rem]"
        >
          <span className="italic">&ldquo;{t.hero.quote}&rdquo;</span>
        </h1>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-gold-bright/90">
          — {t.hero.attribution}
        </p>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
          {t.hero.intro}
        </p>
      </div>
    </section>
  );
}
