"use client";

import HeadingText from "../HeadingText";
import ProjectItem from "../Projects/ProjectItem";
import HighlightProjectCard from "../UI/HighlightProjectCard";
import Container from "../UI/Container";

const ProjectsSection = () => {
  return (
    <div
      className="bg-[rgb(13,14,48)] flex flex-col justify-center py-24 border-y border-y-[rgb(42,45,92)]"
      id="projects">
      <Container>
        <HeadingText>Moje Projekty</HeadingText>

        <HighlightProjectCard />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {/* {projects.map(
            (
              {
                image,
                title,
                description,
                techStack,
                liveUrl,
                repoUrl,
              }: Project,
              id,
            ) => (
              <ProjectItem
                key={id}
                image={image}
                title={title}
                description={description}
                techStack={techStack}
                liveUrl={liveUrl}
                repoUrl={repoUrl}
              />
            ),
          )} */}

          <ProjectItem
            image="/projects/MindHealth.png"
            title="MindHealth"
            description="Aplikacja wspierająca dbanie o zdrowie psychiczne. Użytkownicy mogą codziennie zaznaczać samopoczucie, śledzić je w kalendarzu i budować serię kolejnych dni, a także korzystać z ćwiczeń uważności, dziennika myśli oraz chatbota AI oferującego wsparcie"
            techStack={[
              "React",
              "TypeScript",
              "JavaScript",
              "TailwindCSS",
              "Node.js",
              "Express.js",
            ]}
            liveUrl="https://mind-health-online.vercel.app/"
            repoUrl="https://github.com/OKE225/MindHealth"
          />

          <ProjectItem
            image="/projects/Travel-Dreams.gif"
            title="Travel Dreams"
            description="Mobilna aplikacja do zapisywania miejsc, które użytkownik chce odwiedzić. Na mapie można oznaczać wymarzone lokalizacje, dodawać zdjęcia i krótkie opisy, a także przeglądać oraz usuwać zapisane punkty tworząc osobistą mapę podróżniczych marzeń"
            techStack={[
              "React",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Supabase",
              "PostgreSQL",
            ]}
            repoUrl="https://github.com/OKE225/Travel_Dreams_mobile_app"
          />

          <ProjectItem
            image="/projects/Earth-3D.png"
            title="Earth 3D"
            description="Interaktywna strona landingowa poświęcona Ziemi. Jej głównym elementem jest model 3D planety, który reaguje na przewijanie strony animacjami pozycji, obrotu i zbliżenia, a całość uzupełniają sekcje z informacjami o Ziemi"
            techStack={[
              "React",
              "TypeScript",
              "JavaScript",
              "Three.js",
              "TailwindCSS",
            ]}
            liveUrl="https://oke225.github.io/earth-3d-website/"
            repoUrl="https://github.com/OKE225/earth-3d-website"
          />

          <ProjectItem
            image="/projects/myKindle.png"
            title="myKindle Highlights"
            description="Aplikacja webowa do gromadzenia cytatów z Kindle w jednym miejscu. Po zaimportowaniu notatek automatycznie rozpoznaje tytuł książki, autora i zaznaczenia, a użytkownik może wyszukiwać oraz sortować książki i cytaty"
            techStack={[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "TailwindCSS",
              "Supabase",
              "PostgreSQL",
              "Jest",
              "Docker",
            ]}
            liveUrl="https://my-kindle-highlights-app.vercel.app/"
            repoUrl="https://github.com/OKE225/myKindle_Highlights_app"
          />

          <ProjectItem
            image="/projects/Pinky-Promise.png"
            title="Pinky Promise"
            description="Responsywna strona internetowa dla prywatnej stylistki paznokci. Prezentuje ofertę, ceny i czas trwania usług, portfolio realizacji oraz informacje o artystce, a także ułatwia kontakt i umawianie wizyty dzięki spójnej, różowej identyfikacji wizualnej"
            techStack={["HTML", "CSS"]}
            liveUrl="https://pinky-promise-mk.vercel.app/"
          />

          <ProjectItem
            image="/projects/Flora.png"
            title="Flora"
            description="Responsywny landing page poświęcony roślinom i kwiatom. Wyróżnia się animowanym tłem, efektownymi kartami reagującymi na ruch kursora oraz nowoczesnym, czytelnym układem, który ułatwia przeglądanie treści"
            techStack={["React", "TypeScript", "Material UI", "Sass"]}
            liveUrl="https://oke225.github.io/Flora/"
            repoUrl="https://github.com/OKE225/Flora"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
