"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useAchievements } from "@/AchievementsProvider";
import type { AchievementId } from "@/lib/achievements";

// Odblokowuje osiągnięcie, gdy sekcja pojawi się na ekranie.
// Dzieci mogą być komponentami serwerowymi.
export default function UnlockOnView({
  id,
  children,
}: {
  id: AchievementId;
  children: ReactNode;
}) {
  const { unlock } = useAchievements();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          unlock(id);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -25% 0px" }, // działa także dla bardzo wysokich sekcji
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id, unlock]);

  return <div ref={ref}>{children}</div>;
}
