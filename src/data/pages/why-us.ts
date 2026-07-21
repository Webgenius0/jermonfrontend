import { Language } from "@/context/LanguageContext";

export const whyUsPage = {
  slug: "why-us",
  path: "/why-us",
  title: "Why Us",
  metaDescription:
    "Discover why BAGIA RD is the trusted logistics partner for luxury, art, and international shipping from the Dominican Republic.",
};

export function getWhyUsSections(lang: Language) {
  switch (lang) {
    case "es":
      return [
        {
          id: "luxury",
          title: "Lujo y Exclusividad Superior",
          description:
            "Confíe sus obras y objetos valiosos a expertos. En BAGIA RD dominamos el arte del embalaje seguro para piezas frágiles y artísticas, ofreciendo máxima protección y discreción.",
        },
        {
          id: "budget",
          title: "Soluciones de Envío para Cada Presupuesto",
          description:
            "Desde envíos económicos hasta transporte premium, ofrecemos opciones flexibles y confiables que se adaptan a sus necesidades logísticas.",
        },
        {
          id: "human",
          title: "Una Empresa a Escala Humana",
          description:
            "Detrás de cada envío hay una historia. Somos una empresa orientada a las personas que trabaja con pasión, cercanía y dedicación.",
        },
        {
          id: "flexible",
          title: "Flexibilidad Absoluta",
          description:
            "Nos adaptamos a usted. Entendemos que cada envío es único, por lo que somos flexibles en nuestros procesos y soluciones.",
        },
        {
          id: "experience",
          title: "Experiencia y Conocimiento Local e Internacional",
          description:
            "Con más de 5 años de experiencia en el sector del lujo y arte en París, Francia, aportamos un nivel único de excelencia.",
        },
        {
          id: "network",
          title: "Red Global de Socios Logísticos",
          description:
            "Trabajamos con una red internacional de agentes para conectar su carga con los principales destinos del mundo.",
        },
      ];
    case "fr":
      return [
        {
          id: "luxury",
          title: "Luxe & Exclusivité",
          description:
            "Confiez vos œuvres et objets précieux à des experts. Nous maîtrisons l'art de l'emballage sécurisé pour pièces d'art et de collection.",
        },
        {
          id: "budget",
          title: "Solutions Adaptées à Tous les Budgets",
          description:
            "Des envois économiques au transport premium, nous proposons des solutions logistiques flexibles et fiables.",
        },
        {
          id: "human",
          title: "Une Entreprise à Taille Humaine",
          description:
            "Derrière chaque envoi se trouve une histoire. Notre équipe travaille avec passion, proximité et engagement.",
        },
        {
          id: "flexible",
          title: "Flexibilité Totale",
          description:
            "Chaque mission est unique : nous adaptons nos tarifs et processus à vos exigences spécifiques.",
        },
      ];
    case "en":
    default:
      return [
        {
          id: "luxury",
          title: "Top Luxury And Exclusivity",
          description:
            "Trust your works and valuable objects to experts. At BAGIA RD, we master the art of secure packing for fragile and artistic pieces, offering maximum protection and discretion on every shipment, from Santo Domingo to the world.",
        },
        {
          id: "budget",
          title: "Shipping Solutions For Every Budget",
          description:
            "From budget-friendly shipments to premium transport, BAGIA RD offers flexible and reliable options that fit your budget and logistics needs.",
        },
        {
          id: "human",
          title: "A Human-Scale Company",
          description:
            "Behind every shipment is a story. At BAGIA RD, we are a people-oriented company that works with passion, closeness, and dedication so everything reaches its destination successfully.",
        },
        {
          id: "flexible",
          title: "Flexible",
          description:
            "We adapt to you. At BAGIA RD we understand that every shipment is unique, which is why we are flexible in our processes, rates, and logistics solutions.",
        },
      ];
  }
}

export const whyUsSections = getWhyUsSections("en");

export function getWhyUsUi(lang: Language) {
  switch (lang) {
    case "es":
      return { guaranteeLabel: "Garantía BAGIA" };
    case "fr":
      return { guaranteeLabel: "Garantie BAGIA" };
    case "en":
    default:
      return { guaranteeLabel: "BAGIA Guarantee" };
  }
}

