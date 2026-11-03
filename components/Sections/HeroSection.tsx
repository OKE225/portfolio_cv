import Link from "next/link";
import CTA from "../Hero/CTA";
import Profession from "../Hero/Profession";
import ShortDescription from "../Hero/ShortDescription";
import WelcomeText from "../Hero/WelcomeText";
import { MoveUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="flex relative items-center flex-col justify-center h-screen z-20 max-lg:w-[90%] max-lg:mx-auto"
      id="home">
      <WelcomeText />
      <Profession />
      <ShortDescription />

      <div className="mt-20 flex max-lg:flex-col max-lg:w-full max-lg:gap-2.5 max-lg:mt-15">
        <CTA />
      </div>

      <div className="flex gap-6 mt-6 ">
        <Link
          href="mailto:patryk.jastrzebowski.dev@gmail.com"
          title="patryk.jastrzebowski.dev@gmail.com"
          className="flex items-center text-white text-[15px] gap-2">
          E-mail <MoveUpRight size={14} />
        </Link>
        <Link
          href="https://github.com/OKE225"
          className="flex items-center text-white text-[15px] gap-2">
          GitHub <MoveUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
