"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, languages } from "@/data/translations";
import { Translation } from "@/types";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "bg")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language] as Translation;
    if (currentTranslations && key in currentTranslations) {
      return currentTranslations[key as keyof Translation] as string;
    }
    // Fallback to English
    const englishTranslations = translations.en as Translation;
    if (key in englishTranslations) {
      return englishTranslations[key as keyof Translation] as string;
    }
    // Return key if not found
    return key;
  };

  // Prevent flash of untranslated content
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
