import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import PixelClickBurst from "@/components/PixelClickBurst";
import { Analytics } from "@vercel/analytics/next";
import AchievementsProvider from "@/AchievementsProvider";

const pixelifySans = localFont({
  src: [
    { path: "./fonts/PixelifySans-Regular.ttf", weight: "400" },
    { path: "./fonts/PixelifySans-Medium.ttf", weight: "500" },
    { path: "./fonts/PixelifySans-SemiBold.ttf", weight: "600" },
    { path: "./fonts/PixelifySans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-pixelify-sans",
  fallback: ["monospace"],
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono[wght].ttf",
  variable: "--font-jetbrains-mono",
  fallback: ["monospace"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patryk Jastrzębowski - Portfolio",
  description:
    "Buduję strony i aplikacje, które są wygodne w obsłudze, dopasowane do każdego ekranu i łatwe w dalszym rozwoju. Pracuję w Next.js, React i TypeScript, dbając o komponenty wielokrotnego użytku, bazy danych oraz bezpieczny dostęp użytkowników. AI wykorzystuję jako wsparcie w codziennej pracy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${jetbrainsMono.variable} ${pixelifySans.className} ${jetbrainsMono.className} h-full antialiased bg-[#0A0B26] overflow-x-hidden scroll-smooth selection:text-cyan-400 selection:bg-sky-700/25`}>
      <body className="min-h-full text-[rgb(185,190,220)]">
        <AchievementsProvider>
          <div className="relative h-screen w-full bg-[linear-gradient(rgba(255,31,90,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,31,90,0.08)_2px,transparent_2px)] bg-size-[50px_50px] bg-repeat bg-center animate-move-diagonal bg-[#0A0B26]">
            <span className="from-[#0A0B26] to-transparent to-40% bg-linear-0 w-full h-screen absolute top-0 pointer-events-none"></span>

            {children}

            <PixelClickBurst />
          </div>
        </AchievementsProvider>

        <Analytics />
      </body>
    </html>
  );
}
