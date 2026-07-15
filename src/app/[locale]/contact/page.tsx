import type { Metadata } from "next";
import Image from "next/image";
import { ContactActions } from "@/components/ContactActions";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PageHero } from "@/components/PageHero";
import { contact, pages } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, title: pages.contact[locale], path: "/contact", image: "/brand/osama-logo-og.png" });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.pages.contactTitle} eyebrow={dict.sections.finalContact} />
      <section className="contact-page section-block">
        <div className="contact-panel">
          <Image
            src="/brand/osama-logo-official.svg"
            alt=""
            width={489}
            height={488}
            className="contact-brand-logo"
            style={{ width: "clamp(140px, 16vw, 220px)", height: "auto" }}
            unoptimized
          />
          <h2>{dict.sections.contactData}</h2>
          <ul className="contact-lines">
            <li><span>{dict.actions.callNow}</span><a dir="ltr" href={contact.phoneHref}>{contact.phoneDisplay}</a></li>
            <li><span>{dict.actions.whatsapp}</span><a dir="ltr" href={contact.whatsappHref}>{contact.whatsappDisplay}</a></li>
            <li><span>{dict.actions.email}</span><a dir="ltr" href={contact.emailHref}>{contact.email}</a></li>
            <li><span>{locale === "ar" ? "الموقع" : "Location"}</span><strong>{contact.city[locale]}</strong></li>
          </ul>
          <ContactActions locale={locale} stacked />
        </div>
        <ConsultationForm locale={locale} />
      </section>
    </>
  );
}
