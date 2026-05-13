import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import SubHeadingText from "../SubHeadingText";
import SkillsSetCard from "../AboutMe/SkillsSetCard";
import { backendTechnologies, frontendTechnologies } from "@/lib/portfolioData";

const AboutMeSection = () => {
  return (
    <div
      className="flex flex-col justify-center pt-30 max-2xl:pt-20 max-lg:pt-10"
      id="about">
      <HeadingText>O Mnie</HeadingText>

      <Description />

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-1 my-5">
        <SkillElement id={1} title="Responsywność">
          Tworzę responsywne strony internetowe, które automatycznie dostosowują
          się do każdego urządzenia: komputerów, laptopów, tabletów i telefonów.
          Wyglądają świetnie i działają płynnie na każdym ekranie. Używam do
          tego CSS Grid, Flexbox oraz breakpointów
        </SkillElement>
        <SkillElement id={2} title="Design UI/UX">
          Tworzę intuicyjne i estetyczne projekty stron w Figma, dbając o wygodę
          użytkownika (UX/UI). Zwracam uwagę na kolory, typografię oraz
          wszystkie stany elementów (normalny, hover, focus, błąd, ładowanie).
          Strony są przyjemne wizualnie i łatwe w obsłudze na każdym urządzeniu
        </SkillElement>
        <SkillElement id={3} title="Gotowe projekty">
          Umiem także zaprogramować aplikację za pomocą gotowego projektu z
          Figmy, zamieniając grafiki projektantów w działające strony www
          dodając stany komponentów i interaktywność z animacjami. Efektem są w
          pełni funkcjonalne strony
        </SkillElement>
        <SkillElement id={4} title="Bazy danych">
          Łączę strony i aplikacje z bazami danych MongoDB oraz MySQL. Piszę
          zapytania do pobierania, dodawania, edycji i usuwania danych (operacje
          CRUD). oraz tworzę API które pobierają i zapisują dane bez odświeżania
          strony
        </SkillElement>
        <SkillElement id={5} title="Czysty kod">
          Piszę czytelny, uporządkowany, łatwy do zrozumienia kod przez innych
          programistów. Używam TypeScript, żeby popełniać mniej błędów podczas
          pisania kodu. Dzielę kod na małe, wielokrotnego użytku komponenty
        </SkillElement>
        <SkillElement id={6} title="API integracja">
          Łączę aplikacje z zewnętrznymi usługami np. wysyłanie emaili przez
          NodeMailer, czy logowanie OAuth oraz buduję REST API dla operacji CRUD
          (Create, Read, Update, Delete) z error handling, czy walidacją danych.
          Buduję także własne API
        </SkillElement>
      </div>

      <SubHeadingText>Technologie</SubHeadingText>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-25 max-lg:gap-10">
        <SkillsSetCard title="Frontend" techList={frontendTechnologies} />
        <SkillsSetCard title="Backend" techList={backendTechnologies} />
      </div>
    </div>
  );
};

export default AboutMeSection;
