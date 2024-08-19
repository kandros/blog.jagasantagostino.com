import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { ADMIN_ENDPOINT_TOKEN } from "astro:env/server";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const drafts = await getCollection("posts", ({ data }) => {
    return data.draft === true;
  });

  if (request.headers.get("x-admin-token") !== ADMIN_ENDPOINT_TOKEN) {
    console.log("🤢🤢🤢🤢", ADMIN_ENDPOINT_TOKEN), request.headers.get("x-admin-token");
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(
    JSON.stringify({
      drafts: drafts.map((d) => d.data),
      count: drafts.length,
    })
  );
};
