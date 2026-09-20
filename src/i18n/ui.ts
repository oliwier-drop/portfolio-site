import type { Locale } from "./config";

export const ui = {
  en: {
    theme: "Theme",
    language: "Language",
    greeting: (firstName: string) => `Hi, I'm ${firstName}`,
    photosLabel: "Photos",
    blogTitle: "Blog",
    blogPosts: (n: number) => `${n} posts`,
    blogDescription:
      "My personal reflections about web development, life, and more.",
    pageOf: (page: number, total: number) => `Page ${page} of ${total}`,
    previous: "Previous",
    next: "Next",
    noPosts: "No blog posts yet. Check back soon!",
    backToBlog: "Back to Blog",
    notFoundTitle: "404 - Page Not Found",
    notFoundHeading: "Page Not Found",
    notFoundText:
      "The page you're looking for doesn't exist or may have been moved.",
    goHome: "Go to Home",
    today: "Today",
    daysAgo: (n: number) => `${n}d ago`,
    weeksAgo: (n: number) => `${n}w ago`,
    monthsAgo: (n: number) => `${n}mo ago`,
    yearsAgo: (n: number) => `${n}y ago`,
  },
  pl: {
    theme: "Motyw",
    language: "Język",
    greeting: (firstName: string) => `Cześć, jestem ${firstName}`,
    photosLabel: "Zdjęcia",
    blogTitle: "Blog",
    blogPosts: (n: number) =>
      n === 1 ? "1 wpis" : n < 5 ? `${n} wpisy` : `${n} wpisów`,
    blogDescription:
      "Moje przemyślenia o web developmentcie, życiu i nie tylko.",
    pageOf: (page: number, total: number) => `Strona ${page} z ${total}`,
    previous: "Poprzednia",
    next: "Następna",
    noPosts: "Brak wpisów na blogu. Wróć wkrótce!",
    backToBlog: "Wróć do bloga",
    notFoundTitle: "404 - Nie znaleziono strony",
    notFoundHeading: "Nie znaleziono strony",
    notFoundText:
      "Szukana strona nie istnieje albo została przeniesiona.",
    goHome: "Strona główna",
    today: "Dzisiaj",
    daysAgo: (n: number) => `${n} dn. temu`,
    weeksAgo: (n: number) => `${n} tyg. temu`,
    monthsAgo: (n: number) => `${n} mies. temu`,
    yearsAgo: (n: number) => `${n} lat temu`,
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}
