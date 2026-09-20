import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext';
import translations, { LANGUAGES } from './translations';

const STORAGE_KEY = 'cv-lang';

const getInitialLang = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key) => translations[lang][key] ?? translations.en[key] ?? key, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
      t,
    }),
    [lang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = { children: PropTypes.node };

export default LanguageProvider;
