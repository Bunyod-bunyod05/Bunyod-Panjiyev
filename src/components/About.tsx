import { counselNotes, site } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  const initial = site.name.charAt(0).toUpperCase();

  return (
    <section id="counsel" className="border-b border-ink-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Article III
          </p>
          <h2 className="mt-3 font-display text-3xl text-parchment sm:text-4xl">
            Counsel
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
            <div
              aria-hidden="true"
              className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brass font-display text-4xl text-brass-strong"
            >
              {initial}
            </div>

            <div className="max-w-2xl">
              {counselNotes.paragraphs.map((p) => (
                <p
                  key={p}
                  className="mt-0 mb-4 text-base leading-relaxed text-ink-soft last:mb-0"
                >
                  {p}
                </p>
              ))}

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                Admitted to practice
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {counselNotes.admitted.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-sm border border-ink-line px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
