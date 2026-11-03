import Link from "next/link";

interface ButtonVariantProps {
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const ButtonVariant = ({
  children,
  variant,
  className,
  href,
}: ButtonVariantProps) => {
  let btnClass = "";

  if (variant === "primary") {
    btnClass = `bg-rose-500 text-[rgb(10,11,38)]`;
  } else if (variant === "secondary") {
    btnClass = `text-rose-500`;
  }

  return (
    <Link
      href={href ? href : "#"}
      className={`${className} font-bold min-h-11 py-3 px-7 border-2 border-rose-500 hover:scale-98 transition max-md:text-lg max-lg:w-full mx-1 ${btnClass}`}>
      {children}
    </Link>
  );
};

export default ButtonVariant;
