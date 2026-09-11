# Portfolio UX / Product Designer

Site vitrine construit avec [Astro](https://astro.build) + TypeScript. Sortie 100 % statique, quasi aucun JavaScript expédié par défaut.

## Structure

```text
src/
├── components/
│   ├── ui/          Button, Card, GlassCard, ImageFrame, Badge, Tag...
│   ├── layout/      Header, MobileNav, Footer, Seo
│   ├── sections/    Hero, FeaturedProjects, Skills, PageIntro...
│   ├── projects/    ProjectCard, ProjectHero, ProjectSection, ProjectNavigation...
│   ├── veille/       VeilleCard
│   ├── initiatives/  InitiativeCard
│   └── motion/       Reveal, FadeIn, Stagger
├── content/projects/ Un fichier .md par projet (frontmatter typé, voir content.config.ts)
├── data/             Navigation, métadonnées du site, contenu placeholder des pages
├── layouts/          BaseLayout, ProjectLayout
├── lib/              Petits utilitaires (cn, motion, breakpoints, nav)
├── pages/            Une route par fichier (dont /projets/[slug].astro pour les case studies)
├── styles/           tokens.css (design tokens) + globals.css
└── types/            Types partagés (ex. PlaceholderImage)
```

## Contenu

Tout le texte visible est un **placeholder** entre crochets (`[...]`) en attendant le contenu définitif. Pour l'éditer :

- **Projets** → `src/content/projects/*.md` (frontmatter : titre, catégorie, année, rôle, outils, sections de case study...)
- **Textes des pages** (Accueil, À propos, Veille, Initiatives, Contact) → directement dans `src/pages/*.astro`, ou dans `src/data/about.ts` / `src/data/veille.ts` / `src/data/initiatives.ts`
- **Identité du site** (nom, rôle, réseaux) → `src/data/site.ts`
- **Design** (couleurs, typo, espacements, ombres...) → `src/styles/tokens.css`

## Commandes

| Commande          | Action                                      |
| :---------------- | :------------------------------------------- |
| `npm run dev`      | Serveur de dev local                         |
| `npm run build`    | Build de production dans `./dist/`           |
| `npm run preview`  | Prévisualiser le build en local              |
| `npm run check`    | Vérification TypeScript / Astro              |
