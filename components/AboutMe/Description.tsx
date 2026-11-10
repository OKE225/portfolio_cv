import { useTranslations } from "next-intl";

const Description = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className="text-justify" data-testid="description">
      <p className="mb-4">{t("intro")}</p>
      <p>{t("moreInfo")}</p>
    </div>
  );
};

export default Description;
