# 全站二级专题内链体系说明与跨页回链建议报告

> 生成时间：2026-11-26  
> 检验状态：所有站内链路均已通过 `npm run audit:seo` 170 页全静态 HTML 校验（0 死链、0 警告）。

## 一、二级专题上下游内链结构

每个升级后的二级专题页（Topic Hub）均具备四条真实、可点击、具备语义上下文的链接流向：

1. **向上溯源（面包屑与一级锚点）**：全部 `108` 个二级专题顶部面包屑严格回指所属一级专题首页（如 `价格与套餐 > 年付机场`、`故障排查 > 全部节点超时`），建立清晰的父子层级权重归属。
2. **横向关联（同级需求互导与边界分工）**：
   - `TopicPageTemplate.astro` 右侧根据所属领域智能切换专属行动卡片（CTA），不再向 `/diagnostics/` 或 `/vpn/` 读者错误推送无关商业广告：
     - `/diagnostics/*` → 引导至 `/intelligence/outages/`（服务异常核查）与 `/guides/`（配置教程）。
     - `/guides/*` → 引导至 `/diagnostics/`（排障中心）与 `/clients/`（软件兼容矩阵）。
     - `/clients/*` & `/vpn/*` → 引导至 `/clients/`（总兼容列表）与 `/guides/subscription/`（导入步骤）。
     - `/streaming-ai/*` → 引导至 `/streaming-ai/`（31 品牌总矩阵）与 `/guides/routing-rules/`（分流配置）。
     - `/network/*` → 引导至 `/network/speedtest/`（39 份测速原图）与 `/network/iepl/recommendations/`（IEPL 选型）。
     - `/intelligence/*` → 引导至 `/intelligence/alternatives/`（替代方案库）与 `/intelligence/changelog/`（18 项冲突审计）。
     - 商业选型与价格类（`/recommend/*`, `/pricing/*`, `/brands/*`）→ 引导至 `/pricing/` 154 条全库报价与 `/brands/guangsuyun/` 旗舰档案（符合第 11.2 节商业转化规范）。
3. **向下分发（二级 → 已上线关联页 & 品牌档案卡）**：
   - 在 `/pricing/[topic].astro`、`/brands/[topic].astro`、`/streaming-ai/[topic].astro` 动态注入基于 `plans.json` / `brands.json` 的真实参数表格与品牌档案入口，确保每个具有商业/选型意图的专题都能平滑导流至对应 `/brands/<slug>/` 评测页与商业详情页。
4. **三级文章集群承接（零死链原则）**：
   - 仅当目标文章或专题页面在 `dist/` 中实际存在时生成 `<a href="...">`；尚未编写的待排期三级长尾选题仅作为静态规划标签展示，绝不在构建产物产生 404 空链。

## 二、建议后续在其他页面补充的回链清单（遵循“不越界改写其他页面”原则记录）

按照《二级专题升级.txt》第二章修改边界要求，本次升级没有越界重写首页、全站 18 篇独立品牌评测 Markdown 正文或已有品牌对比单页。以下是建议后续维护阶段在这些页面中补充指向二级专题的回链位置：

1. **18 篇品牌深度 Markdown 评测底部（`src/content/reviews/*.md`）**：建议各品牌文章结尾按自身价格档位和客户端属性补充指向 `/pricing/monthly/`（月付档）、`/pricing/no-expiry/`（含不限时品牌）或 `/clients/`（标注仅专属端vs开放订阅）的锚文本内链。
2. **首页（`src/pages/index.astro`）第六、七、九屏**：建议后续微调时增加直达 `/pricing/value/`（单 GB 成本对照）、`/network/speedtest/`（39 份原始截图）与 `/diagnostics/ai-blocked/`（AI 地域限制排障）的快捷文本链接。
3. **10 个双品牌对比详情页（`src/pages/brands/compare/[slug].astro`）**：建议在对决表格底部补充指向 `/intelligence/alternatives/`（更多同级替代）和 `/intelligence/changelog/`（双方冲突明细）的场景回链。
