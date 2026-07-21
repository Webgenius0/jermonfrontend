import { conciergePage } from "./concierge";
import { homePage } from "./home";
import type { PageContent } from "./types";

export type PageKey =
  | "home"
  | "concierjeria"
  | "comercializacion"
  | "serviciosBajoDemanda"
  | "ofertas"
  | "mercadoMundial"
  | "porqueNosotros"
  | "quienesSomos"
  | "contactenos"
  | "seguimiento";

export type PageCatalogEntry = {
  key: PageKey;
  path: string;
  title: string;
  htmlFile?: string;
  status: "extracted" | "missing" | "partial";
  sectionCount: number;
};

/** Pages with content extracted from doc/ HTML exports */
export const extractedPages: Partial<Record<PageKey, PageContent>> = {};

/** Full site page inventory — track which HTML files still need to be saved */
export const pageCatalog: PageCatalogEntry[] = [
  {
    key: "home",
    path: "/",
    title: "Home",
    htmlFile: "https://bagiard.com/",
    status: "extracted",
    sectionCount: 12,
  },
  {
    key: "concierjeria",
    path: "/concierjeria-de-compras-en-europa-arte-y-lujo",
    title: "Europe Shopping Concierge",
    htmlFile: "doc/index.html (main content: lines 3966–6767)",
    status: "extracted",
    sectionCount: 8,
  },
  {
    key: "comercializacion",
    path: "/comercializacion-internacional",
    title: "International Marketing",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "serviciosBajoDemanda",
    path: "/servicios-bajo-demanda",
    title: "On-Demand Services",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "ofertas",
    path: "/ofertas-y-suscripciones",
    title: "Offers & Subscriptions",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "mercadoMundial",
    path: "/un-mercado-mundial",
    title: "Global Market",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "porqueNosotros",
    path: "/porque-nosotros",
    title: "Why Us",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "quienesSomos",
    path: "/quienes-somos",
    title: "About Us",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "contactenos",
    path: "/contactenos",
    title: "Contact Us",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "seguimiento",
    path: "/seguimiento",
    title: "Track Order",
    status: "missing",
    sectionCount: 0,
  },
];

export { conciergePage, homePage };
export type { PageContent, PageSection } from "./types";
