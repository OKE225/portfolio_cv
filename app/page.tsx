"use client";

import Navbar from "@/components/Navbar/Navbar";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Sections/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

const Page = () => {
  useEffect(() => {
    Observer.start();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl max-xl:max-w-4xl max-lg:w-[90%] m-auto flex flex-col gap-80 max-2xl:gap-50">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Page;
