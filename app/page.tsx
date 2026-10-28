"use client";

import Navbar from "@/components/Navbar/Navbar";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Sections/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto max-w-7xl max-xl:max-w-4xl max-lg:w-[90%]">
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
