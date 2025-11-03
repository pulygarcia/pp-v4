import { defineCollection, z } from "astro:content"


const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    clientRepo: z.string().optional(),
    apiRepo: z.string().optional(),
    demoUrl: z.string().optional(),
  }),
})

export const collections = {projects}
