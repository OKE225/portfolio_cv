import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`flex flex-col w-[95%] mx-auto max-w-7xl max-xl:w-[92.5%] max-lg:w-[90%] max-sm:w-[92.5%] ${className}`}>
      {children}
    </section>
  );
};

export default Container;
