import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales } from "@/src/i18n/config";
import { StructuredData } from "@/components/structured-data";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pedrostech.com";

  // Determine the current URL
  const currentUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`;

  const metadata: Record<string, Metadata> = {
    en: {
      title: "Pedro's Tech - AI Platform",
      description: "Build and ship AI solutions with unprecedented velocity",

      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          fr: `${baseUrl}/fr`,
          de: `${baseUrl}/de`,
          pt: `${baseUrl}/pt`,
          zh: `${baseUrl}/zh`,
          ar: `${baseUrl}/ar`,
          "x-default": baseUrl,
        },
      },
      openGraph: {
        title: "Pedro's Tech - AI Platform",
        description: "Build and ship AI solutions with unprecedented velocity",
        url: currentUrl,
        locale: "en_US",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - AI Platform",
        description: "Build and ship AI solutions with unprecedented velocity",
      },
    },
    es: {
      title: "Pedro's Tech - Plataforma de IA",
      description:
        "Construye y lanza soluciones de IA con velocidad sin precedentes",

      alternates: {
        languages: {
          en: baseUrl,
          fr: `${baseUrl}/fr`,
          de: `${baseUrl}/de`,
          pt: `${baseUrl}/pt`,
          zh: `${baseUrl}/zh`,
          ar: `${baseUrl}/ar`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - Plataforma de IA",
        description:
          "Construye y lanza soluciones de IA con velocidad sin precedentes",
        url: currentUrl,
        locale: "es_ES",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - Plataforma de IA",
        description:
          "Construye y lanza soluciones de IA con velocidad sin precedentes",
      },
    },
    fr: {
      title: "Pedro's Tech - Plateforme IA",
      description:
        "Créez et lancez des solutions IA avec une vélocité sans précédent",

      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
          de: `${baseUrl}/de`,
          pt: `${baseUrl}/pt`,
          zh: `${baseUrl}/zh`,
          ar: `${baseUrl}/ar`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - Plateforme IA",
        description:
          "Créez et lancez des solutions IA avec une vélocité sans précédent",
        url: currentUrl,
        locale: "fr_FR",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - Plateforme IA",
        description:
          "Créez et lancez des solutions IA avec une vélocité sans précédent",
      },
    },
    de: {
      title: "Pedro's Tech - KI-Plattform",
      description:
        "Entwickeln und starten Sie KI-Lösungen mit beispielloser Geschwindigkeit",

      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
          fr: `${baseUrl}/fr`,
          pt: `${baseUrl}/pt`,
          zh: `${baseUrl}/zh`,
          ar: `${baseUrl}/ar`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - KI-Plattform",
        description:
          "Entwickeln und starten Sie KI-Lösungen mit beispielloser Geschwindigkeit",
        url: currentUrl,
        locale: "de_DE",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - KI-Plattform",
        description:
          "Entwickeln und starten Sie KI-Lösungen mit beispielloser Geschwindigkeit",
      },
    },
    pt: {
      title: "Pedro's Tech - Plataforma de IA",
      description:
        "Construa e lance soluções de IA com velocidade sem precedentes",

      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
          fr: `${baseUrl}/fr`,
          de: `${baseUrl}/de`,
          zh: `${baseUrl}/zh`,
          ar: `${baseUrl}/ar`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - Plataforma de IA",
        description:
          "Construa e lance soluções de IA com velocidade sem precedentes",
        url: currentUrl,
        locale: "pt_BR",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - Plataforma de IA",
        description:
          "Construa e lance soluções de IA com velocidade sem precedentes",
      },
    },
    zh: {
      title: "Pedro's Tech - 人工智能平台",
      description: "以前所未有的速度构建和推出人工智能解决方案",

      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
          fr: `${baseUrl}/fr`,
          de: `${baseUrl}/de`,
          pt: `${baseUrl}/pt`,
          ar: `${baseUrl}/ar`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - 人工智能平台",
        description: "以前所未有的速度构建和推出人工智能解决方案",
        url: currentUrl,
        locale: "zh_CN",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - 人工智能平台",
        description: "以前所未有的速度构建和推出人工智能解决方案",
      },
    },
    ar: {
      title: "Pedro's Tech - منصة الذكاء الاصطناعي",
      description: "بناء وإطلاق حلول الذكاء الاصطناعي بسرعة غير مسبوقة",

      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
          fr: `${baseUrl}/fr`,
          de: `${baseUrl}/de`,
          pt: `${baseUrl}/pt`,
          zh: `${baseUrl}/zh`,
        },
      },
      openGraph: {
        title: "Pedro's Tech - منصة الذكاء الاصطناعي",
        description: "بناء وإطلاق حلول الذكاء الاصطناعي بسرعة غير مسبوقة",
        url: currentUrl,
        locale: "ar_SA",
        type: "website",
        siteName: "Pedro's Tech",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pedro's Tech - منصة الذكاء الاصطناعي",
        description: "بناء وإطلاق حلول الذكاء الاصطناعي بسرعة غير مسبوقة",
      },
    },
  };

  if (!locales.includes(locale as any)) {
    notFound();
  }

  return metadata[locale as keyof typeof metadata] || metadata.en;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <StructuredData locale={locale} />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
