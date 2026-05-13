export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  techStack: Technology[];
  liveUrl: string;
  repoUrl: string;
}

export const technologies: Technology[] = [
  {
    name: "NextJS",
    icon: "icon-[akar-icons--nextjs-fill]",
    color: "text-neutral-200",
  },
  {
    name: "React",
    icon: "icon-[akar-icons--react-fill]",
    color: "text-cyan-400",
  },
  {
    name: "TypeScript",
    icon: "icon-[akar-icons--typescript-fill]",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: "icon-[akar-icons--javascript-fill]",
    color: "text-yellow-300",
  },
  {
    name: "NodeJS",
    icon: "icon-[akar-icons--node-fill]",
    color: "text-lime-500",
  },
  {
    name: "ExpressJS",
    icon: "icon-[simple-icons--express]",
    color: "text-neutral-200",
  },
  {
    name: "MongoDB",
    icon: "icon-[simple-icons--mongodb]",
    color: "text-green-600",
  },
  {
    name: "PHP",
    icon: "icon-[akar-icons--php-fill]",
    color: "text-indigo-400",
  },
  {
    name: "MySQL",
    icon: "icon-[fontisto--mysql]",
    color: "text-sky-600",
  },
  {
    name: "GIT",
    icon: "icon-[bi--git]",
    color: "text-orange-600",
  },
  {
    name: "TailwindCSS",
    icon: "icon-[teenyicons--tailwind-solid]",
    color: "text-cyan-500",
  },
  {
    name: "MaterialUI",
    icon: "icon-[devicon-plain--materialui]",
    color: "text-blue-600",
  },
  {
    name: "Docker",
    icon: "icon-[fa7-brands--docker]",
    color: "text-sky-400",
  },
  {
    name: "JEST",
    icon: "icon-[devicon-plain--jest]",
    color: "text-rose-600",
  },
  {
    name: "Sass",
    icon: "icon-[akar-icons--sass-fill]",
    color: "text-pink-400",
  },
  {
    name: "CSS",
    icon: "icon-[devicon-plain--css3]",
    color: "text-blue-500",
  },
  {
    name: "HTML",
    icon: "icon-[devicon-plain--html5]",
    color: "text-orange-500",
  },
];

export const frontendTechnologies: Technology[] = technologies.filter((tech) =>
  [
    "NextJS",
    "React",
    "TypeScript",
    "JavaScript",
    "GIT",
    "TailwindCSS",
    "MaterialUI",
    "JEST",
    "Sass",
    "CSS",
    "HTML",
  ].includes(tech.name),
);

export const backendTechnologies: Technology[] = technologies.filter((tech) =>
  ["NodeJS", "ExpressJS", "MongoDB", "PHP", "MySQL", "Docker"].includes(
    tech.name,
  ),
);

const getTechnologies = (names: string[]) => {
  return technologies.filter((tech) => names.includes(tech.name));
};

export const projects: Project[] = [
  {
    id: 0,
    title: "MindHealth",
    image: "/mind-health.png",
    description:
      "Aplikacja wspierająca zdrowie psychiczne: wybór codziennych emocji z kalendarzem i streakami, porady, ćwiczenia mindfulness z krokami, pamiętnik myśli do autorefleksji oraz osobisty AIchatbot wspierający w stresie i emocjach",
    techStack: getTechnologies([
      "React",
      "TypeScript",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
    ]),
    liveUrl: "https://mind-health-online.vercel.app/",
    repoUrl: "https://github.com/OKE225/MindHealth",
  },
  {
    id: 1,
    title: "Flora",
    image: "/flora.png",
    description:
      "Responsywny landing page o roślinach i kwiatach: efekty tilt na kartach (React Tilt), animowane tła (Vanta.js), stylizacja MaterialUI (MUI)",
    techStack: getTechnologies([
      "React",
      "TypeScript",
      "JavaScript",
      "MaterialUI",
      "Sass",
    ]),
    liveUrl: "https://oke225.github.io/Flora/",
    repoUrl: "https://github.com/OKE225/Flora",
  },
  {
    id: 2,
    title: "Darmowy Ebook",
    image: "/darmowy-ebook.png",
    description:
      'Aplikacji inspirowana "Dotcom Secrets" oferująca darmowy ebook za podanie emaila: waliduje emaile, sprawdza duplikaty w MongoDB, wysyła email z CTA do pobrania ebooka',
    techStack: getTechnologies([
      "NextJS",
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "MongoDB",
    ]),
    liveUrl: "https://lead-squeeze-funnel.vercel.app/",
    repoUrl: "https://github.com/OKE225/lead_squeeze_funnel",
  },
  {
    id: 3,
    title: "myKindle Highlights",
    image: "/mykindle.png",
    description:
      "Aplikacja do przechowywania podkreśleń z Kindle. Użytkownik wczytuje plik z podkreśleniami, a aplikacja odczytuje jego zawartość. Podkreślenia są pogrupowane według książek i są przechowywane w localStorage. Użytkownik może wyszukiwać książki i poszczególne podkreślenia również może sortować listę książek, jak i podkreślenia",
    techStack: getTechnologies([
      "NextJS",
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
    ]),
    liveUrl: "https://github.com/OKE225/myKindle_Highlights_app",
    repoUrl: "https://github.com/OKE225/myKindle_Highlights_app",
  },
  {
    id: 4,
    title: "Cars website",
    image: "/cars-website.png",
    description:
      "Responsywna aplikacja w React z TypeScript, przedstawiająca trzy samochody w różnych kolorach. Wykorzystuje React Router, media queries, interaktywny karuzel, animacje w SASS oraz modularne komponenty z obsługą stanu i localStorage",
    techStack: getTechnologies(["React", "TypeScript", "JavaScript", "Sass"]),
    liveUrl: "https://oke225.github.io/CARS_Website/",
    repoUrl: "https://github.com/OKE225/CARS_Website",
  },
  {
    id: 5,
    title: "Notes app",
    image: "/notes-app.png",
    description:
      "Prosty projekt w technologii MERN do zarządzania notatkami z pełną funkcjonalnością CRUD. Użytkownik może przeglądać listę notatek, dodawać, edytować, usunąć je, a także oznaczać jako ulubione. Frontend jest zbudowany w React z TypeScript i TailwindCSS, a backend w Node.js, Express.js i bazie danych MongoDB",
    techStack: getTechnologies([
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ]),
    liveUrl: "https://github.com/OKE225/Notes_app",
    repoUrl: "https://github.com/OKE225/Notes_app",
  },
];
