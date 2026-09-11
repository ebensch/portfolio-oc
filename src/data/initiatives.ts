/** Cycles the same rose/lavender/blue accent trio used across SkillCard, EmergingTopicCard, etc. */
export type InitiativeAccent = "rose" | "lavender" | "blue";

export interface InitiativeEntry {
  title: string;
  /** Short label naming the kind of initiative — shown as a tag on its card. */
  type: string;
  accent: InitiativeAccent;
  paragraphs: string[];
  items?: string[];
  note?: string;
  /** Marks the initiative pulled out into the "Mise en avant" spotlight instead of the card grid. */
  featured?: boolean;
}

export const initiativesIntro: string[] = [
  "Mon parcours ne se limite pas aux projets réalisés dans le cadre de ma formation. Je développe également des projets personnels et professionnels qui me permettent de mettre en pratique mes compétences, d'expérimenter de nouvelles approches et de continuer à construire mon expérience dans le domaine du numérique.",
  "Ces projets me permettent également de développer une vision plus globale du métier de UX Designer, en prenant en compte les problématiques utilisateurs, les enjeux business, les contraintes techniques et les réalités d'un produit en évolution.",
];

/** Avant — Ce que j'ai réalisé */
export const pastProjects: InitiativeEntry[] = [
  {
    title: "DermoFluide",
    type: "Projet professionnel",
    accent: "rose",
    paragraphs: [
      "DermoFluide est une marque française de produits de rasage.",
      "J'ai participé à la refonte et à l'amélioration de son expérience digitale. J'ai également travaillé sur le rebranding de la marque, sa présence sur les réseaux sociaux et dans les salons.",
      "Cette expérience m'a permis de mieux comprendre les enjeux d'un produit digital en conditions réelles, mais aussi penser son impact sur les utilisateurs et sur les objectifs du produit.",
    ],
  },
  {
    title: "WebdeFrance",
    type: "Projet professionnel",
    accent: "lavender",
    paragraphs: [
      "WebdeFrance est un projet professionnel autour de la création et de la gestion de sites web.",
      "Ma participation à ce projet m'a permis de travailler sur des problématiques concrètes liées à l'expérience utilisateur et à la conception de services numériques.",
      "Cette expérience m'a notamment permis de mieux comprendre l'importance de la simplicité des parcours, de la clarté de l'information et de la cohérence entre les besoins des utilisateurs et les objectifs du service.",
      "Elle m'a également permis de développer ma compréhension des contraintes liées à la mise en œuvre technique d'une interface.",
    ],
  },
  {
    title: "Mes projets OpenClassrooms",
    type: "Formation",
    accent: "blue",
    paragraphs: [
      "Les différents projets réalisés pendant ma formation m'ont permis d'expérimenter plusieurs étapes du processus UX : recherche utilisateur, analyse, conception de parcours, wireframing, prototypage et conception d'interfaces.",
      "Ils constituent aujourd'hui une base importante de ma pratique et m'ont permis de construire progressivement ma méthodologie de conception.",
    ],
  },
];

/** Pendant — Ce que je développe aujourd'hui */
export const currentFocus: InitiativeEntry[] = [
  {
    title: "Convergence",
    type: "Projet personnel",
    accent: "blue",
    featured: true,
    paragraphs: [
      "Convergence est un projet SaaS de planification avancée sur lequel je travaille actuellement.",
      "L'objectif est de concevoir un outil permettant à des entreprises ayant des besoins de planification complexes, d'automatiser la création et la gestion de leurs plannings en prenant en compte de multiples contraintes métiers.",
      "Le projet m'amène à travailler sur des problématiques de Product Design dépassant la seule conception d'interfaces.",
    ],
  },
  {
    title: "Ma veille professionnelle",
    type: "Veille professionnelle",
    accent: "rose",
    paragraphs: [
      "Je maintiens également une veille régulière sur les évolutions du métier de UX Designer.",
      "Je m'intéresse notamment à :",
    ],
    items: [
      "L'évolution des pratiques UX et Product Design",
      "Les nouveaux outils de conception",
      "L'intelligence artificielle appliquée au design",
      "L'accessibilité numérique",
      "L'éco-conception",
      "Les méthodes de recherche utilisateur",
      "Les évolutions du numérique et des produits SaaS",
    ],
    note: "Cette veille me permet de remettre régulièrement en question mes pratiques et d'identifier des méthodes ou outils pouvant être appliqués à mes projets.",
  },
];

export interface NextStep {
  title: string;
  description: string;
}

/** Après — Mes prochaines étapes */
export const convergenceNextSteps: { intro: string; steps: NextStep[] } = {
  intro:
    "Pour la continuité de mon parcours, je souhaite poursuivre la conception de Convergence en avançant progressivement vers un produit fonctionnel. Les prochaines étapes sont notamment :",
  steps: [
    {
      title: "Consolider l'architecture du produit",
      description: "Clarifier les fonctionnalités principales, les rôles utilisateurs et les différents parcours.",
    },
    {
      title: "Finaliser les parcours prioritaires en collaboration avec des utilisateurs du métier",
      description: "Identifier les parcours essentiels du MVP et les simplifier.",
    },
    {
      title: "Poursuivre la conception UI",
      description: "Développer les composants et les interfaces nécessaires au produit.",
    },
    {
      title: "Prototyper les fonctionnalités clés",
      description: "Permettre de simuler les principaux parcours avant leur développement.",
    },
    {
      title: "Recueillir des retours",
      description: "Confronter les choix de conception aux besoins des utilisateurs et des parties prenantes.",
    },
    {
      title: "Itérer",
      description: "Améliorer progressivement le produit à partir des retours obtenus.",
    },
  ],
};

export const practiceGoals: { intro: string; items: string[] } = {
  intro: "Je souhaite également continuer à développer mes compétences dans plusieurs domaines :",
  items: [
    "Approfondir la recherche utilisateur",
    "Améliorer ma pratique des tests utilisateurs",
    "Renforcer mes connaissances en accessibilité",
    "Approfondir l'éco-conception",
    "Développer ma maîtrise du Product Design",
    "Continuer à progresser sur les design systems",
    "Suivre les évolutions des outils intégrant l'intelligence artificielle",
  ],
};

export interface RoadmapRow {
  period: string;
  objectives: string;
}

export const roadmap: RoadmapRow[] = [
  { period: "Avant", objectives: "Formation UX (Projets OpenClassrooms), DermoFluide, WebdeFrance" },
  {
    period: "Aujourd'hui",
    objectives: "Conception de Convergence, Veille UX, Développement de mes compétences",
  },
  {
    period: "Prochainement",
    objectives: "Prototypage de Convergence, Tests utilisateurs, Itérations, Approfondissement du Product Design",
  },
  {
    period: "À terme",
    objectives:
      "Évoluer à mon compte dans le domaine (ou vers un poste de UX/Product Designer) et participer à la conception de produits numériques utiles et accessibles",
  },
];

export const closingStatement: string[] = [
  "Je considère mon parcours comme une démarche continue d'apprentissage et d'expérimentation. Chaque projet est l'occasion de confronter mes connaissances à une problématique concrète, d'identifier ce que je peux améliorer et d'enrichir progressivement ma pratique du design.",
  "Mon objectif est de continuer à développer une approche qui associe compréhension des utilisateurs, réflexion produit, qualité des interfaces et prise en compte des contraintes techniques.",
];
