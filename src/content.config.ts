import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string().max(180),
      category: z.enum(['replacement', 'fobs', 'emergency']),
      badge: z.string(),
      badgeTone: z.enum(['primary', 'emergency', 'success', 'surface']).default('primary'),
      cover: image(),
      coverAlt: z.string(),
      publishDate: z.string(),
      readingMinutes: z.number().default(4),
      draft: z.boolean().default(false)
    })
});

export const collections = { blog };
