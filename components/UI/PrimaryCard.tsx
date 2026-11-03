const PrimaryCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} bg-[rgb(15,17,50)] p-5 border border-[rgb(42,45,92)] border-t-3 border-t-rose-500`}>
      {children}
    </div>
  );
};

export default PrimaryCard;
