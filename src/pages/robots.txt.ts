import site from "../../data/site.json";

export const prerender = true;

export async function GET() {
  const body = [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `# AI training crawlers — explicitly allowed`,
    `User-agent: GPTBot`,
    `Allow: /`,
    ``,
    `User-agent: ClaudeBot`,
    `Allow: /`,
    ``,
    `User-agent: PerplexityBot`,
    `Allow: /`,
    ``,
    `User-agent: Google-Extended`,
    `Allow: /`,
    ``,
    `Sitemap: https://${site.domain}/sitemap.xml`,
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
