interface Props {
  name: string;
}

const ProgrammingLanguageItem = ({ name }: Props) => {
  return (
    <div className="flex items-center bg-[rgb(18,20,58)] border border-[rgb(42,45,92)] py-2 px-3.5 gap-2 rounded-none">
      <span className="w-2 aspect-square bg-rose-500"></span>
      <p className="text-white">{name}</p>
    </div>
  );
};

export default ProgrammingLanguageItem;
