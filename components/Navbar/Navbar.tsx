"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Initials from "../UI/Initials";
import NavigationListItems from "../UI/NavigationListItems";
import CopyMyMail from "../UI/CopyMyMail";
import MobileNavigation from "./MobileNavigation";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navbarRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Podświetlanie aktywnej sekcji
  useEffect(() => {
    const sections = ["#home", "#about", "#projects", "#contact"];
    let frameId: number | null = null;

    const updateActiveSection = () => {
      const offset = (navbarRef.current?.offsetHeight ?? 80) + 512;

      let currentSection = "#home";

      for (const id of sections) {
        const element = document.querySelector(id);

        if (!element) continue;

        if (element.getBoundingClientRect().top <= offset) {
          currentSection = id;
        }
      }

      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom && document.querySelector("#contact")) {
        currentSection = "#contact";
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // Zamknięcie po kliknięciu poza nawigacją lub klawiszem Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navbarRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Reset menu po przejściu na desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(width < 64rem)");

    const handleBreakpointChange = () => {
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed inset-x-0 top-0 z-100 border-b border-[rgb(42,45,92)] bg-[rgb(10,11,38)]">
      <div className="flex items-center justify-between gap-6 px-6 py-3 max-lg:gap-4 max-sm:px-4">
        <div onClick={() => setIsOpen(false)}>
          <Initials />
        </div>

        {/* Nawigacja desktopowa */}
        <div className="max-lg:hidden">
          <NavigationListItems activeSection={activeSection} />
        </div>

        <div className="flex shrink-0 items-center gap-3 max-sm:gap-2">
          <LanguageSwitcher />

          <CopyMyMail />

          {/* Przycisk menu mobilnego */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="hidden h-11 w-11 shrink-0 cursor-pointer items-center justify-center border-2 border-rose-500 text-rose-500 transition-colors hover:bg-rose-500/10 max-lg:inline-flex max-lg:h-10 max-lg:w-10">
            {isOpen ? (
              <X size={18} className="pointer-events-none" />
            ) : (
              <Menu size={18} className="pointer-events-none" />
            )}
          </button>
        </div>
      </div>

      {/* Panel jest pozycjonowany pod paskiem i nie zmienia jego wysokości */}
      {isOpen && (
        <MobileNavigation activeSection={activeSection} setIsOpen={setIsOpen} />
      )}
    </nav>
  );
};

export default Navbar;
