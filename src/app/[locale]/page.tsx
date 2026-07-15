import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { contact, coreCopy, identity, journey, pages, reasons, services } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, title: pages.home[locale], path: "/" });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dict = getDictionary(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;
  const [primaryReason, ...supportingReasons] = reasons;

  return (
    <>
      <section className="hero-section">
        <div className="hero-media">
          <Image
            src="/images/atelier-palm-museum.jpg"
            alt={locale === "ar" ? "واجهة معمارية بيضاء مع ظل نخيل وضوء نهاري" : "White architectural facade with palm shade and daylight"}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
          />
        </div>
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="hero-intro">{dict.home.intro}</p>
            <p className="hero-name">{identity.name[locale]}</p>
            <p className="hero-role">{identity.role[locale]} · {contact.licenseDisplay[locale]}</p>
            <h1>{coreCopy.headline[locale]}</h1>
            <p className="hero-support">{coreCopy.support[locale]}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={localizedPath(locale, "/contact")}>
                {dict.actions.requestConsultation}
                <ArrowIcon aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-secondary" href={localizedPath(locale, "/services")}>
                {dict.actions.exploreServices}
              </Link>
            </div>
            <div className="hero-contact" aria-label={dict.actions.directContact}>
              <a href={contact.phoneHref}><Phone aria-hidden="true" size={17} /><span dir="ltr">{contact.phoneDisplay}</span></a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /><span dir="ltr">{contact.whatsappDisplay}</span></a>
              <a href={contact.emailHref}><Mail aria-hidden="true" size={17} /><span dir="ltr">{contact.email}</span></a>
            </div>
          </div>
        </div>
        <div className="hero-services" aria-label={dict.sections.selectedServices}>
          <div className="hero-services-label">
            <span>{dict.sections.selectedServices}</span>
          </div>
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} href={localizedPath(locale, `/services/${service.slug}`)}>
              <span>{service.title[locale]}</span>
              <small>{service.summary[locale]}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-section section-block">
        <div className="quote-text">
          <p className="section-kicker">{dict.sections.quote}</p>
          <blockquote>{coreCopy.quote[locale]}</blockquote>
        </div>
        <div className="quote-image">
          <Image
            src="/images/office-meeting.jpg"
            alt={locale === "ar" ? "غرفة اجتماع قانونية هادئة بلا أشخاص" : "Quiet legal meeting room without people"}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>
      </section>

      <section className="about-section section-block" id="about">
        <div className="about-image">
          <Image
            src="/images/atelier-corridor.jpg"
            alt={locale === "ar" ? "ممر حجري مضاء بظلال هندسية" : "Stone corridor lit by geometric shadows"}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="about-copy">
          <p className="section-kicker">{dict.sections.about}</p>
          <h2>{locale === "en" ? dict.pages.aboutTitle : identity.practice[locale]}</h2>
          <p>{dict.home.aboutText}</p>
          <div className="identity-panel">
            <span>{identity.name[locale]}</span>
            <strong>{identity.role[locale]}</strong>
            <small>{contact.licenseDisplay[locale]}</small>
            <small>{contact.city[locale]}</small>
          </div>
          <p className="fine-note">{dict.home.aboutNote}</p>
        </div>
      </section>

      <section className="services-section section-block" id="services">
        <div className="section-heading">
          <p className="section-kicker">{dict.sections.services}</p>
          <h2>{pages.services[locale]}</h2>
          <p>{dict.home.servicesLead}</p>
        </div>
        <ServiceExplorer locale={locale} />
      </section>

      <section className="reasons-section section-block" id="why-us">
        <div className="section-heading compact">
          <p className="section-kicker">{dict.sections.reasons}</p>
          <h2>{pages.why[locale]}</h2>
          <p>{dict.home.reasonsLead}</p>
        </div>
        <div className="reason-mosaic">
          <article className="reason-tile reason-main">
            <span dir="ltr">01</span>
            <h3>{primaryReason.title[locale]}</h3>
            <p>{primaryReason.text[locale]}</p>
          </article>
          <div className="reason-support">
            {supportingReasons.map((reason, index) => (
              <article key={reason.title.en} className="reason-tile">
                <span dir="ltr">{String(index + 2).padStart(2, "0")}</span>
                <h3>{reason.title[locale]}</h3>
                <p>{reason.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section section-block">
        <div className="section-heading">
          <p className="section-kicker">{dict.sections.journey}</p>
          <h2>{dict.sections.journey}</h2>
          <p>{dict.home.journeyLead}</p>
        </div>
        <div className="journey-track">
          {journey.map((step, index) => (
            <article key={step.title.en}>
              <span dir="ltr">0{index + 1}</span>
              <h3>{step.title[locale]}</h3>
              <p>{step.text[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta section-block">
        <div>
          <p className="section-kicker">{dict.sections.finalContact}</p>
          <h2>{coreCopy.closing[locale]}</h2>
        </div>
        <ContactActions locale={locale} />
      </section>
    </>
  );
}
