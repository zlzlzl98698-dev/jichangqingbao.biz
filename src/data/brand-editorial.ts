import type { Brand } from '../lib/data';

export interface BrandEditorialProfile {
  verdict: string;
  positioningAngle: string;
  advantages: string[];
  limitations: string[];
  suitableFor: string[];
  unsuitableFor: string[];
  peerComparisonNote: string;
  riskAndBuyingNotes: string[];
  faqs: { q: string; a: string }[];
}

const CUSTOM_PROFILES: Record<string, BrandEditorialProfile> = {
  guangsuyun: {
    verdict: '光速云（2020年运营）在老牌运营履历、7 档跨度套餐（含 147 元/247GB 永久包与 99 元/年轻量版）及自研+第三方双接入模式上具备综合优势，且拥有 6 份三网及单线程实测截图支撑；但存在 59GB/69GB 流量记录冲突，香港节点 OpenAI 仅 APP、Gemini 多数失败，且特殊套餐不支持退款。',
    positioningAngle: '2020年老牌综合型旗舰档案（双线路表述 + 双接入模式 + 多批次三网实测）',
    advantages: [
      '运营年份标注 2020 年，在 31 家收录品牌中处于最早梯队，具备 2026-08-11 与 2026-08-19 多运营商实测截图。',
      '同时提供官方自研客户端与 Clash / Shadowrocket 等第三方订阅导入，兼容全部主流系统。',
      '支付方式支持支付宝、微信与 USDT，套餐跨度涵盖 147 元一次性永久包至 680 元企业定制。',
    ],
    limitations: [
      '年付轻量版存在 59GB 与 69GB 原始记录冲突，且 99 元/年折合 8.25 元/月并非普通月付。',
      '2026-08-19 实测显示香港节点 Gemini 多失败、OpenAI 仅 APP 可用，且珠海联通单线程美国02出现 1.60KB 异常。',
      '特殊商品不支持退款，年付/永久包不打折。',
    ],
    suitableFor: ['看重 2020 年老牌运营背景与多档升级空间的用户', '需要同时兼容自研客户端与 Clash/Shadowrocket 的多设备用户', '需要支付宝/微信直接付款的常规用户'],
    unsuitableFor: ['期待 8 元左右就能按月单买的用户', '高度依赖香港节点直连 Gemini 或需要无条件试用退款的用户'],
    peerComparisonNote: '相比同为 2020 年运营的星岛梦（年付 96 元/60GB，月付 25 元/150GB 起），光速云在 25 元月付极速版给出 168GB（多 18GB）且保留自研客户端与更完整的 2026-08-19 三网实测档案；相比飞猫云、隐形人等仅专属客户端品牌，光速云保留了完整的第三方订阅灵活性。',
    riskAndBuyingNotes: ['下单前建议先购 25 元极速版月付测试本地晚高峰表现', '使用 Gemini 建议手动切换至新加坡节点', '确认特殊商品不支持退款后再购年付或 147 永久包'],
    faqs: [
      { q: '光速云 8 元一个月是普通月付套餐吗？', a: '不是。99 元/年的轻量版按 12 个月折算为 8.25 元/月，属于年付折算均价；单月起购门槛为 25 元/月的极速版（168GB）。' },
      { q: '光速云轻量版到底是 59GB 还是 69GB？', a: '光速云核实档案摘要行写 59GB，而详细套餐表均记录为 69GB/月。本站主表按详细套餐表标注 69GB 并明示冲突待核实。' },
      { q: '光速云支持 Clash Verge Rev 和 Shadowrocket 吗？', a: '支持。资料明确记录支持第三方订阅导入（Clash、Shadowrocket 等），同时也提供官方自研客户端。' },
    ],
  },
  muguang: {
    verdict: '暮光加速（2023年运营）主打 BGP 智能调度与全平台多设备同时在线，月付 20 元/120GB 起且涵盖 150GB–800GB 三档不限时包；但目前缺乏 2026-08-11 原始测速截图，且公开资料存在优惠码 muguang5555 与“无公开优惠码”文本冲突。',
    positioningAngle: '跨平台多设备与 BGP 智能调度路线',
    advantages: ['套餐档位齐全（9 档），涵盖年付轻量 109 元、月付 20–180 元及三款不限时大容量包。', '品牌资料强调覆盖 Windows/macOS/iOS/Android/Linux 全平台与 7×24 真人客服。'],
    limitations: ['缺少独立截图测速档案，仅有 2026-10-19 非晚高峰参考表。', '协议、节点总数及具体同时在线设备上限尚待核实，优惠码存在文本冲突。'],
    suitableFor: ['多设备同时在线的跨平台个人或小团队', '需要 400GB/800GB 大容量不限时备份流量的用户'],
    unsuitableFor: ['必须看到近期晚高峰真实测速截图才购买的用户'],
    peerComparisonNote: '月付起步 20 元/120GB 与 U1S1、灵动云、全球云同价位；相比灵动云，暮光不限时包定价 219/529/959 元略高于二猫云 99 元/100GB 小包，但提供了更高容量选项。',
    riskAndBuyingNotes: ['结账前在官网确认优惠码 muguang5555 是否生效', '无独立测速截图阶段建议仅先测试 20 元基础月付'],
    faqs: [
      { q: '暮光加速的 9 元/月起步价是怎么算的？', a: '指【暮光·年付轻量版】109 元/年（70GB/月）折算约 9.08 元/月；常规月付起价为 20 元/120GB。' },
      { q: '暮光加速支持第三方客户端吗？', a: '资料未限制为专属客户端，提及覆盖五大主流操作系统，具体订阅格式建议导入前确认。' },
    ],
  },
  feimao: {
    verdict: '飞猫云（2023年运营）主打“下载官方专属客户端登录即用”的新手极简路线，学生版年付 84 元（7 元/月，50GB/月），具备 2026-08-11 早间实测截图；核心限制在于不开放第三方订阅链接，无法导入 Clash 或 Shadowrocket。',
    positioningAngle: '新手免配置专属客户端模式代表',
    advantages: ['84 元/年学生版门槛低，月付 25 元起提供 150GB–1000GB 及 1000GB 不限时包。', '拥有 2026-08-11 08:52:30 CST 原始测速截图，免去新手配置规则的折腾。'],
    limitations: ['仅支持官方专属客户端，不支持 Clash、Shadowrocket、OpenClash 等第三方客户端与软路由。', '定位轻快连接而非顶级纯专线，2026-08-11 测速时间为早间非晚高峰。'],
    suitableFor: ['完全不想研究订阅链接、分流规则的新手或学生用户', '单设备轻度浏览与视频观看群体'],
    unsuitableFor: ['需要使用软路由（OpenWrt）或习惯 Clash Verge Rev / 小火箭的用户'],
    peerComparisonNote: '与无忧链接、SOGO 云、闪跃、全球云、隐形人同属“仅专属客户端”阵营；相比梯子云和光速云同时支持自研与通用订阅，飞猫云在第三方扩展性上受限明显。',
    riskAndBuyingNotes: ['购买前务必确认设备系统是否有官方专属客户端安装包（尤其 Linux 与路由器用户）', '优惠码 flycat888 适用档位以下单页为准'],
    faqs: [
      { q: '飞猫云可以导出订阅链接给小火箭（Shadowrocket）用吗？', a: '不可以。根据资料记录，飞猫云走专属客户端模式，下载官方 App 登录即用，不提供第三方订阅链接。' },
    ],
  },
  weifeng: {
    verdict: '微风网络（2023年运营）为 IEPL 专线 + VLESS 机场，支持第三方订阅并拥有 2026-07-19 50 节点完整测速截图；需注意其顶部摘要“7 元/50GB”与套餐表“清风年付 137 元/100GB（约 11.42 元/月）”存在冲突，且 07-19 实测图包含台湾02（0.00B）与日本05（8.00KB）异常点。',
    positioningAngle: '入门级 IEPL 专线与历史 50 节点实测透明度分析',
    advantages: ['拥有 2026-07-19 晚间 18:38 50 节点 VLESS 实测图，香港 01–15 节点测速表现突出。', '支持 7×24 在线与夜间 AI 客服值守，兼容主流第三方客户端。'],
    limitations: ['年付入门价存在 7 元/50GB 与 137 元/100GB（11.42元/月）记录冲突（CF-003）。', '2026-07-19 截图中个别节点（台湾02、日本05）出现 0B/KB 级无响应情况。'],
    suitableFor: ['注重香港节点吞吐、需要 Clash/v2rayN 等第三方客户端的用户', '预算在 11–27 元区间的常规用户'],
    unsuitableFor: ['以为仅需 7 元/月即可买到现行套餐的用户（请按 137 元/年表核对）'],
    peerComparisonNote: '同属 IPLC/IEPL+VLESS 系且常与 Firefly 对比；微风网络保留了第三方订阅能力（Firefly 2026-10 起改为专属客户端），更适合习惯 Clash/Shadowrocket 的用户。',
    riskAndBuyingNotes: ['乘风月付 27 元/200GB 相比同价位 25 元/150–168GB 竞品多出 32–50GB 流量', '下单前核实优惠码 flat888 是否支持年付清风档'],
    faqs: [
      { q: '微风网络年付到底是 7 元/月还是 11 元/月？', a: '详细套餐表与正文均显示清风年付为 137 元/年（100GB/月，折合 11.42 元/月），顶部“7元/50GB”摘要属来源冲突待核实项。' },
    ],
  },
  xingdaomeng: {
    verdict: '星岛梦（2020年运营）是少数自 2020 年延续至今的老牌专线机场，全节点 1 倍流量且明确不限设备数量，覆盖韩国及东南亚小众地区并有 2026-08-11 测速截图；需留意其正文标注 Trojan 而 08-11 截图显示 Shadowsocks 的协议差异。',
    positioningAngle: '2020年老牌多设备不限终端与亚太扩展地区覆盖',
    advantages: ['2020 年起运营，明确标注 1 倍流量与不限设备数量，适合多终端家庭共享。', '节点除港台日新美外还覆盖韩国与东南亚，兼具 96 元年付小包及 100/300/1000GB 不限时套餐。'],
    limitations: ['存在 Trojan 与 2026-08-11 截图 Shadowsocks 的协议记录冲突（CF-006）。', '支付方式与退款政策缺省，需在官网注册后核对。'],
    suitableFor: ['多设备家庭共享且需要 1 倍透明计费的用户', '有韩国或东南亚节点需求且偏好老牌背景的用户'],
    unsuitableFor: ['需要官方自研一键客户端的新手（未标注自研 App，主要依赖第三方订阅）'],
    peerComparisonNote: '与光速云同为 2020 年老牌；星岛梦年付 96 元/60GB 与光速云 99 元/69GB 接近，月付 25 元档星岛梦 150GB 略少于光速云 168GB，但星岛梦额外提供 300GB/1000GB 多档不限时包。',
    riskAndBuyingNotes: ['2026-08-11 测速时间为凌晨 01:48，不能直接等同晚高峰表现', '先通过 25 元月付测试节点实际协议与可用性'],
    faqs: [
      { q: '星岛梦支持几台设备同时在线？', a: '品牌资料明确标注“1 倍流量且不限设备使用”，适合多台终端同时在线。' },
    ],
  },
  yinxingren: {
    verdict: '隐形人（2024年运营）主打企业级 IPLC 专线与自带专属客户端，不提供 Clash/Shadowrocket 订阅链接；站内暂无任何原始测速截图，且 2026-10-19 测速表全为空值（—），同时存在月付 100GB/144GB 及优惠码 moon80/yxr888 冲突。',
    positioningAngle: '纯专属客户端模式与高透明度“待核实缺口”档案',
    advantages: ['套餐档位细致（月付 24–185 元、年付 109 元及三档一次性包），无复杂订阅配置。', '品牌资料宣称 60+ 节点清单及支持主流流媒体和 ChatGPT。'],
    limitations: ['无任何可用实测测速截图与延迟/带宽数值，性能指标完全待核实。', '不支持第三方客户端；同时存在优惠码（moon80 vs yxr888）、基础流量（100GB vs 144GB）与设备限制冲突（CF-015）。'],
    suitableFor: ['明确排斥第三方客户端折腾、且愿意自行试错小额套餐的用户'],
    unsuitableFor: ['需要客观测速证据或必须在路由器/Clash 中使用的用户'],
    peerComparisonNote: '汇总资料常将隐形人与梯子云比较：两家均有 60+ 节点与专属客户端，但梯子云同时保留第三方通用订阅并有 7.4 元/月低门槛年付，隐形人则完全封闭订阅且月付 24 元起步较高。',
    riskAndBuyingNotes: ['“1 小时修复承诺”属于品牌方自述（vendor），非独立 SLA 担保', '缺少实测数据前勿直接购买 549/1199 元大额一次性包'],
    faqs: [
      { q: '隐形人有实测速度数据吗？', a: '没有。当前资料库中隐形人既无 2026-08-11 截图，其 2026-10-19 参考表全部地区也均为未提供（—）。' },
    ],
  },
  ermao: {
    verdict: '二猫云（2023年运营）定位全线 IEPL 专线与独家定制客户端（同时支持第三方订阅），不限设备连接数，具备 2026-08-11 上午测速截图；需注意介绍文案称缺失新加坡节点而 2026-10-19 测速表却列出新加坡数据，且未对 Claude/Gemini 给出明确解锁承诺。',
    positioningAngle: '不限设备专线与“新加坡节点矛盾”披露档案',
    advantages: ['既有独家定制客户端，也兼容第三方订阅导入，且不限设备连接数。', '不限时套餐 99 元/100GB 与年付小包 89 元/60GB 价格结构清晰，具备 2026-08-11 测速截图。'],
    limitations: ['存在“介绍称缺少新加坡节点 vs 测速表含新加坡 46ms/407Mbps”的矛盾（CF-004）。', '官方未对 Claude 与 Gemini 给出稳定解锁承诺，依赖度高的用户需实测。'],
    suitableFor: ['多设备家庭共享且主要访问 YouTube、Netflix、ChatGPT 的用户'],
    unsuitableFor: ['强依赖稳定使用 Claude/Gemini 或明确要求新加坡专用节点（请先核实节点列表）的用户'],
    peerComparisonNote: '月付 20 元/130GB 相比同价位 U1S1（20 元/120GB）多 10GB，略少于一翻云（20 元/150GB），且多出一款 99 元/100GB 的低门槛不限时包。',
    riskAndBuyingNotes: ['2026-08-11 测速截图协议为 Shadowsocks 而介绍写 VLESS，导入客户端时留意订阅下发协议', '长期合约（如三年付）仅在正文提及而缺乏价目表，建议从月付起步'],
    faqs: [
      { q: '二猫云到底有没有新加坡节点？', a: '存在资料冲突：介绍文案写缺少新加坡站，但 2026-10-19 测速表却记录了新加坡 46ms/407Mbps，购买前建议在客户端列表确认。' },
    ],
  },
  wuyou: {
    verdict: '无忧链接（2025年运营）面向跨境电商与轻度用户，主打全线无倍率、不限速、不限设备与 TikTok 跨区直连，具备 2026-07-18 50 节点速度与御三家流媒体实测图；2026年10月起全面改为官方专属客户端，不再支持第三方订阅。',
    positioningAngle: '2026年10月切换专属客户端与御三家实测（含 HK01 送中）分析',
    advantages: ['2026-07-18 实测图证实 50 节点 Netflix 与 Disney+ 普遍按区解锁，且 YouTube 除 HK01 送中外均正常。', '年付 MINI 79 元（40GB/月，折合 6.58 元/月）及 108 元/100GB 不限时包门槛极低，全节点 1 倍率。'],
    limitations: ['2026年10月起改用专属客户端，已不提供 Clash/Shadowrocket 订阅链接。', '2026-07-18 实测图中新加坡02仅 17.59KB、香港01 YouTube 送中（CN），且 2025 年上线运营史较短。'],
    suitableFor: ['单人轻度跨境电商或 TikTok 基础访问且接受专属 App 的用户', '需要 79 元低预算备用线路的用户'],
    unsuitableFor: ['重度高流量办公（入门年付仅 40GB/月）或依赖第三方 Clash/软路由生态的用户'],
    peerComparisonNote: '同样在 2026 年 10 月后仅支持专属客户端的品牌还有飞猫云、灵猫网络、Firefly；无忧链接的优势是拥有 2026-07-18 的流媒体实测截图证据，透明度高于无实测品牌。',
    riskAndBuyingNotes: ['2025 年新品牌建议优先测试 19 元舒心月付或 108 元 100G 不限时包', '专属客户端不适用路由网关场景'],
    faqs: [
      { q: '无忧链接还能导入 Clash 或小火箭吗？', a: '不能。资料标注自 2026 年 10 月起直接采用官方专属客户端，不再提供第三方订阅链接。' },
    ],
  },
  weitu: {
    verdict: '唯兔云（又名 V2云，2023年运营）为 IPLC 专线机场，全节点 1 倍流量、不限速、不限设备，支持第三方客户端并拥有 2026-08-11 测速截图；其 14.9 元/100GB 节假日限时月付和 19.9 元/150GB 常规月付在专线档中定价较为灵活。',
    positioningAngle: 'IPLC 专线 + 14.9 元灵活月付阶梯 + 不限时全覆盖',
    advantages: ['套餐覆盖极全（10 档）：年付 79.9 元限量款、14.9 元限时月付、19.9 元普通版及 100/200/500GB 不限时包。', '明确支持第三方订阅导入（Trojan/SS），不限设备数量且具备 2026-08-11 午后实测截图。'],
    limitations: ['14.9 元月付属于“节假日限时开启”档位，平时常规月付需按 19.9 元/150GB 预算。', 'AI 与流媒体支持主要来自品牌方资料声明，尚未纳入独立专项实测批次。'],
    suitableFor: ['看重不限设备、支持 Clash/小火箭且预算在 15–30 元月付的个人及家庭用户'],
    unsuitableFor: ['必须看到独立 OpenAI/Gemini 分节点实测截图才下单的用户'],
    peerComparisonNote: '常与星岛梦、一翻云对比：唯兔云常规月付 19.9 元/150GB 与一翻云 20 元/150GB 几乎持平，但唯兔云额外提供 100 元/100GB、160 元/200GB、340 元/500GB 三档较低单价的不限时包。',
    riskAndBuyingNotes: ['下单前确认 14.9 元节假日档当前是否开放', '不限时包 500GB 档（340 元）单价约 0.68 元/GB，适合低频长期备用'],
    faqs: [
      { q: '唯兔云和 V2 云是同一家机场吗？', a: '是的，资料与别名记录显示唯兔云又名 V2 云（v2yun），两者指向同一品牌实体。' },
    ],
  },
  firefly: {
    verdict: 'Firefly（合并原 Firefly 与 Firefly 萤火虫记录）主打 IPLC 专线与 VLESS、原生 IP 及不限设备，2026 年 10 月起改用官方专属客户端且不提供订阅链接；目前站内暂无 2026-08-11 实测截图，仅有 2026-10-19 非晚高峰参考记录与多周期历史价格档案。',
    positioningAngle: '实体合并档案（Firefly + 萤火虫）与 2026-10 客户端政策变更',
    advantages: ['支持不限设备连接，年付 96 元/60GB 起，常规月付（25/45/85/150 元）支持新用户 8 折码 firefly。', '历史资料记录支付宝与 USDT 支付及季付至三年付多周期阶梯。'],
    limitations: ['2026年10月起改用官方专属客户端，不支持第三方订阅导入（CF-002）。', '缺少 2026-08-11 实测 PNG 截图，且微风/飞鸟/一云梯同系关系与“8年团队”说法均属历史资料自述。'],
    suitableFor: ['偏好专属客户端免配置、且对原生 IP 流媒体和 AI 工具访问有需求的个人用户'],
    unsuitableFor: ['需要 Clash/Shadowrocket 订阅、或只使用微信支付的用户（历史记录标注无微信）'],
    peerComparisonNote: '合并 Firefly 萤火虫后可见其与微风网络同属关联技术系谱：微风保留了第三方订阅且月付 27 元/200GB，Firefly 则走专属客户端且月付 25 元/150GB（可用 8 折码）。',
    riskAndBuyingNotes: ['优惠码 firefly 明确不适用于年付版（96 元）', '建议先以月付 Lite 档实测后再考虑多季/年付'],
    faqs: [
      { q: 'Firefly 和 Firefly 萤火虫是两家不同的机场吗？', a: '不是。经核对两者联盟主域名、套餐命名（Lite/Plus/Blaze/Nova）及优惠码 firefly 完全一致，本站已合并为同一实体并保留双历史代码对比。' },
    ],
  },
};

export function getBrandEditorial(brand: Brand): BrandEditorialProfile {
  if (CUSTOM_PROFILES[brand.slug]) {
    return CUSTOM_PROFILES[brand.slug];
  }

  const hasImages = brand.testImages.length > 0;
  const hasMonthly = brand.plans.some((p) => p.billingCycle === '月付');
  const hasNoExpiry = brand.plans.some((p) => p.billingCycle === '一次性付费');
  const isExclusive = brand.thirdPartyClientSupport === false;
  const isUnknownClient = brand.thirdPartyClientSupport === null;
  const isLowBudget56 = brand.plans.some((p) => p.monthlyEquivalent === 5.6);

  const verdict = isLowBudget56
    ? `${brand.brandName}（${brand.foundedYear ?? '年份待核实'}年运营）属于资料中门槛最低的 5.6 元/月年付档（60GB/月）IEPL 专线方案，支持自研客户端与第三方订阅导入；但当前缺乏多档月付价目表及独立测速截图，适合作为极低预算的待实测备选。`
    : `${brand.brandName}（${brand.foundedYear ? `${brand.foundedYear}年运营` : '运营年份待核实'}）以 ${brand.networkTypes.join('、')} 为主要技术定位。${hasImages ? '站内已归档其单日实测截图快照，' : '目前尚缺独立测速截图证据，'}${isExclusive ? '仅支持官方专属客户端而无法导入第三方订阅，' : isUnknownClient ? '客户端兼容方式尚待核实，' : '同时保留第三方订阅兼容能力，'}购前需重点核对其数据状态与冲突记录。`;

  const advantages: string[] = [];
  if (hasImages) advantages.push(`具备 ${brand.testImages[0].testedAt} 原始测速截图记录，节点表现有可查快照。`);
  if (brand.thirdPartyClientSupport === true) advantages.push('支持第三方通用客户端订阅导入，便于在 Clash Verge Rev、v2rayN 或 Shadowrocket 中做规则分流。');
  if (brand.officialClient) advantages.push('提供自研官方客户端，能降低新手安装与导入门槛。');
  if (hasNoExpiry) advantages.push('包含一次性不限时流量包，适合低频备用或跨月用量波动较大的用户。');
  if (brand.slug === 'kexin') advantages.push('品牌资料诚实披露“AI 与流媒体目前缺乏统一实测数据”，透明度在同价位中较突出。');
  if (brand.slug === 'sujie') advantages.push('25 元/150GB 档中明确针对 ChatGPT/Claude/Gemini 场景，且提醒 AI 可用性受 IP 与规则限制。');
  if (brand.slug === 'tiziyun') advantages.push('少数同时兼顾“小白一键登录自研客户端”与“第三方通用订阅双支持”的 2025 年品牌。');
  if (brand.slug === 'lingdong') advantages.push('拥有 2026-07-20/21 珠海联通 60 测速/60 解锁摘要，且 OpenAI 实测表现较好。');
  if (advantages.length === 0) advantages.push(`定位聚焦 ${brand.networkTypes[0]}，具备明确的优惠码与入门报价框架。`);

  const limitations: string[] = [];
  if (!hasImages && brand.historicalTests.length === 0) limitations.push('暂无可核实实测速度与延迟记录，速度体验属于待核实状态。');
  if (isExclusive) limitations.push('仅限官方专属客户端使用，不开放订阅链接，无法接入 Clash、Shadowrocket 或 OpenWrt 软路由。');
  if (brand.fieldConflicts.length > 0) limitations.push(`存在来源冲突或格式异常（见审计编号 ${brand.fieldConflicts.join(', ')}），下单前需以官网为准。`);
  if (!hasMonthly) limitations.push('当前仅记录年付起步档，缺乏小额月付试错套餐明细。');
  if (brand.slug === 'liulianyun') limitations.push('5.6 元档中唯一未在品牌资料明确标注具体协议类型的品牌。');
  if (brand.slug === 'lingdong') limitations.push('2026-07-20/21 实测显示 TikTok 多失败、美国01 整节点失败且新/台 YouTube 出现送中，至尊定制流量遭截图遮挡。');
  if (brand.slug === 'langwang') limitations.push('入门套餐流量标注“截150G”（截图遮挡），且协议、节点、客户端与实测均缺省。');
  if (limitations.length === 0) limitations.push('AI 与流媒体解锁、退款条款或支付方式等部分细节尚需进一步独立核实。');

  const suitableFor: string[] = [];
  if (isLowBudget56) suitableFor.push('预算极其有限（约 5.6 元/月年付）、仅做基础网页查询与轻量流量使用的用户');
  else if (hasMonthly) suitableFor.push('希望先按月付费测试本地网络连通率的用户');
  if (brand.thirdPartyClientSupport === true) suitableFor.push('习惯使用 Clash Verge Rev、v2rayN、Shadowrocket 管理分流规则的用户');
  if (isExclusive) suitableFor.push('不愿配置订阅链接、倾向登录官方 App 一键连接的新手用户');
  if (hasNoExpiry) suitableFor.push('用量不固定、需要不限时流量包作备用通道的用户');
  if (suitableFor.length === 0) suitableFor.push('对当前品牌特定价位或线路有明确匹配需求、且愿意先行小额验证的用户');

  const unsuitableFor: string[] = [];
  if (isExclusive) unsuitableFor.push('需要使用 OpenWrt 软路由或第三方开源客户端的用户');
  if (!hasImages) unsuitableFor.push('要求必须先查看客观测速截图才决策的用户');
  if (brand.affiliateStatus === 'format-anomaly') unsuitableFor.push('对链接格式异常敏感或未事先验证跳转有效性的用户');
  if (brand.foundedYear && brand.foundedYear >= 2025) unsuitableFor.push('只考虑 3 年以上老牌运营记录、不愿承担新品牌磨合风险的用户');
  if (unsuitableFor.length === 0) unsuitableFor.push('期望无条件退款或绝对不波动保证的用户');

  const peerComparisonNote = isLowBudget56
    ? '在 5.6 元/月（60GB 年付）同一规格梯队中，大佬云、闪电鼠、云界线、榴莲云、环球梯参数高度接近：若需要明确的 VLESS 协议与常规哈希链接，闪电鼠与大佬云更直接；榴莲云协议未明；云界线与环球梯链接缺少 #/，访问前需确认页面正常加载。'
    : brand.slug === 'jilian' || brand.slug === 'guangnian'
      ? '极连云与光年梯同处 18 元/月 IEPL 档位：光年梯提供 110GB（比极连云 100GB 多 10GB）且明确标注 VLESS，极连云成立于 2024 年比 2025 年的光年梯多一年记录；两者均有 2026-08-11 测速截图。'
      : brand.slug === 'kexin' || brand.slug === 'sujie' || brand.slug === 'sogo'
        ? '在 25 元/150GB 月付梯队中，SOGO 云覆盖 15 个地区但强制专属客户端；可信云与速界均开放第三方订阅，其中可信云透明标明缺乏 AI 实测，速界则主打 AI 工具访问场景，亦可与光速云 25 元/168GB 极速版横向对比。'
        : `在同价位与同类型机场中，建议重点核对 ${brand.brandName} 与光速云、星岛梦、唯兔云在月付流量单价、是否支持第三方订阅以及历史实测证据完整性上的差异。`;

  const riskAndBuyingNotes = [
    brand.affiliateStatus === 'historical-unverified'
      ? '本品牌来源为 2026-08-09 历史品牌库记录，当前套餐、优惠码及链接有效性均待复核，切勿直接大额预付。'
      : '建议优先使用月付或最小档位完成本地运营商晚高峰实测，确认满意后再考虑长周期方案。',
    brand.fieldConflicts.length > 0
      ? `注意核对已记录的字段冲突（${brand.fieldConflicts.join(' / ')}），所有优惠码与节点覆盖以官方下单页面为准。`
      : '保留注册邮箱与订单凭证，避免在未核实退款条款前购买不可退换的特殊或定制套餐。',
  ];

  const faqs: { q: string; a: string }[] = [
    {
      q: `${brand.brandName} 支持 Clash 或 Shadowrocket 第三方订阅吗？`,
      a:
        brand.thirdPartyClientSupport === true
          ? `支持。资料显示 ${brand.brandName} 支持第三方客户端订阅导入，可配合 Clash Verge Rev、v2rayN、Shadowrocket 等工具使用。`
          : brand.thirdPartyClientSupport === false
            ? `不支持。${brand.brandName} 采用官方专属客户端模式，不提供第三方订阅链接。`
            : `待核实。当前收录资料尚未明确确认 ${brand.brandName} 是否开放第三方通用订阅。`,
    },
    {
      q: `${brand.brandName} 的测速和解锁数据可靠吗？`,
      a: hasImages
        ? `本站归档了 ${brand.brandName} 于 ${brand.testImages[0].testedAt} 的原始测速截图，它能证明当次测试快照结果，但不能单独证明长期晚高峰稳定性。`
        : `${brand.brandName} 目前缺乏可核实的独立测速截图或分平台 AI/流媒体实测数据，本站将其保留为待核实状态而不作虚构。`,
    },
  ];

  return {
    verdict,
    positioningAngle: `${brand.networkTypes[0]} · ${brand.dataStatus}档案`,
    advantages,
    limitations,
    suitableFor,
    unsuitableFor,
    peerComparisonNote,
    riskAndBuyingNotes,
    faqs,
  };
}
