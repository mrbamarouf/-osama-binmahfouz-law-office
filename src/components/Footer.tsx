import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, identity, pages, services } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { Logo } from "@/components/Logo";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo locale={locale} />
          <p>{identity.role[locale]}</p>
          <p>{contact.licenseDisplay[locale]}</p>
        </div>
        <div>
          <h2>{pages.services[locale]}</h2>
          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={localizedPath(locale, `/services/${service.slug}`)}>{service.title[locale]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{dict.sections.contactData}</h2>
          <ul className="footer-contact">
            <li>
              <Phone aria-hidden="true" size={17} />
              <a dir="ltr" href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <Mail aria-hidden="true" size={17} />
              <a dir="ltr" href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" size={17} />
              <span>{contact.city[locale]}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>{dict.sections.legalPages}</h2>
          <ul className="footer-links">
            <li><Link href={localizedPath(locale, "/privacy")}>{pages.privacy[locale]}</Link></li>
            <li><Link href={localizedPath(locale, "/legal-disclaimer")}>{pages.disclaimer[locale]}</Link></li>
            <li><Link href={localizedPath(locale, "/contact")}>{pages.contact[locale]}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{identity.name[locale]}</span>
        <span>{dict.footer.rights} © {year}</span>
      </div>
    </footer>
  );
}
