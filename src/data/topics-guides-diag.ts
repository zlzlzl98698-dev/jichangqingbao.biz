import type { SubtopicEntry } from './topics-commercial';

export const GUIDES_TOPICS: SubtopicEntry[] = [
  {
    slug: 'subscription',
    title: '机场订阅教程：导入链接、自动更新与专属客户端区分 | 机场情报',
    description: '详细演示 Clash/v2rayN/Shadowrocket 通用订阅导入方法，并核对当前不提供订阅链接的专属客户端品牌清单。',
    h1: '机场订阅导入通用教程与兼容前提检查',
    eyebrow: 'Guides · Subscription',
    answerFirst: '导入机场订阅前必须先确认所购品牌是否开放第三方订阅链接。对于光速云、星岛梦、唯兔云、微风、二猫、一翻、可信、速界、极连、光年梯、梯子云等支持第三方订阅的品牌，在官网复制订阅地址并粘贴到 Clash Verge Rev、v2rayN、Shadowrocket 或 Hiddify 即可拉取节点；而飞猫、无忧、灵猫、Firefly、SOGO、闪跃、全球云与隐形人则仅支持下载官方专属 App 登录使用。',
    brandSlugs: ['guangsuyun', 'tiziyun', 'weitu', 'yifan'],
    sections: [
      {
        heading: '一、标准订阅导入四步流程',
        lead: '避免在网页端手动逐条复制单节点 URI，订阅链接支持批量更新 IP 与端口。',
        bullets: [
          '1. 在机场控制面板确认套餐处于有效期内且流量未耗尽，点击“一键导入”或“复制订阅链接”。',
          '2. 打开对应客户端（如 Clash Verge Rev「订阅/Profiles」、Shadowrocket 右上角「+」），粘贴完整 HTTPS 链接。',
          '3. 点击更新订阅，确认节点列表成功拉取且无 YAML 语法报错。',
          '4. 开启系统代理或 TUN 模式，使用规则（Rule）模式进行测速与访问。',
        ],
      },
    ],
    faqs: [
      { q: '为什么我的订阅链接在浏览器里能打开，客户端却拉取失败？', a: '部分订阅域名需要过墙才能拉取，或客户端请求 User-Agent 被拦截。可先关闭当前失效代理再更新，或尝试启用代理更新订阅。' },
    ],
    relatedLinks: [
      { label: 'Clash Verge Rev 配置教程', href: '/guides/clash-verge/' },
      { label: '订阅失败诊断排查', href: '/diagnostics/subscription-failed/' },
    ],
  },
  {
    slug: 'clash-verge',
    title: 'Clash Verge Rev 配置教程：导入订阅、分流与 TUN 模式设置 | 机场情报',
    description: '针对 Clash Verge Rev（Mihomo 内核）的分步操作教程，专注安装后配置、规则模式、延迟测试与 TUN 模式开启，不与客户端百科页重复。',
    h1: 'Clash Verge Rev 订阅导入、分流与 TUN 模式配置教程',
    eyebrow: 'Guides · Clash Verge Rev',
    answerFirst: '本页专注 Clash Verge Rev 的实际配置操作（软件背景与下载地址请参见 /clients/clash-verge/）。完成安装后，只需依次完成“订阅页粘贴 URL 下载配置 → 选中激活配置文件 → 代理页切换至 Rule 规则模式 → 对常用地区分组测速选点 → 开启系统代理（或安装服务模式开启 TUN）”，即可在 Windows、macOS 与 Linux 上正常使用。',
    brandSlugs: ['guangsuyun', 'weitu', 'xingdaomeng'],
    sections: [
      {
        heading: '一、第一步：导入配置与激活',
        lead: '导入后必须双击或单击选中新配置卡片，使其处于激活状态。',
        paragraphs: [
          '在 Clash Verge Rev 左侧进入「订阅（Profiles）」，将机场复制的 Clash/Mihomo 订阅链接填入顶部输入框并点击「导入」。若订阅拉取超时，可打开该配置右侧菜单确认是否开启“使用代理更新”或检查系统时间是否准确。',
        ],
      },
      {
        heading: '二、第二步：系统代理与 TUN 模式选择',
        lead: '日常浏览器上网用系统代理即可；命令行/桌面 AI 应用/游戏需要开启 TUN。',
        paragraphs: [
          '在「设置（Settings）」中，日常使用打开「系统代理（System Proxy）」即可。如果需要接管不读取系统代理的终端工具（如 Git/CLI/桌面软件），需先点击「服务模式（Service Mode）」右侧安装系统服务，再开启「TUN 模式」。',
        ],
      },
    ],
    faqs: [
      { q: 'Clash Verge Rev 应该选 Rule（规则）还是 Global（全局）？', a: '日常强烈建议选择 Rule（规则）模式，国内流量自动直连不消耗套餐流量，海外域名走节点；仅在排查分流漏网或特定测试时临时切换 Global。' },
    ],
    relatedLinks: [
      { label: 'Clash Verge Rev 软件档案（不互抢）', href: '/clients/clash-verge/', note: '查看支持内核、架构与官方下载仓库' },
      { label: 'TUN 模式深度说明', href: '/guides/tun-mode/' },
      { label: 'TUN 模式异常排查', href: '/diagnostics/tun-error/' },
    ],
  },
  {
    slug: 'installation',
    title: '代理客户端安装与系统架构选择指南（Win/Mac/Android/iOS/Linux）| 机场情报',
    description: '教你正确识别 Windows x64/ARM64、macOS Intel vs Apple Silicon、Android arm64-v8a 与 Linux DEB/RPM/AppImage 安装包。',
    h1: '全平台客户端安装架构识别与安全下载指南',
    eyebrow: 'Guides · Installation',
    answerFirst: '客户端安装失败最常见的原因是下错 CPU 架构安装包或误信第三方修改版网站。根据站内客户端安装核实规范：macOS 务必区分 Intel（x86_64）与 Apple Silicon（M 系列 arm64）；Linux 需按发行版选择 DEB/RPM/AppImage；Android 现代机型优先选 arm64-v8a；iOS 用户需使用非中国大陆区 App Store 购买或下载官方正版。',
    sections: [
      {
        heading: '一、六大系统安装包避坑对照',
        lead: '严禁在搜索引擎广告位下载“中文破解版”或共享陌生 Apple ID。',
        bullets: [
          'Windows：主流 64 位电脑选 `x64` / `amd64` 安装包（`.exe` 或 `.msi`），Surface 等骁龙设备选 `arm64`。',
          'macOS：Apple M1/M2/M3/M4 芯片选 `aarch64` / `arm64` DMG；老款英特尔 Mac 选 `x64` DMG。',
          'Android：95% 以上近年手机为 `arm64-v8a`，不要混用第三方篡改签名的 NekoBox Google Play 仿冒版。',
          'OpenWrt 软路由：安装前必须先确认 OpenWrt 版本、CPU 架构及防火墙依赖（例如 Nikki 要求 OpenWrt 24.10 及以上）。',
        ],
      },
    ],
    faqs: [
      { q: 'macOS 打开下载的开源客户端提示“已损坏，无法打开”怎么办？', a: '这是 macOS Gatekeeper 对未在苹果商店公证软件的常规拦截，确认来源为官方 GitHub Release 后，可在终端执行 `xattr -cr` 清除隔离属性或于隐私与安全性中允许打开。' },
    ],
    relatedLinks: [
      { label: '客户端百科总览', href: '/clients/' },
      { label: '客户端无法启动排查', href: '/diagnostics/client-launch/' },
    ],
  },
  {
    slug: 'routing-rules',
    title: '分流规则原理与 AI/流媒体策略组自定义教程 | 机场情报',
    description: '解释 GEOSITE/GEOIP 分流逻辑、国内直连防消耗以及如何将 ChatGPT/Gemini 单独指定至新加坡/日本节点。',
    h1: '分流规则与策略组原理：让国内直连、AI 与流媒体各行其道',
    eyebrow: 'Guides · Routing Rules',
    answerFirst: '分流规则的核心是让国内网站与局域网流量直连（DIRECT），境外常规网站与特定应用分别走对应策略组（PROXY）。针对当前常见的“香港节点最快但打不开 Gemini/ChatGPT 网页版”的痛点，最佳实践是在规则或覆写配置中把 OpenAI 与 Gemini 域名单独指向新加坡或日本策略组，而日常浏览依然保持香港低延迟节点。',
    sections: [
      {
        heading: '一、为什么不要长期使用 Global 全局模式',
        lead: '全局模式会让微信、网盘、视频软件全部绕道海外节点并白白扣光流量。',
        paragraphs: [
          '在 Clash/Mihomo 规则体系中，规则按从上到下顺序匹配，一旦命中 `DOMAIN-SUFFIX`、`GEOSITE,cn` 或 `GEOIP,CN,DIRECT` 即立即执行，最后的 `MATCH` 兜底走代理。因此自定义规则（例如将 `gemini.google.com` 指定到新加坡组）必须插在最上方才有效。',
        ],
      },
    ],
    faqs: [
      { q: '分流规则放在“自动选择”好还是手动指定地区好？', a: '流媒体与 AI 工具强烈建议手动指定单一国家/地区组，防止自动选点在港/台/新之间跳变引发风控登出。' },
    ],
    relatedLinks: [
      { label: 'DNS 配置与防泄漏', href: '/guides/dns/' },
      { label: 'Gemini 节点实测分析', href: '/streaming-ai/gemini/' },
    ],
  },
  {
    slug: 'tun-mode',
    title: 'TUN 模式教程：虚拟网卡原理、系统服务安装与关闭后断网处理 | 机场情报',
    description: '讲解 Clash Verge Rev / v2rayN / sing-box 中 TUN 模式的原理、适用场景及与杀毒软件/校园网/游戏加速器的冲突排查。',
    h1: 'TUN 模式原理与安全配置指南',
    eyebrow: 'Guides · TUN Mode',
    answerFirst: 'TUN 模式是在操作系统内核层创建一张虚拟网卡（如 Meta/utun），直接接管整机 IP 层 TCP/UDP/ICMP 流量，而不仅仅依赖浏览器的 HTTP/SOCKS 系统代理设置。它非常适合终端命令行、Cursor/VS Code 插件、桌面 AI 应用及 UWP/商店软件；但在开启前需安装系统服务权限，且不要与其它 VPN 或游戏加速器同时开启以免路由表冲突。',
    sections: [
      {
        heading: '一、系统代理 vs TUN 模式适用场景',
        lead: '普通浏览器只需系统代理；全进程无感代理需要 TUN。',
        paragraphs: [
          '部分公司内网、校园网认证页面或国内网银控件可能对虚拟网卡敏感，此时可在客户端中开启“跳过局域网与绕过大陆 IP”或使用分应用/进程规则排除。',
        ],
      },
    ],
    faqs: [
      { q: '为什么开启 TUN 模式后本地国内网速变慢或游戏延迟变高？', a: '请检查栈模式（推荐 `mixed` 或 `system`）并确认没有同时运行另一款 VPN 或游戏加速器争夺默认网关路由。' },
    ],
    relatedLinks: [
      { label: 'TUN 模式异常排查', href: '/diagnostics/tun-error/' },
      { label: 'Clash Verge 配置教程', href: '/guides/clash-verge/' },
    ],
  },
  {
    slug: 'dns',
    title: 'DNS 配置教程：Fake-IP 与 Redir-Host 区别及防污染原则 | 机场情报',
    description: '解释代理客户端中的 Fake-IP（198.18.0.1）与 Redir-Host 模式差异、DoH/DoT 上游设置及 DNS 泄漏防范。',
    h1: '代理客户端 DNS 配置原理与 Fake-IP / Redir-Host 选择',
    eyebrow: 'Guides · DNS',
    answerFirst: '在代理环境中，若 DNS 查询走本地运营商明文解析，不仅可能返回被污染的错误 IP，还会导致海外流媒体或 AI 判定地区错乱。主流 Mihomo/sing-box 客户端普遍采用 Fake-IP 模式：本地请求先获得 `198.18.x.x` 虚拟保留地址以实现零延迟分流，真实域名则交由海外节点端代为解析（远端解析），从而同时防止污染和区域泄露。',
    sections: [
      {
        heading: '一、Fake-IP 模式的常见副作用与对策',
        lead: '部分局域网设备或内网服务不希望返回 198.18.x.x 虚拟地址。',
        paragraphs: [
          '遇到公司内网域名、NAS 设备名或特殊应用在 Fake-IP 下异常时，将其域名加入 `fake-ip-filter` 跳过名单，或按需切换为 `redir-host` 模式搭配 DoH（DNS over HTTPS）即可解决。',
        ],
      },
    ],
    faqs: [
      { q: '为什么退出代理软件后浏览器显示 DNS 解析失败？', a: '客户端非正常崩溃时可能未恢复系统网卡的 DNS 设置（仍指向 127.0.0.1 或虚拟网卡），重新打开再正常退出客户端，或在网卡设置中恢复自动获取 DNS 即可。' },
    ],
    relatedLinks: [
      { label: 'DNS 错误故障排查', href: '/diagnostics/dns-error/' },
      { label: '分流规则设置', href: '/guides/routing-rules/' },
    ],
  },
  {
    slug: 'multi-device',
    title: '多设备同时使用教程：手机电脑跨端同步与订阅安全 | 机场情报',
    description: '介绍如何在 Windows/Mac/iPhone/Android/OpenWrt 多端共用机场订阅，对比通用订阅与专属客户端的限制。',
    h1: '多设备使用指南：跨平台协同与账号防风控规范',
    eyebrow: 'Guides · Multi-Device',
    answerFirst: '实现电脑、手机与平板多端同时翻墙，前提是选择明确支持多设备或无限设备的机场（如光速云、星岛梦、唯兔云、二猫云、一翻云、U1S1），并在各端安装兼容客户端（推荐全端统一使用 Clash Verge Rev/FlClash/Karing 或桌面 Clash + iOS Shadowrocket）。若买了仅限专属客户端的品牌，则各设备均须单独下载其官方 App 登录。',
    brandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'ermao'],
    sections: [
      {
        heading: '一、家庭路由器（OpenWrt）集中代理与单机客户端对比',
        lead: '若家中有电视盒子、PlayStation 或多台智能终端，OpenWrt 软路由更省心。',
        paragraphs: [
          '注意：飞猫云、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云与隐形人等不提供订阅链接的品牌均无法直接配置进 OpenWrt（OpenClash / PassWall2 / Nikki / HomeProxy）。家庭网关用户务必选择支持通用订阅的服务商。',
        ],
      },
    ],
    faqs: [
      { q: '同一条订阅链接能直接发给朋友一起用吗？', a: '不建议。不同城市宽带 IP 并发拉取同一订阅或长连接容易触发面板风控封锁甚至流量被盗用。' },
    ],
    relatedLinks: [
      { label: '多设备机场推荐', href: '/recommend/multi-device/' },
      { label: 'OpenWrt 客户端百科', href: '/clients/openwrt/' },
    ],
  },
  {
    slug: 'subscription-management',
    title: '机场订阅管理规范：定期重置 Token、流量预警与备份订阅 | 机场情报',
    description: '讲解订阅链接泄露后的重置流程、多机场订阅在 Karing/Clash 中的聚合方式及防失联备份策略。',
    h1: '机场订阅安全管理与多线路防失联策略',
    eyebrow: 'Guides · Subscription Management',
    answerFirst: '订阅链接本身相当于一把包含全部节点密码的钥匙，一旦在公开截图或未加密网页中泄露，他人即可消耗你的套餐流量。养成两项管理习惯可大幅提升安全性：1) 怀疑流量异常消耗时立即在机场面板重置订阅链接（Reset UUID/Token）；2) 为主力月付机场搭配一个一次性不限时包作为备用订阅。',
    sections: [
      {
        heading: '一、多订阅合并管理的推荐工具',
        lead: '避免在一套配置里同时跑两家高消耗测速。',
        paragraphs: [
          '在 Clash Verge Rev、FlClash、v2rayN 与 Karing 中均可同时保留多个订阅配置卡片，主机场遇临时维护时一键点击切换至备用不限时订阅，无需重新配置本地规则或重启软件。',
        ],
      },
    ],
    faqs: [
      { q: '在机场官网点了“重置订阅”后，客户端怎么立刻无法使用了？', a: '因为旧订阅链接已被服务端作废，必须复制重置后的新订阅链接重新导入客户端并删除旧配置。' },
    ],
    relatedLinks: [
      { label: '不限时备用套餐对比', href: '/pricing/no-expiry/' },
      { label: '订阅失败排查', href: '/diagnostics/subscription-failed/' },
    ],
  },
  {
    slug: 'plan-selection',
    title: '机场套餐选择指南：流量、设备与周期匹配 | 机场情报',
    description: '提供可量化的月度流量消耗估算模型、1x/2x 节点倍率计算方式及首单月付试错步骤，帮用户精准避开“买太小不够用”与“超长年付难退换”误区。',
    h1: '机场套餐选择方法论：流量估算与周期决策模型',
    eyebrow: 'Guides · Plan Selection',
    answerFirst: '选择机场套餐的核心是先算月消耗量与确定性，再选计费周期：仅查文字资料/AI 对话的用户每月 40–70GB 足够（可考虑轻量年付或 100GB 一次性包）；日常刷网页加中等视频建议 120–200GB/月（对应 15–25 元月付主流档）；长期看 4K 视频或团队同步则需要 300GB–1TB 大流量档。无论预算高低，首单务必先试月付。',
    sections: [
      {
        heading: '一、四步避坑决策公式',
        lead: '算清倍率、退款条款与客户端限制。',
        bullets: [
          '第一步：确认自己是否必须用 Clash/Shadowrocket/软路由，先过滤掉仅专属客户端品牌。',
          '第二步：根据每月流量选档，并核查节点是否为 ×1 倍率。',
          '第三步：首次只买最低档月付（14.9–25 元）测试 7 天本地晚高峰表现。',
          '第四步：确认可用且知悉不可退款规则后，再决定是否换购年付折扣或补充不限时备用包。',
        ],
      },
    ],
    faqs: [
      { q: '为什么不建议新人一上来就用年付优惠码买两年或三年？', a: '代理行业存在线路调整与运营存续不确定性，过长预付周期会放大沉没成本，短期按月或按季付的风险可控度远高于多年付。' },
    ],
    relatedLinks: [
      { label: '全部 154 条套餐数据库', href: '/pricing/' },
      { label: '机场退款政策风险', href: '/intelligence/refund-policy/' },
    ],
  },
  {
    slug: 'beginner',
    title: '新手入门完整指南：从认识机场概念到连上第一个节点 | 机场情报',
    description: '面向零基础用户的完整入门路线图：解释什么是机场、什么是订阅、客户端怎么选及初次购买注意项。',
    h1: '零基础机场新手入门全流程指南',
    eyebrow: 'Guides · Beginner Guide',
    answerFirst: '在中文网络服务语境中，“机场”指提供加密跨境代理节点并按月/按流量计费的服务商（因早年主流协议 Shadowsocks 图标为纸飞机而得名）。新手上手只需三步：1) 在品牌库中选一家有月付或简易客户端的服务商完成注册；2) 下载对应的客户端软件（专属 App 或 Clash Verge Rev/Shadowrocket）；3) 登录或导入订阅后开启规则代理即可。',
    brandSlugs: ['guangsuyun', 'feimao', 'tiziyun'],
    sections: [
      {
        heading: '一、新手常见术语速查',
        lead: '花 2 分钟弄清五个核心名词即可避免 90% 的沟通障碍。',
        bullets: [
          '节点：部署在海外（香港/日本/新加坡/美国等）或经专线中转的代理服务器入口。',
          '订阅链接：包含你账号权限与全部节点配置的一串加密 HTTPS 地址。',
          '客户端：安装在你手机或电脑上用来连接节点的软件（如 Clash Verge Rev、v2rayNG、Shadowrocket）。',
          '分流（Rule）：让国内网站走直连、海外网站走节点的规则集。',
          '倍率：消耗 1GB 实际下载时扣除套餐流量的倍数（×1 最透明）。',
        ],
      },
    ],
    faqs: [
      { q: '为什么买好了机场套餐，电脑还是打不开海外网页？', a: '购买套餐只是拥有了服务器权限，必须在本地安装客户端、导入订阅并开启“系统代理”或“连接开关”后才能生效。' },
    ],
    relatedLinks: [
      { label: '新手机场选型推荐', href: '/recommend/beginner/' },
      { label: '机场订阅教程', href: '/guides/subscription/' },
    ],
  },
  {
    slug: 'guangsuyun-setup',
    title: '光速云客户端使用教程：自研客户端与 Clash / Shadowrocket 导入步骤 | 机场情报',
    description: '光速云双模式接入实操指南：包含自研客户端快速登录流程与 Clash Verge Rev / Shadowrocket 订阅导入及 AI 切点提示。',
    h1: '光速云客户端使用与第三方订阅导入教程',
    eyebrow: 'Flagship Cluster · 光速云教程',
    answerFirst: '光速云同时支持官方自研客户端与第三方通用订阅导入（VLESS/SS 兼容）。新手可直接登录官网下载对应系统的自研客户端一键连接；希望使用分流规则的桌面或 iOS 用户，可在官网用户中心复制订阅链接，导入 Clash Verge Rev 或 Shadowrocket，并在访问 ChatGPT/Gemini 时手动切至新加坡或日本节点。',
    brandSlugs: ['guangsuyun'],
    sections: [
      {
        heading: '一、使用光速云时的两个实操要点',
        lead: '本页专注光速云客户端操作流程，完整评测与套餐价格见主品牌档案页。',
        paragraphs: [
          '1. 根据 2026-08-19 实测截图与官方提示，若使用香港节点打开 Gemini 失败或 ChatGPT 网页提示受限，切勿重复重启客户端，直接在策略组里切到新加坡（SG）或日本（JP）节点即可。',
          '2. 若订阅导入遇到 VLESS 或 AnyTLS 节点识别问题，请确保 Clash Verge Rev（Mihomo 内核）或 Shadowrocket 已更新至较新版本，或联系官网客服确认当前订阅格式。',
        ],
      },
    ],
    faqs: [
      { q: '光速云一个账号可以在手机和电脑上同时使用吗？', a: '根据光速云核实品牌资料，其轻量版、极速版、147永久套餐与定制版均明确标注“不限设备/不限客户端数量”，支持多端同时在线。' },
    ],
    relatedLinks: [
      { label: '回到光速云旗舰综合评测（主锚点）', href: '/brands/guangsuyun/' },
      { label: '光速云套餐选择与优惠码 AMM', href: '/pricing/guangsuyun-plans/' },
    ],
  },
];

export const DIAGNOSTICS_TOPICS: SubtopicEntry[] = [
  {
    slug: 'node-timeout',
    title: '节点超时（Timeout）原因定位与逐步排查教程 | 机场情报',
    description: '专注部分或单个代理节点在 Clash/Shadowrocket 中测速显示 Timeout 的排查步骤，与全节点超时故障严格区分。',
    h1: '机场节点超时（Timeout）原因定位与逐步排查',
    eyebrow: 'Diagnostics · Node Timeout',
    answerFirst: '单个或部分节点测速显示“超时（Timeout）”通常不是账号失效，而是该特定服务器瞬时维护、跨运营商路由波动或本地客户端测速并发过高所致。优先检查该地区其余备用编号（如从香港01切至香港05），更新一次订阅以拉取最新端口与 IP，并核对本地系统时间偏差是否超过 60 秒。',
    sections: [
      {
        heading: '一、部分节点超时的五步排查清单',
        lead: '先做低成本本地验证，再判断是否为上游单节点宕机。',
        bullets: [
          '1. 手动切换同地区其他节点（例如在实测截图中个别节点可能录得 0B/Timeout 而同组其他编号正常）。',
          '2. 在客户端点击更新订阅，防止服务端已更换端口或中转入口 IP。',
          '3. 核对电脑/手机系统时间是否开启“自动同步网络时间”（VLESS/Trojan 等 TLS 协议要求客户端与服务端误差在数十秒内）。',
          '4. 检查 Clash 测速 URL 是否可用（常见如 `cp.cloudflare.com/generate_204` 或 `www.gstatic.com/generate_204`）。',
          '5. 若同一订阅全部节点均超时，请移步【全部节点超时排查】流程。',
        ],
      },
    ],
    faqs: [
      { q: '测速显示 Timeout 但手动选中该节点有时却能打开网页，是怎么回事？', a: '部分节点禁用了测速并发探测或处于高延迟边缘，且部分测速 URL 可能被临时干扰，实际能否连通应以打开真实网页为准。' },
    ],
    relatedLinks: [
      { label: '全部节点超时排查（勿混淆）', href: '/diagnostics/all-timeout/' },
      { label: '低延迟与 RTT 指标说明', href: '/network/low-latency/' },
    ],
  },
  {
    slug: 'all-timeout',
    title: '全部节点超时怎么办：本地断网、订阅过期与上游故障排查 | 机场情报',
    description: '当所有代理节点同时显示 Timeout 或无法握手时，系统排查套餐到期、系统时间、VPN 冲突及服务异常。',
    h1: '全部节点超时（All Timeout）系统诊断指南',
    eyebrow: 'Diagnostics · All Timeout',
    answerFirst: '如果一个订阅下的全部节点同时测速超时且无法打开任何海外网站，90% 以上源于四类共性问题：1) 套餐已过期或流量已耗尽；2) 本地网络本身未联网或系统时间误差过大；3) 订阅长时间未更新导致旧入口 IP 整体失效；4) 电脑同时开启了另一款 VPN/加速器/安全卫士拦截了出站端口。请切勿第一时间直接判定机场“跑路”。',
    sections: [
      {
        heading: '一、按优先级从高到低逐项排错',
        lead: '先查自身账号和本地环境，再查服务商公告。',
        bullets: [
          '检查官网面板：确认剩余流量大于 0 且未到期（部分年付套餐在重置日次日需重新更新订阅或确认未超限）。',
          '核对本地时间：Windows/macOS 电脑若主板电池没电或双系统切换导致时间差了数小时，VLESS/VMess/Trojan 全部节点都会无法握手。',
          '更新订阅链接：若官网域名或中转入口更新，需用浏览器或开启手机流量拉取最新订阅。',
          '排查本地冲突：退出其他代理软件、杀毒网络防火墙或游戏加速器后重试。',
        ],
      },
    ],
    faqs: [
      { q: '全部节点超时且机场旧官网也打不开，就是跑路了吗？', a: '不一定。国内网络环境常见域名屏蔽或本地 DNS 污染导致旧入口暂时打不开；应通过官方通知频道或本站风险核查标准确认是否属于域名变更。' },
    ],
    relatedLinks: [
      { label: '机场跑路预警核查标准', href: '/intelligence/exit-scam/' },
      { label: '订阅失败排查', href: '/diagnostics/subscription-failed/' },
    ],
  },
  {
    slug: 'subscription-failed',
    title: '订阅更新失败怎么办：SSL/超时/格式报错快速定位 | 机场情报',
    description: '解决 Clash Verge Rev、v2rayN 与 Shadowrocket 拉取机场订阅时报 Network Error、SSL 错误或 YAML 解析失败的问题。',
    h1: '机场订阅拉取失败（Subscription Failed）原因与解决步骤',
    eyebrow: 'Diagnostics · Subscription Failed',
    answerFirst: '客户端提示订阅下载失败或解析报错，通常有四个原因：1) 复制订阅地址时前后多带了空格、换行或错把官方专属客户端账号链接粘贴到了 Clash；2) 订阅下发域名在本地运营商处被阻断；3) 客户端内置 User-Agent 与面板不匹配；4) 客户端版本过旧无法解析新的 VLESS/Hysteria 2/AnyTLS 节点字段。',
    sections: [
      {
        heading: '一、常见报错对症处理',
        lead: '先确认该品牌是否真的提供第三方订阅链接。',
        bullets: [
          '专属端误导检查：飞猫、无忧（2026-10起）、灵猫（2026-10起）、Firefly（2026-10起）、SOGO、闪跃、全球云与隐形人均不提供 Clash 订阅，切勿强行导入官网网址。',
          'Network / Timeout 报错：先关闭当前失效的系统代理，再切换手机热点试着更新一次订阅；或开启允许借助可用代理更新。',
          'YAML / Format Error：将客户端升级至最新版本（如 Clash Verge Rev 或 Mihomo 新内核），或在官网面板选择专用的 Clash/Shadowrocket 订阅地址。',
        ],
      },
    ],
    faqs: [
      { q: '为什么手机 5G 网络可以更新订阅，家里宽带却失败？', a: '说明订阅链接托管域名在你的家庭宽带运营商处存在 DNS 污染或连接重置，用手机更新一次或开启代理更新即可。' },
    ],
    relatedLinks: [
      { label: '订阅管理与重置规范', href: '/guides/subscription-management/' },
      { label: '客户端兼容清单', href: '/clients/' },
    ],
  },
  {
    slug: 'connection-failed',
    title: '客户端显示已连接但上不了网排查 | 机场情报',
    description: '解决代理软件显示绿色已连接且延迟正常，但浏览器或应用依然提示无法访问互联网的问题。',
    h1: '已连接节点却无法上网（Connection Failed）故障排查',
    eyebrow: 'Diagnostics · Connection Failed',
    answerFirst: '客户端测速有毫秒数却“上不了网”，典型原因是流量根本没有成功交由代理客户端接管：常见如忘记开启「系统代理（System Proxy）」开关、浏览器安装了冲突的代理插件（如 SwitchyOmega 未切回系统代理）、本地防火墙拦截端口（如 7890/10808），或电脑未同步导致 DNS 请求卡死。',
    sections: [
      {
        heading: '一、四步恢复流量接管',
        lead: '区分是“浏览器没走代理”还是“节点端不通”。',
        bullets: [
          '1. 确认 Clash Verge Rev / v2rayN 主界面的「系统代理」开关已打开（或已启用 TUN 模式）。',
          '2. 检查 Chrome/Edge 是否装有代理扩展且被设为“直接连接”，将其设为“系统代理”或停用冲突扩展。',
          '3. 查看客户端「连接（Connections）」日志页，刷新网页时观察是否出现了新的连接请求记录及是否有流量字节增长。',
          '4. 关闭系统代理或切换节点测试，确认本地宽带本身在直连国内网站时正常。',
        ],
      },
    ],
    faqs: [
      { q: '为什么退出代理软件后连国内网站也打不开了？', a: '通常是软件异常关闭导致 Windows/macOS 的系统代理开关（127.0.0.1:7897）未自动复位。打开系统网络代理设置手动关闭即可恢复。' },
    ],
    relatedLinks: [
      { label: 'DNS 错误排查', href: '/diagnostics/dns-error/' },
      { label: 'TUN 模式异常排查', href: '/diagnostics/tun-error/' },
    ],
  },
  {
    slug: 'dns-error',
    title: '代理环境 DNS 错误与网站解析异常修复指南 | 机场情报',
    description: '排查开启代理后出现的 ERR_NAME_NOT_RESOLVED、Fake-IP 冲突以及特定域名解析错误。',
    h1: '代理环境 DNS 错误定位与清理步骤',
    eyebrow: 'Diagnostics · DNS Error',
    answerFirst: '浏览网页提示 `ERR_NAME_NOT_RESOLVED` 或本地应用找不到主机，多源于代理软件接管 DNS 后上游 DoH 不可达、本地浏览器开启了冲突的“安全 DNS（DoH）”，或开启 Fake-IP 模式后未正确清理系统 DNS 缓存。临时关闭浏览器自带加密 DNS 并刷新系统 DNS 缓存通常可立即恢复。',
    sections: [
      {
        heading: '一、DNS 冲突典型处理方法',
        lead: '代理客户端接管 DNS 时，浏览器内的 DoH 往往会引发双重解析或绕过分流。',
        bullets: [
          '在 Chrome / Edge 设置中关闭“使用安全 DNS”，让请求统一交由系统及代理客户端按规则分流。',
          'Windows 可在命令提示符执行 `ipconfig /flushdns` 清除异常缓存；macOS 可重启网卡或重置网络位置。',
          '若公司内网域名因 Fake-IP（198.18.x.x）无法解析，将其加入配置文件的 `fake-ip-filter` 列表。',
        ],
      },
    ],
    faqs: [
      { q: '开代理时 DNS 应该填国内还是国外地址？', a: '标准分流架构中应由配置区分：国内直连域名走国内 DoH（如 AliDNS/DNSPod），国外域名走国外加密 DNS（如 Cloudflare/Google）或交由远端节点解析。' },
    ],
    relatedLinks: [
      { label: 'DNS 配置教程', href: '/guides/dns/' },
      { label: '已连接却上不了网排查', href: '/diagnostics/connection-failed/' },
    ],
  },
  {
    slug: 'client-launch',
    title: '客户端无法启动排查：权限、运行库缺失与端口占用 | 机场情报',
    description: '解决 Windows/macOS/Linux 上 Clash Verge Rev、v2rayN、FlClash 等客户端闪退、白屏或内核启动失败问题。',
    h1: '代理客户端无法启动、闪退或内核报错修复指南',
    eyebrow: 'Diagnostics · Client Launch',
    answerFirst: '桌面代理客户端无法启动或提示 Core Exited，常见三大原因：1) Windows 缺少 WebView2 或 `.NET` 运行时（尤其 v2rayN 非自含包）；2) 客户端默认监听端口（如 7890/7897）被后台残留进程或另一代理软件占用；3) 安全软件误杀 Mihomo/Xray 核心可执行文件。',
    sections: [
      {
        heading: '一、快速修复清单',
        lead: '不要重复覆盖安装到未知路径，先查端口与运行库。',
        bullets: [
          'Windows 任务管理器结束残留的 `mihomo.exe`、`clash-verge.exe` 或 `xray.exe` 进程后重启。',
          '检查本地杀毒软件隔离区，确认内核文件未被误删，且客户端仅来自官方 GitHub Release。',
          'macOS M 系列芯片请确认下载的是 `arm64/aarch64` 版本并已解除隔离提示。',
        ],
      },
    ],
    faqs: [
      { q: '为什么安全软件会报毒 Mihomo 或 Xray 内核？', a: '代理内核因涉及系统代理修改与隧道转发，部分国产安全软件易产生误报；前提是必须核实安装包下载自官方 GitHub 仓库且未经过第三方二次打包。' },
    ],
    relatedLinks: [
      { label: '客户端安装架构指南', href: '/guides/installation/' },
      { label: 'Clash Verge Rev 档案', href: '/clients/clash-verge/' },
    ],
  },
  {
    slug: 'tun-error',
    title: 'TUN 模式异常排查：服务安装失败、虚拟网卡冲突与断网修复 | 机场情报',
    description: '解决 Clash Verge Rev / v2rayN 开启 TUN 模式报错、无法安装系统服务或开启后系统全部断网的问题。',
    h1: 'TUN 模式异常与虚拟网卡冲突诊断',
    eyebrow: 'Diagnostics · TUN Error',
    answerFirst: '开启 TUN 模式报错或一开即断网，最常见的原因是：未以管理员权限安装服务模式（Service Mode）、同时安装了多款使用虚拟网卡的软件（如其他 VPN、公司零信任客户端或游戏加速器），或当前使用的订阅 YAML 中缺少正确的 `dns.enhanced-mode` 配置。',
    sections: [
      {
        heading: '一、TUN 模式排错三步骤',
        lead: '确认单系统同一时间只存在一张激活的代理 TUN 网卡。',
        bullets: [
          '1. 在 Clash Verge Rev 设置中先卸载并重装 Service Mode（Windows 需点击管理员授权弹窗）。',
          '2. 退出其他 VPN、网游加速器或公司远程接入客户端，防止默认路由争夺。',
          '3. 在网络适配器设置中如发现残留旧版 Clash/Wintun 网卡，先停用客户端并卸载冗余虚拟网卡后重开。',
        ],
      },
    ],
    faqs: [
      { q: '日常只用浏览器看网页和用网页版 AI，一定要开 TUN 模式吗？', a: '不一定。单纯浏览器访问开启“系统代理”通常更轻便且不容易与公司内网或游戏发生路由冲突。' },
    ],
    relatedLinks: [
      { label: 'TUN 模式配置教程', href: '/guides/tun-mode/' },
      { label: 'VPN 与代理区别', href: '/vpn/vs-proxy/' },
    ],
  },
  {
    slug: 'slow-speed',
    title: '网络速度慢排查：运营商波动、单线程瓶颈与本地 Wi-Fi 干扰 | 机场情报',
    description: '分析代理速度远低于测速截图的原因，区分晚高峰拥塞、单线程带宽限制、节点倍率与本地无线网络因素。',
    h1: '代理网络速度慢原因排查与优化建议',
    eyebrow: 'Diagnostics · Slow Speed',
    answerFirst: '实测速度远低于他人截图或宣传带宽时，通常受四个因素影响：1) 本地宽带运营商差异（电信/联通/移动在同节点组下的实际吞吐表现各不相同）；2) 测试时间点（非晚高峰与 20:00–23:30 晚高峰差异巨大）；3) 单线程 vs 多线程测速机制差异；4) 个别节点瞬时故障（即使实测图中也会出现极低速节点，如 1.60KB 或 8.00KB）。',
    sections: [
      {
        heading: '一、提升实际连接速度的排查步骤',
        lead: '先排除本地网络和单节点异常，再评估是否更换线路或机场。',
        bullets: [
          '手动切换同地区其他编号节点（参考光速云、微风、无忧实测图，同一地区不同编号间流速与异常率仍有差异）。',
          '确认是否开启了全局模式并同时运行后台大文件下载抢占本地带宽。',
          '用有线网线或 5GHz Wi-Fi 对比测试，排除路由器老旧或 2.4GHz 信道干扰。',
        ],
      },
    ],
    faqs: [
      { q: '为什么测速显示几百 Mbps，看 4K 视频却还是偶尔缓冲？', a: '视频加载依赖单线程持续稳定性与首包延迟，若节点存在周期性丢包或晚高峰瞬时抖动，峰值跑分虽高但缓冲依然会卡顿。' },
    ],
    relatedLinks: [
      { label: '全站历史测速证据分析', href: '/network/speedtest/' },
      { label: '稳定机场参考', href: '/recommend/stable/' },
    ],
  },
  {
    slug: 'ai-blocked',
    title: 'AI 服务访问异常排查（ChatGPT 降级/无法登录/Gemini 地区受限）| 机场情报',
    description: '针对 ChatGPT 报错 Unsupported Country、Access Denied 及 Gemini 地区不支持的完整节点与环境排查步骤。',
    h1: 'ChatGPT / Claude / Gemini 访问异常诊断指南',
    eyebrow: 'Diagnostics · AI Blocked',
    answerFirst: 'AI 工具提示“地区不支持（Not available in your country）”或无限 Cloudflare 验证，核心原因有两点：1) 当前连接的节点地区不在支持范围（例如香港节点在实测中对 OpenAI 网页与 Gemini 多为受限或失败）；2) 桌面端应用未走代理或浏览器残留旧地区 Cookie。请优先切至新加坡或日本节点、开启 TUN 模式，并在无痕窗口清除 Cookie 后重试。',
    sections: [
      {
        heading: '一、三大常见 AI 报错对照表',
        lead: '不要盲目重装客户端，先对照错误信息区分 IP 区域与风控等级。',
        bullets: [
          '提示地区不支持：立即从香港/澳门/俄罗斯/部分冷门区切换至新加坡、日本或美国节点（Gemini 首推新加坡）。',
          '网页能开但桌面 App/CLI 报错：开启客户端 TUN 模式接管全部应用进程。',
          '频繁弹出人机验证或账号受限：关闭节点自动切换，固定一个低负载单一地区节点，避免短时间多国 IP 跳跃。',
        ],
      },
    ],
    faqs: [
      { q: '为什么换成日本节点了还是提示地区不支持？', a: '请检查分流规则是否真的把对应域名交给了日本节点，并清理浏览器 `openai.com` / `google.com` 的本地缓存与 Cookie 后刷新。' },
    ],
    relatedLinks: [
      { label: 'ChatGPT 机场要求', href: '/streaming-ai/chatgpt/' },
      { label: 'Gemini 节点分布实测', href: '/streaming-ai/gemini/' },
    ],
  },
  {
    slug: 'streaming-region',
    title: '流媒体区域报错与 YouTube 送中排查指南 | 机场情报',
    description: '排查 Netflix 只显示自制剧、Disney+ 区域报错及 YouTube 位置被识别为中国内地（送中）的原因与解决方式。',
    h1: '流媒体区域错误与“送中”问题排查指南',
    eyebrow: 'Diagnostics · Streaming Region',
    answerFirst: '流媒体显示区域与预期不符（例如台湾节点 Netflix 识别为欧洲 ES/英国 GB，或香港/新加坡节点 YouTube 显示送中 CN），说明该节点的出口 IP 地理库归属或风控状态发生了变化。解决方式是先核对客户端分流规则是否将该流媒体域名准确导向海外组，再尝试切换至同机场其余区域节点。',
    sections: [
      {
        heading: '一、如何避免手机端定位污染加速“送中”',
        lead: '尽量在手机挂代理看 YouTube 时避免开启精准位置权限上报。',
        paragraphs: [
          '如果观察到某个新加坡节点稳定解锁 ChatGPT/Gemini 但 YouTube 送中（如光速云 70 节点截图所示），只需在分流规则中把 YouTube 单独指向香港节点、把 Gemini/OpenAI 指向新加坡节点即可完美兼得。',
        ],
      },
    ],
    faqs: [
      { q: '为什么网页版 Netflix 正常，电视盒子或手机 App 却提示检测到代理？', a: 'App 客户端常内置硬编码 DNS（如 8.8.8.8）或校验 IPv6 泄漏，需确保路由器/客户端同时接管 UDP 53 DNS 请求并合理处理 IPv6 流量。' },
    ],
    relatedLinks: [
      { label: 'Netflix 解锁实测分析', href: '/streaming-ai/netflix/' },
      { label: 'YouTube 加速与送中解析', href: '/streaming-ai/youtube/' },
    ],
  },
];
