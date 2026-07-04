export type PageSection =
  | HeroSection
  | TextSection
  | ImageAccordionSection
  | ServiceCardsSection
  | ProcessStepsSection
  | FAQSection
  | CTASection
  | LogoMarqueeSection;

export type HeroSection = {
  type: "hero";
  id: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

export type TextSection = {
  type: "text";
  id: string;
  title?: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: string[];
  dividerImage?: string;
};

export type ImageAccordionSection = {
  type: "image-accordion";
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  images: { src: string; alt?: string }[];
};

export type ServiceCard = {
  title: string;
  description: string;
  bullets?: string[];
};

export type ServiceCardsSection = {
  type: "service-cards";
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: ServiceCard[];
};

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
};

export type ProcessStepsSection = {
  type: "process-steps";
  id: string;
  title: string;
  subtitle?: string;
  dividerImage?: string;
  steps: ProcessStep[];
};

export type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
  orderedList?: string[];
};

export type FAQSection = {
  type: "faq";
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
};

export type CTASection = {
  type: "cta";
  id: string;
  title: string;
  paragraphs: string[];
  buttonLabel?: string;
  buttonHref?: string;
  dividerImage?: string;
};

export type LogoMarqueeSection = {
  type: "logo-marquee";
  id: string;
  title: string;
  logos: { src: string; alt: string }[];
  dividerImage?: string;
  hidden?: boolean;
};

export type PageContent = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  sourceFile?: string;
  sections: PageSection[];
};
