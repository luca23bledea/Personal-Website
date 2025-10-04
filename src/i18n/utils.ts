import { translations, type Language } from './translations';

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ro') return 'ro';
  return 'en';
}
