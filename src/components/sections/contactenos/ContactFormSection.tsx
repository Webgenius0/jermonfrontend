"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactForm,
  type ContactFormValues,
} from "@/data/pages/contactenos";

const inputClassName =
  "w-full rounded-lg border border-brand-gray/60 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-muted/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold";

export default function ContactFormSection() {
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
    <section className="bg-brand-cream py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {contactForm.title}
          </h2>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            {contactForm.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-brand-gold/30 bg-white p-6 text-center text-brand-dark">
            <p className="font-semibold">{contactForm.successMessage}</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-brand-dark">
                  {contactForm.fields.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={inputClassName}
                  {...register("name", { required: "El nombre es obligatorio" })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-brand-dark">
                  {contactForm.fields.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={inputClassName}
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Introduzca un correo válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-brand-dark">
                  {contactForm.fields.phone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  className={inputClassName}
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-brand-dark">
                  {contactForm.fields.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className={inputClassName}
                  {...register("subject", { required: "El asunto es obligatorio" })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-brand-dark">
                {contactForm.fields.message}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                className={`${inputClassName} resize-y`}
                {...register("message", {
                  required: "El mensaje es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El mensaje debe tener al menos 10 caracteres",
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[180px] rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light disabled:opacity-60"
              >
                {contactForm.submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
