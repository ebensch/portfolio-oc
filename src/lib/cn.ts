type ClassValue = string | false | null | undefined;

/** Tiny class-list joiner — avoids pulling in `clsx` for one-line usage across components. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
