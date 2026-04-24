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

        <div className="mt-20 flex">
          <CTA />
          <div className="flex justify-center items-center gap-2 ml-15">
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
