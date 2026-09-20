export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

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

/** Drop a leading `/en` or `/pl` segment from an internal path. */
export function stripLocalePrefix(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    segments.shift();
  }
  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

/** Prefix an internal path with the locale when needed, e.g. `/blog` + `en` → `/en/blog`. */
export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const stripped = stripLocalePrefix(normalized);
  if (locale === defaultLocale) return stripped;
  if (stripped === "/") return `/${locale}`;
  return `/${locale}${stripped}`;
}

/** Swap between Polish (`/…`) and English (`/en/…`) while keeping the rest of the path. */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  return localizePath(stripLocalePrefix(pathname), nextLocale);
}

export function getLocaleFromUrl(url: URL): Locale {
  const maybe = url.pathname.split("/").filter(Boolean)[0];
  return maybe && isLocale(maybe) ? maybe : defaultLocale;
}

/** Absolute hreflang URLs for the current page (PL unprefixed, EN under `/en`). */
export function localeAlternateUrls(url: URL | string) {
  const parsed = typeof url === "string" ? new URL(url) : url;
  const path = stripLocalePrefix(parsed.pathname);
  const hrefFor = (locale: Locale) =>
    `${parsed.origin}${localizePath(path, locale)}${parsed.search}`;

  return {
    pl: hrefFor("pl"),
    en: hrefFor("en"),
    default: hrefFor(defaultLocale),
  };
}
