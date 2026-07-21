import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Next.js uses this project root (avoids parent lockfile picking wrong cwd)
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/concierjeria-de-compras-en-europa-arte-y-lujo",
        destination: "/shopping-concierge",
        permanent: true,
      },
      {
        source: "/comercializacion-internacional",
        destination: "/international-marketing",
        permanent: true,
      },
      {
        source: "/servicios-bajo-demanda",
        destination: "/on-demand-services",
        permanent: true,
      },
      {
        source: "/ofertas-y-suscripciones",
        destination: "/offers-and-subscriptions",
        permanent: true,
      },
      {
        source: "/un-mercado-mundial",
        destination: "/global-market",
        permanent: true,
      },
      {
        source: "/porque-nosotros",
        destination: "/why-us",
        permanent: true,
      },
      {
        source: "/quienes-somos",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contactenos",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/seguimiento",
        destination: "/order-tracking",
        permanent: true,
      },
      {
        source: "/cgv",
        destination: "/terms-of-sale",
        permanent: true,
      },
      {
        source: "/condiciones-generales-de-uso",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/menciones-legales",
        destination: "/legal-notices",
        permanent: true,
      },
      {
        source: "/politica-de-privacidad",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/services/on-demand-services",
        destination: "/on-demand-services",
        permanent: true,
      },
      {
        source: "/presupuesto-instantaneo",
        destination: "/on-demand-services",
        permanent: true,
      },
      {
        source: "/privacy-policy-e",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions-e",
        destination: "/terms-of-sale",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bagiard.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bagiard.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
