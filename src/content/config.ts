import { defineCollection, z } from 'astro:content';

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const pricing = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.string(),
    features: z.array(z.string()),
  }),
});

const cta = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    buttonText: z.string().default('Skontaktuj się'),
  }),
});

export const collections = { faq, pricing, cta };
