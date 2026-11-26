import type { SubtopicEntry } from './topics-commercial';

export const BRAND_SUBTOPICS: SubtopicEntry[] = [
  {
    slug: 'reviews',
    title: '31 家机场品牌深度评测索引 | 机场情报',
    description: '集中汇总全站 31 家去重独立机场品牌的深度评测档案入口、MiaoKo/御三家实测截图覆盖状况、字段冲突编号审计及资料可信度分级总览。',
    h1: '机场品牌深度评测总索引（31 家独立品牌档案）',
    eyebrow: 'Brands · Reviews Index',
    answerFirst: '本站已为收录的 31 个独立机场品牌分别建立独立档案与深度分析页面。其中核心合作品牌光速云（LightSpeed）提供旗舰深度评测与 6 份实测截图；其余具备 2026-08-11/07-18/19 截图的品牌均配备可观测性图表与异常点分析；资料缺省品牌则诚实标注“待补充”章节。',
    brandSlugs: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'ermao', 'weitu', 'yifan'],
    sections: [
      {
        heading: '一、如何阅读本站的品牌评测',
        lead: '先看状态标签（独立实测 vs 品牌方提供 vs 待核实），再看套餐表与冲突审计。',
        paragraphs: [
          '点击下方任意品牌卡片或前往 /brands/ 筛选器，即可按价格、协议、客户端模式进入对应品牌的完整 25 项结构化评测档案。',
        ],
      },
    ],
    faqs: [
      { q: '为什么不同品牌的评测篇幅和侧重点不一样？', a: '资料丰富的老牌（如光速云、星岛梦、唯兔云）具备详细套餐和测速截图；部分仅有基础摘要的平价品牌（如 5.6 元档）则不搞机械重复水字数，直接呈现客观差异与待核实缺口。' },
    ],
    relatedLinks: [
      { label: '光速云旗舰深度评测', href: '/brands/guangsuyun/' },
      { label: '进入 31 品牌多维筛选库', href: '/brands/' },
    ],
  },
  {
    slug: 'official-links',
    title: '机场品牌官网与合作注册入口核对清单 | 机场情报',
    description: '汇总 31 家品牌已收录的官方合作注册入口、链接格式异常提醒（如云界线、环球梯）与防钓鱼提示。',
    h1: '机场品牌官网与注册入口辨识中心',
    eyebrow: 'Brands · Official Links',
    answerFirst: '全站 31 家品牌的合作注册链接统一托管于结构化注册表并附加 rel="nofollow sponsored noopener" 属性。用户访问前应特别留意两点：1) 云界线与环球梯的链接格式缺少 #/ 哈希前缀，跳转需自行核实；2) 灵动云、浪网与边缘节点 EdgeNova 的入口来自 2026-08-09 历史记录，不保证当前仍然有效。',
    brandSlugs: ['guangsuyun', 'yunjiexian', 'huanqiuti', 'lingdong', 'langwang', 'edgenova'],
    sections: [
      {
        heading: '一、域名防假冒核查建议',
        lead: '由于多数品牌未公布固定的免翻墙永久主域名（除 Firefly 资料提及免翻墙访问外），务必通过已核验入口访问并保留备用公告地址。',
        paragraphs: [
          '所有注册链接均带有商业合作披露。若您发现某个入口跳转失效或已更换新域名，欢迎通过本站内容纠错机制上报。',
        ],
      },
    ],
    faqs: [
      { q: '为什么部分品牌页不写死“官网绝对域名”？', a: '机场面板域名经常因地区屏蔽轮换，未经实时核验写死静态官网极易形成死链或误导，因此本站将未单独验证的官网字段标为待核实并仅提供经过记录的合作入口。' },
    ],
    relatedLinks: [
      { label: '机场域名变更安全知识', href: '/intelligence/domain-changes/' },
      { label: '推广披露政策', href: '/disclosure/' },
    ],
  },
  {
    slug: 'plans',
    title: '品牌套餐档案总览：按品牌检索 154 条历史与在售报价 | 机场情报',
    description: '按品牌维度的套餐档案汇总入口，快速定位各品牌年付小包、常规月付、不限时流量包及私人定制价目。',
    h1: '机场品牌套餐档案索引',
    eyebrow: 'Brands · Plan Archives',
    answerFirst: '站内共整理 154 条跨品牌套餐记录，涵盖年付轻量包（79–137 元/年）、月付标准档（14.9–200 元/月）、一次性不限时包（99–1199 元）以及高净值独享定制档（550–680 元/月）。其中浪网入门套餐（截150G）与灵动云至尊定制存在原始截图遮挡记录。',
    brandSlugs: ['guangsuyun', 'muguang', 'weitu', 'xingdaomeng', 'yifan', 'lingdong', 'langwang'],
    sections: [
      {
        heading: '一、查看完整 154 条可对比套餐表',
        lead: '前往价格与套餐中心按单位流量成本排序检索。',
        paragraphs: [
          '在每个独立品牌档案页中，本站均自动计算了每档套餐的“年付折算月成本”与“单位流量单价（元/GB）”，帮助避免误判。',
        ],
      },
    ],
    faqs: [
      { q: '灵动云、浪网和 Firefly 为什么有两年付和三年付价格？', a: '这些多周期表源自 2026-08-09 历史品牌库记录，已注明非实时优惠价，建议谨慎评估超长周期预付风险。' },
    ],
    relatedLinks: [
      { label: '进入 154 条完整套餐数据库', href: '/pricing/' },
      { label: '历史价格变更审计', href: '/intelligence/price-changes/' },
    ],
  },
  {
    slug: 'history',
    title: '机场品牌运营历史与实体合并记录 | 机场情报',
    description: '追踪 31 家机场品牌的创立年份、实体合并（Firefly + 萤火虫）及客户端政策变迁历史。',
    h1: '品牌运营历史档案与实体变更记录',
    eyebrow: 'Brands · History',
    answerFirst: '品牌运营历史的核心价值在于识别真实存续时长与策略转折。本站将 Firefly 与 Firefly 萤火虫合并为统一品牌实体（保留两套历史优惠/多周期报价），并记录了无忧链接、灵猫网络与 Firefly 于 2026 年 10 月统一切换为专属客户端模式的历史节点。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'firefly', 'wuyou', 'lingmao'],
    sections: [
      {
        heading: '一、实体去重原则',
        lead: '不为了凑“32家”数字虚构第 32 个品牌或拆开同一品牌。',
        paragraphs: [
          '所有品牌均拥有唯一的 brandId 与规范 slug，即便同一品牌在不同历史文件中以中文别名或英文简称出现（如唯兔云与 V2 云、Firefly 与 Firefly 萤火虫），也会严格归并到同一个规范页面。',
        ],
      },
    ],
    faqs: [
      { q: '合并 Firefly 和 Firefly 萤火虫后，原资料里的时间差异怎么处理？', a: '两份资料均被保留在同一档案页中，其中 2026-08-09 的多周期价格表标注为历史记录，2026-10 的专属客户端说明标注为最新状态。' },
    ],
    relatedLinks: [
      { label: '全站运营历史分析', href: '/intelligence/history/' },
      { label: '冲突审计日志', href: '/intelligence/changelog/' },
    ],
  },
  {
    slug: 'deals',
    title: '品牌优惠与折扣规则（含优惠码冲突）| 机场情报',
    description: '系统整理 31 家机场品牌的公开新人优惠码、季付/年付自动阶梯折扣、不参与打折的特价限定档位（如轻量版）以及多来源优惠码冲突提醒。',
    h1: '机场品牌优惠活动与折扣限制档案',
    eyebrow: 'Brands · Deals',
    answerFirst: '不同品牌的折扣形式分为两类：一是输入优惠码立减（如光速云 AMM、Firefly 8 折码 firefly、闪跃 8 折码 shanyue、飞猫 8 折码 flycat888）；二是按购买时长自动阶梯打折（如光速云极速版/定制版半年 9 折至三年 7 折，5.6 元档 5 家季付及以上 7 折）。下单前请核实年付小包通常不参与叠加折扣。',
    brandSlugs: ['guangsuyun', 'firefly', 'shanyue', 'feimao', 'weifeng', 'dalaoyun'],
    sections: [
      {
        heading: '一、优惠码冲突提醒',
        lead: '以下品牌存在两套优惠码来源，请以结算页校验结果为准。',
        bullets: [
          '暮光加速：muguang5555 与正文“无公开优惠码”冲突。',
          '灵猫网络：lingmao（8折）与 lmao888 冲突。',
          '一翻云：1FLYYUN（9折）与 yfy6666 冲突。',
          'SOGO 云：SOGO10000（9折）与 sss777 冲突；全球云：qq88（8折）与 qqy7777 冲突；隐形人：moon80（8折）与 yxr888 冲突。',
        ],
      },
    ],
    faqs: [
      { q: '用本站提供的推广链接和优惠码，价格会比直接找官网更贵吗？', a: '不会。如本站披露规则所示，推广链接不影响用户实际支付价格，使用有效优惠码通常还能享受对应折扣。' },
    ],
    relatedLinks: [
      { label: '全部优惠码速查表', href: '/pricing/coupons/' },
      { label: '推广合作披露', href: '/disclosure/' },
    ],
  },
  {
    slug: 'alternatives',
    title: '品牌替代方案索引：同价位平替查找 | 机场情报',
    description: '围绕 31 家机场品牌提供基于实付价位段、IEPL/BGP 线路特征与第三方开放订阅兼容性的平替选择对照表，协助安全平稳更换服务商。',
    h1: '机场品牌替代方案索引',
    eyebrow: 'Brands · Alternatives',
    answerFirst: '当您目前关注的品牌处于“待核实”、“缺少实测截图”或“强制专属客户端无法导入软路由”时，可以通过本索引快速定位同价位或高透明度的可替代品牌。完整跨维度迁移路径请访问【机场替代方案矩阵（/intelligence/alternatives/）】。',
    brandSlugs: ['guangsuyun', 'tiziyun', 'weitu', 'xingdaomeng', 'yifan'],
    sections: [
      {
        heading: '一、高频替换需求速览',
        lead: '用开放第三方订阅且具备实测证据的品牌替代信息缺口品牌。',
        paragraphs: [
          '在 18–25 元月付带实测截图的品牌中，光速云、星岛梦、唯兔云、一翻云、极连云与光年梯均开放了第三方通用订阅；而在专属客户端品牌内部，无忧链接（有 2026-07-18 实测）与飞猫云（有 2026-08-11 实测）信息相对更完备。',
        ],
      },
    ],
    faqs: [
      { q: '如何查找某个具体品牌的替代品？', a: '直接打开该品牌的 `/brands/[slug]/` 档案页底部，即可看到本站为其匹配的“同价位/同定位替代方案”卡片。' },
    ],
    relatedLinks: [
      { label: '完整机场替代方案矩阵', href: '/intelligence/alternatives/' },
      { label: '品牌横向对比中心', href: '/brands/compare/' },
    ],
  },
];

export const INTELLIGENCE_TOPICS: SubtopicEntry[] = [
  {
    slug: 'exit-scam',
    title: '机场跑路预警与风险核查标准（不误判正常维护）| 机场情报',
    description: '建立机场跑路风险核查框架，明确区分“官网打不开一次/短期异常”与“有证据支持的停止运营”，提供购前与在用期风控建议。',
    h1: '机场跑路预警信号识别与无证据投诉区分指南',
    eyebrow: 'Intelligence · Exit Scam Verification',
    answerFirst: '机场跑路风险核查的核心原则是“不把单次官网无法访问、网络波动或匿名差评直接定性为跑路”。真正具备高风险预警价值的组合信号包括：多条线路同时长时间失联且官方渠道失声、全站突发性超大力度多年付清仓促销、以及第三方独立渠道交叉证实运营团队停止维护。截至目前，本站收录的 31 家品牌中暂无已核实停止运营记录。',
    sections: [
      {
        heading: '一、本站前台风险状态五级标准',
        lead: '用可验证的证据语言替代情绪化标签。',
        bullets: [
          '暂无已核实异常记录：具备近期有效资料且未发现重大风险事件。',
          '存在待核实信息：存在字段冲突、历史链接未复核或缺少近期测速证据。',
          '已确认服务异常 / 服务已恢复：经多方交叉核实存在阶段性中断及后续恢复。',
          '已确认停止运营：有官方公告、域名彻底注销且长期无响应等确凿证据支持。',
        ],
      },
      {
        heading: '二、普通用户的资金止损防线',
        lead: '把单次预付控制在可承受范围内，是最可靠的防跑路方法。',
        paragraphs: [
          '1. 首次使用新品牌或 2025–2026 年上线站点，坚持先按月付费，不直接冲两年/三年大额包。',
          '2. 不将全部日常访问依赖单一服务商，保留一个不同上游线路的 100GB 左右不限时包作为应急通道。',
        ],
      },
    ],
    faqs: [
      { q: '为什么机场情报不直接把长期没更新的品牌标为“已跑路”？', a: '缺乏近期更新只能证明“资料过期”或“当前状态待核实”，没有证据支持直接写跑路容易误伤正常低调运营的品牌，违背独立情报的事实底线。' },
    ],
    relatedLinks: [
      { label: '机场停运与失联记录', href: '/intelligence/shutdowns/' },
      { label: '机场替代方案矩阵', href: '/intelligence/alternatives/' },
    ],
  },
  {
    slug: 'shutdowns',
    title: '机场停运与失联记录核查规范 | 机场情报',
    description: '说明机场停运与失联事件的核实流程，并公示当前 31 家收录品牌的运营状态统计（暂无已核实停止运营）。',
    h1: '机场停运与失联记录核查中心',
    eyebrow: 'Intelligence · Shutdowns',
    answerFirst: '截至 2026-11-26 资料基准，机场情报数据库收录的 31 个独立品牌中，暂无任何品牌被核实为“已确认停止运营”；但部分历史收录品牌（如灵动云、浪网、边缘节点 EdgeNova 的 2026-08-09 记录，以及推广链接缺少哈希前缀的云界线、环球梯）已被标注为“存在待核实信息”，提醒用户在付款前先核查入口连通性。',
    sections: [
      {
        heading: '一、核实“失联/停运”前必须排除的三类假象',
        lead: '先查自身网络，再查域名轮换。',
        bullets: [
          '旧官网域名因区域屏蔽打不开，但新发布页或工单仍正常响应。',
          '订阅链接因本地宽带 DNS 污染拉取失败，手机 5G 网络仍可更新。',
          '服务商正进行底层协议或专属客户端迁移（如无忧、灵猫、Firefly 于 2026-10 切换到专属端）。',
        ],
      },
    ],
    faqs: [
      { q: '如果某家机场真的发生停运，网站会如何处理原页面？', a: '本站会保留该品牌的实体档案页并更新 timeline 事件，把状态明确变更为“已确认停止运营”，同时关闭推广按钮并引导至同价位替代方案。' },
    ],
    relatedLinks: [
      { label: '查看最新情报时间线', href: '/intelligence/' },
      { label: '品牌风险档案汇总', href: '/intelligence/risk-profiles/' },
    ],
  },
  {
    slug: 'outages',
    title: '机场服务异常与单节点故障监测记录 | 机场情报',
    description: '记录实测过程中观察到的阶段性异常、单个节点失效（0B/KB 速度）与地区送中情况，提供异常核对思路。',
    h1: '机场服务异常与实测故障点记录',
    eyebrow: 'Intelligence · Outages',
    answerFirst: '在网络服务运行中，全站停服与单节点异常需要分开记录。本站已在实测档案中如实保留了微风网络 2026-07-19（台湾02 0.00B、日本05 8.00KB）、无忧链接 2026-07-18（新加坡02 17.59KB、香港01 YouTube 送中）、灵动云 2026-07-20/21（美国01 整节点失败）及光速云 2026-08-19 单线程（美国02 1.60KB）等真实局部异常记录。',
    brandSlugs: ['weifeng', 'wuyou', 'lingdong', 'guangsuyun'],
    sections: [
      {
        heading: '一、如何区分正常维护波动与重大服务异常',
        lead: '单节点偶发 0B 属于常态运维范围，全节点多日无响应才是重大异常。',
        paragraphs: [
          '任何多节点机场都可能遭遇单台落地机被上游拔线或触发风控；只要同区域还有可用备用节点且客服能正常响应修复，就不应夸大为全站崩盘。',
        ],
      },
    ],
    faqs: [
      { q: '为什么评测网站很少展示测速图里的 0B 或 KB 级节点？', a: '为了迎合营销转化，部分站长会手动删除异常行或仅展示峰值节点。机场情报严格保留原始测试快照中的所有异常值。' },
    ],
    relatedLinks: [
      { label: '查看全站测速证据库', href: '/network/speedtest/' },
      { label: '连接超时排查指南', href: '/diagnostics/all-timeout/' },
    ],
  },
  {
    slug: 'price-changes',
    title: '机场价格变动与历史价目记录对比 | 机场情报',
    description: '追踪并记录品牌在不同来源日期下的套餐价格与优惠码变化，披露如微风、灵猫、隐形人等存在的价格摘要差异。',
    h1: '机场历史价格变化与价目口径审计记录',
    eyebrow: 'Intelligence · Price Changes',
    answerFirst: '机场套餐并非一成不变，不同资料批次之间常会出现周期调整或优惠变动。本站数据库为灵动云、浪网、边缘节点 EdgeNova 与 Firefly 保留了 2026-08-09 的多周期（季/半年/年/两年/三年）历史价格阶梯，同时公开审计了光速云（59GB vs 69GB）、微风（7元 vs 11.42元）、灵猫（19元 vs 25元）及隐形人（100GB vs 144GB）的价格记录差异。',
    brandSlugs: ['guangsuyun', 'weifeng', 'lingmao', 'yinxingren', 'firefly'],
    sections: [
      {
        heading: '一、历史价格变动对购前决策的意义',
        lead: '警惕“永久不变的低价承诺”，关注月付起步与续费真实成本。',
        paragraphs: [
          '当对比一份资料中的“年付折合价”和另一份资料中的“月付门槛”时，往往会出现表面看似涨价实则只是计费周期不同造成的误解。本站所有套餐表已统一拆解“计费周期”与“折算月成本”，方便核查。',
        ],
      },
    ],
    faqs: [
      { q: '为什么老牌机场的最低年付价也会比前几年微调？', a: '跨境专线成本、上游机房结算汇率以及节点维护成本变化都会促使商家微调小包配额或定价。' },
    ],
    relatedLinks: [
      { label: '数据冲突审计日志', href: '/intelligence/changelog/' },
      { label: '全部 154 条套餐数据库', href: '/pricing/' },
    ],
  },
  {
    slug: 'domain-changes',
    title: '机场域名变更与注册入口防钓鱼核查 | 机场情报',
    description: '解释机场官网域名频繁轮换的原因，警示云界线与环球梯链接格式差异及防仿冒钓鱼站辨识要点。',
    h1: '机场域名变更识别与安全注册入口核查',
    eyebrow: 'Intelligence · Domain Changes',
    answerFirst: '出于防屏蔽与分流考虑，多数机场品牌会使用多组导航页域名或动态切换注册入口域名，且常以 #/?code= 哈希路由形式跳转。在本次 31 家品牌审计中，本站特别标注出云界线与环球梯的推广地址缺少 #/ 哈希前缀（与同系大佬云、闪电鼠、榴莲云不同），建议用户在输入账号密码前务必确认页面证书与跳转正常。',
    brandSlugs: ['yunjiexian', 'huanqiuti', 'guangsuyun'],
    sections: [
      {
        heading: '一、防范仿冒钓鱼站的三项检查',
        lead: '搜索引擎直接搜品牌名出现的陌生推广页风险极高。',
        bullets: [
          '核对浏览器地址栏是否为 HTTPS 加密连接，警惕明文 HTTP 登录页。',
          '不要在任何号称“机场新域名发布器”的页面下载来源不明的 .exe 或 .apk 安装包。',
          '注册时坚持使用独立邮箱与非金融类专属密码。',
        ],
      },
    ],
    faqs: [
      { q: '原来注册时的官网网址打不开了怎么办？', a: '先尝试挂上已保存的代理节点打开原网址（许多机场面板屏蔽直连但允许翻墙后访问），或查看客户端订阅更新公告栏附带的新域名提示。' },
    ],
    relatedLinks: [
      { label: '品牌官网与注册信息目录', href: '/brands/official-links/' },
      { label: '推广披露说明', href: '/disclosure/' },
    ],
  },
  {
    slug: 'avoid-pitfalls',
    title: '机场避坑指南：识别虚假测速、隐形倍率与不退条款 | 机场情报',
    description: '总结购买机场前最容易踩中的六大坑：混淆年付折算与月付、忽略专属端限制、盲目相信“全解锁”、大额预付无实测新站等。',
    h1: '机场避坑指南：购前必须核查的六大常见陷阱',
    eyebrow: 'Intelligence · Avoid Pitfalls',
    answerFirst: '购买机场最容易踩的坑集中在这六项：1) 把“99 元/年（折合 8.25 元/月）”误以为可以只花 8 元买一个月；2) 没看清是否支持 Clash/Shadowrocket 就购买了仅限专属客户端的服务；3) 忽略“特殊商品不支持退款”条款直接冲年付或多年付；4) 轻信无日期无环境说明的宣传测速海报；5) 忽略高倍率节点耗流；6) 未核实香港节点对 Gemini/ChatGPT 的限制。',
    sections: [
      {
        heading: '一、购前五分钟自查表',
        lead: '用本站品牌页的四个核心模块完成交叉核验。',
        bullets: [
          '看客户端模式：是否明确标注“支持第三方订阅”还是“仅专属客户端”。',
          '看实测截图：是否存在真实时间、后端与测试条件，还是全部空白“待核实”。',
          '看冲突提示：是否有优惠码或流量记录冲突，先按更保守的口径规划。',
        ],
      },
    ],
    faqs: [
      { q: '看到某品牌写“1 小时修复承诺”或“晚高峰 0 丢包”能当合同担保吗？', a: '不能。这些属于品牌资料自述（vendor），缺少第三方法律或技术 SLA 审计背书，仍应先用月付自行测试。' },
    ],
    relatedLinks: [
      { label: '退款问题分析', href: '/intelligence/refund-policy/' },
      { label: '编辑政策与数据分级', href: '/editorial-policy/' },
    ],
  },
  {
    slug: 'alternatives',
    title: '机场替代方案数据库：按预算、线路与订阅自由度迁移 | 机场情报',
    description: '当现有机场停运、取消第三方订阅或晚高峰拥堵时，按 5.6元/18元/25元档及专属端 vs 通用端提供结构化替代矩阵。',
    h1: '同价位、同协议与订阅模式机场替代方案矩阵',
    eyebrow: 'Intelligence · Alternatives',
    answerFirst: '寻找替代机场时，应按“预算档位 + 接入模式”精准平替：若因原机场取消 Clash/Shadowrocket 订阅而迁移，可在 20–25 元档关注光速云、星岛梦、唯兔云、一翻云或可信云/速界；若因预算敏感寻找 5.6–9 元年付轻量替代，可对照大佬云、闪电鼠、飞猫学生版、唯兔云限量款及光速云轻量版；若需一次性备用方案，光速云 147 永久包、二猫云 99 元/100GB 与唯兔云 100 元/100GB 均为可选。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'yifan', 'tiziyun', 'ermao', 'shandianshu'],
    sections: [
      {
        heading: '一、按迁移原因匹配的替代路径',
        lead: '不要盲目更换同质化马甲站，先看清自身痛点。',
        bullets: [
          '专属端限制迁移：如原用飞猫、无忧、Firefly 或隐形人但需要软路由/Clash，可平替至梯子云、光速云或唯兔云。',
          'AI 工具受限迁移：优先考量具备新加坡/日本实测支撑或明确针对 AI 场景的速界、光速云、灵动云（注意其 TikTok 失败局限）。',
          '极低价 5.6 元档内部替换：大佬云与闪电鼠协议明确且链接规范，适合替代链接异常的同档位入口。',
        ],
      },
    ],
    faqs: [
      { q: '同价位中规格高度相近的五家 5.6 元机场需要全部买一遍吗？', a: '完全不建议。大佬云、闪电鼠、云界线、榴莲云、环球梯高度同质，选其中一家测试即可；如需真正的线路冗余，应选择不同价格梯队与运营团队的品牌作备用。' },
    ],
    relatedLinks: [
      { label: '品牌横向对比中心', href: '/brands/compare/' },
      { label: '光速云旗舰档案', href: '/brands/guangsuyun/' },
    ],
  },
  {
    slug: 'refund-policy',
    title: '机场退款政策分析：为什么多数特殊/年付套餐不支持退款 | 机场情报',
    description: '梳理代理服务行业常见的退款限制（如光速云特殊商品不支持退款、无免费试用品牌列表），降低试错资金风险。',
    h1: '机场退款政策现状与购前资金风控',
    eyebrow: 'Intelligence · Refund Policy',
    answerFirst: '在当前代理服务行业中，绝大多数服务商对年付轻量包、一次性流量包及促销特价套餐执行“不支持退款”政策，部分品牌（如一翻云、SOGO 云、隐形人）还明确标注不提供免费试用，其余多数品牌亦未公布透明的按天折算退款条款。因此“用最小月付套餐替代退款试错”是唯一可靠的资金保护方式。',
    brandSlugs: ['guangsuyun', 'yifan', 'sogo', 'yinxingren'],
    sections: [
      {
        heading: '一、光速云及其他品牌的退款提示',
        lead: '先看清不支持退款的边界再下单。',
        paragraphs: [
          '光速云品牌档案明确提醒“套餐里特殊商品不支持退款，建议先买月付或小额套餐实测后再考虑长期使用”。其余多数收录品牌目前退款规则标记为“待核实”，默认均应按“购后难退”进行预算控制。',
        ],
      },
    ],
    faqs: [
      { q: '如果刚买完发现自己不会配置客户端，能申请全额退款吗？', a: '视各家客服工单条款而定，很多面板只要生成了订阅或产生过流量消耗即不再支持退款。' },
    ],
    relatedLinks: [
      { label: '月付试错机场清单', href: '/pricing/monthly/' },
      { label: '机场避坑指南', href: '/intelligence/avoid-pitfalls/' },
    ],
  },
  {
    slug: 'security',
    title: '机场安全性与隐私风险指南：HTTPS 校验、客户端权限与账号隔离 | 机场情报',
    description: '客观解析使用第三方机场代理时的流量加密边界、专属客户端权限风险、TLS 证书校验及密码隔离建议。',
    h1: '机场安全性、流量加密边界与隐私防护实操',
    eyebrow: 'Intelligence · Security',
    answerFirst: '代理连接本身（如 VLESS/Trojan/Shadowsocks + TLS）主要加密你设备到代理节点之间的传输，避免本地公共 Wi-Fi 或中间网络嗅探；但它无法保护你在网页端向目标网站提交的明文表单，且不代表出口机场服务端绝对可信。因此日常使用必须坚持“目标网站全站 HTTPS + 不安装来路不明的闭源破解软件 + 机场账号使用独立邮箱密码”三大原则。',
    sections: [
      {
        heading: '一、开源通用客户端 vs 机场专属客户端的安全权衡',
        lead: '在权限敏感设备上优先选用代码可审计的开源客户端。',
        paragraphs: [
          '本站客户端资料特别提醒：避免从非官方仓库安装第三方打包 APK（如假冒 NekoBox 的 Google Play 版本）或使用来历不明的共享 Apple ID。对于仅支持闭源专属客户端的品牌，建议避免在存放高度敏感财务或核心工作机密的主力设备上授予过高系统权限。',
        ],
      },
    ],
    faqs: [
      { q: '用了机场代理还需要看浏览器地址栏的 HTTPS 锁标志吗？', a: '必须看。代理服务器能看到未加密的 HTTP 明文流量，只有端到端的目标网站 HTTPS（TLS）才能保证你的账号密码与聊天内容不被中间落地服务器窥探。' },
    ],
    relatedLinks: [
      { label: '第三方客户端百科', href: '/clients/' },
      { label: '官网入口防钓鱼核查', href: '/intelligence/domain-changes/' },
    ],
  },
  {
    slug: 'history',
    title: '机场运营历史档案：收录品牌的年份分布与演进轨迹 | 机场情报',
    description: '按开业年份（2020 / 2023 / 2024 / 2025 / 2026 / 待核实）完整呈现 31 家品牌的时间轴与客户端政策变化。',
    h1: '机场品牌运营历史年份分布与演进档案',
    eyebrow: 'Intelligence · Operating History',
    answerFirst: '统计当前 31 个去重品牌实体：2020 年运营的有 2 家（光速云、星岛梦）；2023 年运营的有 5 家（暮光加速、飞猫云、微风网络、二猫云、唯兔云）；2024 年运营的有 10 家（大佬云、隐形人、极连云、可信云、速界、闪电鼠、云界线、榴莲云、神行加速、环球梯）；2025 年运营的有 5 家（无忧、U1S1、灵猫、光年梯、一翻、梯子、灵动共计 7 家，以实际档案为准）；2026 年新品牌标注 2 家（SOGO 云、全球云）；另有年份待核实条目。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'muguang', 'feimao', 'weifeng', 'ermao', 'weitu'],
    sections: [
      {
        heading: '一、2026 年下半年行业模式观察',
        lead: '越来越多品牌开始转向自研专属客户端模式。',
        paragraphs: [
          '根据 2026-10-19 收录文本，无忧链接、灵猫网络与 Firefly 均在 2026 年 10 月明确采用官方专属客户端且不再提供订阅链接，而光速云、梯子云、极连云、光年梯、速界则采取“自研客户端 + 保留第三方订阅导入”的双轨策略。',
        ],
      },
    ],
    faqs: [
      { q: '为什么 SOGO 云和全球云在介绍里没写年份，但在数据库里标了 2026 年？', a: '因为汇总核实附表中将 SOGO 云与全球云的独有卖点明确标注为“2026年新品牌”，已在冲突/来源记录中注明出处。' },
    ],
    relatedLinks: [
      { label: '老牌机场专题', href: '/recommend/established/' },
      { label: '情报核实与更新日志', href: '/intelligence/changelog/' },
    ],
  },
  {
    slug: 'risk-profiles',
    title: '31 家机场品牌风险档案总览（含冲突、待核实与异常状态）| 机场情报',
    description: '汇总全部 31 家品牌的当前风险状态、信息缺失项及注意事项，便于下单前一站式排查风险。',
    h1: '31 家机场品牌风险档案总览表',
    eyebrow: 'Intelligence · Risk Profiles',
    answerFirst: '在 31 家收录品牌中，没有任何一家被虚构标为“零风险”，也没有任何一家在无证据下被定性为“跑路”。本站按实证严格划分出两类主力提示：一是“暂无已核实异常记录且具备截图实测证据”的档案；二是“存在待核实信息/来源冲突”（如缺截图、缺协议、链接缺少 #/ 前缀、优惠码冲突或来自 2026-08-09 历史记录）的档案。',
    sections: [
      {
        heading: '一、重点高风险排查提示汇总',
        lead: '存在数据缺口或格式异常的品牌更应谨慎控制预付金额。',
        bullets: [
          '无实测截图且 10-19 表空值：隐形人（全为空值 —）、宇宙云（主表未列但有 08-11 截图）、浪网（入门流量截图遮挡）。',
          '推广链接格式异常（缺少 #/）：云界线、环球梯。',
          '仅存 2026-08-09 历史记录：灵动云、浪网、边缘节点 EdgeNova。',
          '优惠码或流量记录冲突：光速云、微风网络、二猫云、暮光加速、灵猫网络、一翻云、SOGO 云、全球云、隐形人。',
        ],
      },
    ],
    faqs: [
      { q: '为什么连核心合作品牌光速云也被列入冲突提示清单？', a: '因为光速云客观存在轻量版 59GB vs 69GB 与多批次协议（VLESS vs SS）记录差异。商业合作绝不掩盖客观字段审计。' },
    ],
    relatedLinks: [
      { label: '查看完整冲突审计表', href: '/intelligence/changelog/' },
      { label: '内容纠错提交', href: '/corrections/' },
    ],
  },
  {
    slug: 'guangsuyun-risk',
    title: '光速云风险分析、退款注意事项与局限提示 | 机场情报',
    description: '专门汇总光速云（LightSpeed）的已知限制：特殊套餐不支持退款、59GB/69GB 冲突、Gemini/OpenAI 香港局限与单线程异常节点。',
    h1: '光速云使用风险、退款限制与已知局限全披露',
    eyebrow: 'Flagship Cluster · 光速云风控',
    answerFirst: '尽管光速云是本站核心合作品牌且具备 2020 年老牌履历，但用户购买前仍须正视四项客观限制：1) 特殊商品不支持退款；2) 轻量版存在 59GB/69GB 记录冲突；3) 香港节点在 2026-08-19 实测中出现 OpenAI 仅 APP、Gemini 失败；4) 珠海联通单线程美国02出现 1.60KB 异常节点。建议先月付 25 元极速版实测再做长期决策。',
    brandSlugs: ['guangsuyun'],
    sections: [
      {
        heading: '一、购买光速云前的四条风险对策',
        lead: '清楚边界才不容易产生预期落差。',
        paragraphs: [
          '完整品牌档案与实测截图证据请返回【光速云深度评测（/brands/guangsuyun/）】查阅，本页作为光速云集群的风险注意事项分支提供独立风险摘要。',
        ],
      },
    ],
    faqs: [
      { q: '买了光速云 99 元轻量版或 147 永久套餐后如果不合用能退吗？', a: '光速云官方资料提示“套餐里特殊商品不支持退款”，因此不建议在未实测本地线路前直接购买不可退的年付或永久套餐。' },
    ],
    relatedLinks: [
      { label: '回到光速云旗舰综合评测（主锚点）', href: '/brands/guangsuyun/' },
      { label: '光速云套餐对比分析', href: '/pricing/guangsuyun-plans/' },
    ],
  },
];

export const VPN_TOPICS: SubtopicEntry[] = [
  {
    slug: 'recommend',
    title: 'VPN 推荐与代理机场选型对比：不同需求怎么选 | 机场情报',
    description: '对比商业传统 VPN 与代理机场（Clash/VLESS/IEPL）在速度、分流灵活性、中国内地直连稳定性与价格上的实际差异。',
    h1: 'VPN 推荐与机场代理选型对照指南',
    eyebrow: 'VPN & Accelerators · Recommend',
    answerFirst: '对于中国内地网络环境而言，传统商业 VPN（如 WireGuard/OpenVPN 架构）常因协议特征明显及缺乏境内 BGP 中转而在晚高峰连接困难或掉速；若需求是日常高效跨境访问、精确国内外分流与 AI 生产力工具，支持 VLESS/Trojan/Shadowsocks 及 IEPL/IPLC 专线的机场（配合开源客户端）在连通率与价格上通常更具适应性。',
    brandSlugs: ['guangsuyun', 'muguang', 'weitu', 'tiziyun'],
    sections: [
      {
        heading: '一、什么情况适合传统商业 VPN，什么情况选机场',
        lead: '两者在安全边界和路由原理上属于不同工具。',
        paragraphs: [
          '如果在海外本地需要加密公共 Wi-Fi 全局流量且不关心分流成本，商业 VPN 开箱即用；如果需要国内直连不卡、境外走专线，机场订阅配合 Clash Verge Rev/Shadowrocket 是目前性价比与灵活性更高的方案。',
        ],
      },
    ],
    faqs: [
      { q: '买机场需要同时再买一个付费 VPN 吗？', a: '绝大多数日常办公、AI 与流媒体场景不需要叠加购买，开启客户端 TUN 模式即可实现与 VPN 类似的全局接管效果。' },
    ],
    relatedLinks: [
      { label: 'VPN 与代理服务核心区别', href: '/vpn/' },
      { label: '综合机场推荐', href: '/recommend/' },
    ],
  },
  {
    slug: 'free',
    title: '免费 VPN 风险评估：数据窃取、限速断流与隐私代价 | 机场情报',
    description: '深度解析免费 VPN 背后的商业变现逻辑、日志监控、恶意广告注入以及节点带宽枯竭问题。',
    h1: '免费 VPN 风险评估：为什么“免费”往往成本最高',
    eyebrow: 'VPN & Accelerators · Free VPN Risk',
    answerFirst: '跨境服务器带宽、IP 资源与维护团队都需要持续资金投入，没有任何商业机构能长期免费提供高带宽低延迟专线。绝大多数“永久免费 VPN”要么通过极度限速与强制广告变现，要么面临售卖用户浏览日志、注入脚本甚至将用户设备变为住宅代理肉鸡（Exit Node）的严重隐私风险。',
    sections: [
      {
        heading: '一、免费工具与低门槛付费机场成本对比',
        lead: '每月 6–15 元的基础付费门槛足以换取干净独立的客户端环境。',
        paragraphs: [
          '若仅仅偶尔查阅海外文档，与其下载来历不明的免费 VPN，不如选择透明计费的一次性不限时流量包（如 99–147 元覆盖 100–247GB）或规范的开源客户端配合月付测试。',
        ],
      },
    ],
    faqs: [
      { q: '应用商店里评分很高的免费 VPN 安全吗？', a: '商店高评分常伴随诱导好评弹窗，重点要核查开发者主体背景、隐私政策是否记录原始连接日志以及是否夹带过多追踪 SDK。' },
    ],
    relatedLinks: [
      { label: '机场安全性与隐私防护', href: '/intelligence/security/' },
      { label: '便宜机场对比', href: '/pricing/cheap/' },
    ],
  },
  {
    slug: 'mobile',
    title: '手机 VPN 与移动端代理客户端选择（Android / iOS）| 机场情报',
    description: '对比手机端安装代理的两种方案：机场专属一键 App vs 第三方开源/商店客户端（Shadowrocket/v2rayNG/FlClash）。',
    h1: '手机 VPN 与移动端代理接入方式对比',
    eyebrow: 'VPN & Accelerators · Mobile',
    answerFirst: '手机端实现跨境访问无需使用笨重的传统 VPN，更高效的做法是选用兼容机场订阅的轻量客户端（iOS 推荐 Shadowrocket / Karing / Stash，Android 推荐 v2rayNG / FlClash / Hiddify），或直接使用提供专属移动 App 的机场（如飞猫云、无忧链接、梯子云、光速云自研端）。',
    sections: [
      {
        heading: '一、手机端省电与后台保活核心要点',
        lead: 'iOS 依赖 NetworkExtension，Android 需关闭电池后台限制。',
        paragraphs: [
          '移动端代理普遍采用本地 VPN 隧道接口实现分流接管，切换至海外网页时仅代理对应域名，不会影响国内微信、外卖与导航的延迟和耗电。',
        ],
      },
    ],
    faqs: [
      { q: '手机挂代理会显著增加流量费吗？', a: '不会额外增加运营商手机流量消耗，只是相同内容在开启规则模式下正常计费，切忌长期开全局下载国内大视频。' },
    ],
    relatedLinks: [
      { label: '安卓客户端专题', href: '/clients/android/' },
      { label: 'iOS 客户端专题', href: '/clients/ios/' },
    ],
  },
  {
    slug: 'android',
    title: '安卓 VPN 与代理使用指南：架构选型与防假冒下载 | 机场情报',
    description: '指导安卓用户选择 v2rayNG、FlClash、Hiddify 或机场专属 APK，重点提示防范 Google Play 假冒包。',
    h1: '安卓 VPN 与 Android 代理工具安全选型指南',
    eyebrow: 'VPN & Accelerators · Android',
    answerFirst: 'Android 设备由于支持直接安装 APK，客户端生态最为丰富：追求极简与低内存可选 v2rayNG；需要 Clash YAML 分流策略组可选 FlClash 或 Clash Meta for Android；跨平台小白可选 Hiddify 或 Karing。需要特别注意：站内客户端安全规范明确警告不要使用被第三方控制的 Google Play 假冒版 NekoBox。',
    sections: [
      {
        heading: '一、安卓分应用代理（Per-App Proxy）实用技巧',
        lead: '把国内银行、游戏和外卖软件彻底排除在代理隧道外。',
        paragraphs: [
          '在 v2rayNG 或 FlClash 设置中开启“分应用代理（绕过模式）”，勾选国内常用支付与政务 App，可彻底避免因节点触发安全风控弹窗。',
        ],
      },
    ],
    faqs: [
      { q: '安卓手机安装客户端提示“未知来源风险”怎么判断真伪？', a: '国产安卓系统对未上架其应用市场的开源 APK 均会弹窗提醒；只要确保下载自开发者官方 GitHub Releases 页面且校验架构一致即可。' },
    ],
    relatedLinks: [
      { label: 'Android 客户端百科', href: '/clients/android/' },
      { label: 'v2rayNG 档案', href: '/clients/v2rayng/' },
    ],
  },
  {
    slug: 'iphone',
    title: 'iPhone VPN 与 iOS 代理指南：Apple ID 安全与付费商店说明 | 机场情报',
    description: '针对 iPhone/iPad 用户梳理 Shadowrocket、Stash、Quantumult X、Karing 的收费情况与账号安全警告。',
    h1: 'iPhone / iPad VPN 与 iOS 代理配置避坑指南',
    eyebrow: 'VPN & Accelerators · iPhone',
    answerFirst: 'iOS 系统受沙盒与 App Store 审核限制，无法直接下载 GitHub APK，需借助非中国大陆区 Apple ID 下载代理客户端。其中 Shadowrocket、Stash、Quantumult X 在美区商店显示为付费应用，Surge 含应用内购买；免费可选 Karing、Clash Mi 或 sing-box (SFI)。严禁在手机系统设置“iCloud”处登录他人共享 Apple ID 以免锁机。',
    sections: [
      {
        heading: '一、iOS 代理软件怎么选不踩雷',
        lead: '普通用户买一个 Shadowrocket 即可覆盖 99% 机场订阅需求。',
        paragraphs: [
          'Shadowrocket 兼容 Base64、Clash、VLESS、Trojan 与 Hysteria 2 等全部主流协议；只有对图形化策略组或高级脚本重写有重度需求的进阶用户才需考虑 Stash、Quantumult X 或 Surge 5。',
        ],
      },
    ],
    faqs: [
      { q: '为什么不能用搜出来的共享苹果账号直接在手机设置里登录？', a: '一旦在系统主设置登录了陌生人控制的 Apple ID 并开启查找我的 iPhone，对方可以远程锁定你的设备进行勒索。切记仅在 App Store 商店内切换账号或自行注册外区账号。' },
    ],
    relatedLinks: [
      { label: 'Shadowrocket 档案', href: '/clients/shadowrocket/' },
      { label: 'iOS 客户端平台页', href: '/clients/ios/' },
    ],
  },
  {
    slug: 'windows',
    title: 'Windows VPN 与电脑代理软件选型指南 | 机场情报',
    description: '比较 Windows 平台下传统 VPN 客户端与 Clash Verge Rev、v2rayN、FlClash、Hiddify 的配置差异与系统代理原理。',
    h1: 'Windows 电脑端 VPN 与代理客户端选型指南',
    eyebrow: 'VPN & Accelerators · Windows',
    answerFirst: '在 Windows 10/11 环境下，代理软件远比传统商业 VPN 轻巧高效：主流推荐 Clash Verge Rev（基于 Mihomo 内核，支持规则分流与 TUN 模式）和 v2rayN（支持 Xray/sing-box 多核心），新手亦可尝试 Hiddify 或 Karing。老牌的 Clash for Windows 已停止维护，不再建议新用户下载第三方魔改包。',
    sections: [
      {
        heading: '一、Windows 系统代理与 UWP 应用回环解除',
        lead: '遇到 Microsoft Store 或 UWP 应用无法联网时可用 TUN 模式。',
        paragraphs: [
          '开启 Clash Verge Rev 的 TUN 模式后，全部桌面应用、命令行工具与系统更新流量均可按规则分流，无需逐个软件折腾代理端口。',
        ],
      },
    ],
    faqs: [
      { q: '为什么以前流行的 Clash for Windows 现在不推荐了？', a: '原作者已于早年停止维护并删库，目前网络上流传的所谓“最新版 CFW”存在极高的二次打包投毒风险，建议平滑迁移至 Clash Verge Rev 或 FlClash。' },
    ],
    relatedLinks: [
      { label: 'Windows 客户端大全', href: '/clients/windows/' },
      { label: 'Clash Verge Rev 配置教程', href: '/guides/clash-verge/' },
    ],
  },
  {
    slug: 'reviews',
    title: 'VPN 软件与代理工具评测方法说明 | 机场情报',
    description: '建立独立客户端与 VPN 软件评测框架，聚焦内核活跃度、多协议覆盖、内存占用及透明度审计。',
    h1: 'VPN 软件与代理客户端技术评估框架',
    eyebrow: 'VPN & Accelerators · Software Reviews',
    answerFirst: '机场情报评估代理与 VPN 软件核心关注四项可核查技术指标：1) 项目开源透明度与最近提交维护状态（例如警惕已提示维护有限的分支）；2) 协议栈完整度（VLESS-Reality、Hysteria 2、Trojan、AnyTLS 等）；3) 跨平台安装包架构清晰度；4) 隐私权限边界与是否存在闭源广告捆绑。',
    sections: [
      {
        heading: '一、客户端软件与机场服务的分离评估',
        lead: '好软件配差节点依然卡顿；好专线配停更旧端同样连不上。',
        paragraphs: [
          '本站在 /clients/ 栏目中维护了完整的六平台通用客户端档案，明确区分了“第三方开源通用端”与“机场厂商闭源专属端”，便于用户交叉评估工具本身的可靠性。',
        ],
      },
    ],
    faqs: [
      { q: '为什么部分品牌要把客户端做成闭源专属 App？', a: '一方面降低新手导入门槛并防止订阅链接泄露滥用；另一方面也增加了用户对单一客户端的绑定度，且无法接入软路由。' },
    ],
    relatedLinks: [
      { label: '客户端百科全书', href: '/clients/' },
      { label: '机场评测方法论', href: '/methodology/' },
    ],
  },
  {
    slug: 'game-accelerator',
    title: '游戏加速器与机场代理区别：UDP NAT、丢包率与专线适用性 | 机场情报',
    description: '解释网游加速器与代理机场的技术差异，说明如何查看测速图中的 FullCone / RestrictedCone UDP 类型。',
    h1: '游戏加速器与机场代理的本质区别（含 UDP NAT 类型解析）',
    eyebrow: 'VPN & Accelerators · Game Accelerator',
    answerFirst: '专业网游加速器只针对特定游戏进程协议与服务器路由做 UDP 低丢包转发，通常无法访问通用海外网页与 AI 工具；而机场代理主要服务于 TCP/HTTPS 通用访问，虽可借助客户端 TUN 模式支持部分游戏，但联机稳定性高度依赖节点是否支持 FullCone UDP NAT。',
    sections: [
      {
        heading: '一、如何从站内实测图观察 UDP 游戏兼容性',
        lead: '重点查看测速图最右侧的 UDP类型 列。',
        paragraphs: [
          '在光速云 2026-08-19 70 节点测试、微风 2026-07-19 及无忧 2026-07-18 实测图中可以看到，同一家机场不同节点可能分别呈现 FullCone、RestrictedCone 或 Unknown。联机游戏（尤其 P2P 联机与语音）需要优先选用标注 FullCone 的低抖动节点。',
        ],
      },
    ],
    faqs: [
      { q: '机场和游戏加速器可以同时开在电脑上吗？', a: '极易冲突。若两者同时创建虚拟网卡接管系统路由会导致游戏断线或网页无法打开，建议仅保留当前需要的一个。' },
    ],
    relatedLinks: [
      { label: 'TUN 模式冲突排查', href: '/diagnostics/tun-error/' },
      { label: '低延迟节点说明', href: '/network/low-latency/' },
    ],
  },
  {
    slug: 'vs-proxy',
    title: 'VPN 与代理服务（机场）详细技术对比 | 机场情报',
    description: '从网络层级（三层 TUN vs 七层 SOCKS/HTTP）、协议特征、分流粒度与收费模式对比传统 VPN 与机场代理。',
    h1: 'VPN 与代理服务（机场）技术架构与使用差异对照',
    eyebrow: 'VPN & Accelerators · VPN vs Proxy',
    answerFirst: '传统 VPN 工作在 IP 网络层，把整台电脑的全部网络包封装送往单一出口服务器，优点是全局隔离彻底但缺乏细粒度分流且协议易受干扰；机场代理服务基于 VLESS、Trojan、Shadowsocks 或 Hysteria 2 等现代混淆/TLS 协议，配合客户端规则引擎可实现毫秒级国内外智能分流，在跨境速度与成本效益上更适合国内多场景需求。',
    sections: [
      {
        heading: '一、现代代理客户端为何融合了“虚拟网卡”能力',
        lead: '开启 TUN 后的代理客户端已兼具 VPN 的全局接管能力与规则分流的灵活性。',
        paragraphs: [
          '通过 Mihomo 或 sing-box 核心，现代代理软件既能在浏览器层面走轻量级 SOCKS5/HTTP，也能在开启 TUN 后接管不走系统代理的底层应用，从而覆盖了传统 VPN 的功能范围。',
        ],
      },
    ],
    faqs: [
      { q: '公司要求连企业内网 VPN 时，还能同时开机场吗？', a: '大多数企业 VPN（如 Cisco AnyConnect、GlobalProtect 或零信任端）会锁定默认路由表，同时开启代理的 TUN 模式大概率造成断网，需在客户端关闭 TUN 或在公司 VPN 内网使用完成后切换。' },
    ],
    relatedLinks: [
      { label: 'VPN 与加速器专题首页', href: '/vpn/' },
      { label: 'TUN 模式配置指南', href: '/guides/tun-mode/' },
    ],
  },
];

export const CLIENT_PLATFORM_TOPICS: SubtopicEntry[] = [
  {
    slug: 'windows',
    title: 'Windows 代理客户端大全与内核对比 | 机场情报',
    description: '汇总 Windows 电脑代理软件推荐、核心架构对比及安全下载来源，覆盖 Mihomo 与 sing-box 生态。',
    h1: 'Windows 电脑代理客户端大全与选型对比',
    eyebrow: 'Clients · Windows',
    answerFirst: '根据开源客户端兼容性核实档案，Windows 电脑推荐优先使用仍在活跃维护的开源项目：Clash Verge Rev（Mihomo 内核，适合大多数用户与进阶分流）、v2rayN（Xray/sing-box 多核心）、FlClash（界面简洁跨端一致）、Hiddify 与 Karing（新手多协议友好）。注意 Clash Mi 亦为可用选择，而 Mihomo Party 需单独留意仓库维护状态。',
    sections: [
      {
        heading: '一、Windows 核心客户端对比清单',
        lead: '告别已停更的 Clash for Windows，选择现代 Mihomo / sing-box 客户端。',
        bullets: [
          'Clash Verge Rev：Mihomo 内核、订阅管理、规则分流、TUN 模式（GitHub）。',
          'v2rayN：支持 Xray、sing-box 等多核心，擅长多协议及批量节点测试（GitHub）。',
          'FlClash / Clash Nyanpasu / Clash Mi：各具特色的 Mihomo 图形界面实现（GitHub）。',
          'Hiddify / Karing：基于 sing-box，自动选点与多订阅格式兼容性优异（GitHub）。',
        ],
      },
    ],
    faqs: [
      { q: 'Windows 电脑安装光速云、星岛梦、唯兔云用哪个客户端最好？', a: '这三家均支持第三方订阅导入，Windows 端首选 Clash Verge Rev 或 v2rayN；光速云亦额外提供官方自研客户端供新手免配置使用。' },
    ],
    relatedLinks: [
      { label: 'Clash Verge Rev 详情档案', href: '/clients/clash-verge/' },
      { label: 'v2rayN 详情档案', href: '/clients/v2rayn/' },
    ],
  },
  {
    slug: 'android',
    title: 'Android 安卓代理客户端大全与选型 | 机场情报',
    description: '梳理安卓手机与平板代理软件推荐、NekoBox 假冒包警告以及各客户端订阅格式兼容差异。',
    h1: 'Android 安卓代理客户端大全与安全下载警示',
    eyebrow: 'Clients · Android',
    answerFirst: 'Android 端主要推荐四款活跃客户端：v2rayNG（Xray 系轻量标杆，支持通用订阅与单节点链接）、FlClash（Mihomo 规则分流）、Hiddify（多协议新手友好）与 Karing（sing-box 系多订阅管理）；亦可选择 Clash Meta for Android、Clash Mi 或官方 sing-box for Android（SFA）。特别警告：NekoBox 官方已提示维护资源有限且严禁使用其名称下已被第三方控制的 Google Play 版本。',
    sections: [
      {
        heading: '一、安卓 APK 架构选择要点',
        lead: '优先选择与设备匹配的单一架构包以减少体积。',
        paragraphs: [
          '现代安卓手机绝大多数为 64 位 ARM 芯片（选择 arm64-v8a），老旧入门机或电视盒子可能需 armeabi-v7a 或 universal 通用包。',
        ],
      },
    ],
    faqs: [
      { q: '飞猫云、无忧链接能在 v2rayNG 里用吗？', a: '不能。飞猫云、无忧链接、灵猫、Firefly、SOGO、闪跃、全球云与隐形人均采用专属客户端模式，需安装其官方 Android App。' },
    ],
    relatedLinks: [
      { label: 'v2rayNG 详情档案', href: '/clients/v2rayng/' },
      { label: 'FlClash 详情档案', href: '/clients/flclash/' },
    ],
  },
  {
    slug: 'ios',
    title: 'iOS / iPadOS 代理客户端大全与选型 | 机场情报',
    description: '整理 iPhone 与 iPad 代理软件完整清单、美区 App Store 付费情况说明及正版账号安全规范。',
    h1: 'iPhone / iPad（iOS）代理客户端百科与付费说明',
    eyebrow: 'Clients · iOS / iPadOS',
    answerFirst: 'iOS 平台代理软件主要通过非中国大陆区 App Store 获取。普及度最高的 Shadowrocket（小火箭）、Stash、Quantumult X（圈 X）与 Surge 5 均涉及美区商店付费或内购，具体价格以所属区商店为准；免费开源或免付费选择包括 Karing、Clash Mi、Hiddify（GitHub/Store）及官方 sing-box（SFI）。另有 Streisand、Potatso 与 OneClick 可选。',
    sections: [
      {
        heading: '一、iOS 客户端功能分级选择',
        lead: '日常看视频与用 AI 无需追高最复杂的脚本软件。',
        bullets: [
          '新手日常主力：Shadowrocket（小火箭）或免费的 Karing / Clash Mi。',
          'Clash 规则重度迁移用户：Stash（原生兼容 Clash YAML 策略与覆写）。',
          '脚本重写与网络调试专家：Quantumult X 或 Surge 5。',
        ],
      },
    ],
    faqs: [
      { q: '为什么中国大陆区 App Store 搜不到 Shadowrocket？', a: '因商店区域合规政策限制，中国大陆区未上架相关代理工具，需通过合法合规的其他地区 App Store 账号下载。' },
    ],
    relatedLinks: [
      { label: 'Shadowrocket 详情档案', href: '/clients/shadowrocket/' },
      { label: 'iPhone VPN 选型提示', href: '/vpn/iphone/' },
    ],
  },
  {
    slug: 'macos',
    title: 'macOS 代理客户端大全（M 系列与 Intel）| 机场情报',
    description: '整理 macOS 代理客户端清单（Clash Verge Rev/FlClash/v2rayN/Surge Mac/SFM），强调 M1-M4 与 Intel 架构安装包区分。',
    h1: 'macOS 苹果电脑代理客户端大全（含芯片架构指南）',
    eyebrow: 'Clients · macOS',
    answerFirst: 'macOS 代理生态非常完善，主流推荐 Clash Verge Rev、FlClash、v2rayN、Hiddify、Karing、Clash Mi、Clash Nyanpasu，以及商业级的 Surge Mac 与官方 sing-box for macOS（SFM）。下载 DMG 时务必核对 Mac 芯片类型：Apple Silicon（M1/M2/M3/M4）下载 arm64/aarch64 版本，老款 Intel Mac 下载 x64/x86_64 版本。',
    sections: [
      {
        heading: '一、macOS 下 Apple Silicon 与 Intel 安装注意',
        lead: '装对原生架构可显著降低功耗与风扇噪音。',
        paragraphs: [
          'Clash Verge Rev 与 FlClash 仓库均同时发布两种芯片架构的 .dmg 安装包。同时如果使用 iPad/iPhone 购买过 Shadowrocket，搭载 Apple Silicon 的 Mac 亦可直接在 App Store 已购项目中下载运行 iOS 版小火箭。',
        ],
      },
    ],
    faqs: [
      { q: 'macOS 开启 Clash Verge Rev 的 TUN 模式提示密码授权正常吗？', a: '正常。macOS 创建 utun 虚拟网卡与修改系统路由表必须经过管理员权限（sudo/授权助手）批准。' },
    ],
    relatedLinks: [
      { label: 'Clash Verge Rev 档案', href: '/clients/clash-verge/' },
      { label: '安装架构识别指南', href: '/guides/installation/' },
    ],
  },
  {
    slug: 'linux',
    title: 'Linux 桌面与无头代理客户端大全 | 机场情报',
    description: '整理 Ubuntu/Debian/Fedora/Arch 及无桌面 Linux 服务器适用的代理客户端与打包格式说明。',
    h1: 'Linux 桌面与服务器代理客户端大全',
    eyebrow: 'Clients · Linux',
    answerFirst: 'Linux 桌面环境推荐使用 Clash Verge Rev、FlClash、v2rayN、Hiddify、Karing、Clash Mi、Clash Nyanpasu 或官方 sing-box for Desktop，按发行版选用 .deb（Debian/Ubuntu）、.rpm（Fedora/RHEL）或跨发行版 .AppImage；对于没有图形界面的 Linux 主机或无头服务器，则推荐使用支持 Web 控制界面与透明代理的 v2rayA。',
    sections: [
      {
        heading: '一、Linux 环境运行 TUN 与权限提醒',
        lead: 'AppImage 运行前需赋权，systemd 服务需正确配置权限。',
        paragraphs: [
          '使用 .AppImage 前需执行 chmod +x；若无头服务器需要拉取 GitHub/Docker 镜像，使用 v2rayA 或 sing-box CLI 配合 systemd 管理更为轻量稳定。',
        ],
      },
    ],
    faqs: [
      { q: 'Linux 主机能用飞猫云或隐形人这类专属客户端机场吗？', a: '绝大多数专属客户端机场未提供 Linux CLI 或主流发行版包，Linux 开发环境务必优先选择光速云、星岛梦、唯兔云、一翻云等开放第三方订阅的服务。' },
    ],
    relatedLinks: [
      { label: 'sing-box 官方架构档案', href: '/clients/sing-box/' },
      { label: 'OpenWrt 软路由客户端', href: '/clients/openwrt/' },
    ],
  },
  {
    slug: 'openwrt',
    title: 'OpenWrt 软路由代理客户端插件大全 | 机场情报',
    description: '对比 OpenWrt 软路由四大核心透明代理插件（OpenClash、PassWall2、Nikki、HomeProxy），强调版本与防火墙依赖校验。',
    h1: 'OpenWrt 软路由代理客户端插件百科与环境核查',
    eyebrow: 'Clients · OpenWrt',
    answerFirst: 'OpenWrt 路由器透明代理与桌面客户端截然不同，主流插件包括 OpenClash（Mihomo/Clash 规则生态）、PassWall2（Xray/sing-box 多核心）、Nikki（Mihomo 透明代理，项目明确要求 OpenWrt 24.10 及以上版本）、HomeProxy（基于 sing-box 原生路由）以及 v2rayA。安装前务必核对路由器固件版本、CPU 架构、包管理器（opkg/apk）与 fw4 防火墙依赖，并避开不提供订阅链接的专属客户端机场。',
    sections: [
      {
        heading: '一、软路由用户的机场选型硬门槛',
        lead: '不支持通用订阅的机场无法接入任何 OpenWrt 插件。',
        paragraphs: [
          '如光速云、星岛梦、唯兔云、微风网络、一翻云、可信云、速界、梯子云均支持第三方通用订阅导入，可搭配 OpenClash 或 PassWall2 在全家设备上免装软件统一分流；而飞猫云、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云与隐形人则不适用软路由方案。',
        ],
      },
    ],
    faqs: [
      { q: 'OpenWrt 23.05 老固件可以直接装 Nikki 吗？', a: '不建议强行安装。客户端兼容性说明明确指出 Nikki 项目要求 OpenWrt 24.10 及以上版本，老版本固件应选用对应分支的 OpenClash 或 PassWall2。' },
    ],
    relatedLinks: [
      { label: '支持第三方订阅的机场品牌库', href: '/brands/' },
      { label: '多设备代理配置指南', href: '/guides/multi-device/' },
    ],
  },
];
