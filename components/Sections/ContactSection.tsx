"use client";

import HeadingText from "../HeadingText";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    setSuccess(null);
    setError(null);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) setSuccess("Wysłano!");
    else setError(data.error || "Błąd");
  };

  return (
    <div
      className="flex flex-col justify-center pb-40 pt-30 max-2xl:pt-20 max-2xl:pb-30 max-lg:pb-20 max-lg:pt-10"
      id="contact">
      <HeadingText>Napisz Do Mnie</HeadingText>

      <div className="flex gap-10 max-lg:flex-col-reverse">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="intersect:motion-preset-blur-right intersect:motion-delay-1000 intersect-once">
            <label htmlFor="name" className="label-text inline-block text-lg ">
              Wpisz swoje imię <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              className="input border-2 text-lg border-slate-900 bg-slate-950 focus:border-zinc-400! focus-within:shadow-none hover:border-zinc-500! focus:shadow-slate-900 focus:shadow-md focus-within:outline-zinc-400!"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              name="name"
              id="name"
              placeholder="Imię"
            />
          </div>

          <div className="intersect:motion-preset-blur-right intersect:motion-delay-1500 intersect-once">
            <label
              htmlFor="email"
              className="label-text inline-block text-lg mt-2 ">
              Wpisz swój email <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              className="input border-2 text-lg border-slate-900 bg-slate-950 focus:border-zinc-400! focus-within:shadow-none hover:border-zinc-500! focus:shadow-slate-900 focus:shadow-md focus-within:outline-zinc-400!"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value.toLowerCase(),
                })
              }
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="intersect:motion-preset-blur-right intersect:motion-delay-2000 intersect-once">
            <label
              htmlFor="message"
              className="label-text inline-block text-lg mt-2">
              Wiadomość <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="textarea border-2 text-lg border-slate-900 bg-slate-950 focus:border-zinc-400! focus-within:shadow-none hover:border-zinc-500! focus:shadow-slate-900 focus:shadow-md focus-within:outline-zinc-400!"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={10}
              placeholder="Treść wiadomości..."></textarea>
          </div>

          <button
            type="submit"
            className="bg-rose-500 text-zinc-50 shadow-rose-950 shadow-md hover:bg-rose-600 hover:shadow-lg hover:scale-98 transition font-bold px-5 py-2 max-lg:w-full intersect:motion-preset-focus intersect:motion-delay-2500 intersect-once">
            Wyślij wiadomość
          </button>

          <div className="min-h-10 mt-2">
            {success && (
              <p className="text-green-500 inline-block text-lg font-bold">
                {success}
              </p>
            )}
            {error && (
              <p className="text-red-500 inline-block text-lg font-bold">
                {error}
              </p>
            )}
          </div>
        </form>

        <div
          className="max-w-100 text-gray-400 flex flex-col mt-8 max-lg:mt-0 max-xl:max-w-98 max-lg:max-w-full intersect:motion-preset-blur-right intersect:motion-delay-1000 intersect-once"
          data-testid="why-me">
          <p>
            Jestem otwarty na współpracę z firmami, jak i osobami prywatnymi.
            Chętnie dołączę do Twojego zespołu jako frontend developer lub
            stworzę dla Ciebie kompletną stronę internetową projektując ją od
            zera w Figmie, albo zaimplementuję gotowy projekt z Figmy. Napisz do
            mnie jeżeli jesteś zainteresowany
          </p>
          <p className="mt-3">Dlaczego ja?</p>
          <ul className="list-inside list-disc">
            <li>Stworzę kompletną stronę www od zera</li>
            <li>Trzymam się terminów i szybko się uczę</li>
            <li>Piszę czysty, uporządkowany kod</li>
            <li>Solidny tech stack: Next.js, React, TypeScript</li>
            <li>Pracuję z Git/GitHub</li>
            <li>Integruję REST API, bazy MongoDB/MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
