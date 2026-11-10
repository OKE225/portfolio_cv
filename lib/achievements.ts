type Rarity = "bronze" | "silver" | "gold" | "error" | "platinum";

export type AchievementId =
  | "hi"
  | "about"
  | "nav"
  | "tech"
  | "github"
  | "projects"
  | "case"
  | "team"
  | "contact"
  | "half"
  | "end"
  | "click10"
  | "click30"
  | "fireworks"
  | "panel"
  | "live"
  | "recruiter"
  | "code"
  | "typing"
  | "time"
  | "coffee"
  | "mail"
  | "konami"
  | "bug"
  | "perfectionist";

export interface Achievement {
  id: AchievementId;
  icon: string;
  rarity: Rarity;
}

export const achievementsList: Achievement[] = [
  { id: "hi", icon: "👋", rarity: "bronze" },
  { id: "about", icon: "🧑", rarity: "bronze" },
  { id: "nav", icon: "🗺️", rarity: "bronze" },
  { id: "tech", icon: "⚙️", rarity: "bronze" },
  { id: "github", icon: "🌱", rarity: "bronze" },
  { id: "projects", icon: "🚀", rarity: "silver" },
  { id: "case", icon: "🔍", rarity: "silver" },
  { id: "team", icon: "🤝", rarity: "silver" },
  { id: "contact", icon: "✉️", rarity: "silver" },
  { id: "half", icon: "🧭", rarity: "bronze" },
  { id: "end", icon: "🏁", rarity: "silver" },
  { id: "click10", icon: "👆", rarity: "bronze" },
  { id: "click30", icon: "🥊", rarity: "silver" },
  { id: "fireworks", icon: "💥", rarity: "gold" },
  { id: "panel", icon: "🏆", rarity: "bronze" },
  { id: "live", icon: "🌐", rarity: "silver" },
  { id: "recruiter", icon: "🗂️", rarity: "silver" },
  { id: "code", icon: "💻", rarity: "silver" },
  { id: "typing", icon: "⌨️", rarity: "silver" },
  { id: "time", icon: "⏳", rarity: "silver" },
  { id: "coffee", icon: "☕", rarity: "gold" },
  { id: "mail", icon: "📬", rarity: "gold" },
  { id: "konami", icon: "🎯", rarity: "gold" },
  { id: "bug", icon: "❌", rarity: "error" },
  { id: "perfectionist", icon: "💎", rarity: "platinum" },
];

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
