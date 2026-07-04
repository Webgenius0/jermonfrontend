import { concierjeriaPage } from "./concierjeria";
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
export const extractedPages: Partial<Record<PageKey, PageContent>> = {
  concierjeria: concierjeriaPage,
};

/** Full site page inventory — track which HTML files still need to be saved */
export const pageCatalog: PageCatalogEntry[] = [
  {
    key: "home",
    path: "/",
    title: "Inicio",
    htmlFile: "https://bagiard.com/",
    status: "extracted",
    sectionCount: 12,
  },
  {
    key: "concierjeria",
    path: "/concierjeria-de-compras-en-europa-arte-y-lujo",
    title: "Concierjería de compras en Europa",
    htmlFile: "doc/index.html (main content: lines 3966–6767)",
    status: "extracted",
    sectionCount: concierjeriaPage.sections.length,
  },
  {
    key: "comercializacion",
    path: "/comercializacion-internacional",
    title: "Comercialización internacional",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "serviciosBajoDemanda",
    path: "/servicios-bajo-demanda",
    title: "Servicios bajo demanda",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "ofertas",
    path: "/ofertas-y-suscripciones",
    title: "Ofertas y Suscripciones",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "mercadoMundial",
    path: "/un-mercado-mundial",
    title: "Un Mercado Mundial",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "porqueNosotros",
    path: "/porque-nosotros",
    title: "Porqué nosotros",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "quienesSomos",
    path: "/quienes-somos",
    title: "Quiénes somos",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "contactenos",
    path: "/contactenos",
    title: "Contáctenos",
    status: "missing",
    sectionCount: 0,
  },
  {
    key: "seguimiento",
    path: "/seguimiento",
    title: "Seguimiento",
    status: "missing",
    sectionCount: 0,
  },
];

export { concierjeriaPage, homePage };
export type { PageContent, PageSection } from "./types";
