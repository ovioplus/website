'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Lang, type Translations } from './translations';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'ovioplus-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to 'it' for Italian audience — change to 'en' if you prefer
  const [lang, setLangState] = useState<Lang>('it');

  // Load persisted choice (or browser language) after mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && (stored === 'en' || stored === 'it')) {
      setLangState(stored);
      document.documentElement.lang = stored;
      return;
    }
    // First visit — detect from browser
    const browserLang = navigator.language.toLowerCase();
    const initial: Lang = browserLang.startsWith('it') ? 'it' : 'en';
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
