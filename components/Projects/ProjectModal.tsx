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
    colorClass: "bg-blue-600/10 border-blue-600 text-blue-600",
  },
  {
    name: "React",
    icon: "icon-[akar-icons--react-fill]",
    colorClass: "bg-cyan-500/10 border-cyan-500 text-cyan-500",
  },
  {
    name: "TypeScript",
    icon: "icon-[akar-icons--typescript-fill]",
    colorClass: "bg-blue-600/10 border-blue-600 text-blue-600",
  },
  {
    name: "JavaScript",
    icon: "icon-[akar-icons--javascript-fill]",
    colorClass: "bg-yellow-400/10 border-yellow-400 text-yellow-400",
  },
  {
    name: "NodeJS",
    icon: "icon-[akar-icons--node-fill]",
    colorClass: "bg-green-600/10 border-green-600 text-green-600",
  },
  {
    name: "ExpressJS",
    icon: "icon-[simple-icons--express]",
    colorClass: "bg-amber-400/10 border-amber-400 text-amber-400",
  },
  {
    name: "PHP",
    icon: "icon-[akar-icons--php-fill]",
    colorClass: "bg-purple-500/10 border-purple-500 text-purple-500",
  },
  {
    name: "MongoDB",
    icon: "icon-[simple-icons--mongodb]",
    colorClass: "bg-green-500/10 border-green-500 text-green-500",
  },
  {
    name: "MySQL",
    icon: "icon-[fontisto--mysql]",
    colorClass: "bg-blue-500/10 border-blue-500 text-blue-500",
  },
  {
    name: "GIT",
    icon: "icon-[bi--git]",
    colorClass: "bg-orange-500/10 border-orange-500 text-orange-500",
  },
  {
    name: "TailwindCSS",
    icon: "icon-[teenyicons--tailwind-solid]",
    colorClass: "bg-sky-500/10 border-sky-500 text-sky-500",
  },
  {
    name: "MaterialUI",
    icon: "icon-[devicon-plain--materialui]",
    colorClass: "bg-blue-400/10 border-blue-400 text-blue-400",
  },
  {
    name: "Docker",
    icon: "icon-[fa7-brands--docker]",
    colorClass: "bg-sky-500/10 border-sky-500 text-sky-500",
  },
  {
    name: "JEST",
    icon: "icon-[devicon-plain--jest]",
    colorClass: "bg-rose-500/10 border-rose-500 text-rose-500",
  },
  {
    name: "Sass",
    icon: "icon-[akar-icons--sass-fill]",
    colorClass: "bg-pink-400/10 border-pink-400 text-pink-400",
  },
  {
    name: "CSS",
    icon: "icon-[devicon-plain--css3]",
    colorClass: "bg-blue-500/10 border-blue-500 text-blue-500",
  },
  {
    name: "HTML",
    icon: "icon-[devicon-plain--html5]",
    colorClass: "bg-orange-500/10 border-orange-500 text-orange-500",
  },
];

const firstSixTechnologies = technologiesList.slice(0, 6);

const ProjectModal = ({ onClose }: ProjectModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-zinc-950/90" onClick={onClose}></div>
      <div className="relative z-50 bg-zinc-950 p-5 w-xl shadow-lg">
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
          {firstSixTechnologies.map(({ name, icon, colorClass }) => (
            <ProgrammingLanguageItem
              key={name}
              name={name}
              icon={icon}
              color={colorClass}
            />
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
