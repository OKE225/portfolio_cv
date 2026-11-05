import Container from "../UI/Container";
import HeadingText from "../HeadingText";
import PrimaryCard from "../UI/PrimaryCard";
import SecondaryCard from "../UI/SecondaryCard";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const ProjectCaseStudy = () => {
  return (
    <div
      className="bg-[linear-gradient(180deg,#0A0B26,#14173F_55%,#0A0B26)] scroll-mt-32"
      id="project-case-study">
      <Container className="gap-8">
        <HeadingText>Proces tworzenia</HeadingText>

        <div>
          <p className="font-pixelify font-semibold text-white text-xl mb-1">
            fullApple 3D E-commerce
          </p>
          <p>
            Demonstracyjna aplikacja e-commerce inspirowana produktami Apple.
            Łączy katalog produktów, interaktywne modele 3D i koszyk z panelem
            do zarządzania ofertą. Użytkownicy mogą przeglądać specyfikacje i
            zapisywać produkty w koszyku, a administratorzy dodawać oraz
            aktualizować katalog. Projekt edukacyjny, który nie jest prawdziwym
            sklepem ani oficjalną stroną Apple
          </p>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">TYP</p>
            <p className="font-pixelify text-xl text-rose-500">
              Aplikacja E-commerce
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">STACK</p>
            <p className="font-pixelify text-xl text-rose-500">
              Next.js · React · TS · Supabase · shadcn/ui
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">ROLA</p>
            <p className="font-pixelify text-xl text-rose-500">
              Fullstack Developer
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">CEL</p>
            <p className="font-pixelify text-xl text-rose-500">
              Projekt edukacyjny
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          <PrimaryCard>
            <p className="text-[28px]">🛒</p>
            <h3 className="font-pixelify font-semibold text-white text-xl mt-2 mb-1">
              Katalog i koszyk
            </h3>
            <p className="text-sm m-0">
              Przeglądanie produktów według kategorii, wyszukiwanie i
              sortowanie. Szczegółowe specyfikacje oraz koszyk aktualizowany na
              bieżąco po zmianach
            </p>
          </PrimaryCard>
          <PrimaryCard>
            <p className="text-[28px]">🧊</p>
            <h3 className="font-pixelify font-semibold text-white text-xl mt-2 mb-1">
              Modele 3D
            </h3>
            <p className="text-sm m-0">
              Interaktywne modele wybranych produktów, które pozwalają obejrzeć
              urządzenie z różnych stron i przyjrzeć się jego wyglądowi
            </p>
          </PrimaryCard>
          <PrimaryCard>
            <p className="text-[28px]">⚙️</p>
            <h3 className="font-pixelify font-semibold text-white text-xl mt-2 mb-1">
              Panel administratora
            </h3>
            <p className="text-sm m-0">
              Dodawanie, edycja i usuwanie produktów bez zmieniania kodu.
              Przesyłanie zdjęć z automatycznym kadrowaniem oraz uzupełnianie
              specyfikacji
            </p>
          </PrimaryCard>
          <PrimaryCard>
            <p className="text-[28px]">🔐</p>
            <h3 className="font-pixelify font-semibold text-white text-xl mt-2 mb-1">
              Konta i uprawnienia
            </h3>
            <p className="text-sm m-0">
              Rejestracja i logowanie przez Supabase Auth. Oddzielny dostęp dla
              użytkowników i administratorów oraz reguły RLS kontrolujące dostęp
              do danych
            </p>
          </PrimaryCard>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-start gap-4 max-sm:gap-2">
            <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
              1
            </div>

            <SecondaryCard className="py-5 px-6">
              <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                Cel i założenia
              </h3>
              <p className="m-0 max-w-5xl text-[15px]">
                Celem było stworzenie demonstracyjnego sklepu, który łączy
                wygodne przeglądanie produktów z zarządzaniem ofertą. Projekt
                obejmuje zarówno część dla użytkownika, jak i panel
                administratora z katalogiem, koszykiem, kontami oraz kontrolą
                dostępu
              </p>
            </SecondaryCard>
          </div>
          <div className="flex items-start gap-4 max-sm:gap-2">
            <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
              2
            </div>

            <SecondaryCard className="py-5 px-6">
              <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                Interfejs i prezentacja produktów
              </h3>
              <p className="m-0 max-w-5xl text-[15px]">
                Katalog podzielony na kategorie uzupełniają wyszukiwanie,
                sortowanie i szczegółowe specyfikacje. Interaktywne modele 3D
                pozwalają obejrzeć wybrane urządzenia z różnych stron. Całość
                dopełniają responsywny układ, stany ładowania i efekty po
                najechaniu
              </p>
            </SecondaryCard>
          </div>
          <div className="flex items-start gap-4 max-sm:gap-2">
            <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
              3
            </div>

            <SecondaryCard className="py-5 px-6">
              <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                Aplikacja i baza danych
              </h3>
              <p className="m-0 max-w-5xl text-[15px]">
                Projekt powstał w Next.js z wykorzystaniem Supabase oraz
                komponentów shadcn/ui. Dane zostały podzielone na cztery główne
                tabele: kategorie, produkty, produkty powiązane i role
                użytkowników. Taki układ łączy katalog z informacjami
                potrzebnymi do zarządzania ofertą i uprawnieniami
              </p>
            </SecondaryCard>
          </div>
          <div className="flex items-start gap-4 max-sm:gap-2">
            <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
              4
            </div>

            <SecondaryCard className="py-5 px-6">
              <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                Zarządzanie ofertą i dostępem
              </h3>
              <p className="m-0 max-w-5xl text-[15px]">
                Panel administratora umożliwia obsługę produktów, zdjęć i
                specyfikacji. Formularze są sprawdzane po stronie serwera, a
                usunięcie produktu wymaga potwierdzenia. Dostęp do panelu
                ograniczają role użytkowników, natomiast reguły RLS kontrolują
                dostęp na poziomie bazy danych
              </p>
            </SecondaryCard>
          </div>
          <div className="flex items-start gap-4 max-sm:gap-2">
            <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
              5
            </div>

            <SecondaryCard className="py-5 px-6">
              <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                Efekt i zakres projektu
              </h3>
              <p className="m-0 max-w-5xl text-[15px]">
                Efektem jest demonstracyjna aplikacja e-commerce z częścią dla
                użytkownika i narzędziami dla administratora. Projekt łączy
                interfejs, logowanie, bazę danych oraz zarządzanie katalogiem w
                jednej aplikacji. Nie obsługuje rzeczywistej sprzedaży jego
                zadaniem jest pokazanie opisanych funkcji w praktyce
              </p>
            </SecondaryCard>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mt-8 max-sm:mt-4 max-sm:flex-col max-sm:gap-4">
          <Link
            href="https://ecommerce-full-apple-3d.vercel.app/"
            target="_blank"
            className="flex items-center text-white text-sm font-semibold gap-2">
            Zobacz demo <MoveUpRight size={14} />
          </Link>
          <Link
            href="https://github.com/OKE225/Ecommerce-fullApple-3D"
            target="_blank"
            className="flex items-center text-white text-sm font-semibold gap-2">
            Kod na GitHubie <MoveUpRight size={14} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProjectCaseStudy;
