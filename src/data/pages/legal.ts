import { Language } from "@/context/LanguageContext";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: { label: string; value: string }[];
};

export type LegalDocument = {
  title: string;
  description: string;
  updated?: string;
  sections: LegalSection[];
};

export function getPrivacyPolicyDocument(lang: Language): LegalDocument {
  switch (lang) {
    case "es":
      return {
        title: "Política de Privacidad",
        description: "Cómo BAGIA RD recopila, utiliza y protege su información personal.",
        sections: [
          {
            title: "Política de Privacidad de BAGIA",
            paragraphs: [
              "Esta Política de Privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o realiza una compra en https://bagiard.com/.",
            ],
          },
          {
            title: "Información personal recopilada",
            paragraphs: [
              "Cuando visita el sitio, recopilamos automáticamente información sobre su dispositivo, incluido su navegador web, dirección IP, zona horaria y algunas cookies instaladas.",
            ],
          },
        ],
      };
    case "fr":
      return {
        title: "Politique de Confidentialité",
        description: "Comment BAGIA RD collecte, utilise et protège vos informations personnelles.",
        sections: [
          {
            title: "Politique de Confidentialité BAGIA",
            paragraphs: [
              "Cette Politique de Confidentialité décrit comment vos informations personnelles sont collectées et utilisées sur https://bagiard.com/.",
            ],
          },
        ],
      };
    case "en":
    default:
      return privacyPolicyDocument;
  }
}

export function getLegalNoticesDocument(lang: Language): LegalDocument {
  switch (lang) {
    case "es":
      return {
        title: "Avisos Legales",
        description: "Información legal y corporativa de BAGIA RD, S.R.L.",
        sections: [
          {
            title: "Identificación de la empresa",
            paragraphs: ["BAGIA RD, S.R.L., RNC 1-33-55549-2, Santo Domingo, República Dominicana."],
          },
        ],
      };
    case "fr":
      return {
        title: "Mentions Légales",
        description: "Informations légales de la société BAGIA RD, S.R.L.",
        sections: [
          {
            title: "Éditeur du site",
            paragraphs: ["BAGIA RD, S.R.L., RNC 1-33-55549-2, Saint-Domingue, République Dominicaine."],
          },
        ],
      };
    case "en":
    default:
      return legalNoticesDocument;
  }
}

export function getTermsOfSaleDocument(lang: Language): LegalDocument {
  switch (lang) {
    case "es":
      return {
        title: "Términos y Condiciones Generales de Venta",
        description: "Condiciones que rigen las ventas y servicios prestados por BAGIA RD.",
        sections: [
          {
            title: "Condiciones Generales de Venta",
            paragraphs: [
              "Las presentes Condiciones Generales de Venta rigen los derechos y obligaciones de BAGIA RD, S.R.L. y sus clientes.",
            ],
          },
        ],
      };
    case "fr":
      return {
        title: "Conditions Générales de Vente",
        description: "Conditions régissant les ventes et services fournis par BAGIA RD.",
        sections: [
          {
            title: "Conditions Générales de Vente",
            paragraphs: [
              "Les présentes Conditions Générales de Vente régissent les droits et obligations de BAGIA RD, S.R.L. et de ses clients.",
            ],
          },
        ],
      };
    case "en":
    default:
      return termsOfSaleDocument;
  }
}

export function getTermsOfUseDocument(lang: Language): LegalDocument {
  switch (lang) {
    case "es":
      return {
        title: "Condiciones Generales de Uso",
        description: "Reglas que rigen el uso del sitio web y servicios digitales de BAGIA RD.",
        sections: [
          {
            title: "Condiciones de Uso",
            paragraphs: ["El acceso y uso del sitio web www.bagiard.com implica la aceptación de estas normas."],
          },
        ],
      };
    case "fr":
      return {
        title: "Conditions Générales d'Utilisation",
        description: "Règles régissant l'utilisation du site web de BAGIA RD.",
        sections: [
          {
            title: "Conditions d'Utilisation",
            paragraphs: ["L'accès et l'utilisation du site www.bagiard.com impliquent l'acceptation de ces conditions."],
          },
        ],
      };
    case "en":
    default:
      return termsOfUseDocument;
  }
}

export const privacyPolicyDocument: LegalDocument = {
  title: "Privacy Policy",
  description: "How BAGIA RD collects, uses, and protects your personal information.",
  sections: [
    {
      title: "BAGIA Privacy Policy",
      paragraphs: [
        "This Privacy Policy describes how your personal information is collected, used and shared when you visit https://bagiard.com/ (the “Site”) or make a purchase there.",
      ],
    },
    {
      title: "Personal Information Collected",
      paragraphs: [
        "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”",
        "We collect Device Information using cookies, log files, web beacons, tags, and pixels. Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”",
        "When we use the term “Personal Information” in this Privacy Policy, we are referring to both Device Information and Order Information.",
      ],
    },
    {
      title: "How Do We Use Your Personal Information?",
      paragraphs: [
        "Generally, we use the Order Information that we collect to fulfill any orders placed through the Site (including to process your payment information, arrange for shipping of your order, and provide you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you, screen for fraud or potential risk, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.",
        "We use the Device Information (in particular your IP address) that we collect to screen for fraud or potential risk, and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our advertising and marketing campaigns).",
      ],
    },
    {
      title: "Sharing Your Personal Information",
      paragraphs: [
        "We share your Personal Information with third parties who help us use it for the purposes described above. For example, we use Shopify to host our online store. We also use Google Analytics to better understand how our customers use the Site.",
        "Finally, we may also share your Personal Information to comply with applicable laws and regulations, respond to a subpoena, search warrant or other lawful request for information we receive, or otherwise protect our rights.",
      ],
    },
    {
      title: "Behavioral Advertising",
      paragraphs: [
        "As noted above, we use your Personal Information to provide you with targeted advertisements or marketing messages that we believe may be of interest to you.",
      ],
    },
    {
      title: "Do Not Track",
      paragraphs: [
        "Please note that we do not alter our Site’s data collection and use practices when we detect a “Do Not Track” signal from your browser.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: [
        "If you are a European resident, you have the right to access the personal information we hold about you and to ask that it be corrected, updated, or deleted. If you would like to exercise this right, please contact us using the contact information provided below.",
        "Additionally, if you are a European resident, please note that we process your information in order to fulfill our contractual obligations to you or to pursue our legitimate business interests listed above. Please also note that your information will be transferred outside of Europe, including to Canada and the United States.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.",
      ],
    },
    {
      title: "Changes",
      paragraphs: [
        "We may change this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "To learn more about our privacy practices, if you have questions, or if you would like to file a complaint, please contact us by email at info@bagiard.com, or by mail at Av. Gustavo Mejía Ricart No. 271, La Castellana, Santo Domingo, D.N., Dominican Republic.",
      ],
    },
  ],
};

export const legalNoticesDocument: LegalDocument = {
  title: "Legal Notices",
  description: "Legal notices and company information for BAGIA RD, S.R.L.",
  sections: [
    {
      title: "Legal Notices",
      paragraphs: [
        "In accordance with Law No. 126-02 on Electronic Commerce, Documents and Digital Signatures of the Dominican Republic, and other applicable regulations, the following legal notices for the website www.bagiard.com are published.",
      ],
    },
    {
      title: "1.1 Site Publisher Identification",
      table: [
        { label: "Company Name", value: "BAGIA RD, S.R.L." },
        { label: "Trade Name", value: "BAGIA RD" },
        { label: "Legal Form", value: "Limited Liability Company (SRL)" },
        { label: "RNC", value: "1-33-55549-2" },
        {
          label: "Commercial Registry",
          value: "No. 216534 – Santo Domingo Chamber of Commerce and Production",
        },
        { label: "ONAPI", value: "No. 890841 – Trade Name: BAGIA RD" },
        { label: "Share Capital", value: "RD$ 100,000.00 – Fully subscribed and paid" },
        {
          label: "Registered Office",
          value: "Av. Gustavo Mejía Ricart No. 271, La Castellana, Santo Domingo, D.N., D.R.",
        },
        { label: "Phone", value: "+1 (809) 425-2964" },
        { label: "Email", value: "info@bagiard.com" },
        { label: "Website", value: "www.bagiard.com" },
        {
          label: "General Manager",
          value: "Jérôme Jean Daniel Cayol – Passport No. 18CH95234",
        },
        {
          label: "Main Activities",
          value:
            "Management and Logistics Services for the Transport of Goods (CIIU 635001) / Courier Messaging Service (CIIU 641201)",
        },
        { label: "Date of Incorporation", value: "November 6, 2025" },
        {
          label: "Status",
          value: "ACTIVE – In compliance with DGII General Standard No. 04-21",
        },
      ],
    },
    {
      title: "1.2 Partners",
      paragraphs: [
        "BAGIA RD, S.R.L. is composed of the following partners, with equal participation:",
      ],
      list: [
        "Jérôme Jean Daniel Cayol – 500 shares (50%) – General Manager",
        "Marvin Alexandre Chapel – 500 shares (50%) – Partner",
      ],
    },
    {
      title: "1.3 Website Hosting",
      paragraphs: [
        "The website www.bagiard.com is hosted by a web hosting service provider. For any technical request related to hosting, you may contact the publisher using the details indicated in section 1.1.",
      ],
    },
    {
      title: "1.4 Intellectual Property",
      paragraphs: [
        "All elements of the website www.bagiard.com (texts, images, graphics, logos, icons, sounds, software, etc.) are the exclusive property of BAGIA RD, S.R.L. or its partners, and are protected by Dominican and international copyright and industrial property laws.",
        "Any reproduction, representation, modification, publication, transmission, or deformation, in whole or in part, of the site or its content, without the prior written authorization of BAGIA RD, S.R.L., is expressly prohibited and may result in sanctions under Law No. 65-00 on Copyright in the Dominican Republic.",
        "The brand and trade name “BAGIA RD” are duly registered with the National Office of Industrial Property (ONAPI) under No. 890841, granted on 26/09/2025 and expiring on 26/09/2035.",
      ],
    },
    {
      title: "1.5 Liability",
      paragraphs: [
        "BAGIA RD, S.R.L. shall not be held liable for direct or indirect damages resulting from access to the site or use of information published on it. The company reserves the right to modify, correct, or remove site content at any time without prior notice.",
        "The company does not guarantee the accuracy, completeness, or timeliness of information published on the site. Users are responsible for verifying information before using it for any purpose.",
      ],
    },
    {
      title: "1.6 Hyperlinks",
      paragraphs: [
        "The site www.bagiard.com may contain hyperlinks to other websites. BAGIA RD, S.R.L. exercises no control over such sites and assumes no responsibility for their content. The presence of such links does not imply any association, sponsorship, or endorsement by BAGIA RD, S.R.L.",
      ],
    },
    {
      title: "1.7 Applicable Law and Jurisdiction",
      paragraphs: [
        "These legal notices are governed by the laws of the Dominican Republic, in particular Law No. 126-02 on Electronic Commerce, Law No. 172-13 on Personal Data Protection, Law No. 358-05 on Consumer Rights Protection, Law No. 65-00 on Copyright, and Law No. 20-00 on Industrial Property.",
        "Any dispute relating to the use of the site shall fall under the exclusive jurisdiction of the courts of the National District of Santo Domingo, Dominican Republic.",
      ],
    },
  ],
};

export const termsOfSaleDocument: LegalDocument = {
  title: "General Terms and Conditions of Sale",
  description: "Terms governing sales and services provided by BAGIA RD.",
  updated: "April 2026",
  sections: [
    {
      title: "General Terms and Conditions of Sale",
      paragraphs: [
        "These General Terms and Conditions of Sale (“GTC”) govern the rights and obligations of BAGIA RD, S.R.L. (“the Provider”) and its clients (“the Client”) in the context of specialized micro-logistics services, Europe shopping concierge, and international marketing.",
        "Any subscription or service contract with BAGIA RD implies full and irrevocable acceptance of these GTC. In the event of negotiated specific conditions between the parties, those conditions shall prevail over these GTC where they conflict.",
      ],
    },
  ],
};

export const termsOfUseDocument: LegalDocument = {
  title: "General Conditions of Use",
  description: "Rules governing use of the BAGIA RD website and digital services.",
  updated: "April 2026",
  sections: [
    {
      title: "General Conditions of Use",
      paragraphs: [
        "These General Conditions of Use (“GCU”) govern access to and use of the website www.bagiard.com (“the Site”) and the digital services made available by BAGIA RD, S.R.L.",
        "Access to and use of the Site implies full acceptance of these GCU. If you do not accept these conditions, please refrain from using the Site. BAGIA RD reserves the right to modify these GCU at any time.",
      ],
    },
  ],
};

