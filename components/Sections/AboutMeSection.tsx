import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import SubHeadingText from "../SubHeadingText";
import ProgrammingLanguageItem from "../AboutMe/ProgrammingLanguageItem";

const frontendList = [
  {
    name: "NextJS",
    icon: "icon-[akar-icons--nextjs-fill]",
  },
  {
    name: "React",
    icon: "icon-[akar-icons--react-fill]",
  },
  {
    name: "TypeScript",
    icon: "icon-[akar-icons--typescript-fill]",
  },
  {
    name: "JavaScript",
    icon: "icon-[akar-icons--javascript-fill]",
  },
  {
    name: "GIT",
    icon: "icon-[bi--git]",
  },
  {
    name: "TailwindCSS",
    icon: "icon-[teenyicons--tailwind-solid]",
  },
  {
    name: "MaterialUI",
    icon: "icon-[devicon-plain--materialui]",
  },
  {
    name: "JEST",
    icon: "icon-[devicon-plain--jest]",
  },
  {
    name: "Sass",
    icon: "icon-[akar-icons--sass-fill]",
  },
  {
    name: "CSS",
    icon: "icon-[devicon-plain--css3]",
  },
  {
    name: "HTML",
    icon: "icon-[devicon-plain--html5]",
  },
];
const backendList = [
  {
    name: "NodeJS",
    icon: "icon-[akar-icons--node-fill]",
  },
  {
    name: "ExpressJS",
    icon: "icon-[simple-icons--express]",
  },
  {
    name: "PHP",
    icon: "icon-[akar-icons--php-fill]",
  },
  {
    name: "MongoDB",
    icon: "icon-[simple-icons--mongodb]",
  },
  {
    name: "MySQL",
    icon: "icon-[fontisto--mysql]",
  },

  {
    name: "Docker",
    icon: "icon-[fa7-brands--docker]",
  },
];

const AboutMeSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="about">
      <HeadingText>O Mnie</HeadingText>

      <Description />

      <div className="grid grid-cols-3 gap-1 mt-10 ">
        <SkillElement></SkillElement>
        <SkillElement></SkillElement>
        <SkillElement></SkillElement>
      </div>

      <SubHeadingText>Skills & Technologies</SubHeadingText>
      <div className="flex justify-around">
        <div>
          <h3>Frontend</h3>
          {frontendList.map((tech) => (
            <ProgrammingLanguageItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
        <div>
          <h3>Backend</h3>
          {backendList.map((tech) => (
            <ProgrammingLanguageItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
