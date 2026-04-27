"use client";

const CTA = () => {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={() => handleScroll("#contact")}
        className="bg-rose-500 text-zinc-50 font-bold text-xl max-md:text-lg max-lg:w-full px-5 py-2 mr-1 max-lg:mr-0 max-lg:mb-1 shadow-rose-950 shadow-md intersect:motion-preset-focus intersect:motion-delay-2000 intersect-once">
        Wyślij wiadomość
      </button>
      <button
        onClick={() => handleScroll("#projects")}
        className="text-rose-500 font-bold text-xl max-md:text-lg max-lg:w-full px-5 py-2 shadow-[inset_0_0_0_3px] shadow-rose-500 intersect:motion-preset-focus intersect:motion-delay-2500 intersect-once">
        Zobacz moje projekty
      </button>
    </>
  );
};

export default CTA;
