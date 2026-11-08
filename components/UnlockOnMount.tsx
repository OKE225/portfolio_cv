"use client";

import { useEffect } from "react";
import { useAchievements } from "@/AchievementsProvider";
import type { AchievementId } from "@/lib/achievements";

// Odblokowuje osiągnięcie od razu po wyrenderowaniu (np. na stronie 404).
export default function UnlockOnMount({ id }: { id: AchievementId }) {
  const { unlock } = useAchievements();

  useEffect(() => {
    unlock(id);
  }, [id, unlock]);

  return null;
}
