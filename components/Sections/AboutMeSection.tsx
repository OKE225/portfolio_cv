import Description from "../AboutMe/Description";
import HeadingText from "../HeadingText";
import SkillElement from "../AboutMe/SkillElement";
import Container from "../UI/Container";

const AboutMeSection = () => {
  return (
    <Container>
      <div
        className="flex flex-col justify-center scroll-mt-24 gap-8"
        id="about">
        <HeadingText>O Mnie</HeadingText>

        <Description />

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          <SkillElement title="Dostosowanie do różnych ekranów">
            CSS Grid, Flexbox i breakpointy. Strony dopasowane do komputerów,
            tabletów i telefonów z dbałością o czytelność i wygodną obsługę na
            każdym ekranie.{" "}
            <strong>
              Spójny wygląd i intuicyjna nawigacja niezależnie od rozmiaru
              urządzenia
            </strong>
          </SkillElement>
          <SkillElement title="Design UI/UX">
            Nowoczesny wygląd, elementy 3D i projekty tworzone ze wsparciem AI.
            Dbałość o kolory, typografię i stany elementów od hover i focus po
            błędy i ładowanie. Interfejsy przyjemne wizualnie i wygodne w
            obsłudze na każdym urządzeniu
          </SkillElement>
          <SkillElement title="Czysty kod">
            Czytelny i uporządkowany kod, zrozumiały również dla innych
            programistów. Jasne nazwy i podział na małe części, z których każda
            ma konkretne zadanie. Komponenty i funkcje, które można wykorzystać
            w wielu miejscach, łatwo poprawiać i rozbudowywać bez niepotrzebnego
            powielania kodu
          </SkillElement>
          <SkillElement title="Praca z narzędziami AI">
            AI jako <strong>wsparcie, nie zastępstwo myślenia</strong>. Pomoc w
            szukaniu błędów, rozumieniu kodu i tworzeniu pomysłów na wygląd
            stron. Sprawdzanie i dopasowywanie propozycji zamiast kopiowania
            gotowych odpowiedzi bez zastanowienia. Eksperymentowanie z
            narzędziami i szukanie nowych sposobów na usprawnienie pracy
          </SkillElement>
          <SkillElement title="Bazy danych">
            MySQL, PostgreSQL i zarządzanie danymi, dodawanie, odczytywanie,
            edycja i usuwanie. Logowanie użytkowników oraz role określające, kto
            może zobaczyć lub zmienić konkretne informacje. Dodatkowe reguły
            dostępu RLS, dzięki którym użytkownik ma dostęp tylko do
            przeznaczonych dla niego danych
          </SkillElement>
          <SkillElement title="Komponenty wielokrotnego użytku">
            Przyciski, formularze i karty tworzone jako uniwersalne komponenty.
            Konfiguracja przez propsy i spójne warianty wyglądu zamiast
            powielania kodu. Zmiany w jednym miejscu, które ułatwiają rozwój i
            utrzymanie całej aplikacji
          </SkillElement>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
