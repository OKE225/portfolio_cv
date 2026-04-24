import Image from "next/image";
import ProgrammingLanguageItem from "../AboutMe/ProgrammingLanguageItem";
import SocialIcon from "../Hero/SocialIcon";
import Link from "next/link";

interface ProjectModalProps {
  onClose: () => void;
}

const technologiesList = [
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
    name: "Docker",
    icon: "icon-[fa7-brands--docker]",
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

const firstSixTechnologies = technologiesList.slice(0, 6);

const ProjectModal = ({ onClose }: ProjectModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-zinc-950/90" onClick={onClose}></div>
      <div className="relative z-49 bg-slate-950 p-5 w-xl shadow-lg">
        <div className="w-full aspect-video relative">
          <Image
            src="https://placehold.co/600x400.png"
            alt="placeholder"
            fill
            className="object-cover inset-0"
          />
        </div>
        <h3 className="text-3xl font-bold">Project Name</h3>
        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          est porro voluptates, vitae exercitationem optio voluptas omnis
          nesciunt assumenda accusantium.
        </p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-5">
          {firstSixTechnologies.map(({ name, icon }) => (
            <ProgrammingLanguageItem key={name} name={name} icon={icon} />
          ))}
        </div>
        <div className="flex mt-10 gap-2">
          <Link
            href=""
            className="text-rose-500 font-bold text-3xl px-5 py-2 shadow-[inset_0_0_0_3px] shadow-rose-500 max-xl:text-2xl">
            Live Project
          </Link>
          <div className="flex-shrink-0">
            <SocialIcon
              icon="icon-[mdi--github]"
              link="https://github.com/OKE225"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
