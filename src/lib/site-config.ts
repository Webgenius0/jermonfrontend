import { Language } from "@/context/LanguageContext";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const siteConfig = {
  name: "BAGIA",
  description:
    "Logistics company in Santo Domingo specializing in international transport and air and sea freight services.",
  url: "https://bagiard.com",
  email: "info@bagiard.com",
  phone: "+1 (809) 425-2964",
  whatsapp: "http://wa.me/18094252964",
  address:
    "Av. Gustavo Mejía Ricart No. 271, La Castellana, Santo Domingo, D.N.",
  logo: "/images/logo.png",
  logoInverted:
    "https://bagiard.com/wp-content/uploads/2024/01/BAGIA-Inverted-Color-2.png",
  rnc: "RNC: 1-33-55549-2 | Commercial Registry No. 216534",
};

export function getMainNavigation(lang: Language): NavItem[] {
  switch (lang) {
    case "es":
      return [
        { label: "Inicio", href: "/" },
        {
          label: "Servicios",
          children: [
            { label: "Concierjería de Compras en Europa", href: "/shopping-concierge" },
            { label: "Comercialización Internacional", href: "/international-marketing" },
            { label: "Servicios Bajo Demanda", href: "/on-demand-services" },
          ],
        },
        { label: "Ofertas y Suscripciones", href: "/offers-and-subscriptions" },
        {
          label: "Nosotros",
          children: [
            { label: "Mercado Mundial", href: "/global-market" },
            { label: "¿Por qué Nosotros?", href: "/why-us" },
            { label: "Quiénes Somos", href: "/about-us" },
          ],
        },
        { label: "Contáctenos", href: "/contact-us" },
      ];
    case "fr":
      return [
        { label: "Accueil", href: "/" },
        {
          label: "Services",
          children: [
            { label: "Conciergerie d'Achats en Europe", href: "/shopping-concierge" },
            { label: "Commercialisation Internationale", href: "/international-marketing" },
            { label: "Services à la Demande", href: "/on-demand-services" },
          ],
        },
        { label: "Offres & Abonnements", href: "/offers-and-subscriptions" },
        {
          label: "À Propos",
          children: [
            { label: "Marché Mondial", href: "/global-market" },
            { label: "Pourquoi Nous", href: "/why-us" },
            { label: "Qui Sommes-Nous", href: "/about-us" },
          ],
        },
        { label: "Contactez-Nous", href: "/contact-us" },
      ];
    case "en":
    default:
      return [
        { label: "Home", href: "/" },
        {
          label: "Services",
          children: [
            { label: "Europe Shopping Concierge", href: "/shopping-concierge" },
            { label: "International Marketing", href: "/international-marketing" },
            { label: "On-Demand Services", href: "/on-demand-services" },
          ],
        },
        { label: "Offers & Subscriptions", href: "/offers-and-subscriptions" },
        {
          label: "About",
          children: [
            { label: "Global Market", href: "/global-market" },
            { label: "Why Us", href: "/why-us" },
            { label: "About Us", href: "/about-us" },
          ],
        },
        { label: "Contact Us", href: "/contact-us" },
      ];
  }
}

export function getNavButtons(lang: Language) {
  switch (lang) {
    case "es":
      return { followUp: "Seguimiento", login: "Área Cliente", logout: "Cerrar Sesión" };
    case "fr":
      return { followUp: "Suivi de Commande", login: "Espace Client", logout: "Déconnexion" };
    case "en":
    default:
      return { followUp: "Follow-Up", login: "Client Area", logout: "Sign Out" };
  }
}


export function getFooterQuickLinks(lang: Language): NavLink[] {
  switch (lang) {
    case "es":
      return [
        { label: "Inicio", href: "/" },
        { label: "Comercialización internacional", href: "/international-marketing" },
        { label: "Concierjería de compras en Europa", href: "/shopping-concierge" },
        { label: "Servicios bajo demanda", href: "/on-demand-services" },
        { label: "Presupuesto instantáneo", href: "/on-demand-services" },
        { label: "Ofertas y suscripciones", href: "/offers-and-subscriptions" },
        { label: "Siga su pedido", href: "/order-tracking" },
        { label: "Contáctenos", href: "/contact-us" },
        { label: "Un mercado mundial", href: "/global-market" },
        { label: "¿Por qué nosotros?", href: "/why-us" },
        { label: "Quiénes somos", href: "/about-us" },
      ];
    case "fr":
      return [
        { label: "Accueil", href: "/" },
        { label: "Commercialisation internationale", href: "/international-marketing" },
        { label: "Conciergerie d'achats en Europe", href: "/shopping-concierge" },
        { label: "Services à la demande", href: "/on-demand-services" },
        { label: "Devis instantané", href: "/on-demand-services" },
        { label: "Offres et abonnements", href: "/offers-and-subscriptions" },
        { label: "Suivre votre commande", href: "/order-tracking" },
        { label: "Contactez-nous", href: "/contact-us" },
        { label: "Un marché mondial", href: "/global-market" },
        { label: "Pourquoi nous?", href: "/why-us" },
        { label: "Qui sommes-nous", href: "/about-us" },
      ];
    case "en":
    default:
      return [
        { label: "Start", href: "/" },
        { label: "International marketing", href: "/international-marketing" },
        { label: "Europe Shopping Concierge", href: "/shopping-concierge" },
        { label: "On-Demand Services", href: "/on-demand-services" },
        { label: "Instant quote", href: "/on-demand-services" },
        { label: "Offers and Subscriptions", href: "/offers-and-subscriptions" },
        { label: "Track your order", href: "/order-tracking" },
        { label: "Contact us", href: "/contact-us" },
        { label: "A Global Marketplace", href: "/global-market" },
        { label: "Why us?", href: "/why-us" },
        { label: "Who we are", href: "/about-us" },
      ];
  }
}

export function getFooterLegalLinks(lang: Language): NavLink[] {
  switch (lang) {
    case "es":
      return [
        { label: "AVISOS LEGALES", href: "/legal-notices" },
        { label: "POLÍTICA DE PRIVACIDAD", href: "/privacy-policy" },
        { label: "CONDICIONES GENERALES DE VENTA", href: "/terms-of-sale" },
        { label: "CONDICIONES GENERALES DE USO", href: "/terms-of-use" },
      ];
    case "fr":
      return [
        { label: "MENTIONS LÉGALES", href: "/legal-notices" },
        { label: "POLITIQUE DE CONFIDENTIALITÉ", href: "/privacy-policy" },
        { label: "CONDITIONS GÉNÉRALES DE VENTE", href: "/terms-of-sale" },
        { label: "CONDITIONS GÉNÉRALES D'UTILISATION", href: "/terms-of-use" },
      ];
    case "en":
    default:
      return [
        { label: "LEGAL NOTICES", href: "/legal-notices" },
        { label: "PRIVACY POLICY", href: "/privacy-policy" },
        { label: "GENERAL TERMS AND CONDITIONS OF SALE", href: "/terms-of-sale" },
        { label: "GENERAL CONDITIONS OF USE", href: "/terms-of-use" },
      ];
  }
}

export const mainNavigation = getMainNavigation("en");
export const footerQuickLinks = getFooterQuickLinks("en");
export const footerLegalLinks = getFooterLegalLinks("en");


export const pages = {
  home: { title: "Home", path: "/" },
  concierjeria: {
    title: "Europe Shopping Concierge",
    path: "/shopping-concierge",
  },
  comercializacion: {
    title: "International Marketing",
    path: "/international-marketing",
  },
  serviciosBajoDemanda: {
    title: "On-Demand Services",
    path: "/on-demand-services",
  },
  ofertas: {
    title: "Offers & Subscriptions",
    path: "/offers-and-subscriptions",
  },
  mercadoMundial: {
    title: "Global Market",
    path: "/global-market",
  },
  porqueNosotros: {
    title: "Why Us",
    path: "/why-us",
  },
  quienesSomos: { title: "About Us", path: "/about-us" },
  contactenos: { title: "Contact Us", path: "/contact-us" },
  seguimiento: { title: "Track Order", path: "/order-tracking" },
  mencionesLegales: { title: "Legal Notices", path: "/legal-notices" },
  politicaPrivacidad: { title: "Privacy Policy", path: "/privacy-policy" },
  cgv: { title: "Terms of Sale", path: "/terms-of-sale" },
  condicionesUso: {
    title: "Terms of Use",
    path: "/terms-of-use",
  },
} as const;

