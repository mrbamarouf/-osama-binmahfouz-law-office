import type { Locale } from "@/i18n/routing";
import { contact, identity, services, siteUrl } from "@/data/site";

export function legalServiceJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: identity.name[locale],
    description: identity.practice[locale],
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/brand/osama-logo.png`,
    logo: `${siteUrl}/brand/osama-logo.png`,
    email: contact.email,
    telephone: "+966537515551",
    identifier: contact.licenseDisplay[locale],
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? "جدة" : "Jeddah",
      addressCountry: "SA"
    },
    areaServed: {
      "@type": "City",
      name: locale === "ar" ? "جدة" : "Jeddah"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "ar" ? "الخدمات القانونية" : "Legal Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title[locale],
          description: service.summary[locale]
        }
      }))
    }
  };
}
