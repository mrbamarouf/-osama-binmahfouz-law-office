"use client";

import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { contact, pages } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { localizedPath, swapLocale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { Logo } from "@/components/Logo";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { label: pages.home[locale], href: localizedPath(locale) },
      { label: pages.about[locale], href: localizedPath(locale, "/about") },
      { label: pages.services[locale], href: localizedPath(locale, "/services") },
      { label: pages.why[locale], href: `${localizedPath(locale)}#why-us` },
      { label: pages.contact[locale], href: localizedPath(locale, "/contact") }
    ],
    [locale]
  );

  const nextLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = swapLocale(pathname, nextLocale);
  const switchLabel = nextLocale === "ar" ? "AR" : "EN";

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      setScrolled(y > 24);
      if (delta > 6) {
        setHidden(y > 96 && y > lastY && !open);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const persistLanguage = (value: Locale) => {
    document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000; samesite=lax`;
    window.localStorage.setItem("preferred-locale", value);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
      <div className="header-inner">
        <Logo locale={locale} />
        <nav
          className="desktop-nav"
          dir={locale === "ar" ? "rtl" : "ltr"}
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={switchHref} hrefLang={nextLocale} onClick={() => persistLanguage(nextLocale)}>
            <span className="language-short" aria-hidden="true">{switchLabel}</span>
            <span className="language-full">{dict.nav.switchTo}</span>
          </Link>
          <Link className="button button-primary header-cta" href={localizedPath(locale, "/contact")}>
            {dict.nav.request}
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={dict.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" size={22} />
            <span>{dict.nav.menu}</span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <Logo locale={locale} variant="full" />
            <button className="icon-button" type="button" onClick={() => setOpen(false)}>
              <X aria-hidden="true" size={24} />
              <span className="sr-only">{dict.nav.close}</span>
            </button>
          </div>
          <nav
            className="mobile-nav"
            dir={locale === "ar" ? "rtl" : "ltr"}
            aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile navigation"}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href={switchHref} hrefLang={nextLocale} onClick={() => {
              persistLanguage(nextLocale);
              setOpen(false);
            }}>
              {dict.nav.switchTo}
            </Link>
          </nav>
          <div className="mobile-menu-contact">
            <Link className="button button-primary mobile-menu-request" href={localizedPath(locale, "/contact")} onClick={() => setOpen(false)}>
              {dict.nav.request}
            </Link>
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} />
              {dict.actions.whatsapp}
            </a>
            <a className="button button-secondary" href={contact.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              {dict.actions.callNow}
            </a>
            <a className="button button-ghost" href={contact.emailHref}>
              <Mail aria-hidden="true" size={18} />
              {dict.actions.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
