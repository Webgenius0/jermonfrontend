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

export const ofertasPage = {
  slug: "ofertas-y-suscripciones",
  path: "/ofertas-y-suscripciones",
  title: "Ofertas y Suscripciones",
  metaDescription:
    "Planes de suscripción BAGIA RD: ESENCIAL, COLECCIÓN PRO y PRIVATE CONCIERGE. Logística llave en mano y comercialización internacional.",
};

export const ofertasHero = {
  title: "Llegue a todo el mundo gracias a un servicio logístico llave en mano",
  subtitle:
    "En la era digital y de los pedidos en línea, la logística se vuelve fundamental y da acceso a millones de clientes en todo el mundo",
};

export const chooseService = {
  eyebrow: "Ofertas y Suscripciones",
  title: "Elige Tu Servicio",
  plans: [
    {
      id: "esencial",
      name: "ESENCIAL",
      subtitle:
        "Acceso logístico seguro / Para: particulares, artistas, clientes ocasionales serios",
      features: [
        { text: "Contáctenos", included: true },
        { text: "Acceso al área de clientes", included: true },
        { text: "Dirección logística específica", included: true },
        { text: "Acceso a las rutas de recogida", included: true },
        { text: "Seguro básico", included: true },
        { text: "Soporte estándar", included: true },
        { text: "Venta internacional", included: false },
        { text: "Compra en Europa", included: false },
        { text: "Abastecimiento prioritario", included: false },
        {
          text: "Reducción de los gastos de servicio y logística",
          included: false,
        },
      ],
      price: "RD$0",
      period: "per month",
      cta: { label: "Crear una cuenta", href: "/contactenos" },
    },
    {
      id: "pro",
      name: "COLECCIÓN PRO",
      subtitle:
        "Logística y desarrollo comercial / Para: comerciantes, distribuidores, galerías, comercio electrónico de lujo",
      features: [
        { text: "ESENCIAL", included: true },
        { text: "Venta internacional", included: true },
        { text: "Abastecimiento prioritario", included: true },
        {
          text: "15% Reducción de los gastos de servicio y logística",
          included: true,
        },
        { text: "Acceso a pedidos recurrentes", included: true },
      ],
      price: "RD$15 000",
      period: "per month",
      cta: { label: "Empieza ahora", href: "/contactenos" },
      featured: true,
    },
    {
      id: "concierge",
      name: "PRIVATE / CONCIERGE",
      subtitle: "Acceso privilegiado y servicios personalizados",
      features: [
        { text: "Todo PRO COLLECTION", included: true },
        { text: "Persona de contacto dedicada", included: true },
        { text: "Prioridad en todas las solicitudes", included: true },
        {
          text: "Acceso al servicio de compras y abastecimiento en Europa",
          included: true,
        },
        { text: "Mayor discreción", included: true },
        { text: "Tratamiento personalizado", included: true },
        { text: "Costes de abastecimiento reducidos al 15 %", included: true },
      ],
      price: "RD$30 000",
      period: "per month",
      cta: { label: "Empieza ahora", href: "/contactenos" },
    },
  ] satisfies ServicePlan[],
};

export const logisticsBanner = {
  eyebrow: "Un panel de soluciones logísticas",
  title: "Haga crecer su negocio gracias a una logística sencilla y personalizada",
  description:
    "Nuestra misión es proporcionarle tranquilidad, calidad y rentabilidad. La logística especializada es la solución clave para la expansión del negocio a nivel nacional e internacional.",
  backgroundImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
};

export const internationalMarketing = {
  eyebrow: "Ofertas y Suscripciones",
  title: "Comercialización internacional",
  plans: [
    {
      id: "monthly",
      name: "PLAN DE SUSCRIPCIÓN MENSUAL",
      subtitle: "Gestión completa, sin complicaciones",
      features: [
        "Creación y actualización continua de tus publicaciones (arte, joyas, diseño, moda).",
        "Gestión de inventario, precios y comunicación con las plataformas de venta.",
        "Envío internacional seguro y embalaje profesional gestionado por BAGIA RD.",
        "Soporte técnico y asesoría constante.",
        "Ahorra tiempo y evita errores administrativos",
        "Mantén tu presencia activa y profesional en los mercados globales",
        "Confía tu logística y atención al cliente a expertos con experiencia en el sector del lujo y el arte",
      ],
      price: "RD$15 000",
      period: "per month",
      cta: { label: "Empieza ahora", href: "/contactenos" },
      featured: true,
      footerTitle:
        "Ideal para artistas, joyeros o tiendas que quieren vender de forma continua en el mercado internacional sin preocuparse por la parte técnica ni logística.",
      footerIntro: "Con nuestro plan de suscripción mensual, BAGIA RD se encarga de todo:",
      footerBullets: [
        "gestión de cuentas en plataformas internacionales",
        "mantenimiento de publicaciones",
        "atención a compradores",
        "logística y seguimiento de envíos",
      ],
    },
    {
      id: "assistance",
      name: "PLAN DE ASISTENCIA PUNTUAL",
      subtitle: "A tu ritmo, con apoyo experto",
      features: [
        "Asesoría personalizada para elegir plataformas y estrategias de venta.",
        "Creación o mejora de fichas de producto: textos, fotografía, descripción, precios.",
        "Configuración inicial de tu cuenta y guía paso a paso.",
        "Soporte para embalaje, presentación y documentación aduanal.",
        "Servicio flexible: paga solo por lo que necesites",
        "Ideal para lanzamientos, pruebas o artistas independientes",
        "Acompañamiento profesional sin compromiso de permanencia",
      ],
      price: "RD$40 000",
      cta: { label: "Empieza ahora", href: "/contactenos" },
      footerTitle:
        "Diseñado para quienes desean lanzar o mejorar su presencia en el mercado internacional de forma puntual, sin compromiso mensual.",
      footerText:
        "El plan de asistencia puntual ofrece la ayuda exacta que necesitas para crear, optimizar y presentar tus productos en las mejores plataformas de venta global.",
    },
  ],
};

export const whatsappCta = {
  eyebrow: "Contáctenos",
  title: "No lo dude, póngase en contacto con nosotros para cualquier información.",
  subtitle: "Escribe a este WhatsApp para obtener asistencia inmediata.",
  href: siteConfig.whatsapp,
};
