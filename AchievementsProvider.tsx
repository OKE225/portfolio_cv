"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  achievementsById,
  achievementsList,
  getLevel,
  getXp,
  RARITY,
  type Achievement,
  type AchievementId,
} from "@/lib/achievements";
import { useTranslations } from "next-intl";

type Toast = {
  key: number;
  icon: string;
  label: string; // mały podpis nad tytułem
  title: string;
  text: string;
  meta?: string; // np. "Złoto · +50 XP"
  rarity: Achievement["rarity"]; // decyduje o kolorze karty
};

type AchievementsContextValue = {
  unlocked: AchievementId[];
  xp: number;
  level: number;
  unlock: (id: AchievementId) => void;
};

const AchievementsContext = createContext<AchievementsContextValue | null>(
  null,
);

export function useAchievements() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) throw new Error("useAchievements wymaga <AchievementsProvider>");
  return ctx;
}

const KONAMI = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

const TOAST_MS = 3500; // po ilu ms toast znika (pasek czasu używa tej samej wartości)
const STORAGE_KEY = "pj-achievements-v1"; // zmień na -v2, żeby wyzerować zapisy u wszystkich

export default function AchievementsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [unlocked, setUnlocked] = useState<AchievementId[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const seen = useRef(new Set<AchievementId>()); // chroni przed duplikatami
  const toastKey = useRef(0);
  const t = useTranslations("Achievements");

  const showToast = useCallback((t: Omit<Toast, "key">) => {
    const key = toastKey.current++;
    setToasts((list) => [...list, { key, ...t }]);
    setTimeout(
      () => setToasts((list) => list.filter((x) => x.key !== key)),
      TOAST_MS,
    );
  }, []);

  // Odblokuj osiągnięcie: można wołać wiele razy, zadziała raz
  const unlock = useCallback(
    (id: AchievementId) => {
      if (!achievementsById[id] || seen.current.has(id)) return;

      const levelBefore = getLevel(getXp([...seen.current]));
      seen.current.add(id);
      const all = [...seen.current];
      setUnlocked(all);

      // Zapisz postęp w przeglądarce
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
      } catch {}

      const a = achievementsById[id];
      const r = RARITY[a.rarity];
      showToast({
        icon: a.icon,
        label: t("unlocked"),
        title: t(`items.${id}.title`),
        text: t(`items.${id}.description`),
        meta: `${t(`rarities.${a.rarity}`)} · +${r.xp} XP`,
        rarity: a.rarity,
      });

      const levelAfter = getLevel(getXp(all));
      if (levelAfter > levelBefore) {
        showToast({
          icon: "⭐",
          label: t("levelUp"),
          title: t("level", { level: levelAfter }),
          text: t(`ranks.${levelAfter - 1}`),
          rarity: "gold",
        });
      }
    },
    [showToast, t],
  );

  // Wczytaj zapisane osiągnięcia (bez toastów). Robimy to w useEffect, a nie
  // w useState, żeby serwer i przeglądarka wyrenderowały to samo (bez błędu hydracji).
  // Ten efekt musi być PRZED efektem z wyzwalaczami, żeby zapis wczytał się pierwszy.
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]",
      );
      if (!Array.isArray(saved)) return;
      const valid = saved.filter(
        (id): id is AchievementId =>
          typeof id === "string" && id in achievementsById,
      );
      valid.forEach((id) => seen.current.add(id));
      setUnlocked([...seen.current]);
    } catch {}
  }, []);

  // Perfekcjonista: gdy zdobyto wszystkie pozostałe
  useEffect(() => {
    if (
      unlocked.length === achievementsList.length - 1 &&
      !seen.current.has("perfectionist")
    ) {
      unlock("perfectionist");
    }
  }, [unlocked, unlock]);

  // Wyzwalacze globalne: czas, kliknięcia, scroll, pisanie, Konami
  useEffect(() => {
    let clicks = 0;
    const liveHrefs = new Set<string>(); // różne otwarte projekty live
    const onClick = (e: MouseEvent) => {
      clicks++;
      if (clicks >= 10) unlock("click10");
      if (clicks >= 30) unlock("click30");
      if (clicks >= 100) unlock("fireworks");

      // 3 różne projekty live
      const live = (e.target as Element).closest<HTMLAnchorElement>(
        '[data-achievement="live"]',
      );
      if (live?.href) {
        liveHrefs.add(live.href);
        if (liveHrefs.size >= 3) unlock("recruiter");
      }

      // Dowolny element z data-achievement="id" odblokowuje osiągnięcie po kliknięciu
      const el = (e.target as Element).closest<HTMLElement>(
        "[data-achievement]",
      );
      if (el?.dataset.achievement)
        unlock(el.dataset.achievement as AchievementId);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const progress = window.scrollY / max;
      if (progress >= 0.5) unlock("half");
      if (progress >= 0.98) unlock("end");
    };

    const onInput = (e: Event) => {
      if ((e.target as Element).matches("input, textarea")) unlock("typing");
    };

    let k = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      k = key === KONAMI[k] ? k + 1 : key === KONAMI[0] ? 1 : 0;
      if (k === KONAMI.length) {
        k = 0;
        unlock("konami");
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("input", onInput);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    const t1 = setTimeout(() => unlock("hi"), 2500);
    const t2 = setTimeout(() => unlock("time"), 45_000);
    const t3 = setTimeout(() => unlock("coffee"), 120_000);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("input", onInput);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [unlock]);

  const xp = getXp(unlocked);

  return (
    <AchievementsContext.Provider
      value={{ unlocked, xp, level: getLevel(xp), unlock }}>
      {children}

      {/* Na telefonie toasty są u góry, na większych ekranach w prawym dolnym rogu */}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed top-3 right-3 left-3 z-999 flex flex-col gap-2 sm:top-auto sm:right-4 sm:bottom-4 sm:left-auto sm:w-90">
        {toasts.map((t) => {
          const r = RARITY[t.rarity];

          return (
            <div
              key={t.key}
              // --rc = kolor rzadkości, --toast-ms = czas życia toasta (dla paska)
              style={
                {
                  "--rc": r.color,
                  "--toast-ms": `${TOAST_MS}ms`,
                } as CSSProperties
              }
              className="toast-card relative flex items-center gap-3 overflow-hidden border-2 border-(--rc) bg-[color-mix(in_srgb,var(--rc)_8%,#0F1132)] p-3 pb-4 shadow-[6px_6px_0_rgba(0,0,0,.5),0_0_24px_color-mix(in_srgb,var(--rc)_40%,transparent)]">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center text-2xl ${r.icon}`}>
                {t.icon}
              </div>

              <div className="min-w-0">
                <p className="text-[11px] tracking-widest text-(--rc) uppercase">
                  {t.label}
                </p>
                <p className="font-pixelify text-lg leading-tight text-white">
                  {t.title}
                </p>
                <p className="text-xs text-[#B9BEDC]">{t.text}</p>
                {t.meta && (
                  <p className="mt-1 text-[11px] tracking-[0.06em] text-(--rc) uppercase">
                    {t.meta}
                  </p>
                )}
              </div>

              {/* Pasek czasu: kurczy się do zera, gdy toast znika */}
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white/10" />
              <span className="toast-bar absolute bottom-0 left-0 h-1 bg-(--rc)" />
            </div>
          );
        })}
      </div>
    </AchievementsContext.Provider>
  );
}
