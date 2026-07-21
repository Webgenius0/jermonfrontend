import { Language } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export const homePage = {
  slug: "home",
  path: "/",
  title: "Home",
  metaDescription:
    "BAGIA RD — luxury, art, freight, and international logistics in Santo Domingo.",
  sourceFile: "https://bagiard.com/",
} as const;

export function getHomeHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        lines: [
          "Joyería y Relojes",
          "Moda de Lujo",
          "Arte y Colecciones",
          "Lo que más le importa,",
          "se lo proporcionamos.",
        ],
        subtitle: "Descubra nuestras soluciones a la medida",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2269631809-1.webp",
        buttons: [
          { label: "Suscripciones", href: "/offers-and-subscriptions" },
          { label: "Crear un envío", href: "/order-tracking" },
          { label: "Vender mis piezas", href: "/international-marketing" },
        ],
      };
    case "fr":
      return {
        lines: [
          "Joaillerie & Horlogerie",
          "Mode de Luxe",
          "Art & Collection",
          "Ce qui vous importe,",
          "nous vous le procurons.",
        ],
        subtitle: "Découvrez nos solutions sur mesure",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2269631809-1.webp",
        buttons: [
          { label: "S'abonner", href: "/offers-and-subscriptions" },
          { label: "Créer un envoi", href: "/order-tracking" },
          { label: "Vendre mes articles", href: "/international-marketing" },
        ],
      };
    case "en":
    default:
      return {
        lines: [
          "Jewelry & Watches",
          "Fashion",
          "Art",
          "What matters to you,",
          "we provide for you.",
        ],
        subtitle: "Discover our tailored solutions",
        backgroundImage:
          "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2269631809-1.webp",
        buttons: [
          { label: "Subscribe", href: "/offers-and-subscriptions" },
          { label: "Create a shipment", href: "/order-tracking" },
          { label: "Sell my items", href: "/international-marketing" },
        ],
      };
  }
}

export const homePartners = {
  title: "Our Partners in Paris and Around the World",
  logos: [
    {
      name: "PENELOPES",
      src: "https://bagiard.com/wp-content/uploads/2024/06/d971b1a87578635d179bce7c6d2e4dc0.jpeg",
    },
    {
      name: "Maison RC",
      src: "https://bagiard.com/wp-content/uploads/2024/06/isla_500x500.69538809_7ci7qcfv.webp",
    },
    {
      name: "BLANCHET",
      src: "https://bagiard.com/wp-content/uploads/2024/06/LOGO_DROUOT.jpeg",
    },
    {
      name: "Margaux serrano",
      src: "https://bagiard.com/wp-content/uploads/2024/06/logo-biron-2023.png",
    },
    {
      name: "Varennes",
      src: "https://bagiard.com/wp-content/uploads/2024/06/logo-dcg-1-.webp",
    },
    {
      name: "OXIO",
      src: "https://bagiard.com/wp-content/uploads/2024/06/logo20220302110058.png",
    },
    {
      name: "LE FLOCH",
      src: "https://bagiard.com/wp-content/uploads/2024/06/38d76a80-b499-4ada-98ae-5f1e74a5fb6e.png",
    },
    { name: "Copages" },
    { name: "DELON" },
    { name: "LAURENT DUPONT" },
  ],
};

export function getHomeExpertise(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Nuestra Experiencia",
        items: [
          {
            number: "01",
            icon: "rocket" as const,
            title: "Envío rápido y seguro",
            description: "Garantizamos envíos rápidos y confiables a todo el mundo, asegurando que sus bienes lleguen en perfecto estado.",
          },
          {
            number: "02",
            icon: "package" as const,
            title: "Embalaje profesional",
            description: "Técnicas de embalaje de nivel museo para proteger piezas frágiles y objetos de gran valor.",
          },
          {
            number: "03",
            icon: "headset" as const,
            title: "Procesamiento expedito",
            description: "Procedimientos eficientes y rápidos con atención directa en 24 a 48 horas.",
          },
        ],
      };
    case "fr":
      return {
        title: "Notre Expertise",
        items: [
          {
            number: "01",
            icon: "rocket" as const,
            title: "Expédition rapide et sécurisée",
            description: "Expéditions fiables dans le monde entier, garantissant l'arrivée sécurisée de vos objets précieux.",
          },
          {
            number: "02",
            icon: "package" as const,
            title: "Emballage professionnel",
            description: "Protection sur mesure de qualité musée adaptée à la valeur et la fragilité de chaque pièce.",
          },
          {
            number: "03",
            icon: "headset" as const,
            title: "Traitement rapide",
            description: "Procédures simples et efficaces pour un service réactif en 24 à 48 heures.",
          },
        ],
      };
    case "en":
    default:
      return {
        title: "Our Expertise",
        items: [
          {
            number: "01",
            icon: "rocket" as const,
            title: "Fast and reliable shipping",
            description: "We guarantee fast, reliable shipments worldwide, ensuring your goods arrive safely and on time.",
          },
          {
            number: "02",
            icon: "package" as const,
            title: "Professional packaging",
            description: "Our team uses advanced packing techniques to ensure optimal protection for your items during transport.",
          },
          {
            number: "03",
            icon: "headset" as const,
            title: "Fast processing",
            description: "Simple, efficient, and fast procedures for services within 24 to 48 hours.",
          },
        ],
      };
  }
}

export function getHomeConcierge(lang: Language) {
  switch (lang) {
    case "es":
      return {
        luxury: {
          title: "Lujo y Bolsos de Alta Gama",
          bullets: [
            "Bolsos Hermès (Kelly, Birkin, Constance)",
            "Artículos exclusivos Chanel, Dior y Louis Vuitton",
            "Ediciones limitadas y artículos difíciles de conseguir",
            "Accesorios de alta gama y marroquinería fina",
          ],
        },
        art: {
          title: "Arte y Coleccionables",
          bullets: [
            "Obras de galerías de París y Londres o ventas privadas",
            "Arte contemporáneo, fotografía y arte decorativo",
            "Piezas de diseño únicas",
          ],
        },
        main: {
          eyebrow: "Concierjería Europa",
          title: "Concierjería de Compras en Europa – Arte y Lujo",
          intro: "Ofrecemos a nuestros clientes en República Dominicana un servicio de compras y sourcing en Europa para piezas de lujo y obras de arte.",
          boutiqueHeading: "Ciertas casas de lujo y galerías europeas:",
          boutiqueBullets: [
            "no venden a distancia",
            "rechazan compradores fuera de Europa",
            "reservan productos para su clientela local o VIP",
          ],
          closing: "Compramos en su nombre en Europa y gestionamos el envío seguro hacia Santo Domingo.",
          cta: { label: "Conocer más", href: "/shopping-concierge" },
          image: "https://bagiard.com/wp-content/uploads/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp",
          imageAlt: "Pieza de arte decorativo y lujo",
        },
      };
    case "fr":
      return {
        luxury: {
          title: "Luxe & Maroquinerie",
          bullets: [
            "Sacs Hermès (Kelly, Birkin, Constance)",
            "Articles exclusifs en boutique Chanel, Dior et Louis Vuitton",
            "Éditions limitées et pièces rares",
            "Accessoires haut de gamme",
          ],
        },
        art: {
          title: "Art & Collection",
          bullets: [
            "Œuvres disponibles en galeries à Paris, Londres ou ventes privées",
            "Art contemporain, photographie, art décoratif",
            "Objets de design et pièces uniques",
          ],
        },
        main: {
          eyebrow: "Conciergerie Europe",
          title: "Conciergerie d'Achats en Europe – Art & Luxe",
          intro: "Nous proposons à nos clients un service de recherche et d'achat en Europe pour les articles de luxe, pièces rares et œuvres d'art.",
          boutiqueHeading: "Certaines maisons et galeries européennes :",
          boutiqueBullets: [
            "ne vendent pas à distance",
            "refusent les acheteurs non européens",
            "réservent leurs pièces à leur clientèle locale",
          ],
          closing: "Nous achetons pour votre compte en Europe et organisons l'expédition sécurisée.",
          cta: { label: "En savoir plus", href: "/shopping-concierge" },
          image: "https://bagiard.com/wp-content/uploads/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp",
          imageAlt: "Objet de luxe et collection",
        },
      };
    case "en":
    default:
      return {
        luxury: {
          title: "Luxury & Handbags",
          bullets: [
            "Hermès bags (Kelly, Birkin, Constance, under certain conditions)",
            "Chanel, Dior, and Louis Vuitton in-store items",
            "Limited editions, hard-to-find items in the region",
            "High-end accessories and leather goods",
          ],
        },
        art: {
          title: "Art & collectibles",
          bullets: [
            "Works available only in Paris or London galleries or private sales",
            "Contemporary art, photography, decorative art",
            "Design objects and unique pieces",
          ],
        },
        main: {
          eyebrow: "Europe concierge",
          title: "Europe Shopping Concierge – Art & Luxury",
          intro:
            "We offer our clients in the Dominican Republic a shopping and sourcing service in Europe for luxury items, rare pieces, and works of art.",
          boutiqueHeading: "Some European houses, galleries, and boutiques:",
          boutiqueBullets: [
            "do not sell remotely",
            "reject non-European buyers",
            "reserve products for local or loyal clientele",
          ],
          closing:
            "We buy on your behalf in Europe, then organize secure shipping to Santo Domingo or abroad.",
          cta: { label: "Learn more", href: "/shopping-concierge" },
          image:
            "https://bagiard.com/wp-content/uploads/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp",
          imageAlt: "Decorative art and luxury collectible piece",
        },
      };
  }
}

export function getHomeFaq(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Preguntas frecuentes",
        items: [
          {
            question: "¿Quiénes somos exactamente?",
            answer:
              "Somos una empresa de micrologística especializada en obras de arte, artículos de lujo y marroquinería con sede en Santo Domingo. Gestionamos recolección, embalaje profesional, almacenamiento seguro y envíos internacionales.",
          },
          {
            question: "¿A quiénes van dirigidos nuestros servicios?",
            answer: "Nuestros servicios están diseñados para:",
            bullets: [
              "particulares con bienes de alto valor",
              "artistas y coleccionistas de arte",
              "revendedores, boutiques y galerías",
              "clientes que desean vender internacionalmente con respaldo logístico",
            ],
          },
          {
            question: "¿Por qué es necesario un plan de suscripción?",
            answer:
              "La suscripción garantiza acceso a infraestructura segura, rutas regulares de recolección, estándares de seguro y tarifas preferenciales.",
          },
          {
            question: "¿Recogen artículos a domicilio?",
            answer:
              "Sí. Organizamos rutas de recolección semanales en Santo Domingo y zonas estratégicas. También ofrecemos servicios urgentes.",
          },
        ],
      };
    case "fr":
      return {
        title: "Foire aux questions",
        items: [
          {
            question: "Qui sommes-nous exactement ?",
            answer:
              "Nous sommes une entreprise de micro-logistique spécialisée dans les œuvres d'art, objets de luxe et maroquinerie basée à Saint-Domingue. Nous gérons la collecte, l'emballage professionnel, le stockage et les envois internationaux.",
          },
          {
            question: "À qui s'adressent nos services ?",
            answer: "Nos services s'adressent aux :",
            bullets: [
              "particuliers possédant des objets de valeur",
              "artistes et collectionneurs",
              "revendeurs, boutiques et galeries",
              "clients souhaitant vendre à l'international en toute sécurité",
            ],
          },
          {
            question: "Pourquoi un abonnement est-il nécessaire ?",
            answer:
              "L'abonnement garantit l'accès à une infrastructure sécurisée, des routes de collecte régulières, des assurances adéquates et des tarifs préférentiels.",
          },
          {
            question: "Effectuez-vous la collecte à domicile ?",
            answer:
              "Oui. Nous organisons des collectes hebdomadaires à Saint-Domingue et dans les principales régions.",
          },
        ],
      };
    case "en":
    default:
      return {
        title: "Frequently asked questions",
        items: [
          {
            question: "Who exactly are we?",
            answer:
              "We are a micro-logistics company specializing in works of art, luxury items, and leather goods, based in Santo Domingo. We manage collection, professional packaging, secure storage, national and international shipping, and international sales.",
          },
          {
            question: "Who are your services for?",
            answer: "Our services are designed for:",
            bullets: [
              "individuals who own valuable items",
              "artists and collectors",
              "resellers, shops, and galleries",
              "clients who want to sell internationally without managing logistics",
            ],
          },
          {
            question: "Why is a subscription plan necessary?",
            answer:
              "The subscription guarantees access to secure infrastructure, regular pickup routes, insurance and handling standards, and preferential rates.",
          },
          {
            question: "Do you pick up items at my home?",
            answer:
              "Yes. We organize weekly pickup routes in Santo Domingo and major areas of the country. We also offer urgent pickups.",
          },
        ],
      };
  }
}

export const homeProcess = {
  title: "How It Works",
  subtitle: "Simple 4-step process for secure international shipping and sourcing.",
  steps: [
    {
      number: "01",
      icon: "attention" as const,
      title: "Request a Quote or Sourcing",
      description:
        "Fill out our quick online form or message us directly on WhatsApp with your piece details or item request.",
    },
    {
      number: "02",
      icon: "store" as const,
      title: "Inspection & Custom Packing",
      description:
        "We pick up your item locally or source it in Europe, performing thorough inspection and museum-grade protective packaging.",
    },
    {
      number: "03",
      icon: "packing" as const,
      title: "Insured Air & Ocean Freight",
      description:
        "Your cargo is dispatched via fast express transit with complete customs clearance and real-time tracking.",
    },
    {
      number: "04",
      icon: "shipment" as const,
      title: "Doorstep Delivery",
      description:
        "Final delivery directly to your home, gallery, or client address anywhere in the world.",
    },
  ],
};

export const homeGlobalMarket = {
  eyebrow: "Global Market",
  title: "A Global Marketplace for Dominican Creators & Collectors",
  stat: "USD 57.5 billion in art sales in 2024",
  intro:
    "The global art and luxury market is undergoing a profound transformation. International demand is strong, digital, and ready to buy.",
  bullets: [
    "Fewer extremely high prices, more transactions",
    "Strong growth in the mid-market and private sales",
    "Accessible works find international buyers more easily than 10 years ago",
  ],
  cta: { label: "Explore Global Market", href: "/global-market" },
};

export const homeTestimonials = {
  title: "Trusted by Collectors, Galleries & Merchants",
  items: [
    {
      name: "Dominique V.",
      quote:
        "BAGIA RD handled the transport of three 18th-century paintings from Paris to Santo Domingo flawlessly. Unmatched professionalism.",
    },
    {
      name: "Carlos M.",
      quote:
        "As a Dominican jeweler exporting to Florida and Spain, BAGIA RD transformed our international sales with customs-clear shipping.",
    },
    {
      name: "Elena R.",
      quote:
        "The Europe concierge service sourced a rare Birkin bag in Paris for my collection. Fast, secure, and completely discreet.",
    },
    {
      name: "Isabelle M.",
      quote:
        "Professional packaging and real-time tracking gave us total peace of mind shipping a sculpture to Miami.",
    },
    {
      name: "Rafael S.",
      quote:
        "Their subscription plan made weekly pickups effortless for our gallery's international sales.",
    },
    {
      name: "Camille D.",
      quote:
        "Discreet, reliable, and always responsive — exactly what high-value logistics requires.",
    },
    {
      name: "Marco T.",
      quote:
        "BAGIA RD opened European markets we could never reach on our own.",
    },
    {
      name: "Sophie L.",
      quote:
        "Museum-grade packing standards that match the value of every piece we ship.",
    },
  ],
  source: "Client testimonials collected via BAGIA RD",
};

export const homeCategories = [
  {
    id: "jewelry" as const,
    title: "Jewelry And Watches",
    cta: "Request your quote for shipping jewelry and watches",
    button: "Calculate",
    href: "https://bagiard.com/bijoux-montres/",
    image: "https://bagiard.com/wp-content/uploads/2025/01/ai-generated-9024275_1280.jpg",
    imageAlt: "Luxury jewelry and watch piece",
  },
  {
    id: "painting" as const,
    title: "Paintings & Works of Art",
    cta: "Specialized shipping for paintings and fragile art",
    button: "Calculate",
    href: "https://bagiard.com/simulateur-de-frais-dexpedition/",
    image: "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2269631809-1.webp",
    imageAlt: "Colorful floral artwork",
  },
];

export const homeContact = {
  title: "Ready to Ship or Buy Worldwide?",
  eyebrow: "Get in touch",
  mapQuery: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, Dominican Republic",
  items: [
    {
      label: "Mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      label: "Address",
      value: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, Dominican Republic",
    },
  ],
  cta: { label: "Contact Us", href: "/contact-us" },
};

const homePartnersLogos = homePartners.logos;

export function getHomePartners(lang: Language) {
  switch (lang) {
    case "es":
      return { title: "Nuestros socios en París y en todo el mundo", logos: homePartnersLogos };
    case "fr":
      return { title: "Nos partenaires à Paris et dans le monde", logos: homePartnersLogos };
    case "en":
    default:
      return { title: homePartners.title, logos: homePartnersLogos };
  }
}

export function getHomeProcess(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Cómo funciona",
        subtitle: "Proceso simple de 4 pasos para envíos y sourcing internacional seguro.",
        steps: [
          {
            number: "01",
            icon: "attention" as const,
            title: "Solicite una cotización o sourcing",
            description:
              "Complete nuestro formulario en línea o escríbanos por WhatsApp con los detalles de su pieza o solicitud.",
          },
          {
            number: "02",
            icon: "store" as const,
            title: "Inspección y embalaje a medida",
            description:
              "Recogemos su artículo localmente o lo buscamos en Europa, con inspección exhaustiva y embalaje de nivel museo.",
          },
          {
            number: "03",
            icon: "packing" as const,
            title: "Flete aéreo y marítimo asegurado",
            description:
              "Su carga se envía con tránsito express, despacho aduanero completo y seguimiento en tiempo real.",
          },
          {
            number: "04",
            icon: "shipment" as const,
            title: "Entrega a domicilio",
            description:
              "Entrega final en su hogar, galería o dirección del cliente en cualquier parte del mundo.",
          },
        ],
      };
    case "fr":
      return {
        title: "Comment ça marche",
        subtitle: "Un processus en 4 étapes pour un transport et un sourcing international sécurisés.",
        steps: [
          {
            number: "01",
            icon: "attention" as const,
            title: "Demandez un devis ou un sourcing",
            description:
              "Remplissez notre formulaire en ligne ou contactez-nous sur WhatsApp avec les détails de votre pièce.",
          },
          {
            number: "02",
            icon: "store" as const,
            title: "Inspection & emballage sur mesure",
            description:
              "Nous collectons votre article localement ou le sourçons en Europe, avec inspection rigoureuse et emballage muséal.",
          },
          {
            number: "03",
            icon: "packing" as const,
            title: "Fret aérien & maritime assuré",
            description:
              "Votre envoi transite en express avec dédouanement complet et suivi en temps réel.",
          },
          {
            number: "04",
            icon: "shipment" as const,
            title: "Livraison à domicile",
            description:
              "Livraison finale à votre domicile, galerie ou adresse client partout dans le monde.",
          },
        ],
      };
    case "en":
    default:
      return homeProcess;
  }
}

export function getHomeGlobalMarket(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Mercado global",
        title: "Un mercado global para creadores y coleccionistas dominicanos",
        stat: "USD 57.500 millones en ventas de arte en 2024",
        intro:
          "El mercado mundial del arte y del lujo está experimentando una profunda transformación. La demanda internacional es sólida, digital y lista para comprar.",
        bullets: [
          "Menos precios extremadamente altos, más transacciones",
          "Fuerte crecimiento en el mercado medio y ventas privadas",
          "Las obras accesibles encuentran compradores internacionales más fácilmente que hace 10 años",
        ],
        cta: { label: "Explorar mercado global", href: "/global-market" },
      };
    case "fr":
      return {
        eyebrow: "Marché mondial",
        title: "Un marché mondial pour créateurs et collectionneurs dominicains",
        stat: "57,5 milliards USD de ventes d'art en 2024",
        intro:
          "Le marché mondial de l'art et du luxe connaît une profonde transformation. La demande internationale est forte, numérique et prête à acheter.",
        bullets: [
          "Moins de prix extrêmement élevés, plus de transactions",
          "Forte croissance du marché intermédiaire et des ventes privées",
          "Les œuvres accessibles trouvent des acheteurs internationaux plus facilement qu'il y a 10 ans",
        ],
        cta: { label: "Explorer le marché mondial", href: "/global-market" },
      };
    case "en":
    default:
      return homeGlobalMarket;
  }
}

export function getHomeTestimonials(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Confiado por coleccionistas, galerías y comerciantes",
        items: [
          {
            name: "Dominique V.",
            quote:
              "BAGIA RD transportó tres pinturas del siglo XVIII de París a Santo Domingo sin un solo problema. Profesionalismo inigualable.",
          },
          {
            name: "Carlos M.",
            quote:
              "Como joyero dominicano exportando a Florida y España, BAGIA RD transformó nuestras ventas internacionales con envíos aduaneros claros.",
          },
          {
            name: "Elena R.",
            quote:
              "El servicio de concierjería en Europa encontró un Birkin raro en París para mi colección. Rápido, seguro y totalmente discreto.",
          },
          {
            name: "Isabelle M.",
            quote:
              "El embalaje profesional y el seguimiento en tiempo real nos dieron total tranquilidad al enviar una escultura a Miami.",
          },
          {
            name: "Rafael S.",
            quote:
              "Su plan de suscripción hizo que las recogidas semanales fueran sencillas para las ventas internacionales de nuestra galería.",
          },
          {
            name: "Camille D.",
            quote:
              "Discreto, confiable y siempre receptivo — exactamente lo que requiere la logística de alto valor.",
          },
          {
            name: "Marco T.",
            quote:
              "BAGIA RD abrió mercados europeos que nunca hubiéramos alcanzado por nuestra cuenta.",
          },
          {
            name: "Sophie L.",
            quote:
              "Estándares de embalaje de nivel museo acordes al valor de cada pieza que enviamos.",
          },
        ],
        source: "Testimonios de clientes recopilados por BAGIA RD",
      };
    case "fr":
      return {
        title: "La confiance de collectionneurs, galeries et commerçants",
        items: [
          {
            name: "Dominique V.",
            quote:
              "BAGIA RD a transporté trois peintures du XVIIIe siècle de Paris à Saint-Domingue sans la moindre faille. Un professionnalisme remarquable.",
          },
          {
            name: "Carlos M.",
            quote:
              "En tant que joaillier dominicain exportant vers la Floride et l'Espagne, BAGIA RD a transformé nos ventes internationales.",
          },
          {
            name: "Elena R.",
            quote:
              "Le service de conciergerie en Europe a sourcé un Birkin rare à Paris pour ma collection. Rapide, sécurisé et totalement discret.",
          },
          {
            name: "Isabelle M.",
            quote:
              "L'emballage professionnel et le suivi en temps réel nous ont apporté une totale sérénité pour l'envoi d'une sculpture à Miami.",
          },
          {
            name: "Rafael S.",
            quote:
              "Leur abonnement a simplifié les collectes hebdomadaires pour les ventes internationales de notre galerie.",
          },
          {
            name: "Camille D.",
            quote:
              "Discret, fiable et toujours réactif — exactement ce qu'exige la logistique de haute valeur.",
          },
          {
            name: "Marco T.",
            quote:
              "BAGIA RD a ouvert des marchés européens que nous n'aurions jamais pu atteindre seuls.",
          },
          {
            name: "Sophie L.",
            quote:
              "Des standards d'emballage muséal à la hauteur de la valeur de chaque pièce expédiée.",
          },
        ],
        source: "Témoignages clients recueillis par BAGIA RD",
      };
    case "en":
    default:
      return homeTestimonials;
  }
}

export function getHomeCategories(lang: Language) {
  switch (lang) {
    case "es":
      return [
        {
          id: "jewelry" as const,
          title: "Joyería y Relojes",
          cta: "Solicite su cotización para envío de joyería y relojes",
          button: "Calcular",
          href: "https://bagiard.com/bijoux-montres/",
          image: homeCategories[0].image,
          imageAlt: "Pieza de joyería y reloj de lujo",
        },
        {
          id: "painting" as const,
          title: "Pinturas y Obras de Arte",
          cta: "Envío especializado para pinturas y arte frágil",
          button: "Calcular",
          href: "https://bagiard.com/simulateur-de-frais-dexpedition/",
          image: homeCategories[1].image,
          imageAlt: "Obra de arte floral colorida",
        },
      ];
    case "fr":
      return [
        {
          id: "jewelry" as const,
          title: "Joaillerie & Montres",
          cta: "Demandez votre devis pour l'expédition de bijoux et montres",
          button: "Calculer",
          href: "https://bagiard.com/bijoux-montres/",
          image: homeCategories[0].image,
          imageAlt: "Pièce de joaillerie et montre de luxe",
        },
        {
          id: "painting" as const,
          title: "Peintures & Œuvres d'Art",
          cta: "Expédition spécialisée pour peintures et art fragile",
          button: "Calculer",
          href: "https://bagiard.com/simulateur-de-frais-dexpedition/",
          image: homeCategories[1].image,
          imageAlt: "Œuvre florale colorée",
        },
      ];
    case "en":
    default:
      return homeCategories;
  }
}

export function getHomeContact(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "¿Listo para enviar o comprar en todo el mundo?",
        eyebrow: "Contáctenos",
        mapQuery: homeContact.mapQuery,
        items: [
          {
            label: "Correo",
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
          },
          {
            label: "Teléfono",
            value: siteConfig.phone,
            href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
          },
          {
            label: "Dirección",
            value: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, República Dominicana",
          },
        ],
        cta: { label: "Contáctenos", href: "/contact-us" },
      };
    case "fr":
      return {
        title: "Prêt à expédier ou acheter dans le monde entier ?",
        eyebrow: "Nous contacter",
        mapQuery: homeContact.mapQuery,
        items: [
          {
            label: "E-mail",
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
          },
          {
            label: "Téléphone",
            value: siteConfig.phone,
            href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
          },
          {
            label: "Adresse",
            value: "Av. Gustavo Mejía Ricart 271, Santo Domingo 10135, République Dominicaine",
          },
        ],
        cta: { label: "Nous contacter", href: "/contact-us" },
      };
    case "en":
    default:
      return homeContact;
  }
}

export function getHomeTrackOrder(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Rastree su pedido",
        subtitle: "Ingrese su número de pedido, ID de seguimiento o correo para verificar el estado.",
        tablistLabel: "Método de seguimiento",
        submitLabel: "Rastrear",
        tabs: [
          { id: "order" as const, label: "N.º de pedido", placeholder: "Número de pedido", inputType: "text" as const },
          { id: "tracking" as const, label: "Seguimiento", placeholder: "Número de seguimiento", inputType: "text" as const },
          { id: "email" as const, label: "Correo", placeholder: "Correo electrónico", inputType: "email" as const },
        ],
      };
    case "fr":
      return {
        title: "Suivez votre commande",
        subtitle: "Entrez votre numéro de commande, identifiant de suivi ou e-mail pour vérifier le statut.",
        tablistLabel: "Méthode de suivi",
        submitLabel: "Suivre",
        tabs: [
          { id: "order" as const, label: "N° commande", placeholder: "Numéro de commande", inputType: "text" as const },
          { id: "tracking" as const, label: "Suivi", placeholder: "Numéro de suivi", inputType: "text" as const },
          { id: "email" as const, label: "E-mail", placeholder: "Adresse e-mail", inputType: "email" as const },
        ],
      };
    case "en":
    default:
      return {
        title: "Track your order",
        subtitle: "Enter your order number, tracking ID, or email to check status.",
        tablistLabel: "Tracking method",
        submitLabel: "Track",
        tabs: [
          { id: "order" as const, label: "Order number", placeholder: "Order number", inputType: "text" as const },
          { id: "tracking" as const, label: "Tracking number", placeholder: "Tracking number", inputType: "text" as const },
          { id: "email" as const, label: "Email", placeholder: "Email", inputType: "email" as const },
        ],
      };
  }
}



