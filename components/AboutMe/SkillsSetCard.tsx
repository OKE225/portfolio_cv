import ProgrammingLanguageItem from "./ProgrammingLanguageItem";

interface SkillsSetCardProps {
  title: string;
  techList: string[];
}

const SkillsSetCard = ({ techList, title }: SkillsSetCardProps) => {
  return (
    <div className="flex flex-col gap-3.5" data-testid="technologyCard">
      <p className="font-pixelify text-[22px] font-semibold text-white">
        {title}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {techList.map((technology) => (
          <ProgrammingLanguageItem key={technology} name={technology} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSetCard;
