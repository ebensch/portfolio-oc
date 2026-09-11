export type VeilleAccent = "rose" | "lavender" | "blue";

export interface VeilleCategory {
  id: string;
  label: string;
  /** Icon name from `components/ui/Icon.astro`, illustrating the category at a glance. */
  icon: string;
  /** Accent color used for the filter chip, the tags and the source links. */
  accent: VeilleAccent;
}

export interface VeilleResource {
  id: string;
  /** FK -> VeilleCategory.id */
  categoryId: string;
  /** Name of the source followed. */
  title: string;
  description: string;
  /** Official homepage of the source — omitted rather than guessed when not confidently known. */
  url?: string;
}

export const veilleCategories: VeilleCategory[] = [
  { id: "actualites-ux", label: "Actualités UX", icon: "trending-up", accent: "rose" },
  { id: "outils-ux", label: "Outils UX", icon: "code", accent: "lavender" },
  { id: "methodes-ux", label: "Méthodes UX", icon: "search", accent: "blue" },
  { id: "accessibilite", label: "Accessibilité", icon: "accessibility", accent: "rose" },
  { id: "business-marketing", label: "Business & Marketing", icon: "users", accent: "lavender" },
  { id: "eco-conception", label: "Éco-conception", icon: "sparkles", accent: "blue" },
  { id: "developpement-durable", label: "Développement durable", icon: "layers", accent: "rose" },
];

/**
 * Add, edit or remove a resource here — VeilleResourceCard/VeilleResourceExplorer/
 * VeilleSources read from this array and never need to change.
 */
export const veilleResources: VeilleResource[] = [
  {
    id: "nngroup-actualites",
    categoryId: "actualites-ux",
    title: "Nielsen Norman Group (NN/g)",
    description:
      "Source de référence sur l'UX Research, l'utilisabilité et les pratiques de conception centrées utilisateur.",
    url: "https://www.nngroup.com/",
  },
  {
    id: "ux-collective",
    categoryId: "actualites-ux",
    title: "UX Collective",
    description:
      "Plateforme proposant des articles et retours d'expérience autour de l'UX, du Product Design et des évolutions du métier.",
    url: "https://uxdesign.cc/",
  },
  {
    id: "figma",
    categoryId: "outils-ux",
    title: "Figma",
    description:
      "Source principale pour suivre les évolutions de l'outil, les nouvelles fonctionnalités et les pratiques de conception collaborative.",
    url: "https://www.figma.com/",
  },
  {
    id: "product-hunt",
    categoryId: "outils-ux",
    title: "Product Hunt",
    description:
      "Permet d'identifier de nouveaux outils et produits numériques et d'observer les évolutions de l'écosystème produit.",
    url: "https://www.producthunt.com/",
  },
  {
    id: "nngroup-methodes",
    categoryId: "methodes-ux",
    title: "Nielsen Norman Group",
    description:
      "Ressource particulièrement utile pour suivre les méthodes de recherche utilisateur, les tests d'utilisabilité et les principes d'ergonomie.",
    url: "https://www.nngroup.com/",
  },
  {
    id: "ideo-design-thinking",
    categoryId: "methodes-ux",
    title: "IDEO Design Thinking",
    description:
      "Ressources autour de la conception centrée utilisateur, de l'idéation et des démarches de résolution de problèmes.",
    url: "https://www.ideo.com/",
  },
  {
    id: "wai",
    categoryId: "accessibilite",
    title: "W3C / Web Accessibility Initiative (WAI)",
    description: "Référence internationale pour les standards et recommandations liés à l'accessibilité du Web.",
    url: "https://www.w3.org/WAI/",
  },
  {
    id: "designgouv-rgaa",
    categoryId: "accessibilite",
    title: "DesignGouv / RGAA",
    description:
      "Ressource française permettant de suivre les recommandations et référentiels liés à l'accessibilité numérique.",
    url: "https://design.numerique.gouv.fr/",
  },
  {
    id: "mckinsey",
    categoryId: "business-marketing",
    title: "McKinsey",
    description: "Permet de suivre les évolutions des marchés, des comportements et des stratégies numériques.",
    url: "https://www.mckinsey.com/",
  },
  {
    id: "hubspot",
    categoryId: "business-marketing",
    title: "HubSpot",
    description:
      "Ressource permettant de suivre les tendances en marketing digital, expérience client et stratégie numérique.",
    url: "https://www.hubspot.com/",
  },
  {
    id: "greenit",
    categoryId: "eco-conception",
    title: "GreenIT.fr",
    description:
      "Ressource française spécialisée dans la sobriété numérique et l'éco-conception des services numériques.",
    url: "https://www.greenit.fr/",
  },
  {
    id: "designers-ethiques-eco",
    categoryId: "eco-conception",
    title: "Designers Éthiques",
    description:
      "Association proposant des réflexions et ressources autour d'un design plus responsable, éthique et soutenable.",
    url: "https://www.designersethiques.org/",
  },
  {
    id: "designers-ethiques-durabilite",
    categoryId: "developpement-durable",
    title: "Designers Éthiques",
    description: "Source permettant d'approfondir les enjeux sociaux et environnementaux liés à la conception numérique.",
    url: "https://www.designersethiques.org/",
  },
  {
    id: "w3c-durabilite",
    categoryId: "developpement-durable",
    title: "W3C",
    description: "Permet également de suivre les évolutions concernant l'inclusion, l'accessibilité et les bonnes pratiques du Web.",
    url: "https://www.w3.org/",
  },
];

export const introText: string =
  "Le design évolue constamment : nouvelles pratiques, nouveaux outils, accessibilité, intelligence artificielle, conception responsable… Je veille régulièrement à ces évolutions pour nourrir ma pratique, questionner mes méthodes et continuer à apprendre.";

export const updateFrequency: string = "En continu";

export const criteriaIntro: string = "Je privilégie des sources :";

export const criteria: string[] = [
  "Reconnues dans leur domaine",
  "Régulièrement mises à jour",
  "Produites par des organismes ou professionnels identifiables",
  "Fondées sur des recherches, des données ou des retours d'expérience",
  "Directement applicables à la pratique UX",
  "Complémentaires entre elles",
];

export interface VeilleSystemStep {
  label: string;
  description: string;
}

export const systemIntro: string =
  "Ma veille ne s'arrête pas à la lecture : elle suit un processus qui va de la découverte d'une source jusqu'à son application concrète dans mes projets.";

export const systemSteps: VeilleSystemStep[] = [
  {
    label: "Collecter",
    description: "Identifier des sources fiables et les suivre régulièrement, dans chacune de mes thématiques de veille.",
  },
  {
    label: "Sélectionner",
    description: "Trier les contenus selon leur pertinence, leur fiabilité et leur utilité pour ma pratique.",
  },
  {
    label: "Analyser",
    description: "Comprendre les enjeux, comparer avec mes pratiques actuelles et identifier ce qui est exploitable.",
  },
  {
    label: "Partager",
    description: "Restituer les enseignements de façon synthétique, à l'écrit ou à l'oral.",
  },
  {
    label: "Appliquer",
    description: "Intégrer les apprentissages dans mes projets et faire évoluer mes méthodes de conception.",
  },
];

export const systemOutro: string =
  "Cette approche me permet de transformer une veille dispersée en enseignements réellement exploitables.";

export interface VeilleLearning {
  title: string;
  content: string;
}

export const learnings: VeilleLearning[] = [
  {
    title: "Accessibilité",
    content:
      "Suivre le W3C/WAI et le RGAA me rappelle que l'accessibilité ne doit pas être un correctif de fin de projet, mais un critère de conception dès les premières maquettes : contrastes, structure sémantique, hiérarchie visuelle, alternatives textuelles. C'est une exigence importante pour moi, que j'essaie de respecter au maximum.",
  },
  {
    title: "Outils & évolution des pratiques",
    content:
      "Les outils et les méthodes de conception évoluent très vite, que ce soit sur Figma ou dans les pratiques de recherche. La veille m'aide à ne pas figer ma façon de travailler et à régulièrement questionner mes habitudes plutôt qu'à les considérer comme acquises. Il est important de rester informé pour évoluer en même temps que les pratiques du métier.",
  },
  {
    title: "Conception responsable",
    content:
      "Les ressources sur l'éco-conception et la sobriété numérique m'ont sensibilisée à l'impact concret des choix d'interface (contenus optimisés, parcours simplifiés, fonctionnalités réellement utiles) et sur la consommation de ressources. C'est un critère que je cherche désormais à intégrer dès la réflexion sur les parcours.",
  },
];

export interface VeilleEmergingTopic {
  title: string;
  description: string;
  icon: string;
  accent: VeilleAccent;
}

export const emergingTopics: VeilleEmergingTopic[] = [
  {
    title: "IA & processus UX",
    description:
      "L'intelligence artificielle transforme progressivement les méthodes de travail UX : accélération de certaines tâches de recherche et d'idéation, nouveaux outils d'assistance à la conception, questionnements sur la place de l'humain dans le processus créatif.",
    icon: "sparkles",
    accent: "lavender",
  },
  {
    title: "Accessibilité by design",
    description:
      "L'accessibilité tend à être pensée dès les premières étapes de conception plutôt qu'ajoutée en fin de projet, portée par des référentiels comme le RGAA et les recommandations du W3C/WAI.",
    icon: "accessibility",
    accent: "rose",
  },
  {
    title: "Éco-conception numérique",
    description:
      "La sobriété numérique devient un critère de conception à part entière : réduction du poids des interfaces, simplification des parcours, prise en compte de l'impact environnemental des choix techniques.",
    icon: "layers",
    accent: "blue",
  },
];

export interface VeilleActionIndicator {
  label: string;
  value: string;
}

export const actionIntro: string =
  "Ma veille ne reste pas un exercice isolé : elle nourrit mes choix de conception, mes méthodes de travail et mes réflexions sur la pratique UX.";

/** Placeholder values — à remplacer une fois le document d'exploitation finalisé. */
export const actionIndicators: VeilleActionIndicator[] = [
  { label: "Ressources exploitées", value: "[À compléter]" },
  { label: "Pratiques ajustées", value: "[À compléter]" },
  { label: "Projets influencés", value: "[À compléter]" },
];

export interface VeilleExploitationCta {
  label: string;
  href: string;
}

export const exploitationCta: VeilleExploitationCta = {
  label: "Voir l'exploitation complète de ma veille",
  href: "/documents/exploitation-veille.pdf",
};
