import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";

/** Polish copy overrides merged onto the English resume data */
export const plCopy = {
  name: "Oliwier Drop — Administrator sieci i infrastruktury",
  description:
    "Administrator sieci i infrastruktury z pasją do budowy skalowalnych i niezawodnych systemów.",
  summary:
    "Jestem administratorem sieci i infrastruktury z doświadczeniem w administracji i rozwoju infrastruktury IT w środowisku produkcyjnym. Specjalizuję się w administracji sieciami LAN/WAN, firewallami Palo Alto, środowiskami serwerowymi i wirtualizacją.",
  sections: {
    about: { heading: "O mnie" },
    work: { heading: "Doświadczenie zawodowe", presentLabel: "obecnie" },
    education: { heading: "Edukacja" },
    skills: { heading: "Umiejętności" },
    projects: {
      label: "Moje projekty",
      heading: "Zobacz moje ostatnie prace",
      text: "Pracowałem nad różnymi projektami — od prostych stron po złożone aplikacje webowe. Oto kilka moich ulubionych.",
    },
    hackathons: {
      label: "Hackathony",
      heading: "Lubię budować rzeczy",
      text: "Podczas studiów wziąłem udział w {count}+ hackathonach. Ludzie z całego kraju schodzili się, żeby w 2–3 dni zbudować coś niesamowitego. To było inspirujące — zobaczyć, ile da się stworzyć w grupie zmotywowanych i pasjonujących się osób.",
    },
    photos: {
      heading: "Moje ostatnie podróże",
    },
    contact: {
      label: "Kontakt",
      heading: "Napisz do mnie",
      text: "Chcesz pogadać? Napisz do mnie wiadomość z konkretnym pytaniem na LinkedIn — odezwę się, gdy będę mógł. Oferty sprzedażowe ignoruję.",
    },
  },
  navbar: [
    { href: "/", label: "Start" },
  ],
  work: [
    {
      badges: ["Pełny etat"],
      location: "Słupca, Polska",
      title: "Specjalista ds. infrastruktury IT",
      start: "listopad 2026",
      description:
        "Utrzymanie i rozwój infrastruktury IT w środowisku produkcyjnym. Zarządzanie siecią Cisco, Extreme Networks i Ubiquiti, administracja VMware ESXi, Proxmox i Hyper-V, Windows Server, systemów druku, monitoringu i RMM, udział we wdrożeniach kontroli dostępu oraz wsparcie użytkowników.",
    },
    {
      badges: ["Freelance"],
      location: "Słupca, Polska",
      title: "Konsultant ds. sieci i infrastruktury",
      start: "listopad 2026",
      description:
        "Wsparcie klientów w projektach wdrożeniowych sieci i infrastruktury — projektowanie rozwiązań, planowanie wdrożeń oraz ich realizacja w środowiskach produkcyjnych.",
    },
    {
      badges: ["Pełny etat"],
      location: "Słupca, Polska",
      title: "Specjalista ds. IT",
      start: "wrzesień 2024",
      end: "listopad 2026",
      description:
        "Administracja siecią i infrastrukturą IT u klientów — przełączniki, VLAN-y, serwery i wirtualizacja. Tworzenie stron internetowych oraz oprogramowania dopasowanego do potrzeb klientów.",
    },
  ],
  education: [
    {
      school: "Uniwersytet im. Adama Mickiewicza w Poznaniu",
      degree: ["Licencjat"],
      major: "Dziennikarstwo i komunikacja społeczna",
    },
    {
      school: "Zespół Szkół Ogólnokształcących i Zawodowych w Zagórowie",
      degree: ["Technik"],
      major: "Teleinformatyka",
    },
  ],
  projects: [
    {
      title: "Migracja sieci firmowej",
      dates: "Wrzesień 2025 - obecnie",
      description:
        "Migracja sieci firmowej ze starej puli adresowej do nowej, bardziej granularnej. Przeprojektowanie podsieci pod lepszą segmentację oraz wdrożenie nowych polityk bezpieczeństwa na firewallach.",
      links: [],
    },
    {
      title: "Wdrożenie Wazuh i integracja z ExtremeXOS",
      dates: "lipiec 2026",
      description:
        "Wdrożenie Wazuh na zakładzie HellermannTyton oraz własne dekodery i reguły korelacji dla syslogów Extreme Networks Switch Engine — lepsza widoczność zdarzeń auth, portów, pętli i platformy.",
      links: [{ type: "Kod" }],
    },
    {
      title: "HT Kiosk",
      dates: "maj 2026",
      description:
        "Nakładka kioskowa na zakład HellermannTyton. Aplikacja Electron z wbudowaną klawiaturą ekranową oraz automatycznym kasowaniem sesji na wspólnych terminalach.",
      links: [{ type: "Kod" }],
    },
    {
      dates: "luty 2026",
      description:
        "Prosty landing page dla lokalnej firmy produkującej opakowania kartonowe. Czysty, industrialny wygląd z naciskiem na ofertę produktową — przygotowany dla regionalnego producenta opakowań.",
      links: [{ type: "Strona" }, { type: "Kod" }],
    },
  ],
  hackathons: [
    {
      dates: "14–16 października 2022",
      location: "Seattle, Waszyngton",
      description:
        "Narzędzie do wspólnego code review w czasie rzeczywistym (WebSockets + Monaco Editor). Nagroda za najlepsze narzędzie developerskie.",
      win: "Najlepsze narzędzie developerskie",
    },
    {
      dates: "15–16 stycznia 2022",
      location: "Vancouver, BC",
      description:
        "Rozszerzenie przeglądarki skupione na dostępności — przepisuje złożone dokumenty prawne na prosty angielski z pomocą GPT-3.",
    },
    {
      dates: "17–19 września 2021",
      location: "Waterloo, Ontario (zdalnie)",
      description:
        "Rozproszony magazyn klucz–wartość w Go z własną implementacją Raft. Finalista ścieżki systems.",
      links: [{ title: "Kod" }],
    },
    {
      dates: "9–10 października 2021",
      location: "Seattle, Waszyngton",
      description:
        "Tracker śladu węglowego zintegracją z Google Maps, sugerujący mniej emisyjne alternatywy dojazdów.",
      win: "Najlepszy hack sustainability",
    },
    {
      dates: "24–25 kwietnia 2021",
      location: "Burnaby, BC (zdalnie)",
      description:
        "Przeglądarkowa gra multiplayer, w której gracze wspólnie debugują wspólny kod przed upływem czasu.",
      links: [{ title: "Devpost" }],
    },
    {
      dates: "14–15 listopada 2020",
      location: "Vancouver, BC (zdalnie)",
      description:
        "CLI generujące scaffolding testów jednostkowych z sygnatur funkcji TypeScript na podstawie analizy statycznej.",
      win: "1. miejsce ogólne",
      links: [{ title: "Kod" }],
    },
    {
      dates: "7–8 marca 2020",
      location: "Vancouver, BC",
      description:
        "Mobile-first board ofert pracy dla juniorów — agregacja z GitHub Jobs, HN Who's Hiring i LinkedIn.",
    },
    {
      dates: "11–12 stycznia 2020",
      location: "Vancouver, BC",
      description:
        "Platforma peer-to-peer do sesji nauki: wideo na żywo, wspólne whiteboards i timery Pomodoro.",
    },
    {
      dates: "13–15 września 2019",
      location: "Waterloo, Ontario",
      description:
        "Wizualizer limitów API śledzący użycie u wielu providerów i wykrywający anomalie w czasie rzeczywistym.",
      links: [{ title: "Kod" }],
    },
    {
      dates: "18–19 stycznia 2019",
      location: "Hamilton, Ontario",
      description:
        "Rozszerzenie VS Code sugerujące nazwy zmiennych na podstawie typów i kontekstu kodu (lokalny model ML).",
    },
    {
      dates: "2–3 marca 2019",
      location: "Burnaby, BC",
      description:
        "Heatmapa opóźnień sieciowych wizualizująca wydajność CDN w regionach na podstawie danych RUM z lekkiego snippeta JS.",
      win: "Najlepszy hack infrastrukturalny",
    },
  ],
} as const;

export function localizeNavbar(
  locale: Locale,
  items: readonly { href: string; label: string; icon: unknown }[],
  labels?: readonly { href: string; label: string }[],
) {
  return items.map((item, i) => ({
    ...item,
    href: localizePath(item.href.replace(/^\/(en|pl)/, "") || "/", locale),
    label: labels?.[i]?.label ?? item.label,
  }));
}
