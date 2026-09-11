/**
 * Shared with `src/content.config.ts`'s zod schema (kept as a plain type here
 * since it's also used by presentational components like `ImageFrame` that
 * don't need to import the content-collections runtime).
 */
export type ImageTone = "rose" | "lavender" | "blue" | "mesh";

export interface PlaceholderImage {
  alt: string;
  src?: string;
  tone?: ImageTone;
  /** Shrinks the image within its frame (0-1) instead of filling it edge-to-edge. */
  scale?: number;
}
