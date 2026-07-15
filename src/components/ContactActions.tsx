import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";

export function ContactActions({ locale, stacked = false }: { locale: Locale; stacked?: boolean }) {
  const dict = getDictionary(locale);

  return (
    <div className={`contact-actions ${stacked ? "is-stacked" : ""}`}>
      <a className="button button-primary" href={contact.phoneHref}>
        <Phone aria-hidden="true" size={18} />
        {dict.actions.callNow}
      </a>
      <a className="button button-secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={18} />
        {dict.actions.whatsapp}
      </a>
      <a className="button button-ghost" href={contact.emailHref}>
        <Mail aria-hidden="true" size={18} />
        {dict.actions.email}
      </a>
    </div>
  );
}
