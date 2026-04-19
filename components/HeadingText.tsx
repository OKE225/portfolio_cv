interface HeadingTextProps {
  children: React.ReactNode;
}

const HeadingText = ({ children }: HeadingTextProps) => {
  return <h1 className="text-5xl font-bold text-zinc-50">{children}</h1>;
};

export default HeadingText;
