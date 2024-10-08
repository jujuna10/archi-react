import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translationen.json';
import translationKA from './translationka.json';

const resources = {
  en: { translation: translationEN },
  ka: { translation: translationKA },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
