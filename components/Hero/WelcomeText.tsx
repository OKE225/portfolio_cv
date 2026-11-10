import { useTranslations } from "next-intl";

const WelcomeText = () => {
  const t = useTranslations("Hero");

  return (
    <h1 className="text-[rgb(213,216,238)] font-pixelify text-3xl max-xl:text-3xl max-lg:flex max-lg:flex-col">
      {t("greeting")}
    </h1>
  );
};

export default WelcomeText;
