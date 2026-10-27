interface SubHeadingTextProps {
  children: React.ReactNode;
}

const SubHeadingText = ({ children }: SubHeadingTextProps) => {
  return (
    <h2 className="text-4xl font-bold my-5 text-zinc-50 max-xl:text-3xl">{`<${children} />`}</h2>
  );
};

export default SubHeadingText;
