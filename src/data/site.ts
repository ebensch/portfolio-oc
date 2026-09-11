/**
 * Central site metadata — placeholders until final content is provided.
 * Referenced by layouts (SEO tags) and components (footer, contact) so
 * there is a single place to update once real copy/links are ready.
 */
export const site = {
  name: "Portfolio Eva Bensch",
  role: "UX Designer",
  tagline:
    "UX Designer en formation, spécialisée dans la conception d'expériences digitales centrées sur les besoins des utilisateurs.",
  description:
    "En formation UX Designer, parcours varié entre ressources humaines et conception d'expériences digitales centrées sur les utilisateurs.",
  url: "https://example.com",
  locale: "fr",
  email: "evannabensch@gmail.com",
  phone: {
    display: "06 12 49 66 60",
    href: "tel:+33612496660",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/eva-bensch-230315263/",
  },
} as const;
