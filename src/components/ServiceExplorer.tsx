"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/routing";
import { services } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";

export function ServiceExplorer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(1);
  const active = services[activeIndex];
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="service-explorer">
      <div className="service-list" role="list" aria-label={dict.sections.services}>
        {services.map((service, index) => (
          <button
            key={service.slug}
            className={`service-row ${active.slug === service.slug ? "is-active" : ""}`}
            type="button"
            aria-pressed={active.slug === service.slug}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <span className="service-number" dir="ltr">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <strong>{service.title[locale]}</strong>
              <small>{service.summary[locale]}</small>
            </span>
          </button>
        ))}
      </div>
      <article className="service-feature">
        <div className="service-feature-image">
          <Image
            src={active.image}
            alt={active.title[locale]}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
        <div className="service-feature-copy">
          <span className="service-feature-index" dir="ltr">{String(activeIndex + 1).padStart(2, "0")}</span>
          <h3>{active.title[locale]}</h3>
          <p>{active.detail[locale]}</p>
          <Link className="text-link" href={localizedPath(locale, `/services/${active.slug}`)}>
            {dict.actions.viewService}
            <ArrowIcon aria-hidden="true" size={18} />
          </Link>
        </div>
      </article>
    </div>
  );
}
