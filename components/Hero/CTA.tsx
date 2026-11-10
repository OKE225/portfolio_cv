"use client";

import { useTranslations } from "next-intl";
import ButtonVariant from "../ButtonVariant";

const CTA = () => {
  const t = useTranslations("Hero");

  return (
    <>
      <ButtonVariant variant="primary" href="#projects">
        {t("ctaProjects")}
      </ButtonVariant>

      <ButtonVariant variant="secondary" href="#about">
        {t("ctaAbout")}
      </ButtonVariant>
    </>
  );
};

export default CTA;
