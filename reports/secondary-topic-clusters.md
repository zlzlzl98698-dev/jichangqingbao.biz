# 二级专题至三级文章集群映射拓扑表（Secondary → Tertiary Clusters）

> 说明：本文件汇总全部 10 大一级专题下二级主题中心所统领的三级内容集群规划（遵循“先归类已发布站内页面、后列明待排期选题，绝不生成空白死链”的原则）。

## 一、总体三级映射规模

- **已建二级专题枢纽（Topic Hubs）**：`108` 个（涵盖 10 个核心类目及 10 个客户端软件页、6 个系统平台页）。
- **已完成关联的站内直达延伸路径**：通过 `TopicPageTemplate.astro` 与 `clients/[slug].astro` 的 `clusters` / `relatedLinks` 区块，已将现有的二级交叉专题、31 个品牌独立档案页、18 篇品牌长篇评测及 10 组品牌横向对比页精准编入对应主题集群。
- **待下一阶段创作的三级长尾深写池**：详见 `reports/secondary-article-backlog.md`，目前在页面中均标注为可读卡片信息（`待排期`），未发布空白 HTML URL 进入 Sitemap。

## 二、十大领域重点集群映射结构

### 01 机场推荐集群
- **`/recommend/rankings/`**：排序方法与指标对比集群 + 细分场景榜单集群（链接 `/network/speedtest/`, `/brands/compare/`, `/recommend/established/`, `/pricing/monthly/`）。
- **`/recommend/reliable/`**：信任与合规核验集群（链接 `/intelligence/exit-scam/`, `/intelligence/changelog/`, `/intelligence/refund-policy/`）。
- **`/recommend/stable/`**：专线稳定性与网速核查集群（链接 `/network/iepl/`, `/network/speedtest/`, `/diagnostics/slow-speed/`）。
- **`/recommend/beginner/` & `/recommend/multi-device/`**：新手装机操作集群（链接 `/guides/beginner/`, `/guides/installation/`, `/guides/subscription/`）与多端软路由集群（链接 `/guides/multi-device/`, `/clients/openwrt/`）。

### 02 价格与套餐集群
- **试错与低成本集群**（`/pricing/cheap/`, `one-yuan/`, `one-cent/`, `monthly/`）：关联免费风险警告（`/vpn/free/`）、避坑手册（`/intelligence/avoid-pitfalls/`）与年付比较（`/pricing/annual/`）。
- **周期成本与企业高流量集群**（`/pricing/annual/`, `no-expiry/`, `value/`, `high-traffic/`, `coupons/`, `guangsuyun-plans/`）：关联历史调价（`/intelligence/price-changes/`）、倍率公式（`/network/multiplier/`）及旗舰单评（`/brands/guangsuyun/`）。

### 03 机场品牌专题集群
- **`/brands/reviews/` & `/brands/compare/`**：18 家深度 Markdown 长评测 + 10 组热门双强对比详情页。
- **`/brands/official-links/`, `deals/`, `alternatives/`, `history/`**：关联域名审计（`/intelligence/domain-changes/`）、18 项冲突审计（`/intelligence/changelog/`）、老牌时间轴（`/recommend/established/`）及全站平替矩阵（`/intelligence/alternatives/`）。

### 04–05 VPN 与客户端软件生态集群
- **系统与软件选型矩阵**：`6` 个操作系统中心页（`/clients/windows/` 等）向下分发至 `10` 个单软件档案页（`/clients/clash-verge/` 等），后者又双向绑定 `20` 家开放订阅品牌与 `8` 家仅专属端边界，并将安装、导入、启动修复分发至 `/guides/` 与 `/diagnostics/`。

### 06–07 AI 与流媒体 / 线路架构集群
- **AI 与流媒体（10 页）**：每个业务页（ChatGPT / Claude / Gemini / Netflix / Disney+ / YouTube / TikTok / Spotify）均横向连接分流教程（`/guides/routing-rules/`）、原生 IP 辨析（`/network/native-ip/`）及专项报错诊断（`/diagnostics/ai-blocked/`, `streaming-region/`）。
- **线路与节点（15 页）**：传输拓扑（IEPL/IPLC/BGP/中转/直连）与四大枢纽（港/日/新/美）互连，汇总至 `/network/speedtest/` 39 份实测证据档。

### 08–10 使用教程 / 故障排查 / 风险替代集群
- **`/guides/*`**：四阶段线性串联新手准备 → 架构安装 → 订阅导入 → 规则/TUN/DNS 调优，任何异常直接转入 `/diagnostics/*`。
- **`/diagnostics/*`**：以“症状页 → 跨客户端/跨网络三级排障子选题 → 确认非本地故障后查 `/intelligence/outages/`”形成完整排障闭环。
- **`/intelligence/*`**：整合跑路前兆对比、0 停运事实声明、18 项冲突公示、退款限制及“主力月付 + 备胎不限时”冗余迁移路线。
