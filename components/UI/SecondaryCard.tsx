const SecondaryCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} bg-[rgb(15,17,50)] w-full border border-[rgb(42,45,92)]`}>
      {/* py-5 px-6 */}
      {children}
    </div>
  );
};

export default SecondaryCard;
