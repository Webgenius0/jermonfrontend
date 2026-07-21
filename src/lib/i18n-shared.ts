import { Language } from "@/context/LanguageContext";

export function getPartnerProgramSection(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Programa de socios y afiliados",
        title: "¡Únase a nosotros!",
        cards: [
          {
            title: "Monetice su red",
            description:
              "Conecte coleccionistas, entusiastas del lujo y compradores privados con nuestra conciergería de compras en Europa.",
          },
          {
            title: "Comisiones atractivas",
            description:
              "Obtenga recompensas por referidos en cada adquisición de lujo y obra de arte rara que se sourcee.",
          },
          {
            title: "Respaldo operativo completo",
            description:
              "BAGIA gestiona compras, autenticidad, embalaje, formalidades de exportación y logística.",
          },
        ],
        primaryCta: "Conviértase en socio BAGIA →",
        whatsappCta: "💬 WhatsApp — Mesa de socios",
      };
    case "fr":
      return {
        badge: "Programme partenaires & affiliés",
        title: "Rejoignez-nous !",
        cards: [
          {
            title: "Monétisez votre réseau",
            description:
              "Connectez collectionneurs, amateurs de luxe et acheteurs privés à notre conciergerie d'achats en Europe.",
          },
          {
            title: "Commissions attractives",
            description:
              "Des récompenses sur chaque acquisition de luxe et œuvre d'art rare sourcée pour vos filleuls.",
          },
          {
            title: "Support opérationnel complet",
            description:
              "BAGIA gère achats, authenticité, emballage, formalités d'exportation et logistique.",
          },
        ],
        primaryCta: "Devenir partenaire BAGIA →",
        whatsappCta: "💬 WhatsApp — Bureau partenaires",
      };
    case "en":
    default:
      return {
        badge: "Partnership & Affiliate Program",
        title: "Join us!",
        cards: [
          {
            title: "Monetize Your Network",
            description:
              "Connect art collectors, luxury enthusiasts, and private buyers with Europe's premier shopping concierge.",
          },
          {
            title: "Attractive Commissions",
            description:
              "Earn lucrative referral rewards on every high-value luxury acquisition and rare art piece sourced.",
          },
          {
            title: "Full Operational Backup",
            description:
              "BAGIA manages all purchasing, authenticity checks, custom packing, export formalities, and logistics.",
          },
        ],
        primaryCta: "Become a BAGIA Partner →",
        whatsappCta: "💬 WhatsApp Partnership Desk",
      };
  }
}

export function getFooterExtras(lang: Language) {
  switch (lang) {
    case "es":
      return { backToTop: "Volver arriba", whatsapp: "WhatsApp", copyright: "Copyright" };
    case "fr":
      return { backToTop: "Retour en haut", whatsapp: "WhatsApp", copyright: "Copyright" };
    case "en":
    default:
      return { backToTop: "Back to top", whatsapp: "WhatsApp", copyright: "Copyright" };
  }
}

export function getLegalPageUi(lang: Language) {
  switch (lang) {
    case "es":
      return { label: "Legal", questions: "¿Preguntas sobre estos términos?", contact: "Contáctenos" };
    case "fr":
      return { label: "Juridique", questions: "Des questions sur ces conditions ?", contact: "Contactez-nous" };
    case "en":
    default:
      return { label: "Legal", questions: "Questions about these terms?", contact: "Contact us" };
  }
}
