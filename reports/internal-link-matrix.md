# 全站五层结构内部链接自动映射报告（Internal Link Matrix）

> 检验基线：`npm run audit:seo`（187 页零死链） + `npm run audit:content`（16 篇三级文章零孤立页）

## 一、自动化双向内链链路清单

1. **二级专题 → 三级文章（自动同步，无需手工改写 108 个二级页）**：
   - 在 [TopicPageTemplate.astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/components/seo/TopicPageTemplate.astro) 中基于 `Astro.url.pathname` 与 `articles` 合集 Frontmatter 的 `parentTopic` 自动配对渲染“本专题已上线三级深度文章”面板。每当新增文章匹配对应二级路线，即自动上线可索引入口。
2. **品牌评测页 ↔ 三级文章（自动双向）**：
   - 在 [brands/[slug].astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/brands/%5Bslug%5D.astro) 中筛选 `relatedBrands.includes(brand.slug)` 自动展示相关实操指南与避坑长文；同时每篇三级文章通过 `BrandCard` 将有参考价值的品牌引导回其独立评测档案页。
3. **三级文章 → 二级专题 + 一级专题 + 关联三级文章**：
   - [articles/[slug].astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/articles/%5Bslug%5D.astro) 顶部面包屑固定生成 `一级专题 → 二级专题 → 三级文章` 三段式导航，底部与侧栏同步渲染同集群兄弟文章及返还上级专题枢纽入口。
4. **三级文章索引与可视化网站地图**：
   - [articles/index.astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/articles/index.astro) 按十大主题聚合全部已上线三级文章；[sitemap.astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/sitemap.astro) 同步列出全部 `/articles/*` 静态链接。
5. **10 组品牌横向对比 ↔ 各自独立评测 + 商业注册**：
   - [brands/compare/[slug].astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/brands/compare/%5Bslug%5D.astro) 每组对决页均明确回指 `/brands/<A>/`、`/brands/<B>/` 评测详文以及 `/brands/compare/`、`/intelligence/alternatives/`、`/pricing/` 与 `/intelligence/changelog/`。
