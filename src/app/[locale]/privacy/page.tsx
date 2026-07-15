import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, title: pages.privacy[locale], path: "/privacy" });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.pages.privacyTitle} eyebrow={pages.privacy[locale]}>
        <p>{dict.legal.privacyIntro}</p>
      </PageHero>
      <section className="legal-content section-block">
        <ul>
          {dict.legal.privacyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
