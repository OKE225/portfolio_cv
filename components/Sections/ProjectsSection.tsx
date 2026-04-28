"use client";

import { useState } from "react";
import HeadingText from "../HeadingText";
import ProjectItem from "../Projects/ProjectItem";
import { Project, projects } from "@/lib/portfolioData";

const ProjectsSection = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const visibleProjects = isShowMore ? projects : projects.slice(0, 2);

  const createProjectCards = (array: Project[]) => {
    return array.map(
      ({
        id,
        image,
        title,
        description,
        techStack,
        liveUrl,
        repoUrl,
      }: Project) => (
        <ProjectItem
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          techStack={techStack}
          liveUrl={liveUrl}
          repoUrl={repoUrl}
        />
      ),
    );
  };

  return (
    <div
      className="flex flex-col justify-center pt-30 max-2xl:pt-20 max-lg:pt-10"
      id="projects">
      <HeadingText>Moje Projekty</HeadingText>

      <div className="grid grid-cols-3 gap-1 max-lg:hidden">
        {createProjectCards(projects)}
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-1 lg:hidden">
        {createProjectCards(visibleProjects)}
      </div>
      {!isShowMore && (
        <button
          className="lg:hidden bg-rose-500 text-zinc-50 shadow-rose-950 shadow-md hover:bg-rose-600 hover:shadow-lg hover:scale-98 transition font-bold px-5 py-2 mt-1 w-fit mx-auto max-lg:w-full intersect-once intersect:motion-preset-focus intersect:motion-delay-2000"
          onClick={() => setIsShowMore(true)}>
          Pokaż więcej
        </button>
      )}
    </div>
  );
};

export default ProjectsSection;
