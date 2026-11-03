interface SkillElementProps {
  title: string;
  children: React.ReactNode;
}

const SkillElement = ({ title, children }: SkillElementProps) => {
  return (
    <div
      className="bg-[rgb(15,17,50)] border-t-3 border-t-rose-500 border border-[rgb(42,45,92)] p-6"
      data-testid="skillElement">
      <h3 className="font-pixelify text-2xl text-rose-500 font-semibold mb-2.5">
        {title}
      </h3>
      <p className="text-[15px]">{children}</p>
    </div>
  );
};

export default SkillElement;
