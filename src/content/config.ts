import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const notesToSelfCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const publicJournalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  "notes-to-self": notesToSelfCollection,
  "public-journal": publicJournalCollection,
};
