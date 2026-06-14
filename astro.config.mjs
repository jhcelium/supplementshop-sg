import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://supplementshop.neoi.jp",
  output: "static",
  integrations: [sitemap()],
});
