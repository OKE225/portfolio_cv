"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const next = locale === "pl" ? "en" : "pl";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      aria-label={locale === "pl" ? "Switch to English" : "Przełącz na polski"}
      className="font-pixelify border-2 border-[#2A2D5C] px-3 py-1 text-white transition-colors hover:border-rose-500 hover:text-rose-500">
      {next.toUpperCase()}
    </button>
  );
}
