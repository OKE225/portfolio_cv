import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import PixelClickBurst from "@/components/PixelClickBurst";
import AchievementsProvider from "@/AchievementsProvider"; // dostosuj ścieżkę
import "../globals.css"; // globals.css zostaje w app/, stąd ../

// Fonty zostają w app/fonts, a layout jest teraz poziom niżej, stąd ../fonts
const pixelifySans = localFont({
  src: [
    { path: "../fonts/PixelifySans-Regular.ttf", weight: "400" },
    { path: "../fonts/PixelifySans-Medium.ttf", weight: "500" },
    { path: "../fonts/PixelifySans-SemiBold.ttf", weight: "600" },
    { path: "../fonts/PixelifySans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-pixelify-sans",
  fallback: ["monospace"],
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono[wght].ttf",
  variable: "--font-jetbrains-mono",
  fallback: ["monospace"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://pj-portfolio-cv.vercel.app"), // zmień, jeśli masz inną domenę
    title: "Patryk Jastrzębowski - Portfolio",
    description: t("description"),
    alternates: { languages: { pl: "/", en: "/en" } }, // hreflang dla Google
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale); // potrzebne do statycznego renderowania

  return (
    <html
      lang={locale}
      className={`${pixelifySans.variable} ${jetbrainsMono.variable} ${pixelifySans.className} ${jetbrainsMono.className} min-h-screen antialiased bg-[#0A0B26] overflow-x-hidden scroll-smooth selection:text-cyan-400 selection:bg-sky-700/25`}>
      <body className="min-h-screen text-[rgb(185,190,220)]">
        <NextIntlClientProvider>
          <AchievementsProvider>
            <div className="relative h-screen w-full bg-[linear-gradient(rgba(255,31,90,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,31,90,0.08)_2px,transparent_2px)] bg-size-[50px_50px] bg-repeat bg-center animate-move-diagonal bg-[#0A0B26]">
              <span className="from-[#0A0B26] to-transparent to-40% bg-linear-0 w-full h-screen absolute top-0 pointer-events-none"></span>

              {children}

              <PixelClickBurst />
            </div>
          </AchievementsProvider>
        </NextIntlClientProvider>

        <Analytics />
      </body>
    </html>
  );
}
