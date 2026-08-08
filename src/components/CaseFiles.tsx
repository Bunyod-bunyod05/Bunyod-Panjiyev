"use client";

import { ExternalLink } from "lucide-react";
import { projectAgents, projectStack, site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";

export default function CaseFiles() {
  const { t } = useT();

  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            {t.cases.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-[3.25rem]">
            {t.cases.heading}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <article className="relative mt-14 overflow-hidden rounded-sm border border-ink-line bg-paper-2 shadow-md shadow-ink/5">
            {/* Corner status ribbon */}
            <div className="absolute right-0 top-0 z-10 bg-burgundy px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper-2 sm:px-4 sm:py-1.5">
              {t.cases.status}
            </div>

            <div className="grid gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-[1.5fr_1fr] md:gap-14 md:p-12">
              {/* Left column: docket + title + numbered summary + actions */}
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  {t.cases.docket}
                </p>
                <h3 className="mt-2 font-display text-[26px] font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
                  {t.cases.caseTitle}
                </h3>
                <p className="mt-2 font-display text-base italic leading-snug text-ink-muted sm:text-lg">
                  {t.cases.caseSubtitle}
                </p>

                {/* Mobile-only compact meta strip (avoids pushing the
                    numbered summary off screen on tiny viewports) */}
                <dl className="mt-5 grid grid-cols-1 gap-3 border-y border-ink-line py-4 text-sm md:hidden">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                      {t.cases.jurisdictionLabel}
                    </dt>
                    <dd className="mt-1 text-[13px] leading-snug text-ink">
                      {t.cases.jurisdiction}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                      {t.cases.panelLabel}
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {projectAgents.map((agent) => (
                        <span
                          key={agent}
                          className="rounded-sm border border-ink-line bg-cream px-2 py-0.5 font-mono text-[10px] text-ink"
                        >
                          {agent}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <ol className="mt-6 space-y-4 border-t border-ink-line pt-6 md:mt-8">
                  {t.cases.summary.map((point, i) => (
                    <li key={i} className="flex gap-3.5 sm:gap-5">
                      <span className="mt-1 shrink-0 font-mono text-xs text-burgundy">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">
                        {point}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-burgundy px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-paper-2 transition-colors hover:bg-burgundy-dark"
                  >
                    {t.cases.liveDemo}
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href={site.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    {t.cases.viewRepo}
                    <GithubIcon width={13} height={13} />
                  </a>
                </div>
              </div>

              {/* Right column: full metadata sidebar (desktop-only display,
                  because we already showed the compact version on mobile) */}
              <aside className="hidden space-y-6 border-ink-line md:block md:border-l md:pl-10">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {t.cases.jurisdictionLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {t.cases.jurisdiction}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {t.cases.panelLabel}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {projectAgents.map((agent) => (
                      <li
                        key={agent}
                        className="rounded-sm border border-ink-line bg-cream px-2.5 py-1 font-mono text-[11px] text-ink"
                      >
                        {agent}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {t.cases.counselLabel}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {projectStack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-sm border border-ink-line bg-cream px-2.5 py-1 font-mono text-[11px] text-ink"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Mobile-only: full counsel-of-record list at the bottom
                  so tech tags don't get lost */}
              <div className="md:hidden">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {t.cases.counselLabel}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {projectStack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-sm border border-ink-line bg-cream px-2 py-0.5 font-mono text-[10px] text-ink"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
