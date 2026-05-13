"use client";

import ButtonVariant from "../ButtonVariant";

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
        className="text-xl max-md:text-lg max-lg:w-full mr-1 max-lg:mr-0 max-lg:mb-1">
        <ButtonVariant btnVariant="primary" delay={2000}>
          Wyślij wiadomość
        </ButtonVariant>
      </button>
      <button
        onClick={() => handleScroll("#projects")}
        className="text-xl max-md:text-lg max-lg:w-full">
        <ButtonVariant btnVariant="secondary" delay={2500}>
          Zobacz moje projekty
        </ButtonVariant>
      </button>
    </>
  );
};

export default CTA;
