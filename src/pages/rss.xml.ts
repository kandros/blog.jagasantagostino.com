import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

const GET: APIRoute = (context) => {
  return rss({
    // `<title>` field in output xml
    title: "Jaga Santagostino's Blog",
    // `<description>` field in output xml
    // TODO: Add description
    description: "",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site!,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
};

export default GET;
