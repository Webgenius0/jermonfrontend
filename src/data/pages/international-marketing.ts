import { Language } from "@/context/LanguageContext";

export const internationalMarketingPage = {
  slug: "international-marketing",
  path: "/international-marketing",
  title: "International Marketing",
  metaDescription:
    "BAGIA RD offers a comprehensive international marketing service for artists, jewelers, and merchants.",
  sourceFile: "legacy/index1.html",
};

export function getInternationalMarketingHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Ventas globales y logística",
        title: "Comercialización Internacional",
        description:
          "Un servicio integral para artistas, joyeros y comerciantes: gestionamos ventas, envíos y promoción de sus productos en plataformas globales de arte y lujo.",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2296442929-scaled.webp",
        buttons: [
          { label: "Ver suscripciones", href: "/offers-and-subscriptions" },
          { label: "Contáctenos", href: "/contact-us" },
        ],
      };
    case "fr":
      return {
        eyebrow: "Ventes globales & logistique",
        title: "Commercialisation Internationale",
        description:
          "Un service complet pour artistes, joailliers et commerçants : gestion des ventes, expéditions et promotion de vos créations sur les plateformes internationales.",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2296442929-scaled.webp",
        buttons: [
          { label: "Voir les abonnements", href: "/offers-and-subscriptions" },
          { label: "Contactez-nous", href: "/contact-us" },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Global sales & logistics",
        title: "International Marketing",
        description:
          "A comprehensive service for artists, jewelers, and merchants — we manage sales, shipping, and promotion of your products on online art and luxury platforms, with flexible subscription plans.",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2296442929-scaled.webp",
        buttons: [
          { label: "View subscriptions", href: "/offers-and-subscriptions" },
          { label: "Contact us", href: "/contact-us" },
        ],
      };
  }
}

export function getInternationalMarketingIntro(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Conecte su talento con el mundo",
        paragraph:
          "En BAGIA RD ayudamos a artistas, joyeros y emprendedores a vender sus creaciones en el extranjero a través de plataformas internacionales de arte, diseño y lujo. Combinamos logística, marketing y gestión de ventas para que su obra alcance a compradores globales.",
      };
    case "fr":
      return {
        title: "Connectez votre talent au monde",
        paragraph:
          "Chez BAGIA RD, nous aidons les artistes, joailliers et créateurs à vendre leurs œuvres à l'international via des plateformes d'art et de luxe de premier plan.",
      };
    case "en":
    default:
      return {
        title: "Connect your talent with the world",
        paragraph:
          "At BAGIA RD, we help Dominican artists, jewelers, artisans, and entrepreneurs sell their creations abroad through international art, design, and luxury platforms. Our service combines logistics expertise, international marketing, and digital sales management so your work reaches new customers worldwide.",
      };
  }
}

const platformLogos = [
  {
    name: "BAGIA",
    src: "https://bagiard.com/wp-content/uploads/2025/05/BAGIA-Logo-Symbol.png",
    alt: "BAGIA",
  },
  {
    name: "Saatchi Art",
    src: "https://bagiard.com/wp-content/uploads/2025/10/saatchi-art.webp",
    alt: "Saatchi Art",
  },
  {
    name: "Platform",
    src: "https://bagiard.com/wp-content/uploads/2025/10/images-2.png",
    alt: "Marketplace",
  },
  {
    name: "Ruby Lane",
    src: "https://bagiard.com/wp-content/uploads/2025/10/ruby-lane-logo-vector.png",
    alt: "Ruby Lane",
  },
  {
    name: "Society6",
    src: "https://bagiard.com/wp-content/uploads/2025/10/society6_logo_copy_Logo.jpg",
    alt: "Society6",
  },
  {
    name: "1stDibs",
    src: "https://bagiard.com/wp-content/uploads/2025/10/6318a159edd160babea06a9d_1stdibs_logo-scaled.png",
    alt: "1stDibs",
  },
  {
    name: "Farfetch",
    src: "https://bagiard.com/wp-content/uploads/2025/10/720x405_Farfetch_logo_casestudy-1.webp",
    alt: "Farfetch",
  },
  {
    name: "Catawiki",
    src: "https://bagiard.com/wp-content/uploads/2025/10/LOGO_SQUARE_COLORS_WHITE-BG%402x.png",
    alt: "Catawiki",
  },
  {
    name: "Rebag",
    src: "https://bagiard.com/wp-content/uploads/2025/10/875-875-rebag_69447b2b14e88da27844da3cdac1b5fa.png",
    alt: "Rebag",
  },
];

export function getInternationalMarketingPlatforms(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Llevamos su arte, su marca y su talento más allá de las fronteras",
        logos: platformLogos,
      };
    case "fr":
      return {
        title: "Nous portons votre art, votre marque et votre talent au-delà des frontières",
        logos: platformLogos,
      };
    case "en":
    default:
      return {
        title: "We take your art, your brand, and your talent beyond borders",
        logos: platformLogos,
      };
  }
}

export function getInternationalMarketingWhy(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Por qué internacionalizarse",
        title: "¿Por qué vender en mercados internacionales?",
        reasons: [
          {
            number: "01",
            title: "Millones de compradores activos",
            description:
              "Acceso a compradores en Norteamérica, Europa y Asia a través de plataformas globales de arte y lujo.",
          },
          {
            number: "02",
            title: "Mejores márgenes",
            description:
              "Precios de venta adaptados a los estándares internacionales y mayor valor percibido de su obra o marca.",
          },
          {
            number: "03",
            title: "Menos estacionalidad local",
            description:
              "Diversifique sus ingresos más allá del mercado doméstico y reduzca la dependencia de ciclos locales.",
          },
          {
            number: "04",
            title: "Prestigio internacional",
            description:
              "Fortalezca la reputación y el reconocimiento global de su firma artística o comercial.",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Pourquoi aller à l'international",
        title: "Pourquoi vendre sur les marchés internationaux ?",
        reasons: [
          {
            number: "01",
            title: "Des millions d'acheteurs actifs",
            description:
              "Accédez à des acheteurs en Amérique du Nord, en Europe et en Asie via des plateformes d'art et de luxe.",
          },
          {
            number: "02",
            title: "De meilleures marges",
            description:
              "Des prix alignés sur les standards internationaux et une valorisation accrue de votre œuvre ou marque.",
          },
          {
            number: "03",
            title: "Moins de saisonnalité locale",
            description:
              "Diversifiez vos revenus au-delà du marché domestique et réduisez la dépendance aux cycles locaux.",
          },
          {
            number: "04",
            title: "Prestige international",
            description:
              "Renforcez la réputation et la reconnaissance mondiale de votre signature artistique ou commerciale.",
          },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Why go global",
        title: "Why sell in international markets?",
        reasons: [
          {
            number: "01",
            title: "Millions of active buyers",
            description:
              "Access buyers across North America, Europe, and Asia through global art and luxury platforms.",
          },
          {
            number: "02",
            title: "Better margins",
            description:
              "Sales prices aligned with international market standards and higher perceived value for your work.",
          },
          {
            number: "03",
            title: "Less local seasonality",
            description:
              "Diversify revenue beyond the domestic market and reduce dependence on local cycles.",
          },
          {
            number: "04",
            title: "International prestige",
            description:
              "Build reputation and global recognition for your brand or artistic signature.",
          },
        ],
      };
  }
}

export function getInternationalMarketingServices(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Soporte integral",
        title: "Lo que hacemos por usted",
        intro:
          "Desde la estrategia hasta la entrega, gestionamos cada paso de su presencia internacional.",
        items: [
          {
            icon: "advice" as const,
            title: "Estrategia y selección de plataformas",
            description:
              "Evaluamos su portafolio y seleccionamos los marketplaces globales más adecuados para su audiencia.",
          },
          {
            icon: "product" as const,
            title: "Creación y optimización de listados",
            description:
              "Redacción profesional multilingüe, fotografía de alta resolución y optimización SEO para máxima visibilidad.",
          },
          {
            icon: "logistics" as const,
            title: "Logística y aduanas",
            description:
              "Embalaje especializado, documentación aduanera, transporte aéreo/marítimo express y seguimiento completo.",
          },
          {
            icon: "sales" as const,
            title: "Gestión de pedidos y compradores",
            description:
              "Atendemos servicio al cliente, comunicaciones con compradores, actualizaciones de estado y pagos.",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Accompagnement complet",
        title: "Ce que nous faisons pour vous",
        intro:
          "De la stratégie à la livraison, nous gérons chaque étape de votre présence internationale.",
        items: [
          {
            icon: "advice" as const,
            title: "Stratégie & sélection de plateformes",
            description:
              "Nous évaluons votre portfolio et sélectionnons les marketplaces globales les plus adaptées.",
          },
          {
            icon: "product" as const,
            title: "Création & optimisation des annonces",
            description:
              "Rédaction professionnelle multilingue, photos haute résolution et optimisation SEO pour une visibilité maximale.",
          },
          {
            icon: "logistics" as const,
            title: "Logistique & douanes",
            description:
              "Emballage spécialisé, documentation douanière, transport aérien/maritime express et suivi complet.",
          },
          {
            icon: "sales" as const,
            title: "Gestion des commandes & acheteurs",
            description:
              "Service client, communications acheteurs, mises à jour de statut et traitement des paiements.",
          },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Full-service support",
        title: "What we do for you",
        intro:
          "From strategy to delivery, we manage every step of your international presence.",
        items: [
          {
            icon: "advice" as const,
            title: "Strategy & Platform Selection",
            description:
              "We evaluate your portfolio and select the global marketplaces best suited to your target audience.",
          },
          {
            icon: "product" as const,
            title: "Listing Creation & Optimization",
            description:
              "Professional copywriting in multiple languages, high-resolution photos, and SEO optimization for maximum visibility.",
          },
          {
            icon: "logistics" as const,
            title: "Logistics & Customs Handling",
            description:
              "Specialized packaging, customs documentation, express air/sea transport, and comprehensive tracking.",
          },
          {
            icon: "sales" as const,
            title: "Order & Buyer Management",
            description:
              "We handle customer service, buyer communications, order status updates, and payout processing.",
          },
        ],
      };
  }
}

export function getInternationalMarketingAudience(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "¿Para quién es este servicio?",
        intro:
          "Nuestras soluciones de comercialización internacional están diseñadas para creadores y empresas listos para escalar:",
        targets: [
          "Pintores, escultores y artistas visuales que buscan alcance global",
          "Joyeros y artesanos de gemas que exportan piezas únicas",
          "Marcas de moda de lujo, marroquinería y artesanía de alta gama",
          "Galerías, anticuarios y tiendas de diseño en expansión digital",
        ],
      };
    case "fr":
      return {
        title: "À qui s'adresse ce service ?",
        intro:
          "Nos solutions de commercialisation internationale s'adressent aux créateurs et entreprises prêts à se développer :",
        targets: [
          "Peintres, sculpteurs et artistes visuels visant une clientèle internationale",
          "Joailliers et artisans exportant des pièces uniques",
          "Marques de mode de luxe, maroquinerie et artisanat haut de gamme",
          "Galeries, antiquaires et boutiques design en expansion digitale",
        ],
      };
    case "en":
    default:
      return {
        title: "Who is this service for?",
        intro:
          "Our international marketing solutions are designed for creators and businesses ready to scale:",
        targets: [
          "Painters, sculptors, and visual artists seeking global collector reach",
          "Jewelers and gemstone artisans exporting unique pieces",
          "Luxury fashion, leather goods, and high-end craft brands",
          "Galleries, antique dealers, and design stores expanding digitally",
        ],
      };
  }
}

export function getInternationalMarketingJoinCta(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "¿Listo para escalar su marca globalmente?",
        description:
          "Explore nuestros planes de suscripción o hable con un asesor para elegir la estrategia adecuada.",
        cta: { label: "Ver planes de suscripción", href: "/offers-and-subscriptions" },
      };
    case "fr":
      return {
        title: "Prêt à développer votre marque à l'international ?",
        description:
          "Explorez nos abonnements ou parlez à un conseiller pour choisir la bonne stratégie pour votre catalogue.",
        cta: { label: "Voir les abonnements", href: "/offers-and-subscriptions" },
      };
    case "en":
    default:
      return {
        title: "Ready to scale your brand globally?",
        description:
          "Explore our subscription plans or talk to an advisor to choose the right strategy for your catalog.",
        cta: { label: "View Subscription Plans", href: "/offers-and-subscriptions" },
      };
  }
}

export const internationalMarketingPlatforms = getInternationalMarketingPlatforms("en");
export const internationalMarketingWhy = getInternationalMarketingWhy("en");
export const internationalMarketingServices = getInternationalMarketingServices("en");
export const internationalMarketingAudience = getInternationalMarketingAudience("en");
export const internationalMarketingJoinCta = getInternationalMarketingJoinCta("en");


