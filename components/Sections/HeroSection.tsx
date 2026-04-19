import CTA from "../Hero/CTA";
import Profession from "../Hero/Profession";
import ShortDescription from "../Hero/ShortDescription";
import SocialIcon from "../Hero/SocialIcon";
import WelcomeText from "../Hero/WelcomeText";

const HeroSection = () => {
  return (
    <div
      className="min-h-screen w-full bg-repeat bg-[url('/squares-pattern.svg')] bg-size-[675px_675px] bg-center animate-move-diagonal"
      id="home">
      <div className="flex relative items-center flex-col justify-center h-screen z-20">
        <WelcomeText />
        <Profession />
        <ShortDescription />

        <div className="mt-15 flex">
          <CTA />
          <div className="flex ml-11 gap-2.5 max-lg:flex-col">
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
      <span className="from-slate-950 bg-linear-0 w-full h-[30%] absolute bottom-0 left-0 right-0"></span>
    </div>
  );
};

export default HeroSection;
