import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { LocaleProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/config";

export default function NavbarIsland({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider delayDuration={0}>
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
