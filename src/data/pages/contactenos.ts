import { siteConfig } from "@/lib/site-config";

export const contactPage = {
  slug: "contactenos",
  path: "/contactenos",
  title: "Contáctenos",
  metaDescription:
    "Contáctenos en BAGIA RD. Programe una cita y un miembro de nuestro equipo le ayudará a entender sus necesidades.",
};

export const contactHero = {
  title: "Contáctenos",
  image:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
};

export const contactForm = {
  title: "Envíenos un mensaje",
  subtitle:
    "Complete el formulario y nos pondremos en contacto con usted lo antes posible.",
  fields: {
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Mensaje",
  },
  submitLabel: "Enviar mensaje",
  successMessage:
    "Gracias por contactarnos. Hemos recibido su mensaje y le responderemos pronto.",
};

export const contactInfo = {
  title: "Programe una cita",
  subtitle:
    "Contáctenos y un miembro de nuestro equipo le ayudará a entender sus necesidades.",
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

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
