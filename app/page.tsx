import Navbar from "@/components/Navbar/Navbar";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Sections/Footer";
import GithubStatistics from "@/components/Sections/GithubStatistics";
import HeroSection from "@/components/Sections/HeroSection";
import MyValueForTeam from "@/components/Sections/MyValueForTeam";
import ProjectCaseStudy from "@/components/Sections/ProjectCaseStudy";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import TechnologiesList from "@/components/Sections/TechnologiesList";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-50 max-lg:gap-35 max-md:gap-30">
        <HeroSection />
        <AboutMeSection />
        <TechnologiesList />
        <GithubStatistics />
        <ProjectsSection />
        <ProjectCaseStudy />
        <span>
          <MyValueForTeam />
          <ContactSection />
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Page;
