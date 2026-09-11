import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imagePlaceholder = z.object({
  alt: z.string(),
  src: z.string().optional(),
  tone: z.enum(["rose", "lavender", "blue", "mesh"]).default("mesh"),
  scale: z.number().min(0).max(1).optional(),
});

/**
 * A project can include whichever subset of case-study sections it needs
 * (Research, Analysis, Wireframes, UI Design...), in whatever order —
 * intentionally flexible rather than a fixed set of fields, since not
 * every project will have every stage documented.
 */
const projectSection = z.object({
  id: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).default([]),
  image: imagePlaceholder.optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    role: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    excerpt: z.string(),
    context: z.string().optional(),
    problem: z.string().optional(),
    coverImage: imagePlaceholder,
    gallery: z.array(imagePlaceholder).default([]),
    sections: z.array(projectSection).default([]),
    results: z.array(z.string()).default([]),
    learnings: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
