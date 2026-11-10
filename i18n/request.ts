import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // i18n/ i messages/ leżą obok siebie w głównym folderze projektu
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
