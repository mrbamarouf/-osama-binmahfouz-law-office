"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact, services } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";

export function ConsultationForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
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
      <form className="consultation-form" onSubmit={onSubmit}>
        <label>
          <span>{dict.form.fullName}</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>{dict.form.phone}</span>
          <input name="phone" type="tel" dir="ltr" autoComplete="tel" required />
        </label>
        <label>
          <span>{dict.form.email}</span>
          <input name="email" type="email" dir="ltr" autoComplete="email" />
        </label>
        <label>
          <span>{dict.form.service}</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>{dict.form.chooseService}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.title[locale]}</option>
            ))}
          </select>
        </label>
        <label className="field-wide">
          <span>{dict.form.message}</span>
          <textarea name="message" rows={5} required />
        </label>
        <fieldset className="field-wide contact-methods">
          <legend>{dict.form.preferred}</legend>
          <label><input type="radio" name="preferred" value="phone" defaultChecked /> {dict.form.preferredPhone}</label>
          <label><input type="radio" name="preferred" value="whatsapp" /> {dict.form.preferredWhatsapp}</label>
          <label><input type="radio" name="preferred" value="email" /> {dict.form.preferredEmail}</label>
        </fieldset>
        <label className="field-wide checkbox-field">
          <input type="checkbox" required />
          <span>{dict.form.privacy}</span>
        </label>
        {sent ? <p className="form-success" role="status">{dict.form.success}</p> : null}
        <button className="button button-primary field-wide" type="submit">{dict.actions.submit}</button>
      </form>
    </div>
  );
}
