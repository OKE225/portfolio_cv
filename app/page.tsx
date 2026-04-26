import AboutMeSection from "@/components/Sections/AboutMeSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Sections/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";

const Page = () => {
  return (
    <>
      <div className="max-w-6xl max-xl:max-w-4xl max-lg:w-[90%] m-auto flex flex-col gap-80 max-2xl:gap-0">
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
