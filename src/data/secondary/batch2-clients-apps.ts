import type { TopicStep, TopicClusterGroup, TopicTable } from '../../components/seo/TopicPageTemplate.astro';
import type { FaqItem } from '../../components/seo/FaqSection.astro';

export interface ClientAppDeepGuide {
  summaryLead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  steps: TopicStep[];
  comparisonTable?: TopicTable;
  clusters: TopicClusterGroup[];
  faqs: FaqItem[];
}

export const CLIENT_APP_DEEP_GUIDES: Record<string, ClientAppDeepGuide> = {
  'clash-verge': {
    summaryLead: 'Clash Verge Rev 是原 Clash for Windows 停止维护后桌面端最成熟的开源继承者，核心基于 Mihomo (Clash.Meta) 构建。',
    steps: [
      { title: '1. 根据系统与芯片下载官方安装包', detail: 'Windows 下 `x64-setup.exe`；Mac 下 `aarch64.dmg` (M1–M4) 或 `x64.dmg` (Intel)；Linux 下 `.deb`/`.AppImage`。' },
      { title: '2. 粘贴机场通用订阅 URL 并拉取', detail: '在“订阅”页贴入链接并点击更新；若因域名直连受干扰拉取超时，勾选代理更新或先校准电脑时间。' },
      { title: '3. 保持 Rule 模式开启系统代理，按需安装 TUN', detail: '日常浏览器上网只开“系统代理”即可；遇到桌面 ChatGPT、Git 命令行或终端不走代理时再去“设置”安装服务模式启用 TUN。' },
    ],
    sections: [
      {
        heading: '软件定位、底层关系与适用人群',
        paragraphs: [
          '随着原 Clash for Windows (CFW) 与 ClashX 停止维护，大量新机场已全面迁移到 Hysteria 2、VLESS Reality 等传输协议，继续使用旧版客户端不仅存在内存泄漏或安全性隐忧，更会遇到新订阅直接解析报错的困境。Clash Verge Rev 基于 Rust + Tauri 与最新版 Mihomo 内核，兼顾低内存占用、原生态简体中文界面与极强的脚本覆写扩展能力。',
          '需要注意的生态边界：并非所有机场都允许把账号塞进 Clash Verge Rev。站内收录的 31 家品牌中，仅限专属客户端的 8 家品牌（飞猫云、隐形人、无忧链接、灵猫网络、Firefly、SOGO 云、闪跃、全球云）并不提供 YAML 订阅地址。',
        ],
        bullets: [
          '典型适配人群：Windows / macOS / Linux 桌面程序员、跨境办公人员、需要独立指定 ChatGPT 走美日节点的分流用户。',
          '主要替代品：希望电脑手机界面一致可看 FlClash；习惯单节点直观开关且同时用 VLESS 分享链接可看 v2rayN。',
        ],
      },
      {
        heading: '日常使用与覆盖脚本的四大避坑原则',
        paragraphs: [
          '在社区教程里常能看到一键复制数百行“全局覆写脚本（Script / Merge）”的做法。对于初学者而言，机场官方订阅自带的策略组通常已经足够日常国内直连与海外分流，贸然套用来源不明的覆写脚本反而容易破坏机场内置的流量计费分流或引起 Fake-IP 内网域名冲突。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安装与基础教程集群',
        intent: '操作实务',
        articles: [
          { title: 'Clash Verge Rev 订阅导入与 TUN 实操全文', targetKeyword: 'Clash Verge Rev教程', plannedUrl: '/guides/clash-verge/', summary: '从导入、开启服务模式到规则切区一步到位', existingHref: '/guides/clash-verge/' },
          { title: '全平台架构识别：x64 与 arm64 安装防错', targetKeyword: 'Clash Verge下载包选择', plannedUrl: '/guides/installation/', summary: '区分 Windows/macOS DMG 安装差异', existingHref: '/guides/installation/' },
          { title: 'Windows/Mac Clash Verge 无法启动或内核报错修复', targetKeyword: 'Clash Verge打不开', plannedUrl: '/diagnostics/client-launch/', summary: '定位安全软件隔离 mihomo.exe 与端口占用', existingHref: '/diagnostics/client-launch/' },
        ],
      },
    ],
    faqs: [
      { q: 'Clash Verge Rev 和早年停更的 Clash Verge 原版是一回事吗？', a: 'Clash Verge Rev 是原项目归档后由社区活跃接力继续维护的分支版本，保持了高频协议更新与安全补丁，是目前桌面端事实标准；原版已不再建议下载。' },
      { q: '下载的时候看到文件名里写着 WebView2 找不到或报错怎么办？', a: '部分 Windows 精简版系统未自带微软 Edge WebView2 运行时，去微软官网或选择 Clash Verge Rev 官方页自带环境安装包即可顺利启动。' },
      { q: 'Clash Verge Rev 打开了 TUN 模式还是连不上某些网站，怎么查？', a: '首先确认自己已安装并激活了页面里“服务模式（Service Mode）”旁的绿色小盾牌图标；其次检查是否同时开启了其他网游加速器或公司 VPN 导致路由争夺。' },
      { q: '可以同时在 Clash Verge Rev 里导入两家机场的订阅当备胎吗？', a: '完全可以。但同一时刻只能选中激活一个主订阅配置；如需合并多订阅选节点，请使用软件自带的扩展配置（Profiles Merge）功能而非盲目手动改原文件。' },
      { q: '为什么修改了 Clash Verge Rev 里的分流策略组，刷新一次订阅后又变回默认香港节点了？', a: '这是由于点击更新覆盖了原配置或系统未启用持久化分组记忆；正常情况下手动选定过一次“AI → 日本/新加坡”后不要随意删除配置文件重建。' },
      { q: '光速云、星岛梦和唯兔云的订阅能直接导入 Clash Verge Rev 吗？', a: '都可以。上述老牌与主流服务均原生下发标准 Mihomo/Clash 兼容订阅地址。' },
    ],
  },

  'clash-meta': {
    summaryLead: 'Clash Meta for Android (CMFA) 是 Android 端基于 Mihomo 核心运行的专业级开源客户端，兼容所有现代 Clash 生态规则与协议。',
    steps: [
      { title: '1. 从 GitHub 选对 arm64-v8a 发行包安装', detail: '旧设备不确定芯片时可选用 universal 通用版本 APK。' },
      { title: '2. 允许后台自启与忽略电池优化', detail: '防止小米、华为、OPPO 等系统在锁屏 10 分钟后冻结网络守护进程。' },
      { title: '3. 配置分应用访问控制排除网银和外卖', detail: '进入“设置→访问控制模式”，选择跳过本地日常高频国内应用以实现省电零延迟。' },
    ],
    sections: [
      {
        heading: '与 FlClash、v2rayNG 在安卓端的定位分工',
        paragraphs: [
          'Android 用户目前主要在三款开源主力间做取舍：FlClash 主打全平台统一现代化大界面与零认知门槛；v2rayNG 专注极端省电、轻量单协议直连；而 Clash Meta for Android (CMFA) 则是追求原生完整 Clash 策略组精细切换、自动延迟测速组以及复杂分流规则老用户的稳健选择。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安卓配置与兼容参考',
        intent: '移动排障',
        articles: [
          { title: 'Android 六大客户端全景选型对比', targetKeyword: '安卓Clash推荐', plannedUrl: '/clients/android/', summary: '对比 CMFA、FlClash、v2rayNG 与 Hiddify', existingHref: '/clients/android/' },
          { title: '安卓手机锁屏掉线与后台保活设置指南（规划）', targetKeyword: 'Clash Meta锁屏断网', plannedUrl: '/guides/android-keepalive/', summary: '覆盖国产各家 ROM 后台权限设置要点' },
        ],
      },
    ],
    faqs: [
      { q: 'Clash Meta for Android 还能导入原本的旧版 Clash 机场订阅吗？', a: '完全向后兼容，不仅支持传统 Shadowsocks/Trojan/VMess 订阅，还能正常驱动老版 Clash for Android 所不支持的 VLESS Reality 和 Hysteria 2。' },
      { q: '运行一段时间手机发烫或掉电快怎么办？', a: '减少无意义的超大规则列表订阅，并将核心里的并发测速间隔调长；日常不需看流媒体时亦可使用更轻量的节点切换策略。' },
      { q: '为什么我在谷歌商店找不到同款原名 Clash Meta for Android？', a: '原仓库变更与商店政策调整后，正版 CMFA 主要通过官方 GitHub Releases 渠道同步发布 APK；在搜索引擎搜中文网站下载极易遭遇篡改假包。' },
      { q: '可以用 CMFA 登陆飞猫云或无忧链接账号吗？', a: '不能，这两个品牌仅限制在它们各自官方发布的专属客户端中登录使用。' },
      { q: '提示“配置无效/YAML 解析失败”怎么解决？', a: '首先确认复制的是专用订阅 URL 而非官网登录主页地址；如果网络无法直连拉取订阅域名，在电脑或手机先用有效节点拉取或换用代理更新入口。' },
      { q: 'CMFA 支持按独立 App 分流代理吗？', a: '支持。在客户端“设置→网络→访问控制模式”中设为“仅允许/不允许已选择的应用”，把银行、社交和国内购物应用绕过即可。' },
    ],
  },

  v2rayn: {
    summaryLead: 'v2rayN 是跨平台（Windows/macOS/Linux）多核心调度标杆开源客户端，支持在 Xray-core、sing-box 与 Mihomo 之间自由切换。',
    steps: [
      { title: '1. 选择含运行时完整性对应的官方 zip 包', detail: 'Windows 建议选择带 Core 与完整运行库的安装包防止缺少 .NET 8 环境弹窗。' },
      { title: '2. 导入通用订阅组并按需求切换默认核心', detail: '支持粘贴 Base64 节点列表、单条 vless:// / trojan:// / ss:// 链接乃至常见 Clash 格式导入。' },
      { title: '3. 底部一键切换系统代理与 TUN 模式', detail: '保持主窗口“自动配置系统代理”与“绕过大陆”路由策略，遇终端/游戏需求时启 TUN。' },
    ],
    sections: [
      {
        heading: '为什么许多技术老兵至今把 v2rayN 留在主力工具箱？',
        paragraphs: [
          '不同于纯粹封装 Mihomo 的图形壳软件，v2rayN 本质是一套功能极强悍的多内核调度中心。无论手上是正规机场给的综合订阅，还是自己或团队在境外服务器自建的一条单节点 `vless://` Reality 分享链接，v2rayN 都能一并收入同一组配置里实现毫秒级延迟测试、带宽真测速和精确路由规则分流。新版（v7+）已完整打通 macOS 与 Linux 桌面构建，告别了早年仅限 Windows 的局面。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '桌面与多内核应用',
        intent: '调试进阶',
        articles: [
          { title: 'Windows 客户端七强对比与安全源清单', targetKeyword: 'v2rayN下载安装', plannedUrl: '/clients/windows/', summary: '对比 v2rayN 与 Clash Verge Rev 使用差异', existingHref: '/clients/windows/' },
          { title: 'v2rayN 导入机场订阅与路由设置（规划）', targetKeyword: 'v2rayN导入订阅', plannedUrl: '/guides/v2rayn-setup/', summary: '说明 Base64 与 Clash 格式兼容注意事项' },
        ],
      },
    ],
    faqs: [
      { q: 'v2rayN 导入机场给的 Clash 链接提示“无法解析节点”怎么回事？', a: 'v2rayN 对极复杂的第三方自定义 Clash YAML 策略组兼容性不如 Clash Verge Rev 原生；若出现该提示，请回机场控制台复制“V2Ray / 通用 Base64 订阅链接”，或在支持 Mihomo 核心切换模式下导入。' },
      { q: '启动 v2rayN 报“未找到 .NET Desktop Runtime”怎么处理？', a: '安装对应 x64 的微软官方 `.NET 8.0 Desktop Runtime`，或者重下官方发布包中注明内置自包含运行时的 zip。' },
      { q: 'v2rayN 测试真连接延迟全是 -1 或 Timeout，但系统时间是对的怎么办？', a: '排查是不是同时开了其他 VPN，或确认订阅已过期/用尽；部分机场还屏蔽了普通真连接检测接口 URL，直接尝试开浏览器验证更准。' },
      { q: 'v2rayN 默认的“绕过大陆（Bypass Mainland）”会把 GitHub 或 ChatGPT 错判直连吗？', a: '通常不会，但如果本地 DNS 污染导致域名解析偏回国内，务必检查 v2rayN 的路由域名策略（AsIs / IPIfNonMatch）与远程 DoH 配置。' },
      { q: 'v2rayN 和 Clash Verge Rev 到底日常应该留哪个？', a: '如果你只用常规机场提供的复杂策略分组（如香港/AI/流媒体分组），Clash Verge Rev 更省心；若还要混合自建单节点和 Xray Reality 专线，选 v2rayN 最强。' },
      { q: '非官方中文网站搜到的“v2rayN 最新集成加速包”安全吗？', a: '高度危险，务必仅在 GitHub `2dust/v2rayN` Releases 官方仓库下载并校验打包签名。' },
    ],
  },

  v2rayng: {
    summaryLead: 'v2rayNG 是 Android 端历史最久、最极简省电的 Xray-core 开源代理客户端。',
    steps: [
      { title: '1. 从 GitHub 或 Google Play 获取正版 APK', detail: '对照手机芯片选择 `arm64-v8a` 发行包安装。' },
      { title: '2. 添加订阅并开启本地分流预设规则', detail: '在“分应用代理”与“路由设置”启用“绕过局域网及大陆地址”。' },
      { title: '3. 测试连接真延迟并设置后台自启免清理', detail: '用一键真连接排查可用节点，避免后台熄屏被国产系统杀掉进程。' },
    ],
    sections: [
      {
        heading: '轻量极致体验 vs 复杂策略规则的权衡',
        paragraphs: [
          '相比动辄跑起数十万条图形规则集的 Mihomo 客户端，v2rayNG 在老款低内存手机或注重全天挂机续航的场景表现堪称楷模。但它也有清晰的能力边界：它的面板倾向单节点手动点选切换，原生并不自动执行机场定制的高阶多策略分流分组（比如自动把 Netflix 分流去台湾而 ChatGPT 走新加坡），因此多用途按区自动分流用户正逐步更多选择 FlClash。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安卓手机极简操作',
        intent: '移动连网',
        articles: [
          { title: '安卓 VPN 与代理分应用控制教程', targetKeyword: 'v2rayNG分应用代理', plannedUrl: '/vpn/android/', summary: '绕过国内银行及常用社交应用', existingHref: '/vpn/android/' },
          { title: 'Android 六大客户端软件对比指南', targetKeyword: '安卓用哪个代理软件好', plannedUrl: '/clients/android/', summary: '根据机场格式对照选 FlClash 还是 v2rayNG', existingHref: '/clients/android/' },
        ],
      },
    ],
    faqs: [
      { q: 'v2rayNG 能不能直接扫码或导入机场的 Clash 订阅地址？', a: '不能直接解析复杂 Clash YAML 策略配置；必须在机场面板复制“V2Ray / 通用订阅（Base64）”地址导入，否则无法识别出节点列表。' },
      { q: '测试节点延迟时出现绿字毫秒数，为什么浏览器还是没网？', a: '排查 v2rayNG 路由设置中是否误选了“全局直连”或者系统内部自带流量限额/私有 DNS 劫持（可暂时关闭系统设置的“私人 DNS”复测）。' },
      { q: 'v2rayNG 开启后会影响国内微信抢红包或收消息延迟吗？', a: '只要开启“绕过局域网及大陆地址”且配合分应用代理跳过微信/支付宝，对国内软件延迟几乎零感知。' },
      { q: '可以用 v2rayNG 登录仅专属客户端机场吗？', a: '不行，如飞猫云、无忧链接、Firefly 等不提供 Base64 订阅链接的品牌均无法导入。' },
      { q: 'v2rayNG 节点列表怎么判断哪条延迟最真？', a: '使用右上角菜单里的“测试全部配置真连接”（Real Ping / TCPING 而非简单 ICMP Ping），返回毫秒值代表真正与节点建立代理端口通信的时间。' },
      { q: '如果手机是华为 HarmonyOS 或小米澎湃系统，怎样避免待机掉线？', a: '进入系统电池设置给 v2rayNG 开启“无限制 / 允许后台高耗电运行”，并在最近任务栏往下划锁住程序卡片。' },
    ],
  },

  shadowrocket: {
    summaryLead: 'Shadowrocket（小火箭）是 iOS 与 iPadOS 上生态最成熟、轻量低耗能的标杆付费代理软件（亦支持 M 芯片 Mac）。',
    steps: [
      { title: '1. 使用本人拥有的外区 Apple ID 正规购入', detail: '中国大陆区商店已无法检索；绝对禁止在设备“设置→iCloud”登录别人提供的共享账号防止锁机勒索。' },
      { title: '2. 识别官方开发者，避开商店李鬼假包', detail: '认准开发者 `Shadow Launch Technology Limited`，一次性买断约 $2.99（切勿下成按周扣费的假包）。' },
      { title: '3. 导入通用或小火箭专用订阅并选用“配置”分流', detail: '选择内置或信誉良好的规则配置让“场景/国内直连、国外分流”。' },
    ],
    sections: [
      {
        heading: '为什么小火箭能在 iPhone 上多年统治个人市场？',
        paragraphs: [
          '苹果对第三方代理底层隧道扩展（NEPacketTunnelProvider）实施极其严苛的内存限制（约 50MB 阈值）。Shadowrocket 基于极高效的原生自研引擎，不仅能在低内存限制下秒开大量机场节点与复杂规则集，同时几乎兼容全网所有标准订阅格式（Base64、Clash YAML 基础节点、SIP008、单条节点分享链接乃至 Hysteria 2 与 VLESS）。',
          '对于拥有 iPhone、iPad 以及 Apple Silicon (M1–M4) Mac 的用户来说，购买一次即可全苹果硬件库互通复用，长期性价比极高。唯一需要注意的依然是：8 家仅限品牌专属 App 的机场不向小火箭提供订阅链接。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'iOS 安装防伪与规则实践',
        intent: '苹果生态',
        articles: [
          { title: 'iOS 八大客户端对比与免费替代方案', targetKeyword: '苹果小火箭替代品', plannedUrl: '/clients/ios/', summary: '无外区付款条件可看 Karing 与 Clash Mi', existingHref: '/clients/ios/' },
          { title: '机场订阅导入通用流程与防错细节', targetKeyword: 'Shadowrocket怎么导入订阅', plannedUrl: '/guides/subscription/', summary: '详解扫码、一键跳转与手动粘贴步骤', existingHref: '/guides/subscription/' },
        ],
      },
    ],
    faqs: [
      { q: 'App Store 里看到好几个叫 Shadowrocket VPN 或免费下载的软件能买吗？', a: '均属山寨假冒软件！正版小火箭名字就是 `Shadowrocket`，图标为白蓝火箭，开发者为 Shadow Launch Technology Limited，无免费版也不存在“按周VIP”。' },
      { q: '购买了 Shadowrocket 后，需要自己再单独购买机场订阅吗？', a: '是的，小火箭只是本地客户端外壳，本身不包含节点流量，必须搭配开放订阅的机场套餐（如光速云、星岛梦、唯兔云等）。' },
      { q: '小火箭上的“连通性测试”和“延迟测试”哪个准？', a: '默认推荐在设置里把延迟测速方法改设为“CONNECT”而非单纯 ICMP Ping，CONNECT 能真实反映连到机场节点端口并返回 HTTP 204 响应的总延时。' },
      { q: '为什么开了小火箭后在国内点外卖或用百度变卡了？', a: '请把主页的“全局路由”从“代理”切回“配置”，让内置国内白名单域名与国内 IP 段直连，就不会经过境外兜圈了。' },
      { q: '飞猫云、隐形人、无忧链接这些品牌支持导入小火箭吗？', a: '不支持，站内这 8 家专属客户端品牌明确不开放订阅导出功能，不能导入 Shadowrocket。' },
      { q: '没有美区信用卡怎么合法获取 iOS 代理客户端？', a: '可考虑在可靠免费通道上使用 App Store 上架免费的 Karing 或 Clash Mi；或者选用合规自备个人外区 ID 充值正规礼品卡采购。' },
    ],
  },

  mihomo: {
    summaryLead: 'Mihomo（原 Clash.Meta）是目前中文机场生态应用最广的现代开源代理内核，驱动着 Clash Verge Rev、FlClash 与 OpenClash。',
    steps: [
      { title: '1. 区分“底层引擎”与“图形前端客户端”', detail: '普通用户无需手动运行 Mihomo CLI，而是通过 Clash Verge Rev / FlClash / OpenClash 调用它。' },
      { title: '2. 核对配置文件支持的现代协议列表', detail: 'Mihomo 支持 Shadowsocks、Trojan、VMess、VLESS、Hysteria 2、TUIC 与 Snell 等全部现役协议。' },
    ],
    sections: [
      {
        heading: '理解 Mihomo 生态关系，不再被“几十个 Clash 衍生名”绕晕',
        paragraphs: [
          '当你在网上同时看到 Clash Verge Rev、FlClash、Clash Nyanpasu、Mihomo Party、Clash Mi、OpenClash 与 Nikki 等各种名称时，无需觉得眼花缭乱——**它们共享同一个内核大脑：Mihomo（原 Clash.Meta）**。原版老 Clash 内核停止研发后，Mihomo 成为绝大多数商业机场与软路由默认的订阅模板目标平台，尤其是它的 `Rule-Set` 规则集与增强 Fake-IP DNS 机制已成为中文跨境规则分流标准。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '基于 Mihomo 的客户端矩阵',
        intent: '架构选型',
        articles: [
          { title: 'Clash Verge Rev 桌面旗舰客户端档案', targetKeyword: 'Mihomo客户端', plannedUrl: '/clients/clash-verge/', summary: '桌面端调用 Mihomo 内核的主力 GUI', existingHref: '/clients/clash-verge/' },
          { title: 'OpenWrt 软路由 OpenClash 与 Nikki 比较', targetKeyword: 'OpenWrt Mihomo', plannedUrl: '/clients/openwrt/', summary: '家庭用网基于 Mihomo 内核的路由配置', existingHref: '/clients/openwrt/' },
        ],
      },
    ],
    faqs: [
      { q: '旧版 Clash.Meta 和现在的 Mihomo 是同一个项目吗？', a: '是的，Mihomo 就是原 Clash.Meta 核心团队在原品牌调整后采用的全新工程项目名称，语法与订阅字段完全继承兼容。' },
      { q: '机场面板提供“Clash 订阅”和“Clash Meta 订阅”，用 Clash Verge 选哪个？', a: '若页面有单独区分“Clash Meta / Mihomo 订阅”，优先选它能完整下发 Hysteria 2、VLESS 等新协议节点；若只有单一“Clash 订阅”，如今主流机场底层也已默认输出 Mihomo 兼容格式。' },
      { q: '在 Clash Verge Rev 里面需要手动去更换最新的 Mihomo Alpha 核心吗？', a: '除非当前机场启用了极新实验协议或已知有特定 Bug，普通用户跟随机型稳定版客户端随包附带的稳定内核即可，不建议盲目频繁追 Alpha 测试核心。' },
      { q: 'Mihomo 内核相比传统老 Clash 内核最大优势是什么？', a: '彻底补齐了 VLESS (XTLS-Vision/Reality)、Hysteria 2、TUIC 等新抗阻断传输协议，并在 DNS 并发嗅探与 GeoSite/Rule-Set 内存占用上做了大量工程重构。' },
      { q: 'Clash Mi 是什么软件？跟 Mihomo 有什么联系？', a: 'Clash Mi 是基于 Mihomo 内核开发的一款同时面向 iOS App Store（免费）与桌面端的轻量化全平台客户端工具。' },
      { q: '为什么某些专属客户端机场说自己兼容 Clash 协议但不给导出链接？', a: '即使它们的服务器后台或客户端内部可能借鉴或封装了相关内核技术，只要未向用户侧公开通用 YAML 订阅接口，在兼容性归类上就仍属“仅专属客户端”。' },
    ],
  },

  'sing-box': {
    summaryLead: 'sing-box 是新一代全平台高性能统一代理核心（官方自带 SFA / SFI / SFM），也是 Hiddify 与 Karing 的底层心脏。',
    steps: [
      { title: '1. 了解 sing-box 的统一多系统原生客户端系列', detail: '官方按系统发布 SFA (Android)、SFI (iOS/Apple)、SFM (macOS) 与桌面工具。' },
      { title: '2. 确认机场是否直接下发 sing-box JSON 订阅', detail: '若机场面板尚未提供原生 JSON 格式，部分支持工具（如 Karing）可内部兼容自动转换 Clash/Base64 订阅。' },
    ],
    sections: [
      {
        heading: 'sing-box 与 Mihomo 的定位区别：为什么极客和轻量新秀越来越青睐它？',
        paragraphs: [
          '与专注 YAML 配置兼容历史的 Mihomo 不同，sing-box 从立项第一天起就瞄准“全平台通用标准 JSON 配置、原生高效并发栈与更低的移动内存开销”。正因为它的轻量与 iOS 兼容性优势，目前苹果端免费软件 Karing、跨平台 Hiddify 以及 OpenWrt 新兴插件 HomeProxy 均选择 sing-box 作为引擎核心。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'sing-box 客户端全家桶',
        intent: '生态拓展',
        articles: [
          { title: 'Karing：免费全平台 sing-box 代表作', targetKeyword: 'sing-box好用客户端', plannedUrl: '/clients/karing/', summary: '直接导入 Clash/V2Ray 订阅免除手动写 JSON', existingHref: '/clients/karing/' },
          { title: 'Hiddify 跨平台客户端功能对照', targetKeyword: 'sing-box图形界面', plannedUrl: '/clients/hiddify/', summary: '适合简洁零设置启动场景', existingHref: '/clients/hiddify/' },
        ],
      },
    ],
    faqs: [
      { q: '我的机场后台只有 Clash 和 V2Ray 链接，没有 sing-box 格式，能用 SFI/SFA 吗？', a: '官方原生 SFI/SFA 严格要求 sing-box `.json` 结构；如果机场没给原生 JSON，改用底层同样是 sing-box 但支持多订阅自动转换的 Karing 或 Hiddify 最省事。' },
      { q: '为什么 sing-box 官方在苹果商店上架叫 SFI？', a: 'SFI 即 sing-box for iOS 缩写，官方全系软件包括 Android 端 SFA、macOS 端 SFM，均由开发者正规上架供免费获取。' },
      { q: 'Hiddify 和 Karing 都是基于 sing-box，区别主要在哪？', a: 'Hiddify 主打界面极简大开关；Karing 在保留免费和 sing-box 性能的同时，提供了接近国内 Clash/小火箭生态的分流预设与多种链接直接解析能力。' },
      { q: 'sing-box 在 OpenWrt 软路由上对应的插件是什么？', a: '主要为 HomeProxy 与新版 PassWall2（多核可选模式），相比基于 Mihomo 的 OpenClash，内存占用往往更精简。' },
      { q: 'sing-box 支持最新的 Hysteria 2 与 VLESS Reality 吗？', a: '完全原生支持，且往往是最早一梯队提供标准化支持的底层核心之一。' },
      { q: '用 sing-box 官方原版怎么最稳妥更新分流规则？', a: '建议使用官方支持的远程 `.srs`（sing-box rule-set）二进制规则集格式，加载速度和内存消耗大幅优于旧文本规则。' },
    ],
  },

  flclash: {
    summaryLead: 'FlClash 是一款基于 Flutter 跨平台框架与 Mihomo 内核开发的现代代理客户端，以 Windows/Android/macOS/Linux 高度统一顺滑的交互备受新手喜爱。',
    steps: [
      { title: '1. 从 GitHub 官方发布页下载对应平台安装包', detail: '支持 Windows、macOS、Linux 与 Android（无 iOS 官方上架）。' },
      { title: '2. 粘贴机场通用 Clash/Mihomo 订阅即可起飞', detail: '直接继承机场分流规则与策略组，界面卡片切换比传统软件更直观。' },
    ],
    sections: [
      {
        heading: '为什么许多多设备用户正从旧客户端转向 FlClash？',
        paragraphs: [
          '在以前，电脑端用 Clash for Windows、安卓手机用 Clash for Android 或 v2rayNG，界面与按键逻辑完全不一样，教会新手一个设备还要从头教另一台。FlClash 用同一套简洁的现代卡片设计同时覆盖 PC、Mac、Linux 与 Android 手机，只要在电脑学会了怎么选节点、开关 TUN 或看流量余量，在安卓手机上能 100% 原地复现。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '跨桌面与安卓协同指南',
        intent: '多端体验',
        articles: [
          { title: 'Android 端 FlClash 与 v2rayNG 深度对比', targetKeyword: 'FlClash安卓好用吗', plannedUrl: '/clients/android/', summary: '比较续航省电与界面直观度', existingHref: '/clients/android/' },
          { title: 'Windows 桌面端 Clash Verge Rev vs FlClash', targetKeyword: 'FlClash对比Clash Verge', plannedUrl: '/clients/windows/', summary: '了解专业覆写拓展 vs 极简审美取舍', existingHref: '/clients/windows/' },
        ],
      },
    ],
    faqs: [
      { q: 'FlClash 有苹果 iPhone / iPad App Store 版本吗？', a: '没有。截至本档案更新节点，FlClash 覆盖 Windows、macOS、Linux 与 Android 四平台；iPhone 用户建议搭配 Shadowrocket、Karing 或 Clash Mi。' },
      { q: 'FlClash 支持机场的标准 Clash YAML 订阅链接吗？', a: '完全原生支持，因为它的底层代理核心同样是 Mihomo，绝大多数支持第三方订阅的机场链接可直接粘贴使用。' },
      { q: 'FlClash 和 Clash Verge Rev 在电脑端怎么选？', a: '极客玩家、需要深度 JS/YAML 覆写脚本定制或复杂内核调优的选 Clash Verge Rev；普通用户与希望手机电脑操作习惯一致的选 FlClash 极其惬意。' },
      { q: 'FlClash 需要手动安装额外运行库才能打开吗？', a: '不需要，官方提供完备的打包文件（如 Windows 安装包/压缩包与 Android arm64 APK），开箱即用。' },
      { q: '使用 FlClash 支持开启 TUN 虚拟网卡接管桌面命令行吗？', a: '支持，桌面端软件内具备清晰的虚拟网卡（TUN）切换控制以支撑终端或忽略系统代理的桌面 App。' },
      { q: '为什么从国内某些网盘下载到的“FlClash 汉化高速版”打开乱弹广告？', a: '官方 FlClash 本身就是开源免费且自带简体中文界面，凡第三方打包网盘流传均涉嫌捆绑广告甚至木马，请立即删除改用 GitHub 官方正版。' },
    ],
  },

  hiddify: {
    summaryLead: 'Hiddify 是一款基于 sing-box 内核的开源跨平台多系统客户端，主打一建连接、多格式订阅识别与极简界面。',
    steps: [
      { title: '1. 根据系统选择 Windows / Android / iOS / macOS / Linux 安装源', detail: '全主流平台覆盖完整。' },
      { title: '2. 导入订阅并在“设置→地区分流”选择中国（CN） preset', detail: '确保启用默认大陆分流预设，防止国内网站流量错走海外。' },
    ],
    sections: [
      {
        heading: '全平台覆盖下的极简主义定位与常见注意点',
        paragraphs: [
          'Hiddify 最初因极其友好的全平台免费生态与对 sing-box 先进传输协议的全面囊括而迅速出圈。不过对于中文环境用户来说有一点核心注意点：首次安装时必须进入配置选项明确把地区/分流模板切为适配中国大陆（Region: China），否则若停留在默认全局模式运行，微信与国内访问同样会被拉慢甚至触发国内风控验证。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '全平台 sing-box 工具比较',
        intent: '免费多端',
        articles: [
          { title: 'sing-box 内核生态与跨平台特性总览', targetKeyword: 'Hiddify内核sing-box', plannedUrl: '/clients/sing-box/', summary: '了解现代统一内核与原生多端关系', existingHref: '/clients/sing-box/' },
          { title: 'Karing vs Hiddify 苹果与电脑端对比', targetKeyword: 'Hiddify对比Karing', plannedUrl: '/clients/karing/', summary: '比较两款免费全平台工具本地分流顺手度', existingHref: '/clients/karing/' },
        ],
      },
    ],
    faqs: [
      { q: 'Hiddify 为什么我连上后打开国内淘宝和百度突然变得极慢？', a: '十有八九是因为没有在 Hiddify 设置里将“地区（Region）”设定为 China，导致系统把全部国内外请求通通转发给了海外服务器。' },
      { q: 'Hiddify 是免费的吗？会不会用到一半弹广告收费？', a: '官方开源版本的 Hiddify 完全免费开源无广告，确保从其官方 GitHub 仓库或对应正规商店主页获取。' },
      { q: 'Hiddify 能否导入常规机场给的 Clash 订阅链接？', a: '支持导入包含常见节点的订阅与 sing-box 配置，但部分机场依赖极其复杂的定制 Clash 规则脚本时可能与默认模板产生细微策略组差异。' },
      { q: 'Hiddify iOS 端在国区商店能找到吗？', a: '与其它同类网络工具一样受区服政策制约，须在非大陆区 App Store 获取（如遇到高仿名称付费应用切勿付款）。' },
      { q: '适合在多台公司/家里电脑同时装 Hiddify 用吗？', a: '支持全平台免费安装，但切记保持与机场账户本身允许的“同时在线 IP 数限制”相匹配。' },
      { q: '可以用 Hiddify 连接只提供自研 App 的机场（比如 Firefly 或飞猫云）吗？', a: '不可以，无开放通用订阅链接的品牌均无法导入 Hiddify。' },
    ],
  },

  karing: {
    summaryLead: 'Karing 是近年来深受中文用户关注的免费全平台现代代理工具，底层采用 sing-box 核心，并专门贴合本地习惯实现了 Clash/V2Ray 多订阅直接兼容。',
    steps: [
      { title: '1. 在 App Store（外区免费）或 GitHub 获取全平台端', detail: '横跨 iOS、Android、Windows、macOS 与 Linux 五端免费。' },
      { title: '2. 启用“新手引导”设定国家地区为中国以开启内置分流', detail: '自动下载精简可控的大陆直连规则，省去用户自己写正则分流的麻烦。' },
      { title: '3. 导入开放订阅后在“分流组”按需指定 AI 与流媒体国家', detail: '同样支持直接为 OpenAI/Gemini 指定非香港出口。' },
    ],
    sections: [
      {
        heading: '为什么 Karing 常被当成 iOS 无付费替代和全端统一工具？',
        paragraphs: [
          '对于拥有个人外区 Apple ID 但暂不打算绑卡支付 $2.99 购买 Shadowrocket 的用户，Karing 在外区商店提供的免费版不仅界面清晰、原生贴合中文“国内直连/境外代理”直觉，而且把底层的 sing-box 引擎能力完美释放到了全系统（包括 iPhone 和 Windows/Mac）。同时它能无缝吞下标准 Clash 订阅与 V2Ray 订阅，过渡成本几乎为零。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'iOS 与跨平台免费方案',
        intent: '免费跨端',
        articles: [
          { title: 'iOS 免费客户端对比：Karing vs Clash Mi vs SFI', targetKeyword: 'iPhone免费代理工具', plannedUrl: '/clients/ios/', summary: '对比不付费购买小火箭的合规苹果软件选择', existingHref: '/clients/ios/' },
          { title: 'sing-box 底层特性与多系统互通机制', targetKeyword: 'Karing是什么内核', plannedUrl: '/clients/sing-box/', summary: '了解低内存占用对苹果设备稳定的作用', existingHref: '/clients/sing-box/' },
        ],
      },
    ],
    faqs: [
      { q: 'Karing 真的全平台完全免费吗？和 Shadowrocket 比缺了什么？', a: '日常使用层面（订阅导入、分流规则、ChatGPT 切区节点、TUN 模式）Karing 免费版已完全充足；Shadowrocket 主要强在极其丰富的苹果老牌深度脚本、抓包工具链及长期极少内存溢出的口碑。' },
      { q: 'Karing 可以同时把两家机场（主力月付 + 备胎不限时）融在同一个连接逻辑里吗？', a: '支持在工具内添加多条订阅源并通过配置分组管理不同机场出口，适合同时管理主备路线。' },
      { q: '在 Karing 里开启后看国内视频会不会耗掉我的机场套餐流量？', a: '只要确认开启了国内直连规则（引导阶段选对 China 地区预设或确认国内域名命中 DIRECT），国内访问不经代理、完全不扣套餐额度。' },
      { q: 'Karing 需要我先买好机场才能用吗？', a: '是的，Karing 是纯客户端软件工具，自身不提供服务器节点，需配合如光速云、星岛梦、唯兔云等开放第三方订阅的服务。' },
      { q: '飞猫云、隐形人或无忧链接能否导入 Karing？', a: '不行，这些品牌只允许用官方专属 App 登录账号使用。' },
      { q: '如果 Karing 打开提示规则文件下载超时怎么办？', a: '可以在已有初步连通性的节点下重新触发一次远程 Rule-Set 更新，或参照 /diagnostics/dns-error/ 检查本机 DNS 情况。' },
    ],
  },
};
