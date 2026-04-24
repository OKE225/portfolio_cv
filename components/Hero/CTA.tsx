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
        onClick={() => handleScroll("#projects")}
        className="bg-rose-500 text-zinc-50 font-bold text-3xl px-5 py-2 mr-1 max-xl:text-2xl shadow-rose-950 shadow-lg">
        Zobacz moje projekty
      </button>
      <button
        onClick={() => handleScroll("#contact")}
        className="text-rose-500 font-bold text-3xl px-5 py-2 shadow-[inset_0_0_0_3px] shadow-rose-500 max-xl:text-2xl">
        Wyślij wiadomość
      </button>
    </>
  );
};

export default CTA;
