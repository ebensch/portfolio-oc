export type SkillAccent = "rose" | "lavender" | "blue";

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: string[];
  /** Trailing note — application concrète sur un projet, ou philosophie de travail. */
  note?: string;
  /** Icon name from `components/ui/Icon.astro`, illustrating the category at a glance. */
  icon: string;
  /** Accent color used for the icon, the tags and the "En pratique" callout. */
  accent: SkillAccent;
}

export const profileIntro: string =
  "Mon profil combine des compétences en UX Design, UI Design et développement front-end. Je peux ainsi intervenir sur différentes étapes du processus de conception, de la compréhension des besoins utilisateurs jusqu'au prototypage et à la conception d'interfaces, tout en prenant en compte les contraintes techniques liées à leur réalisation.";

export const skillCategories: SkillCategory[] = [
  {
    id: "ux-research",
    icon: "search",
    accent: "rose",
    title: "UX Research",
    summary:
      "Je sais mobiliser différentes méthodes de recherche afin de mieux comprendre les besoins, comportements et problématiques des utilisateurs :",
    items: [
      "Préparation et réalisation d'entretiens utilisateurs",
      "Identification des besoins et irritants",
      "Analyse qualitative des retours",
      "Analyse de données disponibles",
      "Benchmark et analyse concurrentielle",
      "Synthèse des enseignements de recherche",
      "Formulation d'insights et de problématiques UX",
    ],
    note: "Application : analyse des comportements et des données dans le projet Seconde Peau, recherche et identification des besoins utilisateurs dans les projets Avenirs et Equi-libre.",
  },
  {
    id: "conception-centree-utilisateur",
    icon: "users",
    accent: "lavender",
    title: "Conception centrée utilisateur",
    summary:
      "J'intègre les besoins et retours utilisateurs dans les différentes étapes de conception afin de construire des expériences adaptées aux usages réels. Je maîtrise notamment :",
    items: [
      "Personas",
      "Cartes d'empathie",
      "Parcours utilisateurs",
      "User flows",
      "Identification des points de friction",
      "Architecture de l'information",
      "Définition et priorisation des besoins",
      "Conception itérative",
      "Prise en compte du feedback utilisateur",
    ],
    note: "Mon approche consiste à partir du problème et des besoins identifiés avant de définir une solution d'interface.",
  },
  {
    id: "conception-interfaces-ui",
    icon: "layers",
    accent: "blue",
    title: "Conception d'interfaces UI",
    summary:
      "Je maîtrise les principaux principes de conception d'interfaces et leur application dans des produits numériques :",
    items: [
      "Hiérarchie visuelle",
      "Typographie",
      "Couleurs",
      "Contraste",
      "Grilles et alignements",
      "Espacements",
      "Lisibilité",
      "Cohérence visuelle",
      "Responsive design",
      "États et interactions des composants",
    ],
    note: "Je porte une attention particulière à la clarté de l'information et à la facilité de compréhension des interfaces.",
  },
  {
    id: "figma-prototypage",
    icon: "sparkles",
    accent: "rose",
    title: "Figma & prototypage",
    summary: "Figma est mon principal outil de conception. Je l'utilise pour :",
    items: [
      "Réaliser des wireframes",
      "Concevoir des interfaces haute fidélité",
      "Créer des prototypes interactifs",
      "Concevoir des composants réutilisables",
      "Utiliser des variantes et différents états",
      "Structurer des bibliothèques de composants",
      "Travailler sur des interfaces responsive",
      "Collaborer autour des maquettes et prototypes",
    ],
    note: "Je l'utilise notamment pour les projets Seconde Peau, Avenirs, Equi-libre et Convergence.",
  },
  {
    id: "analyse-amelioration-experience",
    icon: "trending-up",
    accent: "lavender",
    title: "Analyse et amélioration de l'expérience",
    summary:
      "Je sais analyser une expérience existante afin d'identifier ses points forts, ses irritants et ses opportunités d'amélioration. Ma démarche peut s'appuyer sur :",
    items: [
      "Analyse heuristique",
      "Analyse de parcours",
      "Données quantitatives",
      "Retours qualitatifs",
      "Analyse des comportements",
      "Identification des problèmes",
      "Formulation de recommandations",
      "Comparaison entre l'expérience existante et une expérience cible",
    ],
    note: "Cette compétence a notamment été mobilisée lors de l'audit UX du projet Seconde Peau.",
  },
  {
    id: "accessibilite-ergonomie",
    icon: "accessibility",
    accent: "blue",
    title: "Accessibilité et ergonomie",
    summary:
      "J'intègre progressivement les principes d'accessibilité et d'ergonomie dans ma conception. Je porte notamment attention à :",
    items: [
      "La lisibilité des contenus",
      "Les contrastes de couleurs",
      "La hiérarchie de l'information",
      "La taille des éléments interactifs",
      "La compréhension des libellés",
      "La cohérence des interactions",
      "La navigation et les différents modes d'utilisation",
      "La prise en compte des besoins des personnes en situation de handicap",
    ],
    note: "L'objectif est de concevoir des interfaces utilisables par le plus grand nombre et de considérer l'accessibilité dès la conception plutôt qu'en fin de projet.",
  },
  {
    id: "developpement-front-end",
    icon: "code",
    accent: "rose",
    title: "Développement front-end",
    summary: "Mon profil UX est complété par des connaissances en développement front-end :",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    note: "Ces compétences me permettent de mieux comprendre les contraintes techniques liées aux interfaces que je conçois et facilitent les échanges avec les développeurs. Elles me permettent également d'avoir une vision plus concrète de la faisabilité d'une solution lors de la phase de conception.",
  },
];

export const processFlow: string[] = [
  "Comprendre",
  "Analyser",
  "Structurer",
  "Concevoir",
  "Prototyper",
  "Tester",
  "Améliorer",
];

export const processFlowIntro: string =
  "Mes compétences me permettent d'intervenir sur l'ensemble d'une démarche UX, de la compréhension du problème jusqu'à la conception d'une solution :";

export const processFlowOutro: string =
  "Cette approche me permet de considérer simultanément les besoins des utilisateurs, les objectifs du produit et les contraintes techniques.";
