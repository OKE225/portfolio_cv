"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

const CopyMyMail = () => {
  const [copied, setCopied] = useState(false);

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText("patryk.jastrzebowski.dev@gmail.com");

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Nie udało się skopiować adresu:", error);
    }
  };

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="text-rose-500 inline-flex items-center justify-center px-3 h-11 w-11 max-lg:h-10 max-lg:w-10 max-lg:px-2 border-2 cursor-pointer"
        onClick={copyMail}
        title="Skopiuj adres e-mail"
        aria-label="Skopiuj adres e-mail">
        {copied ? (
          <Check size={18} className="pointer-events-none" />
        ) : (
          <Mail size={18} className="pointer-events-none" />
        )}
      </button>

      <span
        role="status"
        className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap">
        {copied && (
          <span className="block border border-rose-500 bg-[rgb(10,11,38)] px-3 py-2 text-xs text-rose-500">
            E-mail skopiowany!
          </span>
        )}
      </span>
    </div>
  );
};

export default CopyMyMail;
