# 商业链接、推广披露与转化路径审计报告（Conversion Audit）

> 检查范围：`src/data/affiliate-links.json`、`src/components/brands/AffiliateCta.astro`、`src/pages/articles/[slug].astro`、全部 31 个品牌页及 10 个对比页

## 一、全站搜索至商业转化路径设计

```
Google / Bing / AI 引用
   ├──► 问题/教程类长尾文章 (/articles/clash-verge-timeout-triage/ 等)
   │       └─► 严禁强插广告；仅引导完成排障，或推荐相关工具与风险核实
   ├──► 价格/选型对比文章 (/articles/20-yuan-monthly-guide/ 等)
   │       └─► 导流至对应二级专题 (/pricing/monthly/) 及相关品牌独立评测 (/brands/<slug>/)
   ├──► 31 品牌独立深度评测 (/brands/<slug>/) & 10 组横向对比 (/brands/compare/<pair>/)
   │       └─► 核对套餐单价 + 冲突披露 + 客户端兼容 → AffiliateCta 清晰跳转
```

## 二、按页面类型的 CTA 分级纪律验证（第 10.2 & 15.2 节）

1. **故障排查文章（`conversionIntent: 'diagnostics'`）**：侧栏与文末绝不放任何购买或返佣引导按钮，仅导流至 `/diagnostics/` 诊断中心与 `/intelligence/outages/` 异常日志，避免把本机软件报错消费化。
2. **使用教程文章（`conversionIntent: 'guide'`）**：仅呈现操作步骤与 `/clients/` 软件矩阵，关联品牌卡片仅在明确需要展示双支持/专属端兼容样本时合理出场。
3. **价格 / 选型 / 品牌评测 / 对比页**：统一通过 `AffiliateCta` 组件调度 `affiliate-links.json` 唯一链接来源：
   - 外链属性 **100% 带有 `target="_blank" rel="nofollow sponsored noopener"`**（已由 `audit:seo` 扫描全站 80+ 外链验证）。
   - 每张推广卡片底栏均含完整商业关系披露与核实基准日期。
   - **异常链接隔离提示**：`yunjiexian` 与 `huanqiuti` 明确显示黄色格式提示（缺失 `#/`）；`lingdong`、`langwang`、`edgenova` 明确提示 `2026-08-09` 历史时效未复核警示。
   - 对缺乏有效外链入口的品牌，不将读者错误导流至其他品牌注册页，而是引导前往 `/intelligence/alternatives/` 查看平等替代清单。
