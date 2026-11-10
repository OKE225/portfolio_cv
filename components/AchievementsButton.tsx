"use client";

import { useState } from "react";
import AchievementElement from "./AchievementElement";
import { useAchievements } from "@/AchievementsProvider";
import { achievementsList, getLevelProgress, RANKS } from "@/lib/achievements";

const AchievementsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { unlocked, xp, level, unlock } = useAchievements();

  // Postęp w obrębie aktualnego poziomu (0–100%)
  const progress = getLevelProgress(xp);

  const toggle = () => {
    if (!isOpen) unlock("panel");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        aria-expanded={isOpen}
        onClick={toggle}
        className="font-pixelify fixed bottom-3 left-3 z-999 flex cursor-pointer items-center gap-2 border-2 border-[rgb(42,45,92)] bg-[#0F1132] px-2.5 py-1.5 text-white shadow-[4px_4px_0_rgba(255,255,255,0.05)] transition-all duration-150 hover:-translate-y-0.5 hover:border-rose-500 hover:shadow-[4px_4px_0_rgba(255,31,90,.5)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:bottom-4 sm:left-4 sm:gap-3 sm:px-3">
        {/* key = przy każdym nowym osiągnięciu puchar "podskakuje" */}
        <span
          key={unlocked.length}
          className="animate-pop flex items-center justify-center text-xl sm:text-2xl">
          🏆
        </span>

        <span className="flex min-w-20 flex-col gap-1 text-left text-sm sm:min-w-25 sm:text-[15px]">
          {/* key = animacja przy awansie na wyższy poziom */}
          <strong key={level} className="animate-pop inline-block origin-left">
            LVL {level}
          </strong>
          <span className="block h-3 border-2 border-[#2A2D5C] bg-[#12143A]">
            <span
              className="block h-full bg-rose-500 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </span>
        </span>

        <span className="text-xs text-[#B9BEDC] sm:text-sm">
          {unlocked.length}/{achievementsList.length}
        </span>
      </button>

      {isOpen && (
        <div className="animate-panel-in fixed right-3 bottom-18 left-3 z-999 max-h-[70vh] origin-bottom-left overflow-y-auto border-2 border-[#2A2D5C] bg-[#0F1132] p-2 sm:right-auto sm:bottom-20 sm:left-4 sm:w-xl sm:max-w-[calc(100vw-2rem)]">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="font-pixelify text-[22px] text-rose-500">Trofea</p>
            <p className="text-[13px] text-[#B9BEDC]">
              LVL {level} · {RANKS[level - 1]} · {xp} XP
            </p>
          </div>

          <span className="mb-3.5 block h-4 border-2 border-[#2A2D5C] bg-[#12143A]">
            <span
              className="block h-full bg-rose-500 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </span>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {achievementsList.map((achievement, index) => (
              <AchievementElement
                key={achievement.id}
                achievement={achievement}
                unlocked={unlocked.includes(achievement.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementsButton;
