export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const siteConfig = {
  name: "BAGIA",
  description:
    "Empresa logística en Santo Domingo especializada en transporte internacional y servicios de carga aérea y marítima.",
  url: "https://bagiard.com",
  email: "info@bagiard.com",
  phone: "+1 (809) 425-2964",
  whatsapp: "http://wa.me/18094252964",
  address:
    "Av. Gustavo Mejía Ricart No. 271, La Castellana, Santo Domingo, D.N.",
  logo: "/images/logo.png",
  logoInverted: "/images/logo-inverted.png",
};

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    children: [
      {
        label: "Concierjería de compras en Europa",
        href: "/concierjeria-de-compras-en-europa-arte-y-lujo",
      },
      {
        label: "Comercialización internacional",
        href: "/comercializacion-internacional",
      },
      {
        label: "Servicios bajo demanda",
        href: "/servicios-bajo-demanda",
      },
    ],
  },
  {
    label: "Ofertas y Suscripciones",
    href: "/ofertas-y-suscripciones",
  },
  {
    label: "Nosotros",
    children: [
      { label: "Un Mercado Mundial", href: "/un-mercado-mundial" },
      { label: "Porqué nosotros", href: "/porque-nosotros" },
      { label: "Quiénes somos", href: "/quienes-somos" },
    ],
  },
  { label: "Contáctenos", href: "/contactenos" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Presupuesto instantáneo", href: "#" },
  {
    label: "Comercialización internacional",
    href: "/comercializacion-internacional",
  },
  {
    label: "Concierjería de compras",
    href: "/concierjeria-de-compras-en-europa-arte-y-lujo",
  },
  { label: "Seguir su pedido", href: "/seguimiento" },
  { label: "Contáctenos", href: "/contactenos" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Estudio de mercado", href: "/un-mercado-mundial" },
  { label: "Porqué nosotros ?", href: "/porque-nosotros" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export const pages = {
  home: { title: "Inicio", path: "/" },
  concierjeria: {
    title: "Concierjería de compras en Europa",
    path: "/concierjeria-de-compras-en-europa-arte-y-lujo",
  },
  comercializacion: {
    title: "Comercialización internacional",
    path: "/comercializacion-internacional",
  },
  serviciosBajoDemanda: {
    title: "Servicios bajo demanda",
    path: "/servicios-bajo-demanda",
  },
  ofertas: {
    title: "Ofertas y Suscripciones",
    path: "/ofertas-y-suscripciones",
  },
  mercadoMundial: {
    title: "Un Mercado Mundial",
    path: "/un-mercado-mundial",
  },
  porqueNosotros: {
    title: "Porqué nosotros",
    path: "/porque-nosotros",
  },
  quienesSomos: { title: "Quiénes somos", path: "/quienes-somos" },
  contactenos: { title: "Contáctenos", path: "/contactenos" },
  seguimiento: { title: "Seguimiento", path: "/seguimiento" },
} as const;
