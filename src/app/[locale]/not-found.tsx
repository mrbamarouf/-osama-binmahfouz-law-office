"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getDictionary } from "@/i18n/dictionary";
import { defaultLocale, isLocale, localizedPath, type Locale } from "@/i18n/routing";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale: Locale = isLocale(params?.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="not-found section-block">
      <p className="section-kicker">404</p>
      <h1>{dict.pages.notFoundTitle}</h1>
      <p>{dict.pages.notFoundText}</p>
      <div className="hero-actions">
        <Link className="button button-primary" href={localizedPath(locale)}>
          {locale === "ar" ? "العودة للرئيسية" : "Back Home"}
        </Link>
        <Link className="button button-secondary" href={localizedPath(locale, "/services")}>
          {dict.actions.allServices}
        </Link>
      </div>
    </section>
  );
}
