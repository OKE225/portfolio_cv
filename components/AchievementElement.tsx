import { RARITY, type Achievement } from "@/lib/achievements";
import { useTranslations } from "next-intl";

const AchievementElement = ({
  achievement,
  unlocked,
  index = 0,
}: {
  achievement: Achievement;
  unlocked: boolean;
  index?: number;
}) => {
  const t = useTranslations("Achievements");
  const r = RARITY[achievement.rarity];

  return (
    <div
      style={{ animationDelay: `${Math.min(index, 12) * 25}ms` }}
      className={`animate-item-in flex min-w-0 items-start gap-3 border-2 p-2.5 text-[13px] transition-transform duration-150 ${
        unlocked
          ? `${r.box} ${r.glow}`
          : "border-dashed border-[#2A2D5C] opacity-60"
      }`}>
      <div
        className={`flex h-10 min-h-10 w-10 min-w-10 items-center justify-center text-[22px] ${
          unlocked ? r.icon : "bg-[#12143A]"
        }`}>
        {unlocked ? achievement.icon : "🔒"}
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <strong className="text-white wrap-break-word">
          {unlocked ? t(`items.${achievement.id}.title`) : "???"}
        </strong>

        <p className="text-xs text-[#B9BEDC] wrap-break-word">
          {unlocked
            ? t(`items.${achievement.id}.description`)
            : t(`items.${achievement.id}.hint`)}
        </p>

        <p
          className={`text-[11px] tracking-[0.06em] uppercase ${
            unlocked ? r.text : "text-[#B9BEDC]"
          }`}>
          {t(`rarities.${achievement.rarity}`)} · {r.xp} XP
        </p>
      </div>
    </div>
  );
};

export default AchievementElement;
