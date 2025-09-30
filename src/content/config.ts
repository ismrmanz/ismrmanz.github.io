import { defineCollection, z } from 'astro:content';

const members = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string().optional(),
    region: z.string().optional(),
    image: z.string(),
    order: z.number().default(999),
    active: z.boolean().default(true),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    type: z.enum(['meeting', 'workshop', 'conference', 'social', 'other']).default('meeting'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    registrationLink: z.string().optional(),
  }),
});

export const collections = { members, events };