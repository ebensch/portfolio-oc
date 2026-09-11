export interface IkigaiItem {
  id: "love" | "talent" | "world" | "paid";
  label: string;
  accent: "rose" | "lavender" | "blue" | "mixed";
  /** Shown as a bullet list in the flyout card when this facet is clicked. */
  details: string[];
}

/** The four facets of the ikigai diagram, positioned clockwise from top-left in Ikigai.astro. */
export const ikigaiItems: IkigaiItem[] = [
  {
    id: "love",
    label: "Ce que j’aime",
    accent: "rose",
    details: [
      "Comprendre les besoins et les comportements des utilisateurs",
      "Résoudre des problèmes",
      "Concevoir et créer",
      "Imaginer des expériences digitales",
      "Apprendre de nouvelles méthodes et technologies",
      "Travailler sur des projets concrets et utiles",
      "Améliorer continuellement une solution",
    ],
  },
  {
    id: "talent",
    label: "Ce en quoi je suis douée",
    accent: "lavender",
    details: [
      "Écoute et compréhension des besoins",
      "Analyse et synthèse",
      "Organisation et structuration",
      "Conception d’interfaces",
      "Communication",
      "Résolution de problèmes",
      "Coordination entre différents interlocuteurs",
      "Adaptation à de nouveaux contextes",
    ],
  },
  {
    id: "paid",
    label: "Ce pour quoi je peux être rémunérée",
    accent: "mixed",
    details: [
      "UX Design",
      "Product Design",
      "Recherche utilisateur",
      "Conception de parcours",
      "Wireframing et prototypage",
      "UI Design",
      "Audit et amélioration d’interfaces",
      "Collaboration avec les équipes produit et développement",
    ],
  },
  {
    id: "world",
    label: "Ce dont le monde a besoin",
    accent: "blue",
    details: [
      "Des produits numériques simples et accessibles",
      "Des expériences réellement centrées sur les utilisateurs",
      "Des interfaces compréhensibles et efficaces",
      "Une meilleure prise en compte des besoins humains dans les produits numériques",
      "Des solutions conciliant besoins utilisateurs, objectifs métier et contraintes techniques",
    ],
  },
];
