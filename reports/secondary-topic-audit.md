# 全站二级专题（Secondary Topic Hubs）现状盘点与升级审计报告

> 审计时间：2026-11-26  
> 统计基线：基于 `dist/` 全站静态构建产物扫描 `<main>` 区域纯文本汉字数与 JSON-LD `FAQPage` 存在状态。

## 一、全站二级专题盘点总览

除去 **31 个品牌独立档案页**（`/brands/<slug>/`）与 **10 个双品牌对比详情页**（`/brands/compare/<pair>/`）外，十大一级专题下共存在 **108 个二级专题中心页（Topic Hubs）**（含 `10` 个客户端软件档案与 `6` 个操作系统平台页）：

| 所属一级专题 | 现有二级专题数量 | 当前 `<main>` 汉字区间 | 缺 `FAQPage` 数量 | 核心升级方向（Batch） |
| :--- | :---: | :---: | :---: | :--- |
| `01 /recommend/` | 7 | 1,204 – 1,761 | 0 | **Batch 1**：增加多维选型对比表、决策步骤、3 级文章集群路线图与 6–8 条 FAQ |
| `02 /pricing/` | 10 | 697 – 1,513 | 0 | **Batch 1**：接入 `plans.json` 实时价格表、周期折算口径、倍率/优惠风险规则与 FAQ |
| `03 /brands/`（专题中心） | 7 | 429 – 1,567 | 1（`compare/`） | **Batch 1**：补足横向对比指南、官网核验步骤、优惠限制矩阵与 `compare/` FAQ |
| `04 /vpn/` | 9 | 454 – 1,047 | 0 | **Batch 2**：补充系统与协议技术表、安全排障对照与跨端分流建议 |
| `05 /clients/` | 16 | 369 – 1,304 | 10（全部软件页） | **Batch 2**：为 10 个软件页面补充安装流程、排障指引、文章集群与 6 问 `FAQPage` |
| `06 /streaming-ai/` | 10 | 909 – 1,310 | 0 | **Batch 2**：接入站内实测/品牌方宣称筛选表、地区策略边界、防风控清单与 FAQ |
| `07 /network/` | 15 | 526 – 1,635 | 1（`speedtest/`） | **Batch 3**：补强专线/公网参数对比、区域延迟分工表、`speedtest/` FAQ 与集群导流 |
| `08 /guides/` | 11 | 501 – 1,095 | 0 | **Batch 3**：扩写操作前置条件、分步配置矩阵、错误防踩坑点与三级教程集群 |
| `09 /diagnostics/` | 10 | 501 – 642 | 0 | **Batch 3**：从 500 字短卡升级为“症状分诊表 + 逐层排障步骤 + 三级排障集群”中心 |
| `10 /intelligence/` | 13 | 556 – 2,094 | 1（`changelog/`） | **Batch 3**：补足证据核验清单、同价位迁移矩阵、18 项冲突审计解读与 `changelog/` FAQ |
| **合计** | **108** | **369 – 2,094** | **13** | 全部采用真实资料扩写，无虚构数据、无空页面、无无效锚点 |

## 二、路由与搜索意图去重审计结论

1. **全量路由均已存在且可索引**：《二级专题升级.txt》中规划的细分主题均已在本站 108 个真实静态路由中覆盖（例如将 `v2rayN / v2rayNG` 拆分为 `/clients/v2rayn/` 与 `/clients/v2rayng/`，将 `FlClash / Hiddify / Karing` 独立为三个软件专题页），无需创建空 URL 或重复路由。
2. **需要清理的模板同质化缺陷**：
   - 原 `TopicPageTemplate.astro` 右侧硬编码统一显示“光速云旗舰档案”，即使在 `/diagnostics/` 排障或 `/vpn/` 原理页也不例外；升级为按主题域动态展示对应下一步行动引导（仅在商业选型/价格/品牌类页面保留对应评测转化入口）。
   - 原侧边栏目录为不可点击纯文本，无横向数据对照表与三级文章集群归属展示模块。
   - 10 个客户端软件页（`/clients/clash-verge/` 等）以及 `/brands/compare/`、`/network/speedtest/`、`/intelligence/changelog/` 缺失 `FAQPage` 结构化数据与长篇决策解释。

## 三、全站 108 个二级专题基线数据明细

- **`/recommend/` (7)**：`rankings/` (1761), `multi-device/` (1466), `established/` (1440), `reliable/` (1315), `stable/` (1305), `beginner/` (1210), `best-rated/` (1204)
- **`/pricing/` (10)**：`cheap/` (1513), `monthly/` (1510), `annual/` (1490), `no-expiry/` (1439), `high-traffic/` (1398), `value/` (1294), `coupons/` (1286), `one-yuan/` (1051), `one-cent/` (908), `guangsuyun-plans/` (697)
- **`/brands/` 专题 (7)**：`reviews/` (1567), `plans/` (1369), `official-links/` (1294), `deals/` (1255), `history/` (1175), `alternatives/` (1137), `compare/` (429, 无 FAQ)
- **`/vpn/` (9)**：`recommend/` (1047), `vs-proxy/` (561), `free/` (544), `game-accelerator/` (521), `reviews/` (521), `android/` (476), `mobile/` (476), `iphone/` (474), `windows/` (454)
- **`/clients/` (16)**：`openwrt/` (1304), `windows/` (1238), `android/` (1215), `ios/` (1206), `linux/` (1203), `macos/` (1181)；软件档案（均缺 FAQ）：`shadowrocket/` (454), `mihomo/` (444), `sing-box/` (441), `clash-verge/` (410), `v2rayn/` (410), `hiddify/` (388), `v2rayng/` (385), `flclash/` (383), `karing/` (372), `clash-meta/` (369)
- **`/streaming-ai/` (10)**：`chatgpt/` (1310), `tiktok/` (1267), `netflix/` (1225), `claude/` (1187), `spotify/` (1053), `disney-plus/` (1044), `youtube/` (1037), `gemini/` (1022), `checker/` (947), `ai-environment/` (909)
- **`/network/` (15)**：`iepl/recommendations/` (1635), `iplc/` (1249), `multiplier/` (1215), `native-ip/` (1165), `bgp/` (1095), `usa/` (1057), `hong-kong/` (1038), `speedtest/` (1008, 无 FAQ), `japan/` (1006), `singapore/` (996), `transit/` (911), `guangsuyun-analysis/` (710), `direct/` (704), `iepl/` (680), `low-latency/` (526)
- **`/guides/` (11)**：`subscription/` (1095), `multi-device/` (1072), `clash-verge/` (1069), `beginner/` (992), `guangsuyun-setup/` (751), `plan-selection/` (582), `routing-rules/` (553), `installation/` (538), `subscription-management/` (529), `dns/` (518), `tun-mode/` (501)
- **`/diagnostics/` (10)**：`all-timeout/` (642), `node-timeout/` (623), `slow-speed/` (583), `subscription-failed/` (569), `connection-failed/` (556), `ai-blocked/` (543), `streaming-region/` (530), `dns-error/` (511), `tun-error/` (504), `client-launch/` (501)
- **`/intelligence/` (13)**：`changelog/` (2094, 无 FAQ), `alternatives/` (1502), `history/` (1497), `price-changes/` (1192), `refund-policy/` (1066), `outages/` (1047), `domain-changes/` (946), `exit-scam/` (758), `guangsuyun-risk/` (693), `security/` (611), `risk-profiles/` (577), `shutdowns/` (557), `avoid-pitfalls/` (556)
