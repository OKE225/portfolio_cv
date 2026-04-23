interface SubHeadingTextProps {
  children: React.ReactNode;
}

const SubHeadingText = ({ children }: SubHeadingTextProps) => {
  return (
    <h1 className="text-4xl font-bold mt-25 text-zinc-50">{`<${children} />`}</h1>
  );
};

export default SubHeadingText;
