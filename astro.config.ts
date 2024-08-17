import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.jagasantagostino.com",
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    serverIslands: true,
    env: {
      schema: {
        NOTION_API_KEY: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
});
