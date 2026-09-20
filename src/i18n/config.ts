export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  pl: "pl",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  pl: "pl_PL",
};

export const localeIntl: Record<Locale, string> = {
  en: "en-US",
  pl: "pl-PL",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an internal path with the locale, e.g. `/blog` + `pl` → `/pl/blog` */
export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

/** Swap `/en/...` ↔ `/pl/...` while keeping the rest of the path + search */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return `/${segments.join("/")}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const maybe = url.pathname.split("/").filter(Boolean)[0];
  return maybe && isLocale(maybe) ? maybe : defaultLocale;
}
