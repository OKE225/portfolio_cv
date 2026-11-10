import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("Loading");

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0A0B26]">
      <div className="flex flex-col items-center gap-8">
        <div className="h-12 w-12 animate-[spin_2s_linear_infinite] rounded-full border-4 border-[rgb(42,45,92)] border-t-rose-500" />

        <p className="font-pixelify tracking-[0.2em] text-rose-500 uppercase">
          {t("title")}
        </p>
      </div>
    </div>
  );
}
