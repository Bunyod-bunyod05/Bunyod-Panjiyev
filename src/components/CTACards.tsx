"use client";

import { ExternalLink, MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";

export default function CTACards() {
  const { t } = useT();

  const cards = [
    {
      label: t.cards.demo.label,
      title: t.cards.demo.title,
      body: t.cards.demo.body,
      href: site.liveDemo,
      icon: ExternalLink,
    },
    {
      label: t.cards.repo.label,
      title: t.cards.repo.title,
      body: t.cards.repo.body,
      href: site.repo,
      icon: GithubIcon,
    },
    {
      label: t.cards.consult.label,
      title: t.cards.consult.title,
      body: t.cards.consult.body,
      href: site.telegramHref,
      icon: MessageCircle,
    },
  ];

  return (
    <section
      aria-label="Primary actions"
      className="relative -mt-24 px-6 pb-24 md:-mt-28"
    >
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ label, title, body, href, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 90}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex h-full flex-col justify-between rounded-sm border border-ink-line bg-paper-2 p-7 shadow-lg shadow-ink/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-ink/25"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-paper-2">
                    <Icon size={16} />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    {label}
                  </p>
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-gold">
                <span>Open</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
