/**
 * JS-side mirror of the breakpoint tokens in `src/styles/tokens.css`.
 * CSS custom properties can't be read inside `@media` conditions, so
 * any JS that needs to branch on viewport size (matchMedia, resize
 * listeners) reads from here instead of hardcoding numbers again.
 */
export const breakpoints = {
  mobile: 375,
  mobileLg: 430,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  desktopLg: 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export function mediaQuery(breakpoint: Breakpoint): string {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
}
