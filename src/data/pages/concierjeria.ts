import type {
  CTASection,
  FAQSection,
  HeroSection,
  ImageAccordionSection,
  PageContent,
  ProcessStepsSection,
  ServiceCardsSection,
  TextSection,
} from "./types";

/**
 * Main content extracted from doc/index.html lines 3966–6767
 * (<main> → end of page body sections, before footer)
 *
 * Page: /concierjeria-de-compras-en-europa-arte-y-lujo
 * (NOT the home/landing page)
 */
export const concierjeriaPage: PageContent = {
  slug: "concierjeria-de-compras-en-europa-arte-y-lujo",
  path: "/concierjeria-de-compras-en-europa-arte-y-lujo",
  title: "Concierjería de compras en Europa",
  metaDescription:
    "Servicio personalizado de adquisición y sourcing en Europa para artículos de lujo, piezas exclusivas y obras de arte.",
  sourceFile: "doc/index.html#L3966-L6767",
  sections: [
    {
      type: "hero",
      id: "hero",
      title: "Concierjería de compras en Europa Arte • Lujo • Piezas Exclusivas",
    },
    {
      type: "logo-marquee",
      id: "trust-logos",
      title: "they trust us",
      hidden: true,
      dividerImage:
        "https://bagiard.com/wp-content/uploads/2024/06/image-2024-06-08T104907.863.webp",
      logos: [
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/d971b1a87578635d179bce7c6d2e4dc0.jpeg",
          alt: "Partner 1",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/isla_500x500.69538809_7ci7qcfv.webp",
          alt: "Partner 2",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/LOGO_DROUOT.jpeg",
          alt: "Drouot",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/logo-biron-2023.png",
          alt: "Biron",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/logo-dcg-1-.webp",
          alt: "DCG",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/logo20220302110058.png",
          alt: "Partner 6",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/38d76a80-b499-4ada-98ae-5f1e74a5fb6e.png",
          alt: "Partner 7",
        },
      ],
    },
    {
      type: "text",
      id: "europe-sourcing-intro",
      title: "Compramos en Europa lo que no es accesible en otros lugares",
      dividerImage:
        "https://bagiard.com/wp-content/uploads/2025/05/BAGIA-Logo-Symbol.png",
      paragraphs: [
        "Algunas piezas no están disponibles en línea. Algunas boutiques no venden a no residentes. Algunas obras y artículos de lujo están reservados a una clientela local, fiel o introducida.",
        "Ahí es exactamente donde comienza nuestro servicio.",
        "Ofrecemos a nuestros clientes un servicio de compra y sourcing a medida en Europa, destinado a artículos de lujo, piezas exclusivas y obras de arte, disponibles únicamente en París, Londres y en determinados circuitos especializados.",
      ],
    },
    {
      type: "service-cards",
      id: "what-we-do",
      eyebrow: "Lo que hacemos por usted",
      title: "Cuando el lujo y el arte solo están al alcance de unos pocos",
      cards: [
        {
          title: "Lujo y marroquinería",
          description: "Intervenimos en la adquisición de:",
          bullets: [
            "bolsos icónicos y piezas altamente demandadas",
            "modelos sujetos a restricciones de acceso",
            "ediciones limitadas o producciones confidenciales",
            "artículos disponibles únicamente en boutiques físicas",
          ],
          footer:
            "Conocemos los códigos, las limitaciones y las exigencias propias de las casas de lujo europeas.",
        },
        {
          title: "Arte y objetos de colección",
          description: "Acompañamos la adquisición de:",
          bullets: [
            "obras disponibles únicamente en determinadas galerías",
            "piezas ofrecidas en ventas privadas",
            "objetos de arte y de colección de difícil acceso a distancia",
          ],
          footer:
            "Actuamos con una comprensión profunda del mercado, de sus usos y de sus exigencias.",
        },
      ],
    },
    {
      type: "image-accordion",
      id: "demanding-clientele",
      title: "Un servicio diseñado para una clientela exigente",
      images: [
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp",
          alt: "Luxury item",
        },
        {
          src: "https://bagiard.com/wp-content/uploads/2024/06/IMG_4856-768x1013.webp",
          alt: "Art piece",
        },
      ],
      paragraphs: ["Este servicio está dirigido a clientes que:"],
      bullets: [
        "buscan piezas específicas o difíciles de encontrar",
        "desean comprar en Europa sin desplazarse",
        "exigen discreción, fiabilidad y experiencia",
        "no quieren confiar sus compras al azar ni a intermediarios no especializados",
      ],
      closing:
        "Cada solicitud es única. Cada misión se gestiona de forma individual.",
    },
    {
      type: "process-steps",
      id: "tailored-approach",
      title: "Un enfoque totalmente a medida, de principio a fin",
      subtitle:
        "Nuestro papel no se limita a la compra. Nos encargamos de todo el proceso:",
      dividerImage:
        "https://bagiard.com/wp-content/uploads/2024/06/image-2024-06-08T104907.863.webp",
      steps: [
        {
          icon: "user-friends",
          title: "Análisis de su solicitud",
          description:
            "Cada misión comienza con un análisis profundo y confidencial de su solicitud. Nos tomamos el tiempo necesario para comprender con precisión:",
          bullets: [
            "la naturaleza exacta del artículo buscado",
            "sus criterios específicos (modelo, año, estado, procedencia)",
            "sus limitaciones de plazo",
            "sus expectativas en materia de discreción y entrega",
          ],
        },
        {
          icon: "project-diagram",
          title: "Estudio de viabilidad y disponibilidad",
          description:
            "Antes de iniciar cualquier gestión, realizamos un estudio riguroso de viabilidad. Este incluye:",
          bullets: [
            "el análisis de la disponibilidad real del artículo",
            "la identificación de los circuitos de acceso (boutiques, galerías, ventas privadas)",
            "la evaluación de las restricciones de compra o exportación",
            "la estimación de los plazos logísticos",
          ],
        },
        {
          icon: "shopping-bag",
          title: "Compra en Europa a través de nuestros contactos",
          description:
            "Una vez validada la solicitud, procedemos a la compra en Europa apoyándonos en:",
          bullets: [
            "nuestras redes profesionales consolidadas",
            "interlocutores identificados en París, Londres y otros centros clave",
            "un conocimiento concreto de los usos y prácticas locales",
          ],
        },
        {
          icon: "check-circle",
          title: "Control de autenticidad y estado",
          description:
            "Cada artículo adquirido es objeto de un control minucioso antes de cualquier envío:",
          bullets: [
            "verificación de la autenticidad",
            "inspección del estado general",
            "coherencia con la descripción inicial",
            "documentación interna (fotografías, informes)",
          ],
        },
        {
          icon: "truck",
          title: "Organización de la logística segura",
          description:
            "Una vez validado el artículo, organizamos una logística completamente segura, adaptada a objetos de valor:",
          bullets: [
            "selección del modo de transporte más adecuado",
            "gestión de las formalidades necesarias",
            "coordinación con socios reconocidos",
            "seguimiento riguroso en cada etapa",
          ],
        },
        {
          icon: "box",
          title: "Embalaje profesional y seguro adecuado",
          description: "Aseguramos un embalaje profesional a medida, en función:",
          bullets: [
            "de la naturaleza del artículo",
            "de su fragilidad",
            "de su valor",
          ],
        },
        {
          icon: "plane-departure",
          title: "Envío internacional o almacenamiento seguro",
          description: "Según su elección, organizamos:",
          bullets: [
            "el envío internacional seguro hasta su dirección",
            "o el almacenamiento seguro en nuestra infraestructura dedicada",
          ],
        },
        {
          icon: "lightbulb",
          title: "Un enfoque global, un solo interlocutor",
          description:
            "Todas estas etapas son gestionadas por un único interlocutor, lo que garantiza:",
          bullets: ["claridad", "coherencia", "discreción", "continuidad del servicio"],
        },
      ],
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Preguntas frecuentes",
      title: "Compra y Sourcing en Europa",
      subtitle: "Arte & Lujo",
      items: [
        {
          question:
            "¿En qué consiste exactamente el servicio de compra en Europa?",
          answer:
            "Se trata de un servicio personalizado de adquisición y sourcing en Europa. Nos encargamos de buscar, adquirir, controlar, asegurar y organizar la logística de artículos de lujo, piezas exclusivas u obras de arte disponibles únicamente en Europa, en su nombre. Usted no compra a distancia ni trata con intermediarios desconocidos. Nosotros actuamos como su representante de confianza en Europa.",
        },
        {
          question: "¿Qué tipo de artículos pueden buscar o comprar?",
          answer: "Intervenimos exclusivamente en el ámbito de:",
          bullets: [
            "artículos de lujo y marroquinería",
            "piezas raras o de acceso restringido",
            "obras de arte y objetos de colección",
          ],
        },
        {
          question:
            "¿Pueden conseguir piezas difíciles de encontrar, como ciertos bolsos o ediciones limitadas?",
          answer:
            "Nuestro trabajo consiste precisamente en acceder a circuitos no visibles en línea y a contextos donde:",
          bullets: [
            "el acceso está restringido",
            "la venta se realiza en boutique física",
            "se privilegia una clientela introducida o local",
          ],
        },
        {
          question: "¿Garantizan que el artículo será encontrado?",
          answer:
            "No. Este servicio es una obligación de medios, no de resultado. Cada búsqueda depende de la rareza de la pieza, de las políticas de las casas de lujo, de la disponibilidad real y del contexto del mercado. Nuestra prioridad es siempre la transparencia, desde el inicio.",
        },
        {
          question: "¿Cómo se asegura la autenticidad de los artículos?",
          answer:
            "Antes de cualquier envío, cada artículo pasa por un control riguroso:",
          bullets: [
            "verificación de autenticidad",
            "inspección del estado",
            "coherencia con la solicitud inicial",
            "documentación interna",
          ],
        },
        {
          question: "¿Quién realiza la compra en Europa?",
          answer:
            "La compra es realizada directamente por nosotros, o a través de interlocutores profesionales de confianza, identificados y controlados.",
          bullets: ["mayor discreción", "mejor gestión de formalidades", "control total de la operación"],
        },
        {
          question: "¿El servicio es confidencial?",
          answer:
            "Absolutamente. La confidencialidad es un pilar central de nuestro servicio. Las solicitudes, los artículos, los montos y las identidades son tratados con la más grande discreción, en cada etapa del proceso.",
        },
        {
          question: "¿Qué ocurre después de la compra?",
          answer: "Una vez adquirido el artículo, nos encargamos de:",
          bullets: [
            "la organización de la logística segura",
            "el embalaje profesional",
            "el seguro adaptado",
            "el envío internacional o el almacenamiento seguro",
          ],
        },
        {
          question:
            "¿Puedo optar por almacenar el artículo en lugar de enviarlo inmediatamente?",
          answer: "Sí. Ofrecemos la posibilidad de almacenamiento seguro, lo que permite:",
          bullets: [
            "diferir la entrega",
            "agrupar varios artículos",
            "gestionar posteriormente una reventa o reexpedición",
          ],
        },
        {
          question: "¿Realizan envíos a nivel internacional?",
          answer:
            "Sí. Organizamos envíos internacionales seguros, conforme a la naturaleza del artículo y a las regulaciones aplicables en el país de destino. Cada envío es preparado de forma específica, nunca de manera estándar.",
        },
        {
          question: "¿Este servicio está disponible para cualquier persona?",
          answer:
            "No. El servicio de compra y sourcing en Europa está reservado a nuestros clientes suscritos, lo que nos permite:",
          bullets: [
            "garantizar un seguimiento personalizado",
            "mantener un nivel de calidad elevado",
            "trabajar en una lógica de relación duradera",
          ],
        },
        {
          question: "¿Cuánto tiempo tarda una misión de compra?",
          answer: "Los plazos varían según:",
          bullets: [
            "la naturaleza del artículo",
            "su disponibilidad",
            "el circuito de acceso",
            "el contexto logístico",
          ],
        },
        {
          question: "¿Cómo iniciar una solicitud de compra en Europa?",
          answer: "Es muy sencillo:",
          orderedList: [
            "Nos describe el artículo que busca.",
            "Analizamos la viabilidad de la solicitud.",
            "Le explicamos cómo podemos acompañarle.",
            "Solo después de su validación iniciamos la misión.",
          ],
        },
        {
          question: "¿Por qué confiarles una compra tan sensible?",
          answer: "Porque combinamos:",
          bullets: [
            "una experiencia construida en Europa",
            "una especialización real en arte y lujo",
            "una maîtrise complète de la logística",
            "un enfoque basado en la confianza, la discreción y el rigor",
          ],
        },
      ],
    },
    {
      type: "cta",
      id: "specific-piece-cta",
      title: "¿Busca una pieza específica?",
      paragraphs: [
        "Descríbanos lo que está buscando. Le indicaremos qué es posible, en qué condiciones y cómo podemos acompañarle.",
        "Confiar una búsqueda en Europa",
      ],
    },
    {
      type: "cta",
      id: "join-us-cta",
      title: "¡Únete a nosotros!",
      paragraphs: [
        "Transforme sus relaciones y su pasión por el arte en una oportunidad lucrativa. Para obtener más información y convertirse en socio de BAGIA, póngase en contacto con nosotros hoy mismo.",
      ],
      buttonLabel: "Contáctenos",
      buttonHref: "/contactenos",
      dividerImage:
        "https://bagiard.com/wp-content/uploads/2024/06/6643fd26b73f28f5bcca0272_BAGIA-Logo-Symbol-Transpa.webp",
    },
  ],
};

function getSection<T extends PageContent["sections"][number]>(id: string): T {
  const section = concierjeriaPage.sections.find((s) => s.id === id);
  if (!section) {
    throw new Error(`Missing concierjeria section: ${id}`);
  }
  return section as T;
}

export const concierjeriaHero = getSection<HeroSection>("hero");
export const concierjeriaIntro = getSection<TextSection>("europe-sourcing-intro");
export const concierjeriaServices = getSection<ServiceCardsSection>("what-we-do");
export const concierjeriaClientele = getSection<ImageAccordionSection>("demanding-clientele");
export const concierjeriaProcess = getSection<ProcessStepsSection>("tailored-approach");
export const concierjeriaFaq = getSection<FAQSection>("faq");
export const concierjeriaPieceCta = getSection<CTASection>("specific-piece-cta");
export const concierjeriaJoinCta = getSection<CTASection>("join-us-cta");
