# 预防性 SEO 与 GEO 全站深度审计报告（Preventive_SEO_Audit_Report）

> **审计对象**：`https://jichangqingbao.biz`（渲染后静态产物 `dist/` 全量 **195** 个 HTML 页面及配置文件）  
> **审计日期**：2026-11-26  
> **审计原则**：只审计、不修改代码；客观中立、证据驱动；未检出问题的项直接标注 `PASS`。

---

## 1. 核心健康评分表（0–100 分）

| 审计维度 | 权重占比 | 得分 | 加权分 | 核心诊断说明 |
| :--- | :---: | :---: | :---: | :--- |
| **索引与抓取机制** | 25% | **90** | 22.50 | Canonical、尾部斜杠 301、静态 DOM 渲染与 0 死链均 `PASS`；扣分项：`sitemap-0.xml` 误收入带 `noindex` 的 `/search/` 页面 |
| **站群风控与合规** | 25% | **92** | 23.00 | 无第三方统计追踪代码，82 条推广外链 100% 带 `rel="nofollow sponsored noopener"`；扣分项：可见正文中多次裸露内部 `.txt`/`.json` 工程文件名，且部分二级页底部 H2 骨架高度雷同 |
| **内容深度与 GEO** | 20% | **81** | 16.20 | 首屏直答、`details/summary` 原生 FAQ 与无模糊代词指代全部 `PASS`；扣分项：100 个核心页 `<main>` 低于 2,000 汉字（含 78 个二级页、10 个对比页），68 页缺少 `<table>` 对比数据 |
| **E-E-A-T 与信任** | 15% | **93** | 13.95 | 零虚假评分/零 `AggregateRating`，基准日期/测试环境与 18 项数据冲突透明披露均 `PASS`；扣分项：8 家品牌仍为“待核实/旧档”且来源字段直接打印工程文件名 |
| **Schema 与 SERP** | 15% | **90** | 13.50 | 195 页 JSON-LD 语法零报错、FAQ 100% 所见即所得无 Hidden Schema、全站标题/描述零重复均 `PASS`；扣分项：14 组 Title 超长（最高 86 字符）且 8 页 Description 偏短（33–39 字符） |
| **综合总分** | **100%** | — | **89.15** | **整体处于“高合规、强静态健康度、需补深内容与细节卫生”的准上线优质状态（建议先清理 P1 项）** |

---

## 2. 分维度逐项审计明细（含 PASS 与证据定位）

### 一、爬虫抓取与索引预算审计（Crawl & Index）

1. **Robots 与 XML Sitemap**：**P1 异常**
   - `public/robots.txt` 内容为 `User-agent: * / Allow: / / Disallow: /search/? / Sitemap: https://jichangqingbao.biz/sitemap-index.xml`，未错误拦截 `/_astro/`、`/_pagefind/` 等静态资源，标记 `PASS`。
   - **具体问题**：全站 `dist/sitemap-0.xml` 共输出 **194** 条 `<loc>`，虽无死链（`sitemapDead: []`），但其中包含 `https://jichangqingbao.biz/search/`；而 `dist/search/index.html` 的 `<head>` 明确带有 `<meta name="robots" content="noindex, follow" />`。成因在于 `astro.config.mjs` 的过滤条件 `!page.includes('/search/?')` 仅排除了带问号参数的检索路径，未排除 `/search/` 本身。
2. **规范化（Canonical）矩阵**：**PASS**
   - 全站 **195/195** 页均输出绝对 HTTPS 规范标签（如 `https://jichangqingbao.biz/brands/guangsuyun/`），`canonicalIssuesCount: 0`；无指向首页、HTTP 或测试域名的劫持情况。
   - `public/.htaccess` 通过 `mod_rewrite` 强制 HTTP→HTTPS、去掉 `www.` 及为无扩展名路径统一追加尾部 `/`，内部链接尾部斜杠异常数 `badInternalSlash: 0`。
3. **JS 渲染与 DOM 结构**：**PASS**
   - 全部核心内容（首页 4,113 汉字、一级专题 3,225–7,072 汉字、品牌档案 1,992–7,141 汉字、三级文章 1,472–2,674 汉字）均在构建期渲染为静态 HTML `<main>` 节点，不依赖 CSR。
   - 经逐标签扫描：空 `<a>`（无 `href`）数量 `0`、`href="#"` 或 `javascript:` 伪协议链接数量 `0`。
4. **状态码异常（Soft 404）与死链**：**PASS**
   - 195 个生成页面中除 `/404.html`（已配置 `ErrorDocument 404 /404.html` 与 `noindex, follow`）和 `/search/` 外均含完整实体正文；全站内链死链检测结果为 **0**。

### 二、站群风控与架构隔离审计（Risk Control）

1. **代码 / 模板指纹**：**P2 轻微模板指纹提示**
   - 一级专题、品牌深度档案（`src/content/reviews/*.md`）与 24 篇长尾文章的正文 H2 标题均具备独立语义差异，未出现全站批量共用单一 H2 占位骨架的典型内容农场特征（最高重合 H2 组计数为 `1`）。
   - 但全站 **107 个二级专题** 在页面下半部共享完全一致的模板骨架 H2 序列（`关联品牌档案与参考入口 | 三级内容集群与延伸选题映射 | 常见问题与核查说明（FAQ） | 本页目录导航 | 上下游专题与内部链接`），叠加 `78` 个二级专题正文可见汉字低于 2,000 字，在大规模同类页扩展时存在“底层结构模板指纹偏一致”的风险。
2. **统计与追踪代码隔离**：**PASS**
   - 扫描全站 195 个 HTML 文件，`googletagmanager`、`gtag(`、`hm.baidu.com`、`googlesyndication`、`clarity.ms` 等第三方追踪/广告代码命中数为 **0**，不存在站群同 ID 串联特征。
3. **外链连坐防范**：**PASS**
   - 全站扫描到 **92 条外部链接**：其中 **82 条** 商业合作/联盟跳转链接 100% 严格包裹 `target="_blank" rel="nofollow sponsored noopener"`，漏加数 **0**（非 `CRITICAL`）；其余 **10 条** 第三方官方技术文档外链（`github.com`、`apps.apple.com`、`sing-box.sagernet.org`）100% 携带 `rel="nofollow noopener"`。
4. **基础设施与内部路径暴露**：**P1 内部文件名裸露**
   - 未检出服务器内网 IP 泄漏（`/articles/tun-service-mode-fix/` 与 `/vpn/` 中的 `192.168.0.0` 为网络协议科普私有网段示例）或物理磁盘路径泄漏（`C:\Users` 命中数为 `0`）。
   - **具体问题**：HTML 可见 `<main>` 正文与 `GeoAnswerBox` 来源栏大量直接打印内部项目文件后缀与工程目录字符串，包括：
     - `32家机场品牌清单.txt`（全站出现 **120 次**，如 `/brands/dalaoyun/`、`/brands/edgenova/` 等）
     - `speedtest-manifest.json`（**42 次**，如 `/brands/ermao/`、`/brands/feimao/`）
     - `brands.json`（**37 次**）、`第三方代理客户端.txt`（**26 次**）、`光速云品牌信息.txt`（**22 次**）、`data-conflicts.json`（**20 次**）、`clients.json`（**18 次**）、`plans.json`（**14 次**）、`affiliate-links.json`（**13 次**）、`test-results.json`（**7 次**）
     - 以及直接在索引页展示相对源码路径：`src/content/articles/*.md`（`/articles/`）与 `src/content/reviews/`（`/brands/reviews/`）。

### 三、内容质量与语义权威审计（E-E-A-T & GEO）

1. **内容厚度与薄内容（以 2,000 字行业深文标尺核查）**：**P1/P2 分层薄内容**
   - **达标区**：首页（4,113 字）、10/10 一级专题（3,225–7,072 字）、28/31 品牌页（2,066–7,141 字）、15/24 三级文章（2,008–2,674 字）。
   - **低于 2,000 汉字页面共 100 个**：
     - **78 个二级专题页**（最低集中于客户端与网络细分页：`1,026–1,241` 字，典型如 `/clients/flclash/` `1,026` 字、`/network/low-latency/` `1,032` 字、`/clients/sing-box/` `1,058` 字、`/clients/hiddify/` `1,077` 字、`/clients/clash-meta/` `1,081` 字）；
     - **10 个双品牌对比页**（`1,093–1,413` 字，最低 `/brands/compare/jilian-vs-guangnian/` `1,093` 字）；
     - **9 篇实操/排障向三级文章**（`1,472–1,988` 字，最低 `/articles/android-background-keepalive/` `1,472` 字）；
     - **3 家待核实品牌档案**（`/brands/liulianyun/` `1,997` 字、`/brands/shenxing/` `1,997` 字、`/brands/shandianshu/` `1,992` 字，处于 2,000 字临界线）。
2. **GEO/AEO 结构化布局**：**PASS（Answer-First / FAQ / 实体明确）；P2（部分页面缺 `<table>`）**
   - `noDetailsFaqPagesCount: 0`：全站一级、二级、品牌、文章、对比页 100% 使用 `<details><summary>` 语义结构呈现 FAQ。
   - `pronounHighPages: []`：未发现单页内用“它/这家”等代词替代核心实体的高密度糊涂指代。
   - **具体缺口**：在品牌/文章/对比/二级共 172 个主内容页中，有 **68 个页面不包含 `<table>` 对比表格**（例如 `/articles/android-background-keepalive/`、`/articles/clash-verge-timeout-triage/`、`/articles/claude-safety-node-strategy/`、`/clients/clash-meta/`、`/brands/alternatives/` 等）。
3. **数据溯源与可信度（E-E-A-T）**：**PASS（无虚假评分，规范完整）；P2（8 家品牌仍缺最新实测图）**
   - 未发现任何编造的 `4.9/5` 星级评价或虚假 `AggregateRating`；所有测速样本（如 `2026-08-19` 长沙电信/广西移动/河北联通同日实测、`2026-07-18` 实测表）均标明基准日期与前端线程条件，并独立披露 18 项字段冲突（`CF-001`–`CF-018`）与完整治理页面（`/about/`、`/editorial-policy/`、`/methodology/`、`/disclosure/`、`/privacy/`、`/disclaimer/`、`/corrections/`）。
   - `langwang`、`edgenova`、`kexin`、`dalaoyun`、`shenxing`、`liulianyun`、`shandianshu`、`huanqiuti` 等仍缺近期独立测速图片，页面已如实标注“待核实”。

### 四、结构化数据与社交展现审计（Schema & SERP）

1. **JSON-LD 真伪校验**：**PASS**
   - `jsonLdErrors: []`（全站 195 页 JSON-LD 语法 100% 合法），`noFaqSchemaPages: []`（全部内容型页面均含 `FAQPage`）。
   - `hiddenSchemaIssuesCount: 0`：逐页校验 `FAQPage` 里的 `Question.name` 与 `acceptedAnswer.text`，100% 可在同页 `<main>` 用户的可见文本中检出，无隐藏标记欺骗或 `AggregateRating` 违规注入。
2. **Open Graph & Meta 标签**：**PASS（零重复与 OG 完整）；P2（Title 过长与 Desc 偏短）**
   - `duplicateTitles: []`、`duplicateDescs: []`：195 页标题与描述 **0 重复**；`missingAltImgsCount: 0`；195 页全部输出 `og:image`（`1200×630`）、`og:url` 与 `twitter:card`。
   - **SERP 截断风险（Title > 50 字符，共 14 组，最高 86 字符）**：
     - `/clients/mihomo/`（**86 字符**）
     - `/clients/sing-box/`（**72 字符**）
     - `/clients/windows/`（**71 字符**）
     - `/clients/ios/`（**70 字符**）
     - `/clients/openwrt/`（**67 字符**）
     - `/streaming-ai/`（**64 字符**）
     - `/clients/android/`（**59 字符**）
   - **摘要展示偏短（Description < 40 字符，共 8 页）**：`/brands/alternatives/`（33 字符）、`/privacy/`（33 字符）、`/brands/deals/`（34 字符）、`/guides/plan-selection/`（35 字符）、`/pricing/one-cent/`（36 字符）、`/pricing/annual/`（39 字符）、`/network/transit/`（38 字符）、`/brands/reviews/`（38 字符）。

---

## 3. 漏洞与降权风险清单

### 🚨 P0（致命红线 — 立即修复）
- **无 P0 违规项（PASS）**：全站未检出漏加 `nofollow` 的联盟引流链接（82/82 合规）、无共用第三方统计/广告代码、无 Canonical 劫持、无隐藏 Schema 欺骗，也无 404/大规模死链进入 Sitemap。

### ⚠️ P1（高危隐患 — 本周修复）

1. **`sitemap-0.xml` 收录了明确声明 `noindex` 的 `/search/` 页面**
   - **具体位置**：`dist/sitemap-0.xml` 内含 `<loc>https://jichangqingbao.biz/search/</loc>`，同时 `dist/search/index.html` 头部输出 `<meta name="robots" content="noindex, follow" />`（配置源在 `astro.config.mjs` 的 `!page.includes('/search/?')`）。
   - **影响算法机制**：浪费爬虫抓取预算（Crawl Budget），并在 Google Search Console / Bing Webmaster 中直接触发“已提交的网址被标记为 `noindex`”报错。
   - **修复建议**：将 Sitemap 过滤条件调整为同时排除 `/search/` 与 `/search/?`。

2. **公开页面文本大量裸露内部工程文件名与源码路径字面量**
   - **具体位置**：120 处 `/brands/*` 页面出现 `32家机场品牌清单.txt`、42 处出现 `speedtest-manifest.json`、37 处出现 `brands.json`、26 处出现 `第三方代理客户端.txt`、`/articles/` 页 `GeoAnswerBox` 直接显示 `src/content/articles/*.md`、`/brands/reviews/` 显示 `src/content/reviews/`。
   - **影响算法机制**：暴露明显的工程化/脚本化批量生成痕迹（增加自动化生成特征识别与 E-E-A-T 人工编辑感降分风险），对普通搜索访客毫无参考意义。
   - **修复建议**：将展示层 `source` 字段与页面正文中的工程文件名统一替换为可读的公开档案名称（如“机场情报品牌主档案（2026-10 核实版）”、“MiaoKo 三网测速档案库”）。

3. **24 个客户/网络/诊断类二级专题可见字数徘徊在 1,026–1,241 汉字，属于偏薄页面**
   - **具体位置**：`/clients/flclash/`（1,026 字）、`/network/low-latency/`（1,032 字）、`/clients/sing-box/`（1,058 字）、`/clients/hiddify/`（1,077 字）、`/clients/clash-meta/`（1,081 字）及 `/intelligence/shutdowns/`（1,095 字）等共计 78 个二级专题低于 2,000 汉字。
   - **影响算法机制**：在 Google Helpful Content / 核心质量评估中，大量同级二级栏目若长期停留在 1,000 字左右且底部模块固定，容易拉低整站页面平均内容厚度，削弱长尾关键词竞争力。
   - **修复建议**：优先针对客户端、网络线与停运记录中 < 1,300 字的二级页补充参数对照表、兼容协议清单或真实故障场景案例，把主力二级页推升至 1,800–2,500+ 汉字。

### 🟡 P2（优化机会 — 规划修复）

1. **14+ 个核心页面 `<title>` 超过 50 字符（最高 86 字符）存在 SERP 截断，8 页 `<meta name="description">` 过短**
   - **具体位置**：`/clients/mihomo/`（86 字符）、`/clients/sing-box/`（72 字符）、`/clients/windows/`（71 字符）、`/clients/ios/`（70 字符）；短描述包括 `/brands/alternatives/`（33 字符）、`/brands/deals/`（34 字符）等。
   - **影响算法机制**：搜索结果页标题被截断品牌后缀与核心卖点词，降低 SERP 点击率（CTR）；33 字符的描述无法充分利用摘要展示位。
   - **修复建议**：将超长 Title 精简至 30–48 字符以内（例如把括号内冗余别名移至 H1 与正文），把 8 个短 Description 扩写到 80–140 字符并包含核心决策实体词。

2. **68 个正文页缺少结构化 `<table>` 对比数据（含 11 篇三级长尾文章与部分客户端页）**
   - **具体位置**：`/articles/android-background-keepalive/`、`/articles/clash-verge-timeout-triage/`、`/articles/claude-safety-node-strategy/`、`/clients/clash-meta/`、`/brands/alternatives/` 等。
   - **影响算法机制**：降低生成式引擎（Perplexity / Google AI Overviews / ChatGPT Search）直接抽取多维结构化对比摘要的命中率。
   - **修复建议**：在排障文章中添加“现象–根因–对应处理表”，在客户端页添加“协议支持与内存开销矩阵表”。

3. **3 家新补齐品牌页（`liulianyun` 1,997 / `shenxing` 1,997 / `shandianshu` 1,992）与 10 个对比页（1,093–1,413）可再补深度，同时待补充实测截图**
   - **具体位置**：`/brands/liulianyun/`、`/brands/shenxing/`、`/brands/shandianshu/` 及 `/brands/compare/*`（如 `jilian-vs-guangnian` 1,093 字）。
   - **修复建议**：继续保持“不编造未实测数据”原则，但可在对比页补充基于已核实价格、协议与客户端局限的场景计算推演表（如按 100GB/200GB 月消费额核算年度真实支出对比），并在拿到三网实测图后同步更新 `待核实` 品牌。

4. **二级专题页底部共用 H2 结构指纹一致性过高**
   - **具体位置**：107 个由同一模板渲染的二级页共享末尾 5 个固定 H2 标题顺序。
   - **修复建议**：允许各频道按内容意图动态命名“关联品牌推荐标题”与“集群导读标题”（如诊断频道称为“兼容客户端与防失联参考”，定价频道称为“同价位月付样本对照”），稀释固定模板指纹。

---

## 4. 终极改造行动 SOP（按 ROI 排序 Top 5）

| 优先级 | 改造动作 | 涉及范围 | 预期 SEO / GEO 收益 | 投入产出比 |
| :---: | :--- | :--- | :--- | :---: |
| **Top 1** | **将 `/search/` 从 `sitemap-0.xml` 彻底剔除** | 站点地图配置 1 处（1 行规则） | 立即消除 Google Search Console / Bing 的 Sitemap `noindex` 冲突告警，干净分配抓取预算 | **极高** |
| **Top 2** | **清洗全站可见正文与 `GeoAnswerBox` 裸露的 `.txt`/`.json`/`src/` 文件名** | 品牌、文章与索引页出处文案映射 | 消除自动化工程文件指纹露出，大幅提升 E-E-A-T 编辑公信力与人类/AI 阅读观感 | **极高** |
| **Top 3** | **压缩 14 组超长 `<title>`（≤ 48 字符）并扩充 8 组短 Description（80–140 字符）** | `/clients/*`、`/streaming-ai/`、`/articles/*` Meta 标签 | 防止品牌词与核心客户端名称在 SERP 被截断，直接提升桌面与移动搜索点击率（CTR） | **高** |
| **Top 4** | **为最薄的 24 个二级专题（1,026–1,241 字）与 10 个对比页补入结构化 `<table>` 与场景核算内容** | `/clients/*`、`/network/*`、`/brands/compare/*` | 消除低文字深度页面，显著增强模板结构差异度并提高 AI 引擎表格摘录引用概率 | **高** |
| **Top 5** | **动态差异化二级专题模板固定 H2 标题文案，并随新实测持续更新 8 家 `待核实` 品牌** | `TopicPageTemplate` 小节标题与品牌实测证据库 | 长期降低大规模矩阵页的模板指纹重合度，持续加固真实测评护城河 | **中高** |
