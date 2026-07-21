"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "es" | "fr";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "fr", label: "French", flag: "🇫🇷" },
];

const STORAGE_KEY = "bagiard_lang";
const COOKIE_KEY = "bagiard_lang";

function isValidLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "es" || value === "fr";
}

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const fromStorage = localStorage.getItem(STORAGE_KEY);
  if (isValidLanguage(fromStorage)) return fromStorage;

  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  const fromCookie = match ? decodeURIComponent(match[1]) : null;
  if (isValidLanguage(fromCookie)) return fromCookie;

  return "en";
}

function persistLanguage(lang: Language) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.cookie = `${COOKIE_KEY}=${lang};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = lang;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredLanguage();
    setLanguageState(stored);
    document.documentElement.lang = stored;
    setReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    persistLanguage(lang);
  };

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  if (!ready) {
    return (
      <LanguageContext.Provider
        value={{ language: "en", setLanguage, currentOption: LANGUAGE_OPTIONS[0] }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentOption }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
