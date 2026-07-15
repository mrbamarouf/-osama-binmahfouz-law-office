import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { locales } from "@/i18n/routing";
import { identity, seo, siteUrl } from "@/data/site";

type MetadataInput = {
  locale: Locale;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({ locale, title, description, path = "", image = "/brand/osama-logo-og.png" }: MetadataInput): Metadata {
  const localizedTitle = title ? `${title} | ${identity.name[locale]}` : identity.name[locale];
  const localizedDescription = description || seo.description[locale];
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = absoluteUrl(`/${locale}${cleanPath === "/" ? "" : cleanPath}`);
  const isLogoOg = image.includes("osama-logo-og");

  return {
    title: localizedTitle,
    description: localizedDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((item) => [item, absoluteUrl(`/${item}${cleanPath === "/" ? "" : cleanPath}`)]))
    },
    openGraph: {
      title: localizedTitle,
      description: localizedDescription,
      url: canonical,
      siteName: identity.name[locale],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: isLogoOg ? 630 : 800,
          alt: identity.name[locale]
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: localizedTitle,
      description: localizedDescription,
      images: [absoluteUrl(image)]
    },
    keywords: seo.keywords[locale],
    icons: {
      icon: [{ url: "/brand/favicon.png", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/brand/apple-touch-icon.png", type: "image/png", sizes: "180x180" }]
    }
  };
}
