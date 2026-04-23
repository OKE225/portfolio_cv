import CTA from "../Hero/CTA";
import Profession from "../Hero/Profession";
import ShortDescription from "../Hero/ShortDescription";
import SocialIcon from "../Hero/SocialIcon";
import WelcomeText from "../Hero/WelcomeText";

const HeroSection = () => {
  return (
    <>
      <div
        className="flex relative items-center flex-col justify-center min-h-screen z-20"
        id="home">
        <WelcomeText />
        <Profession />
        <ShortDescription />

        <div className="mt-15 flex">
          <CTA />
          <div className="flex justify-center items-center ml-20">
            <SocialIcon
              icon="icon-[mdi--github]"
              link="https://github.com/OKE225"
            />
            <SocialIcon
              icon="icon-[mdi--linkedin]"
              link="https://www.linkedin.com/in/patryk-jastrz%C4%99bowski"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
