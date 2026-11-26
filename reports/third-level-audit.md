# 全站内容资产与三级升级前审计报告（Third-Level Content Audit）

> 审计基准：升级前 `dist/` 产物与 `src/content/` 内容集合扫描  
> 适用规范：《三级专题升级.txt》第三章

## 一、升级前全站资产清点结果

1. **一级专题与二级专题**：已完成全部 `10` 个一级导航主页（Pillar 01–10）及 `108` 个二级专题中心页（Topic Hubs）建设，保持原有 URL 体系稳定，本次不重复改写一级/二级核心正文。
2. **三级长尾深度文章（升级前：`0` 篇）**：升级前 `src/content/` 仅存在品牌单评合集（`reviews`），不存在独立长尾问题解决型 Markdown 文章集合；各细分长尾选题暂挂靠于二级专题 `secondary-article-backlog.md` 待办清单。
3. **品牌深度评测（`reviews` 合集，升级前：`19 / 31`）**：
   - 已有长评测（19 家）：`guangsuyun`, `muguang`, `feimao`, `weifeng`, `xingdaomeng`, `ermao`, `wuyou`, `weitu`, `firefly`, `yuzhou`, `u1s1`, `lingmao`, `jilian`, `guangnian`, `yifan`, `sogo`, `kexin`, `sujie`, `quanqiu`。
   - **缺失 Markdown 长评测（12 家）**：`yinxingren`, `shanyue`, `tiziyun`, `lingdong`, `langwang`, `edgenova`, `dalaoyun`, `shandianshu`, `yunjiexian`, `liulianyun`, `shenxing`, `huanqiuti`。
4. **品牌横向对比页面（`10` 组）：** 升级前仅含简短参数表格（每页 397–507 汉字，缺失结论长文与 `FAQPage` JSON-LD）。
5. **需要严控的合规规则**：
   - 保留 `brands/<slug>/` 现存规范 URL（避免拆分 `/reviews/<slug>/` 造成自我权重互抢重复页）；
   - 严格区分 8 家仅专属客户端品牌（不可误标第三方订阅兼容）与 18 项字段冲突（`CF-001`–`CF-018`）；
   - 教程与故障排查页面严禁强插无关购买广告。
