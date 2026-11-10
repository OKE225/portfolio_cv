import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import Container from "../UI/Container";
import { useTranslations } from "next-intl";

const AboutMeSection = () => {
  const t = useTranslations("AboutMe");

  const skills = [
    "responsive",
    "uiux",
    "cleanCode",
    "ai",
    "database",
    "components",
  ];

  return (
    <Container>
      <div
        className="flex flex-col justify-center scroll-mt-24 gap-8"
        id="about">
        <HeadingText>{t("title")}</HeadingText>

        <Description />

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {skills.map((skill) => (
            <SkillElement key={skill} title={t(`skillCards.${skill}.title`)}>
              {t(`skillCards.${skill}.text`)}
            </SkillElement>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
