import { ArrowDown, MoveUpRight } from "lucide-react";
import ButtonVariant from "../ButtonVariant";
import Image from "next/image";
import Link from "next/link";

const HighlightProjectCard = () => {
  const usedLanguages = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Supabase",
    "TailwindCSS",
    "Shadcn UI",
    "Three.js",
  ];

  return (
    <div className="bg-[rgb(15,17,50)] border border-[rgb(42,45,92)] border-t-3 border-t-rose-500 my-10">
      <div className="flex flex-col bg-[rgb(18,20,58)] border-r border-r-[rgb(42,45,92)]">
        <div className="flex items-center gap-1.5 h-7 px-3 border-b border-b-[rgb(42,45,92)]">
          <span className="block w-2 h-2 bg-rose-500" />
          <span className="block w-2 h-2 bg-[rgb(42,45,92)]" />
          <span className="block w-2 h-2 bg-[rgb(42,45,92)]" />
        </div>

        <div className="relative flex-1 min-h-0 overflow-hidden">
          <span className="flex items-center gap-2 text-[13px] absolute left-2 top-2 bg-rose-500 text-[rgb(10,11,38)] font-bold py-1 px-3 uppercase z-10 max-sm:text-xs">
            ★ WYRÓŻNIONY PROJEKT
          </span>

          <Image
            src="/projects/fullApple-3D.png"
            alt="Podgląd wyróżnionego projektu"
            width={1920}
            height={1080}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8 max-sm:p-6">
        <h3 className="text-white text-[44px] font-pixelify font-semibold leading-[1.1]">
          fullApple 3D E-commerce
        </h3>
        <p className="text-[13px]">Problem → Rozwiązanie → Efekt</p>

        <div className="border-l-3 border-l-rose-500 py-1 pl-4">
          <p className="font-pixelify font-semibold text-xl text-rose-500">
            01 Problem
          </p>
          <p className="mt-1 text-[15px] max-w-4xl">
            Stworzenie aplikacji e-commerce, która łączy wygodne przeglądanie
            produktów z prostym zarządzaniem katalogiem. Ważne było również
            rozdzielenie dostępu klientów i administratorów oraz dopasowanie
            interfejsu do różnych ekranów
          </p>
        </div>
        <div className="border-l-3 border-l-rose-500 py-1 pl-4">
          <p className="font-pixelify font-semibold text-xl text-rose-500">
            02 Rozwiązanie
          </p>
          <p className="mt-1 text-[15px] max-w-4xl">
            Aplikacja w Next.js i Supabase z wyszukiwaniem, sortowaniem,
            koszykiem i interaktywnymi modelami 3D. Panel administratora
            umożliwia zarządzanie produktami i zdjęciami, a logowanie, role
            użytkowników oraz reguły RLS kontrolują dostęp do danych
          </p>
        </div>
        <div className="border-l-3 border-l-rose-500 py-1 pl-4">
          <p className="font-pixelify font-semibold text-xl text-rose-500">
            03 Efekt
          </p>
          <p className="mt-1 text-[15px] max-w-4xl">
            <strong>Demonstracyjny sklep</strong> z responsywnym interfejsem i
            panelem zarządzania katalogiem. Użytkownicy mogą przeglądać
            produkty, sprawdzać specyfikacje i dodawać je do koszyka, a
            administratorzy aktualizować ofertę bez edytowania kodu
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {usedLanguages.map((language, index) => (
            <span
              key={index}
              className="text-xs py-0.75 px-2.5 border border-[rgb(42,45,92)]">
              {language}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          <ButtonVariant
            variant="primary"
            href="#project-case-study"
            className="flex items-center gap-2 text-sm! font-semibold py-2.5! px-5! w-fit!">
            Studium przypadku <ArrowDown strokeWidth={2} size={15} />
          </ButtonVariant>

          <ButtonVariant
            variant="secondary"
            href="https://ecommerce-full-apple-3d.vercel.app/"
            className="flex items-center gap-2 text-sm! font-semibold py-2.5! px-5! w-fit!">
            Live project <MoveUpRight strokeWidth={5} size={10} />
          </ButtonVariant>

          <Link
            href="https://github.com/OKE225/Ecommerce-fullApple-3D"
            className="flex items-center gap-2 text-white text-sm font-semibold py-2.5 px-5 border-2 border-[rgb(42,45,92)]">
            Kod <MoveUpRight strokeWidth={5} size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighlightProjectCard;
