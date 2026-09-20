import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { switchLocalePath, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale } = useI18n();
  const nextLocale: Locale = locale === "en" ? "pl" : "en";

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(
        "font-semibold text-xs tracking-wide no-underline hover:no-underline",
        className,
      )}
      aria-label={locale === "en" ? "Switch to Polish" : "Przełącz na angielski"}
      onClick={() => {
        const next = switchLocalePath(window.location.pathname, nextLocale);
        const search = window.location.search;
        window.location.assign(`${next}${search}`);
      }}
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}
