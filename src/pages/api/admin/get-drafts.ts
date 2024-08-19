import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { ADMIN_ENDPOINT_TOKEN } from "astro:env/server";

export const GET: APIRoute = async ({ params, request, cookies }) => {
  const drafts = await getCollection("posts", ({ data }) => {
    return data.draft === true;
  });

  if (cookies.get("x-admin-token")?.value !== ADMIN_ENDPOINT_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(
    JSON.stringify({
      drafts: drafts.map((d) => d.data),
      count: drafts.length,
    })
  );
};
