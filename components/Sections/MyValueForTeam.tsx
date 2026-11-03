import Container from "../UI/Container";
import HeadingText from "../HeadingText";
import SecondaryCard from "../UI/SecondaryCard";

const MyValueForTeam = () => {
  return (
    <div className="bg-[rgb(13,14,48)] py-24 border-t border-t-[rgb(42,45,92)]">
      <Container className="gap-8">
        <HeadingText>Co mnie wyróżnia</HeadingText>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
          <SecondaryCard className="flex flex-col p-6 gap-2">
            <span className="font-pixelify text-[40px] font-bold text-rose-500">
              01
            </span>
            <h3 className="font-pixelify text-[22px] text-white font-semibold m-0">
              Dopracowane szczegóły
            </h3>
            <p className="text-[15px] m-0">
              Dbam nie tylko o wygląd, ale też o wygodę korzystania z aplikacji.
              Czytelny układ, dopasowanie do różnych ekranów i przemyślane stany
              przycisków czy formularzy to dla mnie część gotowego projektu
            </p>
          </SecondaryCard>
          <SecondaryCard className="flex flex-col p-6 gap-2">
            <span className="font-pixelify text-[40px] font-bold text-rose-500">
              02
            </span>
            <h3 className="font-pixelify text-[22px] text-white font-semibold m-0">
              Kod
            </h3>
            <p className="text-[15px] m-0">
              Piszę kod tak, żeby inni mogli go łatwo zrozumieć i rozwijać.
              Stawiam na jasne nazwy, uporządkowaną strukturę i komponenty
              wielokrotnego użytku, które ułatwiają zmiany bez powtarzania kodu
            </p>
          </SecondaryCard>
          <SecondaryCard className="flex flex-col p-6 gap-2">
            <span className="font-pixelify text-[40px] font-bold text-rose-500">
              03
            </span>
            <h3 className="font-pixelify text-[22px] text-white font-semibold m-0">
              AI z głową
            </h3>
            <p className="text-[15px] m-0">
              Korzystam z AI, żeby lepiej rozumieć kod, szukać błędów i
              sprawdzać pomysły na interfejsy. Nie kopiuję odpowiedzi bez
              zastanowienia, analizuję propozycje i dopasowuję je do potrzeb
              projektu
            </p>
          </SecondaryCard>
          <SecondaryCard className="flex flex-col p-6 gap-2">
            <span className="font-pixelify text-[40px] font-bold text-rose-500">
              04
            </span>
            <h3 className="font-pixelify text-[22px] text-white font-semibold m-0">
              Rozwój przez praktykę
            </h3>
            <p className="text-[15px] m-0">
              Regularnie tworzę projekty i publikuję je na GitHubie. Pracuję
              systematycznie, angażuję się w zadania i chcę uczyć się od
              bardziej doświadczonych programistów, mając realny wpływ na
              produkt
            </p>
          </SecondaryCard>
        </div>
      </Container>
    </div>
  );
};

export default MyValueForTeam;
