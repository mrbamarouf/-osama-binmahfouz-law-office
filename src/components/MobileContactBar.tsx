"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/routing";
import { contact } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";

export function MobileContactBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [blocked, setBlocked] = useState(true);
  const [insideHero, setInsideHero] = useState(true);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      const fallbackTimer = globalThis.setTimeout(() => {
        setBlocked(false);
        setInsideHero(false);
      }, 0);
      return () => globalThis.clearTimeout(fallbackTimer);
    }

    const blockTargets = Array.from(document.querySelectorAll(".final-cta, .site-footer, .contact-page"));
    const heroTargets = Array.from(document.querySelectorAll(".hero-section, .page-hero, .service-detail-hero"));
    const noHeroTimer = heroTargets.length ? null : globalThis.setTimeout(() => setInsideHero(false), 0);
    const blockObserver = new IntersectionObserver(
      (entries) => {
        setBlocked(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
    );
    const heroObserver = new IntersectionObserver(
      (entries) => {
        setInsideHero(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 }
    );

    blockTargets.forEach((target) => blockObserver.observe(target));
    heroTargets.forEach((target) => heroObserver.observe(target));
    return () => {
      if (noHeroTimer) globalThis.clearTimeout(noHeroTimer);
      blockObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
        setTyping(true);
      }
    };
    const onFocusOut = () => setTyping(false);

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div className={`mobile-contact-bar ${blocked || insideHero || typing ? "is-hidden" : ""}`} aria-label={dict.actions.directContact}>
      <a href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label={dict.actions.whatsapp}>
        <MessageCircle aria-hidden="true" size={18} />
        <span className="sr-only">{dict.actions.whatsapp}</span>
      </a>
    </div>
  );
}
