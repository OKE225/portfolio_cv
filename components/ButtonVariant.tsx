interface ButtonVariantProps {
  btnVariant: "primary" | "secondary";
  children: React.ReactNode;
  delay: number;
}

const ButtonVariant = ({ children, btnVariant, delay }: ButtonVariantProps) => {
  let btnClass = "";

  if (btnVariant === "primary") {
    btnClass = `block bg-rose-500 text-zinc-50 font-bold px-5 py-2 shadow-md shadow-rose-950 hover:bg-rose-600 hover:scale-98 transition intersect:motion-preset-focus intersect:motion-delay-${delay} intersect-once text-center`;
  } else if (btnVariant === "secondary") {
    btnClass = `block bg-transparent text-rose-500 font-bold px-5 py-2 shadow-[inset_0_0_0_3px] text-center shadow-rose-500 hover:scale-98 transition intersect:motion-preset-focus intersect:motion-delay-${delay} intersect-once`;
  }

  return <div className={btnClass}>{children}</div>;
};

export default ButtonVariant;
