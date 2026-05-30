import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

const messages = {
  en: async () => (await import("../../messages/en.json")).default,
  es: async () => (await import("../../messages/es.json")).default,
  fr: async () => (await import("../../messages/fr.json")).default,
  de: async () => (await import("../../messages/de.json")).default,
  pt: async () => (await import("../../messages/pt.json")).default,
  zh: async () => (await import("../../messages/zh.json")).default,
  ar: async () => (await import("../../messages/ar.json")).default,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const validLocale = locale && locales.includes(locale as any) ? locale : "en";

  return {
    locale: validLocale,
    messages: await messages[validLocale as keyof typeof messages](),
  };
});
