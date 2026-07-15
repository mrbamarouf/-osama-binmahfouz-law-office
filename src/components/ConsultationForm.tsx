"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact, services } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";

type FormErrors = Partial<Record<"name" | "phone" | "email" | "service" | "message" | "privacy", string>>;

export function ConsultationForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const requiredMessage = locale === "ar" ? "هذا الحقل مطلوب." : "This field is required.";
  const emailMessage = locale === "ar" ? "يرجى إدخال بريد إلكتروني صحيح." : "Please enter a valid email address.";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: FormErrors = {};
    const email = String(data.get("email") || "").trim();

    if (!String(data.get("name") || "").trim()) nextErrors.name = requiredMessage;
    if (!String(data.get("phone") || "").trim()) nextErrors.phone = requiredMessage;
    if (!String(data.get("service") || "").trim()) nextErrors.service = requiredMessage;
    if (!String(data.get("message") || "").trim()) nextErrors.message = requiredMessage;
    if (!data.get("privacy")) nextErrors.privacy = requiredMessage;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = emailMessage;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setSent(false);
      return;
    }

    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="consultation-card">
      <div className="consultation-card-heading">
        <h2>{dict.form.title}</h2>
        <p>{dict.form.note}</p>
        <a className="button button-secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          {dict.actions.whatsapp}
        </a>
      </div>
      <form className="consultation-form" onSubmit={onSubmit} noValidate>
        <label>
          <span>{dict.form.fullName}</span>
          <input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? <small className="field-error" id="name-error">{errors.name}</small> : null}
        </label>
        <label>
          <span>{dict.form.phone}</span>
          <input name="phone" type="tel" inputMode="tel" dir="ltr" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone ? <small className="field-error" id="phone-error">{errors.phone}</small> : null}
        </label>
        <label>
          <span>{dict.form.email}</span>
          <input name="email" type="email" inputMode="email" dir="ltr" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? <small className="field-error" id="email-error">{errors.email}</small> : null}
        </label>
        <label>
          <span>{dict.form.service}</span>
          <select name="service" defaultValue="" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
            <option value="" disabled>{dict.form.chooseService}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.title[locale]}</option>
            ))}
          </select>
          {errors.service ? <small className="field-error" id="service-error">{errors.service}</small> : null}
        </label>
        <label className="field-wide">
          <span>{dict.form.message}</span>
          <textarea name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message ? <small className="field-error" id="message-error">{errors.message}</small> : null}
        </label>
        <fieldset className="field-wide contact-methods">
          <legend>{dict.form.preferred}</legend>
          <label><input type="radio" name="preferred" value="phone" defaultChecked /> {dict.form.preferredPhone}</label>
          <label><input type="radio" name="preferred" value="whatsapp" /> {dict.form.preferredWhatsapp}</label>
          <label><input type="radio" name="preferred" value="email" /> {dict.form.preferredEmail}</label>
        </fieldset>
        <label className="field-wide checkbox-field">
          <input type="checkbox" name="privacy" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} />
          <span>{dict.form.privacy}</span>
        </label>
        {errors.privacy ? <small className="field-error field-wide" id="privacy-error">{errors.privacy}</small> : null}
        {sent ? <p className="form-success" role="status">{dict.form.success}</p> : null}
        <button className="button button-primary field-wide" type="submit">{dict.actions.submit}</button>
      </form>
    </div>
  );
}
