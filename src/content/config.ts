import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('Arvin Farrel Pramuditya'),
    tags:        z.array(z.string()).default([]),
    category:    z.string().default('General'),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
    ogImage:     z.string().optional(),
  }),
});

export const collections = { blog };
