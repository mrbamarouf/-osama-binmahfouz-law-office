import Image from "next/image";
import type { Metadata } from "next";
import { ContactActions } from "@/components/ContactActions";
import { PageHero } from "@/components/PageHero";
import { contact, identity, pages } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, title: pages.about[locale], path: "/about", image: "/images/legal-majlis-v3.webp" });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.pages.aboutTitle} eyebrow={identity.practice[locale]}>
        <div className="about-paragraphs">
          {dict.home.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageHero>
      <section className="about-detail section-block">
        <div className="about-detail-copy">
          <h2>{identity.name[locale]}</h2>
          <p>{identity.role[locale]}</p>
          <div className="fact-list">
            <div><span>{contact.licenseDisplay[locale]}</span></div>
            <div><span>{contact.city[locale]}</span></div>
            <div><a dir="ltr" href={contact.phoneHref}>{contact.phoneDisplay}</a></div>
            <div><a dir="ltr" href={contact.emailHref}>{contact.email}</a></div>
          </div>
          <ContactActions locale={locale} />
        </div>
        <div className="about-detail-image">
          <Image
            src="/images/legal-majlis-v3.webp"
            alt={locale === "ar" ? "غرفة اجتماع قانونية هادئة بلا أشخاص" : "Quiet legal meeting room without people"}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      </section>
    </>
  );
}
