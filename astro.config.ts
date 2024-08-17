import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.jagasantagostino.com",
  integrations: [tailwind(), sitemap(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    serverIslands: true,
    env: {
      schema: {
        NOTION_API_KEY: envField.string({
          context: "server",
          access: "secret"
        })
      }
    }
  }
});