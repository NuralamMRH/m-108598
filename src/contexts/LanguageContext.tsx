
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { en } from '../locales/en';
import { it } from '../locales/it';
import { vn } from '../locales/vn';

type Translations = typeof en;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

// Function to ensure all translations have the same structure as the English one
const normalizeTranslation = (translation: any): Translations => {
  // Use English as the base and merge with the provided translation
  return {
    ...en,
    ...translation
  };
};

// Create normalized translations that match the English structure
const translations: Record<string, Translations> = {
  en,
  it: normalizeTranslation(it),
  vn: normalizeTranslation(vn)
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en'); // Default to 'en' to ensure we start with a complete structure
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    // Try to load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
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
