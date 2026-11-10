import Container from "../UI/Container";
import HeadingText from "../HeadingText";
import PrimaryCard from "../UI/PrimaryCard";
import SecondaryCard from "../UI/SecondaryCard";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const ProjectCaseStudy = () => {
  const t = useTranslations("CaseStudy");

  const features = [
    { icon: "🛒", key: "catalog" },
    { icon: "🧊", key: "models" },
    { icon: "⚙️", key: "admin" },
    { icon: "🔐", key: "auth" },
  ] as const;

  const steps = ["goal", "interface", "database", "admin", "result"] as const;

  return (
    <div
      className="bg-[linear-gradient(180deg,#0A0B26,#14173F_55%,#0A0B26)] scroll-mt-32"
      id="project-case-study">
      <Container className="gap-8">
        <HeadingText>{t("title")}</HeadingText>

        <div>
          <p className="font-pixelify font-semibold text-white text-xl mb-1">
            fullApple 3D E-commerce
          </p>
          <p>{t("description")}</p>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">
              {t("type")}
            </p>
            <p className="font-pixelify text-xl text-rose-500">
              {t("typeValue")}
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">STACK</p>
            <p className="font-pixelify text-xl text-rose-500">
              Next.js · React · TS · Supabase · shadcn/ui
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">
              {t("role")}
            </p>
            <p className="font-pixelify text-xl text-rose-500">
              Fullstack Developer
            </p>
          </div>
          <div className="bg-[rgb(15,17,50)] py-4 px-5 border border-[rgb(42,45,92)]">
            <p className="text-xs text-[] tracking-[0.08em] uppercase">
              {t("goal")}
            </p>
            <p className="font-pixelify text-xl text-rose-500">
              {t("goalValue")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {features.map(({ icon, key }) => (
            <PrimaryCard key={key}>
              <p className="text-[28px]">{icon}</p>

              <h3 className="font-pixelify font-semibold text-white text-xl mt-2 mb-1">
                {t(`features.${key}.title`)}
              </h3>

              <p className="text-sm m-0">{t(`features.${key}.text`)}</p>
            </PrimaryCard>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-start gap-4 max-sm:gap-2">
              <div className="bg-rose-500 flex items-center justify-center font-pixelify text-[rgb(10,11,38)] font-bold text-[26px] w-14 h-14 select-none max-sm:w-12 max-sm:h-10 max-sm:text-2xl">
                {index + 1}
              </div>

              <SecondaryCard className="py-5 px-6">
                <h3 className="font-pixelify font-semibold text-white text-[22px] mb-1.5">
                  {t(`${step}Title`)}
                </h3>

                <p className="m-0 max-w-5xl text-[15px]">{t(`${step}Text`)}</p>
              </SecondaryCard>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-10 mt-8 max-sm:mt-4 max-sm:flex-col max-sm:gap-4">
          <Link
            href="https://ecommerce-full-apple-3d.vercel.app/"
            target="_blank"
            className="flex items-center text-white text-sm font-semibold gap-2">
            {t("demo")} <MoveUpRight size={14} />
          </Link>
          <Link
            href="https://github.com/OKE225/Ecommerce-fullApple-3D"
            target="_blank"
            className="flex items-center text-white text-sm font-semibold gap-2">
            {t("code")} <MoveUpRight size={14} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProjectCaseStudy;
