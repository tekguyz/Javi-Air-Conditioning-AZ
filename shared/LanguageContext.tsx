'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { i18n } from './translations';
import { BIZ_DATA } from './constants';

type Language = 'en' | 'es';
type TranslationKeys = typeof i18n.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  biz: typeof BIZ_DATA;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Opt-in for client side hydration safety on language
  useEffect(() => {
    const savedLang = localStorage.getItem('javi-lang') as Language;
    if (savedLang === 'en' || savedLang === 'es') {
      setTimeout(() => {
        setLanguage(savedLang);
      }, 0);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('javi-lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: i18n[language], biz: BIZ_DATA }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
