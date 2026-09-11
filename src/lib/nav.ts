/** True when `href` is the current page, or an ancestor section of it (e.g. `/projets` while on `/projets/seconde-peau`). */
export function isActiveNavItem(currentPath: string, href: string): boolean {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
