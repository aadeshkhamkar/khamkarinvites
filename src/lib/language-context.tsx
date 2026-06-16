import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (pair: { en: string; mr: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("wedding-lang");
    if (stored === "en" || stored === "mr") setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("wedding-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((p) => (p === "en" ? "mr" : "en"));
  const t = (pair: { en: string; mr: string }) => pair[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
