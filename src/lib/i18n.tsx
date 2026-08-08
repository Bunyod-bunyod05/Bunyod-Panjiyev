"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "./data";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "bp-portfolio-lang";

function isValidLang(v: unknown): v is Lang {
  return v === "en" || v === "uz" || v === "ru";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (isValidLang(stored)) setLangState(stored);
    } catch {
      // ignore — private browsing mode etc.
    }
    setHydrated(true);
    // We intentionally read localStorage once on mount to hydrate the
    // language preference. This is the correct pattern for client-only
    // state that must be preserved across sessions.
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
  }, [lang, hydrated]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside <LanguageProvider>");
  return ctx;
}
