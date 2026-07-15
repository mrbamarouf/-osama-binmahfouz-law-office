import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { contact, services } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, localizedPath, locales, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return buildMetadata({
    locale,
    title: service.title[locale],
    description: service.summary[locale],
    path: `/services/${service.slug}`,
    image: service.image
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const dict = getDictionary(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <Image
            src="/brand/osama-symbol-official.svg"
            alt=""
            width={108}
            height={88}
            className="service-detail-logo"
            unoptimized
          />
          <Link className="text-link" href={localizedPath(locale, "/services")}>
            <ArrowIcon aria-hidden="true" size={18} />
            {dict.actions.backServices}
          </Link>
          <h1>{service.title[locale]}</h1>
          <p>{service.summary[locale]}</p>
          <div className="identity-panel compact">
            <span>{contact.licenseDisplay[locale]}</span>
            <small>{contact.city[locale]}</small>
          </div>
        </div>
        <div className="service-detail-image">
          <Image src={service.image} alt={service.title[locale]} fill sizes="(min-width: 1024px) 48vw, 100vw" priority />
        </div>
      </section>
      <section className="service-detail-body section-block">
        <article>
          <h2>{service.title[locale]}</h2>
          <p>{service.detail[locale]}</p>
          <ContactActions locale={locale} />
        </article>
        <aside>
          <h2>{dict.actions.allServices}</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={localizedPath(locale, `/services/${item.slug}`)}>{item.title[locale]}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
