import HeadingText from "../HeadingText";
import ProjectItem from "../Projects/ProjectItem";

const ProjectsSection = () => {
  return (
    <div className="h-screen m-10" id="projects">
      <HeadingText>Moje Projekty</HeadingText>

      <div className="grid grid-cols-3 gap-5">
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
