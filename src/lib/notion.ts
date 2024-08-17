import { Client } from "@notionhq/client";
import { NOTION_API_KEY } from "astro:env/server";

const notion = new Client({ auth: NOTION_API_KEY });

/* quotes database */
// https://www.notion.so/jaga/7cdb788aaa444c08a6101cfd3b340248?v=91874cd416004d69bbbd84ad99163745&pvs=4
const databaseId = "7cdb788aaa444c08a6101cfd3b340248";

type QuoteType = {
  text: string;
  source: string | null;
  author: string | null;
};

export async function getRandomQuote(): Promise<QuoteType> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "random",
          direction: "ascending",
        },
      ],
      page_size: 1, // Fetch only one entry
    });

    if (response.results.length === 0) {
      console.log("No entries found in the database.");
      throw new Error("No entries found in the database.");
    }

    const page = response.results[0] as any;
    const quote = {
      text: page.properties.Name.title[0]?.plain_text || "No title",
      source: page.properties.source.select?.name || "No source",
      author: page.properties.author.select?.name || null,
    } satisfies QuoteType;

    console.log("Fetched random entry:", quote);
    return quote;
  } catch (error) {
    console.error("Error fetching random entry:", error);
    throw error;
  }
}
