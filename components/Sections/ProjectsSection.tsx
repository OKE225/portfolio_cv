"use client";

import HeadingText from "../HeadingText";
import ProjectItem from "../Projects/ProjectItem";
import HighlightProjectCard from "../UI/HighlightProjectCard";
import Container from "../UI/Container";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("Projects");

  return (
    <div
      className="bg-[rgb(13,14,48)] flex flex-col justify-center py-24 border-y border-y-[rgb(42,45,92)]"
      id="projects">
      <Container>
        <HeadingText>{t("title")}</HeadingText>

        <HighlightProjectCard />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          <ProjectItem
            image="/projects/MindHealth.png"
            title="MindHealth"
            description={t("mindhealth.description")}
            techStack={[
              "React",
              "TypeScript",
              "JavaScript",
              "TailwindCSS",
              "Node.js",
              "Express.js",
            ]}
            liveUrl="https://mind-health-online.vercel.app/"
            repoUrl="https://github.com/OKE225/MindHealth"
          />

          <ProjectItem
            image="/projects/Travel-Dreams.gif"
            title="Travel Dreams"
            description={t("travelDreams.description")}
            techStack={[
              "React",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Supabase",
              "PostgreSQL",
            ]}
            repoUrl="https://github.com/OKE225/Travel_Dreams_mobile_app"
          />

          <ProjectItem
            image="/projects/Earth-3D.png"
            title="Earth 3D"
            description={t("earth3d.description")}
            techStack={[
              "React",
              "TypeScript",
              "JavaScript",
              "Three.js",
              "TailwindCSS",
            ]}
            liveUrl="https://oke225.github.io/earth-3d-website/"
            repoUrl="https://github.com/OKE225/earth-3d-website"
          />

          <ProjectItem
            image="/projects/myKindle.png"
            title="myKindle Highlights"
            description={t("kindle.description")}
            techStack={[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "TailwindCSS",
              "Supabase",
              "PostgreSQL",
              "Jest",
              "Docker",
            ]}
            liveUrl="https://my-kindle-highlights-app.vercel.app/"
            repoUrl="https://github.com/OKE225/myKindle_Highlights_app"
          />

          <ProjectItem
            image="/projects/Pinky-Promise.png"
            title="Pinky Promise"
            description={t("pinkyPromise.description")}
            techStack={["HTML", "CSS"]}
            liveUrl="https://pinky-promise-mk.vercel.app/"
          />

          <ProjectItem
            image="/projects/Flora.png"
            title="Flora"
            description={t("flora.description")}
            techStack={["React", "TypeScript", "Material UI", "Sass"]}
            liveUrl="https://oke225.github.io/Flora/"
            repoUrl="https://github.com/OKE225/Flora"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
