"use client";
import { useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-fit lg:block z-49 max-lg:top-0 max-lg:bg-slate-950 max-lg:w-full max-lg:h-full ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex gap-1 flex-nowrap whitespace-nowrap text-xl max-lg:text-3xl max-lg:flex-col max-lg:mt-25 max-lg:mx-2 max-lg:gap-y-5">
          <NavbarItem href="#home" closeMenu={() => setIsOpen(false)}>
            {"<Home />"}
          </NavbarItem>
          <NavbarItem href="#about" closeMenu={() => setIsOpen(false)}>
            {"<O mnie />"}
          </NavbarItem>
          <NavbarItem href="#projects" closeMenu={() => setIsOpen(false)}>
            {"<Projekty />"}
          </NavbarItem>
          <NavbarItem href="#contact" closeMenu={() => setIsOpen(false)}>
            {"<Kontakt />"}
          </NavbarItem>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
