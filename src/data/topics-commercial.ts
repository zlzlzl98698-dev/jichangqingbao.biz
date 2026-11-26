import type { SectionBlock, TopicTable, TopicStep, TopicClusterGroup, TopicCta } from '../components/seo/TopicPageTemplate.astro';
import type { FaqItem } from '../components/seo/FaqSection.astro';

export interface SubtopicEntry {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  answerFirst: string;
  brandSlugs?: string[];
  sections: SectionBlock[];
  tables?: TopicTable[];
  steps?: TopicStep[];
  clusters?: TopicClusterGroup[];
  cta?: TopicCta;
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string; note?: string }[];
}

export const RECOMMEND_TOPICS: SubtopicEntry[] = [
  {
    slug: 'rankings',
    title: '2026 机场排行说明：合作展示序列与客观维度区隔 | 机场情报',
    description: '说明机场情报对机场排行的严谨界定：公开标注 11 家合作展示序列，并按老牌年限、实测证据、月付门槛等独立维度提供横向参考。',
    h1: '机场排行与筛选维度说明（拒绝虚假“客观第一”榜单）',
    eyebrow: 'Recommend · Rankings',
    answerFirst: '机场情报不发布没有统一控温、控并发条件的伪“全网速度第一”排行榜。本站首页精选的 11 个品牌（光速云至 Firefly）属于明确的商业合作展示顺序；在技术选型上，建议按运营年份、原始测速截图完整度、第三方订阅支持及月付试错成本四个独立维度分别排序。',
    brandSlugs: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'ermao', 'weitu', 'yifan'],
    sections: [
      {
        heading: '一、为什么不采用单一综合评分排名',
        lead: '不同运营商（电信/联通/移动）、不同客户端需求（Clash vs 专属端）与不同预算人群的最佳解完全不同。',
        paragraphs: [
          '在 2026-08-19 光速云同日三网实测中，长沙电信、广西移动与河北联通跑出的峰值与均速分布就有明显差异；而飞猫云、无忧链接、Firefly 等专属客户端品牌，即便价格低廉也完全无法满足软路由用户的需求。因此单一“总榜第一”在工程上并不成立。',
        ],
      },
      {
        heading: '二、四大客观参考维度',
        lead: '先看可核实事实，再看商业推广信息。',
        bullets: [
          '运营年份维度：光速云（2020）、星岛梦（2020）具备 6 年级跨度记录。',
          '实测证据维度：15 家品牌具备 2026-08-11 测速截图，微风与无忧具备 2026-07 50 节点图，光速云额外具备 2026-08-19 三网及流媒体解锁图。',
          '月付试错门槛：唯兔云限时 14.9 元/100GB、极连云与光年梯 18 元档、无忧 19 元档、光速云极速版 25 元/168GB。',
        ],
      },
    ],
    faqs: [
      { q: '光速云排在第一位是因为测速全站最高吗？', a: '不是。光速云排在第一位是本站明确披露的核心商业合作展示顺序；其优势在于 2020 年运营履历、7 档套餐与 6 份三网实测证据完整，而非宣称所有指标单项第一。' },
    ],
    relatedLinks: [
      { label: '返回综合机场推荐', href: '/recommend/' },
      { label: '查看 31 品牌多维筛选器', href: '/brands/' },
    ],
  },
  {
    slug: 'reliable',
    title: '靠谱机场怎么选：运营年限、协议透明与风险核查清单 | 机场情报',
    description: '基于机场情报 31 家品牌档案，从老牌年限、实测透明度、订阅自主权和退款提示四个维度梳理靠谱机场的核查标准。',
    h1: '靠谱机场核查标准与品牌对照',
    eyebrow: 'Recommend · Reliable',
    answerFirst: '判断机场是否“靠谱”，核心不在宣传文案的“永不跑路”，而在于三项可核查证据：是否具备多年运营记录（如 2020–2023 年上线）、是否公开原始测速及异常点而非只发美化海报、以及是否支持先小额月付试错与第三方订阅自主切换。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'kexin', 'ermao', 'muguang'],
    sections: [
      {
        heading: '一、重点关注信息透明的品牌表现',
        lead: '敢于标明局限与数据缺口的品牌，比承诺“100% 全解锁永不掉速”的品牌更值得参考。',
        paragraphs: [
          '例如光速云官方承认 ChatGPT 与 Gemini 需视节点手动切换；可信云在资料中主动写明“AI 与流媒体目前缺乏统一实测数据”；速界也明确提示 AI 可用性受 IP 与平台规则影响。这些克制陈述有助于用户建立合理预期。',
        ],
      },
    ],
    faqs: [
      { q: '老牌机场就一定不会异常吗？', a: '不是绝对的。运营年份长只说明经历过更多网络周期，但仍然可能调整套餐、更换客户端模式或遇短期线路波动，建议始终保留 1–2 个备用方案。' },
    ],
    relatedLinks: [
      { label: '机场避坑指南', href: '/intelligence/avoid-pitfalls/' },
      { label: '老牌机场汇总', href: '/recommend/established/' },
    ],
  },
  {
    slug: 'stable',
    title: '稳定机场选择指南：晚高峰冗余、IEPL/IPLC 专线与测速证据 | 机场情报',
    description: '分析稳定机场的网络架构基础，对比标注 IEPL/IPLC 专线及具备多时段实测截图的品牌方案。',
    h1: '稳定机场评估：专线架构、时段测试与稳定性局限',
    eyebrow: 'Recommend · Stable',
    answerFirst: '在跨境代理网络中，晚高峰稳定度主要取决于是否走 IEPL/IPLC 内网专线以避开公网出口拥塞，以及本地宽带到国内 BGP 入口的路由质量。当前站内具备晚间（18:30–22:50）实测截图参考的品牌包括微风网络、无忧链接、U1S1、极连云、SOGO 云、灵猫网络与宇宙云。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'shanyue', 'yifan', 'u1s1'],
    sections: [
      {
        heading: '一、如何正确理解“晚高峰稳定”',
        lead: '单日单次截图不能证明全年稳定，需要区分日间、晚间与运营商差异。',
        paragraphs: [
          '光速云 2026-10-19 基准测速明确标注为“非晚高峰”，仅作基础带宽参考；而 2026-08-11 批次中，U1S1（22:33）、极连云（22:46）、宇宙云（21:04）、SOGO 云（18:57）和 2026-07 批次的微风（18:38）、无忧（21:40）采集于晚间时段，能更直接反映晚间快照状态。',
        ],
      },
    ],
    faqs: [
      { q: '为什么标称 IEPL 专线还是会遇到个别节点超时？', a: 'IEPL 解决的是跨境骨干传输段的 QoS 丢包，但如果国内中转入口遭遇运营商波动或单台落地机超载，仍会出现个别节点 0B 或高延迟，需结合客户端测速切换备用节点。' },
    ],
    relatedLinks: [
      { label: 'IEPL 与 IPLC 专线技术区别', href: '/network/iepl/' },
      { label: '全部实测截图档案库', href: '/network/speedtest/' },
    ],
  },
  {
    slug: 'best-rated',
    title: '好用的机场评估：协议兼容性、客户端体验与综合均衡方案 | 机场情报',
    description: '从日常使用顺滑度（多协议支持、全平台客户端覆盖、1倍率计费、支付便利性）分析好用机场的关键要素。',
    h1: '好用的机场核心标准：兼容性、倍率与日常体验',
    eyebrow: 'Recommend · Usability',
    answerFirst: '“好用”取决于两类用户偏好：偏好折腾分流与多端同步的进阶用户，应优先选择支持 Clash/Shadowrocket 订阅、1 倍率计费且采用 VLESS/Hysteria 2 的品牌（如光速云、一翻云、唯兔云、梯子云）；偏好零配置登录即用的用户，可关注提供专属客户端的品牌。',
    brandSlugs: ['guangsuyun', 'yifan', 'tiziyun', 'weitu', 'feimao'],
    sections: [
      {
        heading: '一、日常使用中容易被忽略的“好用”细节',
        lead: '流量倍率、支付便利度与客户端自由度直接决定长期体验。',
        bullets: [
          '全节点 ×1 倍率：光速云极速版、星岛梦、唯兔云、无忧链接与灵猫网络均标注 1 倍计费，避免节点高倍率隐形缩水流量。',
          '协议多样性：一翻云同时提供 Hysteria 2、VLESS-Reality 与 Shadowsocks，弱网穿透适应力较强。',
          '支付方式：光速云、边缘节点 EdgeNova 均支持支付宝、微信与 USDT。',
        ],
      },
    ],
    faqs: [
      { q: '自研客户端和第三方 Clash 客户端哪个更好用？', a: '自研客户端胜在登录即用、无需复制订阅链接；Clash Verge Rev / Shadowrocket 等第三方通用客户端则在规则分流、本地直连准确度、多机场合并和开源安全性上更胜一筹。' },
    ],
    relatedLinks: [
      { label: '第三方客户端百科', href: '/clients/' },
      { label: '全站线路倍率说明', href: '/network/multiplier/' },
    ],
  },
  {
    slug: 'beginner',
    title: '新手机场指南：专属客户端一键登录 vs 通用订阅入门对比 | 机场情报',
    description: '专为首次接触网络代理的新手整理：对比飞猫云、无忧链接、梯子云、光速云等在安装门槛与学习成本上的差异。',
    h1: '新手机场选择指南：降门槛方案与避坑提醒',
    eyebrow: 'Recommend · Beginners',
    answerFirst: '新手选机场最常卡在“不会导入订阅链接”或“买了不支持第三方客户端的服务却去下载 Clash”。如果希望下载 App 登录即用，可关注飞猫云、无忧链接或同时兼顾一键登录与通用订阅的梯子云、光速云；但首次购买务必选月付或小额年付试错。',
    brandSlugs: ['feimao', 'tiziyun', 'guangsuyun', 'wuyou', 'weifeng'],
    sections: [
      {
        heading: '一、两类新手路径对比',
        lead: '只用自研 App 最省心，保留第三方订阅则方便未来进阶。',
        paragraphs: [
          '飞猫云、无忧链接、SOGO 云、闪跃、全球云等仅提供官方专属客户端，手机电脑装好登录即可连，适合完全不想看教程的新手；而光速云与梯子云同时提供自研客户端和 Clash/Shadowrocket 订阅，既能一键上手，以后想换路由器或专业客户端也不用换机场。',
        ],
      },
    ],
    faqs: [
      { q: '新手第一次买应该直接买年付便宜套餐吗？', a: '不建议。虽然年付折算下来只需 6–9 元/月，但很多机场对年付小包不支持退款；建议先用月付（如 15–25 元）测试一周自己宽带和手机的稳定性。' },
    ],
    relatedLinks: [
      { label: '新手入门分步教程', href: '/guides/beginner/' },
      { label: '机场订阅导入教程', href: '/guides/subscription/' },
    ],
  },
  {
    slug: 'established',
    title: '老牌机场档案：2020–2023年运营品牌履历与稳定性核查 | 机场情报',
    description: '盘点机场情报数据库中标注 2020 年及 2023 年开始运营的老牌机场，对比其套餐演化与历史测试档案。',
    h1: '老牌机场数据库：运营年份较长的品牌盘点',
    eyebrow: 'Recommend · Established',
    answerFirst: '在当前收录的 31 家品牌中，明确标注 2020 年起运营的老牌机场为光速云与星岛梦（约 6 年级运营跨度）；标注 2023 年运营的品牌包括暮光加速、飞猫云、微风网络、二猫云与唯兔云。对于注重运营存续周期的用户，2020–2023 年梯队的资料完整性明显高于 2025–2026 年新上线品牌。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'muguang', 'feimao', 'weifeng', 'ermao', 'weitu'],
    sections: [
      {
        heading: '一、老牌品牌的数据特征',
        lead: '运营时间越长，跨批次可交叉核对的历史测试数据通常越丰富。',
        paragraphs: [
          '例如光速云与星岛梦均在 2026-08-11 测速包及 2026-10-19 清单中有完整价格和性能档案；唯兔云（V2云）、飞猫云、微风网络和二猫云同样留有原始测速截图，可供购前查验。',
        ],
      },
    ],
    faqs: [
      { q: 'Firefly 资料里写“8年团队”算老牌机场吗？', a: '“8年团队”属于 Firefly 萤火虫历史资料中的品牌自述（vendor），本站将其列为参考说明，不直接等同于公开可查的单一品牌开业年份。' },
    ],
    relatedLinks: [
      { label: '品牌运营历史档案', href: '/brands/history/' },
      { label: '机场运营历史情报库', href: '/intelligence/history/' },
    ],
  },
  {
    slug: 'multi-device',
    title: '多设备机场推荐：明确标注“不限设备连接数”的品牌清单 | 机场情报',
    description: '汇总资料中明确标注“不限设备/多端同时在线”的机场品牌，同时提示单设备流量配额与合理使用边界。',
    h1: '多设备机场档案：支持不限终端同时在线的品牌',
    eyebrow: 'Recommend · Multi-Device',
    answerFirst: '如果需要在电脑、手机、平板及家庭路由器同时挂起代理，应避开严格限制 2–3 台设备的套餐。当前资料中明确标注“不限设备”或“不限客户端数量”的品牌包括光速云、星岛梦、二猫云、无忧链接、唯兔云、Firefly、U1S1、灵猫网络、一翻云、SOGO 云与灵动云。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'ermao', 'weitu', 'yifan', 'u1s1', 'sogo'],
    sections: [
      {
        heading: '一、多设备共享的隐藏限制：订阅模式与总流量',
        lead: '不限设备数量不代表所有设备都能方便地共用一个账号。',
        paragraphs: [
          '例如无忧链接、灵猫网络、Firefly 与 SOGO 云虽然标注不限设备，但因为只支持官方专属客户端而无法导入 OpenWrt 软路由；如果家中包含电视盒子或 Linux 服务器，优先考虑光速云、星岛梦、唯兔云或一翻云等支持第三方订阅的品牌会更顺畅。',
        ],
      },
    ],
    faqs: [
      { q: '不限设备机场可以全宿舍或公开分享账号吗？', a: '不可以。即便标明不限设备，服务商后台通常仍有防滥用风控，跨地域多 IP 并发下载容易触发封号或限速，仅供个人多终端或小范围家庭正常使用。' },
    ],
    relatedLinks: [
      { label: '多设备配置管理教程', href: '/guides/multi-device/' },
      { label: '大流量月付套餐筛选', href: '/pricing/high-traffic/' },
    ],
  },
];

export const PRICING_TOPICS: SubtopicEntry[] = [
  {
    slug: 'cheap',
    title: '便宜机场推荐与低价风险核查（5.6元–10元档全解析）| 机场情报',
    description: '系统对比 5.6 元/月年付档（大佬云、闪电鼠、云界线、榴莲云、环球梯）及 6.5–9 元年付折算机场的真实成本与限制。',
    h1: '便宜机场价格结构与低价套餐风险核查',
    eyebrow: 'Pricing · Cheap',
    answerFirst: '站内收录资料中价格门槛最低的是 5.6 元/月档（大佬云、闪电鼠、云界线、榴莲云、环球梯），其次为 6.5–9.08 元/月档（无忧 79 元/年、唯兔云限量 79.9 元/年、飞猫 84 元/年、灵猫 85 元/年、二猫 89 元/年、光速云 99 元/年）。需要明确的是，这些低价均为年付折算月成本且月流量多在 40–70GB，并非普通单月付价格。',
    brandSlugs: ['shandianshu', 'dalaoyun', 'yunjiexian', 'liulianyun', 'huanqiuti', 'guangsuyun', 'wuyou', 'weitu'],
    sections: [
      {
        heading: '一、5.6 元档五家同规格品牌的细节差异',
        lead: '看似完全相同的价格背后，存在协议明确度与链接格式差异。',
        paragraphs: [
          '大佬云、闪电鼠、云界线、榴莲云与环球梯均为 2024 年运营、IEPL 专线、60GB/月及季付及以上 7 折。其中榴莲云是唯一未在资料中标注协议类型的品牌；云界线与环球梯的推广链接缺少 #/ 路由前缀；且这五家均缺少独立实测截图。',
        ],
      },
    ],
    faqs: [
      { q: '为什么 99 元/年的光速云轻量版有时被称为 8 元档？', a: '因为 99 ÷ 12 = 8.25 元/月，属于按年折算均价；若按单月购买，光速云最低为 25 元极速版。' },
    ],
    relatedLinks: [
      { label: '一元机场风险辨识', href: '/pricing/one-yuan/' },
      { label: '性价比机场评估', href: '/pricing/value/' },
    ],
  },
  {
    slug: 'one-yuan',
    title: '一元机场存在吗？低价极限与超低价机场风险分析 | 机场情报',
    description: '核查市场上常见“一元机场”宣传背后的成本逻辑，并与机场情报数据库内最低 5.6 元/月实际套餐作客观对照。',
    h1: '“一元机场”现实核查与超低价服务风险边界',
    eyebrow: 'Pricing · One Yuan',
    answerFirst: '在机场情报当前收录并核实的 31 家品牌及 154 条套餐记录中，没有任何一家提供真正的 1 元/月商业 IEPL/IPLC 专线套餐，库内最低记录为年付折算 5.6 元/月（60GB）。市面上宣传的“一元机场”多采用公益共享节点、直连低成本 VPS 或流量极度受限的引流体验包，稳定性与隐私保障风险极高。',
    brandSlugs: ['shandianshu', 'dalaoyun', 'wuyou', 'feimao'],
    sections: [
      {
        heading: '一、专线成本决定“一元”难以长期可持续',
        lead: '跨境带宽与原生落地 IP 均有刚性成本。',
        paragraphs: [
          '以 IEPL 或三网优化中转为例，哪怕分摊至海量用户，单 GB 带宽与面板运维也存在基础下限。长期以 1 元兜售的机场往往面临严重超售、晚高峰大面积超时、频繁更换域名甚至随时关站失联的风险。',
        ],
      },
    ],
    faqs: [
      { q: '如果预算真的只有几块钱，有什么合规且有记录的替代选择？', a: '可关注有明确条款的 5.6–8.25 元/月年付轻量档（如闪电鼠、大佬云、飞猫学生版、光速云轻量版），或先选择 14.9–20 元月付短期测试。' },
    ],
    relatedLinks: [
      { label: '一分机场陷阱识别', href: '/pricing/one-cent/' },
      { label: '机场避坑指南', href: '/intelligence/avoid-pitfalls/' },
    ],
  },
  {
    slug: 'one-cent',
    title: '一分机场与 0.01 元试用套路识别 | 机场情报',
    description: '深入解析“一分机场”0.01 元试用活动背后的自动续费绑定、来历不明专属端打包安全隐患以及隐私索取边界，附正规低门槛月付替代清单。',
    h1: '“一分机场”营销机制解析与安全核查',
    eyebrow: 'Pricing · One Cent',
    answerFirst: '“一分机场”通常指商家针对新注册用户设置的 0.01 元/1GB 短期引流体验券或支付通道测试价，并非长期稳定的 1 分钱套餐。用户在使用此类极低价入口时，需高度警惕自动续费扣款、强制安装来历不明的客户端以及收集个人真实手机号/邮箱的风险。',
    brandSlugs: ['guangsuyun', 'shandianshu', 'weitu'],
    sections: [
      {
        heading: '一、核实试用与真实月付成本',
        lead: '真正的判断标准是续费周期的常规价格，而不是首单 0.01 元噱头。',
        paragraphs: [
          '在本站收录的 31 家品牌中，一翻云、SOGO 云、隐形人等甚至明确标注“无免费试用”。与其追逐可能带有恶意打包风险的“一分机场”，不如直接核对正规月付起步价与退款条款。',
        ],
      },
    ],
    faqs: [
      { q: '遇到需要实名认证或绑定手机号的一分机场能用吗？', a: '强烈建议谨慎。普通代理注册仅需常规邮箱即可，索取过多个人敏感信息会显著放大隐私风险。' },
    ],
    relatedLinks: [
      { label: '机场安全性与隐私防护', href: '/intelligence/security/' },
      { label: '月付机场数据库', href: '/pricing/monthly/' },
    ],
  },
  {
    slug: 'monthly',
    title: '月付机场汇总：低试错周期品牌与 14.9–27 元主流档对比 | 机场情报',
    description: '汇总支持按月付费的机场品牌，重点对比 14.9 元至 27 元月付门槛的流量配额、协议与实测证据状态。',
    h1: '月付机场对比：先短周期实测，再决定是否长期续费',
    eyebrow: 'Pricing · Monthly',
    answerFirst: '在初次接触任意机场时，月付是最能控制资金风险的计费周期。根据本站 154 条套餐数据，主流月付门槛集中在 14.9–27 元区间：包括唯兔云限时 14.9 元（100GB）、EdgeNova 限时 15 元（72GB）、极连云/光年梯 18 元（100/110GB）、无忧 19 元（100GB）、暮光/二猫/U1S1/一翻/全球/灵动 20 元（100–150GB）以及光速云极速版 25 元（168GB）。',
    brandSlugs: ['guangsuyun', 'weitu', 'yifan', 'ermao', 'u1s1', 'jilian', 'guangnian', 'muguang'],
    sections: [
      {
        heading: '一、月付档的单位流量性价比排序观察',
        lead: '同样 20–25 元月付，不同品牌的流量与接入自由度差别明显。',
        paragraphs: [
          '20 元档中，一翻云给出 150GB 且支持 Hysteria 2/VLESS-Reality，二猫云给出 130GB；25 元档中，光速云极速版给出 168GB 且保留第三方订阅与三网实测记录，高于星岛梦、飞猫云、SOGO、可信云、速界的 150GB。',
        ],
      },
    ],
    faqs: [
      { q: '为什么很多 5.6 元机场在数据库里没有月付套餐？', a: '部分平价品牌未在公开资料中提供单月付费表或仅靠年付压低客单价。购买前请点击品牌页确认官网是否开放单月购买。' },
    ],
    relatedLinks: [
      { label: '年付机场对比', href: '/pricing/annual/' },
      { label: '完整套餐价格数据库', href: '/pricing/' },
    ],
  },
  {
    slug: 'annual',
    title: '年付机场对比：79–137 元年付真实月均核算 | 机场情报',
    description: '对比全站 31 家机场的 79 至 137 元年付小包及常规年付折扣方案，拆解折算月均成本、流量清零规律、优惠码排除限制与特殊套餐不退款风险边界。',
    h1: '年付机场数据库：年付小包折算成本与长期风险评估',
    eyebrow: 'Pricing · Annual',
    answerFirst: '年付小包是机场商家常用的低门槛方案，通常以 79–137 元/年提供每月 40–100GB 重置流量，折合 6.58–11.42 元/月（不含 5.6 元档摘要）。购买年付前必须确认两点：一是单月流量上限能否覆盖全年需求，二是商家对年付套餐普遍执行“不支持退款”政策。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'feimao', 'weitu', 'wuyou', 'ermao', 'weifeng'],
    sections: [
      {
        heading: '一、主流年付小包横向核对',
        lead: '注意区分“每月重置流量”与“一次性总流量”。',
        bullets: [
          '无忧 MINI 链接：79 元/年，40GB/月（折合 6.58 元/月，仅专属客户端）。',
          '唯兔云年付限量款：79.9 元/年，45GB/月（折合 6.66 元/月，支持第三方订阅）。',
          '飞猫学生版：84 元/年，50GB/月（折合 7.00 元/月，仅专属客户端）。',
          '二猫年付小包：89 元/年，60GB/月（折合 7.42 元/月）。',
          '星岛梦贴心小包：96 元/年，60GB/月（折合 8.00 元/月）。',
          '光速云轻量版：99 元/年，69GB/月（折合 8.25 元/月；存在 59GB 冲突记录）。',
        ],
      },
    ],
    faqs: [
      { q: '年付小包中途流量不够用可以补差价升级吗？', a: '视各家面板规则而定，多数独立小包不支持随时折抵升级或退款，因此建议先通过月付核定自己每月实际消耗 GB 数。' },
    ],
    relatedLinks: [
      { label: '退款政策与避坑分析', href: '/intelligence/refund-policy/' },
      { label: '不限时机场替代方案', href: '/pricing/no-expiry/' },
    ],
  },
  {
    slug: 'no-expiry',
    title: '不限时机场推荐：一次性付费不过期流量包单价对照表 | 机场情报',
    description: '统计机场情报收录的全部一次性付费不限时流量套餐，按单价（元/GB）与品牌实测状况对比分析。',
    h1: '不限时机场与一次性流量包数据库',
    eyebrow: 'Pricing · No-Expiry',
    answerFirst: '不限时套餐（一次性付费、用完为止）非常适合出差备用、低频查阅资料或作为第二条防断线冗余通道。当前站内收录的不限时包覆盖 99 元/100GB（二猫云）、100 元/100GB（唯兔云/星岛梦/一翻云/Firefly/全球云）、147 元/247GB（光速云致敬斯诺克147永久套餐）直至 1199 元/1TB（隐形人）。',
    brandSlugs: ['guangsuyun', 'ermao', 'weitu', 'xingdaomeng', 'yifan', 'wuyou', 'muguang'],
    sections: [
      {
        heading: '一、按单 GB 成本评估不限时套餐',
        lead: '不限时包的单位流量单价普遍高于月付套餐，买的是“时间自由度”。',
        paragraphs: [
          '以 100GB 档为例，99–120 元折合 0.99–1.20 元/GB；光速云致敬斯诺克147永久套餐（147 元/247GB）单价降至约 0.595 元/GB；一翻云 400 元/500GB 为 0.80 元/GB，唯兔云 340 元/500GB 为 0.68 元/GB，飞猫云 680 元/1000GB 为 0.68 元/GB。',
        ],
      },
    ],
    faqs: [
      { q: '买“永久不限时套餐”真的能用一辈子吗？', a: '“永久不过期”是指套餐本身的流量有效期不按月清零，但前提是该机场品牌持续正常运营且未关闭对应服务。因此切忌把过高金额压在运营史很短的新站大额不限时包上。' },
    ],
    relatedLinks: [
      { label: '光速云不限时与套餐选择分析', href: '/pricing/guangsuyun-plans/' },
      { label: '机场跑路风险核查', href: '/intelligence/exit-scam/' },
    ],
  },
  {
    slug: 'value',
    title: '性价比机场评估：15–30元主流月付档单GB成本与实测对照 | 机场情报',
    description: '聚焦 15–30 元月付核心消费带，结合单位流量成本、客户端兼容性与实测截图证据评估性价比机场。',
    h1: '性价比机场评估：单位流量成本与线路配置对照',
    eyebrow: 'Pricing · Value',
    answerFirst: '性价比不等同于“绝对最低价”，而是单位流量成本、连接可用性与客户端自由度之间的平衡。在 15–30 元主流月付区间内，光速云极速版（25元/168GB，约 0.149元/GB）、一翻云轻享版（20元/150GB，约 0.133元/GB）、唯兔云普通版（19.9元/150GB，约 0.133元/GB）与微风乘风版（27元/200GB，约 0.135元/GB）均处于较低单价梯队且保留第三方订阅能力。',
    brandSlugs: ['guangsuyun', 'yifan', 'weitu', 'weifeng', 'ermao', 'u1s1'],
    sections: [
      {
        heading: '一、避免仅凭“月费最低”判断性价比',
        lead: '若缺少第三方订阅、或只有 40GB 流量且不支持退款，实际试错成本反而更高。',
        paragraphs: [
          '本页面将筛选范围锁定在常规月付性价比，避免与 `/pricing/cheap/` 的年付折算极限低价词产生互抢。建议用户结合自身每月实际流量（通常日常办公 80–150GB 足够，4K 视频需 300GB+）挑选对应档位。',
        ],
      },
    ],
    faqs: [
      { q: '为什么 25 元/168GB 往往比 10 元/40GB 更具性价比？', a: '前者单位 GB 成本低至 0.149 元且不锁定一年资金，配合 ×1 倍率足够支撑高清视频与日常 AI 工作流，发现线路不合时下月即可无损更换。' },
    ],
    relatedLinks: [
      { label: '便宜机场低价区间对比', href: '/pricing/cheap/' },
      { label: '光速云套餐选择指南', href: '/pricing/guangsuyun-plans/' },
    ],
  },
  {
    slug: 'high-traffic',
    title: '大流量机场推荐：500GB 至 2TB 重度用量与定制套餐汇总 | 机场情报',
    description: '汇总月流量 500GB、1TB、1.5TB 与 2TB 大流量机场套餐及单价，涵盖 AI 数据拉取、云盘同步与多人共用场景。',
    h1: '大流量机场数据库：500GB–2TB 重度流量套餐对照',
    eyebrow: 'Pricing · High Traffic',
    answerFirst: '对于重度 4K 流媒体、海外大文件同步或开发镜像拉取用户，站内多款品牌提供 500GB 至 2000GB/月的大流量月付档：例如光速云无界版（138元/900GB）、一翻云极致版（95元/1.2TB）、星岛梦旗舰 1T 版（130元/1TB）、唯兔云至尊版（119.9元/1TB）、U1S1/暮光/灵动（180元/1.5TB）以及隐形人钻石穹顶（185元/1.6TB）。',
    brandSlugs: ['yifan', 'weitu', 'xingdaomeng', 'guangsuyun', 'u1s1', 'muguang', 'yinxingren'],
    sections: [
      {
        heading: '一、大流量购买的倍率和协议核查要点',
        lead: '1TB 名义流量在不同倍率下的真实可用量差距极大。',
        paragraphs: [
          '购买大流量套餐时，应优先确认节点是否为 ×1 倍率（如光速云极速版、星岛梦、唯兔云、无忧链接明确标注 1 倍流量），否则若高频节点挂上 ×2 或 ×3 倍率，名义 1TB 实际只能用 300–500GB。',
        ],
      },
    ],
    faqs: [
      { q: '大流量用户适合买一次性不限时包还是包月？', a: '稳定每月消耗 500GB 以上务必买包月或年付，不限时包（0.6–1.0 元/GB）远贵于月付大流量档（0.08–0.15 元/GB）。' },
    ],
    relatedLinks: [
      { label: '线路倍率计算原理', href: '/network/multiplier/' },
      { label: '多设备机场推荐', href: '/recommend/multi-device/' },
    ],
  },
  {
    slug: 'coupons',
    title: '机场优惠码汇总与冲突核实记录（含光速云 AMM）| 机场情报',
    description: '集中展示 31 家品牌已收录的优惠码、折扣力度、适用限制与冲突提示，防止失效码误导下单。',
    h1: '机场优惠码注册表与折扣限制核查',
    eyebrow: 'Pricing · Coupons',
    answerFirst: '机场情报将全部品牌的推广优惠码与使用限制集中登记在统一数据表中。部分品牌存在多来源优惠码冲突（如灵猫 lingmao/lmao888、一翻云 1FLYYUN/yfy6666、SOGO 云 SOGO10000/sss777、全球云 qq88/qqy7777、隐形人 moon80/yxr888），且年付轻量款常被排除在折扣外，下单前请对照结算页实付金额。',
    brandSlugs: ['guangsuyun', 'firefly', 'shanyue', 'feimao', 'weifeng', 'dalaoyun'],
    sections: [
      {
        heading: '一、优惠码使用常见限制规则',
        lead: '并非所有套餐都能叠加上优惠码。',
        bullets: [
          '光速云（优惠码 AMM）：轻量版年付与 147 永久套餐明确标注“不打折”，极速版与定制版周期折扣为半年 9 折至三年 7 折。',
          'Firefly（优惠码 firefly）与闪跃（优惠码 shanyue）：新用户 8 折明确标注年付版不适用。',
          '大佬云、闪电鼠、云界线、榴莲云、环球梯：资料标注季付及以上 7 折。',
        ],
      },
    ],
    faqs: [
      { q: '输入优惠码显示无效或已过期怎么办？', a: '服务商促销活动具有时效性，如遇到优惠码失效或冲突，欢迎通过本站内容纠错页反馈，核实后我们将更新对应字段日期。' },
    ],
    relatedLinks: [
      { label: '光速云优惠码与套餐分析', href: '/pricing/guangsuyun-plans/' },
      { label: '提交优惠码纠错', href: '/corrections/' },
    ],
  },
  {
    slug: 'guangsuyun-plans',
    title: '光速云套餐选择与优惠码 AMM 说明（含 147 永久包分析）| 机场情报',
    description: '专用于对比光速云 7 档套餐（147永久/99轻量/25极速/34流光/68量子/138无界/680定制）、折算单价及 AMM 优惠码规则的专题页。',
    h1: '光速云套餐选择、优惠码与不限时方案深度拆解',
    eyebrow: 'Flagship Cluster · 光速云套餐',
    answerFirst: '选购光速云时，首次体验建议从 25 元/月的极速版（168GB，全节点 ×1）起步；仅作低频备用或出差应急可考虑 147 元致敬斯诺克永久套餐（247GB 不过期，单价约 0.595 元/GB）；99 元/年轻量版折合 8.25 元/月，适合月均 50–69GB 的轻量用户，但需留意 59GB/69GB 记录冲突与不退款规则。',
    brandSlugs: ['guangsuyun'],
    sections: [
      {
        heading: '一、七档套餐的真实适用人群划分',
        lead: '不同套餐除流量差异外，在折扣规则与线路描述上也有区别。',
        paragraphs: [
          '本页面聚焦光速云购前选型计算，完整品牌档案、三网实测图与字段审计请回到权威主页面【光速云深度评测（/brands/guangsuyun/）】查阅，避免内容重复。',
        ],
      },
    ],
    faqs: [
      { q: '光速云 147 元永久套餐可以使用优惠码 AMM 打折吗？', a: '光速云核实档案明确标注“致敬斯诺克147永久套餐”与“轻量版 99元/年”折扣项为“不打折”。' },
    ],
    relatedLinks: [
      { label: '回到光速云旗舰综合评测（主锚点）', href: '/brands/guangsuyun/', note: '查看完整 6 份实测截图与冲突审计' },
      { label: '光速云客户端使用教程', href: '/guides/guangsuyun-setup/' },
      { label: '光速云风险与退款说明', href: '/intelligence/guangsuyun-risk/' },
    ],
  },
];
