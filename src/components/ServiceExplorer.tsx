"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/routing";
import { services } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";

export function ServiceExplorer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="service-explorer">
      <nav className="service-index" aria-label={dict.sections.services}>
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={localizedPath(locale, `/services/${service.slug}`)}
            className={`service-index-row ${active.slug === service.slug ? "is-active" : ""}`}
            aria-current={active.slug === service.slug ? "true" : undefined}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <span className="service-number" dir="ltr">{String(index + 1).padStart(2, "0")}</span>
            <span className="service-index-title">
              <strong>{service.title[locale]}</strong>
            </span>
          </Link>
        ))}
      </nav>

      <article key={active.slug} className="service-stage" aria-live="polite">
        <div className="service-stage-image">
          <Image
            src={active.image}
            alt={active.title[locale]}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
          />
        </div>
        <div className="service-stage-copy">
          <span className="service-stage-index" dir="ltr">{String(activeIndex + 1).padStart(2, "0")}</span>
          <h3>{active.title[locale]}</h3>
          <p>{active.detail[locale]}</p>
          <Link className="text-link" href={localizedPath(locale, `/services/${active.slug}`)}>
            {dict.actions.viewService}
            <ArrowIcon aria-hidden="true" size={18} />
          </Link>
        </div>
      </article>

      <div className="service-mobile-list" role="list" aria-label={dict.sections.services}>
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <article className={`service-mobile-item ${isActive ? "is-active" : ""}`} key={service.slug}>
              <button
                className="service-mobile-trigger"
                type="button"
                aria-expanded={isActive}
                aria-controls={`service-mobile-${service.slug}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="service-number" dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.title[locale]}</strong>
                <ChevronDown aria-hidden="true" size={18} />
              </button>
              {isActive ? (
                <div className="service-mobile-panel" id={`service-mobile-${service.slug}`}>
                  <div className="service-mobile-image">
                    <Image
                      src={service.image}
                      alt={service.title[locale]}
                      fill
                      sizes="(max-width: 767px) 100vw, 0vw"
                    />
                  </div>
                  <p>{service.summary[locale]}</p>
                  <Link className="text-link" href={localizedPath(locale, `/services/${service.slug}`)}>
                    {dict.actions.viewService}
                    <ArrowIcon aria-hidden="true" size={18} />
                  </Link>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
