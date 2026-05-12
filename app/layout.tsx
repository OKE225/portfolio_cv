import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  display: "swap",
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
