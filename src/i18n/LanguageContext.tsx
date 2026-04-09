import { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import type { Lang } from './translations';
import { getTranslation } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Lang>('en');

  const t = useCallback(
    (key: string) => getTranslation(lang, key),
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
