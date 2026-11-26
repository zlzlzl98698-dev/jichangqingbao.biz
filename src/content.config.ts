import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    brandSlug: z.string(),
    title: z.string(),
    description: z.string(),
    verifiedAt: z.string(),
    updatedAt: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string(),
    verifiedAt: z.string(),
    author: z.string().default('机场情报研究组'),
    pillar: z.string(),
    pillarLabel: z.string(),
    pillarHref: z.string(),
    parentTopic: z.string(),
    parentTopicLabel: z.string(),
    parentCluster: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    searchIntent: z.enum([
      'Informational',
      'How-to',
      'Troubleshooting',
      'Comparison',
      'Commercial Investigation',
      'Navigational',
      'Transactional',
    ]),
    audience: z.string(),
    conversionIntent: z.enum(['guide', 'diagnostics', 'pricing', 'decision', 'risk', 'network']),
    answerFirst: z.string(),
    sources: z.string().default('机场情报资料库（32家品牌清单、客户端百科及实测证据包）'),
    relatedSlugs: z.array(z.string()).default([]),
    relatedBrands: z.array(z.string()).default([]),
    schemaType: z.enum(['Article', 'HowTo']).default('Article'),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reviews, articles };
