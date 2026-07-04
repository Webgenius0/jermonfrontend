import type { PageContent } from "./types";

export const homePage = {
  slug: "home",
  path: "/",
  title: "Inicio",
  metaDescription:
    "BAGIA RD — joyería, relojería, moda, arte y logística internacional en Santo Domingo.",
  sourceFile: "https://bagiard.com/",
} as const;

export const homeHero = {
  lines: [
    "Joyería y Relojería",
    "Moda",
    "Arte",
    "Lo que es importante para usted,",
    "nosotros se lo proporcionamos.",
  ],
  subtitle: "Descubra nuestras soluciones a la medida",
  backgroundImage:
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1920&q=80",
  buttons: [
    { label: "Suscribirse", href: "/ofertas-y-suscripciones" },
    { label: "Crear un envío", href: "/seguimiento" },
    { label: "Vender mis artículos", href: "/comercializacion-internacional" },
  ],
};

export const homePartners = {
  title: "Nuestros Socios en París y en todo el Mundo",
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

export const homeExpertise = {
  title: "Notre Expertise",
  items: [
    {
      number: "01",
      icon: "rocket" as const,
      title: "Envío rápido y confiable",
      description:
        "Garantizamos envíos rápidos y confiables a todo el mundo, asegurándonos de que sus mercancías lleguen a su destino de forma segura y puntual.",
    },
    {
      number: "02",
      icon: "package" as const,
      title: "Empaque profesional",
      description:
        "Nuestro equipo utiliza técnicas de embalaje avanzadas para garantizar una protección óptima de sus objetos durante el transporte.",
    },
    {
      number: "03",
      icon: "headset" as const,
      title: "Procesamiento rápido",
      description:
        "Procedimientos sencillos, eficaces y rápidos para servicios en un plazo de 24 a 48 horas.",
    },
  ],
};

export const homeConcierge = {
  luxury: {
    title: "Lujo y Bolso",
    bullets: [
      "Bolsos Hermès (Kelly, Birkin, Constance, bajo ciertas condiciones)",
      "Artículos de Chanel, Dior y Louis Vuitton en tienda",
      "Ediciones limitadas, artículos imposibles de encontrar en la zona",
      "Accesorios y marroquinería de alta gama",
    ],
  },
  art: {
    title: "Arte y objetos de colección",
    bullets: [
      "Obras disponibles únicamente en París o Londres en galerías o ventas privadas",
      "Arte contemporáneo, fotografía, arte decorativo",
      "Objetos de diseño y piezas únicas",
    ],
  },
  main: {
    title: "Concierjería de compras en Europa – Arte y Lujo",
    intro:
      "Ofrecemos a nuestros clientes en la República Dominicana un servicio de compra y abastecimiento en Europa, destinado a objetos de lujo, piezas raras y obras de arte.",
    boutiqueHeading: "Algunas casas, galerías y boutiques europeas:",
    boutiqueBullets: [
      "no venden a distancia",
      "rechazan a los compradores no europeos",
      "reservan productos para clientela local o fiel",
    ],
    closing:
      "Compramos por usted, en su nombre, en Europa, y luego organizamos el envío seguro a Santo Domingo o al extranjero.",
    cta: { label: "Más información", href: "/concierjeria-de-compras-en-europa-arte-y-lujo" },
    image:
      "https://bagiard.com/wp-content/uploads/2024/06/IMG_4856-768x1013.webp",
  },
};

export const homeCategories = [
  {
    id: "jewelry",
    title: "Joyas y Relojes",
    cta: "Obtenga una cotización instantánea",
    button: "Simulación",
    href: "/contactenos",
  },
  {
    id: "painting",
    title: "Pintura y Arte gráfico",
    cta: "Obtenga una cotización instantánea",
    button: "Simulación",
    href: "/contactenos",
  },
];

export const homeGlobalMarket = {
  eyebrow: "Mercado mundial del arte",
  title: "mercado mundial inmenso y activo",
  stat: "57,5 mil millones de USD en ventas en 2024",
  bullets: [
    "menos precios extremadamente altos, más transacciones",
    "fuerte crecimiento del mid-market, de las ventas privadas y de los compradores internacionales",
  ],
  cta: { label: "Comercialización", href: "/comercializacion-internacional" },
};

export const homeProcess = {
  title: "Proceso sencillo y eficaz",
  steps: [
    {
      title: "atención",
      description:
        "Seguimiento de sus artículos desde el punto de recogida hasta nuestras instalaciones.",
    },
    {
      title: "Almacén",
      description:
        "Una vez en nuestras instalaciones, sus artículos se almacenan y preparan antes de ser embalados.",
    },
    {
      title: "Empaque",
      description:
        "Empaque cuidadoso adaptado a la fragilidad y al valor de cada objeto.",
    },
    {
      title: "Envío",
      description: "Servicio de envío variado y adaptado a cada destino.",
    },
    {
      title: "Entrega",
      description:
        "Siga el envío de sus lotes desde nuestras instalaciones hasta la entrega en mano de su artículo.",
    },
  ],
};

export const homeTestimonials = {
  title: "Lo que dice la gente sobre nosotros",
  source: "Opiniones de clientes en la página de Google BAGIA París en Francia.",
  items: [
    {
      name: "Lukáš Peták",
      quote:
        "I have used BAGIA services two times already and on both accounts their service was great, keeping me informed at every step of the way.",
    },
    {
      name: "Blot Michel",
      quote:
        "Une équipe jeune et sérieuse. Disponibilité, réponse rapide et tarifs parfaits. Je recommande a 1000 %.",
    },
    {
      name: "stefano p",
      quote:
        "fantastic service! Super kind team, very appropriate packaging and fast picking/delivery.",
    },
    {
      name: "Cameron Steiner",
      quote:
        "Always my go-to when shipping internationally from Paris to the US. Jerome and the team make it seamless.",
    },
    {
      name: "pisethkoma phat",
      quote:
        "Superb customer service and very satisfied with the service provided. Highly recommended shipper.",
    },
    {
      name: "Megan Hearne",
      quote:
        "You found the best shipper in Paris. My experience with Bagia has been exceptional.",
    },
    {
      name: "Keith Amery",
      quote:
        "Again Bagia provided the best quote and no hidden fees. Will definitely be using again.",
    },
    {
      name: "Mengyi Li",
      quote:
        "Sie sind immer super freundlich und reagieren sehr schnell auf Nachrichten!",
    },
  ],
};

export const homeFaq = {
  title: "Preguntas frecuentes",
  items: [
    {
      question: "¿Quiénes somos exactamente?",
      answer:
        "Somos una empresa de micro‑logística especializada en obras de arte, artículos de lujo y marroquinería, con sede en Santo Domingo. Gestionamos recolección, embalaje profesional, almacenamiento seguro, envíos nacionales e internacionales y venta internacional.",
    },
    {
      question: "¿A quién están dirigidos sus servicios?",
      answer: "Nuestros servicios están dirigidos a:",
      bullets: [
        "particulares que poseen objetos de valor",
        "artistas y coleccionistas",
        "revendedores, tiendas y galerías",
        "clientes que desean vender internacionalmente sin gestionar la logística",
      ],
    },
    {
      question: "¿Por qué es necesario un plan de suscripción?",
      answer:
        "La suscripción garantiza acceso a infraestructura segura, rutas regulares de recolección, seguro y estándares de manipulación, y tarifas preferenciales.",
    },
    {
      question: "¿Recogen los artículos en mi domicilio?",
      answer:
        "Sí. Organizamos rutas semanales de recolección en Santo Domingo y en las principales zonas del país. También ofrecemos recolecciones urgentes.",
    },
    {
      question: "¿Cómo se embalan los artículos?",
      answer:
        "El embalaje depende de la naturaleza del objeto: lujo y marroquinería con protección reforzada; obras de arte con embalaje de conservación. Cada artículo es inspeccionado, protegido y documentado.",
    },
    {
      question: "¿Realizan envíos a todo el mundo?",
      answer:
        "Sí, sujeto a las regulaciones locales del país de destino. Siempre le informamos previamente si un destino requiere documentación específica.",
    },
    {
      question: "¿Cómo funciona la venta internacional?",
      answer: "Usted nos confía sus artículos y nosotros:",
      orderedList: [
        "los recogemos y almacenamos",
        "los preparamos",
        "los ponemos a la venta en plataformas internacionales",
        "gestionamos el pedido, el envío y la entrega",
        "le transferimos el importe tras la venta",
      ],
    },
    {
      question: "¿Cómo empezar?",
      answer: "Es muy sencillo:",
      orderedList: [
        "Cree su cuenta",
        "Elija su suscripción",
        "Programe su primera recolección",
      ],
    },
  ],
};

export const homeContact = {
  title: "Contáctenos",
  items: [
    { label: "Phone", value: "+1 (809) 425-2964", href: "tel:+18094252964" },
    { label: "WhatsApp", value: "WhatsApp", href: "http://wa.me/18094252964" },
    { label: "E-mail", value: "info@bagiard.com", href: "mailto:info@bagiard.com" },
    {
      label: "Adresse",
      value: "Calle Mercurio 17, Santo Domingo Este, República Dominicana",
    },
  ],
  mapQuery: "Calle Mercurio 17, Santo Domingo Este, República Dominicana",
};

export type HomePageData = typeof homePage;
