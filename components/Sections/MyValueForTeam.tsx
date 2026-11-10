import Container from "../UI/Container";
import HeadingText from "../HeadingText";
import SecondaryCard from "../UI/SecondaryCard";
import { useTranslations } from "next-intl";

const MyValueForTeam = () => {
  const t = useTranslations("MyValue");

  const values = ["details", "code", "ai", "growth"];

  return (
    <div className="bg-[rgb(13,14,48)] py-24 border-t border-t-[rgb(42,45,92)]">
      <Container className="gap-8">
        <HeadingText>{t("title")}</HeadingText>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
          {values.map((value, index) => (
            <SecondaryCard key={value} className="flex flex-col p-6 gap-2">
              <span className="font-pixelify text-[40px] font-bold text-rose-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-pixelify text-[22px] text-white font-semibold m-0">
                {t(`${value}.title`)}
              </h3>

              <p className="text-[15px] m-0">{t(`${value}.text`)}</p>
            </SecondaryCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyValueForTeam;
