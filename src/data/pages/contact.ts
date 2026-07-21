import { Language } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export const contactPage = {
  slug: "contact-us",
  path: "/contact-us",
  title: "Contact Us",
  metaDescription:
    "Contact BAGIA RD. Schedule an appointment and a member of our team will help you understand your needs.",
};

export function getContactForm(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Envíe un mensaje directo",
        title: "Envíenos un mensaje",
        subtitle: "Complete el formulario y le responderemos a la brevedad.",
        successTitle: "¡Mensaje enviado con éxito!",
        sendingLabel: "Enviando...",
        optionalLabel: "(Opcional)",
        fields: {
          name: "Nombre completo",
          email: "Correo electrónico",
          phone: "Teléfono",
          subject: "Asunto",
          message: "Mensaje",
        },
        placeholders: {
          name: "Su nombre completo",
          email: "nombre@ejemplo.com",
          phone: "+1 (809) 000-0000",
          subject: "Ingrese el asunto...",
          message: "Describa su solicitud...",
        },
        validation: {
          nameRequired: "El nombre es obligatorio",
          emailRequired: "El correo es obligatorio",
          emailInvalid: "Ingrese un correo válido",
          subjectRequired: "El asunto es obligatorio",
          messageRequired: "El mensaje es obligatorio",
        },
        submitLabel: "Enviar mensaje",
        successMessage: "Gracias por contactarnos. Hemos recibido su mensaje y responderemos pronto.",
        sendAnotherLabel: "Enviar otro mensaje",
      };
    case "fr":
      return {
        eyebrow: "Envoyez un message direct",
        title: "Envoyez-nous un message",
        subtitle: "Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.",
        successTitle: "Message envoyé avec succès !",
        sendingLabel: "Envoi en cours...",
        optionalLabel: "(Facultatif)",
        fields: {
          name: "Nom complet",
          email: "Adresse e-mail",
          phone: "Téléphone",
          subject: "Sujet",
          message: "Message",
        },
        placeholders: {
          name: "Votre nom complet",
          email: "nom@exemple.com",
          phone: "+1 (809) 000-0000",
          subject: "Saisissez le sujet...",
          message: "Décrivez votre demande...",
        },
        validation: {
          nameRequired: "Le nom est requis",
          emailRequired: "L'e-mail est requis",
          emailInvalid: "Veuillez saisir un e-mail valide",
          subjectRequired: "Le sujet est requis",
          messageRequired: "Le message est requis",
        },
        submitLabel: "Envoyer le message",
        successMessage: "Merci de nous avoir contactés. Nous avons bien reçu votre message.",
        sendAnotherLabel: "Envoyer un autre message",
      };
    case "en":
    default:
      return {
        eyebrow: "Send a Direct Message",
        title: "Send us a message",
        subtitle:
          "Fill out the form and we will get back to you as soon as possible.",
        successTitle: "Message Sent Successfully!",
        sendingLabel: "Sending...",
        optionalLabel: "(Optional)",
        fields: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          name: "Your Full Name",
          email: "name@example.com",
          phone: "+1 (809) 000-0000",
          subject: "Enter subject...",
          message: "Describe your request...",
        },
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          subjectRequired: "Subject is required",
          messageRequired: "Message is required",
        },
        submitLabel: "Send message",
        successMessage:
          "Thank you for contacting us. We have received your message and will respond soon.",
        sendAnotherLabel: "Send another message",
      };
  }
}

export const contactForm = getContactForm("en");
export const contactInfo = {
  title: "Schedule an appointment",
  subtitle:
    "Contact us and a member of our team will help you understand your needs.",
  items: [
    {
      id: "mail",
      label: "Mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      id: "phone",
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      id: "address",
      label: "Address",
      value:
        "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, Dominican Republic",
    },
  ],
  mapQuery: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, Dominican Republic",
};

export function getContactInfo(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Programe una cita",
        subtitle:
          "Contáctenos y un miembro de nuestro equipo le ayudará a entender sus necesidades.",
        items: [
          {
            id: "mail",
            label: "Correo",
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
          },
          {
            id: "phone",
            label: "Teléfono",
            value: siteConfig.phone,
            href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
          },
          {
            id: "address",
            label: "Dirección",
            value: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, República Dominicana",
          },
        ],
        mapQuery: contactInfo.mapQuery,
      };
    case "fr":
      return {
        title: "Prenez rendez-vous",
        subtitle:
          "Contactez-nous et un membre de notre équipe vous aidera à comprendre vos besoins.",
        items: [
          {
            id: "mail",
            label: "E-mail",
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
          },
          {
            id: "phone",
            label: "Téléphone",
            value: siteConfig.phone,
            href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
          },
          {
            id: "address",
            label: "Adresse",
            value: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, République Dominicaine",
          },
        ],
        mapQuery: contactInfo.mapQuery,
      };
    case "en":
    default:
      return contactInfo;
  }
}

export function getContactHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Mesa de clientes privados 24/7 • Santo Domingo y París",
        title: "Contacte a BAGIA",
        titleHighlight: "Conciergería Privada y Mesa Logística",
        description:
          "Conéctese directamente con nuestro equipo de clientes privados para sourcing de lujo en Europa, adquisiciones de arte, embalaje personalizado y asistencia de carga internacional.",
        whatsappLabel: "WhatsApp",
        phoneLabel: "Teléfono",
        emailLabel: "Correo",
      };
    case "fr":
      return {
        badge: "Bureau clients privés 24/7 • Saint-Domingue & Paris",
        title: "Contactez BAGIA",
        titleHighlight: "Conciergerie Privée & Bureau Logistique",
        description:
          "Contactez directement notre équipe clients privés pour le sourcing de luxe en Europe, acquisitions d'art, emballage sur mesure et assistance fret international.",
        whatsappLabel: "WhatsApp",
        phoneLabel: "Téléphone",
        emailLabel: "E-mail",
      };
    case "en":
    default:
      return {
        badge: "24/7 Private Client Desk • Santo Domingo & Paris",
        title: "Contact BAGIA",
        titleHighlight: "Private Concierge & Logistics Desk",
        description:
          "Connect directly with our private client team for luxury sourcing in Europe, art acquisitions, custom packaging, and international freight assistance.",
        whatsappLabel: "WhatsApp",
        phoneLabel: "Phone",
        emailLabel: "Email",
      };
  }
}

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

