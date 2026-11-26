import type { FaqItem } from '../../components/seo/FaqSection.astro';
import type { PillarSection } from './recommend';

export const CLIENTS_PILLAR_SECTIONS: PillarSection[] = [
  {
    id: 'cli-architecture',
    heading: '一、现代代理客户端的两层结构：GUI 外壳 vs 底层内核',
    lead: '看懂“外壳软件 + 代理内核”的组合关系，就能一通百通地理解 Windows、Android、iOS 与 macOS 上的数十款软件。',
    paragraphs: [
      '在第三方代理工具生态中，用户每天点击打开的是图形界面外壳（GUI），真正负责加密封装、DNS 解析与规则匹配的是底层代理内核。当前最主流的两大现代开源内核是 Mihomo（原 Clash.Meta）与 sing-box，以及专注纯节点直连与多核心调度的 Xray-core。',
      '以桌面端为例，Clash Verge Rev、FlClash 与 Mihomo Party 本质上都是围绕 Mihomo 内核开发的界面；而 Hiddify、Karing 以及官方 SFI/SFA/SFM 则运行在 sing-box 内核之上；v2rayN 则是少见的多内核调度器，允许用户在 Xray-core、sing-box 与 Mihomo 之间自由切换。',
    ],
  },
  {
    id: 'cli-open-vs-closed',
    heading: '二、开源免费客户端 vs 闭源商业软件 vs 机场专属客户端',
    lead: '不是最贵的就是最稳的，也不是所有机场都允许你用开源客户端。',
    paragraphs: [
      '桌面端（Windows / macOS / Linux）与 Android 端拥有非常成熟的开源生态，Clash Verge Rev、v2rayN、v2rayNG、FlClash、Hiddify 与 sing-box 均为完全免费且代码公开的项目，只要从其官方 GitHub Releases 下载即可。',
      'iOS / iPadOS 由于苹果商店规则与系统架构限制，长期以 Shadowrocket（小火箭）、Stash、Quantumult X 与 Surge 5 等商业买断或订阅软件为主，目前也新增了 Karing 与 Clash Mi 等免费选择。而第三类则是“机场专属客户端”——例如站内 8 家明确限制仅使用自研 App 的品牌（飞猫云、隐形人、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云），其账号登录后直接拉取节点，不开放外部订阅 URL。',
    ],
  },
  {
    id: 'cli-kernels',
    heading: '三、三大核心引擎选型逻辑（Mihomo vs sing-box vs Xray-core）',
    lead: '机场下发了什么订阅格式与传输协议，决定了哪款内核开箱即用。',
    bullets: [
      'Mihomo（原 Clash.Meta）：目前国内机场订阅兼容性最好的内核，支持 Shadowsocks、Trojan、VLESS、Hysteria 2、TUIC、Snell 等，是 Clash Verge Rev、FlClash 与 Clash Meta for Android 的基础。',
      'sing-box：近年迅速普及的高性能现代跨平台内核，自带统一的 TUN、FakeIP、Rule-Set 与多系统官方包（SFA/SFI/SFM），也是 Karing 与 Hiddify 的底层引擎。',
      'Xray-core：老牌 v2rayN / v2rayNG 默认核心，特别擅长 VLESS + XTLS-Vision 与 Reality 协议的轻量节点管理，但早期对原生 Clash YAML 策略组支持不如 Mihomo 全面。',
    ],
  },
  {
    id: 'cli-desktop',
    heading: '四、Windows / macOS / Linux 桌面端推荐组合',
    lead: '优先选择仍在高频维护的开源项目，淘汰早已停止更新的 Clash for Windows 遗留版本。',
    paragraphs: [
      '原版 Clash for Windows 与 ClashX 已于 2023 年底停更归档，新设备不建议继续从第三方网盘寻找旧版安装。Windows 与 macOS 用户目前首选 Clash Verge Rev（Mihomo 内核，中文生态完善，支持 TUN 与系统代理一键切换）、FlClash（全平台 Flutter 统一界面）或 v2rayN（新版已兼容 macOS 与 Linux）。',
      'Linux 桌面环境推荐优先使用官方发布的 AppImage、DEB 或 RPM 包；如果是无图形界面的云服务器或家庭 NAS 主机，则应考虑 Docker 或系统服务部署 v2rayA 或直接命令行运行 sing-box / mihomo 二进制文件。macOS 下载 DMG 安装包时务必分清 Apple Silicon（arm64）与 Intel（x86_64）芯片版本。',
    ],
  },
  {
    id: 'cli-mobile',
    heading: '五、Android 与 iOS 移动端避坑指南',
    lead: '手机端最常见的问题不是软件不好用，而是下错了山寨假包或后台被系统清理。',
    paragraphs: [
      'Android 端开源首选 v2rayNG（轻量省电）、FlClash、Clash Meta for Android（CMFA）与 Karing。特别提醒：部分非开源生态下架或改名后，第三方 SEO 站与未知网盘出现了大量伪装成“NekoBox”或“Clash 中文官网”的捆绑恶意包，务必核对 GitHub 仓库来源与文件 SHA256。',
      'iOS 端由于 App Store 审核严格，下载 Shadowrocket 时请认准开发者为 Shadow Launch Technology Limited，切勿购买或登录来历不明的共享 Apple ID（存在手机被远程启用“丢失模式”锁死的极高风险）。如果暂无外区付费方式，也可考虑免费上架的 Karing 或 Clash Mi，或先确认目标机场是否提供合规的专属客户端指引。',
    ],
  },
  {
    id: 'cli-openwrt',
    heading: '六、OpenWrt 软路由端插件选择与硬件门槛',
    lead: 'OpenWrt 不是装得越多越好，同一时间只能启用一个透明代理插件。',
    paragraphs: [
      '在家庭软路由场景中，OpenClash 拥有最丰富的可视化策略与规则管理界面（基于 Mihomo），但对路由器内存与 CPU 要求相对较高；PassWall2 与基于 sing-box 的 HomeProxy 结构更轻量；Nikki 则面向较新的 OpenWrt 24.10+ fw4/nftables 架构做了针对性精简。',
      '需要特别注意的是：所有仅限专属客户端的品牌（如飞猫云、隐形人、无忧链接等）均无法配置进 OpenWrt 软路由！在投入购买硬路由或 N100 软路由之前，请先对照本页底部的《第三方订阅支持清单》确认机场品牌兼容性。',
    ],
  },
  {
    id: 'cli-security',
    heading: '七、客户端安全核验五原则：绝不从百度搜索下载可执行文件',
    lead: '代理客户端拥有接管整机网络流量的最高权限，安装包源头污染会直接威胁所有账号安全。',
    bullets: [
      '核对官方 GitHub Releases 仓库地址，不使用名称近似的伪造域名站（例如各类 xxclash-download.com）。',
      '避免下载第三方打包的“绿色汉化破解版”——主流客户端 Clash Verge Rev、FlClash、v2rayN、Karing 本身即原生支持简体中文且免费。',
      '切勿给不可信软件开启“全局安装根证书（MITM HTTPS 解密）”，日常分流与流媒体解锁不需要 HTTPS 解密。',
      '订阅链接相当于你的流量凭证，不要随意将个人机场订阅粘贴到未知网页在线转换工具中。',
    ],
  },
];

export const CLIENTS_PILLAR_FAQS: FaqItem[] = [
  { q: '旧版 Clash for Windows 还能继续用吗？为什么推荐换掉？', a: '原项目早已停止维护，旧版本存在已知安全漏洞且内核版本停留在早期的 Clash 内核，无法兼容机场新部署的 Hysteria 2、VLESS Reality 等协议。建议迁移至仍在活跃维护的 Clash Verge Rev、FlClash 或 v2rayN。' },
  { q: '为什么有些机场（如飞猫云、无忧链接）导入不了 Clash？', a: '因为这些品牌官方明确不提供第三方通用的订阅链接（YAML/Base64/sing-box JSON），仅允许用户登录官方提供的专属客户端连接。购买前务必先查清自己是否依赖 Clash 或软路由。' },
  { q: 'Shadowrocket、Quantumult X、Stash 之间该如何选？', a: '普通用户与新手首选 Shadowrocket（价格较低、几乎所有开放订阅机场都默认适配）；需要深度脚本重写、去广告或偏好原生 Clash YAML 策略同步的可考虑 Stash 或 Quantumult X。' },
  { q: 'FlClash 和 Clash Verge Rev 都用 Mihomo 内核，主要区别是什么？', a: 'Clash Verge Rev 专注 Windows/macOS/Linux 桌面端，配置项与覆写（Script/Merge）能力极强；FlClash 使用 Flutter 编写，同一套交互设计同时覆盖桌面端和 Android 手机，适合希望电脑手机体验一致的用户。' },
  { q: '什么情况下需要用到 Karing 或 Hiddify？', a: '当你需要一款同时覆盖 iOS、Android、Windows、macOS 且底层使用 sing-box 内核的免费工具，或 iOS 端暂时不想购买付费软件时，Karing 和 Hiddify 是主流替代选择。' },
  { q: 'v2rayN 以前不是不能导入 Clash 订阅吗，现在支持了吗？', a: '新版 v2rayN 已演进为多内核调度工具，内置 Xray-core、sing-box 与 Mihomo 核心切换能力，部分场景可识别多种常见格式，但在复杂 Clash 策略组场景下仍建议优先选用 Clash Verge Rev 或 FlClash。' },
  { q: '安装客户端后打开网页报错或无法加载图片，是客户端坏了吗？', a: '多数情况下不是客户端损坏，而是同时开启了另一款代理工具、浏览器残留扩展插件、系统时间误差超过 90 秒或未更新有效订阅。可参考 /diagnostics/ 逐项排查。' },
  { q: '软路由 OpenWrt 应该选 OpenClash 还是 Nikki / HomeProxy？', a: '内存 ≥ 512MB 且偏好详细图形规则调整选 OpenClash；追求轻量与原生 nftables（OpenWrt 24.10+）兼容选 Nikki 或 HomeProxy；老设备低内存精简固件可看 PassWall2。' },
];
