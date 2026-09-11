export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ApproachValue {
  title: string;
  description: string[];
  example?: string;
}

/** Années non communiquées — à compléter quand elles seront fournies. */
export const timeline: TimelineMilestone[] = [
  {
    year: "2022-2025",
    title: "Ressources humaines et recrutement",
    description:
      "Développement de compétences d'écoute, d'analyse, de communication et de compréhension des besoins humains et organisationnels.",
  },
  {
    year: "2025-2026",
    title: "Formation UX Designer",
    description:
      "Spécialisation dans la conception d'expériences digitales centrées sur les besoins des utilisateurs : recherche utilisateur, analyse de données, conception de parcours, wireframing, prototypage et conception d'interfaces.",
  },
  {
    year: "2026",
    title: "Aujourd'hui",
    description:
      "Orientation vers des missions UX/Product Design, avec un intérêt pour la recherche utilisateur, la conception de parcours et d'interfaces, et l'amélioration continue des produits.",
  },
];

/** "Ma façon de travailler" — qualités humaines développées à travers le parcours RH → UX. */
export const approachIntro: string =
  "Au-delà des compétences techniques, mon parcours m'a permis de développer des qualités humaines essentielles à la pratique de l'UX Design. Mon expérience en ressources humaines, mes projets UX et mon travail sur des produits numériques m'ont notamment appris à écouter, analyser, collaborer et m'adapter à des contextes et des interlocuteurs différents.";

export const approachValues: ApproachValue[] = [
  {
    title: "Communication",
    description: [
      "La communication est essentielle dans ma manière de travailler. Mon expérience dans les ressources humaines et le recrutement m'a permis de développer mon écoute, ma capacité à comprendre différents interlocuteurs et à adapter mon discours à leurs besoins.",
      "En UX Design, je mobilise cette compétence pour présenter mes choix de conception, expliquer un problème utilisateur ou partager les enseignements d'une recherche. Je cherche à rendre mes recommandations compréhensibles et à les appuyer sur des éléments concrets plutôt que sur des préférences personnelles.",
    ],
    example:
      "Lors de mes projets UX, je dois régulièrement transformer des observations et des analyses en recommandations compréhensibles pour différents interlocuteurs, en expliquant le lien entre les besoins utilisateurs et les choix de conception.",
  },
  {
    title: "Esprit d'équipe",
    description: [
      "La conception d'un produit numérique nécessite de travailler avec différents profils et de prendre en compte des points de vue parfois différents.",
      "Mon parcours professionnel m'a habituée à collaborer avec des interlocuteurs ayant des rôles et des attentes variés. En UX Design, j'accorde de l'importance au partage des informations, à l'écoute des contraintes des autres métiers et à la recherche de solutions collectives.",
    ],
    example:
      "Sur mes projets numériques, notamment Convergence et WebdeFrance, je prends en compte les besoins métier et les contraintes techniques afin de concevoir des solutions qui puissent être réellement mises en œuvre.",
  },
  {
    title: "Pensée critique",
    description: [
      "La pensée critique est au cœur de ma démarche UX. Je cherche à remettre en question les premières hypothèses plutôt qu'à considérer une solution comme évidente.",
      "J'analyse les informations disponibles, je confronte les différentes sources et je cherche à comprendre la cause d'un problème avant de proposer une solution.",
    ],
    example:
      "Dans le projet Seconde Peau, l'analyse ne s'est pas limitée à constater une baisse de performance. J'ai cherché à comprendre les comportements et les points de friction associés afin de formuler des recommandations adaptées au problème identifié.",
  },
  {
    title: "Empathie",
    description: [
      "L'empathie est une compétence fondamentale dans ma pratique de l'UX Design. Elle consiste pour moi à chercher à comprendre une situation du point de vue de l'utilisateur, sans projeter mes propres usages ou préférences.",
      "Mes expériences en ressources humaines m'ont également permis de développer une capacité d'écoute et une attention particulière aux besoins individuels.",
    ],
    example:
      "Dans mes projets de recherche utilisateur, notamment Avenirs et Equi-libre, j'ai cherché à comprendre les attentes, motivations, difficultés et contraintes des utilisateurs afin de construire des solutions adaptées à leur réalité.",
  },
  {
    title: "Adaptabilité",
    description: [
      "Mon parcours m'a amenée à évoluer dans des environnements et des domaines différents : ressources humaines, recrutement, UX Design, conception de sites web et produits SaaS.",
      "Cette diversité m'a appris à acquérir rapidement de nouvelles connaissances et à adapter ma manière de travailler en fonction du contexte, des utilisateurs et des contraintes du projet.",
    ],
    example:
      "Le passage des ressources humaines à l'UX Design m'a demandé d'acquérir de nouvelles méthodes, de nouveaux outils et de nouvelles compétences. Je continue aujourd'hui à développer cette polyvalence à travers différents projets numériques, notamment Convergence.",
  },
  {
    title: "Gestion du temps et des priorités",
    description: [
      "La gestion des priorités fait partie intégrante de ma manière de travailler. Je cherche à identifier les éléments qui apportent le plus de valeur au projet afin de concentrer mes efforts sur les besoins prioritaires.",
    ],
    example:
      "Dans la conception de Convergence, la réflexion sur le MVP m'amène à distinguer les fonctionnalités essentielles des fonctionnalités secondaires afin de construire progressivement un produit cohérent et réaliste.",
  },
];

export const approachClosing: string =
  "Ces différentes qualités me permettent d'adopter une posture de UX Designer à la fois centrée sur les utilisateurs, attentive aux contraintes du projet et ouverte à la collaboration. Mon parcours m'a également appris à remettre en question mes premières idées, à communiquer mes choix et à m'adapter lorsque les besoins ou les contraintes évoluent.";

/** Paragraphes d'introduction affichés sur la page À propos. */
export const introParagraphs: string[] = [
  "Je suis en formation UX Designer, avec un parcours assez varié. Après une première formation et des expériences professionnelles dans les ressources humaines et le recrutement, j'ai choisi de me spécialiser dans la conception d'expériences digitales centrées sur les besoins des utilisateurs.",
  "Ma formation en UX Design m'a permis de développer une approche structurée de la conception, allant de la compréhension d'un problème jusqu'à la conception et à l'amélioration d'une solution. J'ai notamment travaillé sur des problématiques de recherche utilisateur, d'analyse de données, de conception de parcours, de wireframing, de prototypage et de conception d'interfaces.",
  "À travers mes différents projets, j'ai appris à ne pas concevoir uniquement à partir d'intuitions, mais à m'appuyer sur les besoins des utilisateurs, les données disponibles et les contraintes métier. J'accorde également une importance particulière à l'accessibilité, à la simplicité des parcours et à la cohérence des interfaces.",
];

/** Court paragraphe introduisant la liste d'outils. */
export const toolsIntro: string =
  "Je maîtrise principalement Figma pour la conception d'interfaces, le wireframing, le prototypage et la création de composants. Mon profil technique me permet également de comprendre les contraintes liées au développement et de collaborer plus facilement avec des profils techniques.";

/** Paragraphe d'aspirations professionnelles. */
export const aspirations: string =
  "Je m'oriente particulièrement vers des missions de UX/Product Design, avec un intérêt pour la recherche utilisateur, la conception de parcours et d'interfaces, ainsi que l'amélioration continue des produits. À terme, je souhaite continuer à développer une approche complète du design, à la fois centrée sur l'utilisateur, les enjeux métier et les contraintes techniques.";

export const tools: string[] = ["Figma", "HTML", "CSS", "Tailwind CSS"];
