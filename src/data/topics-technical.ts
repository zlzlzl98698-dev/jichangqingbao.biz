import type { SubtopicEntry } from './topics-commercial';

export const NETWORK_TOPICS: SubtopicEntry[] = [
  {
    slug: 'iepl',
    title: 'IEPL 专线技术原理：国际以太网专线与普通中转的区别 | 机场情报',
    description: '从网络传输层科普 IEPL（国际以太网专线）的工作原理、延迟特性与局限，不含品牌榜单推销。',
    h1: 'IEPL 专线技术原理、延迟结构与常见误区',
    eyebrow: 'Network · IEPL Knowledge',
    answerFirst: 'IEPL（International Ethernet Private Line，国际以太网专线）是在二层（数据链路层）建立的跨境点对点私有传输通道，不经过普通公网国际出口的拥塞路由与 QoS 抢占，因此跨境段丢包率更低、延迟波动更小。但 IEPL 并非绝对免疫波动，国内接入入口与海外落地机性能仍直接影响最终体验。',
    sections: [
      {
        heading: '一、IEPL 与公网直连/普通中转的传输路径差异',
        lead: '核心区别在于跨境段是否暴露于公网国际出口拥塞。',
        paragraphs: [
          '普通直连或低成本中转在晚高峰（20:00–23:30）容易因国内三大运营商国际出口带宽饱和而出现丢包和延迟飙升；IEPL 通过运营商级二层专线完成国内入口至香港/海外对接点的传输，使代理流量在公网侧仅表现为至国内 BGP 入口的加密连接。',
        ],
      },
      {
        heading: '二、技术认知误区澄清',
        lead: '标注“IEPL”不等于“所有节点零丢包”或“一定解锁 ChatGPT”。',
        bullets: [
          'IEPL 只负责跨境链路传输，不决定落地服务器 IP 是否被 Netflix 或 OpenAI 拉黑。',
          '若机场在同一组 IEPL 隧道上超售过多用户，晚高峰依然会出现带宽瓶颈。',
        ],
      },
    ],
    faqs: [
      { q: 'IEPL 和 IPLC 在用户使用体感上有多大区别？', a: '两者都属于跨境内网专线范畴（IPLC 为传统 SDH/TDM 租用线，IEPL 为以太网专线架构）。对终端代理用户而言，实际体验差距更多取决于商家采购的独享带宽总量和 BGP 入口质量，而非缩写名称本身。' },
    ],
    relatedLinks: [
      { label: 'IEPL 专线机场服务选择与比较', href: '/network/iepl/recommendations/', note: '查看资料标注 IEPL 的品牌横向对比' },
      { label: 'IPLC 专线科普', href: '/network/iplc/' },
    ],
  },
  {
    slug: 'recommendations',
    title: 'IEPL 专线机场服务选择与比较 | 机场情报',
    description: '基于 31 家机场资料，筛选并比较明确标注 IEPL 专线及具备测速截图的品牌方案，与 IEPL 技术科普页严格区分搜索意图。',
    h1: 'IEPL 专线机场服务选择与参数对比',
    eyebrow: 'Network · IEPL Selection',
    answerFirst: '在机场情报收录的 31 家品牌中，光速云、微风网络、大佬云、星岛梦、二猫云、极连云、光年梯、一翻云、SOGO 云、可信云、速界、闪电鼠、云界线、榴莲云、神行加速、环球梯、梯子云、灵动云与浪网均在资料中标注采用 IEPL 专线。选型时应结合是否支持第三方订阅及是否留有实测截图进行筛选。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weifeng', 'ermao', 'yifan', 'jilian', 'guangnian', 'sujie', 'kexin'],
    sections: [
      {
        heading: '一、不同预算下的 IEPL 方案分层',
        lead: '不要只看“IEPL”标签，须核实月付门槛与实测归档状况。',
        paragraphs: [
          '5.6 元年付极简档（闪电鼠等 5 家）虽标注 IEPL，但缺乏实测截图与多档月付；18–25 元主流月付档（极连云、光年梯、一翻云、光速云、星岛梦、可信云、速界）则同时具备 2026-08-11 测速截图或完整的全节点说明。',
        ],
      },
    ],
    faqs: [
      { q: '怎么验证某机场宣传的 IEPL 专线是否名副其实？', a: '单一速度截图无法直接证明物理专线归属，通常需观察长周期晚高峰丢包率、MTR/Ping 延迟基线（例如广东出口至香港落地常见 20–30ms 内）以及是否经由国内 BGP 入口转发。' },
    ],
    relatedLinks: [
      { label: 'IEPL 技术原理科普', href: '/network/iepl/' },
      { label: '全站历史测速证据库', href: '/network/speedtest/' },
    ],
  },
  {
    slug: 'iplc',
    title: 'IPLC 专线原理与机场应用解析 | 机场情报',
    description: '解释 IPLC（国际私用出租线路）的技术含义，并盘点资料中标注纯 IPLC 或 IPLC/IEPL 混合架构的品牌。',
    h1: 'IPLC 专线技术概念与适用场景分析',
    eyebrow: 'Network · IPLC',
    answerFirst: 'IPLC（International Private Leased Circuit，国际私用出租线路）是一种点对点跨境私有物理/虚拟专线。站内唯兔云、Firefly、U1S1、隐形人、闪跃、边缘节点 EdgeNova 均标注采用 IPLC 专线，光速云在极速版/定制版及全球云资料中亦标注了 IPLC 接入。',
    brandSlugs: ['weitu', 'firefly', 'u1s1', 'shanyue', 'yinxingren', 'guangsuyun'],
    sections: [
      {
        heading: '一、IPLC 对延迟与抗 QoS 的作用',
        lead: '私有路由避免了公网边界网关的随机丢包。',
        paragraphs: [
          '对于需要长时间保持 SSH 会话、远程桌面或实时 AI 流式语音对话的用户，稳定的低抖动（Jitter）比峰值跑分更重要。IPLC 专线在架构上有助于控制抖动，但仍受限于本地宽带到入口机房的最后一公里质量。',
        ],
      },
    ],
    faqs: [
      { q: 'IPLC 机场是否意味着绝对不会被阻断？', a: '不会。国内入口端服务器 IP、客户端与入口之间的加密握手特征及 DNS 配置若出现异常，依然可能影响连通性，专线不能替代规范的 TLS/VLESS 协议配置。' },
    ],
    relatedLinks: [
      { label: 'IEPL 专线原理', href: '/network/iepl/' },
      { label: '唯兔云 IPLC 档案', href: '/brands/weitu/' },
    ],
  },
  {
    slug: 'bgp',
    title: 'BGP 网络与三网智能调度解析 | 机场情报',
    description: '科普机场入口常用的 BGP 多线接入与三网优化技术，解释电信、联通、移动用户为何需要 BGP 入口。',
    h1: 'BGP 多线网络在跨境代理入口中的作用',
    eyebrow: 'Network · BGP',
    answerFirst: 'BGP（边界网关协议）多线接入允许机场国内中转入口同时广播电信、联通与移动三条骨干网路由，并动态选择最优路径回程。由于不同运营商在跨网访问单线入口时容易产生高延迟和丢包，具备 BGP 智能调度的入口（如暮光加速、SOGO 云、全球云、唯兔云所标注的 BGP/三网优化）能显著改善跨运营商访问体验。',
    brandSlugs: ['muguang', 'sogo', 'quanqiu', 'weitu'],
    sections: [
      {
        heading: '一、为什么同一机场在三网实测中速度差异明显',
        lead: '移动、电信、联通各自拥有不同的国际出海与省际互联策略。',
        paragraphs: [
          '参考光速云 2026-08-19 长沙电信、广西移动与河北联通的三网同批测速图即可看出，同一节点组在不同运营商下的平均吞吐和延迟表现各自呈现不同分布，优质 BGP 入口的核心价值在于尽量收敛这种三网差距。',
        ],
      },
    ],
    faqs: [
      { q: '看到机场节点名称写“广州 BGP”或“上海 BGP”是什么意思？', a: '表示客户端先连接位于广州或上海的多线 BGP 境内中转服务器，再由该中转机通过隧道或专线把加密流量送往海外落地服务器。' },
    ],
    relatedLinks: [
      { label: '中转线路与直连区别', href: '/network/transit/' },
      { label: '暮光加速 BGP 档案', href: '/brands/muguang/' },
    ],
  },
  {
    slug: 'transit',
    title: '中转线路原理：隧道与专线成本差异 | 机场情报',
    description: '深度解析机场行业常见的境内中转（Relay/Transit）路由原理，横向对比低成本公网隧道中转与高成本 IEPL/IPLC 跨境专线中转在晚高峰稳定度与延迟上的差异。',
    h1: '机场中转线路（Relay / Transit）工作原理与分类',
    eyebrow: 'Network · Transit',
    answerFirst: '中转线路是指流量不直接从用户电脑连向海外落地 VPS，而是先经过境内或近港中转节点转发。中转能隐藏海外落地 IP、利用大带宽境内机房改善海外直连丢包问题；根据跨境段介质不同，又可分为成本较低的公网隧道中转与成本较高的专线（IEPL/IPLC）中转。',
    brandSlugs: ['lingmao', 'guangsuyun', 'quanqiu'],
    sections: [
      {
        heading: '一、如何区分普通中转与专线中转',
        lead: '观察晚高峰延迟稳定性与套餐定价梯度。',
        paragraphs: [
          '站内如灵猫网络标注中转优化线路（2026-08-11 傍晚有实测截图），光速云介绍亦提及 IPLC 专线和隧道中转结合。中转节点的数量、单机承载人数及境内口岸带宽冗余决定了晚高峰是否拥堵。',
        ],
      },
    ],
    faqs: [
      { q: '中转线路一定会比直连更安全或更快吗？', a: '中转主要解决的是运营商国际路由绕路和海外 IP 直连阻断问题；是否更快取决于中转机自身负载。' },
    ],
    relatedLinks: [
      { label: '直连线路解析', href: '/network/direct/' },
      { label: 'IEPL 专线原理', href: '/network/iepl/' },
    ],
  },
  {
    slug: 'direct',
    title: '直连线路解析：适用条件与晚高峰瓶颈 | 机场情报',
    description: '解释直连线路的技术特征、适用网络环境（如 CN2 GIA/移动直连场景）以及普通公网直连的晚高峰风险。',
    h1: '直连线路技术特征与适用边界',
    eyebrow: 'Network · Direct',
    answerFirst: '直连线路指客户端加密流量直接从本地运营商宽带连向海外目标服务器（不经过境内中转机）。其优点是链条短、成本低、故障点少；缺点是高度受制于本地运营商到目标机房的公网国际路由质量，在晚高峰非优化线路上容易出现高丢包和降速。',
    brandSlugs: ['edgenova'],
    sections: [
      {
        heading: '一、直连线路在当前机场产品中的定位',
        lead: '当前商业专线机场多以中转或专线为主，纯直连常作为备选或特定优化路径存在。',
        paragraphs: [
          '例如边缘节点 EdgeNova 资料中同时提及“高速直连 / IPLC；多线路自动分配”。对于本地自带优质国际出口（如部分高校教育网、特定地区电信精品网）的用户，优化直连亦可取得较低延迟，但多数普通家庭宽带在晚高峰仍更依赖中转或专线。',
        ],
      },
    ],
    faqs: [
      { q: '如何判断自己手头的节点是直连还是中转？', a: '查看节点列表通常可见前缀或地区标注；技术上也可通过测试连接端口的 IP 归属地是否为境内机房 IP 加以辅助判断。' },
    ],
    relatedLinks: [
      { label: '中转线路对比', href: '/network/transit/' },
      { label: '网络速度慢排查', href: '/diagnostics/slow-speed/' },
    ],
  },
  {
    slug: 'hong-kong',
    title: '香港节点特性：低延迟优势与 AI/TikTok 区域限制说明 | 机场情报',
    description: '基于实测数据解析香港节点为何延迟最低、下载最快，以及为何经常遇到 ChatGPT 仅限 APP、Gemini 失败与 TikTok 受限。',
    h1: '香港节点网络特征与常见业务限制分析',
    eyebrow: 'Network · Hong Kong',
    answerFirst: '香港节点因地理位置紧邻中国内地，在所有海外区域中延迟最低（2026-10-19 非晚高峰记录普遍为 21–27ms，下载 477–548Mbps），是日常网页、GitHub 与 4K YouTube 的首选节点。但实测表明，由于 OpenAI、Google Gemini 与 TikTok 对香港 IP 实行区域限制，使用 AI 工具或 TikTok 时常需切换至新加坡、日本或美国节点。',
    brandSlugs: ['guangsuyun', 'weifeng', 'wuyou', 'xingdaomeng'],
    sections: [
      {
        heading: '一、实测截图中的香港节点真实表现',
        lead: '速度高不代表业务全解锁。',
        paragraphs: [
          '在光速云 2026-08-19 62 节点实测中，香港专线 01–20 均速高且稳定解锁 Netflix 与 Disney+，但 OpenAI 全线标注“仅APP(HK)”、Gemini 全部失败；而在无忧链接 2026-07-18 实测中，香港 01 甚至出现了单点 YouTube 送中（CN）记录。',
        ],
      },
    ],
    faqs: [
      { q: '香港节点为什么经常打不开 Gemini 网页版？', a: '因为 Google Gemini 目前的官方服务支持地区政策对香港本地 IP 存在限制，这与节点本身网速快慢无关，切至新加坡或日本节点即可。' },
    ],
    relatedLinks: [
      { label: '新加坡节点特性', href: '/network/singapore/' },
      { label: 'ChatGPT 与 AI 网络环境', href: '/streaming-ai/chatgpt/' },
    ],
  },
  {
    slug: 'japan',
    title: '日本节点特性：延迟、AI 解锁与流媒体表现分析 | 机场情报',
    description: '分析日本节点在延迟（50–80ms）、日区流媒体、OpenAI 解锁及晚高峰路由上的实际特点。',
    h1: '日本节点网络特征与适用场景',
    eyebrow: 'Network · Japan',
    answerFirst: '日本节点（以东京、大阪为主）在中国内地非晚高峰基线测试中延迟通常在 53–57ms 左右，兼顾较快网页响应与高 AI/流媒体兼容性。在光速云 2026-08-19 实测截图中，日本 01–10 普遍同时解锁 Netflix、Disney+、YouTube、OpenAI 与 TikTok（JP），是替代香港节点进行 AI 办公的常用选择。',
    brandSlugs: ['guangsuyun', 'weifeng', 'muguang', 'yifan'],
    sections: [
      {
        heading: '一、日本节点的波动注意事项',
        lead: '日本方向带宽在晚间易受海缆与部分落地机单节点稳定性影响。',
        paragraphs: [
          '例如在微风网络 2026-07-19 实测中，多数日本节点平均速度在 79–257MB/s 之间，但日本 05 录得 8.00KB 异常；光速云 70 节点测试中日本 03 OpenAI 显示 N/A。因此在客户端中保留 2 个以上日本备用节点尤为重要。',
        ],
      },
    ],
    faqs: [
      { q: '日本节点适合玩海外游戏或访问日服流媒体吗？', a: '适合常规日服流媒体（如 Abema/动画疯跨区等，具体看 IP 原生度）；若用于低丢包竞技游戏，建议测试 UDP NAT 类型是否为 FullCone。' },
    ],
    relatedLinks: [
      { label: '香港节点对比', href: '/network/hong-kong/' },
      { label: '原生 IP 辨识', href: '/network/native-ip/' },
    ],
  },
  {
    slug: 'singapore',
    title: '新加坡节点特性：高吞吐兼顾 Gemini 与 ChatGPT 解锁 | 机场情报',
    description: '分析新加坡节点在东南亚与华南接入延迟、OpenAI/Gemini 双解锁表现及部分节点 YouTube 送中现象。',
    h1: '新加坡节点网络特征与 AI 解锁优势',
    eyebrow: 'Network · Singapore',
    answerFirst: '新加坡节点是兼具高速带宽与 AI 工具高兼容性的核心枢纽：2026-10-19 基线延迟约 42–46ms、下载 383–445Mbps；更重要的是，在光速云 2026-08-19 62 节点实测中，新加坡是少数同时稳定解锁 ChatGPT 与 Google Gemini 的主流亚太节点组。',
    brandSlugs: ['guangsuyun', 'muguang', 'xingdaomeng', 'u1s1'],
    sections: [
      {
        heading: '一、新加坡节点常见的“YouTube 送中”提示',
        lead: '部分机房 IP 段可能被 YouTube 定位校准至 CN。',
        paragraphs: [
          '在光速云 70 节点基础流媒体截图中，新加坡 01–10 的 Netflix、Disney+、OpenAI 均正常解锁（SG），但 YouTube 列全部显示“送中(CN)”。遇到此现象时，在分流规则中将 YouTube 策略组单独指向香港或日本即可。',
        ],
      },
    ],
    faqs: [
      { q: '二猫云有新加坡节点吗？', a: '二猫云介绍文案曾写缺少新加坡，但 2026-10-19 测速表却记录了新加坡 46ms/407Mbps，存在资料冲突，建议以客户端实际节点列表为准。' },
    ],
    relatedLinks: [
      { label: 'Gemini 机场可用性', href: '/streaming-ai/gemini/' },
      { label: '分流规则配置教程', href: '/guides/routing-rules/' },
    ],
  },
  {
    slug: 'usa',
    title: '美国节点特性：跨太平洋物理延迟与美区业务价值 | 机场情报',
    description: '解析美国西海岸节点 130–180ms 物理延迟成因、单线程速度特征以及在美区 AI 与流媒体中的不可替代性。',
    h1: '美国节点网络特征、物理延迟与美区解锁价值',
    eyebrow: 'Network · USA',
    answerFirst: '由于跨太平洋海底光缆的物理距离限制，美国西海岸节点延迟正常范围在 134–180ms 之间，远高于亚太节点，且在单线程 TCP 传输中易受长肥管道（LFN）拥塞影响。尽管延迟较高，美国节点对美区限定流媒体（如完整美区 Netflix、Hulu/HBO、TikTok US）及 OpenAI 高风控账号仍具有极高的业务价值。',
    brandSlugs: ['guangsuyun', 'firefly', 'u1s1', 'quanqiu'],
    sections: [
      {
        heading: '一、美国节点实测速度差异为什么这么大',
        lead: '单线程能力与后端 BBR 拥塞控制算法影响显著。',
        paragraphs: [
          '在 2026-10-19 非晚高峰记录中，各品牌美国节点多为 14–30Mbps；而在光速云 2026-08-19 珠海联通 9Gbps 单线程截图中，美国 01/03–10 却跑出了 313–370MB 的高均速（仅美国 02 故障为 1.60KB），反映出测试后端与时间窗口对长距离线路的巨大影响。',
        ],
      },
    ],
    faqs: [
      { q: '用美国节点看网页感觉不如香港跟手是正常的吗？', a: '完全正常。140ms 以上的往返时延（RTT）加上 TLS 握手，会导致首字节加载比 25ms 的香港节点明显慢半拍，通常建议仅把需要美区 IP 的应用分流到美国节点。' },
    ],
    relatedLinks: [
      { label: '低延迟节点说明', href: '/network/low-latency/' },
      { label: 'Netflix 美区解锁', href: '/streaming-ai/netflix/' },
    ],
  },
  {
    slug: 'low-latency',
    title: '低延迟节点解析：TLS RTT、HTTPS 延迟与 ICMP Ping 的区别 | 机场情报',
    description: '教会用户正确读懂 Clash 和 MiaoKo 测速中的 ICMP、TLS RTT 与 HTTPS Ping 延迟指标，避免被虚低延迟误导。',
    h1: '低延迟节点评估：读懂 RTT、TLS 握手与真实体感延迟',
    eyebrow: 'Network · Latency',
    answerFirst: '评估代理节点的“低延迟”不能只看普通 Ping 值（ICMP）。真实代理连接必须经历国内到入口、入口到落地、以及落地到目标网站的多次数据交换：在 MiaoKo 实测图中，香港节点 TLS RTT 通常为 20–115ms，而完整 HTTPS 体感延迟则在 80–500ms 区间，这才是打开网页的真实等待基准。',
    sections: [
      {
        heading: '一、三种常见延迟指标对照',
        lead: '客户端“测延迟”默认发送的是 URLTest（HTTP/HTTPS 请求）。',
        bullets: [
          'ICMP Ping：仅检测端到入口服务器可达性，容易因中转机位于国内而显示极低数字（如 15ms），却无法反映海外落地真实耗时。',
          'TLS RTT：单次加密握手数据交换延迟。',
          'HTTPS 延迟：完整 HTTP/HTTPS 请求体感延迟，最贴近浏览网页与 API 请求响应速度。',
        ],
      },
    ],
    faqs: [
      { q: '为什么 Clash 里测速 50ms 的节点，MiaoKo 图里 HTTPS 延迟显示 400ms？', a: '因为测试目标 URL、是否复用了长连接以及跨境段首包握手策略不同；建议重点对比同一次测试工具下的相对延迟差距。' },
    ],
    relatedLinks: [
      { label: '节点超时故障排查', href: '/diagnostics/node-timeout/' },
      { label: '测速报告证据库', href: '/network/speedtest/' },
    ],
  },
  {
    slug: 'native-ip',
    title: '原生 IP 与住宅 IP 科普：流媒体解锁与 AI 风控关系 | 机场情报',
    description: '解释什么是原生 IP、广播 IP、机房 IP 与住宅 IP，结合实际截图说明为什么“机房 IP”也能解锁或无法解锁流媒体。',
    h1: '原生 IP（Native IP）概念辨析与实际解锁边界',
    eyebrow: 'Network · Native IP',
    answerFirst: '在代理领域，“原生 IP”通常指 IP 注册地与当前机房所在国家/地区一致、未经历跨国广播迁移的 IP 地址；“住宅 IP”则指 ASN 归属于当地民用宽带运营商（ISP）而非数据中心（Hosting）。尽管微风网络、光速云定制版、Firefly、闪跃与一翻云在资料中提及原生 IP 定位，但实际解锁仍受 ASN 风控库动态更新影响，应以实时测试截图为准。',
    brandSlugs: ['guangsuyun', 'weifeng', 'firefly', 'shanyue', 'yifan'],
    sections: [
      {
        heading: '一、机房 IP 就一定打不开 Netflix 或 ChatGPT 吗？',
        lead: '并非绝对，许多机场通过 DNS 解锁技术或优质商宽段实现兼容。',
        paragraphs: [
          '从光速云 2026-08-19 实测截图可以看到，即使 `IPType` 列显示为“商宽/机房 IP”，日本、新加坡与美国节点依然广泛解锁了 Netflix、Disney+ 与 OpenAI；反之，如果某段广播 IP 被高频滥用，即便标称“原生”也可能触发风控拦截。',
        ],
      },
    ],
    faqs: [
      { q: '所有机场宣称的“原生住宅 IP”都能百分之百核实吗？', a: '不能仅凭宣传文案确认，需查看测试截图中的 ASN 与 IPType 字段（如 ISP/商宽/机房），因此在未见独立 ASN 证据前，本站会将相关描述标注为“品牌方宣称”。' },
    ],
    relatedLinks: [
      { label: 'AI 网络环境要求', href: '/streaming-ai/ai-environment/' },
      { label: 'AI 与流媒体可用性矩阵', href: '/streaming-ai/' },
    ],
  },
  {
    slug: 'multiplier',
    title: '机场线路倍率说明：1倍流量与高倍率节点流量消耗计算 | 机场情报',
    description: '讲解机场节点的 1×、2×、0.5× 流量倍率计费规则，并汇总资料中明确标注全节点 1 倍流量的品牌。',
    h1: '机场线路倍率原理与 1 倍流量品牌清单',
    eyebrow: 'Network · Multiplier',
    answerFirst: '线路倍率是机场后台统计扣费流量的系数：使用 ×1 倍率节点下载 10GB 文件扣除套餐内 10GB；若使用了 ×2 或 ×3 倍率的冷门专线节点，下载 10GB 则会扣除 20GB 或 30GB。站内光速云极速版、星岛梦、唯兔云、无忧链接与灵猫网络均在品牌资料中明确标注为全节点 1 倍流量（无倍率）。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'wuyou', 'lingmao'],
    sections: [
      {
        heading: '一、如何查看当前节点的真实倍率',
        lead: '养成先看节点名称后缀再大流量下载的习惯。',
        paragraphs: [
          '支持第三方订阅的机场通常会在节点名称末尾标注 `[x1]`、`[2x]` 或 `[0.5x]` 等标识；而使用专属客户端的机场一般可在客户端节点列表内查看倍率标签。若资料未标明倍率，建议先小额下载后对比面板剩余流量核验。',
        ],
      },
    ],
    faqs: [
      { q: '为什么有时候下载一个 20GB 的文件，套餐却扣了 40GB？', a: '除了部分高成本节点存在 ×2 倍率外，开启全局代理同时下载本地测速包或后台系统更新也会计入总量。' },
    ],
    relatedLinks: [
      { label: '大流量机场对比', href: '/pricing/high-traffic/' },
      { label: '套餐选择指南', href: '/guides/plan-selection/' },
    ],
  },
  {
    slug: 'guangsuyun-analysis',
    title: '光速云线路技术分析与三网测速特征拆解 | 机场情报',
    description: '聚焦光速云的 IEPL/IPLC 双架构记录、62节点 vs 70节点差异、以及长沙电信/广西移动/河北联通/珠海联通实测数据。',
    h1: '光速云线路技术架构与多批次测速拆解',
    eyebrow: 'Flagship Cluster · 光速云线路',
    answerFirst: '光速云在不同资料中分别标注了“IEPL 专线 + 企业级内网专线”、“全球 IPLC”与“IPLC + 隧道中转”。在 2026-08-19 收录的 5 张 MiaoKo 实测图中，既出现了 62 个 Shadowsocks 节点集合（电信/移动/联通 2Gbps），也出现了包含 10 个“电信-”AnyTLS 入口在内的 70 节点 VLESS 测试集合，显示其在不同端口/订阅组间存在多协议调度。',
    brandSlugs: ['guangsuyun'],
    sections: [
      {
        heading: '一、三网与单线程差异要点',
        lead: '本页专注光速云技术链路与测试条件分析，完整品牌评测与套餐见主档案页。',
        paragraphs: [
          '单线程测试（珠海联通 9Gbps）下香港均速约 375–424MB/s，而美国 02 出现 1.60KB 异常；三网 6 线程测试中，亚太主流节点普遍在 25–53MB/s，德国 01 在电信/移动/联通下均明显偏慢（43KB–10.98MB/s），印证了跨欧亚路由长距离衰减的特征。',
        ],
      },
    ],
    faqs: [
      { q: '光速云 62 节点和 70 节点截图为什么协议不一样？', a: '62 节点批次回传为 Shadowsocks，70 节点批次回传为 VLESS 与 AnyTLS（含 10 个电信专属节点），反映出不同测试时期或订阅分组的下发差异，已在冲突审计 CF-001 中完整记录。' },
    ],
    relatedLinks: [
      { label: '回到光速云旗舰综合评测（主锚点）', href: '/brands/guangsuyun/' },
      { label: '光速云客户端设置教程', href: '/guides/guangsuyun-setup/' },
    ],
  },
];

export const STREAMING_AI_TOPICS: SubtopicEntry[] = [
  {
    slug: 'chatgpt',
    title: 'ChatGPT 机场与 OpenAI 访问网络要求（实测差异解析）| 机场情报',
    description: '解析 ChatGPT 网页版与 APP 对节点 IP 的风控要求，对照光速云 62/70 节点 OpenAI 实测数据给出节点选择建议。',
    h1: 'ChatGPT 访问环境与机场节点选择指南',
    eyebrow: 'AI & Streaming · ChatGPT',
    answerFirst: '使用 ChatGPT 网页版与 API 时，仅测速快远远不够，还必须避开受区域限制或高风控 IP。根据站内 2026-08-19 实测截图，香港专线节点在 OpenAI 检测中普遍显示“仅APP(HK)”而网页受限，而日本、新加坡、美国与台湾节点通常能直接完整解锁；灵动云 2026-07-20/21 实测亦显示 OpenAI 各地区基本全解锁。',
    brandSlugs: ['guangsuyun', 'sujie', 'lingdong', 'muguang', 'weitu', 'yifan'],
    sections: [
      {
        heading: '一、ChatGPT 用户选节点的三条实操准则',
        lead: '锁定单一稳定地区，避免自动测速频繁跳 IP。',
        bullets: [
          '优先选用新加坡、日本或美国节点，不要把 OpenAI 规则放在“自动选择（URLTest）”策略组里来回切换国家。',
          '若香港节点提示不支持所在国家/地区，属正常地域限制而非节点断网。',
          '注意部分节点在 70 节点实测中出现 N/A（如光速云日本 03、新加坡 07），遇报错手动切换同区下一编号即可。',
        ],
      },
    ],
    faqs: [
      { q: '为什么手机 ChatGPT App 能用，电脑网页版却打不开？', a: '因为你当前连接的是香港节点。实测图中明确显示多数香港节点仅支持 APP 接口而限制网页端访问，将电脑端代理切换为日本、新加坡或美国节点即可解决。' },
    ],
    relatedLinks: [
      { label: 'Claude 机场要求', href: '/streaming-ai/claude/' },
      { label: 'AI 服务访问异常排查', href: '/diagnostics/ai-blocked/' },
    ],
  },
  {
    slug: 'claude',
    title: 'Claude 机场选择：高纯净度节点与美/英/日区风控注意 | 机场情报',
    description: '分析 Anthropic Claude 对节点 IP 纯净度与地区合规的严苛限制，整理资料中标注支持 Claude 的品牌情况。',
    h1: 'Claude 访问网络环境要求与机场节点注意事项',
    eyebrow: 'AI & Streaming · Claude',
    answerFirst: '相比 ChatGPT，Anthropic Claude 对出口 IP 的声誉评分与区域限制更为敏感，香港及部分受限地区无法使用，且万人共享的高并发机房 IP 极易触发账号风控封禁。站内光速云、暮光、飞猫、微风、星岛梦、无忧、唯兔、Firefly、U1S1、灵猫、一翻、闪跃、全球云及速界均在品牌资料中声明支持 Claude，二猫云与 SOGO 云则标注视节点而定。',
    brandSlugs: ['sujie', 'guangsuyun', 'weitu', 'shanyue', 'muguang'],
    sections: [
      {
        heading: '一、降低 Claude 触发风控的节点策略',
        lead: '固定美国或日本节点，避免频繁跨洲切换。',
        paragraphs: [
          '如速界在品牌资料中特别提示：“AI 可用性受 IP、地区和平台规则影响，不应承诺永久稳定支持所有 AI 平台。”实际使用 Claude 时，尽量选用美国或日本非拥挤节点，并避免在同一个浏览器会话内切换多个国家的 IP。',
        ],
      },
    ],
    faqs: [
      { q: '为什么同一个机场昨天能登 Claude 今天突然提示不可用？', a: '共享机场出口 IP 若被大量自动化脚本同时请求，Anthropic 会临时提升该 IP 段的 Cloudflare/风控拦截等级，可尝试切换其他日本/美国节点或升级独享 IP 方案。' },
    ],
    relatedLinks: [
      { label: 'ChatGPT 节点对比', href: '/streaming-ai/chatgpt/' },
      { label: 'AI 网络环境规范', href: '/streaming-ai/ai-environment/' },
    ],
  },
  {
    slug: 'gemini',
    title: 'Gemini 机场选择：实测验证新加坡节点与香港/日本限制 | 机场情报',
    description: '依据光速云 2026-08-19 实测截图，揭示 Google Gemini 严格的区域节点差异（香港/日本多数失败，新加坡稳定解锁）。',
    h1: 'Google Gemini 网络环境要求与节点实测分布',
    eyebrow: 'AI & Streaming · Gemini',
    answerFirst: 'Google Gemini 是主流 AI 工具中对节点位置要求最严格的平台之一。在本站全部 31 家品牌中，绝大多数仅将 Gemini 标为“视节点而定”；从光速云 2026-08-19 62 节点实测图可见，香港、日本、美国与台湾节点大面积显示 Gemini 失败，只有新加坡、马来西亚与土耳其节点呈现稳定解锁。',
    brandSlugs: ['guangsuyun', 'sujie', 'weitu', 'shanyue'],
    sections: [
      {
        heading: '一、配置 Gemini 专属分流组',
        lead: '切忌将 Google 搜索与 Gemini 混用香港节点。',
        paragraphs: [
          '如果你平时使用香港节点访问 Google 搜索以求低延迟，一旦打开 gemini.google.com 就会遭遇地区不支持提示。正确做法是在 Clash/Mihomo 规则中为 `gemini.google.com`、`aisuite` 相关域名单独指定新加坡（SG）或马来西亚策略组。',
        ],
      },
    ],
    faqs: [
      { q: '美国节点为什么在截图里也会显示 Gemini 失败？', a: '部分美国机房 IP 的地理位置数据库被误判或触发了 Google 的匿名代理风控；因此在共享节点环境下，新加坡节点往往比普通美国机房节点更容易直接解锁 Gemini。' },
    ],
    relatedLinks: [
      { label: '新加坡节点实测特征', href: '/network/singapore/' },
      { label: '分流规则配置教程', href: '/guides/routing-rules/' },
    ],
  },
  {
    slug: 'ai-environment',
    title: 'AI 网络环境配置原则：固定区域、DNS 匹配与分流防泄漏 | 机场情报',
    description: '总结面向 ChatGPT、Claude、Gemini 等 AI 工具的代理环境底层配置原则（TUN 模式、Fake-IP 与节点锁定）。',
    h1: '面向 AI 生产力工具的稳定代理网络环境构建原则',
    eyebrow: 'AI & Streaming · Environment',
    answerFirst: '构建可靠的 AI 网络环境需要满足三个条件：1) 关闭全局“延迟最低自动切换”，为 AI 域名单独绑定固定国家节点（如新加坡或美国）；2) 启用 TUN 模式或完整的浏览器代理接管，防止桌面端 AI 客户端/CLI 走本地直连导致报错；3) 配置正确的 DNS 解析，避免本地 DNS 污染返回错误区域 IP。',
    brandSlugs: ['guangsuyun', 'sujie', 'kexin'],
    sections: [
      {
        heading: '一、为什么 AI 工具比流媒体更容易报错',
        lead: 'AI 平台同时校验出口 IP、账号归属地、DNS 解析与终端 WebRTC/时区信号。',
        paragraphs: [
          '许多终端软件（如桌面版 Claude、Cursor、VS Code AI 插件或命令行工具）默认不走浏览器系统代理，必须开启客户端的 TUN 虚拟网卡模式才能接管全部进程流量。',
        ],
      },
    ],
    faqs: [
      { q: '浏览器能打开 ChatGPT，为什么桌面端或终端命令行连不上？', a: '因为命令行工具和部分桌面应用不读取系统 HTTP 代理端口，需要在 Clash Verge Rev / v2rayN 中开启 TUN 模式或手动配置终端环境变量。' },
    ],
    relatedLinks: [
      { label: 'TUN 模式开启指南', href: '/guides/tun-mode/' },
      { label: 'AI 服务访问异常排查', href: '/diagnostics/ai-blocked/' },
    ],
  },
  {
    slug: 'netflix',
    title: 'Netflix 解锁机场：全区解锁、自制剧与实测截图状态 | 机场情报',
    description: '分析 Netflix 自制剧与全区解锁的技术差异，结合 2026-07-18 与 2026-08-19 实测图展示香港/台湾/新加坡/日本/美区解锁情况。',
    h1: 'Netflix 流媒体解锁原理与节点实测观察',
    eyebrow: 'AI & Streaming · Netflix',
    answerFirst: 'Netflix 对代理 IP 采取分层限制：被风控的非原生 IP 只能观看 Netflix 自制剧（Originals），而原生或经 DNS 路由优化的节点才能完整解锁当地非自制剧集。从站内光速云（2026-08-19）与无忧链接（2026-07-18）实测截图来看，香港、日本、新加坡、台湾与美国主流节点普遍实现了对应区域的完整解锁。',
    brandSlugs: ['guangsuyun', 'wuyou', 'weitu', 'xingdaomeng', 'shanyue'],
    sections: [
      {
        heading: '一、警惕台湾等地区的跨区漂移现象',
        lead: '部分节点虽显示“解锁”，但识别地区并非节点名称所标地区。',
        paragraphs: [
          '例如在灵动云 2026-07-20/21 实测摘要中，明确记录了“台湾落地识别偏欧（NF/D+ 识别 ES）”的现象；在光速云 70 节点测试中，台湾节点 Netflix 识别为 GB（英国）而香港/日本/新加坡/美国则准确对应本地片库。关注特定地区番剧/字幕的用户需留意实测中的地区后缀。',
        ],
      },
    ],
    faqs: [
      { q: '为什么节点写着台湾，打开 Netflix 却没有中文字幕或片源不对？', a: '因为该节点的出口 IP 被 Netflix 识别到了其他区域（如欧洲或英国）或处于自制剧降级状态，可尝试切换香港、新加坡或另一组台湾节点。' },
    ],
    relatedLinks: [
      { label: 'Disney+ 解锁情况', href: '/streaming-ai/disney-plus/' },
      { label: '流媒体区域错误排查', href: '/diagnostics/streaming-region/' },
    ],
  },
  {
    slug: 'disney-plus',
    title: 'Disney+ 解锁机场与实测区域差异分析 | 机场情报',
    description: '对比 Disney+ 在香港、日本、新加坡、美国与台湾节点上的真实解锁稳定性及失败案例。',
    h1: 'Disney+ 流媒体解锁特征与实测区域差异',
    eyebrow: 'AI & Streaming · Disney+',
    answerFirst: 'Disney+ 对机房 IP 的拦截率通常高于 Netflix。在无忧链接 2026-07-18 50 节点实测图中，全部 50 个香港/台湾/新加坡/日本/美国节点均解锁 Disney+；而在光速云 2026-08-19 62 节点截图中，香港、日本、新加坡、美国稳定解锁，但台湾 01–05 与欧洲部分节点显示 Disney+ 失败（70 节点批次中台湾则恢复解锁）。',
    brandSlugs: ['wuyou', 'guangsuyun', 'xingdaomeng', 'weitu'],
    sections: [
      {
        heading: '一、Disney+ 常见解锁失败排查',
        lead: '确认域名分流是否干净、是否混入了送中或屏蔽 IP。',
        paragraphs: [
          '观看 Disney+ 4K 内容除了节点解锁外，还需要单节点至少 25Mbps 以上的稳定带宽与纯净的海外 DNS 解析。遇到 Error 83 或无限转圈时，优先从台湾/欧洲节点切至香港或新加坡节点验证。',
        ],
      },
    ],
    faqs: [
      { q: '同一机场为什么有时 Netflix 能看而 Disney+ 报错？', a: '两个平台维护独立的 IP 黑名单与区域策略，如光速云 62 节点截图就直观展现了台湾节点 Netflix 解锁但 Disney+ 失败的差异。' },
    ],
    relatedLinks: [
      { label: 'Netflix 解锁', href: '/streaming-ai/netflix/' },
      { label: '流媒体检测工具指南', href: '/streaming-ai/checker/' },
    ],
  },
  {
    slug: 'youtube',
    title: 'YouTube 加速与“送中（CN）”节点识别指南 | 机场情报',
    description: '解析 4K/8K YouTube 流畅播放所需带宽条件，并解释实测截图中常见的“YouTube 送中（CN）”现象及规避方法。',
    h1: 'YouTube 4K/8K 加速性能与“送中（CN）”问题解析',
    eyebrow: 'AI & Streaming · YouTube',
    answerFirst: 'YouTube 几乎无需特殊流媒体解锁即可访问，4K 60fps 视频稳定播放通常需要 35Mbps 以上持续单线程吞吐；但部分海外节点会出现“YouTube 送中（CN）”现象（例如无忧链接香港01、光速云70节点测试中的新加坡与台湾节点、灵动云新/台节点），表现为 YouTube 推荐本地化错乱或后台提示受限，切换香港/日本正常节点即可避免。',
    brandSlugs: ['guangsuyun', 'wuyou', 'weifeng', 'lingdong'],
    sections: [
      {
        heading: '一、什么是 YouTube 送中（CN）',
        lead: '因大量境内用户共享同一海外 IP 并开启手机定位/Google 账号历史，导致 Google 将该出口 IP 位置校准为中国内地。',
        paragraphs: [
          'YouTube 送中后主要影响 YouTube Premium 后台播放、YouTube Music 可用性以及广告/推荐区域逻辑。在选节点时可优先参考实测截图中 `INTL_youtube` 显示 `解锁(HK/JP/US)` 的节点。',
        ],
      },
    ],
    faqs: [
      { q: '遇到 YouTube 送中会连带影响谷歌搜索或网速吗？', a: '通常不会明显降低视频加载速度，但会导致部分地区限定版权视频或 YouTube Premium 离线功能异常，切换到未送中的日本或美国节点即可恢复。' },
    ],
    relatedLinks: [
      { label: '香港节点特性', href: '/network/hong-kong/' },
      { label: '网络速度慢排查', href: '/diagnostics/slow-speed/' },
    ],
  },
  {
    slug: 'tiktok',
    title: 'TikTok 网络环境与跨区直连品牌资料整理 | 机场情报',
    description: '梳理 TikTok 运营、直播及日常刷视频对节点区域（禁用香港）与原生 IP 的要求，并对照无忧链接、星岛梦、光速云等实测记录。',
    h1: 'TikTok 网络环境要求与实测解锁表现对比',
    eyebrow: 'AI & Streaming · TikTok',
    answerFirst: '由于 TikTok 已退出香港市场，香港节点在常规检测中多显示失败或跳转 `ALISG`，因此使用 TikTok 必须锁定日本、新加坡、台湾或美国等目标区节点。站内无忧链接与星岛梦在资料中均突出 TikTok 跨区直连能力；在光速云 2026-08-19 70 节点实测中，日本、新加坡（部分）与美国节点正常解锁 TikTok；而灵动云 2026-07-20/21 实测则显示 TikTok 多节点失败。',
    brandSlugs: ['wuyou', 'guangsuyun', 'xingdaomeng', 'weitu', 'lingdong'],
    sections: [
      {
        heading: '一、跨境电商 TikTok 运营与普通刷视频的区别',
        lead: '普通观看只需目标区解锁；账号养号与直播推流对 IP 纯净度与独享隔离要求极高。',
        paragraphs: [
          '如果仅是日常浏览海外短视频，共享机场的日本/美国节点即可满足；但如果是高风控商业账号投放或直播，普通万人共享节点的 IP 极易出现 0 播放或限流，此时更建议考虑支持独享原生 IP 与独立带宽的企业定制方案（如光速云定制版）或合规独享住宅代理。',
        ],
      },
    ],
    faqs: [
      { q: '为什么手机挂了美国节点打开 TikTok 还是黑屏无网络？', a: 'TikTok 客户端不仅检查代理 IP，还会读取手机 SIM 卡运营商信息（MCC/MNC）、系统地区与时区，且要求代理软件开启全局或针对 TikTok 域名的完整 UDP/TCP 接管。' },
    ],
    relatedLinks: [
      { label: '原生 IP 概念辨析', href: '/network/native-ip/' },
      { label: '光速云定制套餐说明', href: '/pricing/guangsuyun-plans/' },
    ],
  },
  {
    slug: 'spotify',
    title: 'Spotify 跨区听歌与机场代理分流规则建议 | 机场情报',
    description: '说明 Spotify 账号注册地限制、14 天海外漫游校验机制以及最省流量的分流配置方式。',
    h1: 'Spotify 网络要求与低消耗分流配置思路',
    eyebrow: 'AI & Streaming · Spotify',
    answerFirst: 'Spotify 对代理的门槛远低于 Netflix 与 Gemini：日常听歌仅在账号跨区登录校验（每 14 天左右触发一次漫游限制）或注册新账号时，需要连接与账号地区一致的海外节点；其余绝大多数时间支持规则分流，不必消耗大量节点流量。站内光速云、暮光、飞猫、微风、星岛梦、二猫、无忧、唯兔、Firefly、U1S1、灵猫、一翻、闪跃与全球云均在资料中标注支持 Spotify。',
    brandSlugs: ['guangsuyun', 'feimao', 'weitu', 'ermao'],
    sections: [
      {
        heading: '一、防止 Spotify 提示“你已在海外超过 14 天”',
        lead: '在规则中固定 Spotify 域名走指定区域节点，或登录一次目标区节点刷新状态即可。',
        paragraphs: [
          '在 Clash Verge Rev 或 Shadowrocket 中保留主流 GEOSITE 分流规则时，Spotify 登录与 API 校验域名通常会自动匹配代理组，避免频繁掉线。',
        ],
      },
    ],
    faqs: [
      { q: '使用 SOGO 云或极连云能用 Spotify 吗？', a: 'SOGO 云资料标注视节点而定，极连云、可信云、速界等暂未测试 Spotify，使用前建议直接用月付实测账号区登录验证。' },
    ],
    relatedLinks: [
      { label: '分流规则教程', href: '/guides/routing-rules/' },
      { label: 'AI 与流媒体矩阵首页', href: '/streaming-ai/' },
    ],
  },
  {
    slug: 'checker',
    title: 'AI 与流媒体可用性自检方法与脚本工具说明 | 机场情报',
    description: '介绍如何使用标准 RegionRestrictionCheck 脚本与实测截图口径核验机场节点的真实解锁能力。',
    h1: 'AI 与流媒体可用性自检方法与结果读图规范',
    eyebrow: 'AI & Streaming · Verification',
    answerFirst: '不要只看机场宣传页写着“全解锁”就下单。用户在拿到月付测试订阅后，既可以借助开源媒体检测工具（如 RegionRestrictionCheck）或站内引用的 MiaoKo 测试流查看单节点的 Netflix（原生/自制）、Disney+、YouTube（是否送中 CN）与 OpenAI（Web/APP）状态，也可以直接在浏览器无痕窗口访问对应服务实测。',
    brandSlugs: ['guangsuyun', 'wuyou', 'lingdong'],
    sections: [
      {
        heading: '一、如何看懂截图里的关键状态标签',
        lead: '读懂 `解锁(地区)`、`仅APP`、`送中(CN)` 与 `N/A` 才能避开营销文字游戏。',
        bullets: [
          'Netflix 解锁(US/HK/JP)：代表可看完整当地片库；若仅显示“自制剧”则无法看地区版权剧。',
          'OpenAI 仅APP(HK)：代表移动端 App 可用但网页端会受地域拦截。',
          'YouTube 送中(CN)：代表 IP 被识别回中国内地，不影响普通视频播放但影响地区服务与 Premium 后台。',
        ],
      },
    ],
    faqs: [
      { q: '为什么 2026-08-11 批次的 16 张测速图里没有 AI 和流媒体结果？', a: '2026-08-11 批次截图仅测试了节点吞吐、RTT 与 UDP 类型，没有运行流媒体脚本；因此依据本站严格实证原则，不能从那批测速图推导解锁能力。' },
    ],
    relatedLinks: [
      { label: '全站 AI 与流媒体矩阵', href: '/streaming-ai/' },
      { label: '评测方法与局限说明', href: '/methodology/' },
    ],
  },
];
