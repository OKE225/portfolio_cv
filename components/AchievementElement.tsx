import { RARITY, type Achievement } from "@/lib/achievements";

const AchievementElement = ({
  achievement,
  unlocked,
  index = 0,
}: {
  achievement: Achievement;
  unlocked: boolean;
  index?: number; // kolejność na liście, używana do opóźnienia animacji
}) => {
  const r = RARITY[achievement.rarity];

  return (
    <div
      // Kolejne kafelki pojawiają się z lekkim opóźnieniem
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
          {unlocked ? achievement.title : "???"}
        </strong>
        <p className="text-xs text-[#B9BEDC] wrap-break-word">
          {unlocked ? achievement.description : achievement.hint}
        </p>
        <p
          className={`text-[11px] tracking-[0.06em] uppercase ${unlocked ? r.text : "text-[#B9BEDC]"}`}>
          {r.label} · {r.xp} XP
        </p>
      </div>
    </div>
  );
};

export default AchievementElement;
