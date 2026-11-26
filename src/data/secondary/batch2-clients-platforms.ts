import type { TopicEnrichment } from './enrich';

export const CLIENT_PLATFORM_ENRICHMENTS: Record<string, TopicEnrichment> = {
  windows: {
    tables: [
      {
        title: 'Windows 10 / 11 六款主力开源与免费代理客户端横向选型表',
        columns: ['客户端', '底层内核', '安装包形态', '最突出优势与适用人群'],
        rows: [
          ['Clash Verge Rev', 'Mihomo', 'setup.exe (x64/arm64) / 便携版', '综合生态最完善，服务模式 TUN 与脚本覆写能力最强'],
          ['FlClash', 'Mihomo', 'Windows 安装包 / 压缩包', 'Flutter 全平台统一 UI，新手过渡和电脑手机一致体验首选'],
          ['v2rayN', 'Xray / sing-box / Mihomo', '绿色免安装 zip（需 .NET 运行时）', '支持多内核自由切换与单节点精细调试，极客偏爱'],
          ['Hiddify', 'sing-box', 'Windows 安装包', '界面简洁开箱即用，天然强兼容 sing-box 现代协议'],
          ['Karing', 'sing-box', '安装版 / 便携版', '同样界面横跨 Windows 与 iOS，适合全平台同步管理'],
        ],
      },
    ],
    steps: [
      { title: '确认处理器架构并卸载失效旧软件', detail: '绝大多数 PC 为 x64；首先停止并卸载早已停更归档的旧版 Clash for Windows 避免旧配置干扰。' },
      { title: '仅从 GitHub Releases 核验下载正版程序', detail: '避开搜索引擎竞价伪装的“中文绿色官网”，安装时确认不被系统误删核心文件（mihomo.exe / xray.exe）。' },
      { title: '先以“系统代理 + Rule 分流”启用并测试', detail: '常规上网开系统代理即足够；仅当命令行终端、Git 或独立桌面 AI App 不通时才安装服务模式开启 TUN。' },
    ],
    clusters: [
      {
        clusterName: 'Windows 安装与桌面排障',
        intent: '桌面部署',
        articles: [
          { title: 'Clash Verge Rev Windows 完整配置流程', targetKeyword: 'Clash Verge Windows教程', plannedUrl: '/guides/clash-verge/', summary: '导入订阅、开关系统代理与开启服务 TUN', existingHref: '/guides/clash-verge/' },
          { title: 'Windows 客户端启动报错或端口被占用排查', targetKeyword: 'Clash打不开怎么办', plannedUrl: '/diagnostics/client-launch/', summary: '解决内核缺失、端口残留与安全软件误杀', existingHref: '/diagnostics/client-launch/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么装了 Clash Verge Rev 之后，还要装 v2rayN 吗？', a: '日常不需要混装两款。除非手头同时拥有老牌 Clash YAML 订阅和单条原始 VLESS Reality 分享链接且懒得转换，才分别使用或全权交给 v2rayN。' },
      { q: 'v2rayN 打开提示缺少 .NET Desktop Runtime 怎么处理？', a: '下载微软官方 .NET 运行时安装包（一般 .NET 8 桌面运行时），或直接下载 v2rayN 官方发布页标明 `With-Core / SelfContained` 包含运行时的完整包即可。' },
      { q: 'Windows 退出软件后突然全部网页打不开怎么办？', a: '去 Windows 设置 → 网络和 Internet → 代理，把“使用代理服务器”手动拨回关闭即可秒恢复。' },
    ],
  },

  android: {
    tables: [
      {
        title: 'Android 端五大常用开源代理客户端与适配边界对照',
        columns: ['客户端', '核心内核', '获取路径', '主要特征与风险提示'],
        rows: [
          ['FlClash', 'Mihomo', 'GitHub Releases', '现代 Flutter 界面，与桌面版配置习惯统一，分流直观'],
          ['v2rayNG', 'Xray-core', 'GitHub / Google Play', '体积小巧极省电、老安卓机后台存活度高'],
          ['Clash Meta for Android', 'Mihomo', 'GitHub Releases', '安卓老牌 Mihomo 客户端，熟悉 CMFA 规则结构用户稳健首选'],
          ['Karing / Hiddify', 'sing-box', 'GitHub Releases', '原生态支撑 sing-box 格式，跨系统迁移配置方便'],
          ['NekoBox（需高度警惕假包）', 'sing-box', '仅认准原开发者公开仓库', '部分下架后衍生仿冒站大量捆绑木马，非必要不从陌生网盘搜包'],
        ],
      },
    ],
    steps: [
      { title: '识别 CPU 架构选对 arm64-v8a APK', detail: '近几年绝大多数安卓手机均为 arm64-v8a；若老设备不确认可直接选 universal 全架构版本。' },
      { title: '赋予后台高优先级与自启动权限', detail: '解除小米、华为、OPPO、vivo 系统的后台自动休眠限制，避免锁屏 15 分钟断网。' },
      { title: '善用“分应用代理”隔离国内 App', detail: '排除微信、支付宝、美团与银行客户端不进代理通道，兼顾省电与防交易风控。' },
    ],
    clusters: [
      {
        clusterName: '安卓手机端装机与分流',
        intent: '移动装机',
        articles: [
          { title: 'v2rayNG 安卓端详细档案与导入步骤', targetKeyword: 'v2rayNG安装', plannedUrl: '/clients/v2rayng/', summary: '了解 Xray-core 安卓轻量配置', existingHref: '/clients/v2rayng/' },
          { title: 'Clash Meta for Android 使用说明', targetKeyword: 'Clash Meta安卓', plannedUrl: '/clients/clash-meta/', summary: '标准 Mihomo 规则配置文件兼容导入', existingHref: '/clients/clash-meta/' },
        ],
      },
    ],
    faqs: [
      { q: '买完飞猫云、无忧链接或灵猫网络，能在安卓下载 FlClash 导入吗？', a: '不能！上述品牌仅支持各自官网提供的专属安卓 App 登录，不提供第三方订阅链接。' },
      { q: '为什么小米/华为手机安装从 GitHub 下的安装包提示禁止安装未知来源？', a: '在系统的“隐私/应用安装授权”中对所用浏览器临时开启“允许安装来自此来源的应用”，并切记只从 GitHub 官方 Releases 获取包体。' },
      { q: '安卓开了代理之后网银 App 提示“当前处于 VPN 风险环境”怎么办？', a: '进入客户端设置的“分应用代理（绕过名单）”将银行 App 加入绕过白名单，即可在不断开代理的同时正常使用银行软件。' },
    ],
  },

  ios: {
    tables: [
      {
        title: 'iOS / iPadOS 主流代理软件费用与内核架构对照表',
        columns: ['客户端名称', '商店价格/授权', '底层机制', '核心定位与适应人群'],
        rows: [
          ['Shadowrocket（小火箭）', '美区约 $2.99 一次性买断', '自研轻量引擎', '装机量最广，几乎全部开放订阅机场一键直导'],
          ['Karing / Clash Mi', 'App Store 免费', 'sing-box / Mihomo', '适合尚未海外绑卡买付费软件的新手替代工具'],
          ['Stash', '付费买断或订阅制', '兼容 Clash YAML', '完全沿用桌面端 Clash 规则生态与覆写逻辑'],
          ['Quantumult X / Surge 5', '高阶付费软件', '自研网络引擎', '面向深度脚本重写、HTTPS 抓包与复杂策略专家'],
          ['sing-box (SFI)', '开源免费上架', 'sing-box 官方', '轻量纯粹无花哨界面，适合跨端 JSON 统一调度'],
        ],
      },
    ],
    steps: [
      { title: '独立注册或自持海外区 Apple ID', detail: '严禁去某宝/社群登录来历不明的“共享已购 Apple ID”，一旦对方恶意锁定“查找我的 iPhone”手机即变砖。' },
      { title: '在 App Store 搜索准确开发者发布包', detail: '避免下载界面高度雷同、内嵌每日订阅扣费陷阱的李鬼克隆软件（如山寨同名小火箭付费订阅弹窗）。' },
      { title: '精简移动端分流规则规模', detail: 'iOS NetworkExtension 有 ~50MB 内存红线，手机配置保持简洁防闪退。' },
    ],
    clusters: [
      {
        clusterName: '苹果端软件档案与避坑',
        intent: 'iOS 生态',
        articles: [
          { title: 'Shadowrocket（小火箭）完整软件规格与安全指南', targetKeyword: 'Shadowrocket教程', plannedUrl: '/clients/shadowrocket/', summary: '核对官方开发者名与多端通用格式支持', existingHref: '/clients/shadowrocket/' },
          { title: 'Karing：免费跨平台 sing-box 替代方案', targetKeyword: 'iOS免费代理客户端', plannedUrl: '/clients/karing/', summary: '零软件采购成本导入开放订阅', existingHref: '/clients/karing/' },
        ],
      },
    ],
    faqs: [
      { q: '买了付费小火箭还要另外再买机场套餐吗？', a: '是的！Shadowrocket 只是一个“网络客户端播放器”，本身不带任何节点流量，需要搭配机场订阅地址才能连网。' },
      { q: '国区 App Store 搜到的所谓“免费小火箭/Shadowrocket Pro”能下吗？', a: '全是假冒引导广告或高额周订阅收割软件，正版小火箭从未在中国大陆区 App Store 上架。' },
      { q: '为什么 iPad 上配置了跟电脑一模一样的 20 万条超大型分流规则文件后连着连着会自己掉线？', a: '因为触发了 iOS NetworkExtension 的 ~50MB 严格内存上限（OOM），精简冗余广告与冷门分流表后即可立刻恢复稳定。' },
    ],
  },

  macos: {
    tables: [
      {
        title: 'macOS（Intel 与 Apple Silicon M1–M4）客户端安装匹配表',
        columns: ['客户端', '芯片包区别要点', '推荐方式', 'macOS 特色注意'],
        rows: [
          ['Clash Verge Rev', '须分清 `aarch64.dmg` (M芯片) 与 `x64.dmg` (Intel)', 'DMG 官方拖拽安装', '支持增强模式/TUN 与 macOS 系统代理自动切换'],
          ['FlClash', '同样区隔 arm64 与 amd64 DMG', 'Flutter 现代桌面交互', '适合同时使用 Android + Mac 的视觉统一控'],
          ['v2rayN (macOS 版)', '支持 macOS 跨平台发布', '多内核（Xray/sing-box/Mihomo）', '从 Windows 迁移来的用户操作零适应成本'],
          ['Shadowrocket / Surge Mac', 'M 系列芯片 Mac 可直接安装 iOS 已购小火箭', 'Mac App Store', 'M 芯片无需重复购买小火箭即可桌面复用'],
        ],
      },
    ],
    steps: [
      { title: '先点左上角苹果菜单“关于本机”核对芯片类型', detail: 'M1/M2/M3/M4 选 `arm64 / aarch64` 包，老款 Intel CPU 选 `x64 / x86_64` 包。' },
      { title: '处理“已损坏，无法打开 / 无法验证开发者”弹窗', detail: '前往系统设置→隐私与安全性点击“仍要打开”，或在终端执行合法隔离属性清除指令（须先核对 SHA256 来源）。' },
      { title: '区分系统代理与终端命令行代理变量', detail: '终端写代码若不愿开全局 TUN，可直接设置客户端一键复制 `export http_proxy / https_proxy` 命令粘贴终端临时使用。' },
    ],
    clusters: [
      {
        clusterName: 'Mac 桌面生产力调优',
        intent: 'Mac 装机',
        articles: [
          { title: 'Clash Verge Rev 安装与 Mac 服务权限设置', targetKeyword: 'Mac Clash Verge安装', plannedUrl: '/clients/clash-verge/', summary: '了解 Mihomo 在 macOS 上的权限要求', existingHref: '/clients/clash-verge/' },
          { title: '客户端安装全平台芯片架构对比表', targetKeyword: 'macOS代理客户端', plannedUrl: '/guides/installation/', summary: '查清 arm64 与 x86_64 安装防错要点', existingHref: '/guides/installation/' },
        ],
      },
    ],
    faqs: [
      { q: '旧版 ClashX 为什么不再推荐给新买 M3/M4 Mac 用户？', a: '原 ClashX 已归档停止更新，不支持新协议且存在老旧兼容问题，目前均建议升级至 Clash Verge Rev 或 FlClash。' },
      { q: 'Apple Silicon M 系列 Mac 用已买的 iPhone 小火箭好还是 Clash Verge Rev 好？', a: '看需求：如果只是浏览器和 ChatGPT 网页查资料，直接从已购列表装 Shadowrocket 最快；若需要终端接管 TUN、开发调试与复杂分流规则，Clash Verge Rev 明显更强。' },
      { q: 'Mac 开启代理后 brew、git、docker 还是拉不动怎么办？', a: '因为在默认“系统代理”下很多命令行工具不读取系统 HTTP 代理配置：要么去终端执行客户端的“复制终端代理环境变量”，要么直接启用服务模式下的 TUN。' },
    ],
  },

  linux: {
    tables: [
      {
        title: 'Linux 桌面环境与无头服务器 / NAS 部署模式对比',
        columns: ['部署环境', '建议方案', '打包与运行形态', '关键实操注意'],
        rows: [
          ['Ubuntu / Fedora / Arch 桌面版', 'Clash Verge Rev / FlClash / v2rayN', '`.deb` / `.rpm` / `.AppImage`', 'Desktop 版自带系统代理一键开关与 TUN 托盘管理'],
          ['无图形界面服务器 / 软路由 / NAS', 'v2rayA / mihomo / sing-box CLI', 'Systemd 服务或 Docker 容器', '通过浏览器访问本地 Web UI 管理订阅与透明代理'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、Linux 环境下避开专属客户端依赖的重要前提',
        lead: '绝大多数仅限专属客户端的机场根本不提供 Linux 桌面安装包或无头命令行客户端。',
        paragraphs: [
          '据客户端兼容性档案与全库核对：Windows 与 macOS 用户即便买了仅专属端品牌还能凑合用，但 Linux 桌面开发者与居家 NAS 服务器环境绝大多数只适配标准 Mihomo/sing-box YAML 或 JSON 订阅，选购前务必避开 8 家仅专属端产品（飞猫、隐形人、无忧、灵猫、Firefly、SOGO、闪跃、全球云），在光速云、星岛梦、唯兔云、极连云等开放订阅品牌中选择。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'Linux 生态与内核工具',
        intent: '开发与服务器',
        articles: [
          { title: 'Mihomo 内核生态无头二进制与配置规范', targetKeyword: 'Linux Mihomo配置', plannedUrl: '/clients/mihomo/', summary: '了解命令行直接读取 YAML 订阅与端口管理', existingHref: '/clients/mihomo/' },
          { title: 'sing-box 多平台命令行服务部署指南', targetKeyword: 'Linux sing-box教程', plannedUrl: '/clients/sing-box/', summary: '了解现代统一结构 JSON 配置文件模式', existingHref: '/clients/sing-box/' },
        ],
      },
    ],
    faqs: [
      { q: 'Ubuntu 上运行 AppImage 提示 FUSE 缺失或无沙盒权限打不开怎么处理？', a: '安装对应发行版的 `libfuse2` 依赖包（或优先选用原生的 `.deb`/`.rpm` 安装包），赋予文件可执行权限后从终端启动即可看到具体缺失库报错信息。' },
      { q: 'Linux 开发机平时只需让 Git / Docker / pip 走加速，用不用开全机透明代理？', a: '不一定。无头环境或只需特定脚本走代理时，用标准 `sing-box/mihomo` 作为系统后台服务监听 `127.0.0.1:7890`，再按需配置 `HTTP_PROXY` 环境变量更稳定可控。' },
      { q: '光速云这类双支持品牌支持 Linux 订阅导入吗？', a: '支持。所有在站内明确标注“支持第三方订阅”的 20 家品牌均可生成通用订阅供 Linux 下的 Clash Verge Rev 或 v2rayA 解析使用。' },
    ],
  },

  openwrt: {
    tables: [
      {
        title: 'OpenWrt 四大主流插件对比与硬件适配门槛',
        columns: ['插件名称', '依赖底层内核', '固件/内存建议', '适用场景评价'],
        rows: [
          ['OpenClash', 'Mihomo', '512MB+ 内存、大闪存软路由', '规则策略组最直观、可视化最丰富，老玩家首选'],
          ['Nikki', 'Mihomo', '须 OpenWrt 24.10+ (fw4 / nftables)', '针对新版 nftables 防火墙原生瘦身优化，配置干练'],
          ['HomeProxy', 'sing-box', 'ImmortalWrt / 官方新版生态', '轻量化原生态 sing-box 集成插件'],
          ['PassWall2', 'Xray-core / sing-box', '兼容范围广，中低性能路由器可用', '协议兼容性强，适合偏好节点直切分流的管理习惯'],
        ],
      },
    ],
    steps: [
      { title: '先查机场品牌是否开放第三方订阅 URL（一票否决项）', detail: '8 家仅专属客户端品牌（飞猫、无忧等）无法生成 OpenWrt 可读取的配置文件，硬装软件也没有链接可填。' },
      { title: '只安装并启用“唯一一个”透明代理插件', detail: '绝不要在一台 OpenWrt 里同时开启 OpenClash 与 PassWall2，两者抢夺 fw4/iptables 转发链会立刻导致全屋断网。' },
      { title: '核查内存与 Fake-IP 防 DNS 泄露设置', detail: '软路由接入电视盒（Apple TV/Shield）看 Netflix 时务必核查开启远程 DNS 防止解析错位。' },
    ],
    clusters: [
      {
        clusterName: '软路由内核与多设备协同',
        intent: '全家路由',
        articles: [
          { title: '支持导入软路由的全部 20 家开放订阅机场清单', targetKeyword: 'OpenWrt支持机场', plannedUrl: '/clients/', summary: '一键区分开放订阅与仅专属客户端品牌', existingHref: '/clients/' },
          { title: '多设备机场配额与软路由计费计算方式', targetKeyword: '软路由算几台设备', plannedUrl: '/recommend/multi-device/', summary: '评估家庭全屋网关下设备并发配额限制', existingHref: '/recommend/multi-device/' },
        ],
      },
    ],
    faqs: [
      { q: '家里刷了 OpenWrt 路由器插件，还需要电脑和手机装代理客户端吗？', a: '在家庭 Wi-Fi 覆盖范围内全屋终端无需再装客户端即可直接分流；但外出携带手机连接蜂窝 5G 或咖啡厅 Wi-Fi 时，仍需要在手机上开启相应客户端。' },
      { q: '为什么装了 Nikki 报错或防火墙规则启动失败？', a: 'Nikki 专为新版 OpenWrt 24.10+ fw4（nftables）架构编写，若仍在用老旧 iptables 架构固件（21.02 及更早版本），改用适配该版本的 OpenClash 或 PassWall2 即可。' },
      { q: '软路由跑满 500Mbps–1000Mbps 需要什么级别的硬件？', a: '如果涉及流媒体高码率加密并发与 TUN 转发，普通 4 核老硬路由 CPU 极易单核打满限速，建议配备常见 x86 N100/J4125 软路由或高频 ARM64 路由器。' },
    ],
  },
};
