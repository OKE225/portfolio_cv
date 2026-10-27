interface HeadingTextProps {
  children: React.ReactNode;
}

const HeadingText = ({ children }: HeadingTextProps) => {
  return (
    <h1 className="text-5xl font-bold text-zinc-50 mb-5 max-xl:text-4xl">{`<${children} />`}</h1>
  );
};

export default HeadingText;
