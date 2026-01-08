import { defineCollection, z } from 'astro:content';

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'programs': programsCollection,
};


