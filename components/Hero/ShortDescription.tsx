import { useTranslations } from "next-intl";

const ShortDescription = () => {
  const t = useTranslations("Hero");

  return (
    <p className="max-w-200 text-lg text-center mt-5">{t("description")}</p>
  );
};

export default ShortDescription;
