import { Language } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export type PlanFeature = {
  text: string;
  included: boolean;
};

export type ServicePlan = {
  id: string;
  name: string;
  subtitle: string;
  features: PlanFeature[];
  price: string;
  period?: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const offersPage = {
  slug: "offers-and-subscriptions",
  path: "/offers-and-subscriptions",
  title: "Offers & Subscriptions",
  metaDescription:
    "BAGIA RD subscription plans: ESSENTIAL, PRO COLLECTION, and PRIVATE CONCIERGE. Turnkey logistics and international marketing.",
};

export function getOffersHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Planes de suscripción flexibles y logística llave en mano",
        title: "Alcanza al mundo entero con logística llave en mano",
        subtitle:
          "En la era digital, la logística es esencial y da acceso a millones de clientes en todo el mundo.",
        trustMetrics: [
          { value: "0%", label: "Opciones de comisión" },
          { value: "15% dto.", label: "Tarifas logísticas y de servicio" },
          { value: "24/7 VIP", label: "Representante dedicado" },
        ],
      };
    case "fr":
      return {
        badge: "Abonnements flexibles & logistique clé en main",
        title: "Atteignez le monde entier avec une logistique clé en main",
        subtitle:
          "À l'ère du numérique, la logistique devient essentielle et donne accès à des millions de clients dans le monde entier.",
        trustMetrics: [
          { value: "0%", label: "Options de commission" },
          { value: "-15%", label: "Frais logistiques et de service" },
          { value: "24/7 VIP", label: "Représentant dédié" },
        ],
      };
    case "en":
    default:
      return {
        badge: "Flexible Subscription Plans & Turnkey Logistics",
        title: "Reach the whole world with turnkey logistics",
        subtitle:
          "In the digital age of online orders, logistics becomes essential and gives access to millions of customers worldwide",
        trustMetrics: [
          { value: "0%", label: "Commission Options" },
          { value: "15% Off", label: "Logistics & Service Fees" },
          { value: "24/7 VIP", label: "Dedicated Representative" },
        ],
      };
  }
}

export function getChooseService(lang: Language) {
  const getCta = (label: string) => ({ label, href: "/contact-us" });

  switch (lang) {
    case "es":
      return {
        eyebrow: "Ofertas y Suscripciones",
        title: "Elija su Servicio",
        plans: [
          {
            id: "esencial",
            name: "ESENCIAL",
            subtitle: "Acceso logístico seguro / Para: particulares, artistas y clientes ocasionales",
            features: [
              { text: "Acceso al área de clientes", included: true },
              { text: "Dirección logística dedicada", included: true },
              { text: "Acceso a ruta de recogida", included: true },
              { text: "Seguro básico incluido", included: true },
              { text: "Soporte estándar", included: true },
              { text: "Ventas internacionales", included: false },
              { text: "Compras en Europa", included: false },
            ],
            price: "RD$0",
            period: "por mes",
            cta: getCta("Crear una cuenta"),
          },
          {
            id: "pro",
            name: "COLECCIÓN PRO",
            subtitle: "Logística y desarrollo comercial / Para: comerciantes, distribuidores y galerías",
            features: [
              { text: "Todo lo incluido en ESENCIAL", included: true },
              { text: "Ventas internacionales activas", included: true },
              { text: "Búsqueda prioritaria", included: true },
              { text: "15% de reducción en tarifas logísticas", included: true },
              { text: "Acceso a pedidos recurrentes", included: true },
            ],
            price: "RD$15 000",
            period: "por mes",
            cta: getCta("Empezar ahora"),
            featured: true,
          },
          {
            id: "concierge",
            name: "PRIVADO / CONCIERJERÍA",
            subtitle: "Acceso privilegiado y servicios ultra personalizados",
            features: [
              { text: "Todo en COLECCIÓN PRO", included: true },
              { text: "Contacto personal dedicado", included: true },
              { text: "Prioridad máxima en todas las solicitudes", included: true },
              { text: "Servicio de concierjería de compras en Europa", included: true },
              { text: "Máxima discreción", included: true },
            ],
            price: "RD$30 000",
            period: "por mes",
            cta: getCta("Solicitar acceso"),
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Offres & Abonnements",
        title: "Choisissez votre service",
        plans: [
          {
            id: "esencial",
            name: "ESSENTIEL",
            subtitle: "Accès logistique sécurisé / Pour particuliers, artistes et clients occasionnels",
            features: [
              { text: "Accès espace client", included: true },
              { text: "Adresse logistique dédiée", included: true },
              { text: "Accès aux routes de collecte", included: true },
              { text: "Assurance de base", included: true },
              { text: "Support standard", included: true },
              { text: "Ventes internationales", included: false },
            ],
            price: "RD$0",
            period: "par mois",
            cta: getCta("Créer un compte"),
          },
          {
            id: "pro",
            name: "COLLECTION PRO",
            subtitle: "Logistique et développement commercial / Pour commerçants, galeries et e-commerce",
            features: [
              { text: "Tout le plan ESSENTIEL", included: true },
              { text: "Ventes internationales", included: true },
              { text: "Sourcing prioritaire", included: true },
              { text: "15% de réduction sur les frais de service", included: true },
            ],
            price: "RD$15 000",
            period: "par mois",
            cta: getCta("Commencer"),
            featured: true,
          },
          {
            id: "concierge",
            name: "PRIVÉ / CONCIERGERIE",
            subtitle: "Accès privilégié et services ultra-personnalisés",
            features: [
              { text: "Tout le plan COLLECTION PRO", included: true },
              { text: "Interlocuteur dédié", included: true },
              { text: "Priorité absolue sur toutes les demandes", included: true },
              { text: "Accès au service de conciergerie en Europe", included: true },
            ],
            price: "RD$30 000",
            period: "par mois",
            cta: getCta("Demander un accès"),
          },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Offers & Subscriptions",
        title: "Choose Your Service",
        plans: [
          {
            id: "esencial",
            name: "ESSENTIAL",
            subtitle:
              "Secure logistics access / For: individuals, artists, serious occasional clients",
            features: [
              { text: "Client area access", included: true },
              { text: "Dedicated logistics address", included: true },
              { text: "Pickup route access", included: true },
              { text: "Basic insurance", included: true },
              { text: "Standard support", included: true },
              { text: "International sales", included: false },
              { text: "Shopping in Europe", included: false },
            ],
            price: "RD$0",
            period: "per month",
            cta: getCta("Create an account"),
          },
          {
            id: "pro",
            name: "PRO COLLECTION",
            subtitle:
              "Logistics and business development / For: merchants, distributors, galleries, luxury e-commerce",
            features: [
              { text: "ESSENTIAL", included: true },
              { text: "International sales", included: true },
              { text: "Priority sourcing", included: true },
              {
                text: "15% reduction in service and logistics fees",
                included: true,
              },
            ],
            price: "RD$15 000",
            period: "per month",
            cta: getCta("Get started"),
            featured: true,
          },
          {
            id: "concierge",
            name: "PRIVATE / CONCIERGE",
            subtitle: "Privileged access and personalized services",
            features: [
              { text: "Everything in PRO COLLECTION", included: true },
              { text: "Dedicated point of contact", included: true },
              { text: "Priority on all requests", included: true },
              {
                text: "Access to shopping and sourcing services in Europe",
                included: true,
              },
            ],
            price: "RD$30 000",
            period: "per month",
            cta: getCta("Get started"),
          },
        ],
      };
  }
}

export const offersHero = getOffersHero("en");
export const chooseService = getChooseService("en");
export const logisticsBanner = {
  eyebrow: "A logistics solutions dashboard",
  title: "Grow your business with simple, personalized logistics",
  description:
    "Our mission is to provide peace of mind, quality, and profitability. Specialized logistics is the key solution for expanding your business nationally and internationally.",
  backgroundImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
  benefitCards: [
    {
      emoji: "🛡️",
      title: "Total Peace of Mind",
      description: "End-to-end protection for luxury items & art",
    },
    {
      emoji: "✨",
      title: "Uncompromising Quality",
      description: "White-glove custom packaging & handling",
    },
    {
      emoji: "📈",
      title: "Maximum Profitability",
      description: "Expand sales globally with reduced logistics fees",
    },
  ],
};

export const internationalMarketing = {
  eyebrow: "Offers & Subscriptions",
  title: "International Marketing",
  plans: [
    {
      id: "monthly",
      name: "MONTHLY SUBSCRIPTION PLAN",
      subtitle: "Full management, no hassle",
      features: [
        "Ongoing creation and updating of your listings (art, jewelry, design, fashion).",
        "Inventory, pricing, and marketplace communication management.",
        "Secure international shipping and professional packaging handled by BAGIA RD.",
        "Ongoing technical support and advisory.",
        "Save time and avoid administrative errors",
        "Keep an active, professional presence in global markets",
        "Trust your logistics and customer service to experts with experience in luxury and art",
      ],
      price: "RD$15 000",
      period: "per month",
      cta: { label: "Get started", href: "/contactenos" },
      featured: true,
      footerTitle:
        "Ideal for artists, jewelers, or shops that want to sell continuously in international markets without worrying about technical or logistics details.",
      footerIntro: "With our monthly subscription plan, BAGIA RD handles everything:",
      footerBullets: [
        "international platform account management",
        "listing maintenance",
        "buyer support",
        "logistics and shipment tracking",
      ],
    },
    {
      id: "assistance",
      name: "ON-DEMAND ASSISTANCE PLAN",
      subtitle: "At your pace, with expert support",
      features: [
        "Personalized advice to choose platforms and sales strategies.",
        "Product listing creation or improvement: copy, photography, descriptions, pricing.",
        "Initial account setup and step-by-step guidance.",
        "Support for packaging, presentation, and customs documentation.",
        "Flexible service: pay only for what you need",
        "Ideal for launches, trials, or independent artists",
        "Professional support with no long-term commitment",
      ],
      price: "RD$40 000",
      cta: { label: "Get started", href: "/contactenos" },
      footerTitle:
        "Designed for those who want to launch or improve their presence in international markets on a one-off basis, without a monthly commitment.",
      footerText:
        "The on-demand assistance plan offers exactly the help you need to create, optimize, and present your products on the best global sales platforms.",
    },
  ],
};

export const whatsappCta = {
  eyebrow: "Contact Us",
  title: "Don't hesitate — contact us for any information.",
  subtitle: "Message this WhatsApp for immediate assistance.",
  href: siteConfig.whatsapp,
};

export function getWhatsappCta(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Contáctenos",
        title: "No dude — contáctenos para cualquier información.",
        subtitle: "Escríbanos por WhatsApp para asistencia inmediata.",
        href: siteConfig.whatsapp,
      };
    case "fr":
      return {
        eyebrow: "Contactez-nous",
        title: "N'hésitez pas — contactez-nous pour toute information.",
        subtitle: "Écrivez-nous sur WhatsApp pour une assistance immédiate.",
        href: siteConfig.whatsapp,
      };
    case "en":
    default:
      return whatsappCta;
  }
}

export function getLogisticsBanner(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Panel de soluciones logísticas",
        title: "Haga crecer su negocio con logística simple y personalizada",
        description:
          "Nuestra misión es brindar tranquilidad, calidad y rentabilidad. La logística especializada es la clave para expandir su negocio a nivel nacional e internacional.",
        backgroundImage: logisticsBanner.backgroundImage,
        benefitCards: [
          {
            emoji: "🛡️",
            title: "Tranquilidad total",
            description: "Protección integral para artículos de lujo y arte",
          },
          {
            emoji: "✨",
            title: "Calidad sin concesiones",
            description: "Embalaje y manipulación personalizada de alto nivel",
          },
          {
            emoji: "📈",
            title: "Máxima rentabilidad",
            description: "Expanda ventas globalmente con tarifas logísticas reducidas",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Tableau de bord logistique",
        title: "Développez votre activité avec une logistique simple et personnalisée",
        description:
          "Notre mission est d'apporter sérénité, qualité et rentabilité. La logistique spécialisée est la clé pour développer votre activité au niveau national et international.",
        backgroundImage: logisticsBanner.backgroundImage,
        benefitCards: [
          {
            emoji: "🛡️",
            title: "Sérénité totale",
            description: "Protection de bout en bout pour luxe et art",
          },
          {
            emoji: "✨",
            title: "Qualité sans compromis",
            description: "Emballage et manutention sur mesure haut de gamme",
          },
          {
            emoji: "📈",
            title: "Rentabilité maximale",
            description: "Développez vos ventes mondialement avec des frais réduits",
          },
        ],
      };
    case "en":
    default:
      return logisticsBanner;
  }
}

export function getOffersInternationalMarketing(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Ofertas y Suscripciones",
        title: "Comercialización Internacional",
        plans: [
          {
            id: "monthly",
            name: "PLAN DE SUSCRIPCIÓN MENSUAL",
            subtitle: "Gestión completa, sin complicaciones",
            features: [
              "Creación y actualización continua de sus listados (arte, joyería, diseño, moda).",
              "Gestión de inventario, precios y comunicación en marketplaces.",
              "Envío internacional seguro y embalaje profesional gestionado por BAGIA RD.",
              "Soporte técnico y asesoría continua.",
              "Ahorre tiempo y evite errores administrativos",
              "Mantenga una presencia activa y profesional en mercados globales",
              "Confíe su logística y servicio al cliente a expertos en lujo y arte",
            ],
            price: "RD$15 000",
            period: "por mes",
            cta: { label: "Empezar ahora", href: "/contact-us" },
            featured: true,
            footerTitle:
              "Ideal para artistas, joyeros o tiendas que desean vender continuamente en mercados internacionales sin preocuparse por detalles técnicos o logísticos.",
            footerIntro: "Con nuestro plan mensual, BAGIA RD se encarga de todo:",
            footerBullets: [
              "gestión de cuentas en plataformas internacionales",
              "mantenimiento de listados",
              "soporte al comprador",
              "logística y seguimiento de envíos",
            ],
          },
          {
            id: "assistance",
            name: "PLAN DE ASISTENCIA BAJO DEMANDA",
            subtitle: "A su ritmo, con apoyo experto",
            features: [
              "Asesoría personalizada para elegir plataformas y estrategias de venta.",
              "Creación o mejora de listados: copy, fotografía, descripciones, precios.",
              "Configuración inicial de cuenta y guía paso a paso.",
              "Soporte para embalaje, presentación y documentación aduanera.",
              "Servicio flexible: pague solo por lo que necesita",
              "Ideal para lanzamientos, pruebas o artistas independientes",
              "Apoyo profesional sin compromiso a largo plazo",
            ],
            price: "RD$40 000",
            cta: { label: "Empezar ahora", href: "/contact-us" },
            footerTitle:
              "Diseñado para quienes desean lanzar o mejorar su presencia en mercados internacionales de forma puntual, sin compromiso mensual.",
            footerText:
              "El plan de asistencia bajo demanda ofrece exactamente la ayuda que necesita para crear, optimizar y presentar sus productos en las mejores plataformas globales.",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Offres & Abonnements",
        title: "Commercialisation Internationale",
        plans: [
          {
            id: "monthly",
            name: "ABONNEMENT MENSUEL",
            subtitle: "Gestion complète, sans tracas",
            features: [
              "Création et mise à jour continue de vos annonces (art, joaillerie, design, mode).",
              "Gestion des stocks, prix et communications sur les marketplaces.",
              "Expédition internationale sécurisée et emballage professionnel par BAGIA RD.",
              "Support technique et conseil continu.",
              "Gagnez du temps et évitez les erreurs administratives",
              "Maintenez une présence active et professionnelle sur les marchés mondiaux",
              "Confiez logistique et service client à des experts du luxe et de l'art",
            ],
            price: "RD$15 000",
            period: "par mois",
            cta: { label: "Commencer", href: "/contact-us" },
            featured: true,
            footerTitle:
              "Idéal pour artistes, joailliers ou boutiques souhaitant vendre en continu sur les marchés internationaux sans gérer les détails techniques ou logistiques.",
            footerIntro: "Avec notre abonnement mensuel, BAGIA RD gère tout :",
            footerBullets: [
              "gestion des comptes sur plateformes internationales",
              "maintenance des annonces",
              "support acheteurs",
              "logistique et suivi des expéditions",
            ],
          },
          {
            id: "assistance",
            name: "ASSISTANCE À LA DEMANDE",
            subtitle: "À votre rythme, avec un accompagnement expert",
            features: [
              "Conseil personnalisé pour choisir plateformes et stratégies de vente.",
              "Création ou amélioration d'annonces : rédaction, photos, descriptions, prix.",
              "Configuration initiale du compte et accompagnement pas à pas.",
              "Support pour emballage, présentation et documentation douanière.",
              "Service flexible : payez uniquement ce dont vous avez besoin",
              "Idéal pour lancements, essais ou artistes indépendants",
              "Accompagnement professionnel sans engagement long terme",
            ],
            price: "RD$40 000",
            cta: { label: "Commencer", href: "/contact-us" },
            footerTitle:
              "Conçu pour ceux qui souhaitent lancer ou améliorer leur présence internationale ponctuellement, sans abonnement mensuel.",
            footerText:
              "Le plan d'assistance à la demande offre exactement l'aide nécessaire pour créer, optimiser et présenter vos produits sur les meilleures plateformes mondiales.",
          },
        ],
      };
    case "en":
    default:
      return internationalMarketing;
  }
}



