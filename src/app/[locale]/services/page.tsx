import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pages, services } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, title: pages.services[locale], path: "/services", image: "/images/documents-desk.webp" });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dict = getDictionary(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHero title={dict.pages.servicesTitle} eyebrow={dict.sections.services}>
        <p>{dict.home.servicesLead}</p>
      </PageHero>
      <section className="service-directory section-block">
        {services.map((service, index) => (
          <article className="directory-item" key={service.slug}>
            <div className="directory-image">
              <Image src={service.image} alt={service.title[locale]} fill sizes="(min-width: 1024px) 28vw, 100vw" />
            </div>
            <div className="directory-copy">
              <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title[locale]}</h2>
              <p>{service.summary[locale]}</p>
              <Link className="text-link" href={localizedPath(locale, `/services/${service.slug}`)}>
                {dict.actions.viewService}
                <ArrowIcon aria-hidden="true" size={18} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
