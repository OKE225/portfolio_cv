"use client";

import { useEffect, useRef } from "react";
import type { ContributionDay } from "@/lib/github";

const MONTHS = [
  "Sty",
  "Lut",
  "Mar",
  "Kwi",
  "Maj",
  "Cze",
  "Lip",
  "Sie",
  "Wrz",
  "Paź",
  "Lis",
  "Gru",
];

const LEVEL_CLASS: Record<number, string> = {
  0: "bg-white/5",
  1: "bg-rose-500/30",
  2: "bg-rose-500/55",
  3: "bg-rose-500/80",
  4: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]",
};

const monthOf = (date: string) => Number(date.slice(5, 7)) - 1;

const ContributionGraph = ({ weeks }: { weeks: ContributionDay[][] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToEnd = () => {
      const element = scrollRef.current;

      if (element) {
        element.scrollLeft = element.scrollWidth;
      }
    };

    scrollToEnd();

    window.addEventListener("resize", scrollToEnd);

    return () => {
      window.removeEventListener("resize", scrollToEnd);
    };
  }, [weeks]);

  const validWeeks = weeks.filter((week) => week.length > 0);

  // Każdy tydzień ma 7 miejsc, od niedzieli do soboty.
  const padded: (ContributionDay | null)[][] = validWeeks.map((week) => {
    const days: (ContributionDay | null)[] = Array(7).fill(null);

    for (const day of week) {
      const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
      days[weekday] = day;
    }

    return days;
  });

  const labels = validWeeks.map((week, index) => {
    const month = monthOf(week[0].date);

    const previousMonth =
      index > 0 ? monthOf(validWeeks[index - 1][0].date) : -1;

    return month !== previousMonth ? MONTHS[month] : "";
  });

  return (
    <div className="w-full min-w-0">
      <div
        ref={scrollRef}
        role="region"
        aria-label="Kalendarz aktywności na GitHubie"
        tabIndex={0}
        className="mb-4 w-full overflow-x-auto pb-3 focus-visible:outline-2 focus-visible:outline-rose-500">
        <div className="w-max pr-4 pt-1">
          {/* Miesiące */}
          <div className="mb-2 flex gap-1.5 text-xs max-lg:gap-1">
            {labels.map((label, index) => (
              <div
                key={index}
                className="relative h-4 w-5 shrink-0 max-lg:w-4.5">
                <span className="absolute left-0 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Siatka aktywności */}
          <div className="grid auto-cols-[20px] grid-flow-col grid-rows-7 gap-1.5 max-lg:auto-cols-[18px] max-lg:gap-1">
            {padded
              .flat()
              .map((day, index) =>
                day ? (
                  <div
                    key={day.date}
                    title={`${day.count} contributions, ${day.date}`}
                    className={`h-5 w-5 max-lg:h-4.5 max-lg:w-4.5 ${LEVEL_CLASS[day.level]}`}
                  />
                ) : (
                  <div
                    key={`empty-${index}`}
                    aria-hidden="true"
                    className="h-5 w-5 max-lg:h-4.5 max-lg:w-4.5"
                  />
                ),
              )}
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="flex flex-wrap items-center justify-end gap-1.5 text-xs">
        <span className="mr-1">Mniej</span>

        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-4 w-4 shrink-0 ${LEVEL_CLASS[level]}`}
          />
        ))}

        <span className="ml-1">Więcej</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
