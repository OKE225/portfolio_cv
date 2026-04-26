import CTA from "../Hero/CTA";
import Profession from "../Hero/Profession";
import ShortDescription from "../Hero/ShortDescription";
import SocialIcon from "../Hero/SocialIcon";
import WelcomeText from "../Hero/WelcomeText";

const HeroSection = () => {
  return (
    <>
      <div
        className="flex relative items-center flex-col justify-center h-screen z-20"
        id="home">
        <WelcomeText />
        <Profession />
        <ShortDescription />

        <div className="mt-20 flex max-lg:flex-col max-md:w-full">
          <CTA />
          <div className="flex justify-center items-center gap-2 ml-10 max-lg:ml-0 max-lg:mt-3">
            <SocialIcon
              icon="icon-[pixel--github]"
              link="https://github.com/OKE225"
            />
            <SocialIcon
              icon="icon-[pixel--linkedin]"
              link="https://www.linkedin.com/in/patryk-jastrz%C4%99bowski"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
