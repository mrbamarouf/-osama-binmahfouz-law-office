"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/routing";
import { contact } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";

export function MobileContactBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".final-cta, .site-footer, .contact-page"));
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-contact-bar ${hidden ? "is-hidden" : ""}`} aria-label={dict.actions.directContact}>
      <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={18} />
        {dict.actions.whatsapp}
      </a>
      <a href={contact.phoneHref}>
        <Phone aria-hidden="true" size={18} />
        {dict.actions.callNow}
      </a>
    </div>
  );
}
