import { createContext, useContext, type ReactNode } from "react";
import { getData, type ResumeData } from "@/data/resume";
import { defaultLocale, type Locale } from "./config";
import { getUi, type UiStrings } from "./ui";

type I18nContextValue = {
  locale: Locale;
  data: ResumeData;
  ui: UiStrings;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value: I18nContextValue = {
    locale,
    data: getData(locale),
    ui: getUi(locale),
  };

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback for islands rendered without a provider during HMR edge cases
    return {
      locale: defaultLocale,
      data: getData(defaultLocale),
      ui: getUi(defaultLocale),
    };
  }
  return ctx;
}
