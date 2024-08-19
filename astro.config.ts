import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.jagasantagostino.com",
  integrations: [tailwind(), sitemap(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    contentIntellisense: true,
    serverIslands: true,
    env: {
      schema: {
        NOTION_API_KEY: envField.string({
          context: "server",
          access: "secret",
        }),
        ADMIN_ENDPOINT_TOKEN: envField.string({
          context: "server",
          access: "secret",
        }),
      },
    },
  },
});
