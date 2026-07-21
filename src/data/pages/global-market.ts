import { Language } from "@/context/LanguageContext";

export const globalMarketPage = {
  slug: "global-market",
  path: "/global-market",
  title: "Global Market",
  metaDescription:
    "The global art and luxury market: why international logistics is the key to selling more from the Dominican Republic.",
};

export function getGlobalMarketHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "El mundo está a su alcance",
        title: "El mercado mundial del arte y del lujo",
        subtitle:
          "Y por qué la logística internacional es la clave para vender más desde la República Dominicana",
        cta: { label: "Contáctenos", href: "/contact-us" },
        secondaryCta: { label: "Mesa de contacto", href: "/contact-us" },
        backgroundImage:
          "https://images.unsplash.com/photo-1579783902610-fb2a0b095254?auto=format&fit=crop&w=1920&q=80",
      };
    case "fr":
      return {
        eyebrow: "Le monde est à votre portée",
        title: "Le marché mondial de l'art et du luxe",
        subtitle:
          "Et pourquoi la logistique internationale est la clé pour vendre plus depuis la République Dominicaine",
        cta: { label: "Contactez-nous", href: "/contact-us" },
        secondaryCta: { label: "Bureau de contact", href: "/contact-us" },
        backgroundImage:
          "https://images.unsplash.com/photo-1579783902610-fb2a0b095254?auto=format&fit=crop&w=1920&q=80",
      };
    case "en":
    default:
      return {
        eyebrow: "The world is within your reach",
        title: "The global art and luxury market",
        subtitle:
          "And why international logistics is the key to selling more from the Dominican Republic",
        cta: { label: "Contact Us", href: "/contact-us" },
        secondaryCta: { label: "Contact Desk", href: "/contact-us" },
        backgroundImage:
          "https://images.unsplash.com/photo-1579783902610-fb2a0b095254?auto=format&fit=crop&w=1920&q=80",
      };
  }
}

export function getBeginningIntro(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Nuestro punto de partida",
        paragraphs: [
          "El mercado mundial del arte y del lujo está experimentando una profunda transformación. La demanda internacional es sólida, digital y lista para comprar, siempre que la experiencia sea simple, confiable y segura.",
          "Para comerciantes, creadores y galerías dominicanas, el potencial de crecimiento es considerable.",
        ],
      };
    case "fr":
      return {
        eyebrow: "Notre point de départ",
        paragraphs: [
          "Le marché mondial de l'art et du luxe connaît une profonde transformation. La demande internationale est forte, numérique et prête à acheter dès lors que l'expérience est fluide.",
          "Pour les créateurs et galeries dominicaines, le potentiel de croissance est immense.",
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Our starting point",
        paragraphs: [
          "The global art and luxury market is undergoing a profound transformation. International demand is strong, digital, and ready to buy — as long as the shopping experience is simple, reliable, and secure through final delivery.",
          "For Dominican merchants, creators, and galleries, the growth potential is considerable — but still largely underexploited.",
        ],
      };
  }
}

export const obstacles = {
  title: "Current obstacles limiting international sales",
  intro: "Today, many Dominican merchants lose sales due to:",
  items: [
    "unpredictable shipping costs",
    "unclear taxes and customs duties",
    "uncertain timelines",
    "high cost of adequate insurance",
    "returns that are impossible or too complex",
    "lack of confidence in authenticity and packaging",
  ],
};

export const premiumLogistics = {
  title: "How premium international logistics increases sales",
  backgroundImage:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
  columns: [
    {
      title: "More conversions",
      bullets: [
        "clear prices with delivery included (taxes included or estimated)",
        "announced and respected timelines",
        "real-time tracking",
      ],
    },
    {
      title: "A higher average order value",
      bullets: [
        "ad valorem insurance",
        "luxury or fine art packaging",
        "reduced perceived risk",
      ],
    },
    {
      title: "Fewer incidents",
      bullets: [
        "professional packaging",
        "compliant customs documentation",
        "structured return processes",
      ],
    },
    {
      title: "Access to new channels",
      bullets: [
        "international online sales",
        "private sales",
        "marketplaces",
        "foreign professional clients",
      ],
    },
  ],
};

export const promisingMarkets = {
  title: "The most promising international markets",
  intro:
    "These destinations concentrate the highest demand for Dominican art, luxury, and craftsmanship online.",
  markets: [
    {
      name: "United States",
      bullets: [
        "Geographic proximity",
        "Dominican diaspora",
        "The world's leading accessible online art and luxury market",
      ],
    },
    {
      name: "Europe (France, United Kingdom, Germany, Spain)",
      bullets: [
        "Strong culture of luxury, vintage, and art",
        "Buyers sensitive to history, authenticity, and handmade work",
      ],
    },
    {
      name: "International online buyers",
      bullets: [
        "Collectors",
        "Premium gifts",
        "Certified second-hand buyers",
      ],
    },
  ],
};

export const salesImpact = {
  title: "Potential impact on sales (realistic scenarios)",
  scenarios: [
    {
      name: "Conservative scenario (3–6 months)",
      bullets: [
        "+10 to +20% in international conversion rate",
        "–20 to –40% in incidents and problematic returns",
      ],
      result: "> +15 to +30% in international revenue",
    },
    {
      name: "Accelerated scenario (6–12 months)",
      bullets: [
        "logistics with taxes included",
        "simplified returns",
        "premium customer experience",
      ],
      result: "> x1.5 to x2 in international revenue",
    },
  ],
};

export const tradeNorm = {
  eyebrow: "Global Trade Expectations",
  title: "International trade is now the norm",
  intro:
    "Global e-commerce represents more than USD 27 trillion in annual transactions (UNCTAD). In art and luxury:",
  standardRequirementLabel: "Standard Requirement",
  items: [
    { icon: "compare" as const, text: "The buyer compares price with delivery included" },
    { icon: "tracking" as const, text: "They expect precise tracking" },
    { icon: "insurance" as const, text: "They want insurance" },
    { icon: "customs" as const, text: "They reject any customs surprises" },
    { icon: "delivery" as const, text: "They want fast and efficient delivery" },
    {
      icon: "logistics" as const,
      text: "Logistics is no longer a detail: it is an integral part of the product",
    },
  ],
};

export const globalMarketStats = {
  title: "A vast and always active global market",
  art: {
    title: "Global art market",
    stat: "USD 57.5 billion in sales in 2024",
    intro: "A market in transition:",
    bullets: [
      "fewer extremely high prices,",
      "more transactions,",
      "strong growth in the mid-market, private sales, and international buyers.",
    ],
    conclusion:
      "Today, accessible works, art objects, and unique pieces find international buyers more easily than they did 10 years ago.",
  },
  luxury: {
    title: "Global luxury market",
    stats: [
      "€1.44 trillion in global spending (global luxury)",
      "€364 billion in personal luxury goods (fashion, jewelry, accessories)",
      "€48 billion in second-hand luxury, growing strongly",
    ],
    conclusion:
      "Buyers exist, but they demand high standards: timelines, cost transparency, insurance, and returns.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
  },
};

export const dominicanPotential = {
  eyebrow: "We believe in your potential",
  title: "Dominican Republic: real international potential",
  bullets: [
    "USD 401 million in jewelry exported in 2023",
    "Art and antiques exported to the United States, United Kingdom, and China",
    "A strong identity: Caribbean, craftsmanship, natural stones, unique pieces",
  ],
  highlight: "The problem is not demand.",
  highlightSub: "The problem is seamless access to international markets.",
  images: {
    flag: "https://images.unsplash.com/photo-1585155775887-08754b4e8375?auto=format&fit=crop&w=600&q=80",
    city: "https://images.unsplash.com/photo-1580541631950-728208302bf6?auto=format&fit=crop&w=800&q=80",
    beach:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80",
  },
};

export const mission = {
  title: "Our mission",
  intro: "We help Dominican merchants, artists, galleries, and creators to:",
  bullets: [
    "sell easily on an international scale",
    "insure their shipments",
    "offer a customer experience at global luxury standards",
    "turn international demand into real sales",
  ],
  closing: "You create the value. We make it travel.",
  cta: { label: "Contact Us", href: "/contactenos" },
};

export function getGlobalMarketStats(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Un mercado global vasto y siempre activo",
        art: {
          title: "Mercado global del arte",
          stat: "USD 57.500 millones en ventas en 2024",
          intro: "Un mercado en transición:",
          bullets: [
            "menos precios extremadamente altos,",
            "más transacciones,",
            "fuerte crecimiento en el mercado medio, ventas privadas y compradores internacionales.",
          ],
          conclusion:
            "Hoy, las obras accesibles, objetos de arte y piezas únicas encuentran compradores internacionales más fácilmente que hace 10 años.",
        },
        luxury: {
          title: "Mercado global del lujo",
          stats: [
            "€1,44 billones en gasto global (lujo global)",
            "€364 mil millones en bienes de lujo personal (moda, joyería, accesorios)",
            "€48 mil millones en lujo de segunda mano, en fuerte crecimiento",
          ],
          conclusion:
            "Los compradores existen, pero exigen altos estándares: plazos, transparencia de costos, seguro y devoluciones.",
          image: globalMarketStats.luxury.image,
        },
      };
    case "fr":
      return {
        title: "Un marché mondial vaste et toujours actif",
        art: {
          title: "Marché mondial de l'art",
          stat: "57,5 milliards USD de ventes en 2024",
          intro: "Un marché en transition :",
          bullets: [
            "moins de prix extrêmement élevés,",
            "plus de transactions,",
            "forte croissance du marché intermédiaire, ventes privées et acheteurs internationaux.",
          ],
          conclusion:
            "Aujourd'hui, les œuvres accessibles et pièces uniques trouvent des acheteurs internationaux plus facilement qu'il y a 10 ans.",
        },
        luxury: {
          title: "Marché mondial du luxe",
          stats: [
            "1,44 billion € de dépenses mondiales (luxe global)",
            "364 milliards € de biens de luxe personnels (mode, joaillerie, accessoires)",
            "48 milliards € de luxe d'occasion, en forte croissance",
          ],
          conclusion:
            "Les acheteurs existent, mais exigent des standards élevés : délais, transparence des coûts, assurance et retours.",
          image: globalMarketStats.luxury.image,
        },
      };
    case "en":
    default:
      return globalMarketStats;
  }
}

export function getObstacles(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Obstáculos actuales que limitan las ventas internacionales",
        intro: "Hoy, muchos comerciantes dominicanos pierden ventas debido a:",
        items: [
          "costos de envío impredecibles",
          "impuestos y aranceles poco claros",
          "plazos inciertos",
          "alto costo del seguro adecuado",
          "devoluciones imposibles o demasiado complejas",
          "falta de confianza en autenticidad y embalaje",
        ],
      };
    case "fr":
      return {
        title: "Obstacles actuels limitant les ventes internationales",
        intro: "Aujourd'hui, de nombreux commerçants dominicains perdent des ventes en raison de :",
        items: [
          "coûts d'expédition imprévisibles",
          "taxes et droits de douane peu clairs",
          "délais incertains",
          "coût élevé d'une assurance adéquate",
          "retours impossibles ou trop complexes",
          "manque de confiance dans l'authenticité et l'emballage",
        ],
      };
    case "en":
    default:
      return obstacles;
  }
}

export function getPremiumLogistics(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Cómo la logística internacional premium aumenta las ventas",
        backgroundImage: premiumLogistics.backgroundImage,
        columns: [
          {
            title: "Más conversiones",
            bullets: [
              "precios claros con entrega incluida (impuestos incluidos o estimados)",
              "plazos anunciados y respetados",
              "seguimiento en tiempo real",
            ],
          },
          {
            title: "Un valor promedio de pedido más alto",
            bullets: [
              "seguro ad valorem",
              "embalaje de lujo o bellas artes",
              "riesgo percibido reducido",
            ],
          },
          {
            title: "Menos incidentes",
            bullets: [
              "embalaje profesional",
              "documentación aduanera conforme",
              "procesos de devolución estructurados",
            ],
          },
          {
            title: "Acceso a nuevos canales",
            bullets: [
              "ventas internacionales en línea",
              "ventas privadas",
              "marketplaces",
              "clientes profesionales extranjeros",
            ],
          },
        ],
      };
    case "fr":
      return {
        title: "Comment la logistique internationale premium augmente les ventes",
        backgroundImage: premiumLogistics.backgroundImage,
        columns: [
          {
            title: "Plus de conversions",
            bullets: [
              "prix clairs avec livraison incluse (taxes incluses ou estimées)",
              "délais annoncés et respectés",
              "suivi en temps réel",
            ],
          },
          {
            title: "Un panier moyen plus élevé",
            bullets: [
              "assurance ad valorem",
              "emballage luxe ou beaux-arts",
              "risque perçu réduit",
            ],
          },
          {
            title: "Moins d'incidents",
            bullets: [
              "emballage professionnel",
              "documentation douanière conforme",
              "processus de retour structurés",
            ],
          },
          {
            title: "Accès à de nouveaux canaux",
            bullets: [
              "ventes internationales en ligne",
              "ventes privées",
              "marketplaces",
              "clients professionnels étrangers",
            ],
          },
        ],
      };
    case "en":
    default:
      return premiumLogistics;
  }
}

export function getPromisingMarkets(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Los mercados internacionales más prometedores",
        intro:
          "Estos destinos concentran la mayor demanda de arte, lujo y artesanía dominicana en línea.",
        markets: [
          {
            name: "Estados Unidos",
            bullets: [
              "Proximidad geográfica",
              "Diáspora dominicana",
              "El principal mercado accesible de arte y lujo en línea del mundo",
            ],
          },
          {
            name: "Europa (Francia, Reino Unido, Alemania, España)",
            bullets: [
              "Fuerte cultura de lujo, vintage y arte",
              "Compradores sensibles a la historia, autenticidad y trabajo artesanal",
            ],
          },
          {
            name: "Compradores internacionales en línea",
            bullets: ["Coleccionistas", "Regalos premium", "Compradores certificados de segunda mano"],
          },
        ],
      };
    case "fr":
      return {
        title: "Les marchés internationaux les plus prometteurs",
        intro:
          "Ces destinations concentrent la plus forte demande pour l'art, le luxe et l'artisanat dominicain en ligne.",
        markets: [
          {
            name: "États-Unis",
            bullets: [
              "Proximité géographique",
              "Diaspora dominicaine",
              "Premier marché accessible d'art et de luxe en ligne au monde",
            ],
          },
          {
            name: "Europe (France, Royaume-Uni, Allemagne, Espagne)",
            bullets: [
              "Forte culture du luxe, du vintage et de l'art",
              "Acheteurs sensibles à l'histoire, l'authenticité et le travail artisanal",
            ],
          },
          {
            name: "Acheteurs internationaux en ligne",
            bullets: ["Collectionneurs", "Cadeaux premium", "Acheteurs certifiés de seconde main"],
          },
        ],
      };
    case "en":
    default:
      return promisingMarkets;
  }
}

export function getSalesImpact(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Impacto potencial en ventas (escenarios realistas)",
        scenarios: [
          {
            name: "Escenario conservador (3–6 meses)",
            bullets: [
              "+10 a +20% en tasa de conversión internacional",
              "–20 a –40% en incidentes y devoluciones problemáticas",
            ],
            result: "> +15 a +30% en ingresos internacionales",
          },
          {
            name: "Escenario acelerado (6–12 meses)",
            bullets: [
              "logística con impuestos incluidos",
              "devoluciones simplificadas",
              "experiencia premium para el cliente",
            ],
            result: "> x1.5 a x2 en ingresos internacionales",
          },
        ],
      };
    case "fr":
      return {
        title: "Impact potentiel sur les ventes (scénarios réalistes)",
        scenarios: [
          {
            name: "Scénario conservateur (3–6 mois)",
            bullets: [
              "+10 à +20% de taux de conversion internationale",
              "–20 à –40% d'incidents et retours problématiques",
            ],
            result: "> +15 à +30% de revenus internationaux",
          },
          {
            name: "Scénario accéléré (6–12 mois)",
            bullets: [
              "logistique avec taxes incluses",
              "retours simplifiés",
              "expérience client premium",
            ],
            result: "> x1.5 à x2 de revenus internationaux",
          },
        ],
      };
    case "en":
    default:
      return salesImpact;
  }
}

export function getTradeNorm(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Expectativas del comercio global",
        title: "El comercio internacional es ahora la norma",
        intro:
          "El comercio electrónico global representa más de USD 27 billones en transacciones anuales (UNCTAD). En arte y lujo:",
        standardRequirementLabel: "Requisito estándar",
        items: [
          { icon: "compare" as const, text: "El comprador compara el precio con entrega incluida" },
          { icon: "tracking" as const, text: "Espera seguimiento preciso" },
          { icon: "insurance" as const, text: "Quiere seguro" },
          { icon: "customs" as const, text: "Rechaza sorpresas aduaneras" },
          { icon: "delivery" as const, text: "Quiere entrega rápida y eficiente" },
          {
            icon: "logistics" as const,
            text: "La logística ya no es un detalle: es parte integral del producto",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Attentes du commerce mondial",
        title: "Le commerce international est désormais la norme",
        intro:
          "Le commerce électronique mondial représente plus de 27 billions USD de transactions annuelles (CNUCED). En art et luxe :",
        standardRequirementLabel: "Exigence standard",
        items: [
          { icon: "compare" as const, text: "L'acheteur compare le prix avec livraison incluse" },
          { icon: "tracking" as const, text: "Il attend un suivi précis" },
          { icon: "insurance" as const, text: "Il veut une assurance" },
          { icon: "customs" as const, text: "Il rejette toute surprise douanière" },
          { icon: "delivery" as const, text: "Il veut une livraison rapide et efficace" },
          {
            icon: "logistics" as const,
            text: "La logistique n'est plus un détail : elle fait partie intégrante du produit",
          },
        ],
      };
    case "en":
    default:
      return tradeNorm;
  }
}

export function getDominicanPotential(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Creemos en su potencial",
        title: "República Dominicana: potencial internacional real",
        bullets: [
          "USD 401 millones en joyería exportada en 2023",
          "Arte y antigüedades exportados a Estados Unidos, Reino Unido y China",
          "Una identidad fuerte: caribeña, artesanía, piedras naturales, piezas únicas",
        ],
        highlight: "El problema no es la demanda.",
        highlightSub: "El problema es el acceso fluido a mercados internacionales.",
        images: dominicanPotential.images,
      };
    case "fr":
      return {
        eyebrow: "Nous croyons en votre potentiel",
        title: "République Dominicaine : un potentiel international réel",
        bullets: [
          "401 millions USD de bijoux exportés en 2023",
          "Art et antiquités exportés vers les États-Unis, le Royaume-Uni et la Chine",
          "Une identité forte : caribéenne, artisanat, pierres naturelles, pièces uniques",
        ],
        highlight: "Le problème n'est pas la demande.",
        highlightSub: "Le problème est l'accès fluide aux marchés internationaux.",
        images: dominicanPotential.images,
      };
    case "en":
    default:
      return dominicanPotential;
  }
}

export function getMission(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Nuestra misión",
        intro: "Ayudamos a comerciantes, artistas, galerías y creadores dominicanos a:",
        bullets: [
          "vender fácilmente a escala internacional",
          "asegurar sus envíos",
          "ofrecer una experiencia al cliente a estándares de lujo global",
          "convertir la demanda internacional en ventas reales",
        ],
        closing: "Usted crea el valor. Nosotros lo hacemos viajar.",
        cta: { label: "Contáctenos", href: "/contact-us" },
      };
    case "fr":
      return {
        title: "Notre mission",
        intro: "Nous aidons commerçants, artistes, galeries et créateurs dominicains à :",
        bullets: [
          "vendre facilement à l'échelle internationale",
          "assurer leurs expéditions",
          "offrir une expérience client aux standards du luxe mondial",
          "transformer la demande internationale en ventes réelles",
        ],
        closing: "Vous créez la valeur. Nous la faisons voyager.",
        cta: { label: "Nous contacter", href: "/contact-us" },
      };
    case "en":
    default:
      return mission;
  }
}


