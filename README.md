# Bunyod Panjiyev — Portfolio

Lawyer · AI Consultant · LegalTech portfolio site, built with Next.js 16 (App
Router, TypeScript) and Tailwind CSS v4. Traditional law-firm layout — thin
address bar, wide sticky header with monogram + navigation + phone, full-image
hero with a signature quote, three CTA cards, deep burgundy practice-areas
block, workspace image, featured case file, and a dark contact block.

Three languages: **English · O'zbek · Русский** — the switcher (EN | UZ | RU)
lives in the top-right of the site and persists your choice in local storage.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Where to edit content

Everything editable lives in a **single file**: `src/lib/data.ts`

- `site` — name, emails, phone, Telegram, GitHub, live-demo URL, repo URL, location
- `translations.en` — English strings for every visible label / heading / body
- `translations.uz` — O'zbekcha
- `translations.ru` — Русский
- `projectStack` / `projectAgents` — tech tags shown on the case file card

The three translation blocks have identical shape — if you change a key in one,
add the corresponding key in the other two (TypeScript will flag missing ones).

## Images

Your photos live in `public/images/`:

- `portrait.png` — the studio portrait, used as the hero background
- `workspace.jpg` — the office / workspace photo, used in the About section

Swap either file (keep the same filename) to change the photos without touching code.

## Structure

```
src/
  app/
    layout.tsx       — fonts, metadata, LanguageProvider wrapper
    page.tsx         — composes all sections
    globals.css      — design tokens (cream palette, navy, burgundy, gold)
  components/
    TopBar.tsx        — thin top strip: address + email + language switcher
    Header.tsx        — sticky header with logo, nav, phone, mobile menu
    Hero.tsx          — full-width portrait bg + Wittgenstein quote overlay
    CTACards.tsx      — Live Demo / View Repository / Book Consultation
    WhySection.tsx    — "Why work with me" two-column block
    PracticeAreas.tsx — dark burgundy block: 4 practice-area cards
    AboutSection.tsx  — workspace photo + Counsel of Record copy
    CaseFiles.tsx     — the Legal AI Consultant featured docket
    Contact.tsx       — dark contact grid: email, alt email, telegram, phone, github, location
    Footer.tsx        — monogram + name + copyright
    LanguageSwitcher.tsx — EN | UZ | RU pill
    SealMark.tsx      — the BP monogram used in header and footer
    BrandIcons.tsx    — custom GitHub icon (lucide-react dropped brand logos)
    Reveal.tsx        — scroll-in fade animation wrapper
  lib/
    data.ts           — all editable content and translations
    i18n.tsx          — language context + `useT()` hook
```

## Design tokens

Colors (from `src/app/globals.css`):

- `--color-cream: #EFE8D8` — warm paper background
- `--color-paper-2: #FDFAF3` — near-white for cards and header
- `--color-ink: #1A2340` — deep navy for text and dark sections
- `--color-burgundy: #5C2028` — accent for practice-areas block and buttons
- `--color-gold: #9F7A3A` — small accents and hover states
- `--color-gold-bright: #C8A46B` — accents on dark backgrounds

Type:

- Display (headlines): **Cormorant Garamond** — classical legal-firm serif
- Body: **IBM Plex Sans**
- Small caps / eyebrows / tags: **IBM Plex Mono**

## Notes

- The LinkedIn link is deliberately omitted (blocked account). Add it back to
  `site` and `Contact.tsx` if it's restored later.
- All fonts are self-hosted via `@fontsource/*` packages, so nothing loads
  from external servers.
- The language preference is stored in `localStorage` under
  `bp-portfolio-lang`.
