interface HeadingTextProps {
  children: React.ReactNode;
}

const HeadingText = ({ children }: HeadingTextProps) => {
  return (
    <h2 className="font-pixelify text-5xl font-bold text-white mb-2.5 capitalize max-sm:text-4xl max-lg:mb-0">{`<${children} />`}</h2>
  );
};

export default HeadingText;
