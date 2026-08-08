"use client";

import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useT();

  const channels = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Mail,
      label: t.contact.labels.emailAlt,
      value: site.emailAlt,
      href: `mailto:${site.emailAlt}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.labels.telegram,
      value: site.telegramHandle,
      href: site.telegramHref,
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: site.phone,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: GithubIcon,
      label: t.contact.labels.github,
      value: "Bunyod-bunyod05",
      href: site.github,
    },
    {
      icon: MapPin,
      label: t.contact.labels.location,
      value: t.top.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-ink px-6 py-24 text-paper-2 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="hairline font-mono text-[11px] uppercase tracking-[0.28em] text-gold-bright">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-[3.25rem]">
              {t.contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80">
              {t.contact.body}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-px overflow-hidden border border-ink-2 bg-ink-2 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 bg-ink p-6 transition-colors">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                      <Icon size={14} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
                        {label}
                      </p>
                      <p className="mt-1 truncate font-display text-lg font-semibold text-paper-2">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={label + value} className="min-w-0">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="block h-full hover:bg-ink-2 [&_p:last-child]:hover:text-gold-bright"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
