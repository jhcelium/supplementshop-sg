import { listArticleIds } from "../lib/content";
import { canonicalUrl } from "../lib/siteUrls";

export const prerender = true;

const LAST_MOD = "2026-03-01";

type SitemapEntry = {
  path: string;
  changefreq: string;
  priority: string;
};

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/shopping-framework", changefreq: "monthly", priority: "0.8" },
  { path: "/offline-retail-context", changefreq: "monthly", priority: "0.7" },
  { path: "/definitions", changefreq: "monthly", priority: "0.65" },
];

export async function GET() {
  const articleEntries: SitemapEntry[] = listArticleIds().map((id) => ({
    path: `/articles/${id}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const allEntries = [...staticEntries, ...articleEntries];

  const urls = allEntries
    .map(
      (e) =>
        `<url>` +
        `<loc>${canonicalUrl(e.path)}</loc>` +
        `<lastmod>${LAST_MOD}</lastmod>` +
        `<changefreq>${e.changefreq}</changefreq>` +
        `<priority>${e.priority}</priority>` +
        `</url>`
    )
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
