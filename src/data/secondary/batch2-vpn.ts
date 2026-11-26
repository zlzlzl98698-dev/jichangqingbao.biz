import type { TopicEnrichment } from './enrich';

export const VPN_ENRICHMENTS: Record<string, TopicEnrichment> = {
  recommend: {
    tables: [
      {
        title: '“传统 VPN”与“现代分流机场 + 开源客户端”决策矩阵',
        columns: ['评估要素', '商业全局 VPN', '规则代理机场（推荐日常使用）', '品牌专属端机场'],
        rows: [
          ['国内应用速度影响', '全部流量兜海外再回国内，淘宝/网银变慢', 'Rule 分流国内直连，本地宽带零损耗', '内置一键分流，多数场景不影响国内访问'],
          ['AI / 流媒体切区', '同一时刻只能挂单一国家，切换需重连整机隧道', '策略组毫秒并行：ChatGPT 走美日，日常走香港', '视 App 内建策略或手动切区节点'],
          ['单月价格成本', '常见 ¥30–¥80/月（美元汇算）', '¥14.9–¥25/月即含 100–168GB 低延迟线', '¥19/月左右零配置即用'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、为什么搜“VPN 推荐”时先要明确使用场景？',
        lead: '企业差旅合规加密与国内用户跨境办公 AI 工具，对应完全不同的网络栈实现。',
        paragraphs: [
          '如果你是在海外机场公共 Wi-Fi 上接入公司总部财务或研发内网，单位 IT 部门配发的 WireGuard / IPsec / SSL VPN 是刚性需求；但若身处国内家庭或公司网络、需要一边开微信和国内 IDE 一边调用 ChatGPT、Claude 与观看 4K YouTube，传统全局 VPN 不但抗跨境干扰能力弱、价格贵，而且会把所有国内访问一并拖慢。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '跨境连接选型基础',
        intent: '路线分流',
        articles: [
          { title: 'VPN 与代理机场技术架构深度区别', targetKeyword: 'VPN和代理的区别', plannedUrl: '/vpn/vs-proxy/', summary: '对比 OpenVPN/WireGuard 与 Shadowsocks/Trojan', existingHref: '/vpn/vs-proxy/' },
          { title: '免费 VPN 的四类典型隐私与风控陷阱', targetKeyword: '免费VPN安全吗', plannedUrl: '/vpn/free/', summary: '避开带广告注入与住宅代理池滥用的免费端', existingHref: '/vpn/free/' },
        ],
      },
    ],
    faqs: [
      { q: '买机场配开源客户端算违法破解版 VPN 吗？', a: 'Clash Verge Rev、v2rayN、Shadowrocket 等都是公开透明的开源/商业网络客户端工具；用户应遵循所在地区的合规要求，仅将其用于合法科研资料、技术开发或跨境团队协作。' },
      { q: '为什么部分品牌直接做了一个外观像 VPN 的专属 App？', a: '为了降低零基础用户配置 YAML 订阅的门槛。目前站内飞猫云、隐形人、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云共 8 家采取该形态。' },
      { q: 'iPhone 与 Android 都用同一个机场账号能同时挂着吗？', a: '可以，在合理个人设备数限制（一般 3–5 台）内，手机和电脑可以同时共用同一订阅。' },
    ],
  },

  free: {
    tables: [
      {
        title: '“免费 VPN”常见变现渠道与对应风险分级表',
        columns: ['常见宣传话术', '隐性真实代价', '隐私与风控危害', '安全替代选择'],
        rows: [
          ['永久免费不限流量一键直连', '将用户设备闲置带宽打包作商业 P2P 住宅代理池', '他人用你家宽带发垃圾请求引发关联封控', '选用 ¥5.6–¥15 元正规入门付费订阅'],
          ['免费看广告兑换高速节点', '注入弹窗广告、窃取剪切板或 HTTP 明文数据', '邮箱、常用社交与工作凭据暴露风险高', '核查 GitHub 官方开源客户端 + 合规线路'],
          ['破解版永久 VIP 免费下载', 'APK/EXE 内植入木马、修改浏览器首页或安装伪根证书', '严重设备安全隐患，甚至锁定系统锁屏', '只从 App Store 或 GitHub Releases 安装正版'],
        ],
      },
    ],
    steps: [
      { title: '卸载所有来历不明的“一键永久免费加速”APK', detail: '特别是安装包来自未知网盘、索取无障碍/短信/通讯录权限或强制安装根证书的应用。' },
      { title: '改用正版免费开源客户端外壳', detail: '客户端软件本身如 Clash Verge Rev、FlClash、v2rayNG、Karing、Hiddify 均完全开源免费，只需配置自购小额订阅。' },
    ],
    sections: [
      {
        heading: '二、为什么付费 10–20 元月付比“永久免费”更便宜？',
        lead: '服务器机房、跨境 BGP 中转与合规维护均有刚性硬件支出，没有商业机构会长期做纯粹慈善补贴。',
        paragraphs: [
          '当一款免费的 VPN 号称长期不收任何费用并允许任意高并发看视频时，它的收益只能来自用户数据画像交易、广告篡改或者出口设备复用。一旦在同一个公网 IP 池里频繁触发风控，你的 Google、OpenAI 或支付类站点账号连带着会被安全机制封禁或降权，代价远高于每月十余元的正规月付。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安全软件源与低预算正规方案',
        intent: '风险防范',
        articles: [
          { title: '6 大操作系统开源免费代理客户端总表', targetKeyword: '免费开源代理软件', plannedUrl: '/clients/', summary: '客户端本身开源免费，绝不依赖破解安装包', existingHref: '/clients/' },
          { title: '低预算试错真实报价对照', targetKeyword: '便宜可靠机场', plannedUrl: '/pricing/cheap/', summary: '查看 5.6–15 元合规低门槛方案', existingHref: '/pricing/cheap/' },
        ],
      },
    ],
    faqs: [
      { q: '完全没有免费但又可信的方案吗？', a: '部分国际著名合规安全厂商（如研究性项目或知名商业 VPN 有限免费版）存在少量受限节点额度，适合极低频网页查资料；但它们普遍对国内网络优化极差且几乎打不开常用 AI 工具。' },
      { q: '开源免费的 Clash Verge Rev、Karing 算免费 VPN 吗？', a: '它们是免费的客户端程序本体，不包含服务器节点；安全可靠的方案是“免费开源客户端 + 透明低价月付线路”。' },
      { q: '如何检查自己以前装过的免费 VPN 有没有偷偷装系统证书？', a: '在 iOS“设置→通用→VPN与设备管理”或 Windows `certmgr.msc` 受信任根证书中检查，若出现不认识的第三方代理证书应立即移除。' },
    ],
  },

  mobile: {
    tables: [
      {
        title: 'iOS 与 Android 手机端运行代理架构的核心区别',
        columns: ['比较项', 'iOS / iPadOS（iPhone）', 'Android 手机'],
        rows: [
          ['系统代理接口权限', '严格限 Apple NetworkExtension（内存上限 ~50MB）', 'VpnService 权限开放，内存放行更充裕'],
          ['推荐主流客户端', 'Shadowrocket（付费）/ Karing / Clash Mi（免费）', 'FlClash / v2rayNG / Clash Meta for Android'],
          ['主要掉线诱因', '规则体积过大爆内存（OOM）导致隧道崩溃', '国产系统电池优化与夜间自动查杀后台进程'],
          ['安装渠道警戒线', '须自备可信外区 Apple ID，严禁登他人共享账号', '仅从 GitHub Releases/F-Droid/Google Play 获取'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、移动端在 5G 蜂窝与 Wi-Fi 频繁切换时的防断流原则',
        lead: '移动端不同于桌面固定网线，跨基站切换与系统休眠保活是最大考验。',
        paragraphs: [
          '手机用户经常遇到“出门进电梯或切出家门 Wi-Fi 后，代理图标还挂着却半分钟没网”的现象。使用支持底层快速重连与较新传输协议（如 Trojan / Hysteria 2 / sing-box 多路复用）的客户端可以大幅改善恢复速度。此外切忌在手机上开启全局超重负载规则集（如数十万条冗余域名规则），以免在 iOS 上瞬间撑爆 50MB 隧道扩展内存限制。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '双平台专属细化指南',
        intent: '移动端选型',
        articles: [
          { title: '安卓 VPN 与 Android 客户端分流保活技巧', targetKeyword: '安卓VPN推荐', plannedUrl: '/vpn/android/', summary: '解除省电限制防断连与假冒 NekoBox 避坑', existingHref: '/vpn/android/' },
          { title: 'iPhone VPN 选型与外区商店安全边界', targetKeyword: 'iPhone VPN怎么用', plannedUrl: '/vpn/iphone/', summary: '对比小火箭、Karing 与 Clash Mi 安装门槛', existingHref: '/vpn/iphone/' },
        ],
      },
    ],
    faqs: [
      { q: '手机开着代理客户端是不是非常费电？', a: '基于 Xray-core（如 v2rayNG）或轻量 sing-box/Shadowrocket 的客户端在静态待机时功耗极低；如果开启了复杂的每秒节点自动测速或后台全时视频缓冲才会增加电耗。' },
      { q: '移动端能直接用网页浏览器配代理吗？', a: 'iOS 和 Android 均不支持仅对单一浏览器设置 SOCKS5 而不走系统通道，必须通过 VPN 接口（NetworkExtension / VpnService）或品牌专属 App 统一接管。' },
      { q: '手机切换 5G 后打不开外网但 Wi-Fi 正常怎么办？', a: '排查本地移动网络运营商对当前端口的干扰，在节点列表里切换另一组入口（如 BGP 备用入口）或切回自动 DNS 后重试。' },
    ],
  },

  android: {
    steps: [
      { title: '认准正版开源 Release 渠道下载 APK', detail: '首选 v2rayNG、FlClash、Clash Meta for Android 或 Karing 的 GitHub 官方页面，核对 arm64-v8a 架构与 SHA256。' },
      { title: '关闭国产系统后台省电清理', detail: '在“应用启动管理/电池优化”中将客户端设为“允许后台活动 / 无限制”，并在多任务界面下拉锁定任务卡片。' },
      { title: '警惕假冒名称安装包与多余权限弹窗', detail: '切勿在百度网盘、来路不明的应用分享群或仿冒“NekoBox 官网”下载安装包；正规代理工具绝不会索要通讯录、短信和定位权限。' },
    ],
    sections: [
      {
        heading: '二、为什么 Android 特别适合用 FlClash 或 v2rayNG？',
        lead: '开源生态最完善，完全无需付费门槛，且多款桌面与手机软件现已共享统一界面。',
        paragraphs: [
          '相比 iOS 的商店限制，Android 用户可以通过官方 GitHub 免费使用全功能代理工具。对追求交互极简、希望电脑手机保持同样手感的读者，FlClash 与 Karing 是优选；对老机型低内存、需要最长时间后台挂机不掉线的用户，极简轻量版的 v2rayNG 表现最为省心。如使用飞猫云、无忧链接等仅专属端品牌，则直接下载其官方签名安卓包即可。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安卓客户端深度档案',
        intent: '安卓部署',
        articles: [
          { title: 'Android 代理客户端六款对比矩阵', targetKeyword: '安卓代理软件', plannedUrl: '/clients/android/', summary: '核对 v2rayNG、FlClash、CMFA 与 SFA 差异', existingHref: '/clients/android/' },
          { title: 'v2rayNG 核心配置与极简入门', targetKeyword: 'v2rayNG教程', plannedUrl: '/clients/v2rayng/', summary: '查看 Xray-core 生态与路由分流设置', existingHref: '/clients/v2rayng/' },
        ],
      },
    ],
    faqs: [
      { q: '安卓手机怎么查看应该下 arm64-v8a 还是 armeabi-v7a？', a: '过去 7 年内发布的绝大多数主流安卓手机均为 arm64-v8a（64位 ARM 架构）；如果不确定也可下载 universal 通用混合架构包。' },
      { q: '安装时手机弹窗报“检测到未经安全审查/风险应用”怎么办？', a: '国产定制系统安全中心往往会对非自带应用商店下载的加密网络工具弹窗拦截。只要确认包文件确系开源项目 GitHub 官方页下载并完成签名核对即可正常授权安装。' },
      { q: '安卓端可以只让特定 App（如 Chrome / ChatGPT）走代理，微信外卖直连吗？', a: '完全可以。安卓 VPNService 原生支持“分应用代理（Per-App Proxy）”，在 FlClash 或 v2rayNG 设置中勾选需要代理的 App 即可实现零干扰隔离。' },
    ],
  },

  iphone: {
    steps: [
      { title: '务必准备属于自己的非大陆区 Apple ID', detail: '大陆区 App Store 已下架全部代理客户端，切忌购买或临时登录陌生人售卖的“已购共享账号”，否则极易触发激活锁远程勒索。' },
      { title: '依据需求挑选付费小火箭或免费 Karing/Clash Mi', detail: '预算充足通用性最强选 Shadowrocket（约 $2.99）；不想海外绑卡消费可免费装 Karing 或 Clash Mi。' },
      { title: '避开轻量化规则溢出坑', detail: 'iOS NetworkExtension 有 ~50MB 内存红线，切忌强塞几十万条臃肿广告规则进手机配置中。' },
    ],
    sections: [
      {
        heading: '二、iPhone 用户的另一条零商店配置通道：合规自研专属端说明',
        lead: '部分用户无外区账号且不愿研究苹果安装条件，应先弄清机场是否支持通用客户端与企业端方案。',
        paragraphs: [
          '对于苹果用户而言，最大的门槛往往不在软件操作而在“如何从非国区 App Store 合法安全获取软件”。如果自己能注册（或合法持有）美区/港区个人 Apple ID，购买一次 Shadowrocket 后配合开放订阅机场（如光速云、星岛梦、唯兔云等），几乎兼容全行业服务且不受单家品牌客户端停更限制；详细软件特性对比见 /clients/ios/。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '苹果端软件百科',
        intent: 'iOS 装机',
        articles: [
          { title: 'iOS / iPadOS 八款主流客户端全景对比', targetKeyword: 'iPhone代理客户端', plannedUrl: '/clients/ios/', summary: '对比 Shadowrocket、Stash、QX、Karing', existingHref: '/clients/ios/' },
          { title: 'Shadowrocket 小火箭使用与安全核验档案', targetKeyword: '小火箭Shadowrocket', plannedUrl: '/clients/shadowrocket/', summary: '核对正版开发者名称与分流规则导入', existingHref: '/clients/shadowrocket/' },
        ],
      },
    ],
    faqs: [
      { q: '能不能在 iPhone 上用网页浏览器装破解描述文件实现免商店用 VPN？', a: '绝对不要这样做。安装来历不明的 MDM 描述文件或企业级信任证书会赋予第三方远程抹除手机、监听或劫持全部网页流量的极高权限。' },
      { q: 'iPhone 和 iPad 可以用同一个美区 Apple ID 免费同步已买的 Shadowrocket 吗？', a: '可以。在 App Store 中使用你自己的同一个购买账号即可在名下所有苹果设备免费下载恢复已购项目。' },
      { q: '为什么 iPhone 挂着小火箭在后台待机一晚，早上起来连接却断开了？', a: 'iOS 在锁屏低功耗或网络切换时会挂起闲置连接，通常设置开启按需连接（Connect On Demand）即可自动唤醒。' },
    ],
  },

  windows: {
    tables: [
      {
        title: 'Windows 桌面端代理运行三大常见冲突场景排查表',
        columns: ['异常表现', '底层冲突源头', '快速恢复方案', '对应排查页'],
        rows: [
          ['客户端显示连上了但浏览器报错 ERR_PROXY_CONNECTION_FAILED', '残留 SwitchyOmega 插件或系统代理未随退出清空', '禁用旧扩展 + 重启系统代理开关', '/diagnostics/connection-failed/'],
          ['开启 TUN 模式后微信和百度也一起断网', '同时开启了网游加速器、企业 VPN 或两个 Clash', '彻底关闭其余虚拟网卡类软件并重启客户端', '/diagnostics/tun-error/'],
          ['双击软件弹出找不到内核 / 被拦截', 'Windows Defender 或国产安全卫士误删核心可执行文件', '核对 GitHub SHA256 后添加信任目录', '/diagnostics/client-launch/'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、Windows 用户该如何抉择“系统代理”与“TUN 虚拟网卡模式”？',
        lead: '日常网页看视频开系统代理够用且安全；终端命令行（Git/npm）或桌面版 ChatGPT/游戏联机再切 TUN。',
        paragraphs: [
          '大多数 Windows 新手并不了解这两者差异：Clash Verge Rev、FlClash 和 v2rayN 安装完成并开启“系统代理”后，Chrome、Edge 与大部分标准 Windows 桌面应用会立刻正常连接外网，而且关闭软件后系统网络还原迅速，很少与公司 VPN 冲突。',
          '当你在终端执行 `git clone`、`pip install`、打开独立打包的 AI 桌面客户端时，这些程序往往不理会系统代理设置，此时才需要在客户端界面点击安装“服务模式（Service Mode）”并启用 TUN 模式接管全机三层流量（详见 /guides/tun-mode/）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'Windows 主力装机与调优',
        intent: '桌面操作',
        articles: [
          { title: 'Windows 客户端七强全对比（淘汰旧版 CFW）', targetKeyword: 'Windows代理软件推荐', plannedUrl: '/clients/windows/', summary: '对比 Clash Verge Rev、v2rayN、FlClash 等', existingHref: '/clients/windows/' },
          { title: 'Clash Verge Rev 分流与 TUN 完整教程', targetKeyword: 'Windows Clash教程', plannedUrl: '/guides/clash-verge/', summary: '从订阅粘贴到安装服务模式一文走通', existingHref: '/guides/clash-verge/' },
        ],
      },
    ],
    faqs: [
      { q: '电脑上还留着 2023 年下载的旧版 Clash for Windows，必须换吗？', a: '强烈建议更换。旧版早已停止安全更新且无法支持 Hysteria 2 与 VLESS Reality 等现代机场协议，推荐平滑迁移至 Clash Verge Rev 或 FlClash。' },
      { q: '为什么我在 Windows 上正常退出代理客户端后，Edge 浏览器突然上不了任何网站？', a: '因为非正常强制结束进程或电脑突然断电关机，导致 Windows “设置→网络和 Internet→代理”里的 127.0.0.1:7890 手动代理开关没有被软件清除。手动将其关回“关闭”即可瞬间恢复。' },
      { q: 'Windows 10/11 下载 Clash Verge Rev 时经常分不清 setup.exe 和 portable 压缩包怎么选？', a: '普通个人电脑直接下对应架构（x64）的 `setup.exe` 安装包最稳妥；如果装在便携 U 盘或多系统切换才需用绿色便携版。' },
    ],
  },

  reviews: {
    sections: [
      {
        heading: '二、真正专业的 VPN / 代理软件评测应当考察哪五项指标？',
        lead: '只看图标好看和“点一下连接”无法分辨优劣；看代码透明、内核效率、协议新旧与内存控制才是硬核准则。',
        bullets: [
          '代码开源与版本活跃度：是否处于 GitHub 活跃维护状态，近半年是否有安全补丁与新内核跟随（如 Mihomo / sing-box 最新核心）。',
          '传输协议完备度：能否平滑兼容 Shadowsocks、Trojan、VMess、VLESS（XTLS-Vision/Reality）以及 Hysteria 2。',
          '分流规则灵活性：是否原生支持 Rule-Set 在线规则集、DNS 远程加密查询（DoH/Fake-IP）与自定义策略组固定国家。',
          '多平台统一性与轻量表现：是否在 Windows/macOS/Android 保持一致配置语言且不会在 iOS 上触发内存溢出重启。',
          '机场生态兼容范围：注意并非所有机场都开放 Clash/v2rayN 导入，8 家仅限官方端品牌完全不吃第三方软件功能特性。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '主流工具横向档案对比',
        intent: '软件测评',
        articles: [
          { title: '第三方代理客户端百科与核心能力 matrix', targetKeyword: '代理软件评测', plannedUrl: '/clients/', summary: '对比 Clash Verge Rev、FlClash、v2rayN 等十大工具', existingHref: '/clients/' },
          { title: 'Mihomo 内核生态与 sing-box 内核对比', targetKeyword: 'Mihomo对比sing-box', plannedUrl: '/clients/mihomo/', summary: '剖析底层架构决定软件上限的根本逻辑', existingHref: '/clients/mihomo/' },
        ],
      },
    ],
    faqs: [
      { q: '个人用开源的 Clash Verge Rev 比花钱买商业客户端差吗？', a: '毫不逊色。在 Windows、macOS、Linux 与 Android 上，活跃开源软件在协议支持速度和社区规则生态上反而全面领先。只有在 iOS 上才常配合买断制工具（如 Shadowrocket/Stash）。' },
      { q: '为什么评测里总是强调避开“二次汉化修改版”？', a: '开源项目官方自身早已自带原生完整中文支持；市面流传所谓“特别优化高速内置版”往往夹带劫持模块与广告插件。' },
      { q: '评测中谈及“专属客户端机场”为什么体验评分和开源软件不同？', a: '自研客户端把所有规则锁在后台换取零学习成本，适合极简上手但不允许用户微调路由分流，属于取舍不同的产品分支。' },
    ],
  },

  'game-accelerator': {
    tables: [
      {
        title: '专业网游加速器 vs 现代代理机场在游戏场景下的技术边界',
        columns: ['游戏场景与需求', '专业网游加速器', '现代规则机场（开启 TUN 后）'],
        rows: [
          ['PC/主机外服低延迟竞技（Apex / CS2 / LOL / COD）', '专有 UDP 中继、游戏路径防丢包重传与 NAT1 优化', '仅做常规隧道转发，小包抖动易跳 Ping'],
          ['主机联机 NAT 类型（Switch / PS5 / Xbox）', '自带路由器插件支持 UPnP 与 NAT 穿透', '部分自搭软路由可透传，但主机适配非强项'],
          ['同时顺便打开游戏官网、Discord 或 Twitch', '仅限名单内游戏进程加速，打不开外部网页流', '全兼容网页、语音社区与游戏客户端更新下载'],
          ['电脑后台同时打开两个加速软件后果', '虚拟网卡/LSP 协议栈打架，极大概率同时断流', '冲突严重，禁止两者同步激活'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、“游戏用加速器、办公/AI/影音用机场”的分开运行实践',
        lead: '花五分钟手动切换开关，比花几个小时折腾所谓“双开不冲突路由表”稳定十倍。',
        paragraphs: [
          '如果你既有玩 Steam/主机联机游戏的需求，平时又需要用 ChatGPT 或观看 4K Netflix，最健康无故障的习惯是：准备竞技打游戏时，彻底关闭 Clash Verge Rev 或其他代理软件（确保系统代理与 TUN 都关闭），只单开游戏加速器；结束游戏切换到学习办公或观影环境后，退出游戏加速器再打开机场客户端。绝不追求在同一秒钟让两个底层网络驱动争夺系统默认路由。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '游戏场景防冲突排障',
        intent: '网络调优',
        articles: [
          { title: '开 TUN 模式和加速器同时运行导致彻底断网排查', targetKeyword: 'TUN模式冲突断网', plannedUrl: '/diagnostics/tun-error/', summary: '解除双虚拟网卡默认路由争夺步骤', existingHref: '/diagnostics/tun-error/' },
          { title: 'TUN 模式底层接管机制详解', targetKeyword: '游戏能用Clash吗', plannedUrl: '/guides/tun-mode/', summary: '理解什么游戏更新能走 TUN、什么不建议走', existingHref: '/guides/tun-mode/' },
        ],
      },
    ],
    faqs: [
      { q: '开启了 Clash 的 TUN 模式加上机场节点，能当 Steam 联机加速器用吗？', a: '用来高速下载 Steam 商店游戏安装包或浏览社区没有任何问题，且速度往往很快；但在 FPS 射击、格斗或主机联机对实时小包抖动极为挑剔的游戏中，表现通常不如专用网游加速器稳定。' },
      { q: '为什么游戏加速器这么便宜（比如十几块包月无限流量）却看不了 YouTube？', a: '因为游戏加速器只转发游戏服务器所需的少量 UDP 控制包与状态同步流量（几十 KB/s 级别），且受合规接入白名单约束，根本不开放通用浏览器 80/443 代理转发。' },
      { q: '我只在 Windows 上装了游戏加速器没开它，也会影响 Clash 吗？', a: '完全退出后台进程和系统驱动后一般不冲突；但若游戏加速器有开机自启驻留或修改了本地网卡 DNS 静态地址，出现问题时记得检查本地网络适配器恢复自动获取 DNS。' },
    ],
  },

  'vs-proxy': {
    tables: [
      {
        title: 'VPN（虚拟专用网）与 Proxy（应用/规则代理）底层原理逐层对比',
        columns: ['OSI/网络维度', '传统 VPN', '现代规则代理（机场体系）'],
        rows: [
          ['工作网络层', '三层 IP 层 / 二层以太网虚拟隧道', '应用层 SOCKS5 / HTTP / 加密代理协议 + 可选 TUN'],
          ['流量接管范围', '默认整张网卡全量打包转发', '依据内置域名/GeoIP 规则按需逐条分流'],
          ['常见加密/协议族', 'OpenVPN、IPsec/IKEv2、WireGuard', 'Shadowsocks、Trojan、VMess、VLESS、Hysteria 2'],
          ['域名解析机制', '多随全局远程隧道发往 VPN 端 DNS', 'Fake-IP / Redir-Host 智能分流：国内本地解析、境外远端防污染'],
          ['典型核心场景', '企业办公内网远连、公共 Wi-Fi 安全隔离', '跨境开发、AI 生产工具访问、超高清流媒体按区调度'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、为什么现在的代理客户端也有“VPN 图标 / TUN 模式”让人混淆？',
        lead: '手机系统出于接口权限管理，统一借用系统 VPN API 创建本地拦截虚拟网卡，但这并不改变背后的规则分流实质。',
        paragraphs: [
          '在 iPhone 状态栏显示“VPN”小标，或者在 Clash Verge Rev 里打开了“TUN 模式”，表面看操作系统确实建立了一个虚拟网卡（类似 VPN 形态）。但关键差别在于：**数据包进入虚拟网卡后并不是无脑全扔给境外服务器**，而是由本地运行的 Mihomo 或 sing-box 核心立即按数百条规则匹配：如果是淘宝/支付宝，原地直连回本机物理网卡发出去；如果是 OpenAI 或 YouTube，才加密发给指定国家的中转专线节点。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '底层协议与分流延伸',
        intent: '技术原理',
        articles: [
          { title: '分流规则与策略组怎么把国内和 AI 分开跑', targetKeyword: '代理分流规则原理', plannedUrl: '/guides/routing-rules/', summary: '了解 Rule 与 Global 模式的实际运行差异', existingHref: '/guides/routing-rules/' },
          { title: 'Fake-IP 与 Redir-Host 两种 DNS 分流策略比较', targetKeyword: 'Fake-IP是什么意思', plannedUrl: '/guides/dns/', summary: '避免域名泄露并加速国内站点解析', existingHref: '/guides/dns/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么很多老手不把机场叫做 VPN，而叫“节点 / 梯子 / 代理”？', a: '因为架构确实不同：传统商用 VPN 是全局加密通道，机场则是基于加密代理协议与智能规则分发的多国家中转节点集合，分流能力和抗跨境 QoS 干扰方式截然不同。' },
      { q: '工作需要连公司 WireGuard VPN 时，电脑上的机场该怎么处理？', a: '连公司内网期间请先关闭机场的系统代理与 TUN 模式；若确实要同时保留网页代理，切忌开 TUN 抢夺默认网关路由，仅留 HTTP 本地端口给指定浏览器即可。' },
      { q: '代理能像 VPN 一样保护我在酒店公共 Wi-Fi 上的全部数据吗？', a: '如果仅开浏览器系统代理，未走代理的国内软件依旧直接接入公共 Wi-Fi；只有全局代理（Global）叠加 TUN 模式或者使用传统商用 VPN 时，整台设备的流量才都会被加密送出。' },
    ],
  },
};
