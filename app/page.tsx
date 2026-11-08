import AchievementsButton from "@/components/AchievementsButton";
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
import UnlockOnView from "@/components/UnlockOnView";

const Page = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-50 max-lg:gap-35 max-md:gap-30">
        <HeroSection />

        <UnlockOnView id="about">
          <AboutMeSection />
        </UnlockOnView>

        <UnlockOnView id="tech">
          <TechnologiesList />
        </UnlockOnView>

        <UnlockOnView id="github">
          <GithubStatistics />
        </UnlockOnView>

        <UnlockOnView id="projects">
          <ProjectsSection />
        </UnlockOnView>

        <UnlockOnView id="case">
          <ProjectCaseStudy />
        </UnlockOnView>

        <span>
          <UnlockOnView id="team">
            <MyValueForTeam />
          </UnlockOnView>

          <UnlockOnView id="contact">
            <ContactSection />
          </UnlockOnView>
        </span>
      </main>

      <AchievementsButton />

      <Footer />
    </>
  );
};

export default Page;
