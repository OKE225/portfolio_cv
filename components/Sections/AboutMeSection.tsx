import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import SubHeadingText from "../SubHeadingText";
import SkillsSetCard from "../AboutMe/SkillsSetCard";

const frontendList = [
  {
    name: "NextJS",
    icon: "icon-[akar-icons--nextjs-fill]",
  },
  {
    name: "React",
    icon: "icon-[akar-icons--react-fill]",
  },
  {
    name: "TypeScript",
    icon: "icon-[akar-icons--typescript-fill]",
  },
  {
    name: "JavaScript",
    icon: "icon-[akar-icons--javascript-fill]",
  },
  {
    name: "GIT",
    icon: "icon-[bi--git]",
  },
  {
    name: "TailwindCSS",
    icon: "icon-[teenyicons--tailwind-solid]",
  },
  {
    name: "MaterialUI",
    icon: "icon-[devicon-plain--materialui]",
  },
  {
    name: "JEST",
    icon: "icon-[devicon-plain--jest]",
  },
  {
    name: "Sass",
    icon: "icon-[akar-icons--sass-fill]",
  },
  {
    name: "CSS",
    icon: "icon-[devicon-plain--css3]",
  },
  {
    name: "HTML",
    icon: "icon-[devicon-plain--html5]",
  },
];
const backendList = [
  {
    name: "NodeJS",
    icon: "icon-[akar-icons--node-fill]",
  },
  {
    name: "ExpressJS",
    icon: "icon-[simple-icons--express]",
  },
  {
    name: "PHP",
    icon: "icon-[akar-icons--php-fill]",
  },
  {
    name: "MongoDB",
    icon: "icon-[simple-icons--mongodb]",
  },
  {
    name: "MySQL",
    icon: "icon-[fontisto--mysql]",
  },

  {
    name: "Docker",
    icon: "icon-[fa7-brands--docker]",
  },
];

const AboutMeSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="about">
      <HeadingText>O Mnie</HeadingText>

      <Description />

      <div className="grid grid-cols-3 gap-1 mt-10 ">
        <SkillElement title="Responsywność">
          Tworzę responsywne strony internetowe, które automatycznie dostosowują
          się do każdego urządzenia: komputerów, laptopów, tabletów i telefonów.
          Wyglądają świetnie i działają płynnie na każdym ekranie. Używam do
          tego CSS Grid, Flexbox oraz breakpointów
        </SkillElement>
        <SkillElement title="Design UI/UX">
          Tworzę intuicyjne i estetyczne projekty stron w Figma, dbając o wygodę
          użytkownika (UX/UI). Zwracam uwagę na kolory, typografię oraz
          wszystkie stany elementów (normalny, hover, focus, błąd, ładowanie).
          Strony są przyjemne wizualnie i łatwe w obsłudze na każdym urządzeniu
        </SkillElement>
        <SkillElement title="Gotowe projekty">
          Umiem także zaprogramować aplikację za pomocą gotowego projektu z
          Figmy, zamieniając grafiki projektantów w działające strony www
          dodając stany komponentów i interaktywność z animacjami. Efektem są w
          pełni funkcjonalne strony
        </SkillElement>
        <SkillElement title="Bazy danych">
          Łączę strony i aplikacje z bazami danych MongoDB oraz MySQL. Piszę
          zapytania do pobierania, dodawania, edycji i usuwania danych (operacje
          CRUD). oraz tworzę API które pobierają i zapisują dane bez odświeżania
          strony
        </SkillElement>
        <SkillElement title="Czysty kod">
          Piszę czytelny, uporządkowany, łatwy do zrozumienia kod przez innych
          programistów. Używam TypeScript, żeby popełniać mniej błędów podczas
          pisania kodu. Dzielę kod na małe, wielokrotnego użytku komponenty
        </SkillElement>
        <SkillElement title="API integracja">
          Łączę aplikacje z zewnętrznymi usługami np. wysyłanie emaili przez
          NodeMailer, czy logowanie OAuth oraz buduję REST API dla operacji CRUD
          (Create, Read, Update, Delete) z error handling, czy walidacją danych.
          Buduję także własne API
        </SkillElement>
      </div>

      <SubHeadingText>Skills & Technologies</SubHeadingText>
      <div className="grid grid-cols-2 gap-1">
        <SkillsSetCard title="Frontend" techList={frontendList} />
        <SkillsSetCard title="Backend" techList={backendList} />
      </div>
    </div>
  );
};

export default AboutMeSection;
