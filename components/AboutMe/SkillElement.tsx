interface SkillElementProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

const SkillElement = ({ id, title, children }: SkillElementProps) => {
  return (
    <div
      className={`bg-rose-500/10 p-5 text-rose-500 first-of-type:bg-rose-500 first-of-type:text-zinc-50 first-of-type:shadow-rose-950 first-of-type:shadow-lg nth-[2]:bg-rose-500 nth-[2]:text-zinc-50 nth-[2]:shadow-rose-950 nth-[2]:shadow-lg intersect-once intersect:motion-preset-focus intersect:motion-delay-${id * 500 + 1500}`}>
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default SkillElement;
