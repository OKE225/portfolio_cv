import HeadingText from "../HeadingText";
import ProjectItem from "../Projects/ProjectItem";

const ProjectsSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="projects">
      <HeadingText>Moje Projekty</HeadingText>

      <div className="grid grid-cols-3 gap-1">
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
      </div>
    </div>
  );
};

export default ProjectsSection;
