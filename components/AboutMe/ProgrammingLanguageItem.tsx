interface ProgrammingLanguageItemProps {
  name: string;
  icon: string;
}

const ProgrammingLanguageItem = ({
  name,
  icon,
}: ProgrammingLanguageItemProps) => {
  return (
    <div className="badge badge-xl badge-outline border-0 bg-slate-800 flex items-center gap-2 px-2 py-1 text-sm rounded-none">
      <span className={`${icon} text-lg`}></span>
      <span className="text-xl max-xl:text-lg capitalize">{name}</span>
    </div>
  );
};

export default ProgrammingLanguageItem;
