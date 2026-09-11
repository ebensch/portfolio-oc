/** Shared helper so every motion component honors the same OS-level preference. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reveals elements as they enter the viewport by toggling `.is-visible`.
 * Pure IntersectionObserver — no animation library needed for a fade/translate.
 */
export function observeReveal(
  root: ParentNode,
  selector = "[data-reveal]"
): void {
  const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}
