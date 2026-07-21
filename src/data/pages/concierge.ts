import { Language } from "@/context/LanguageContext";

export const conciergePage = {
  slug: "shopping-concierge",
  path: "/shopping-concierge",
  title: "Europe Shopping Concierge",
  metaDescription:
    "Personalized acquisition and sourcing service in Europe for luxury items, exclusive pieces, and works of art.",
  sourceFile: "doc/index.html#L3966-L6767",
};

export function getConciergeHero(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Concierjería de Compras en Europa Arte • Lujo • Piezas Exclusivas",
        subtitle: "Servicio personalizado de búsqueda y adquisición en Europa",
      };
    case "fr":
      return {
        title: "Conciergerie d'Achats en Europe Art • Luxe • Pièces Exclusives",
        subtitle: "Service sur mesure d'acquisition et de recherche en Europe",
      };
    case "en":
    default:
      return {
        title: "Europe Shopping Concierge Art • Luxury • Exclusive Pieces",
        subtitle: "Bespoke acquisition and sourcing service in Europe",
      };
  }
}

export function getConciergeIntro(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Compramos en Europa lo que no está disponible en otros lugares",
        paragraphs: [
          "Ciertas piezas no están disponibles en línea. Algunas boutiques no venden a compradores fuera de Europa. Ciertas obras y objetos de lujo están reservados únicamente para la clientela local, fiel o recomendada.",
          "Es exactamente ahí donde comienza nuestro servicio.",
          "Ofrecemos a nuestros clientes un servicio exclusivo de compras y sourcing en Europa para artículos de lujo, piezas exclusivas y obras de arte disponibles en París y Londres.",
        ],
      };
    case "fr":
      return {
        title: "Nous achetons en Europe ce qui n'est pas accessible ailleurs",
        paragraphs: [
          "Certaines pièces ne sont pas disponibles en ligne. Certaines boutiques ne vendent pas aux non-résidents. Certaines œuvres et articles de luxe sont réservés à la clientèle locale ou fidèle.",
          "C'est précisément là que commence notre service.",
          "Nous proposons à nos clients un service de recherche et d'achat sur mesure en Europe pour des articles de luxe, pièces exclusives et œuvres d'art disponibles à Paris et Londres.",
        ],
      };
    case "en":
    default:
      return {
        title: "We shop in Europe for what isn't accessible elsewhere",
        paragraphs: [
          "Some pieces aren't available online. Some boutiques don't sell to non-residents. Some works and luxury items are reserved for local, loyal, or referred clientele.",
          "That is exactly where our service begins.",
          "We offer our clients a bespoke shopping and sourcing service in Europe for luxury items, exclusive pieces, and works of art available only in Paris, London, and certain specialized circles.",
        ],
      };
  }
}

export function getConciergeServices(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Lo que hacemos por usted",
        title: "Cuando el lujo y el arte solo están al alcance de unos pocos",
        cards: [
          {
            title: "Lujo y marroquinería de alta gama",
            description: "Le asistimos en la adquisición de:",
            bullets: [
              "bolsos icónicos y piezas altamente codiciadas",
              "modelos sujetos a restricciones de acceso",
              "ediciones limitadas o producciones confidenciales",
              "artículos disponibles solo en boutiques físicas",
            ],
            footer: "Conocemos los códigos, limitaciones y exigencias de las casas de lujo europeas.",
          },
          {
            title: "Arte y coleccionables",
            description: "Respaldamos la adquisición de:",
            bullets: [
              "obras disponibles solo en ciertas galerías",
              "piezas ofrecidas en ventas privadas",
              "objetos de arte difíciles de adquirir a distancia",
            ],
            footer: "Actuamos con un profundo conocimiento del mercado, sus prácticas y exigencias.",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Ce que nous faisons pour vous",
        title: "Quand le luxe et l'art ne sont accessibles qu'à quelques-uns",
        cards: [
          {
            title: "Luxe & Maroquinerie",
            description: "Nous vous accompagnons dans l'acquisition de :",
            bullets: [
              "sacs emblématiques et pièces très recherchées",
              "modèles soumis à des restrictions d'accès",
              "éditions limitées ou productions confidentielles",
              "articles disponibles uniquement en boutique physique",
            ],
            footer: "Nous connaissons les codes et exigences des maisons de luxe européennes.",
          },
          {
            title: "Art & Collection",
            description: "Nous soutenons l'acquisition de :",
            bullets: [
              "œuvres disponibles uniquement en galerie",
              "pièces proposées lors de ventes privées",
              "objets d'art et de collection difficiles d'accès à distance",
            ],
            footer: "Nous agissons avec une connaissance approfondie du marché de l'art.",
          },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "What we do for you",
        title: "When luxury and art are only within reach of a few",
        cards: [
          {
            title: "Luxury & leather goods",
            description: "We assist with acquiring:",
            bullets: [
              "iconic bags and highly sought-after pieces",
              "models subject to access restrictions",
              "limited editions or confidential productions",
              "items available only in physical boutiques",
            ],
            footer:
              "We know the codes, limitations, and requirements specific to European luxury houses.",
          },
          {
            title: "Art & collectibles",
            description: "We support the acquisition of:",
            bullets: [
              "works available only in certain galleries",
              "pieces offered in private sales",
              "art and collectible objects difficult to access remotely",
            ],
            footer:
              "We act with a deep understanding of the market, its practices, and its requirements.",
          },
        ],
      };
  }
}

export function getConciergeFaq(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Preguntas frecuentes",
        title: "Concierjería y Sourcing en Europa",
        subtitle: "Arte y Lujo",
        items: [
          {
            question: "¿En qué consiste exactamente el servicio de concierjería de compras en Europa?",
            answer:
              "Es un servicio personalizado de adquisición y sourcing. Buscamos, adquirimos, inspeccionamos, aseguramos y organizamos la logística de bienes de lujo u obras de arte disponibles en Europa en su nombre.",
          },
          {
            question: "¿Qué tipo de artículos pueden buscar o comprar?",
            answer: "Operamos exclusivamente en:",
            bullets: [
              "artículos de lujo y marroquinería",
              "piezas raras o de acceso restringido",
              "obras de arte y colecciones",
            ],
          },
          {
            question: "¿Garantizan que se encontrará el artículo?",
            answer:
              "No. Este servicio es una obligación de medios, no de resultado. Cada búsqueda depende de la rareza de la pieza, las políticas de la casa de lujo y la disponibilidad real.",
          },
          {
            question: "¿Pueden conseguir piezas restringidas o solo disponibles en boutique?",
            answer:
              "Sí, dentro de los límites legales y comerciales. Nuestro equipo en París, Londres y Milán contacta boutiques, galerías y redes privadas para evaluar la viabilidad de cada solicitud.",
          },
          {
            question: "¿Cómo verifican la autenticidad de las piezas?",
            answer:
              "Realizamos inspección física, verificación de facturas, numeración de serie, estado y coherencia con las políticas de la casa o galería. Cuando es necesario, coordinamos controles adicionales con expertos de confianza.",
          },
          {
            question: "¿Qué pruebas y documentación proporcionan?",
            answer:
              "Entregamos fotos y videos en alta resolución, factura original, certificados cuando existan, informe de inspección y documentación de exportación conforme a la normativa aplicable.",
          },
          {
            question: "¿Mi solicitud se mantiene estrictamente confidencial?",
            answer:
              "Sí. Cada misión se gestiona con absoluta discreción. No divulgamos la identidad del cliente ni los detalles de la operación sin autorización expresa.",
          },
          {
            question: "¿Cómo se embalan y envían los artículos internacionalmente?",
            answer:
              "Utilizamos embalaje personalizado de nivel museo, seguro a valor declarado y flete aéreo express con seguimiento en tiempo real desde Europa hasta Santo Domingo o su destino final.",
          },
          {
            question: "¿Ofrecen almacenamiento en Europa o Santo Domingo?",
            answer:
              "Sí. Podemos custodiar temporalmente piezas en instalaciones seguras en Europa o en la República Dominicana mientras se completa la logística, documentación o entrega final.",
          },
          {
            question: "¿Cómo se gestiona el seguro durante el tránsito?",
            answer:
              "Cada envío puede asegurarse a valor declarado con cobertura específica para arte, joyería y objetos de lujo, desde la adquisición hasta la entrega final.",
          },
          {
            question: "¿Necesito una suscripción BAGIA para usar la conciergería?",
            answer:
              "No necesariamente. Algunas misiones pueden gestionarse bajo demanda. Los planes PRO COLLECTION y PRIVADO / CONCIERJERÍA ofrecen prioridad, tarifas preferenciales y acceso ampliado al servicio.",
          },
          {
            question: "¿Cuál es el proceso paso a paso desde la solicitud hasta la entrega?",
            answer: "Nuestro método en 4 fases:",
            orderedList: [
              "Análisis detallado de la solicitud y definición del presupuesto",
              "Sourcing y verificación en boutiques y galerías europeas",
              "Adquisición, inspección física y validación documental",
              "Tránsito asegurado, embalaje premium y entrega final",
            ],
          },
          {
            question: "¿Cómo se estructuran las tarifas y comisiones?",
            answer:
              "Las tarifas dependen del tipo de pieza, complejidad del sourcing, valor declarado y servicios logísticos requeridos. Recibirá una propuesta transparente antes de confirmar cualquier adquisición.",
          },
          {
            question: "¿Cómo inicio una misión de sourcing?",
            answer:
              "Contáctenos por formulario, WhatsApp o teléfono. Nuestro equipo evaluará viabilidad, plazos estimados y próximos pasos para iniciar la búsqueda en Europa.",
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Foire aux questions",
        title: "Conciergerie & Sourcing en Europe",
        subtitle: "Art & Luxe",
        items: [
          {
            question: "En quoi consiste exactement le service d'achats en Europe ?",
            answer:
              "C'est un service d'acquisition et de sourcing sur mesure. Nous recherchons, acquérons, inspectons, assurons et organisons la logistique des objets de luxe ou œuvres d'art disponibles en Europe pour votre compte.",
          },
          {
            question: "Quels types d'articles pouvez-vous rechercher ou acheter ?",
            answer: "Nous opérons exclusivement dans :",
            bullets: [
              "articles de luxe et maroquinerie",
              "pièces rares ou à accès restreint",
              "œuvres d'art et de collection",
            ],
          },
          {
            question: "Garantissez-vous de trouver l'article ?",
            answer:
              "Non. Ce service est une obligation de moyens, pas de résultat. Chaque recherche dépend de la rareté de la pièce et de la disponibilité réelle sur le marché.",
          },
          {
            question: "Pouvez-vous sourcer des pièces restreintes ou disponibles uniquement en boutique ?",
            answer:
              "Oui, dans les limites légales et commerciales. Notre équipe à Paris, Londres et Milan contacte boutiques, galeries et réseaux privés pour évaluer la faisabilité de chaque demande.",
          },
          {
            question: "Comment vérifiez-vous l'authenticité des pièces ?",
            answer:
              "Nous effectuons une inspection physique, vérifions factures, numéros de série, état et cohérence avec les politiques de la maison ou de la galerie. Si nécessaire, nous coordonnons des contrôles supplémentaires avec des experts de confiance.",
          },
          {
            question: "Quelles preuves et documentations fournissez-vous ?",
            answer:
              "Nous fournissons photos et vidéos haute résolution, facture originale, certificats le cas échéant, rapport d'inspection et documentation d'exportation conforme à la réglementation applicable.",
          },
          {
            question: "Ma demande est-elle strictement confidentielle ?",
            answer:
              "Oui. Chaque mission est gérée avec une discrétion absolue. Nous ne divulguons ni l'identité du client ni les détails de l'opération sans autorisation expresse.",
          },
          {
            question: "Comment les articles sont-ils emballés et expédiés à l'international ?",
            answer:
              "Nous utilisons un emballage sur mesure de qualité musée, une assurance à valeur déclarée et un fret aérien express avec suivi en temps réel de l'Europe jusqu'à Saint-Domingue ou la destination finale.",
          },
          {
            question: "Proposez-vous du stockage en Europe ou à Saint-Domingue ?",
            answer:
              "Oui. Nous pouvons conserver temporairement des pièces dans des installations sécurisées en Europe ou en République Dominicaine pendant la finalisation de la logistique, de la documentation ou de la livraison.",
          },
          {
            question: "Comment l'assurance est-elle gérée pendant le transit ?",
            answer:
              "Chaque envoi peut être assuré à valeur déclarée avec une couverture spécifique pour l'art, la joaillerie et les objets de luxe, de l'acquisition à la livraison finale.",
          },
          {
            question: "Ai-je besoin d'un abonnement BAGIA pour utiliser la conciergerie ?",
            answer:
              "Pas nécessairement. Certaines missions peuvent être gérées à la demande. Les plans COLLECTION PRO et PRIVÉ / CONCIERGERIE offrent priorité, tarifs préférentiels et accès élargi au service.",
          },
          {
            question: "Quel est le processus étape par étape de la demande à la livraison ?",
            answer: "Notre méthode en 4 phases :",
            orderedList: [
              "Analyse détaillée de la demande et définition du budget",
              "Sourcing et vérification auprès de boutiques et galeries européennes",
              "Acquisition, inspection physique et validation documentaire",
              "Transit assuré, emballage premium et livraison finale",
            ],
          },
          {
            question: "Comment sont structurés les frais et commissions ?",
            answer:
              "Les frais dépendent du type de pièce, de la complexité du sourcing, de la valeur déclarée et des services logistiques requis. Vous recevrez une proposition transparente avant toute acquisition confirmée.",
          },
          {
            question: "Comment lancer une mission de sourcing ?",
            answer:
              "Contactez-nous via le formulaire, WhatsApp ou téléphone. Notre équipe évaluera la faisabilité, les délais estimés et les prochaines étapes pour lancer la recherche en Europe.",
          },
        ],
      };
    case "en":
    default:
      return {
        eyebrow: "Frequently asked questions",
        title: "Shopping & Sourcing in Europe",
        subtitle: "Art & Luxury",
        items: [
          {
            question: "What exactly does the shopping service in Europe involve?",
            answer:
              "It is a personalized acquisition and sourcing service in Europe. We search for, acquire, inspect, insure, and organize logistics for luxury items, exclusive pieces, or works of art available only in Europe, on your behalf.",
          },
          {
            question: "What types of items can you search for or purchase?",
            answer: "We operate exclusively in:",
            bullets: [
              "luxury items and leather goods",
              "rare or restricted-access pieces",
              "works of art and collectibles",
            ],
          },
          {
            question: "Do you guarantee that the item will be found?",
            answer:
              "No. This service is a best-efforts obligation, not a results guarantee. Every search depends on the rarity of the piece, luxury house policies, actual availability, and market context.",
          },
          {
            question: "Can you source restricted-access or boutique-only pieces?",
            answer:
              "Yes, within legal and commercial limits. Our team in Paris, London, and Milan contacts boutiques, galleries, and private networks to assess the feasibility of each request.",
          },
          {
            question: "How do you verify the authenticity of pieces?",
            answer:
              "We perform physical inspection, invoice verification, serial numbers, condition checks, and consistency with house or gallery policies. When needed, we coordinate additional checks with trusted experts.",
          },
          {
            question: "What proof and documentation do you provide?",
            answer:
              "We deliver high-resolution photos and videos, original invoice, certificates when available, inspection report, and export documentation compliant with applicable regulations.",
          },
          {
            question: "Is my request kept strictly confidential?",
            answer:
              "Yes. Every mission is handled with absolute discretion. We do not disclose the client's identity or operation details without explicit authorization.",
          },
          {
            question: "How are items packaged and shipped internationally?",
            answer:
              "We use museum-grade custom packaging, full declared-value insurance, and express air freight with real-time tracking from Europe to Santo Domingo or your final destination.",
          },
          {
            question: "Do you offer storage in Europe or Santo Domingo?",
            answer:
              "Yes. We can temporarily custody pieces in secure facilities in Europe or the Dominican Republic while logistics, documentation, or final delivery is completed.",
          },
          {
            question: "How is insurance handled during transit?",
            answer:
              "Each shipment can be insured at declared value with specific coverage for art, jewelry, and luxury objects, from acquisition through final delivery.",
          },
          {
            question: "Do I need a BAGIA subscription to use the concierge service?",
            answer:
              "Not necessarily. Some missions can be handled on demand. PRO COLLECTION and PRIVATE / CONCIERGE plans offer priority, preferential rates, and expanded access to the service.",
          },
          {
            question: "What is the step-by-step process from request to delivery?",
            answer: "Our 4-phase method:",
            orderedList: [
              "Detailed request analysis and budget definition",
              "Sourcing and verification with European boutiques and galleries",
              "Acquisition, physical inspection, and document validation",
              "Insured transit, premium packaging, and final delivery",
            ],
          },
          {
            question: "How are fees and commissions structured?",
            answer:
              "Fees depend on the type of piece, sourcing complexity, declared value, and required logistics services. You receive a transparent proposal before confirming any acquisition.",
          },
          {
            question: "How do I initiate a sourcing mission?",
            answer:
              "Contact us via form, WhatsApp, or phone. Our team will assess feasibility, estimated timelines, and next steps to launch the search in Europe.",
          },
        ],
      };
  }
}

export const conciergeProcess = {
  eyebrow: "Our Method",
  title: "A 4-step tailored process",
  subtitle: "From inquiry to delivery, every step is executed with precision and discretion.",
  dividerImage: "https://bagiard.com/wp-content/uploads/2025/05/BAGIA-Logo-Symbol.png",
  steps: [
    {
      number: "01",
      title: "Detailed Request Analysis",
      description: "We define the exact specs, reference, target budget, and acceptable condition with you.",
      icon: "search",
      bullets: ["Model and reference confirmation", "Target price and budget definition"],
    },
    {
      number: "02",
      title: "European Sourcing & Verification",
      description: "Our team contacts boutiques, galleries, and private networks across Paris, London, and Milan.",
      icon: "network",
      bullets: ["Direct contact with boutiques & galleries", "Availability and lead time check"],
    },
    {
      number: "03",
      title: "Acquisition & Physical Inspection",
      description: "We purchase the piece on your behalf and perform a comprehensive physical inspection.",
      icon: "check",
      bullets: ["High-resolution photos & video proof", "Authenticity and invoice verification"],
    },
    {
      number: "04",
      title: "Insured Transit & Delivery",
      description: "The item is packaged to museum standards, insured at full declared value, and shipped to Santo Domingo.",
      icon: "plane",
      bullets: ["Museum-grade protective packaging", "Express air freight with real-time tracking"],
    },
  ],
};



export const conciergeClientele = {
  title: "An International, Demanding And Loyal Clientele",
  paragraphs: [
    "Our clientele includes high-net-worth individuals, collectors, galleries, and luxury enthusiasts who expect perfection in every acquisition.",
  ],
  bullets: [
    "Personalized 1-on-1 advisor for every request",
    "Physical authentication and boutique condition checks",
    "Customs clearance and tax optimization handled end-to-end",
    "Complete confidentiality and discretion guaranteed",
  ],
  closing: "Their loyalty is built on one essential foundation: absolute trust.",
  images: [
    {
      src: "https://bagiard.com/wp-content/uploads/2024/06/shutterstock_2296442929-1024x683.webp",
      alt: "Luxury gallery piece",
    },
    {
      src: "https://bagiard.com/wp-content/uploads/2024/06/luxury-retro-broadcast-radio-receiver-768x1152.webp",
      alt: "Rare collectible item",
    },
  ],
};


export const conciergePieceCta = {
  title: "Have a specific piece in mind?",
  subtitle: "Tell us what you are looking for.",
  paragraphs: [
    "Tell us what you are looking for. Our team will evaluate feasibility and sourcing timelines in Europe.",
    "Trust our network in Paris, London, and Milan to source rare pieces with absolute discretion.",
  ],
  cta: { label: "Request a Piece Search", href: "/contact-us" },
};


export const conciergeJoinCta = {
  title: "Join Us On Our Journey",
  paragraphs: [
    "As we continue to grow and evolve, we remain true to our commitment to excellence. We invite you to join us as a client, collector, or partner.",
  ],
  dividerImage: "https://bagiard.com/wp-content/uploads/2025/05/BAGIA-Logo-Symbol.png",
  cta: { label: "Contact Concierge Desk", href: "/contact-us" },
};

const conciergeClienteleImages = conciergeClientele.images;

export function getConciergeProcess(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Nuestro método",
        stepEyebrow: "Excelencia paso a paso",
        title: "Un proceso personalizado en 4 pasos",
        subtitle: "De la consulta a la entrega, cada paso se ejecuta con precisión y discreción.",
        confidentialLabel: "Confidencial",
        phaseLabel: "Fase",
        dividerImage: conciergeProcess.dividerImage,
        steps: [
          {
            number: "01",
            title: "Análisis detallado de la solicitud",
            description: "Definimos las especificaciones exactas, referencia, presupuesto objetivo y condición aceptable con usted.",
            icon: "search" as const,
            bullets: ["Confirmación de modelo y referencia", "Definición de precio y presupuesto objetivo"],
          },
          {
            number: "02",
            title: "Sourcing y verificación en Europa",
            description: "Nuestro equipo contacta boutiques, galerías y redes privadas en París, Londres y Milán.",
            icon: "network" as const,
            bullets: ["Contacto directo con boutiques y galerías", "Verificación de disponibilidad y plazos"],
          },
          {
            number: "03",
            title: "Adquisición e inspección física",
            description: "Compramos la pieza en su nombre y realizamos una inspección física exhaustiva.",
            icon: "check" as const,
            bullets: ["Fotos y video en alta resolución", "Verificación de autenticidad y factura"],
          },
          {
            number: "04",
            title: "Tránsito asegurado y entrega",
            description: "El artículo se embala con estándares de museo, se asegura a valor declarado y se envía a Santo Domingo.",
            icon: "plane" as const,
            bullets: ["Embalaje protector de nivel museo", "Flete aéreo express con seguimiento en tiempo real"],
          },
        ],
      };
    case "fr":
      return {
        eyebrow: "Notre méthode",
        stepEyebrow: "Excellence étape par étape",
        title: "Un processus sur mesure en 4 étapes",
        subtitle: "De la demande à la livraison, chaque étape est exécutée avec précision et discrétion.",
        confidentialLabel: "Confidentiel",
        phaseLabel: "Phase",
        dividerImage: conciergeProcess.dividerImage,
        steps: [
          {
            number: "01",
            title: "Analyse détaillée de la demande",
            description: "Nous définissons avec vous les spécifications, la référence, le budget cible et l'état acceptable.",
            icon: "search" as const,
            bullets: ["Confirmation du modèle et de la référence", "Définition du prix et du budget cible"],
          },
          {
            number: "02",
            title: "Sourcing & vérification en Europe",
            description: "Notre équipe contacte boutiques, galeries et réseaux privés à Paris, Londres et Milan.",
            icon: "network" as const,
            bullets: ["Contact direct avec boutiques & galeries", "Vérification de disponibilité et délais"],
          },
          {
            number: "03",
            title: "Acquisition & inspection physique",
            description: "Nous achetons la pièce pour votre compte et effectuons une inspection physique complète.",
            icon: "check" as const,
            bullets: ["Photos et vidéos haute résolution", "Vérification d'authenticité et de facture"],
          },
          {
            number: "04",
            title: "Transit assuré & livraison",
            description: "L'article est emballé selon les standards muséaux, assuré à sa valeur déclarée et expédié.",
            icon: "plane" as const,
            bullets: ["Emballage protecteur de qualité musée", "Fret aérien express avec suivi en temps réel"],
          },
        ],
      };
    case "en":
    default:
      return {
        ...conciergeProcess,
        stepEyebrow: "Step-By-Step Excellence",
        confidentialLabel: "Confidential",
        phaseLabel: "Phase",
      };
  }
}

export function getConciergeClientele(lang: Language) {
  switch (lang) {
    case "es":
      return {
        eyebrow: "Conocedores y coleccionistas exigentes",
        title: "Una clientela internacional, exigente y fiel",
        paragraphs: [
          "Nuestra clientela incluye personas de alto patrimonio, coleccionistas, galerías y entusiastas del lujo que esperan perfección en cada adquisición.",
        ],
        bullets: [
          "Asesor personalizado 1 a 1 para cada solicitud",
          "Autenticación física y verificación de condición en boutique",
          "Despacho aduanero y optimización fiscal gestionados de extremo a extremo",
          "Confidencialidad y discreción total garantizadas",
        ],
        closing: "Su lealtad se construye sobre un fundamento esencial: confianza absoluta.",
        imageLabels: [
          {
            badge: "Coleccionables de lujo",
            caption: "Sourcing de relojes raros, marroquinería limitada y asignaciones de boutique",
          },
          {
            badge: "Obras de arte raras",
            caption: "Adquisiciones en galerías privadas, subastas Drouot y curaduría de obras maestras",
          },
        ],
        images: conciergeClienteleImages,
      };
    case "fr":
      return {
        eyebrow: "Connaisseurs & collectionneurs exigeants",
        title: "Une clientèle internationale, exigeante et fidèle",
        paragraphs: [
          "Notre clientèle comprend des particuliers fortunés, collectionneurs, galeries et amateurs de luxe qui exigent la perfection à chaque acquisition.",
        ],
        bullets: [
          "Conseiller personnel dédié pour chaque demande",
          "Authentification physique et contrôle en boutique",
          "Dédouanement et optimisation fiscale gérés de bout en bout",
          "Confidentialité et discrétion totales garanties",
        ],
        closing: "Leur fidélité repose sur un fondement essentiel : une confiance absolue.",
        imageLabels: [
          {
            badge: "Objets de collection de luxe",
            caption: "Sourcing de montres rares, maroquinerie limitée et allocations boutique",
          },
          {
            badge: "Œuvres d'art rares",
            caption: "Acquisitions en galeries privées, enchères Drouot et curation de chefs-d'œuvre",
          },
        ],
        images: conciergeClienteleImages,
      };
    case "en":
    default:
      return {
        ...conciergeClientele,
        eyebrow: "Discerning Connoisseurs & Collectors",
        imageLabels: [
          {
            badge: "Luxury Collectibles",
            caption: "Sourcing rare timepieces, limited leather items & boutique allocations",
          },
          {
            badge: "Rare Art Works",
            caption: "Private gallery acquisitions, Drouot auctions & masterwork curation",
          },
        ],
      };
  }
}

export function getConciergePieceCta(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "¿Tiene una pieza específica en mente?",
        subtitle: "Cuéntenos qué está buscando.",
        paragraphs: [
          "Cuéntenos qué está buscando. Nuestro equipo evaluará la viabilidad y los plazos de sourcing en Europa.",
          "Confíe en nuestra red en París, Londres y Milán para encontrar piezas raras con absoluta discreción.",
        ],
        cta: { label: "Solicitar búsqueda de pieza", href: "/contact-us" },
      };
    case "fr":
      return {
        title: "Vous avez une pièce précise en tête ?",
        subtitle: "Dites-nous ce que vous recherchez.",
        paragraphs: [
          "Dites-nous ce que vous recherchez. Notre équipe évaluera la faisabilité et les délais de sourcing en Europe.",
          "Faites confiance à notre réseau à Paris, Londres et Milan pour sourcer des pièces rares en toute discrétion.",
        ],
        cta: { label: "Demander une recherche de pièce", href: "/contact-us" },
      };
    case "en":
    default:
      return conciergePieceCta;
  }
}

export function getConciergeJoinCta(lang: Language) {
  switch (lang) {
    case "es":
      return {
        title: "Únase a nosotros en nuestro camino",
        paragraphs: [
          "A medida que seguimos creciendo y evolucionando, permanecemos fieles a nuestro compromiso con la excelencia. Le invitamos a unirse como cliente, coleccionista o socio.",
        ],
        dividerImage: conciergeJoinCta.dividerImage,
        cta: { label: "Contactar con Conciergerie", href: "/contact-us" },
      };
    case "fr":
      return {
        title: "Rejoignez-nous dans notre aventure",
        paragraphs: [
          "Alors que nous continuons à grandir et évoluer, nous restons fidèles à notre engagement d'excellence. Nous vous invitons à nous rejoindre en tant que client, collectionneur ou partenaire.",
        ],
        dividerImage: conciergeJoinCta.dividerImage,
        cta: { label: "Contacter la conciergerie", href: "/contact-us" },
      };
    case "en":
    default:
      return conciergeJoinCta;
  }
}


export const conciergeHero = getConciergeHero("en");
export const conciergeIntro = getConciergeIntro("en");
export const conciergeServices = getConciergeServices("en");
export const conciergeFaq = getConciergeFaq("en");

export function getConciergeHeroUi(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "París • Londres • Centros de lujo europeos",
        tagline: "Arte • Lujo • Piezas exclusivas",
        inquireCta: "Consultar sobre una misión",
        exploreCta: "Explorar nuestro proceso",
        trustMetrics: [
          { value: "100%", label: "Autenticidad verificada" },
          { value: "París y Londres", label: "Red directa en el terreno" },
          { value: "Privacidad estricta", label: "Ejecución confidencial" },
        ],
        showcaseCards: [
          {
            title: "Marroquinería de lujo y piezas icónicas",
            description:
              "Acceso a boutiques insignia en París y Londres, modelos Birkin/Kelly y creaciones de acceso restringido.",
          },
          {
            title: "Arte y ventas privadas",
            description:
              "Representación en Drouot, Biron, galerías europeas y colecciones privadas confidenciales.",
          },
          {
            title: "Entrega y almacenamiento premium",
            description:
              "Tránsito asegurado, embalaje personalizado, gestión de exportación y almacenamiento europeo dedicado.",
          },
        ],
      };
    case "fr":
      return {
        badge: "Paris • Londres • Pôles du luxe européens",
        tagline: "Art • Luxe • Pièces exclusives",
        inquireCta: "Demander une mission",
        exploreCta: "Explorer notre processus",
        trustMetrics: [
          { value: "100%", label: "Authenticité vérifiée" },
          { value: "Paris & Londres", label: "Réseau direct sur le terrain" },
          { value: "Confidentialité stricte", label: "Exécution discrète" },
        ],
        showcaseCards: [
          {
            title: "Maroquinerie de luxe & pièces iconiques",
            description:
              "Accès aux boutiques phares de Paris et Londres, modèles Birkin/Kelly et créations à accès restreint.",
          },
          {
            title: "Art & ventes privées",
            description:
              "Représentation à Drouot, Biron, galeries européennes et collections privées confidentielles.",
          },
          {
            title: "Livraison & stockage premium",
            description:
              "Transit assuré, emballage sur mesure, formalités d'exportation et stockage européen dédié.",
          },
        ],
      };
    case "en":
    default:
      return {
        badge: "Paris • London • European Luxury Centers",
        tagline: "Art • Luxury • Exclusive Pieces",
        inquireCta: "Inquire About a Mission",
        exploreCta: "Explore Our Process",
        trustMetrics: [
          { value: "100%", label: "Verified Authenticity" },
          { value: "Paris & London", label: "Direct On-Ground Network" },
          { value: "Strict Privacy", label: "Confidential Execution" },
        ],
        showcaseCards: [
          {
            title: "Luxury Leather & Iconic Pieces",
            description:
              "Access to Paris & London Flagship Boutiques, Birkin/Kelly models & restricted access creations.",
          },
          {
            title: "Fine Art & Private Sales",
            description:
              "Representation at Drouot, Biron, European galleries, and confidential private collections.",
          },
          {
            title: "White-Glove Delivery & Storage",
            description:
              "Insured transit, custom packing, export handling & dedicated European vault storage.",
          },
        ],
      };
  }
}

export function getConciergeIntroUi(lang: Language) {
  switch (lang) {
    case "es":
      return {
        badge: "Acceso incomparable en Europa",
        primaryMissionLabel: "Misión principal",
        quoteCaption:
          "Actuando como su representante privado en las capitales de la moda de lujo europea y casas de arte privadas.",
        keyHubsLabel: "Centros clave:",
        hubs: ["París", "Londres", "Milán", "Ginebra"],
        barrierTitle: "La barrera de acceso",
        barrierBullets: [
          "Restricciones de compra para no residentes",
          "Asignaciones exclusivas en boutique física",
          "Listas de espera de coleccionistas privados",
        ],
        solutionTitle: "Nuestra solución europea",
        solutionBullets: [
          "Compra física directa en boutique",
          "Red establecida de galerías y subastas",
          "Representación discreta de extremo a extremo",
        ],
        trustRow: [
          { label: "Red física", value: "Compradores en París y Londres" },
          { label: "Representación", value: "Agente de confianza para clientes privados" },
          { label: "Discreción", value: "Transacciones 100% confidenciales" },
        ],
      };
    case "fr":
      return {
        badge: "Accès incomparable en Europe",
        primaryMissionLabel: "Mission principale",
        quoteCaption:
          "En tant que votre représentant privé dans les capitales de la mode de luxe et les maisons d'art privées européennes.",
        keyHubsLabel: "Pôles clés :",
        hubs: ["Paris", "Londres", "Milan", "Genève"],
        barrierTitle: "La barrière d'accès",
        barrierBullets: [
          "Restrictions d'achat pour non-résidents",
          "Allocations exclusives en boutique physique",
          "Listes d'attente de collectionneurs privés",
        ],
        solutionTitle: "Notre solution européenne",
        solutionBullets: [
          "Achat physique direct en boutique",
          "Réseau établi de galeries et ventes aux enchères",
          "Représentation discrète de bout en bout",
        ],
        trustRow: [
          { label: "Réseau physique", value: "Acheteurs à Paris et Londres" },
          { label: "Représentation", value: "Agent de confiance pour clients privés" },
          { label: "Discrétion", value: "Transactions 100% confidentielles" },
        ],
      };
    case "en":
    default:
      return {
        badge: "Unrivaled Access in Europe",
        primaryMissionLabel: "Primary Mission",
        quoteCaption:
          "Acting as your private representative on the ground across European luxury fashion capitals and private art houses.",
        keyHubsLabel: "Key Hubs:",
        hubs: ["Paris", "London", "Milan", "Geneva"],
        barrierTitle: "The Access Barrier",
        barrierBullets: [
          "Non-resident purchase restrictions",
          "Offline boutique-only allocations",
          "Private collector waiting lists",
        ],
        solutionTitle: "Our European Solution",
        solutionBullets: [
          "Direct physical boutique purchasing",
          "Established gallery & auction network",
          "Discreet end-to-end representation",
        ],
        trustRow: [
          { label: "Physical Network", value: "On-Ground Buyers in Paris & London" },
          { label: "Representation", value: "Trusted Private Client Agent" },
          { label: "Discretion", value: "100% Confidential Transactions" },
        ],
      };
  }
}

export function getConciergeFaqPreviewUi(lang: Language) {
  switch (lang) {
    case "es":
      return { viewAllLabel: "Explorar las 14 preguntas frecuentes" };
    case "fr":
      return { viewAllLabel: "Explorer les 14 questions fréquentes" };
    case "en":
    default:
      return { viewAllLabel: "Explore All 14 Frequently Asked Questions" };
  }
}

export function getFaqPageUi(lang: Language) {
  switch (lang) {
    case "es":
      return {
        backLink: "← Volver a la conciergería",
        heroTitle: "Preguntas",
        heroTitleHighlight: "frecuentes",
        heroDescription:
          "Todo lo que necesita saber sobre nuestra conciergería de compras, sourcing de lujo en París y Londres, garantías de autenticidad y logística internacional.",
        searchPlaceholder: "Buscar una pregunta o tema (p. ej. autenticidad, Birkin, envío)...",
        clear: "Borrar",
        categories: [
          { id: "all", label: "Todas las preguntas" },
          { id: "sourcing", label: "Sourcing y acceso" },
          { id: "authenticity", label: "Autenticidad y confidencialidad" },
          { id: "logistics", label: "Logística y almacenamiento" },
          { id: "membership", label: "Membresía y proceso" },
        ],
        showingCount: (shown: number, total: number) =>
          `Mostrando ${shown} de ${total} preguntas`,
        noResultsTitle: "No se encontraron preguntas coincidentes",
        noResultsDescription:
          "Intente ajustar su búsqueda o seleccione otra categoría.",
        resetFilters: "Restablecer filtros",
        contactBanner: {
          eyebrow: "¿Necesita asistencia directa?",
          title: "¿Tiene una consulta específica o solicitud de pieza personalizada?",
          description:
            "Nuestro equipo de conciergería privada está disponible para evaluar su solicitud, discutir viabilidad e iniciar su misión en Europa.",
          formCta: "Consultar por formulario de contacto",
          whatsappCta: "💬 Chatear por WhatsApp",
        },
      };
    case "fr":
      return {
        backLink: "← Retour à la conciergerie",
        heroTitle: "Questions",
        heroTitleHighlight: "fréquentes",
        heroDescription:
          "Tout ce qu'il faut savoir sur notre conciergerie d'achats, le sourcing de luxe à Paris et Londres, les garanties d'authenticité et la logistique internationale.",
        searchPlaceholder: "Rechercher une question ou un sujet (ex. authenticité, Birkin, expédition)...",
        clear: "Effacer",
        categories: [
          { id: "all", label: "Toutes les questions" },
          { id: "sourcing", label: "Sourcing & accès" },
          { id: "authenticity", label: "Authenticité & confidentialité" },
          { id: "logistics", label: "Logistique & stockage" },
          { id: "membership", label: "Abonnement & processus" },
        ],
        showingCount: (shown: number, total: number) =>
          `${shown} question${shown > 1 ? "s" : ""} sur ${total} affichée${shown > 1 ? "s" : ""}`,
        noResultsTitle: "Aucune question correspondante",
        noResultsDescription:
          "Essayez d'ajuster votre recherche ou sélectionnez une autre catégorie.",
        resetFilters: "Réinitialiser les filtres",
        contactBanner: {
          eyebrow: "Besoin d'une assistance directe ?",
          title: "Vous avez une demande spécifique ou une pièce sur mesure ?",
          description:
            "Notre équipe de conciergerie privée est disponible pour évaluer votre demande, discuter de la faisabilité et lancer votre mission en Europe.",
          formCta: "Demander via le formulaire de contact",
          whatsappCta: "💬 Discuter sur WhatsApp",
        },
      };
    case "en":
    default:
      return {
        backLink: "← Back to Concierge Overview",
        heroTitle: "Frequently Asked",
        heroTitleHighlight: "Questions",
        heroDescription:
          "Everything you need to know about our shopping concierge, luxury sourcing in Paris & London, authenticity guarantees, and international logistics.",
        searchPlaceholder: "Search a question or topic (e.g. authenticity, Birkin, shipping)...",
        clear: "Clear",
        categories: [
          { id: "all", label: "All Questions" },
          { id: "sourcing", label: "Sourcing & Access" },
          { id: "authenticity", label: "Authenticity & Confidentiality" },
          { id: "logistics", label: "Logistics & Storage" },
          { id: "membership", label: "Membership & Process" },
        ],
        showingCount: (shown: number, total: number) =>
          `Showing ${shown} of ${total} Questions`,
        noResultsTitle: "No matching questions found",
        noResultsDescription:
          "Try adjusting your search query or select another category filter.",
        resetFilters: "Reset Filters",
        contactBanner: {
          eyebrow: "Need Direct Assistance?",
          title: "Have a Specific Inquiry or Custom Piece Request?",
          description:
            "Our private concierge team is available to evaluate your request, discuss feasibility, and initiate your mission in Europe.",
          formCta: "Inquire via Contact Form",
          whatsappCta: "💬 Chat on WhatsApp",
        },
      };
  }
}

