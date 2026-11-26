# 机场品牌横向对比体系规划与落实报告（Brand Comparison Plan）

> 对应实现：[brand-comparisons.ts](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/data/brand-comparisons.ts) & [brands/compare/[slug].astro](file:///c:/Users/Pro%20User/Desktop/jichangqingbao.biz/src/pages/brands/compare/%5Bslug%5D.astro)

## 一、禁止机械穷举 31×30 两两生成：精选 10 组真实决策对比组合

严格遵照《二级专题升级.txt》第 9.3 节“不为每两个品牌机械生成一篇内容重复的比较文章，优先选择有真实比较需求、足够数据和明确用户价值的组合”：

| 对比组 URL | 对比双方 | 核心决策冲突与对比价值 | 升级完成度 |
| :--- | :--- | :--- | :---: |
| `/brands/compare/guangsuyun-vs-xingdaomeng/` | 光速云 vs 星岛梦 | 2020 双老牌 ¥25 档对比（双支持+168GB+6图 vs 不限设备+韩国/多档不限时） | 已升级 + FAQ |
| `/brands/compare/guangsuyun-vs-weitu/` | 光速云 vs 唯兔云 | 老牌多端 ¥25/168GB vs 中生代 ¥19.9/150GB（限时 ¥14.9）+ 不限设备 | 已升级 + FAQ |
| `/brands/compare/guangsuyun-vs-muguang/` | 光速云 vs 暮光加速 | 多批次三网实测旗舰 vs BGP 多平台大流量不限时方案（含 CF-005 提示） | 已升级 + FAQ |
| `/brands/compare/guangsuyun-vs-feimao/` | 光速云 vs 飞猫云 | 开放第三方订阅+自研双轨 vs 纯闭源专属端（84元学生版+08-11异常列说明） | 已升级 + FAQ |
| `/brands/compare/jilian-vs-guangnian/` | 极连云 vs 光年梯 | ¥18/月同价档对比（2024年/100GB vs 2025年/110GB+VLESS标注） | 已升级 + FAQ |
| `/brands/compare/sujie-vs-kexin/` | 速界 vs 可信云 | ¥25 开放订阅档对决（主打 AI 场景提醒 vs 主动标注缺乏 AI 实测+CF-012） | 已升级 + FAQ |
| `/brands/compare/weifeng-vs-firefly/` | 微风网络 vs Firefly | 同源体系分化（微风保留开放订阅+07-19图 vs Firefly 2026-10转专属端） | 已升级 + FAQ |
| `/brands/compare/ermao-vs-u1s1/` | 二猫云 vs U1S1 | ¥20/月开放订阅对决（130GB+99元不限时+CF-004矛盾 vs 120GB清爽新站） | 已升级 + FAQ |
| `/brands/compare/yinxingren-vs-tiziyun/` | 隐形人 vs 梯子云 | 均宣称 60+ 节点：纯专属端 ¥24 起+CF-015 vs 88.8元双支持（均缺截图） | 已升级 + FAQ |
| `/brands/compare/shandianshu-vs-dalaoyun/` | 闪电鼠 vs 大佬云 | ¥67.2/年（5.6元/月）同参数极微轻量盘对比及 8.25元老牌差价权衡 | 已升级 + FAQ |

## 二、每组对比页统一交付标准（第 9.3 节 9 项指标）

1. **Answer-First 简明结论**；2. **同口径 10 行核心参数表**；3. **价格与单 GB 流量比对**；4. **线路及客户端自由度差异**；5. **分别适合人群卡**；6. **数据及测试局限披露**；7. **双方独立长评测深链**；8. **双方合规合作注册 `AffiliateCta`**；9. **3 条对比专属高频 `FAQ` 与 `FAQPage` Schema**。
