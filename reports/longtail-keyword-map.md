# 三级长尾关键词总映射与工作流报告（Long-Tail Keyword Map）

> 数据对应文件：`src/data/keywords/longtail-master.csv`、`article-keyword-map.json`、`cluster-map.json`、`content-priority.csv`

## 一、长尾关键词去重与意图分发规则

1. **一级 / 二级 / 三级防互食边界**：
   - 品牌 + 评测/套餐/优惠码/官网入口词 → 统一归属 `/brands/<slug>/` 与 `/brands/compare/<pair>/`；
   - 行业方法论/多品牌比较概览 → 归属二级专题（`/recommend/*`, `/pricing/*`, `/clients/*`, `/diagnostics/*`）；
   - 具体操作步骤、报错代码、计算公式、单场景选购判断 → 落入新增 `src/content/articles/*.md` 三级独立文章（`/articles/<slug>/`）。
2. **本轮正式建库并发布的三级主关键词清单（16 篇全覆盖十大主题）**：
   - `01-recommend`：`电信联通移动机场怎么选`（`/articles/isp-selection/`）、`多设备机场同时在线限制`（`/articles/multi-device-quota/`）
   - `02-pricing`：`20元以内月付机场怎么选`（`/articles/20-yuan-monthly-guide/`）、`100GB流量够用多久`（`/articles/traffic-multiplier-math/`）
   - `03-brands`：`如何判断机场官网是否真实`（`/articles/verify-official-panel/`）
   - `04-vpn`：`VPN和代理软件能同时开启吗`（`/articles/vpn-vs-proxy-architecture/`）
   - `05-clients`：`v2rayN怎么导入机场订阅`（`/articles/v2rayn-import-and-core/`）、`安卓代理客户端锁屏断线怎么办`（`/articles/android-background-keepalive/`）
   - `06-streaming-ai`：`ChatGPT提示地区不支持与桌面端不通`（`/articles/chatgpt-desktop-tun-guide/`）、`Claude账号防封号对节点有什么要求`（`/articles/claude-safety-node-strategy/`）
   - `07-network`：`测速900Mbps为什么看YouTube 4K卡顿`（`/articles/single-thread-vs-multi-speedtest/`）
   - `08-guides`：`主力月付搭配不限时备用怎么配置`（`/articles/backup-no-expiry-setup/`）、`Clash规则模式Rule和全局Global怎么选`（`/articles/clash-rule-vs-global/`）
   - `09-diagnostics`：`Clash Verge节点全部超时怎么办`（`/articles/clash-verge-timeout-triage/`）、`Clash服务模式安装失败和TUN断网修复`（`/articles/tun-service-mode-fix/`）
   - `10-intelligence`：`专属客户端机场怎么换回Clash和软路由`（`/articles/migrate-from-exclusive-client/`）

## 二、待核验/下一阶段候补词库声明

未在第三方检索日志获取真实搜索量数值的候选关键词，严格遵循“不编造搜索量和难度指数”规范留存于 `secondary-article-backlog.md` 候补池，不创建空 HTML 页面。
