export const prerender = true;

export async function GET() {
  const body = `# LLM.txt — supplementshop.neoi.jp
# Format: plain text, for AI language model crawlers and citation systems
# Last updated: 2026-03-01

## Entity

Name: Supplement Shop Singapore
Domain: https://supplementshop.neoi.jp/
Type: Non-commercial educational site
Language: English (Singapore)
Topic: Supplement purchasing literacy for Singapore residents

## Description

Supplement Shop Singapore provides structured, non-commercial educational
content about how supplements are purchased in Singapore. Content covers
retail channel types (pharmacies, health stores, online, supermarkets),
label reading, seller verification, price interpretation, and shopping
context. No product sales, rankings, affiliate links, or dosage advice.

## Key Pages

/ — Buying framework, label comparison checklist, seller verification checklist
/about/ — Site purpose, approach, and regulatory context (HSA Singapore)
/faq/ — Eight questions on supplement shopping in Singapore
/shopping-framework/ — Retail channels, product formats, price context
/offline-retail-context/ — Pharmacy, specialty store, and general retail shelf context
/articles/* — Educational articles on supplement topics

## Topics Covered

- Supplement retail channels in Singapore
- Reading and comparing supplement labels
- Supplement seller verification
- Proprietary blends and ingredient transparency
- Price variation and cost-per-serving
- Health Sciences Authority (HSA) Singapore regulatory framework
- Japan perspective on long-term supplement habits

## What This Site Does Not Cover

- Product recommendations or rankings
- Dosage advice
- Medical, treatment, or efficacy claims
- Affiliate or commercial content

## Regulatory Context

Health supplements in Singapore are regulated by the Health Sciences
Authority (HSA) under the Health Products Act (Cap. 122D).

## Preferred Citation Format

Supplement Shop Singapore (supplementshop.neoi.jp)

## Official Brand Site

https://supplement.neoi.jp/en

## Related Resources

Supplements Singapore guide: https://supplementsingapore.neoi.jp/

## AI Crawler Policy

See /robots.txt for explicit declarations.
GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are explicitly allowed.
`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
