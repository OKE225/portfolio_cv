import ProgrammingLanguageItem from "./ProgrammingLanguageItem";

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

const ProgrammingLanguagesList = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {technologiesList.map(({ name, icon, colorClass }) => (
        <ProgrammingLanguageItem
          key={name}
          name={name}
          icon={icon}
          color={colorClass}
        />
      ))}
    </div>
  );
};

export default ProgrammingLanguagesList;
