import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { brands, intelligenceEvents, SITE_META } from '../lib/data';

export const GET: APIRoute = async (context) => {
  const articles = await getCollection('articles', (a) => !a.data.draft);

  const articleItems = articles.map((a) => ({
    title: `[指南] ${a.data.h1}`,
    pubDate: new Date(a.data.updated || a.data.date),
    description: a.data.description,
    link: `/articles/${a.id}/`,
  }));

  const brandItems = brands.slice(0, 12).map((b) => ({
    title: `${b.brandName} 品牌档案与深度评测（${b.dataStatus}）`,
    pubDate: new Date(b.updatedAt),
    description: b.description,
    link: `/brands/${b.slug}/`,
  }));

  const eventItems = intelligenceEvents.slice(0, 10).map((ev) => ({
    title: `[${ev.eventType}] ${ev.brandName}（${ev.eventDate}）`,
    pubDate: new Date(ev.observedAt),
    description: ev.evidence,
    link: `/brands/${ev.brandSlug}/`,
  }));

  return rss({
    title: `${SITE_META.name} · ${SITE_META.englishName}`,
    description: '中文网络服务情报平台：31 家机场品牌档案、测速证据、长尾技术指南与风险更新记录。',
    site: context.site ?? SITE_META.url,
    items: [...articleItems, ...eventItems, ...brandItems],
    customData: '<language>zh-cn</language>',
  });
};
