"use client";

import HeadingText from "../HeadingText";
import { useState } from "react";
import Container from "../UI/Container";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(t("send"));
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    const errorKey = data?.error;

    setError(
      errorKey && t.has(`errors.${errorKey}`)
        ? t(`errors.${errorKey}`)
        : t("error"),
    );
  };

  return (
    <div className="bg-[rgb(13,14,48)] py-24 border-y border-y-[rgb(42,45,92)]">
      <Container>
        <div className="flex flex-col scroll-mt-24 gap-10" id="contact">
          <HeadingText>{t("title")}</HeadingText>

          <div className="grid grid-cols-2 max-xl:grid-cols-1">
            <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-white text-sm font-bold">
                  {t("namePlaceholder")}
                  <sup className="text-rose-500">*</sup>
                </label>
                <input
                  type="text"
                  className="h-12 bg-[rgb(10,11,38)] text-white px-4 border border-[rgb(42,45,92)] transition-colors focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  name="name"
                  id="name"
                  placeholder={t("name")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-white text-sm font-bold">
                  {t("emailPlaceholder")}
                  <sup className="text-rose-500">*</sup>
                </label>
                <input
                  type="text"
                  className="h-12 bg-[rgb(10,11,38)] text-white px-4 border border-[rgb(42,45,92)] transition-colors focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value.toLowerCase(),
                    })
                  }
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-white text-sm font-bold">
                  {t("message")}
                  <sup className="text-rose-500">*</sup>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="min-h-40 h-40 max-h-40 max-md:min-h-55 max-md:h-55 max-md:max-h-55 bg-[rgb(10,11,38)] text-white py-3 px-4 border border-[rgb(42,45,92)] transition-colors focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 focus:outline-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("messagePlaceholder")}></textarea>
              </div>

              <button
                type="submit"
                className="bg-rose-500 text-[rgb(10,11,38)] font-bold min-h-11 py-3 px-7 hover:scale-98 transition">
                {t("submit")}
              </button>

              <div className="min-h-8 uppercase">
                {success && (
                  <p className="text-green-500 inline-block text-lg font-bold focus:font-bold">
                    {success}
                  </p>
                )}
                {error && (
                  <p className="text-red-500 inline-block text-lg font-bold focus:font-bold">
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
