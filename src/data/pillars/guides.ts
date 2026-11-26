import type { FaqItem } from '../../components/seo/FaqSection.astro';
import type { PillarSection } from './recommend';

export const GUIDES_PILLAR_SECTIONS: PillarSection[] = [
  {
    id: 'guide-roadmap',
    heading: '一、零基础用户的四阶段标准上手路线图',
    lead: '不要一上来就去研究复杂正则表达式或自定义 YAML 脚本；先把这四步顺序走通，95% 的日常使用需求就已经搞定。',
    paragraphs: [
      '新手折腾代理工具最容易受挫的原因，在于还没搞懂品牌是否支持第三方订阅，就先在网上下载来路不明的旧版软件并复制了一大段看不懂的覆写脚本，导致一开启就全体断网。',
      '本站教程体系专门按“认知选型 → 客户端安装 → 订阅接入 → 规则与系统调优”四个阶段编排，每一个子页面负责一个单一操作动作，本总览页帮你理清调用顺序与前置判断条件。',
    ],
    bullets: [
      'Phase 1 选套餐与查兼容：在 /guides/plan-selection/ 与 /guides/beginner/ 估算月流量需求，确认目标机场是否提供第三方订阅链接（注意 8 家仅支持专属端）。',
      'Phase 2 装对架构客户端：去 /guides/installation/ 核对 Windows/macOS/Android/iOS 对应的官方 GitHub 或商店来源，区分 arm64 与 x86_64。',
      'Phase 3 粘贴订阅连网：阅读 /guides/subscription/ 与 /guides/clash-verge/，导入 URL、更新节点列表并开启系统代理，测试访问谷歌/GitHub 是否正常。',
      'Phase 4 按需进阶调优：依次根据需求配置 /guides/routing-rules/（解决香港无法用 Gemini）、/guides/tun-mode/（接管终端与桌面端 AI）以及 /guides/dns/。',
    ],
  },
  {
    id: 'guide-sub-types',
    heading: '二、机场订阅导入前必须确认的三件事',
    lead: '看到面板里的“一键导入 Clash”按钮前，先核查系统时间、链接保密性与客户端内核版本。',
    paragraphs: [
      '第一步确认设备属于开放订阅体系还是专属 App 体系：例如光速云同时支持专属客户端与第三方订阅，而飞猫云、隐形人、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云共 8 家只能下载各自官网提供的一键客户端登录，不需要（也无法）提取通用订阅链接。',
      '第二步确认本机时钟与网络时间自动同步已开启：TLS 与 VMess/Trojan 等现代加密协议对本地系统时间误差极度敏感，电脑或手机时间偏差超过 60–90 秒会导致所有节点全红超时或拉取订阅失败。',
      '第三步养成“重置订阅链接即作废旧链接”的安全意识：订阅 URL 等同于你的账号密钥与流量余额授权，切勿将其公开发在论坛截图或粘贴进未知第三方在线转换网页。',
    ],
  },
  {
    id: 'guide-routing-tun-dns',
    heading: '三、分流规则、TUN 模式与 DNS 设置的正确启用边界',
    lead: '系统代理够用时不要盲目全开 TUN；遇到 AI 客户端和命令行不走代理时再启用服务模式 + TUN。',
    paragraphs: [
      '绝大多数浏览器网页需求（Chrome/Edge/Safari）在开启客户端的“系统代理（System Proxy）”与默认 Rule 分流规则后即可无缝运作：国内电商银行走 Direct 直连，常规境外站点走 Proxy 策略组，AI 策略组固定指向新加坡、日本或美国节点以避开香港区域限制（详见 /guides/routing-rules/）。',
      '只有当你发现桌面版 ChatGPT/Claude App、终端命令行（curl、git、pip、npm）、IDE 编程助手或桌面软件完全忽略系统代理设置时，才需要在 Clash Verge Rev 等桌面客户端中安装“服务模式（Service Mode）”并打开 TUN 虚拟网卡开关（详见 /guides/tun-mode/）。启用 TUN 后记得切勿再同时打开另一款加速软件。',
      'DNS 设置则重点解决“域名泄露”与“国内 CDN 变慢”一对矛盾：在默认规则里，Fake-IP 模式响应快、防泄露可靠，适合日常大部分场景；若本地局域网内网域名或特定企业环境有冲突，可按 /guides/dns/ 指引切换至 Redir-Host 配合加密 DoH。',
    ],
  },
  {
    id: 'guide-multi-device',
    heading: '四、多设备并发与订阅防失联维护习惯',
    lead: '一人在电脑、手机与平板上同时使用没有问题，但把同一个订阅发给多位室友或同事往往会触发同时在线 IP 数封禁。',
    paragraphs: [
      '各家品牌对“设备数限制”通常按同时在线的客户端出口请求 IP 数量、或月内活跃终端特征估算。常见套餐允许 3–5 台个人常用设备，部分品牌明确限 2–3 台或 5 台（如部分百元高配/大流量档标注 6 台以上或无严格数量限制但严禁共享倒卖）。详细各品牌限制见 /recommend/multi-device/ 与 /guides/multi-device/。',
      '为防止主力订阅面板域名遇阻导致更新不了节点，建议遵循 /guides/subscription-management/ 的做法：在客户端里保存一份最新的有效配置快照、收藏官网导航发布页或防失联邮箱，并且为重度工作流额外备一套低成本不限时流量包作为应急冗余。',
    ],
  },
  {
    id: 'guide-guangsuyun',
    heading: '五、以光速云为例：双模式配置路径对比',
    lead: '新手求省心可直接装官方端，有分流和软路由需求的进阶用户可直接导入通用订阅链接。',
    paragraphs: [
      '在本站核心推广品牌光速云的资料档案中，其完整保留了双兼容体系：如果电脑或手机是零基础首次使用，可以直接使用官网指引的快捷客户端方式；如果你已经在 Windows 用 Clash Verge Rev 或在 iPhone 上用 Shadowrocket，则直接复制订阅链接导入并固定日本/新加坡节点给 AI 分流组即可。完整步骤已拆解于 /guides/guangsuyun-setup/。',
    ],
  },
];

export const GUIDES_PILLAR_FAQS: FaqItem[] = [
  { q: '新电脑刚装好 Clash Verge Rev，导入订阅后一定要开 TUN 模式吗？', a: '不一定。如果只是用 Chrome、Edge 上网、查资料和看 YouTube，只开“系统代理”就已经足够且更省资源；只有终端命令行（Git/npm/pip）、桌面 AI App 或忽略系统代理的应用连不上时才需要安装服务模式并打开 TUN。' },
  { q: '为什么复制了机场订阅链接到客户端，点击更新却提示超时或解析错误？', a: '最常见原因有三个：1) 买了仅限专属客户端的品牌却试图找订阅；2) 复制了网页地址栏的登录 URL 而非后台提供的专用订阅 URL；3) 当前网络无法直接拉取原始订阅域名，需开启客户端“使用系统代理更新”或核对系统时间。' },
  { q: 'Rule（规则模式）和 Global（全局模式）日常到底用哪个？', a: '日常 99% 时间请保持 Rule（规则模式），它能保证微信、淘宝、国内银行直连不降速，同时境外域名自动走代理；Global（全局模式）仅在临时排查某个生僻海外域名是否漏掉规则时短时使用。' },
  { q: '怎么把订阅同时导入 Windows 电脑和 iPhone 手机？', a: '确认所用套餐支持多设备（个人日常 2–4 台设备一般均在常规许可内）后，在 iPhone 端（如 Shadowrocket）直接扫码或粘贴同一条订阅链接即可，无需购买两份套餐。但不要把订阅分享给外人多人共用。' },
  { q: '订阅链接里的节点突然全红测不出延迟，是不是客户端坏了？', a: '不一定。首先检查本机系统时间是否校准（误差不能超 1 分钟），其次在客户端手动点击刷新订阅同步最新节点域名与端口，如仍全灭可转入 /diagnostics/all-timeout/ 逐步定位。' },
  { q: '什么是 Fake-IP 模式？打开后会影响访问公司内网或路由器后台吗？', a: 'Fake-IP 会给待解析域名返回一个 198.18.0.0/16 保留段假地址以实现零延迟分流和防 DNS 泄露。正常配置下，192.168.x.x 等局域网 IP 与 skip-domain 列表会自动放行访问路由器后台；若遇到极少数公司内网 DNS 解析异常，可切至 Redir-Host 观察。' },
  { q: '飞猫云、无忧链接这类专属客户端机场有使用教程吗？', a: '专属客户端无需在本地配置 YAML、策略组或安装 Mihomo/sing-box 核心，只需确保设备不与其他 VPN/游戏加速器同时开启，安装官网提供的安装包登录账号后一键开关即可。' },
  { q: '买机场之前，怎么估算自己每月到底需要多少 GB 流量？', a: '纯文字网页、ChatGPT/Claude 对话、代码查阅与办公每月大约只需 20–50GB；每天看 1080p YouTube 或 Netflix 约 80–150GB；经常看 4K 视频、同步海外云盘或下载大型安装包则建议看 200GB 以上月付档（详见 /guides/plan-selection/）。' },
];
