interface ProgrammingLanguageItemProps {
  name: string;
  icon: string;
  color: string;
  titleHidden?: boolean;
}

const ProgrammingLanguageItem = ({
  name,
  icon,
  color,
  titleHidden,
}: ProgrammingLanguageItemProps) => {
  return (
    <div className={`${color} flex items-center flex-col text-sm rounded-none`}>
      <span className={`${icon} text-4xl`} data-testid="icon"></span>
      <span
        className={`text-xl max-xl:text-lg capitalize ${titleHidden && "hidden"}`}>
        {name}
      </span>
    </div>
  );
};

export default ProgrammingLanguageItem;
