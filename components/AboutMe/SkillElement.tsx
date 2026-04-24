interface SkillElementProps {
  title: string;
  children: React.ReactNode;
}

const SkillElement = ({ title, children }: SkillElementProps) => {
  return (
    <div className="bg-rose-500/10 p-5 text-rose-500 first-of-type:bg-rose-500 first-of-type:text-zinc-50 first-of-type:shadow-rose-950 first-of-type:shadow-lg">
      <h3 className="text-3xl font-bold mb-5">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default SkillElement;
