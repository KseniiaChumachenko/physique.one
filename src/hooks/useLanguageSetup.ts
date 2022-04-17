import moment from "moment";
import {useEffect, useState} from "react";
import { i18n } from "@lingui/core"
import { csCZ, enUS, Localization, ruRU, ukUA } from "@material-ui/core/locale";
import {messages as enMessages} from "../locales/en/messages";
import {messages as ruMessages} from "../locales/ru/messages";
import {messages as csMessages} from "../locales/cs/messages";
import {messages as ukMessages} from "../locales/uk/messages";

export interface LanguageProps {
  label: string;
  language: string;
  component: Localization;
  catalog: any;
}

interface UseLanguageSetup {
  [key: string]: LanguageProps;
}

export const languages: UseLanguageSetup = {
  en: {
    label: "EN",
    language: "en",
    component: enUS,
    catalog: enMessages,
  },
  ru: {
    label: "RU",
    language: "ru",
    component: ruRU,
    catalog: ruMessages,
  },
  cs: {
    label: "CZ",
    language: "cs",
    component: csCZ,
    catalog: csMessages,
  },
  uk: {
    label: "UA",
    language: "uk",
    component: ukUA,
    catalog: ukMessages,
  },
};

// i18n.loadLocaleData({
//   en: { plurals: en },
//   ru: { plurals: ru },
//   cs: { plurals: cs },
//   uk: { plurals: uk }
// })  TODO: "Is not a function" - WHY?

i18n.load({
  en: enMessages,
  ru: ruMessages,
  cs: csMessages,
  uk: ukMessages
})

export function useLanguageSetup() {
  const [locale, setLocale] = useState(languages["en"]);

  useEffect(() => {
    i18n.activate(locale.language)
  }, [locale])

  useEffect(() => {
    moment.updateLocale(locale.language, {
      week: {
        dow: 1,
      },
    });
  }, [locale.language]);

  return {
    i18n,
    locale,
    setLocale,
  };
}
