import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.NODE_ENV !== "production",
    fallbackLng: ["en"],
    defaultNS: "main",
    fallbackNS: "main",
    ns: ["main"],
    supportedLngs: ["en", "en-GB", "fr", "de"],
    pluralSeparator: "_",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
    react: {
      useSuspense: true,
      bindI18n: "languageChanged",
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
  })
  .then(() => {
    i18n.loadNamespaces(["main"]);
  });

export default i18n;
