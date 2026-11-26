# 一级专题（Pillar Pages）内部链接架构图谱

> 生成时间：2026-11-26  
> 校验原则：所有内部链接必须指向 `dist/` 中真实存在的有效静态路由，并遵循“按上下文意图互链”，禁止在页面底部批量重复堆砌全站 10 个一级主导航。

## 一、十个一级专题互链流向拓扑

```
[教程与知识流向]                        [评测与数据库流向]                  [商业与风险决策流向]

/guides/ (08 使用教程)                  /brands/ (03 品牌库)                /recommend/ (01 机场推荐)
  ├──► /clients/ (选工具与架构)           ├──► /brands/<slug>/ (31档案)        ├──► /pricing/ (查单GB成本)
  ├──► /guides/* (11篇单步实操)           ├──► /brands/compare/ (双对比)       ├──► /brands/ (实体背调)
  └──► /diagnostics/ (报错转排障)         └──► /intelligence/risk-profiles/    └──► /streaming-ai/checker/

/vpn/ (04 VPN与加速器)                  /network/ (07 线路与节点)          /intelligence/ (10 风险与替代)
  ├──► /clients/ (开源端替代免费VPN)      ├──► /network/speedtest/ (原图)      ├──► /intelligence/changelog/ (18项冲突)
  └──► /guides/tun-mode/                  └──► /network/iepl/recommendations/  ├──► /intelligence/alternatives/ (迁移)
                                                                               └──► /pricing/no-expiry/ (备用冗余)
/diagnostics/ (09 故障排查)             /streaming-ai/ (06 AI与流媒体)
  ├──► /diagnostics/* (10篇单症状)        ├──► /streaming-ai/* (10专项页)
  └──► /intelligence/outages/             └──► /guides/routing-rules/
```

## 二、各一级专题上下文关联内链清单

| 专题页 | 向下分发的二级专题入口 | 横向关联的跨专题页（Contextual CTA & 侧栏） |
| :--- | :--- | :--- |
| `01 /recommend/` | `/recommend/rankings/`, `reliable/`, `stable/`, `best-rated/`, `beginner/`, `established/`, `multi-device/` | `/pricing/cheap/`, `/pricing/`, `/brands/`, `/brands/compare/`, `/streaming-ai/checker/`, `/intelligence/avoid-pitfalls/` |
| `02 /pricing/` | `/pricing/cheap/`, `one-yuan/`, `one-cent/`, `monthly/`, `annual/`, `no-expiry/`, `value/`, `high-traffic/`, `coupons/`, `guangsuyun-plans/` | `/brands/<slug>/`, `/intelligence/price-changes/` |
| `03 /brands/` | `/brands/reviews/`, `official-links/`, `plans/`, `history/`, `compare/`, `deals/`, `alternatives/`, 31 个 `/brands/<slug>/` | `/intelligence/risk-profiles/` |
| `04 /vpn/` | `/vpn/recommend/`, `free/`, `mobile/`, `android/`, `iphone/`, `windows/`, `reviews/`, `game-accelerator/`, `vs-proxy/` | `/clients/`, `/guides/tun-mode/`, `/brands/guangsuyun/` 等 4 个样本档案 |
| `05 /clients/` | `/clients/windows/`, `android/`, `ios/`, `macos/`, `linux/`, `openwrt/` + 10 个 `/clients/<app>/` | `/guides/subscription/`, `/diagnostics/`, 全站 31 个品牌页分组链接 |
| `06 /streaming-ai/` | `/streaming-ai/chatgpt/`, `claude/`, `gemini/`, `ai-environment/`, `netflix/`, `disney-plus/`, `youtube/`, `tiktok/`, `spotify/`, `checker/` | `/guides/routing-rules/`, `/brands/guangsuyun/`, `/brands/wuyou/`, `/brands/lingdong/` 等 31 个矩阵品牌链接 |
| `07 /network/` | `/network/iepl/`, `iepl/recommendations/`, `iplc/`, `bgp/`, `transit/`, `direct/`, `hong-kong/`, `japan/`, `singapore/`, `usa/`, `low-latency/`, `native-ip/`, `multiplier/`, `speedtest/`, `guangsuyun-analysis/` | `/brands/guangsuyun/`, `muguang/`, `weitu/`, `yifan/` |
| `08 /guides/` | `/guides/subscription/`, `clash-verge/`, `installation/`, `routing-rules/`, `tun-mode/`, `dns/`, `multi-device/`, `subscription-management/`, `plan-selection/`, `beginner/`, `guangsuyun-setup/` | `/diagnostics/`, `/brands/guangsuyun/`, `tiziyun/`, `feimao/`, `weitu/` |
| `09 /diagnostics/` | `/diagnostics/node-timeout/`, `all-timeout/`, `subscription-failed/`, `connection-failed/`, `dns-error/`, `client-launch/`, `tun-error/`, `slow-speed/`, `ai-blocked/`, `streaming-region/` | `/intelligence/outages/`, `/intelligence/alternatives/` |
| `10 /intelligence/` | `/intelligence/exit-scam/`, `shutdowns/`, `outages/`, `price-changes/`, `domain-changes/`, `avoid-pitfalls/`, `alternatives/`, `refund-policy/`, `security/`, `history/`, `risk-profiles/`, `changelog/`, `guangsuyun-risk/` | `/pricing/no-expiry/`, 全站 31 个品牌档案侧栏直达链接 |

## 三、链接规范与 SEO 校验结论

- 所有品牌外链均走全站推广链接审计策略（`nofollow sponsored noopener`），专题正文与目录仅使用站内绝对路径并保留统一尾斜杠 `/`（配合 `astro.config.mjs` `trailingSlash: 'always'`）。
- 全站所有新增链接均纳入 `npm run audit:seo` 静态扫描验证，确保零死链与零规范化跳转缺失。
