"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "th")) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "th", setLanguage, t: translations.th }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
