import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { brands, plans, SITE_META } from '../lib/data';
import { PRIMARY_NAV } from '../data/navigation';

export const GET: APIRoute = async () => {
  const articles = (await getCollection('articles', (a) => !a.data.draft)).sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  const lines: string[] = [
    `# ${SITE_META.name} (${SITE_META.englishName})`,
    '',
    `> 独立中文网络服务技术情报与机场品牌档案数据库（${SITE_META.url}）。`,
    `> 收录 ${brands.length} 家去重独立品牌实体、${plans.length} 条全周期套餐报价、${articles.length} 篇长尾排障与选型指南及 18 项跨文档数据冲突记录。`,
    '',
    '## 数据可信度与披露口径',
    '- 严格区分：`独立实测 (measured)` / `品牌方提供 (vendor)` / `历史测试资料 (historical)` / `待核实 (unverified)` / `来源冲突 (conflicted)`。',
    '- 光速云为站点核心合作推广品牌，但商业推广排序不冒充独立测速排名；全站未实测项目如实标注“待核实”，不捏造速度或评分。',
    '',
    '## 核心数据库与门户',
    `- [全站首页](${SITE_META.url}/)`,
    `- [机场品牌数据库 (${brands.length} 家)](${SITE_META.url}/brands/)`,
    `- [套餐价格数据库 (${plans.length} 条)](${SITE_META.url}/pricing/)`,
    `- [双品牌横向对比索引](${SITE_META.url}/brands/compare/)`,
    `- [情报核实与 18 项字段冲突日志](${SITE_META.url}/intelligence/changelog/)`,
    `- [长尾技术指南与排障文章总索引 (${articles.length} 篇)](${SITE_META.url}/articles/)`,
    '',
    '## 十大一级专题栏目',
    ...PRIMARY_NAV.map((t) => `- [${t.label}](${SITE_META.url}${t.href}) — ${t.summary}`),
    '',
    `## 已发布三级指南与排障文章 (${articles.length} 篇)`,
    ...articles.map(
      (a) => `- [${a.data.h1}](${SITE_META.url}/articles/${a.id}/) — ${a.data.answerFirst}`
    ),
    '',
    `## 31 家独立品牌档案`,
    ...brands.map(
      (b) =>
        `- [${b.brandName}](${SITE_META.url}/brands/${b.slug}/) [${b.dataStatus}] — 协议: ${b.protocols.join('/') || '待核实'} | 客户端: ${b.thirdPartyClientSupport === true ? '支持第三方订阅' : b.thirdPartyClientSupport === false ? '仅限官方专属端' : '待核实'}`
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
