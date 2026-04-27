import ProgrammingLanguageItem from "./ProgrammingLanguageItem";

interface SkillsSetCardProps {
  title: string;
  techList: {
    name: string;
    icon: string;
  }[];
}

const SkillsSetCard = ({ techList, title }: SkillsSetCardProps) => {
  return (
    <div className="card bg-slate-900 overflow-hidden intersect-once intersect:motion-preset-focus intersect:motion-delay-1500">
      <div className="card-body">
        <h3 className="card-title text-3xl font-bold capitalize text-zinc-50">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {techList.map((tech) => (
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

export default SkillsSetCard;
