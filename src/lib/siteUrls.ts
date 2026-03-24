import site from "../../data/site.json";

/** Site origin with no trailing slash (canonical convention). */
export const SITE_ORIGIN = `https://${site.domain}` as const;

/**
 * Absolute canonical URL for a path. Home is the origin only (no trailing slash).
 * Trailing slashes on `path` are stripped.
 */
export function canonicalUrl(path?: string | null): string {
  if (path == null || path === "" || path === "/") {
    return SITE_ORIGIN;
  }
  const trimmed = String(path).replace(/\/+$/, "");
  const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${SITE_ORIGIN}${normalized}`;
}
