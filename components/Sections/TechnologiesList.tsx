import { useTranslations } from "next-intl";
import SkillsSetCard from "../AboutMe/SkillsSetCard";
import HeadingText from "../HeadingText";
import Container from "../UI/Container";

const TechnologiesList = () => {
  const t = useTranslations("Technologies");

  return (
    <Container className="gap-8">
      <HeadingText>{t("title")}</HeadingText>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 max-lg:gap-10">
        <SkillsSetCard
          title="Frontend"
          techList={[
            "Next.js",
            "React",
            "React Native",
            "TypeScript",
            "JavaScript",
            "Three.js",
            "Git",
            "TailwindCSS",
            "Material UI",
            "Jest",
            "Sass",
            "Bootstrap",
            "CSS",
            "HTML",
          ]}
        />
        <SkillsSetCard
          title="Backend"
          techList={[
            "Supabase",
            "PostgreSQL",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PHP",
            "MySQL",
            "Docker",
          ]}
        />
      </div>
    </Container>
  );
};

export default TechnologiesList;
