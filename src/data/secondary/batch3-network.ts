import type { TopicEnrichment } from './enrich';

export const NETWORK_ENRICHMENTS: Record<string, TopicEnrichment> = {
  iepl: {
    tables: [
      {
        title: 'IEPL 跨境专线 vs 普通公网中转与直连核心工程对照',
        columns: ['技术层要素', 'IEPL 国际以太网专线', 'BGP 公网隧道中转', '普通公网直连'],
        rows: [
          ['跨境链路介质', '运营商二层私有内网点对点专线', '公网跨境隧道 + 国内多线接入加速', '本地宽带直出国际互联出口'],
          ['晚高峰表现', '极少因公共出口拥塞产生剧烈抖动', '优质入口表现好，偶尔受骨干跨境波动影响', '20:00–23:30 易重传、降速与丢包'],
          ['是否自动解锁 AI', '否（专线仅负责前段稳定传输，解锁看末端落地）', '否（同样看出口 IP 所在国家与信誉）', '否'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、选购标称 IEPL 机场时要核查的三项工程真相',
        lead: '“IEPL 专线”是常见的营销卖点，但实际节点群里经常采用“主力 IEPL + 备份中转”混合部署。',
        paragraphs: [
          '站内老牌品牌如光速云、星岛梦，以及主流方案如唯兔云、暮光加速等均涉及 IEPL 或混合专线架构描述。真正在工程层面考察 IEPL 时不要只听信名字：1) 查看低倍率和热门地区节点是否在晚高峰仍具备稳态带宽；2) 核对是否包含国内多线（电信/联通/移动）入口适配；3) 检查常用专线节点的流量消耗倍率是否达到 2x–3x 防止误耗月费额度。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '专线深度选型与实测',
        intent: '技术科普与选型',
        articles: [
          { title: 'IEPL 专线服务选择与代表品牌横向对比', targetKeyword: 'IEPL机场怎么选', plannedUrl: '/network/iepl/recommendations/', summary: '对比价格、倍率与第三方客户端兼容性', existingHref: '/network/iepl/recommendations/' },
          { title: 'IPLC 专线 vs IEPL 专线底层技术差异', targetKeyword: 'IEPL和IPLC区别', plannedUrl: '/network/iplc/', summary: '解析二层以太网帧与传统私有电路异同', existingHref: '/network/iplc/' },
        ],
      },
    ],
    faqs: [
      { q: '买 IEPL 专线机场就意味着永不丢包、速度绝对第一吗？', a: '不能保证绝对不波动。如果国内省际到专线入口这段先发生拥塞、或者落地机器本身负载过高，用户端依然会感觉到慢。' },
      { q: 'IEPL 线路一定支持 ChatGPT 和 Gemini 吗？', a: '不一定。专线只管“把数据安全快速送到香港/新加坡机房”，能不能打开 AI 取决于落地的出口国家（如非香港）及 IP 是否进入风控黑名单。' },
      { q: '为什么有些机场只把香港和新加坡节点标为 IEPL，冷门欧洲节点却走普通中转？', a: '因为跨国私有专线按距离与带宽计费极高，运营商通常把成本投入在用户占比超过 80% 的亚太核心路由上以控制整体套餐月费在 20–30 元区间。' },
    ],
  },

  recommendations: {
    tables: [
      {
        title: '标注专线架构与具备多端/实测支撑的候选品牌参考维度',
        columns: ['品牌', '运营年份', '主力月付门槛', '客户端自由度', '可查实证状态'],
        rows: [
          ['光速云', '2020', '25元/168GB（另99元/年折8.25/月）', '自研+第三方双支持', '2026-08-19 三网及 62 节点解锁原图'],
          ['星岛梦', '2020', '25元/150GB', '支持第三方订阅', '2020 老牌，暂无已核实异常记录'],
          ['唯兔云', '2023', '19.9元/150GB（节假日 14.9元）', '支持第三方订阅', '2026-08-11 实测图归档'],
          ['暮光加速', '2023（待对照）', '28元起', '支持第三方订阅', '历史测试资料 + CF 优惠与起步价冲突公开'],
        ],
      },
    ],
    sections: [
      {
        heading: '三、什么时候根本无需多花钱买 IEPL 专线，普通 BGP 中转就够？',
        lead: '如果你主要做文本资料查询、非实时代码生成或错峰下下载，中低价位高质量 BGP 中转更具性价比。',
        paragraphs: [
          'IEPL 真正大幅拉开差距的时间窗是在晚间 20:00–23:30 的跨境高峰、实时视频会议、SSH 敲命令行以及高画质无卡顿 4K 观影。对预算锁定在 10–18 元/月且错峰使用居多的用户而言，18 元档的极连云、光年梯或限时月付同样能顺畅跑完日常需求。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '专线衍生比较与倍率',
        intent: '购买决策',
        articles: [
          { title: '节点线路倍率计算（0.5x / 1x / 2x）避坑', targetKeyword: 'IEPL节点倍率', plannedUrl: '/network/multiplier/', summary: '核算高频专线扣量速度防止超额', existingHref: '/network/multiplier/' },
          { title: '全站 39 份网络测速真实截图证据索引', targetKeyword: 'IEPL机场实测', plannedUrl: '/network/speedtest/', summary: '对比测试时段、宽带与 0KB 节点', existingHref: '/network/speedtest/' },
        ],
      },
    ],
    faqs: [
      { q: '本站 IEPL 选型推荐会偏袒高价品牌吗？', a: '不会。即使在 IEPL 领域也明确区分 19.9 元、25 元与高端定制的适用面，强调个人日常无需盲目购买数百元定制专线。' },
      { q: '同时写着“IEPL/BGP 混合”的机场，我怎么知道连上的节点是不是专线？', a: '大多数机场会在节点名称里明确后缀标记（如 `IEPL`、`IPLC`、`专线` 或倍率如 `2x`），亦可看晚高峰连续多日连通延迟方差确认。' },
    ],
  },

  iplc: {
    sections: [
      {
        heading: '二、IPLC 与 IEPL 在实际个人使用体验中的真实共性与差异',
        lead: '对末端使用者而言，无需纠结运营商底层接口字面定义，二者都是高成本跨海专用传输通道的体现。',
        paragraphs: [
          '在电信通信术语中，IPLC 更侧重传统的三层或底层私有电路，而 IEPL 强调以以太网帧形态透传端到端业务并具备更弹性的带宽扩容调度能力。商业机场对外往往统一把此类绕开普通公网拥塞的高等级路线标注为 IPLC/IEPL。购入时更值得你关心的是入口国内城市分布（深港、沪日、京韩等）以及对应流量消耗倍率。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '传输层专有技术库',
        intent: '术语百科',
        articles: [
          { title: 'IEPL 专线技术机制及使用条件说明', targetKeyword: 'IEPL和IPLC', plannedUrl: '/network/iepl/', summary: '从原理层面看懂内网专线成本与局限', existingHref: '/network/iepl/' },
          { title: 'BGP 多线与单线中转差异分析', targetKeyword: 'BGP中转机场', plannedUrl: '/network/bgp/', summary: '了解国内多运营商入口接入调优', existingHref: '/network/bgp/' },
        ],
      },
    ],
    faqs: [
      { q: '有些机场把节点名叫 IPLC 但月费只要几块钱，是真的吗？', a: '真正的跨国私有电路硬件租金高昂，月费极低（如 5–6 元）且标称不限流量的产品基本不可能是全量真 IPLC 专线，大概率只为极少数低速入口或借用宣传词汇。' },
      { q: 'IPLC 通道上是不是所有地区节点都一定快？', a: '物理延时由光缆总长决定：深港 IPLC/IEPL 可低至 20ms 左右，但如果要绕到美国甚至欧洲，跨太平洋/欧亚光缆自然耗时仍须 130–200ms。' },
    ],
  },

  bgp: {
    sections: [
      {
        heading: '二、为什么中国大陆三网宽带用户需要关注入口“BGP 多线调度”？',
        lead: '电信、联通与移动三大运营商各自拥有独立国际出口与省际网间结算边界，“单线好不代表三网都快”。',
        paragraphs: [
          '在站内真实 2026-08-19 光速云同日三网评测中可以直观看到，不同运营商测同一组节点的响应曲线各有侧重。BGP 多线中转的优势在于：国内入口服务器同时接入三家骨干网络，无论用户家里安装的是移动宽带、公司拉的电信专线还是学校宿舍的校园联通，都能先在省内或近邻城市以最低延迟就近进入机场国内服务器，再统一送出国。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '接入与转发路由分析',
        intent: '架构科普',
        articles: [
          { title: '普通中转线路与三网优化原理', targetKeyword: '中转机场原理', plannedUrl: '/network/transit/', summary: '对比单线入口与 BGP 多线的稳定差', existingHref: '/network/transit/' },
          { title: '公网直连线路为什么在晚高峰易卡顿？', targetKeyword: '直连和中转区别', plannedUrl: '/network/direct/', summary: '分辨低价直连与多线中转边界', existingHref: '/network/direct/' },
        ],
      },
    ],
    faqs: [
      { q: '家里是长城宽带、广电或校园网这种二级宽带，选 BGP 多线中转有用吗？', a: '非常有用！三级宽带自身出国路由极差，先就近连入国内具备三大网 BGP 互联的大城市入口机再加密中转出海，往往能从完全打不开变成流畅使用。' },
      { q: '怎么辨别机场的 BGP 入口节点离自己近不近？', a: '查看官方或客户端测速界面提供的地区节点延迟：如果同个香港节点在电信环境下延迟能稳在 25–40ms 且各省份差不大，基本说明入口分布合理。' },
    ],
  },

  transit: {
    sections: [
      {
        heading: '二、公网中转机场为什么能把价格压在 15–20 元又能跑流畅？',
        lead: '中转机充当“国内可靠桥梁”，大幅降低了本地宽带直接穿越国际民用出口时的丢包。',
        paragraphs: [
          '即便后端使用的是性价比很高的境外标准机房，只要前端配合了一台国内大带宽优质中转机器建立 TLS/Reality 长连接或高效传输协议（如 Hysteria 2 / Trojan），抗晚高峰丢包能力立刻上台阶。全站像极连云、光年梯（18元档）、一翻云、U1S1（20元档）与唯兔云（19.9元）都具备典型中转优势及 2026-08-11 实测支撑。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '中转与专线对照',
        intent: '技术区分',
        articles: [
          { title: 'BGP 多线与单线中转差异解析', targetKeyword: 'BGP中转', plannedUrl: '/network/bgp/', summary: '检查跨运营商兼容性', existingHref: '/network/bgp/' },
          { title: '15 元–25 元常规月付实测套餐对照', targetKeyword: '便宜中转机场', plannedUrl: '/pricing/monthly/', summary: '筛选支持月付验证的标准中转品牌', existingHref: '/pricing/monthly/' },
        ],
      },
    ],
    faqs: [
      { q: '中转机在国内中转，会增加被看光内容的安全隐患吗？', a: '正规代理采用客户端到目标境外落地端加密或标准分段 TLS 认证转发；个人层面更关键的是使用正版开源客户端与 HTTPS 全程加密站点，绝不安装第三方不可信根证书。' },
      { q: '同一家机场既有中转又有直连节点时怎么快速在面板识别？', a: '通常会按地区名称加上“中转 / Transit / 倍率”或按不同区域分群组标示，亦可在晚高峰 21 点亲自点击连接视频验证丢包差距。' },
    ],
  },

  direct: {
    sections: [
      {
        heading: '二、直连线路在什么条件下表现尚可，又在什么时候彻底失灵？',
        lead: '清晨、工作日白天与南方联通/移动直连日本美西优化线偶尔能跑高带宽，但晚间几乎无冗余。',
        paragraphs: [
          '在低成本节点池或下载专用的 `0.1x–0.5x` 低倍率节点里，仍能见到公网直连形态。当当地宽带本身走 CN2 GIA / 9929 / CMI 优质骨干出境、且处于凌晨低并发时段时，直连由于省去了一跳国内服务器，绝对延迟有时还挺亮眼；但一旦遇到晚间民用国际出口排队拥塞或端到端 TCP/UDP QoS 严打，直连节点的重传率会暴涨到连网页都要刷新好几次。因此它适合作为低耗补充，不宜充当唯一主力工作线。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '线路升级路线',
        intent: '避坑升级',
        articles: [
          { title: '如何从直连平滑升级到 BGP 中转或 IEPL 专线', targetKeyword: '直连太卡怎么办', plannedUrl: '/network/iepl/', summary: '理解私有通道带来的晚高峰提稳价值', existingHref: '/network/iepl/' },
          { title: '节点速度慢且丢包排查指南', targetKeyword: '晚高峰网速慢', plannedUrl: '/diagnostics/slow-speed/', summary: '排查本地运营商路由波动与换线方案', existingHref: '/diagnostics/slow-speed/' },
        ],
      },
    ],
    faqs: [
      { q: '用直连机场配合 Hysteria 2 等基于 QUIC/UDP 的加速协议能彻底替代专线吗？', a: 'Hysteria 2 在轻微拥塞下抢带宽与抗丢包表现确实强于传统 TCP，但如果当地运营商直接针对高并发海外 UDP 端口触发严厉 QoS 限速或断流，依然难以媲美稳定私有中转或专线。' },
      { q: '我买的不限时大包主要是下载大安装包用，直连低倍率节点值得用吗？', a: '若是在白天非高峰时段且节点标记为 0.2x 或 0.5x，用来下载开源镜像文件能大幅节省主流量，非常合算。' },
    ],
  },

  'hong-kong': {
    sections: [
      {
        heading: '二、香港节点的优势天花板与明确的 AI 禁令红线',
        lead: '香港节点是你日常最快的外网冲浪通道，但同时也是 ChatGPT 与 Gemini 报错的高发陷阱。',
        paragraphs: [
          '实测基线数据显示，香港地区节点（如光速云 2026-10-19 记录约 21–27ms）几乎包揽所有机场延迟最低的绿字前排。当你的任务是查 Google 学术、下 GitHub Releases、看 4K YouTube 或者浏览繁体中文资讯时，香港节点响应体感无与伦比。',
          '然而由于国际合规与区域授权限制，OpenAI（ChatGPT）与 Google（Gemini）以及 TikTok 均明文排除香港 IP 地区——绝大多数客户端“自动延迟测速组（url-test）”恰恰又最爱自动选中延迟最低的香港节点！这就是为什么 90% 新手装完软件一打开 ChatGPT 就报错。正确用法是在策略组里将 AI 与 TikTok 强行切出香港。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '地区节点分工与分流配置',
        intent: '精准切区',
        articles: [
          { title: '新加坡节点：兼顾低延迟与 AI/流媒体的全能核心', targetKeyword: '新加坡机场节点', plannedUrl: '/network/singapore/', summary: '了解约 42–46ms 如何成为 AI 首选主力区', existingHref: '/network/singapore/' },
          { title: '配置 Clash 分流规则避开香港访问 Gemini', targetKeyword: '香港节点用不了Gemini', plannedUrl: '/guides/routing-rules/', summary: '实操设定 AI 专用节点选择组', existingHref: '/guides/routing-rules/' },
        ],
      },
    ],
    faqs: [
      { q: '香港节点真的看不了任何流媒体和 AI 吗？', a: '不是全部，香港节点解锁香港区 Netflix 与 Disney+ 表现通常极佳且繁中字幕全；真正严格排除香港的主要是 ChatGPT、Claude、Gemini 以及 TikTok。' },
      { q: '为什么有些测评图显示某家香港节点也能打开 Gemini？', a: '如灵动云报告所示，极少数节点利用了特殊 DNS 落地或中继分流绕行了定位检测，但长期稳定保障仍明显不及新加坡、日本和美国本土节点。' },
    ],
  },

  japan: {
    sections: [
      {
        heading: '二、日本节点（约 53–57ms）的工程地位与北方宽带优势',
        lead: '华东、华北电信联通用户访问东京/大阪节点路由直接，也是动漫流媒体与 AI 工作流热门选择。',
        paragraphs: [
          '对上海、江浙以及北方城市宽带而言，中日海底光缆（如 NCP 等）路由通常不需绕路广东香港就能快速触达东京机房，部分线路体感到达 45–60ms。同时日本拥有完整开放的 OpenAI、Gemini 支持度、丰富的日本本土动画授权 Netflix 片库与 Abema/DMM 资源，非常适合兼顾开发 AI 与日区影音需求。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '亚太主力节点比对',
        intent: '区域选择',
        articles: [
          { title: '新加坡节点对比日本节点：谁更适合全能日用？', targetKeyword: '日本和新加坡节点区别', plannedUrl: '/network/singapore/', summary: '对比南/北方延迟与多语种流媒体字幕库', existingHref: '/network/singapore/' },
          { title: 'ChatGPT 与 Claude 选用日本节点的注意事项', targetKeyword: '日本节点ChatGPT', plannedUrl: '/streaming-ai/chatgpt/', summary: '排查共用机房验证与固定国家策略', existingHref: '/streaming-ai/chatgpt/' },
        ],
      },
    ],
    faqs: [
      { q: '日本节点的 Netflix 片库有中文字幕吗？', a: '看具体剧集版权而定，不少日本本土动画与部分热播剧在日本区并无中文字幕（以日语和英文字幕为主）；若追求完整繁简中文字幕，台区、港区与新加坡区往往更全面。' },
      { q: '为什么有时候日本节点连接美国软件服务延迟反而比香港高？', a: '因为日美跨太平洋光缆直连距离其实很短（东京→美西约 90–100ms），但国内某些中转或回程策略差异会导致先绕路再转日本，实际对比延迟条即可筛选出高质量路由。' },
    ],
  },

  singapore: {
    sections: [
      {
        heading: '二、新加坡节点为什么是 AI 工具与南亚流媒体的首选主力枢纽？',
        lead: '42–46ms 延迟接近香港质感，同时具备完整华语字幕环境与全面 AI 支持，没有任何硬性地区禁令。',
        paragraphs: [
          '如果你不想每次开软件都在十几个地区里反复手动挑来挑去，把日常主力代理组或至少 AI 策略组直接锁定在“新加坡”是最省心的方案之一：它距离华南物理光缆距离仅略高于香港（光速云基准记录 42–46ms），拥有庞大的亚洲英文/中文双语 Netflix 及 Disney+ 片库，并且对 ChatGPT、Claude 与 Gemini 政策全部友好可用。唯一留意的是尽量选标明有原生 IP 或独立洁净出口的新加坡机器，防止极个别大杂烩广播段出现送中或频发人机验证码。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '东南亚解锁与延迟分析',
        intent: '主力枢纽',
        articles: [
          { title: 'Gemini 接入实战：新加坡 vs 日本 vs 美国稳定性对比', targetKeyword: 'Gemini用新加坡节点', plannedUrl: '/streaming-ai/gemini/', summary: '规避香港限制与地区报错的策略设置', existingHref: '/streaming-ai/gemini/' },
          { title: '原生 IP 辨析：防止新加坡节点识别偏回美国/国内', targetKeyword: '新加坡原生IP机场', plannedUrl: '/network/native-ip/', summary: '辨别原生 ASN 与 BGP 广播 IP', existingHref: '/network/native-ip/' },
        ],
      },
    ],
    faqs: [
      { q: '新加坡节点适合所有省市的宽带用户吗？', a: '华南电信/移动联通直入新加坡效果极佳；北方用户访问新加坡有时比日本多出 20–30ms，如追求极致响应也可在日新之间视测速决定。' },
      { q: '如果新加坡节点某天登不上 Claude 怎么办？', a: '说明该机房出口可能近期并发风控升高，可临时切换到同一机场内口碑干净的美西或日本备选固定节点组。' },
    ],
  },

  usa: {
    sections: [
      {
        heading: '二、正确看待美国节点（134–180ms）在跨洋工作中的不可替代性',
        lead: '高物理延迟无法违背光速极限，但美区拥有全网最大版权库与第一顺位 AI 新模型开放权限。',
        paragraphs: [
          '从中国大陆跨越整个太平洋到达洛杉矶或圣何塞机房，即使走最顶级的私有光缆往返时延也要 130–180ms。正因如此，拿美国节点看 4K 视频单线程拉流响应略慢于港日新，但它解决了三大刚性痛点：1) Google Gemini、OpenAI 新版灰度特性及部分美区 API 首波总先在美区放开；2) Netflix / HBO Max / Hulu 美区完整原生版权体量全球第一；3) 美区 Stripe、App Store、开发者合规后台或跨境 SaaS 校验极看重美西本地 IP 环境。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '美区应用与流媒体应用',
        intent: '美西场景',
        articles: [
          { title: 'Claude 账号防封建议：美区与新加坡固定出口对照', targetKeyword: '美国节点Claude', plannedUrl: '/streaming-ai/claude/', summary: '控制账号跳区轨迹减少封号概率', existingHref: '/streaming-ai/claude/' },
          { title: '美区 Netflix 与全解锁判定技巧', targetKeyword: '美区Netflix机场', plannedUrl: '/streaming-ai/netflix/', summary: '查验美区全版权影片库解锁效果', existingHref: '/streaming-ai/netflix/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么同样叫美国节点，美西洛杉矶比美东纽约好用得多？', a: '因为中国出海海底光缆主要登陆美国西海岸（洛杉矶/圣何塞），美西延迟 134–160ms，而纽约美东还要多横跨整个北美大陆，延迟常常突破 210–250ms 且丢包翻倍。' },
      { q: '美国节点玩网游延迟太高能用吗？', a: '不推荐用高延迟美区代理节点打即时竞技游戏，竞技游戏应当用本地网游加速器挑选亚洲日韩港服服务器。' },
    ],
  },

  'low-latency': {
    sections: [
      {
        heading: '二、辨别“真低延迟（低 RTT + 低抖动）”与“虚假 ICMP Ping”',
        lead: '客户端列表里测出来的一两百毫秒绿色数字有时甚至不如 50ms 稳定，必须用真连接延迟和连续丢包测试衡量。',
        paragraphs: [
          '部分老旧代理工具的列表延迟检测默认只发 ICMP Echo Ping，它测出来的仅仅是你电脑到机场国内中转入口的延迟（比如北京到上海机房只有 20ms），**完全没有算上后半段穿越太平洋去海外落地和 TLS 握手的时间！** 真正确认节点够快，请在 Clash Verge / Shadowrocket 等客户端内启用向境外目标接口（如 `cp.cloudflare.com/generate_204`）发送真实代理请求的 URL-Test 检测。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '测速规范与排障',
        intent: '延迟诊断',
        articles: [
          { title: '全站 39 份实测截图与不同测试前端解读', targetKeyword: '节点延迟怎么测试', plannedUrl: '/network/speedtest/', summary: '看清 MAI-TEST-BOT 与喵速真连接基准', existingHref: '/network/speedtest/' },
          { title: '代理速度突然变慢和延迟翻倍怎么排查', targetKeyword: '代理延迟突然变高', plannedUrl: '/diagnostics/slow-speed/', summary: '区分本地 Wi-Fi 冲突与骨干波动', existingHref: '/diagnostics/slow-speed/' },
        ],
      },
    ],
    faqs: [
      { q: '节点列表上显示 350ms 甚至 600ms，为什么看高清视频依然很流畅？', a: '首先检查客户端测速地址是否被设到了极远的欧洲服务器（TCP CONNECT 握手+往返需要时间），其次视频看的是下行连续吞吐（Throughput），只要带宽够大不丢包，300ms RTT 视频加载缓冲照样流畅，只是点开瞬间多等零点三秒。' },
      { q: '如何降低 SSH 远程敲命令与网页交互时的卡顿感？', a: '选择物理距离最近的香港（21–27ms）、日本（53–57ms）或新加坡（42–46ms）IEPL/BGP 多线节点，避免走美欧长链。' },
    ],
  },

  'native-ip': {
    sections: [
      {
        heading: '二、机房商业 IP、BGP 广播 IP、本土原生 IP 与住宅家庭 IP 的四阶矩阵',
        lead: '不同平台的风控敏感线画在完全不同的层面上，无需迷信“所有节点都得家宽住宅 IP”。',
        bullets: [
          '一阶普通机房 IP：成本最低，速度常很快（适合刷网页、拉 Git 代码、看 YouTube），但 Netflix 易缩水为自制剧。',
          '二阶 BGP 广播 IP：如将美国 ASN 持有的 IP 段广播公告到香港或日本机器使用；部分风控库会误判地区从而触发流媒体/AI 提示异常。',
          '三阶本土原生 IP：ASN 注册地与物理部署机房一致，在解锁当地全量流媒体版权库与降低日常验证弹窗上表现显著更优。',
          '四阶住宅/双 ISP 家庭宽带 IP：IP 库登记属性直接显示为民用宽带运营商而非机房，多见于高价企业定制或跨境 TikTok/电商防关联环境。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'IP 纯净度与流媒体风控',
        intent: '底层溯源',
        articles: [
          { title: 'Netflix 自制剧 vs 全解锁背后的 IP 判定', targetKeyword: '原生IP解锁Netflix', plannedUrl: '/streaming-ai/netflix/', summary: '对比原生 IP 与 DNS 解锁方案稳定性', existingHref: '/streaming-ai/netflix/' },
          { title: 'AI 工作环境防封号与 IP 纯净度要求', targetKeyword: 'AI需要原生IP吗', plannedUrl: '/streaming-ai/ai-environment/', summary: '权衡固定国别选择与共享风控隔离', existingHref: '/streaming-ai/ai-environment/' },
        ],
      },
    ],
    faqs: [
      { q: '机场宣传页写“全节点原生 IP”，通常可信吗？', a: '全站几十个国家几百个节点统统使用高成本原生或双 ISP IP 的概率极低；多数合理部署是主力热门地区精选部分标明“原生/解锁”标签节点供按需挑选。' },
      { q: '普通人日常用机场只是看视频和用网页 ChatGPT，一定要买很贵的住宅 IP 吗？', a: '不需要，标准优质原生节点或稳定解锁池就能很好地胜任日常开发、AI 与观影；仅高强度商业运营或极严格金融 SaaS 才值得额外评估定制方案。' },
    ],
  },

  multiplier: {
    steps: [
      { title: '1. 查看面板节点后缀标记（例如 `[1x]`, `[2x]`, `[0.5x]`, `[3x]`）', detail: '凡未特别加注倍率前缀或后缀的节点通常默认为标准 1x 扣除。' },
      { title: '2. 按公式核算套餐真实可下载上限', detail: '实际可下载数据量 = 套餐标称流量 GB ÷ 常用节点的倍率。例：100GB 套餐全用 2x 节点实得 50GB。' },
      { title: '3. 大文件下载与日常浏览错峰切组', detail: '拉取几十 GB 开发系统镜像或游戏更新时，手动切换至 1x 或低倍率节点组。' },
    ],
    sections: [
      {
        heading: '二、为什么机场要设节点倍率？高倍率节点值得平时常挂吗？',
        lead: '倍率本质上是把高昂专线或稀缺原生落地带宽成本折算成配额权重，避免廉价大流量用户把贵线挤垮。',
        paragraphs: [
          '假如一家机场提供 ¥15 元 100GB 套餐，同时在集群里接入了成本极高的沪日 IPLC 或特殊家宽节点。如果不设倍率权重（例如标成 2x 或 3x），大批下载党会全天候挂在昂贵专线上拉取大文件导致整体亏损与全面卡顿；加上倍率后，平时看纯文字、跑终端或聊 ChatGPT 流量本来只有几百 MB，开 2x 几乎毫无感觉，同时保障了高阶节点极高空载率。但如果你习惯开 4K HDR 连追几集剧，务必要在面板切换去明确写着 `1x` 的优质高速节点！',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '计费口径与套餐优化',
        intent: '省流防坑',
        articles: [
          { title: '单位 GB 流量成本与隐形倍率核算', targetKeyword: '机场性价比对比', plannedUrl: '/pricing/value/', summary: '评估标面低价背后的有效流量密度', existingHref: '/pricing/value/' },
          { title: '一次性不限时流量包与倍率配合注意', targetKeyword: '不限时流量扣倍率吗', plannedUrl: '/pricing/no-expiry/', summary: '避免挂高倍率耗空高价不限时配额', existingHref: '/pricing/no-expiry/' },
        ],
      },
    ],
    faqs: [
      { q: '开启代理客户端软件内的网页测速或视频预加载，也会算倍率扣流量吗？', a: '会的！只要网络请求通过该节点服务器流出入，机场后端流量计费探针就会按当前节点倍率统计字节数，因此也不要开太高频率的自动后台视频测速。' },
      { q: '全站有没有完全所有节点全 1x 不翻倍计费的？', a: '部分简化架构常规中转机场所有节点默认 1x；另一些混合 IEPL 品牌会对个别高成本地区设置 1.5x–2x 而保持主流港新日为 1x，可在购买后客户端节点名中一眼看到。' },
    ],
  },

  'guangsuyun-analysis': {
    sections: [
      {
        heading: '二、光速云架构拆解：三网实测批次与不同运营商契合特点',
        lead: '结合 2026-08-19 三网同日 MiaoKo 实测及 2026-10-19 基础记录，立体评估其优势段位与适用边界。',
        paragraphs: [
          '作为本站核查证据链最长的 2020 年起运营品牌，光速云在 2026-08-19 留存了长沙电信（2Gbps）、广西移动（1Gbps）、河北联通（3Gbps）三网同日测速归档及 62 节点流媒体/AI 解锁图；同时清单另有 2026-10-19 非晚高峰基础记录显示其香港（21–27ms）、新加坡（42–46ms）、日本（53–57ms）与美国（134–180ms）处于常规专线级基线。',
          '用户需要注意两项明确工程细节：一是原文文档间对底层协议及 99 元轻量版月流（59GB vs 69GB）存在 `CF-001` 冲突披露；二是访问 ChatGPT 与 Gemini 依然必须手动排除香港节点切换新日美组。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '光速云技术与使用全景',
        intent: '单品深度',
        articles: [
          { title: '光速云旗舰全维度评测档案', targetKeyword: '光速云评测', plannedUrl: '/brands/guangsuyun/', summary: '完整查阅 6 份原图与七档套餐列表', existingHref: '/brands/guangsuyun/' },
          { title: '光速云客户端与订阅链接使用教学', targetKeyword: '光速云怎么连接', plannedUrl: '/guides/guangsuyun-setup/', summary: '自研客户端及 Clash 导入双路径指南', existingHref: '/guides/guangsuyun-setup/' },
        ],
      },
    ],
    faqs: [
      { q: '光速云各省电信/移动/联通用户谁用着体验更佳？', a: '从 2026-08-19 三网跨省快照来看，其对三大主流运营商均提供了可用接入与良好高均速冗余，适合家庭多网交叉使用；具体到省市微差异建议 25 元极速月付先实测一周。' },
      { q: '光速云能用 Clash Verge Rev 和 Shadowrocket 吗？', a: '可以，除官网自带客户端外，均开放标准第三方通用订阅。' },
    ],
  },
};
