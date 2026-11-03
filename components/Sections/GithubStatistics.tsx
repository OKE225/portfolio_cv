import HeadingText from "../HeadingText";
import ContributionGraph from "../ContributionGraph";
import { getGithubStats } from "@/lib/github";
import Container from "../UI/Container";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const GithubStatistics = async () => {
  const stats = await getGithubStats();

  const cards = [
    { value: stats?.topLanguage, label: "Najczęstszy język" },
    { value: stats?.commits, label: "Commity (ostatni rok)" },
    { value: stats?.publicRepos, label: "Publiczne repozytoria" },
  ];

  return (
    <section className="bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.035)_0_2px,transparent_2px_10px)] py-24">
      <Container className="gap-8">
        <HeadingText>GitHub</HeadingText>

        <div className="flex justify-between gap-5 max-md:flex-col">
          {cards.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[rgb(15,17,50)] flex flex-col w-full border-t-3 border-t-rose-500 border border-[rgb(42,45,92)] p-6 gap-1.5">
              <h3 className="font-pixelify text-[44px] max-lg:text-3xl text-rose-500 font-semibold">
                {value ?? "—"}
              </h3>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(15,17,50)] w-full border border-[rgb(42,45,92)] p-6">
          <div className="flex flex-wrap justify-between text-[15px] gap-2 mb-6">
            <p className="text-white">Aktywność na GitHubie</p>
            <Link
              href="https://github.com/OKE225"
              className="flex items-center text-white text-[15px] gap-2">
              Zobacz profil <MoveUpRight size={14} />
            </Link>
          </div>

          {stats ? (
            <ContributionGraph weeks={stats.weeks} />
          ) : (
            <p className="text-[15px]">
              Nie udało się pobrać danych z GitHuba. Spróbuj ponownie później
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GithubStatistics;
