type Rarity = "bronze" | "silver" | "gold" | "error" | "platinum";

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  hint: string; // PRZED: co zrobić, żeby odblokować (imperatyw)
  description: string; // PO: co użytkownik zrobił (czas przeszły)
  rarity: Rarity;
}

export const achievementsList: Achievement[] = [
  {
    id: "hi",
    icon: "👋",
    title: "Witaj, wędrowcze",
    hint: "Zostań chwilę na stronie",
    description: "Wszedłeś na moje portfolio",
    rarity: "bronze",
  },
  {
    id: "about",
    icon: "🧑",
    title: "Poznajmy się",
    hint: "Przewiń do sekcji „O mnie”",
    description: "Odwiedziłeś sekcję „O mnie”",
    rarity: "bronze",
  },
  {
    id: "nav",
    icon: "🗺️",
    title: "Nawigator",
    hint: "Kliknij link w nawigacji",
    description: "Skorzystałeś z nawigacji",
    rarity: "bronze",
  },
  {
    id: "tech",
    icon: "⚙️",
    title: "Stack Master",
    hint: "Sprawdź technologie",
    description: "Zobaczyłeś moje technologie",
    rarity: "bronze",
  },
  {
    id: "github",
    icon: "🌱",
    title: "Contributor",
    hint: "Zajrzyj do sekcji GitHub",
    description: "Sprawdziłeś aktywność na GitHubie",
    rarity: "bronze",
  },
  {
    id: "projects",
    icon: "🚀",
    title: "Odkrywca projektów",
    hint: "Przewiń do projektów",
    description: "Odwiedziłeś projekty",
    rarity: "silver",
  },
  {
    id: "case",
    icon: "🔍",
    title: "Detektyw",
    hint: "Przeczytaj studium przypadku",
    description: "Doszedłeś do studium przypadku",
    rarity: "silver",
  },
  {
    id: "team",
    icon: "🤝",
    title: "Team player",
    hint: "Zobacz, co wnoszę do zespołu",
    description: "Sprawdziłeś, co wnoszę do zespołu",
    rarity: "silver",
  },
  {
    id: "contact",
    icon: "✉️",
    title: "Gotowy do kontaktu",
    hint: "Przewiń do kontaktu",
    description: "Dotarłeś do formularza kontaktowego",
    rarity: "silver",
  },
  {
    id: "half",
    icon: "🧭",
    title: "Półmetek",
    hint: "Przewiń połowę strony",
    description: "Przewinąłeś połowę strony",
    rarity: "bronze",
  },
  {
    id: "end",
    icon: "🏁",
    title: "Koniec gry",
    hint: "Przewiń do stopki",
    description: "Dotarłeś na sam dół",
    rarity: "silver",
  },
  {
    id: "click10",
    icon: "👆",
    title: "Klikacz",
    hint: "Kliknij 10 razy",
    description: "10 kliknięć na stronie",
    rarity: "bronze",
  },
  {
    id: "click30",
    icon: "🥊",
    title: "Mistrz klikania",
    hint: "Kliknij 30 razy",
    description: "30 kliknięć na stronie",
    rarity: "silver",
  },
  {
    id: "fireworks",
    icon: "💥",
    title: "Fajerwerki",
    hint: "Kliknij 100 razy",
    description: "100 kliknięć na stronie",
    rarity: "gold",
  },
  {
    id: "panel",
    icon: "🏆",
    title: "Kolekcjoner",
    hint: "Otwórz listę trofeów",
    description: "Otworzyłeś listę trofeów",
    rarity: "bronze",
  },
  {
    id: "live",
    icon: "🌐",
    title: "Ciekawski",
    hint: "Kliknij „Live project”",
    description: "Otworzyłeś projekt na żywo",
    rarity: "silver",
  },
  {
    id: "recruiter",
    icon: "🗂️",
    title: "Rekruter",
    hint: "Otwórz 3 różne projekty na żywo",
    description: "Otworzyłeś 3 różne projekty na żywo",
    rarity: "silver",
  },
  {
    id: "code",
    icon: "💻",
    title: "Hacker",
    hint: "Kliknij „Kod”",
    description: "Zajrzałeś do kodu projektu",
    rarity: "silver",
  },
  {
    id: "typing",
    icon: "⌨️",
    title: "Pierwsze słowa",
    hint: "Zacznij wypełniać formularz",
    description: "Zacząłeś pisać wiadomość",
    rarity: "silver",
  },
  {
    id: "time",
    icon: "⏳",
    title: "Cierpliwy",
    hint: "Zostań 45 sekund",
    description: "Spędziłeś 45 sekund na stronie",
    rarity: "silver",
  },
  {
    id: "coffee",
    icon: "☕",
    title: "Kawa",
    hint: "Zostań 2 minuty",
    description: "Spędziłeś 2 minuty na stronie",
    rarity: "gold",
  },
  {
    id: "mail",
    icon: "📬",
    title: "Kontakt nawiązany",
    hint: "Kliknij adres e-mail",
    description: "Kliknąłeś mój adres e-mail",
    rarity: "gold",
  },
  {
    id: "konami",
    icon: "🎯",
    title: "Cheat code",
    hint: "↑ ↑ ↓ ↓ ← → ← → B A",
    description: "Wpisałeś kod Konami",
    rarity: "gold",
  },
  {
    id: "bug",
    icon: "❌",
    title: "Bug hunter",
    hint: "Zgub się na nieistniejącej stronie",
    description: "Znalazłeś stronę 404",
    rarity: "error",
  },
  {
    id: "perfectionist",
    icon: "💎",
    title: "Perfekcjonista",
    hint: "Zdobądź wszystkie trofea",
    description: "Odblokowałeś wszystkie osiągnięcia",
    rarity: "platinum",
  },
];

export type AchievementId = (typeof achievementsList)[number]["id"];

export const achievementsById = Object.fromEntries(
  achievementsList.map((a) => [a.id, a]),
) as Record<AchievementId, Achievement>;

// Wygląd i punkty dla rang (pełne nazwy klas, żeby Tailwind je wykrył)
export const RARITY = {
  bronze: {
    label: "Brąz",
    xp: 10,
    color: "#CD7F32", // kolor toasta i paska czasu
    box: "bg-[#CD7F32]/10 border-[#CD7F32]",
    icon: "bg-[#CD7F32]",
    text: "text-[#CD7F32]",
    glow: "",
  },
  silver: {
    label: "Srebro",
    xp: 25,
    color: "#C9D1E6",
    box: "bg-[#C9D1E6]/5 border-[#C9D1E6]",
    icon: "bg-[#C9D1E6]",
    text: "text-[#C9D1E6]",
    glow: "",
  },
  gold: {
    label: "Złoto",
    xp: 50,
    color: "#FFD23F",
    box: "bg-[#FFD23F]/25 border-[#FFD23F]",
    icon: "bg-[#FFD23F]",
    text: "text-[#FFD23F]",
    glow: "shadow-[0_0_12px_rgba(255,210,63,0.25)]",
  },
  error: {
    label: "Error",
    xp: 50,
    color: "#FF4D4D",
    box: "bg-[#FF4D4D]/15 border-[#FF4D4D]",
    icon: "bg-[#FF4D4D]",
    text: "text-[#FF4D4D]",
    glow: "shadow-[0_0_12px_rgba(255,77,77,0.25)]",
  },
  platinum: {
    label: "Platyna",
    xp: 100,
    color: "#31D2F7",
    box: "bg-[#31D2F7]/40 border-[#31D2F7]",
    icon: "bg-linear-to-br from-[#E8FBFF] via-[#31D2F7] to-[#31D2F7]",
    text: "text-[#31D2F7]",
    glow: "ach-platinum", // pulsujący blask, patrz globals.css
  },
};

export const RANKS = [
  "Nowicjusz",
  "Odkrywca",
  "Łowca bugów",
  "Frontendowiec",
  "Mistrz pikseli",
  "Legenda",
  "Boss końcowy",
  "Mityczny dev",
  "Arcymistrz",
  "Fan PJ",
];
export const MAX_XP = achievementsList.reduce(
  (sum, a) => sum + RARITY[a.rarity].xp,
  0,
);

export const getXp = (ids: AchievementId[]) =>
  ids.reduce((sum, id) => sum + RARITY[achievementsById[id].rarity].xp, 0);

// Poziomy rozłożone równomiernie: ostatni poziom dopiero przy MAX_XP
// (czyli po zdobyciu wszystkich osiągnięć). Samo mnożenie przed dzieleniem
// daje dokładny wynik bez błędów zaokrągleń.
export const getLevel = (xp: number) =>
  Math.min(RANKS.length, Math.floor((xp * (RANKS.length - 1)) / MAX_XP) + 1);

// Postęp (0–100%) w obrębie aktualnego poziomu
export const getLevelProgress = (xp: number) =>
  xp >= MAX_XP ? 100 : (((xp * (RANKS.length - 1)) / MAX_XP) % 1) * 100;
