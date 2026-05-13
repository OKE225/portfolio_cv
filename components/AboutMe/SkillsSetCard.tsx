import ProgrammingLanguageItem from "./ProgrammingLanguageItem";

interface SkillsSetCardProps {
  title: string;
  techList: {
    name: string;
    icon: string;
    color: string;
  }[];
}

const SkillsSetCard = ({ techList, title }: SkillsSetCardProps) => {
  return (
    <div
      className="overflow-hidden intersect-once intersect:motion-preset-focus intersect:motion-delay-1500"
      data-testid="technologyCard">
      <div>
        <h3 className="text-2xl font-bold capitalize text-zinc-50 mb-5">
          {title}
        </h3>
        <div className="flex flex-wrap gap-5">
          {techList.map((tech) => (
            <ProgrammingLanguageItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSetCard;
