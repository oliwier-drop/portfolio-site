import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { defaultLocale, localeIntl, type Locale } from "@/i18n/config"
import { getUi } from "@/i18n/ui"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, locale: Locale = defaultLocale) {
  const ui = getUi(locale);
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleDateString(localeIntl[locale], {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  if (daysAgo < 1) {
    return ui.today;
  } else if (daysAgo < 7) {
    return `${fullDate} (${ui.daysAgo(daysAgo)})`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${ui.weeksAgo(weeksAgo)})`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${ui.monthsAgo(monthsAgo)})`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${ui.yearsAgo(yearsAgo)})`;
  }
}
