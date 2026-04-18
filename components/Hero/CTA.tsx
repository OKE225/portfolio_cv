import Link from "next/link";

const CTA = () => {
  return (
    <>
      <Link
        href="#projects"
        className="bg-rose-500 text-zinc-50 font-bold text-3xl px-5 py-2 mr-5 max-xl:text-2xl">
        Moje Prace
      </Link>
      <Link
        href="#contact"
        className="text-rose-500 font-bold text-3xl px-5 py-2 shadow-[inset_0_0_0_3px] shadow-rose-500 max-xl:text-2xl">
        Get in Touch
      </Link>
    </>
  );
};

export default CTA;
