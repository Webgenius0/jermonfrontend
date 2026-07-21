"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getContactForm,
  type ContactFormValues,
} from "@/data/pages/contact";
import { useLanguage } from "@/context/LanguageContext";

const inputClassName =
  "w-full rounded-xl border border-brand-gold/20 bg-white px-5 py-3.5 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/50 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 shadow-sm";

export default function ContactFormSection() {
  const { language } = useLanguage();
  const formData = getContactForm(language);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.info("Contact form submission:", data);
    setSubmitted(true);
    reset();
  }

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {formData.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {formData.title}
          </h2>
          <p className="mt-3 text-sm text-brand-muted md:text-base max-w-xl mx-auto">
            {formData.subtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        {submitted ? (
          <div className="mt-10 rounded-3xl border border-brand-gold/30 bg-white p-10 text-center text-brand-dark shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-4">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark">{formData.successTitle}</h3>
            <p className="mt-2 text-sm text-brand-muted font-medium">{formData.successMessage}</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full bg-brand-charcoal px-6 py-2.5 text-xs font-bold text-brand-gold hover:bg-brand-black cursor-pointer"
            >
              {formData.sendAnotherLabel}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 rounded-3xl border border-brand-gold/25 bg-white p-8 md:p-12 shadow-xl space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  {formData.fields.name} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={formData.placeholders.name}
                  className={inputClassName}
                  {...register("name", { required: formData.validation.nameRequired })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  {formData.fields.email} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={formData.placeholders.email}
                  className={inputClassName}
                  {...register("email", {
                    required: formData.validation.emailRequired,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: formData.validation.emailInvalid,
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  {formData.fields.phone} {formData.optionalLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder={formData.placeholders.phone}
                  className={inputClassName}
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  {formData.fields.subject} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder={formData.placeholders.subject}
                  className={inputClassName}
                  {...register("subject", { required: formData.validation.subjectRequired })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-dark">
                {formData.fields.message} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder={formData.placeholders.message}
                className={`${inputClassName} resize-y`}
                {...register("message", {
                  required: formData.validation.messageRequired,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-10 py-4 text-sm font-extrabold text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? formData.sendingLabel : formData.submitLabel}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
