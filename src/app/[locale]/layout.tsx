import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroOverlay } from "@/components/IntroOverlay";
import { MobileContactBar } from "@/components/MobileContactBar";
import { identity, seo } from "@/data/site";
import { getDirection, isLocale, locales, type Locale } from "@/i18n/routing";
import { legalServiceJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-kufi",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {};
  }
  return buildMetadata({
    locale: rawLocale,
    title: identity.practice[rawLocale],
    description: seo.description[rawLocale],
    path: "/"
  });
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dir = getDirection(locale);
  const jsonLd = legalServiceJsonLd(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      data-scroll-behavior="smooth"
      className={`${kufi.variable} ${plexArabic.variable} ${manrope.variable}`}
    >
      <body>
        <IntroOverlay />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
        <MobileContactBar locale={locale} />
      </body>
    </html>
  );
}
