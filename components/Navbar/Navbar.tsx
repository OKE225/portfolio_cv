"use client";
import { useState, useEffect } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const sections = ["#home", "#about", "#projects", "#contact"];

    const updateActiveSection = () => {
      const windowHeight = window.innerHeight - 100;

      let topVisibleSection = "#home";
      let maxVisibleHeight = 0;

      for (const id of sections) {
        const el = document.querySelector(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        const visibleTop = Math.max(top, 0);
        const visibleBottom = Math.min(bottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          topVisibleSection = id;
        }
      }

      if (topVisibleSection !== activeSection) {
        setActiveSection(topVisibleSection);
      }
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <label className="swap fixed top-2 right-2 z-50 lg:hidden">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen((prev) => !prev)}
        />
        <span className="icon-[rivet-icons--close] swap-on w-8 h-8 bg-gray-500"></span>
        <span className="icon-[rivet-icons--menu] swap-off w-8 h-8 bg-gray-500"></span>
      </label>

      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-fit lg:block z-49 max-lg:top-0 max-lg:bg-slate-950 max-lg:w-full max-lg:h-full ${
          isOpen ? "block" : "hidden"
        }`}>
        <ul className="flex gap-1 flex-nowrap whitespace-nowrap text-xl max-lg:text-3xl max-lg:flex-col max-lg:mt-25 max-lg:mx-2 max-lg:gap-y-5">
          <NavbarItem
            href="#home"
            closeMenu={() => setIsOpen(false)}
            activeSection={activeSection}>
            {"<Home />"}
          </NavbarItem>
          <NavbarItem
            href="#about"
            closeMenu={() => setIsOpen(false)}
            activeSection={activeSection}>
            {"<O mnie />"}
          </NavbarItem>
          <NavbarItem
            href="#projects"
            closeMenu={() => setIsOpen(false)}
            activeSection={activeSection}>
            {"<Projekty />"}
          </NavbarItem>
          <NavbarItem
            href="#contact"
            closeMenu={() => setIsOpen(false)}
            activeSection={activeSection}>
            {"<Kontakt />"}
          </NavbarItem>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
