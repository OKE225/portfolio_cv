interface ProgrammingLanguageItemProps {
  name: string;
  icon: string;
}

const ProgrammingLanguageItem = ({
  name,
  icon,
}: ProgrammingLanguageItemProps) => {
  return (
    <div className="badge badge-xl badge-outline text-gray-400 border-gray-400 flex items-center px-2 py-1 text-sm rounded-none">
      <span className={`${icon} text-lg`}></span>
      <span className=" text-2xl">{name}</span>
    </div>
  );
};

export default ProgrammingLanguageItem;
