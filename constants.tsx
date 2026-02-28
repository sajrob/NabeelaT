import { Milestone, Achievement, Initiative } from "./types";

/**
 * Career history milestones for the biography timeline.
 */
export const CAREER_HISTORY: Milestone[] = [
  {
    year: "2023 - Present",
    role: "Minister of Tourism and Cultural Affairs",
    organization: "Republic of Sierra Leone",
    description:
      "Spearheading the promotion of Sierra Leone as a premier travel destination and safeguarding the nation cultural heritage.",
  },
  {
    year: "2021 - 2023",
    role: "Minister of Western Region",
    organization: "Republic of Sierra Leone",
    description:
      "Overseeing regional administration and developmental strategy for the Western Area.",
  },
  {
    year: "2019 - 2021",
    role: "Minister of Foreign Affairs and International Cooperation",
    organization: "Republic of Sierra Leone",
    description:
      "Directed the nation diplomatic strategies and strengthened international partnerships during critical global transitions.",
  },
  {
    year: "2018 - 2019",
    role: "Minister of Planning and Economic Development",
    organization: "Republic of Sierra Leone",
    description:
      "Led the formulation of national development plans and economic sustainability frameworks.",
  },
  {
    year: "Prior Career",
    role: "Senior Governance and Peacebuilding Expert",
    organization: "United Nations",
    description:
      "Extensive experience with the United Nations in governance, peacebuilding, and human rights across various international contexts.",
  },
];

/**
 * Broader impact achievements for the impact page.
 */
export const BROADER_IMPACT: Achievement[] = [
  {
    title: "Women in Governance Advocacy",
    category: "Social Reform",
    summary:
      "A vocal champion for gender parity in political appointments and the empowerment of women in rural leadership roles.",
  },
  {
    title: "Sustainable Development Goals (SDGs)",
    category: "Policy",
    summary:
      "Instrumental in aligning Sierra Leone National Development Plan with global SDG targets to ensure measurable progress.",
  },
  {
    title: "Peace & Reconciliation",
    category: "Diplomacy",
    summary:
      "Leveraged UN experience to facilitate local dialogues aimed at resolving land disputes and communal tensions in the Western Region.",
  },
];

/**
 * Summary information for the foundation.
 */
export const FOUNDATION_SUMMARY = {
  name: "One Love Salone Foundation",
  url: "http://onelovesalonefoundation.org/",
  description:
    "A dedicated platform founded by Hon. Nabeela Tunis focused on national unity, social cohesion, and educational support for underprivileged youth.",
  image:
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
};

/**
 * List of initiatives managed by the One Love Salone Foundation.
 */
export const FOUNDATION_INITIATIVES: Initiative[] = [
  {
    id: "1",
    title: "Peace & Social Cohesion",
    description:
      'Promoting the spirit of "One Love" through community dialogues and national unity campaigns designed to bridge tribal and regional divides.',
    image: "/IMG_8936-min.jpg",
  },
  {
    id: "2",
    title: "Educational Support",
    description:
      "Providing comprehensive scholarship programs and learning materials to ensure that vulnerable children have access to quality education at all levels.",
    image: "/IQED9569.JPG",
  },
  {
    id: "3",
    title: "Social Mobilization",
    description:
      "Driving mindset change and community empowerment, encouraging citizens to take an active role in local and national development initiatives.",
    image:
      "/WhatsApp-Image-2025-12-13-at-18.38.21-min.jpeg",
  },
];

/**
 * Educational background records.
 */
export const EDUCATION = [
  {
    institution: "London School of Economics (LSE)",
    degree: "MSc in Development Studies",
    location: "United Kingdom",
  },
  {
    institution: "Fourah Bay College, USL",
    degree: "BA in Political Science and English",
    location: "Sierra Leone",
  },
];
