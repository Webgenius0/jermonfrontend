import { Language } from "@/context/LanguageContext";

const uploads = "https://bagiard.com/wp-content/uploads";
const quoteBase = "https://bagiard.com";

export const onDemandServicesPage = {
  slug: "on-demand-services",
  path: "/on-demand-services",
  title: "On-Demand Services",
  metaDescription:
    "Get an instant shipping quote from Santo Domingo and across the Dominican Republic to the DR, USA, Europe, and worldwide.",
};

export function getOnDemandServicesHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Bienvenido a",
        title: "Servicios bajo demanda",
        description:
          "Obtenga una cotización instantánea para envíos desde Santo Domingo y República Dominicana hacia EE. UU., Europa y el resto del mundo.",
        backgroundImage: `${uploads}/2024/08/pexels-dima-valkov-1186343-3266703.webp`,
      };
    case "fr":
      return {
        eyebrow: "Bienvenue sur",
        title: "Services à la demande",
        description:
          "Obtenez un devis instantané pour vos envois depuis Saint-Domingue et la République Dominicaine vers les USA, l'Europe et le monde entier.",
        backgroundImage: `${uploads}/2024/08/pexels-dima-valkov-1186343-3266703.webp`,
      };
    case "en":
    default:
      return {
        eyebrow: "Welcome to",
        title: "On-demand services",
        description:
          "Get a quote for shipments from Santo Domingo and the rest of the Dominican Republic, the United States (USA), Europe, and the rest of the world in just a few clicks — easily and quickly.",
        backgroundImage: `${uploads}/2024/08/pexels-dima-valkov-1186343-3266703.webp`,
      };
  }
}

export function getOnDemandServices(lang: Language) {
  switch (lang) {
    case "es":
      return [
        {
          id: "jewelry",
          title: "Joyería y Relojes",
          description: "Para envíos de joyería, relojes y piezas pequeñas de menos de 15 cm.",
          image: `${uploads}/2025/01/ai-generated-9024275_1280.jpg`,
          imageAlt: "Anillo de diamantes sobre fondo oscuro",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
        {
          id: "clothing",
          title: "Ropa y Marroquinería",
          description: "Para envíos de prendas de vestir 👗 y marroquinería de lujo 👜",
          image: `${uploads}/2024/08/image-2024-08-28T154944.926.webp`,
          imageAlt: "Bolsa de compras de lujo",
          quoteHref: `${quoteBase}/vetements-maroquinerie/`,
        },
        {
          id: "painting",
          title: "Pinturas y Lienzos",
          description: "Envío especializado de obras de arte y lienzos",
          image: `${uploads}/2024/06/shutterstock_2269631809-1.webp`,
          imageAlt: "Pintura al óleo de flores",
          quoteHref: `${quoteBase}/simulateur-de-frais-dexpedition/`,
        },
        {
          id: "sculpture",
          title: "Jarrones y Esculturas",
          description: "Envío de jarrones, esculturas, estatuas y objetos decorativos",
          image: `${uploads}/2025/10/image_4d98d8f3-4dcc-4bfe-8979-305c0098fbaa.webp`,
          imageAlt: "Jarrones de cerámica decorativos",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
      ];
    case "fr":
      return [
        {
          id: "jewelry",
          title: "Joaillerie & Horlogerie",
          description: "Pour tous vos envois de bijoux, montres et petits objets précieux.",
          image: `${uploads}/2025/01/ai-generated-9024275_1280.jpg`,
          imageAlt: "Bague en diamant",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
        {
          id: "clothing",
          title: "Vêtements & Maroquinerie",
          description: "Pour vos envois de mode 👗 et maroquinerie 👜",
          image: `${uploads}/2024/08/image-2024-08-28T154944.926.webp`,
          imageAlt: "Sac de luxe",
          quoteHref: `${quoteBase}/vetements-maroquinerie/`,
        },
        {
          id: "painting",
          title: "Peinture & Œuvres d'Art",
          description: "Expédition sécurisée de toiles et tableaux",
          image: `${uploads}/2024/06/shutterstock_2269631809-1.webp`,
          imageAlt: "Peinture florale",
          quoteHref: `${quoteBase}/simulateur-de-frais-dexpedition/`,
        },
        {
          id: "sculpture",
          title: "Vases & Sculptures",
          description: "Transport d'objets d'art décoratif et sculptures",
          image: `${uploads}/2025/10/image_4d98d8f3-4dcc-4bfe-8979-305c0098fbaa.webp`,
          imageAlt: "Vases en céramique",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
      ];
    case "en":
    default:
      return [
        {
          id: "jewelry",
          title: "Jewelry And Watches",
          description:
            "For all shipments of jewelry, watches, and other objects under 15 cm.",
          image: `${uploads}/2025/01/ai-generated-9024275_1280.jpg`,
          imageAlt: "Diamond ring on a dark background",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
        {
          id: "clothing",
          title: "Clothing And Leather Goods",
          description: "For all shipments of clothing 👗 and leather goods 👜",
          image: `${uploads}/2024/08/image-2024-08-28T154944.926.webp`,
          imageAlt: "Luxury shopping bag",
          quoteHref: `${quoteBase}/vetements-maroquinerie/`,
        },
        {
          id: "painting",
          title: "Paint",
          description: "Canvas shipping",
          image: `${uploads}/2024/06/shutterstock_2269631809-1.webp`,
          imageAlt: "Colorful floral painting",
          quoteHref: `${quoteBase}/simulateur-de-frais-dexpedition/`,
        },
        {
          id: "sculpture",
          title: "Vase And Sculpture",
          description:
            "Shipping of vases, sculptures, statues, and other decorative objects",
          image: `${uploads}/2025/10/image_4d98d8f3-4dcc-4bfe-8979-305c0098fbaa.webp`,
          imageAlt: "Decorative ceramic vases in a gallery",
          quoteHref: `${quoteBase}/bijoux-montres/`,
        },
      ];
  }
}

export function getServiceCardCtaLabel(lang: Language) {
  switch (lang) {
    case "es":
      return "Obtener Cotización";
    case "fr":
      return "Obtenir un Devis";
    case "en":
    default:
      return "Get A Quote";
  }
}

export const destinationsText =
  "Dominican Republic 🇩🇴, USA 🇺🇸, Europe 🇪🇺, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 and the rest of the world 🌎";

export function getDestinationsText(lang: Language) {
  switch (lang) {
    case "es":
      return "República Dominicana 🇩🇴, EE. UU. 🇺🇸, Europa 🇪🇺, Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 y el resto del mundo 🌎";
    case "fr":
      return "République Dominicaine 🇩🇴, USA 🇺🇸, Europe 🇪🇺, Angleterre 🏴󠁧󠁢󠁥󠁮󠁧󠁿 et le reste du monde 🌎";
    case "en":
    default:
      return destinationsText;
  }
}

export function getServiceCardsSectionUi(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Categorías de carga a medida",
        title: "Envíos especializados bajo demanda",
        cardBullets: [
          "Embalaje protector personalizado incluido",
          "Tránsito aéreo y marítimo express asegurado",
        ],
        destinationsLabel: "Destinos cubiertos:",
        categories: [
          { id: "all", label: "Todas las categorías" },
          { id: "jewelry", label: "Joyería y Relojes" },
          { id: "clothing", label: "Ropa y Marroquinería" },
          { id: "painting", label: "Pinturas y Lienzos" },
          { id: "sculpture", label: "Jarrones y Esculturas" },
        ],
      };
    case "fr":
      return {
        eyebrow: "Catégories de fret sur mesure",
        title: "Expéditions spécialisées à la demande",
        cardBullets: [
          "Emballage protecteur sur mesure inclus",
          "Transit aérien et maritime express assuré",
        ],
        destinationsLabel: "Destinations couvertes :",
        categories: [
          { id: "all", label: "Toutes les catégories" },
          { id: "jewelry", label: "Joaillerie & Horlogerie" },
          { id: "clothing", label: "Vêtements & Maroquinerie" },
          { id: "painting", label: "Peinture & Toiles" },
          { id: "sculpture", label: "Vases & Sculptures" },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Tailored Cargo Categories",
        title: "Specialized On-Demand Shipping",
        cardBullets: [
          "Custom protective packing included",
          "Insured express air & ocean transit",
        ],
        destinationsLabel: "Destinations Covered:",
        categories: [
          { id: "all", label: "All Freight Categories" },
          { id: "jewelry", label: "Jewelry & Watches" },
          { id: "clothing", label: "Clothing & Leather" },
          { id: "painting", label: "Canvas & Paintings" },
          { id: "sculpture", label: "Vases & Sculptures" },
        ],
      };
  }
}

export function getLogisticsTrustBar(lang: Language) {
  switch (lang) {
    case "es":
      return [
        {
          title: "Express puerta a puerta",
          description: "Carga aérea y marítima para Santo Domingo, RD y el mundo",
        },
        {
          title: "Despacho aduanero",
          description: "Agente aduanal autorizado en la República Dominicana",
        },
        {
          title: "Seguro a valor total",
          description: "Cobertura de tránsito para arte, relojes y joyería",
        },
        {
          title: "Seguimiento por hitos",
          description: "Rastreo en tiempo real en cada etapa del envío",
        },
      ];
    case "fr":
      return [
        {
          title: "Express porte-à-porte",
          description: "Fret aérien et maritime pour Saint-Domingue, RD et le monde",
        },
        {
          title: "Dédouanement",
          description: "Agent en douane agréé en République Dominicaine",
        },
        {
          title: "Assurance valeur totale",
          description: "Couverture transit pour art, montres et joaillerie",
        },
        {
          title: "Suivi par étapes",
          description: "Traçabilité en temps réel à chaque phase d'expédition",
        },
      ];
    case "en":
    default:
      return [
        {
          title: "Door-to-Door Express",
          description: "Air & sea freight for Santo Domingo, DR & Global",
        },
        {
          title: "Customs Clearance",
          description: "Licensed customs agent in the Dominican Republic",
        },
        {
          title: "Full Value Insurance",
          description: "Specific transit coverage for art, watches & jewelry",
        },
        {
          title: "Milestone Tracking",
          description: "Real-time tracking for every shipment stage",
        },
      ];
  }
}

export function getInstantQuoteBanner(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Estimador logístico instantáneo",
        title: "Obtenga su cotización internacional al instante",
        description:
          "Calcule tarifas precisas desde Santo Domingo y toda la República Dominicana hacia EE. UU., Europa, Inglaterra y el resto del mundo en pocos clics.",
        primaryCta: "Abrir simulador de envíos",
        whatsappCta: "💬 WhatsApp — Agente de carga",
      };
    case "fr":
      return {
        badge: "Estimateur logistique instantané",
        title: "Obtenez votre devis international instantané",
        description:
          "Calculez des tarifs précis depuis Saint-Domingue et toute la République Dominicaine vers les USA, l'Europe, l'Angleterre et le monde entier en quelques clics.",
        primaryCta: "Lancer le simulateur d'expédition",
        whatsappCta: "💬 WhatsApp — Agent fret",
      };
    case "en":
    default:
      return {
        badge: "Instant Logistics Estimator",
        title: "Get Your Instant International Freight Quote",
        description:
          "Calculate accurate shipping rates from Santo Domingo and across the Dominican Republic to the USA, Europe, England, and worldwide in just a few clicks.",
        primaryCta: "Launch Shipping Simulator",
        whatsappCta: "💬 WhatsApp Freight Agent",
      };
  }
}

export function getOnDemandHeroUi(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Rápido • Seguro • Logística mundial",
        destinationChips: [
          "🇩🇴 República Dominicana",
          "🇺🇸 Estados Unidos (EE. UU.)",
          "🇪🇺 Europa",
          "🇬🇧 Inglaterra",
          "🌎 Entrega mundial",
        ],
        calcCta: "Calcular Costo de Envío",
        exploreCta: "Explorar Categorías ↓",
      };
    case "fr":
      return {
        badge: "Rapide • Sécurisé • Logistique mondiale",
        destinationChips: [
          "🇩🇴 République Dominicaine",
          "🇺🇸 États-Unis (USA)",
          "🇪🇺 Europe",
          "🇬🇧 Angleterre",
          "🌎 Livraison mondiale",
        ],
        calcCta: "Calculer le Coût d'Expédition",
        exploreCta: "Explorer les Catégories ↓",
      };
    case "en":
    default:
      return {
        badge: "Fast • Secure • Worldwide Logistics",
        destinationChips: [
          "🇩🇴 Dominican Republic",
          "🇺🇸 United States (USA)",
          "🇪🇺 Europe",
          "🇬🇧 England",
          "🌎 Worldwide Delivery",
        ],
        calcCta: "Calculate Shipping Cost",
        exploreCta: "Explore Categories ↓",
      };
  }
}

export const onDemandServicesHero = getOnDemandServicesHero("en");
export const onDemandServices = getOnDemandServices("en");


