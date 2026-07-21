import { Language } from "@/context/LanguageContext";

const uploads = "https://bagiard.com/wp-content/uploads";

export const aboutUsPage = {
  slug: "about-us",
  path: "/about-us",
  title: "About Us",
  metaDescription:
    "BAGIA RD is a Santo Domingo logistics company specialized in international transport, air and sea freight, storage, and distribution across the Dominican Republic.",
};

export function getAboutUsHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Quiénes Somos",
        title: "Una experiencia nacida en París, al servicio de sus objetos valiosos",
        paragraphs: [
          "Nuestra historia comienza en París, epicentro mundial del arte y el lujo. Fue en el corazón de este ecosistema donde construimos nuestra experiencia acompañando a coleccionistas, casas de lujo y galerías.",
        ],
        image: `${uploads}/2024/06/artiste-palette-couleurs.webp`,
        imageAlt: "Artista trabajando en una pieza cerámica colorida",
        imageCaptionTitle: "Herencia parisina y sourcing de arte",
        imageCaptionText:
          "Construida apoyando galerías, coleccionistas y casas de moda de lujo en toda Europa.",
      };
    case "fr":
      return {
        eyebrow: "Qui Sommes-Nous",
        title: "Une expérience née à Paris, au service de vos objets précieux",
        paragraphs: [
          "Notre histoire commence à Paris, épicentre mondial de l'art et du luxe. C'est au cœur de cet écosystème exigeant que nous avons bâti notre expertise.",
        ],
        image: `${uploads}/2024/06/artiste-palette-couleurs.webp`,
        imageAlt: "Artiste travaillant sur une pièce céramique colorée",
        imageCaptionTitle: "Héritage parisien & sourcing d'art",
        imageCaptionText:
          "Construite en accompagnant galeries, collectionneurs et maisons de luxe à travers l'Europe.",
      };
    case "en":
    default:
      return {
        eyebrow: "About Us",
        title: "An Experience Born In Paris, At The Service Of Your Valuables",
        paragraphs: [
          "Our story begins in Paris, one of the world's epicenters of art and luxury. It was in the heart of this demanding ecosystem that we built our expertise, spending several years supporting collectors, luxury houses, artists, galleries, and merchants facing a problem that seems simple in appearance yet complex in execution: how to transport, store, ship, and sell valuables with total confidence, anywhere in the world.",
        ],
        image: `${uploads}/2024/06/artiste-palette-couleurs.webp`,
        imageAlt: "Artist working on a colorful ceramic piece",
        imageCaptionTitle: "Parisian Heritage & Art Sourcing",
        imageCaptionText:
          "Built supporting galleries, collectors, and luxury fashion houses across Europe.",
      };
  }
}

export function getAboutUsVision(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Nuestra Visión",
        description:
          "Crear un puente duradero entre la República Dominicana, Europa y el resto del mundo, poniendo nuestra experiencia al servicio de quienes exigen lo mejor para sus bienes valiosos.",
        backgroundImage: `${uploads}/2024/06/shutterstock_2296442929-scaled.webp`,
      };
    case "fr":
      return {
        title: "Notre Vision",
        description:
          "Créer un pont durable entre la République Dominicaine, l'Europe et le reste du monde au service de l'excellence.",
        backgroundImage: `${uploads}/2024/06/shutterstock_2296442929-scaled.webp`,
      };
    case "en":
    default:
      return {
        title: "Our Vision",
        description:
          "Create a lasting bridge between the Dominican Republic, Europe, and the rest of the world — putting our experience at the service of those who demand the best for their valuables.",
        backgroundImage: `${uploads}/2024/06/shutterstock_2296442929-scaled.webp`,
      };
  }
}

export const operationalExperience = {
  title: "An Operational Experience, Not A Theoretical Promise",
  intro:
    "Our experience is not based on concepts, but on real operational practice:",
  bullets: [
    "High-value object management",
    "High requirements for packaging and preservation",
    "Customs and international restrictions",
    "Very high expectations for discretion, security, and reliability",
  ],
  closing:
    "Over the years, we have developed rigorous procedures, a trusted partner network, and a precise understanding of the challenges specific to art, luxury, and leather goods.",
};

export const concreteImpact = {
  title: "A Concrete Impact For Merchants And Creators",
  intro:
    "Our mission is not limited to transporting objects. We help our clients grow their business.",
  servicesIntro: "Thanks to our services:",
  bullets: [
    "Merchants now sell internationally without managing logistics",
    "Creators access markets that were previously inaccessible",
    "Private clients buy or sell exceptional pieces with total peace of mind",
  ],
  closing:
    "For them, we become a strategic partner — not just a service provider.",
  images: [
    {
      src: `${uploads}/2024/06/shutterstock_1578078370-1.webp`,
      alt: "Sculpture secured in a custom shipping crate",
    },
    {
      src: `${uploads}/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp`,
      alt: "Luxury vintage object",
    },
    {
      src: `${uploads}/2024/06/IMG_4856-768x1013.webp`,
      alt: "Art object prepared for shipment",
    },
  ],
};

export const whyDominicanRepublic = {
  title: "Why The Dominican Republic?",
  intro:
    "Building on this European experience, we made the strategic decision to establish our operations in Santo Domingo to meet growing demand:",
  bullets: [
    "Facilitate access to international markets",
    "Offer specialized logistics services unavailable locally",
    "Give Dominican merchants and individuals direct access to Europe and the rest of the world",
  ],
  closing:
    "We designed our structure as a premium logistics hub, capable of connecting the Dominican Republic with Paris, London, and the world's major markets.",
  watermarkImage: `${uploads}/2024/06/shutterstock_2296442929-scaled.webp`,
};

export const internationalClientele = {
  title: "An International, Demanding And Loyal Clientele",
  intro:
    "Today we support clients in several countries, with the same level of demand:",
  bullets: [
    "High-net-worth individuals",
    "Artists and collectors",
    "Resellers and specialized merchants",
    "Luxury sector players seeking international markets",
  ],
  trustIntro: "Their loyalty is based on one essential element: trust.",
  trustParagraphs: [
    "Trust in the way their items are handled, protected, transported, stored, or sold.",
    "Trust in our ability to manage what cannot be left to chance or entrusted to generalist operators.",
  ],
  image: `${uploads}/2024/06/shutterstock_2296442929-1024x683.webp`,
  logoSymbol: `${uploads}/2025/05/BAGIA-Logo-Symbol.png`,
};

export const aboutUsVision = {
  title: "Our Vision",
  description:
    "Create a lasting bridge between the Dominican Republic, Europe, and the rest of the world — putting our experience at the service of those who demand the best for their valuables.",
  backgroundImage: `${uploads}/2024/06/shutterstock_2296442929-scaled.webp`,
};

export const aboutUsJoinCta = {
  title: "Join Us On Our Journey",
  description:
    "As we continue to grow and evolve, we remain true to our commitment to excellence. We invite you to join us.",
  logoSymbol: `${uploads}/2025/05/BAGIA-Logo-Symbol.png`,
  cta: { label: "Contact Us", href: "/contactenos" },
};

export function getOperationalExperience(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Una experiencia operativa, no una promesa teórica",
        intro: "Nuestra experiencia no se basa en conceptos, sino en la práctica operativa real:",
        bullets: [
          "Gestión de objetos de alto valor",
          "Altos requisitos de embalaje y preservación",
          "Aduanas y restricciones internacionales",
          "Expectativas muy altas de discreción, seguridad y fiabilidad",
        ],
        closing:
          "A lo largo de los años, hemos desarrollado procedimientos rigurosos, una red de socios de confianza y una comprensión precisa de los desafíos del arte, el lujo y la marroquinería.",
      };
    case "fr":
      return {
        title: "Une expérience opérationnelle, pas une promesse théorique",
        intro: "Notre expérience ne repose pas sur des concepts, mais sur une pratique opérationnelle réelle :",
        bullets: [
          "Gestion d'objets de haute valeur",
          "Exigences élevées d'emballage et de préservation",
          "Douanes et restrictions internationales",
          "Attentes très élevées de discrétion, sécurité et fiabilité",
        ],
        closing:
          "Au fil des années, nous avons développé des procédures rigoureuses, un réseau de partenaires de confiance et une compréhension précise des enjeux de l'art, du luxe et de la maroquinerie.",
      };
    case "en":
    default:
      return operationalExperience;
  }
}

export function getConcreteImpact(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Un impacto concreto para comerciantes y creadores",
        intro: "Nuestra misión no se limita a transportar objetos. Ayudamos a nuestros clientes a hacer crecer su negocio.",
        servicesIntro: "Gracias a nuestros servicios:",
        bullets: [
          "Los comerciantes venden internacionalmente sin gestionar la logística",
          "Los creadores acceden a mercados antes inaccesibles",
          "Los clientes privados compran o venden piezas excepcionales con total tranquilidad",
        ],
        closing: "Para ellos, nos convertimos en un socio estratégico — no solo un proveedor de servicios.",
        images: concreteImpact.images,
      };
    case "fr":
      return {
        title: "Un impact concret pour commerçants et créateurs",
        intro: "Notre mission ne se limite pas au transport d'objets. Nous aidons nos clients à développer leur activité.",
        servicesIntro: "Grâce à nos services :",
        bullets: [
          "Les commerçants vendent à l'international sans gérer la logistique",
          "Les créateurs accèdent à des marchés auparavant inaccessibles",
          "Les clients privés achètent ou vendent des pièces exceptionnelles en toute sérénité",
        ],
        closing: "Pour eux, nous devenons un partenaire stratégique — pas seulement un prestataire.",
        images: concreteImpact.images,
      };
    case "en":
    default:
      return concreteImpact;
  }
}

export function getWhyDominicanRepublic(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "¿Por qué la República Dominicana?",
        intro:
          "Apoyándonos en esta experiencia europea, tomamos la decisión estratégica de establecer nuestras operaciones en Santo Domingo para responder a una demanda creciente:",
        bullets: [
          "Facilitar el acceso a mercados internacionales",
          "Ofrecer servicios logísticos especializados no disponibles localmente",
          "Dar a comerciantes e individuos dominicanos acceso directo a Europa y al resto del mundo",
        ],
        closing:
          "Diseñamos nuestra estructura como un hub logístico premium, capaz de conectar la República Dominicana con París, Londres y los principales mercados del mundo.",
        watermarkImage: whyDominicanRepublic.watermarkImage,
      };
    case "fr":
      return {
        title: "Pourquoi la République Dominicaine ?",
        intro:
          "Forts de cette expérience européenne, nous avons pris la décision stratégique d'établir nos opérations à Saint-Domingue pour répondre à une demande croissante :",
        bullets: [
          "Faciliter l'accès aux marchés internationaux",
          "Offrir des services logistiques spécialisés indisponibles localement",
          "Donner aux commerçants et particuliers dominicains un accès direct à l'Europe et au reste du monde",
        ],
        closing:
          "Nous avons conçu notre structure comme un hub logistique premium, capable de relier la République Dominicaine à Paris, Londres et aux grands marchés mondiaux.",
        watermarkImage: whyDominicanRepublic.watermarkImage,
      };
    case "en":
    default:
      return whyDominicanRepublic;
  }
}

export function getInternationalClientele(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Una clientela internacional, exigente y fiel",
        intro: "Hoy apoyamos a clientes en varios países, con el mismo nivel de exigencia:",
        bullets: [
          "Personas de alto patrimonio",
          "Artistas y coleccionistas",
          "Revendedores y comerciantes especializados",
          "Actores del sector lujo que buscan mercados internacionales",
        ],
        trustIntro: "Su lealtad se basa en un elemento esencial: la confianza.",
        trustParagraphs: [
          "Confianza en la forma en que se manejan, protegen, transportan, almacenan o venden sus artículos.",
          "Confianza en nuestra capacidad para gestionar lo que no puede dejarse al azar ni confiarse a operadores generalistas.",
        ],
        image: internationalClientele.image,
        logoSymbol: internationalClientele.logoSymbol,
      };
    case "fr":
      return {
        title: "Une clientèle internationale, exigeante et fidèle",
        intro: "Aujourd'hui, nous accompagnons des clients dans plusieurs pays, avec le même niveau d'exigence :",
        bullets: [
          "Particuliers fortunés",
          "Artistes et collectionneurs",
          "Revendeurs et commerçants spécialisés",
          "Acteurs du secteur du luxe visant des marchés internationaux",
        ],
        trustIntro: "Leur fidélité repose sur un élément essentiel : la confiance.",
        trustParagraphs: [
          "Confiance dans la manière dont leurs objets sont manipulés, protégés, transportés, stockés ou vendus.",
          "Confiance dans notre capacité à gérer ce qui ne peut être laissé au hasard ou confié à des opérateurs généralistes.",
        ],
        image: internationalClientele.image,
        logoSymbol: internationalClientele.logoSymbol,
      };
    case "en":
    default:
      return internationalClientele;
  }
}

export function getAboutUsJoinCta(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Únase a nosotros en nuestro camino",
        description:
          "A medida que seguimos creciendo y evolucionando, permanecemos fieles a nuestro compromiso con la excelencia. Le invitamos a unirse a nosotros.",
        logoSymbol: aboutUsJoinCta.logoSymbol,
        cta: { label: "Contáctenos", href: "/contact-us" },
      };
    case "fr":
      return {
        title: "Rejoignez-nous dans notre aventure",
        description:
          "Alors que nous continuons à grandir et évoluer, nous restons fidèles à notre engagement d'excellence. Nous vous invitons à nous rejoindre.",
        logoSymbol: aboutUsJoinCta.logoSymbol,
        cta: { label: "Nous contacter", href: "/contact-us" },
      };
    case "en":
    default:
      return aboutUsJoinCta;
  }
}



