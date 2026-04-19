import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import SubHeadingText from "../SubHeadingText";
import ProgrammingLanguagesList from "../AboutMe/ProgrammingLanguagesList";

const AboutMeSection = () => {
  return (
    <div className="h-screen m-10" id="about">
      <HeadingText>O mnie</HeadingText>

      <Description />

      <div className="grid grid-cols-3 gap-2 mt-10">
        <SkillElement></SkillElement>
        <SkillElement></SkillElement>
        <SkillElement></SkillElement>
      </div>

      <SubHeadingText>Skills & Technologies</SubHeadingText>
      <ProgrammingLanguagesList />
    </div>
  );
};

export default AboutMeSection;
