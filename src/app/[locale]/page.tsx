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
  const heroTitle =
    locale === "ar" ? (
      <>
        معك في كل خطوة..
        <br />
        حتى يصل حقك
      </>
    ) : (
      <>
        With you at every step,
        <br />
        until your rights are protected.
      </>
    );
  const closingTitle =
    locale === "ar" ? (
      <>
        ثقتك أمانة..
        <br />
        ورضاك هدفنا
      </>
    ) : (
      <>
        Your trust is our responsibility.
        <br />
        Your satisfaction is our goal.
      </>
    );

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="hero-intro">{dict.home.intro}</p>
            <p className="hero-name">{identity.name[locale]}</p>
            <p className="hero-role">{identity.role[locale]} · {contact.licenseDisplay[locale]}</p>
            <h1>{heroTitle}</h1>
            <p className="hero-support">{coreCopy.support[locale]}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={localizedPath(locale, "/contact")}>
                {dict.actions.requestConsultation}
                <ArrowIcon aria-hidden="true" size={18} />
              </Link>
              <Link className="text-link hero-service-link" href={localizedPath(locale, "/services")}>
                {dict.actions.exploreServices}
                <ArrowIcon aria-hidden="true" size={18} />
              </Link>
            </div>
            <div className="hero-contact" aria-label={dict.actions.directContact}>
              <a href={contact.phoneHref}><Phone aria-hidden="true" size={17} /><span dir="ltr">{contact.phoneDisplay}</span></a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /><span dir="ltr">{contact.whatsappDisplay}</span></a>
              <a href={contact.emailHref}><Mail aria-hidden="true" size={17} /><span dir="ltr">{contact.email}</span></a>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/images/jeddah-courtyard-v3.webp"
            alt={locale === "ar" ? "فناء حجري معاصر في جدة بضوء نهاري وظلال نخيل" : "Contemporary limestone courtyard in Jeddah daylight with palm shadows"}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
          />
        </div>
        <div className="hero-meta" aria-label={locale === "ar" ? "ملخص المكتب" : "Office summary"}>
          <span><strong dir="ltr">07</strong>{dict.sections.selectedServices}</span>
          <span>{contact.city[locale]}</span>
          <span>{contact.licenseDisplay[locale]}</span>
        </div>
      </section>

      <section className="trust-strip" aria-label={dict.sections.selectedServices}>
        <div className="trust-strip-inner">
          {services.map((service, index) => (
            <Link key={service.slug} href={localizedPath(locale, `/services/${service.slug}`)}>
              <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
              {service.title[locale]}
              <ArrowIcon aria-hidden="true" size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-section section-block">
        <div className="quote-visual" aria-hidden="true">
          <Image
            src="/images/mashrabiya-shadow-v3.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
        </div>
        <div className="quote-text">
          <p className="section-kicker">{dict.sections.quote}</p>
          <blockquote>{coreCopy.quote[locale]}</blockquote>
        </div>
      </section>

      <section className="about-section section-block" id="about">
        <div className="about-image">
          <Image
            src="/images/legal-majlis-v3.webp"
            alt={locale === "ar" ? "غرفة اجتماع قانونية معاصرة بلا أشخاص" : "Contemporary legal meeting room without people"}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="about-copy">
          <p className="section-kicker">{dict.sections.about}</p>
          <h2>{locale === "en" ? dict.pages.aboutTitle : identity.practice[locale]}</h2>
          <p>{dict.home.aboutText}</p>
          <div className="office-lines">
            <span>{identity.name[locale]}</span>
            <strong>{identity.role[locale]}</strong>
            <small>{contact.licenseDisplay[locale]}</small>
            <small>{contact.city[locale]}</small>
          </div>
          <Link className="text-link" href={localizedPath(locale, "/about")}>
            {pages.about[locale]}
            <ArrowIcon aria-hidden="true" size={18} />
          </Link>
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
        <div className="why-editorial">
          <div className="why-heading">
            <p className="section-kicker">{dict.sections.reasons}</p>
            <h2>{pages.why[locale]}</h2>
            <p>{dict.home.reasonsLead}</p>
          </div>
          <div className="reason-list">
            {reasons.map((reason, index) => (
              <article key={reason.title.en} className={`reason-line ${index === 2 ? "is-emphasized" : ""}`} tabIndex={0}>
                <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title[locale]}</h3>
                <p>{reason.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section section-block">
        <div className="section-heading journey-heading">
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
              {index === journey.length - 1 ? (
                <Link className="text-link" href={localizedPath(locale, "/contact")}>
                  {dict.actions.requestConsultation}
                  <ArrowIcon aria-hidden="true" size={18} />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta section-block">
        <div>
          <p className="section-kicker">{dict.sections.finalContact}</p>
          <h2>{closingTitle}</h2>
        </div>
        <ContactActions locale={locale} />
      </section>
    </>
  );
}
