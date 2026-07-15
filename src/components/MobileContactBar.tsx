import { MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { contact } from "@/data/site";
import { getDictionary } from "@/i18n/dictionary";

export function MobileContactBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="mobile-contact-bar" aria-label={dict.actions.directContact}>
      <a href={contact.phoneHref}>
        <Phone aria-hidden="true" size={18} />
        {dict.actions.callNow}
      </a>
      <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={18} />
        {dict.actions.whatsapp}
      </a>
    </div>
  );
}
