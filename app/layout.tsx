import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pixelifySans = localFont({
  src: [
    { path: "./fonts/PixelifySans-Regular.ttf", weight: "400" },
    { path: "./fonts/PixelifySans-Medium.ttf", weight: "500" },
    { path: "./fonts/PixelifySans-SemiBold.ttf", weight: "600" },
    { path: "./fonts/PixelifySans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-pixelify-sans",
});

export const metadata: Metadata = {
  title: "Patryk Jastrzębowski - Portfolio",
  description: "Moje portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${pixelifySans.className} h-full antialiased bg-slate-950 overflow-hidden scroll-smooth selection:text-cyan-400 selection:bg-sky-700/25`}>
      <body className="min-h-full">
        <div className="h-screen w-full bg-repeat bg-[url('/squares-pattern.svg')] bg-size-[675px_675px] bg-center animate-move-diagonal bg-slate-950">
          <span className="from-slate-950 bg-linear-0 w-full h-screen absolute top-0"></span>

          {children}
        </div>
      </body>
    </html>
  );
}
