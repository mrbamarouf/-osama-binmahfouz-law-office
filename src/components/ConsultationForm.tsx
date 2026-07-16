"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact, services } from "@/data/site";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";

const WHATSAPP_NUMBER = "966505608181";

type FieldName = "name" | "phone" | "email" | "service" | "message" | "privacy";
type FormErrors = Partial<Record<FieldName, string>>;

export function ConsultationForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const serviceSlug = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const preferred = String(formData.get("preferred") ?? "phone");
    const privacyAccepted = formData.get("privacy") === "on";

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = dict.form.errors.name;
    if (!phone) nextErrors.phone = dict.form.errors.phone;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = dict.form.errors.email;
    }
    if (!serviceSlug) nextErrors.service = dict.form.errors.service;
    if (!message) nextErrors.message = dict.form.errors.message;
    if (!privacyAccepted) nextErrors.privacy = dict.form.errors.privacy;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    const selectedService = services.find((service) => service.slug === serviceSlug);
    const serviceLabel = selectedService?.title[locale] ?? serviceSlug;
    const preferredLabels: Record<string, string> = {
      phone: dict.form.preferredPhone,
      whatsapp: dict.form.preferredWhatsapp,
      email: dict.form.preferredEmail
    };
    const preferredLabel = preferredLabels[preferred] ?? preferred;

    const whatsappMessage =
      locale === "ar"
        ? [
            "طلب استشارة جديد عبر الموقع",
            "",
            `الاسم: ${name}`,
            `رقم الجوال: ${phone}`,
            `البريد الإلكتروني: ${email}`,
            `الخدمة المطلوبة: ${serviceLabel}`,
            `طريقة التواصل المفضلة: ${preferredLabel}`,
            `تفاصيل الطلب: ${message}`,
            "",
            "المصدر: obmlawfirm.com"
          ].join("\n")
        : [
            "New Consultation Request",
            "",
            `Name: ${name}`,
            `Phone Number: ${phone}`,
            `Email: ${email}`,
            `Required Service: ${serviceLabel}`,
            `Preferred Contact Method: ${preferredLabel}`,
            `Request Details: ${message}`,
            "",
            "Source: obmlawfirm.com"
          ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    const openedWindow = window.open(whatsappUrl, "_blank");
    if (openedWindow) {
      openedWindow.opener = null;
    } else {
      window.location.href = whatsappUrl;
      return;
    }

    window.setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <div className="consultation-card">
      <div className="consultation-card-heading">
        <h2>{dict.form.title}</h2>
        <a className="button button-secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          {dict.actions.whatsapp}
        </a>
      </div>
      <form className="consultation-form" onSubmit={onSubmit} noValidate>
        <label>
          <span>{dict.form.fullName}</span>
          <input name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "consultation-name-error" : undefined} />
          {errors.name ? <span className="field-error" id="consultation-name-error">{errors.name}</span> : null}
        </label>
        <label>
          <span>{dict.form.phone}</span>
          <input name="phone" type="tel" dir="ltr" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "consultation-phone-error" : undefined} />
          {errors.phone ? <span className="field-error" id="consultation-phone-error">{errors.phone}</span> : null}
        </label>
        <label>
          <span>{dict.form.email}</span>
          <input name="email" type="email" dir="ltr" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "consultation-email-error" : undefined} />
          {errors.email ? <span className="field-error" id="consultation-email-error">{errors.email}</span> : null}
        </label>
        <label>
          <span>{dict.form.service}</span>
          <select name="service" required defaultValue="" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "consultation-service-error" : undefined}>
            <option value="" disabled>{dict.form.chooseService}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.title[locale]}</option>
            ))}
          </select>
          {errors.service ? <span className="field-error" id="consultation-service-error">{errors.service}</span> : null}
        </label>
        <label className="field-wide">
          <span>{dict.form.message}</span>
          <textarea name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "consultation-message-error" : undefined} />
          {errors.message ? <span className="field-error" id="consultation-message-error">{errors.message}</span> : null}
        </label>
        <fieldset className="field-wide contact-methods">
          <legend>{dict.form.preferred}</legend>
          <label><input type="radio" name="preferred" value="phone" defaultChecked /> {dict.form.preferredPhone}</label>
          <label><input type="radio" name="preferred" value="whatsapp" /> {dict.form.preferredWhatsapp}</label>
          <label><input type="radio" name="preferred" value="email" /> {dict.form.preferredEmail}</label>
        </fieldset>
        <div className="field-wide checkbox-group">
          <label className="checkbox-field">
            <input name="privacy" type="checkbox" required aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "consultation-privacy-error" : undefined} />
            <span>{dict.form.privacy}</span>
          </label>
          {errors.privacy ? <span className="field-error" id="consultation-privacy-error">{errors.privacy}</span> : null}
        </div>
        <button className="button button-primary field-wide" type="submit" disabled={isSubmitting}>{dict.actions.submit}</button>
      </form>
    </div>
  );
}
