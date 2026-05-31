import { Metadata } from "next";

export interface SEOMetadata extends Metadata {
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    creator?: string;
    images?: string[];
  };
}

export const generateSEOMetadata = (
  title: string,
  description: string,
  path: string = "",
): SEOMetadata => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pedrostech.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url,
      siteName: "Pedro's Tech",

      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@pedrostech",
    },
  };
};

export const generateStructuredData = (
  type: "organization" | "localbusiness" | "website" = "organization",
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pedrostech.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type":
      type === "organization"
        ? "Organization"
        : type === "localbusiness"
          ? "LocalBusiness"
          : "WebSite",
    name: "Pedro's Tech",
    url: baseUrl,
    description: "AI platform for building and shipping solutions",
    email: "contact@pedrostech.com",
    sameAs: [
      "https://twitter.com/pedrostech",
      "https://linkedin.com/company/pedrostech",
      "https://github.com/pedrostech",
    ],
  };

  if (type === "localbusiness") {
    return {
      ...structuredData,
      address: {
        "@type": "PostalAddress",
        streetAddress: "San Francisco, CA",
        addressCountry: "US",
      },
    };
  }

  return structuredData;
};
