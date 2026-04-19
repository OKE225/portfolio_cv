interface ProgrammingLanguageItemProps {
  name: string;
  icon: string;
  color: string;
}

const ProgrammingLanguageItem = ({
  name,
  icon,
  color,
}: ProgrammingLanguageItemProps) => {
  return (
    <div
      className={`badge badge-xl ${color}  flex items-center px-2 py-1 text-sm rounded-none`}>
      <span className={`${icon} text-lg`}></span>
      <span className=" text-2xl">{name}</span>
    </div>
  );
};

export default ProgrammingLanguageItem;
