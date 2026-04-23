import HeadingText from "../HeadingText";

const ContactSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="contact">
      <HeadingText>Kontakt</HeadingText>

      <form className="w-120">
        <label htmlFor="name" className="label-text inline-block text-lg">
          Wpisz swoje imię
        </label>
        <input type="text" className="input border" name="name" id="name" />

        <label htmlFor="email" className="label-text inline-block text-lg mt-2">
          Wpisz swój email
        </label>
        <input type="email" className="input border" name="email" id="email" />

        <label
          htmlFor="message"
          className="label-text inline-block text-lg mt-2">
          Wiadomość
        </label>
        <textarea
          name="message"
          id="message"
          className="textarea border"
          rows={8}></textarea>

        <button
          type="submit"
          className="bg-rose-500 text-zinc-50 font-bold text-xl px-5 py-2 mr-5 max-xl:text-2xl">
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
