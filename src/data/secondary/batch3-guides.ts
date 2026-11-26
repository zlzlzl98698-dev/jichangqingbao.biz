import type { TopicEnrichment } from './enrich';

export const GUIDES_ENRICHMENTS: Record<string, TopicEnrichment> = {
  subscription: {
    steps: [
      { title: '1. 核对品牌是否支持第三方订阅（一票否决前置检查）', detail: '站内 20 家支持订阅导入（如光速云、星岛梦、唯兔云等）；8 家仅专属端（飞猫、隐形人、无忧等）没有订阅网址。' },
      { title: '2. 校准本机系统时间误差小于 60 秒', detail: 'TLS 与节点鉴权依赖精确 UTC 时间，系统时间不对会让所有导入后的节点全红。' },
      { title: '3. 在面板复制通用/Clash 订阅地址粘贴至客户端并点更新', detail: '切记不要错复制浏览器顶部官网登录网址！' },
      { title: '4. 打开系统代理与 Rule 规则模式验证 Google 连网', detail: '如需跑终端或桌面 AI 客户端再按需启 TUN 模式。' },
    ],
    sections: [
      {
        heading: '二、通用订阅（Base64）vs Clash YAML vs sing-box JSON 区别说明',
        lead: '不同客户端吃不同结构，复制错格式是 80% 导入报错“解析失败”的元凶。',
        paragraphs: [
          '当你登录机场个人后台看到“一键导入”或好几个不同名字的复制链接时：1) 使用 Clash Verge Rev、FlClash、Clash Meta for Android 或 OpenClash 时，请复制 **Clash / Mihomo 订阅**（返回自带策略组与分流规则的 YAML 文本）；2) 使用 v2rayNG 或传统 v2rayN 通用导入时，需选用 **V2Ray / 通用 Base64 订阅**；3) 使用 iOS Shadowrocket（小火箭）或 Karing 时，两者兼容性都很强，通常直接认出常规与 Clash 格式。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '订阅导入与拉取故障排除',
        intent: '入网基础',
        articles: [
          { title: '订阅拉取失败或 YAML 解析超时排查全步骤', targetKeyword: '机场订阅更新失败', plannedUrl: '/diagnostics/subscription-failed/', summary: '解决直连域名受干扰与格式贴错问题', existingHref: '/diagnostics/subscription-failed/' },
          { title: '订阅泄露防护：为何不要用不明网页在线转换订阅', targetKeyword: '订阅链接安全', plannedUrl: '/guides/subscription-management/', summary: '管理重置链接与多设备风险隔离', existingHref: '/guides/subscription-management/' },
        ],
      },
    ],
    faqs: [
      { q: '复制订阅粘贴后一刷新，弹出 Connection refused 或 Timeout 怎么办？', a: '很可能是订阅服务器域名在当前直连网络下被干扰无法访问。试试开启客户端里的“使用代理更新（需已有能连的备用节点）”或者先用手机开个人热点拉取一次订阅。' },
      { q: '点“一键导入 Clash”弹出网页提示找不到应用程序怎么办？', a: '直接在面板点“复制订阅链接”，自己切回客户端软件里的订阅/配置栏手动 `Ctrl+V` 粘贴并点下载即可，功能完全一样。' },
      { q: '为什么买了订阅之后能看到十几个香港节点，却少有分流策略组？', a: '确认你复制的是“Clash 订阅”而非纯节点池 Base64 订阅，后者只有节点没有分流策略分组。' },
    ],
  },

  'clash-verge': {
    steps: [
      { title: '1. 从官方 GitHub Releases 核对架构下载 Clash Verge Rev', detail: '彻底替换已停更的旧版 Clash for Windows 或 ClashX。' },
      { title: '2. 订阅页粘贴 URL 并设为自动定期更新', detail: '更新完成后切入“代理（Proxies）”页面确认停留在“规则（Rule）”模式下。' },
      { title: '3. 在设置内点亮“系统代理”；遇命令行不通时再开启 TUN', detail: '如需使用 TUN，先点“服务模式”旁小盾牌安装系统服务并重启一次再开关 TUN。' },
    ],
    sections: [
      {
        heading: '二、Clash Verge Rev 日常三项关键开关分工逻辑',
        lead: '分清“系统代理”“TUN 模式”与“UWP 应用回环解密”，不再遭遇“绿字测速却浏览器报错”。',
        paragraphs: [
          '主界面设置页里最容易混淆的三个开关各有不同边界：**系统代理**控制本机标准浏览器及大多数常用办公网页软件；**TUN 虚拟网卡**接管三层数据包，主要针对终端 `git/curl/npm` 与独立 AI 桌面软件；而 Windows 用户若发现微软商店装的 UWP 应用（如商店自带 Netflix App）无法连网，才需要点下界面里的“UWP 回环豁免”。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '桌面配置与客户端深化',
        intent: '桌面操作',
        articles: [
          { title: 'Clash Verge Rev 软件深度技术档案与规格', targetKeyword: 'Clash Verge Rev下载', plannedUrl: '/clients/clash-verge/', summary: '了解 Mihomo 核心功能与生态兼容', existingHref: '/clients/clash-verge/' },
          { title: 'Clash 无法启动或内核未响应排查指南', targetKeyword: 'Clash Verge打不开', plannedUrl: '/diagnostics/client-launch/', summary: '处理杀毒软件隔离与端口占用冲突', existingHref: '/diagnostics/client-launch/' },
        ],
      },
    ],
    faqs: [
      { q: 'Clash Verge Rev 每次切换“系统代理”和“TUN”要全开吗？', a: '日常只开“系统代理”就够了；如果确实要跑终端或桌面 AI 客户端时打开 TUN，可暂时关掉系统代理或保持二者由软核协调工作，但切忌此时后台还有另一款加速器在运行。' },
      { q: '界面上的节点测延迟（Wi-Fi 图标）全部显示 Timeout 是不是配置导入错了？', a: '先去核查 Windows/Mac 的系统时钟日期是否正确，如果本地时间和当前真实时间差了几分钟，加密握手会全军覆没。' },
    ],
  },

  installation: {
    tables: [
      {
        title: '六大操作系统正版安装包格式与常见架构对照表',
        columns: ['操作系统', '硬件与处理器区分', '推荐打包格式 / 官方来源', '典型误装陷阱'],
        rows: [
          ['Windows 10/11', '绝大部分 PC 为 `x64`（极少骁龙 ARM64）', '`.exe` 安装包或带核心 `.zip` (GitHub)', '搜索引擎下到带毒“绿色破解优化包”'],
          ['macOS', 'M1/M2/M3/M4 为 `aarch64/arm64`；老 Mac 为 `x64`', '`.dmg` (GitHub) / M 芯片 Mac 可直下小火箭', 'M 系列错下 Intel x64 导致发烫卡慢'],
          ['Android', '几乎全部现代机为 `arm64-v8a`', '`.apk` (GitHub / Google Play)', '下到假冒“NekoBox 官网”恶意木马包'],
          ['iOS / iPadOS', 'iPhone / iPad', 'App Store（必须自持非大陆区个人 ID）', '登录淘宝“共享已购 Apple ID”遭远程锁机'],
          ['Linux / 软路由', 'x86_64 vs ARM64/aarch64', '`.deb`/`.AppImage` / OpenWrt opkg', 'OpenWrt 装错版本插件或双开冲突'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、为什么坚持只认 GitHub 官方仓库与独立海外商店？',
        lead: '百度的中文下载站几乎 100% 充斥二次打包劫持客户端，一次手误可能赔上常用设备隐私。',
        paragraphs: [
          '所有主流开源代理项目（Clash Verge Rev、FlClash、v2rayN、v2rayNG、Hiddify、Karing 等）原生均带简体中文界面，作者也从未授权搭建任何商业中文下载分站。凡你在国内常规引擎搜索前排见到写着“Clash 中文正式官网高速下载”的站群站点，其下载的 EXE/APK 极可能被植入篡改程序甚至盗取浏览凭据。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '设备端专属档案入口',
        intent: '正版获取',
        articles: [
          { title: 'Windows 客户端七强全对比与核验地址', targetKeyword: 'Windows代理安装包', plannedUrl: '/clients/windows/', summary: '查看开源仓库与系统兼容细节', existingHref: '/clients/windows/' },
          { title: 'iOS 苹果设备合法商店安装防骗手册', targetKeyword: 'iPhone怎么装小火箭', plannedUrl: '/clients/ios/', summary: '对比付费 Shadowrocket 与免费 Karing', existingHref: '/clients/ios/' },
        ],
      },
    ],
    faqs: [
      { q: '不会科学上网连 GitHub Releases 都打不开或者下载极慢，第一步先怎么办？', a: '如果是全新裸机且没有朋友帮忙中转开源官方包，可以考虑暂时购买一份提供独立官网合法签发客户端的入门服务（例如光速云、梯子云均有官方快捷客户端指引，飞猫云/无忧亦提供官网专属包）打通首步通道后，再去 GitHub 下载官方开源工具校验切换。' },
      { q: 'macOS 打开 DMG 后拖入应用提示“软件已损坏，建议移到废纸篓”真损坏了吗？', a: '大多不是文件损坏，而是苹果门禁（Gatekeeper）对未花钱买苹果公证的开源软件的常规拦截提示，请仅确认源地址源自正版 GitHub 仓库后再按系统安全性指引放行。' },
    ],
  },

  'routing-rules': {
    steps: [
      { title: '1. 保持客户端主模式在“规则（Rule）”而非“全局（Global）”', detail: 'Rule 模式会根据内置或订阅自带规则让国内站直连、境外站代理。' },
      { title: '2. 找到订阅内置的“OpenAI / AI / 流媒体”策略分组', detail: '手动将 AI 组指派到“新加坡 / 日本 / 美国”而非自动测速组（避免自动掉回香港）。' },
      { title: '3. 遇少见境外域名误走直连时再临时开 Global 核实', detail: '如果切到 Global 能秒开、切回 Rule 就转圈，证明规则集漏掉了该新域名，手动增补一行域名匹配规则即可。' },
    ],
    sections: [
      {
        heading: '二、看懂规则匹配优先级：Domain → Rule-Set → GeoIP → Final',
        lead: '每一条网络请求从上往下扫描规则表，命中即停止并立刻按规则动作（DIRECT/Proxy/Reject）转发。',
        paragraphs: [
          '现代 Mihomo / sing-box 客户端规则匹配采用严格由上而下的瀑布流：如果排在第一条的规则把 `openai.com` 指给了 `🇺🇸 美国/🇸🇬 新加坡策略组`，它就会精准落到指定区出口；而排在底部的 `GEOIP,CN,DIRECT` 则负责把所有归属国内运营商 IP 的流量全部放回本地物理宽带；最后兜底规则 `MATCH`（或 `FINAL`）将所有剩余未知海外域名交由日常主力代理组转发。理解了这四层顺序，你就不会再被几十条花哨分组搞晕。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '规则场景实战应用',
        intent: '精细调度',
        articles: [
          { title: 'ChatGPT 节点切区策略：规避香港与高频验证', targetKeyword: 'ChatGPT分流策略组', plannedUrl: '/streaming-ai/chatgpt/', summary: '设置固定日新美出口稳定对话', existingHref: '/streaming-ai/chatgpt/' },
          { title: 'DNS 解析（Fake-IP）如何配合规则分流防泄露', targetKeyword: '规则与DNS配合', plannedUrl: '/guides/dns/', summary: '确保域名解析不走本地污染路径', existingHref: '/guides/dns/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么我手改选好了“AI 分组用新加坡”，关机重启后又变回默认香港节点？', a: '部分旧版配置在勾选“每次开启软件重新自动更新订阅”且未保存持久化选择时可能重置分组，更新后记得锁定一次主力国家选择并关闭不必要频繁重拉覆盖。' },
      { q: '怎么把公司内网系统域名或国内特定平台加到强制直连白名单？', a: '在客户端配置覆写中添加 `DOMAIN-SUFFIX,yourcompany.com,DIRECT` 放在顶部规则之前即可。' },
    ],
  },

  'tun-mode': {
    steps: [
      { title: '1. 先明确是否真的需要 TUN 模式', detail: '仅网页浏览不需开启；需用终端命令行（git/pip/npm）、桌面 ChatGPT App 或微软商店应用时再打开。' },
      { title: '2. Windows/macOS 在客户端内安装服务模式（Service Mode）并授权管理员', detail: '未装系统级服务直接拨动 TUN 开关几乎必定失败或提示权限拒绝。' },
      { title: '3. 启动 TUN 前彻底关闭游戏加速器与企业 VPN', detail: '防止两个虚拟网卡争夺 `0.0.0.0/1` 默认网关引起整台电脑彻底断网。' },
    ],
    sections: [
      {
        heading: '二、系统代理（System Proxy）与 TUN 虚拟网卡的工作边界',
        lead: '系统代理像是在浏览器上装了一个告知牌，全凭应用自觉遵守；TUN 则是在系统网卡底层强行设立关卡拦截。',
        paragraphs: [
          '现代操作系统的普通 HTTP 系统代理设置仅作用于浏览器、部分 Electron 应用或主动读取环境变量的程序。大量的研发开发命令行、语言包管理器（Node npm / Python pip / Go / Docker pull）以及原生桌面版 AI App 根本直接向系统网卡发起三层发包而忽略代理端口。',
          '此时启用 TUN（Virtual Network Interface）模式会在系统内核创建一个虚拟网卡并接管全机所有 TCP/UDP/ICMP 报文，先交给本机 Mihomo 或 sing-box 核心按 Rule 分流——这让原本连不上线的工具全部开箱可用，但同时也对路由清洁度提出要求，绝不能让其他抢虚拟网卡的软件同时驻留。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '虚拟网卡与冲突解决',
        intent: '内核进阶',
        articles: [
          { title: 'TUN 模式开启后电脑全部断网冲突排查', targetKeyword: '开TUN模式断网', plannedUrl: '/diagnostics/tun-error/', summary: '解决服务模式报错及虚拟网卡争夺问题', existingHref: '/diagnostics/tun-error/' },
          { title: '网游加速器能和 TUN 一起开吗？', targetKeyword: 'TUN和加速器冲突', plannedUrl: '/vpn/game-accelerator/', summary: '分析双网卡抢路由死循环原理', existingHref: '/vpn/game-accelerator/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么一打开 TUN 开关，右上角提示 Service not installed 或启动失败？', a: '桌面客户端需要系统底层最高权限来创建虚拟网络适配器。请在设置页面“服务模式（Service Mode）”右侧先点安装/启用授权，按提示完成系统管理员认证后才能成功启动 TUN。' },
      { q: '一直开着 TUN 模式看国内视频会不会特别耗费机场流量或变卡？', a: '只要你的规则模式停留在 `Rule`，TUN 拦截后命中大陆规则与 `GEOIP,CN,DIRECT` 的包依旧会原地转交物理网卡直连，不会浪费机场流量；只是对本地低性能老 CPU 在超大文件全速局域网传数据时会有微弱转发开销。' },
    ],
  },

  dns: {
    tables: [
      {
        title: 'Fake-IP 模式 vs Redir-Host 模式工程原理对照表',
        columns: ['对比项', 'Fake-IP（现代主流推荐）', 'Redir-Host（经典兼容性备选）'],
        rows: [
          ['返回 IP 机制', '客户端立即向浏览器返回 `198.18.x.x` 保留段虚假 IP', '等待真实 DNS 解析查明真正目标公网 IP 后再进行匹配'],
          ['首包响应速度', '★★★★★ 零等待立即由远端节点并发接手', '★★★☆☆ 需等一次真实 DNS RTT 响应后再判规则'],
          ['防 DNS 污染/防泄漏', '★★★★★ 彻底杜绝本地路由器向国内发出境外域名查询', '★★★★☆ 须严格配合加密 DoH/DoT 与分流规则'],
          ['潜在局域网冲突点', '极个别企业私网/奇特拨号软件与 `198.18.0.0/16` 异常兼容', '几乎无冲突，方便程序员排查终端真实 `nslookup/ping` 结果'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、遇到域名已经连出外网但依然报 DNS_PROBE_FINISHED_NXDOMAIN 怎么办？',
        lead: '清除本地过时的运营商 DNS 缓存，确认“Nameserver”与“Fallback”分流配置没有互指环路。',
        paragraphs: [
          '当你在终端执行测试发现“能 Ping 通纯 IP、浏览器输入域名却完全解析不了”，先排查 Windows/Mac 本地网络适配器是不是此前强行写死过某个不可用的静态 DNS 或残留了 `198.18.0.2` 假地址；其次清理浏览器安全 DNS（Chrome 中的“使用安全 DNS”有时会与本地 Mihomo DNS 监听端口互相干涉，日常配合代理运行时建议在浏览器端保持关闭由客户端统一接管 DNS 分流）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'DNS 故障诊断与修复',
        intent: '解析排查',
        articles: [
          { title: 'DNS 错误与 Fake-IP 残留导致断网排查步骤', targetKeyword: '代理DNS错误怎么办', plannedUrl: '/diagnostics/dns-error/', summary: '恢复系统默认 DNS 与排查浏览器 DoH 冲突', existingHref: '/diagnostics/dns-error/' },
          { title: '解决流媒体区域错乱与“YouTube 送中”DNS 检查', targetKeyword: 'DNS防泄漏检测', plannedUrl: '/diagnostics/streaming-region/', summary: '保证出口国家与解析位置严格匹配', existingHref: '/diagnostics/streaming-region/' },
        ],
      },
    ],
    faqs: [
      { q: '小白装完 Clash Verge Rev，需要自己去网上抄几十行自定义 DNS 配置粘贴吗？', a: '一般不需要！只要是从主流开放订阅机场拉取的合规配置，官方模板内已经写好成熟的国内阿里/腾讯 DoH + 海外加密 DoH 分流结构；乱抄来历不明的网络复杂 DNS 配置反而最容易卡死解析。' },
      { q: '为什么我在命令提示符 `ping google.com` 返回的 IP 居然是 `198.18.0.12`？软件坏了吗？', a: '没有坏！这是 Fake-IP 模式完全正常的工作表现，说明客户端已经成功接管域名并准备按高效率通道送出转发了。' },
    ],
  },

  'multi-device': {
    sections: [
      {
        heading: '二、同账号跨手机、电脑、平板与软路由的防超限安全策略',
        lead: '设备数限制针对的是“同时分散公网 IP 活跃源”，合规分清个人多端与多人拼单区别至关重要。',
        paragraphs: [
          '很多新手误以为“一台电脑 + 一台手机 + 一个 iPad 就算 3 台了，如果买个限 3 台设备的机场，那我在公司再开一台就超限”。事实上在同一个家里或同一个 Wi-Fi 出口网络里，三台设备共享同一个公网 IP，多数后台监测并不会严苛卡死；真正会一秒触发封号风控的做法，是把一个普通个人账号的订阅链接同时分给不同城市的同学、或者开启公司/居家/4G 移动多地高速并发视频下载。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '多端选购与家庭路由',
        intent: '跨端管理',
        articles: [
          { title: '多设备机场推荐与账号并发阈值汇总', targetKeyword: '多设备机场限制', plannedUrl: '/recommend/multi-device/', summary: '对比常规 3–5 设备套餐与高阶不限数方案', existingHref: '/recommend/multi-device/' },
          { title: 'OpenWrt 软路由网关如何节省全家设备配额', targetKeyword: '家庭软路由共享机场', plannedUrl: '/clients/openwrt/', summary: '全屋共用一个路由器代理入口出口', existingHref: '/clients/openwrt/' },
        ],
      },
    ],
    faqs: [
      { q: '手机在路上一直开着 5G 用，同时家里电脑忘关在跑网盘同步，会不会被判多人共享？', a: '短时间双 IP 活跃一般大多常规套餐可正常包容；但如果长期多地高并发持续拉满带宽，少数限制严格的品牌确实可能发出警告提示，离开家不用电脑时关闭电脑下载或退出代理更稳妥。' },
      { q: '哪类机场完全不能同时共享到路由器和 Linux 终端？', a: '全库标明的 8 家仅专属客户端品牌（飞猫、隐形人、无忧、灵猫、Firefly、SOGO、闪跃、全球云），均不开放通用订阅导入。' },
    ],
  },

  'subscription-management': {
    sections: [
      {
        heading: '二、防范订阅域名突遇阻断与配置泄露的三项日常习惯',
        lead: '订阅 URL 等同于你的明文密钥凭证，切忌随手发微信群截图或粘贴给第三方陌生网站。',
        bullets: [
          '安全重置机制：万一不慎在截屏或远程求助时泄露了完整订阅链接，第一时间进入官网控制台点击“重置订阅地址”，旧链立刻作废。',
          '禁止使用来历不明的“在线订阅转换网站”：把完整订阅贴去未知公共网页转换相当于把流量余额和密码送给第三方；现在 Mihomo/Karing 已极少需要外部网页转格式。',
          '防失联留后手：保留最后一份本地离线工作良好的 YAML/JSON 配置快照，同时记录官方公告或低价备胎不限时线路作为应急接替。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '高可用防失联组合',
        intent: '维护保障',
        articles: [
          { title: '不限时流量包作为备胎订阅的配置逻辑', targetKeyword: '备用订阅怎么用', plannedUrl: '/pricing/no-expiry/', summary: '用最低日常开销保底应对域名变更与维护', existingHref: '/pricing/no-expiry/' },
          { title: '官网防失联与域名变更识别指南', targetKeyword: '机场域名失效怎么办', plannedUrl: '/intelligence/domain-changes/', summary: '定位是单节点刷新失败还是域名迁址', existingHref: '/intelligence/domain-changes/' },
        ],
      },
    ],
    faqs: [
      { q: '不小心把个人订阅链接发到了 QQ 群或论坛里怎么最快补救？', a: '立刻登录机场官方网页端，点击“重置订阅链接 / Reset Subscription Token”，并在你自己的手机电脑客户端里删除旧配置重新粘贴新链接刷新即可。' },
      { q: '为什么建议不要买完一家主力机场后把所有客户端配置全删得只留它一个？', a: '因为即便是稳定多年的老牌也偶发短期线路割接或订阅域名变更，保留一套极低成本（如不限时 100GB）不同后端机构的备胎订阅可以在断线瞬间无缝切换并顺便靠它拉取主力的新域名公告。' },
    ],
  },

  'plan-selection': {
    tables: [
      {
        title: '月均消耗流量场景精准估算基准表（选套餐不浪费也不缺流）',
        columns: ['典型使用强度画像', '日均核心行为', '月均实际耗流估值', '对应最佳套餐区间'],
        rows: [
          ['学术办公与 AI 对话轻度用户', '查论文、Git 代码提交、文字对话 ChatGPT/Claude、偶看标清资料', '15–45 GB / 月', '99 元/年轻量版（69GB）或 100GB 不限时流量包'],
          ['主流均衡日常多媒体用户', '每天 1–2 小时 1080p YouTube / Netflix、AI 编程与多端社交', '90–160 GB / 月', '18–25 元标准月付档（110–168GB，如极连/唯兔/光速云极速）'],
          ['家庭客厅 4K / 科研云同步重度用户', '每天 2+ 小时 4K HDR 电视投放、频繁拉取海外镜像数据包', '350–800 GB+ / 月', '大流量 500GB–1TB 高阶月付档（查 /pricing/high-traffic/）'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、选套餐时的两倍余量法则（防节点倍率与突发更新爆表）',
        lead: '如果算出自己每个月大概要消耗 80GB，请买 150GB 档而非卡死 80GB 的边缘套餐。',
        paragraphs: [
          '实际消耗里经常隐含两大意外：一是系统大版本更新、海外网盘无意后台同步以及高清视频缓冲预载会额外吃掉 20% 流量；二是若常用某些优质 IEPL 专线标注着 `1.5x` 或 `2x` 流量倍率，面板上的流量条会双倍速下滑。选择比实际日常多留 50% 余量的标准月付档（例如唯兔云 19.9元/150GB 或光速云极速版 25元/168GB）最容易安心用满整月不用抠门算着字节看视频。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '计费比较与选品实战',
        intent: '选购匹配',
        articles: [
          { title: '154 条全库套餐交互过滤器与单 GB 核对', targetKeyword: '机场套餐对比', plannedUrl: '/pricing/', summary: '按月付/年付预算和流量立即排选', existingHref: '/pricing/' },
          { title: '大流量 500GB/1TB 套餐与设备限额对照', targetKeyword: '大流量套餐值得买吗', plannedUrl: '/pricing/high-traffic/', summary: '评估重度科研与 4K 客厅消费结构', existingHref: '/pricing/high-traffic/' },
        ],
      },
    ],
    faqs: [
      { q: '我是纯程序员查技术文档加上用 AI 写代码，一个月 60GB 会不会很快用完？', a: '不会！代码库、命令行纯文本请求和 ChatGPT/Claude 文字对话流量极轻，每天用一整天一个月也很难超过 25–30GB；真正吃流量的是看视频、传大文件和同步海外网盘。' },
      { q: '如果不小心当月流量用超提前停服了怎么办？', a: '可以在官网购买单次临时流量重置包，或者立刻切入自己事先存好的另一份备胎不限时流量包过渡到下个月重置日。' },
    ],
  },

  beginner: {
    steps: [
      { title: '第 1 步：花 1 分钟确定自己的上手路线', detail: '最怕复杂配置选专属端或双支持（如飞猫云、光速云官方端）；想要长远自主可控或苹果电脑互通选标准开源端 + 开放订阅。' },
      { title: '第 2 步：注册独立邮箱号，先以最低单月试错档入门', detail: '避开两年付或大额充值，首月先以 15–25 元档测验家中宽带表现。' },
      { title: '第 3 步：安装正版软件 → 校准时钟 → 导入订阅或登录软件', detail: '始终认准官方 GitHub 或正规苹果外区个人 ID，绝不点陌生百度广告安装包。' },
      { title: '第 4 步：看 AI 切日本/新加坡/美国，国内日常保直连', detail: '用好分流规则，就能让国内 App 与海外服务并行不悖互不拖拽。' },
    ],
    sections: [
      {
        heading: '二、通俗词典：花三分钟搞懂新手常听的六个行业黑话',
        lead: '不再被“机场、节点、订阅、倍率、分流、专线”这些词吓到，它们各自对应极为简单的工程比喻。',
        bullets: [
          '机场与节点：提供多条境外加密通道的服务商俗称“机场”，通向香港、日本、美国等特定国家机房的单条通道叫做“节点”。',
          '订阅链接（Subscription）：一串加密 URL，把它贴进客户端就能自动一键把最新所有节点名、端口和密码同步进来，不需要一条一条手工输数字。',
          '分流规则（Rule）：你软件内部的智能交警，确保国内淘宝、微信继续直连不饶路、不花套餐流量，只有海外网站才放进节点隧道。',
          'IEPL/中转 vs 直连：就像高速公路专线桥梁（晚高峰不堵车）与免费普通城市公路（晚上易塞车）的区别。',
          'TUN 模式：比一般“系统代理”权限更深一级的虚拟网卡开关，专治终端命令行或桌面聊天机器人拒绝读代理的问题。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '新手核心操作串联',
        intent: '新手全书',
        articles: [
          { title: '新手机场选型对照：极简入门与低成本试水', targetKeyword: '新手用什么机场好', plannedUrl: '/recommend/beginner/', summary: '对照各入门品牌客户端门槛差异', existingHref: '/recommend/beginner/' },
          { title: '机场订阅导入实操全细节', targetKeyword: '新手怎么导入订阅', plannedUrl: '/guides/subscription/', summary: '按软件与格式复制正确地址', existingHref: '/guides/subscription/' },
        ],
      },
    ],
    faqs: [
      { q: '新手用苹果 iPhone，没有海外苹果账号，怎么最快用起来？', a: '如果你短期确实无法合法注册/拥有个人外区 Apple ID 下载小火箭或免费的 Karing/Clash Mi，务必优先核实所选服务是否直接提供官方自带客户端通道指引，千万不要乱登网购的他人共享 Apple ID。' },
      { q: '为什么我在 Windows 电脑按教程装好连上了，手机是不是还要再买一份套餐？', a: '不用！只要所购品牌支持多设备通用订阅（目前常规个人套餐均允许个人名下 3–5 台自用设备），直接把同一条订阅链接或账号用在自己手机上即可。' },
    ],
  },

  'guangsuyun-setup': {
    steps: [
      { title: '1. 按自身熟练度二选一：官方快捷客户端 vs 第三方通用订阅', detail: '零基础只想点开即连可选官方引导安装客户端；已有 Clash Verge Rev / Shadowrocket 的用户直接进入后台复制通用订阅链接。' },
      { title: '2. 确认接入档位与地区分工策略', detail: '极速版（25元/168GB）适合主力综合流；在设置 AI 策略组时记得排除香港节点（约 21–27ms 留给网页和视频），将 ChatGPT/Gemini 指定往新加坡（约 42–46ms）或日本（约 53–57ms）。' },
    ],
    sections: [
      {
        heading: '二、光速云不同终端上常见操作报错防踩坑清单',
        lead: '如果遇到个别节点超时或优惠码问题，请先核实系统时钟与套餐适用条款。',
        paragraphs: [
          '当你在光速云后台管理订阅并导入桌面 Clash Verge Rev 或移动 Shadowrocket 时，建议注意三点：1) 若选用 99 元/年轻量版请务必核对实际控制台显示的月流数字（原资料清单记录为 59GB vs 详表 69GB，`CF-001`）且它与 147 套餐均不支持 `AMM` 优惠码叠加与特价无理由退货；2) 初次遇到全部节点测速全红超时优先核对本机日期时间误差；3) 若在安卓端或 Windows 桌面使用并发现 AI 访问报错，直接切出香港出口并在无痕窗口验证新加坡或日本可用性（参考 2026-08-19 62/62 MiaoKo 解锁实测快照）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '光速云配置与档案延伸',
        intent: '旗舰使用',
        articles: [
          { title: '光速云品牌深度评测与三网实测档案', targetKeyword: '光速云实测', plannedUrl: '/brands/guangsuyun/', summary: '查看 6 份三网及流媒体截图原图', existingHref: '/brands/guangsuyun/' },
          { title: '光速云七档套餐规则与 AMM 使用限制解析', targetKeyword: '光速云套餐怎么选', plannedUrl: '/pricing/guangsuyun-plans/', summary: '对照轻量、极速与定制版成本区别', existingHref: '/pricing/guangsuyun-plans/' },
        ],
      },
    ],
    faqs: [
      { q: '光速云既可以装自研客户端又可以导入 Clash，我同一台电脑能两个一起装吗？', a: '切忌同时运行两款代理客户端！如果你习惯官方客户端就卸载掉第三方工具，如果要切去用 Clash Verge Rev 就完全退出官方端。' },
      { q: '在光速云面板看到有好几个区域的节点，平时哪组打开 ChatGPT 和 Gemini 稳定？', a: '参考其 2026-08-19 MiaoKo 解锁实测截图归档及区域规则，建议把 AI 服务规则指派给新加坡、日本或美国地区分组，不要挂在低延迟香港节点上。' },
    ],
  },
};
