import UnlockOnMount from "@/components/UnlockOnMount";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex relative flex-col items-center justify-center max-w-190 h-screen text-center gap-6 mx-auto z-100">
      <UnlockOnMount id="bug" />

      <span className="bg-[rgb(18,20,58)] text-[13px] text-white py-1.5 px-4 border border-[rgb(42,45,92)]">
        {t("errorBadge")}
      </span>
      <h1 className="font-pixelify font-bold text-[260px] text-rose-500 leading-[0.9]">
        404
      </h1>
      <h2 className="font-pixelify font-bold text-5xl text-white leading-[1.1] m-0">
        {t("title")}
      </h2>
      <p className="text-[17px] max-w-140">{t("description")}</p>

      <div className="bg-[rgb(15,17,50)] flex flex-col gap-1 w-full max-w-130 text-left text-white text-sm py-5 px-6 border border-[rgb(42,45,92)] border-t-3 border-t-rose-500">
        <p>
          &gt; GET /
          <span className="blur-xs select-none pointer-events-none">
            {t("secret")}
          </span>
        </p>
        <p className="text-rose-500">✖ 404 Not Found</p>
        <p>&gt; {t("suggestion")}</p>
      </div>

      <div className="flex">
        <Link
          href="/"
          className="bg-rose-500 text-[rgb(10,11,38)] font-bold min-h-11 py-3 px-7 border-2 border-rose-500 hover:scale-98 transition max-md:text-lg max-lg:w-full mx-1">
          {t("ctaBack")}
        </Link>
        <Link
          href="/#projects"
          className="text-rose-500 font-bold min-h-11 py-3 px-7 border-2 border-rose-500 hover:scale-98 transition max-md:text-lg max-lg:w-full mx-1">
          {t("ctaProjects")}
        </Link>
      </div>
    </div>
  );
}
