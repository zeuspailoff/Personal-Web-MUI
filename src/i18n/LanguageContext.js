import { createContext, useContext } from 'react';

export const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);
