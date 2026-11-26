import type { TopicEnrichment } from './enrich';

export const DIAGNOSTICS_ENRICHMENTS: Record<string, TopicEnrichment> = {
  'node-timeout': {
    tables: [
      {
        title: '单节点 / 局部分组超时定位对照表',
        columns: ['表现特征', '最可能原因', '优先处置动作', '验证目标'],
        rows: [
          ['仅 HK-01 / JP-03 等少数节点超时', '单台落地机房临时维护、端口变更或入口切换', '客户端点击刷新订阅后切换至 HK-02 / SG 节点', '备选节点延迟恢复绿字响应'],
          ['同地区仅某运营商（如电信）超时，切 5G 正常', '特定宽带出口 QoS 或中转入口线路抖动', '选 BGP 多线中转节点或切换机场另组入口服务器', '换线后网页秒开且连续不丢包'],
          ['ICMP 测试通畅但真连接 url-test 超时', '落地远端服务端口暂未开放或 TLS 握手被阻断', '切换同机场 Hysteria 2 / Trojan 等不同协议节点', 'HTTP 204 真连接探测成功返回延迟'],
        ],
      },
    ],
    steps: [
      { title: '1. 先测试其他地区节点确认属于“局部超时”还是“全军覆没”', detail: '如果其他国家节点可正常访问网页，请勿慌张也不要重装软件。' },
      { title: '2. 手动更新订阅列表同步最新端口配置', detail: '老节点下线换 IP 或换端口后，旧缓存里记录的 IP 自然超时。' },
      { title: '3. 切换同一网络下手机 5G 验证是否宽带局部拦截', detail: '快速判断故障落在本地运营商路由器还是境外单台机房。' },
    ],
    sections: [
      {
        heading: '二、看懂测速软件的“真连接延迟”和“Timeout 超时”机制',
        lead: '客户端显示 Timeout 不一定代表那台境外服务器物理关机，有时仅仅是端口被临时重映射或本地检测网址被挡。',
        paragraphs: [
          '当你点“全部节点测延迟”发现某个节点飘红写着 `Timeout` 时，意味着软件向节点建立加密握手并尝试请求测试地址（如 `cp.cloudflare.com/generate_204`）在 3000–5000ms 内没有收到完整回报。常见诱因既包括节点机房自身日常维护重启，也包括节点已换端口而本地没更新订阅，以及测速并发数开太大把家里的老弱家用路由器连接数瞬间塞爆导致假超时。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '按客户端排查（A 集群）',
        intent: '工具分诊',
        articles: [
          { title: 'Clash Verge Rev 节点部分超时怎么刷新配置', targetKeyword: 'Clash节点超时怎么办', plannedUrl: '/guides/clash-verge/', summary: '检查内核订阅同步与测速 URL', existingHref: '/guides/clash-verge/' },
          { title: 'v2rayN 测速超时或显示 -1 常见原因（规划）', targetKeyword: 'v2rayN节点超时', plannedUrl: '/diagnostics/v2rayn-timeout/', summary: '分辨真连接设置与时钟同步误差' },
        ],
      },
      {
        clusterName: '按故障原因与网络环境排查（B 集群）',
        intent: '根因验证',
        articles: [
          { title: '全部节点同时超时（All Timeout）紧急定位', targetKeyword: '全部节点超时', plannedUrl: '/diagnostics/all-timeout/', summary: '排查时钟偏差、流量耗尽与双开冲突', existingHref: '/diagnostics/all-timeout/' },
          { title: '手机热点可用但 Wi-Fi 无法连接的排查步骤（规划）', targetKeyword: 'Wi-Fi节点超时', plannedUrl: '/diagnostics/wifi-vs-5g/', summary: '检查光猫防火墙与 IPv6 干扰问题' },
        ],
      },
    ],
    faqs: [
      { q: '为什么只有香港和台湾节点全部超时，新加坡和美国却好好的？', a: '多半是你买的服务针对港台共用的某一条国内入口（如深港专线入口）当前处于维护或临时波动期，而新/美走的是上海或广港其他中转路径。先暂用新/日过渡等待公告恢复即可。' },
      { q: '每次点击“测全部节点延迟”，本来能用的节点怎么越测越卡最后甚至全红？', a: '普通家用老路由器对瞬间几十个并发加密握手的 NAT 转发承受力有限，高并发一键全部测速容易把路由器连接跟踪表打满引起短暂掉线；适当调小测速并发数或只测主力分组即可。' },
      { q: '哪些情况下单节点超时不需要等，必须马上换备胎？', a: '当同一地区多台节点连续三天以上维持全红超时且官网公告毫无维护通知更新时，应评估是否切用备胎订阅并到 /intelligence/outages/ 核对全站异常态。' },
    ],
  },

  'all-timeout': {
    tables: [
      {
        title: '“全节点瞬间超时”四大高频元凶按概率排序核查表',
        columns: ['概率顺位', '故障核心原因', '三秒自查确认法', '对应彻底解法'],
        rows: [
          ['NO.1', '电脑或手机系统时间误差 > 60 秒', '对照标准北京时间网页核对系统分钟与日期', '打开系统设置“自动设置时间”并点立即同步'],
          ['NO.2', '本月流量耗尽、订阅到期或同时在线 IP 超限封锁', '登录品牌控制台看剩余天数与流量条', '重置订阅、购买重置包或等待计费日刷新'],
          ['NO.3', '多款代理/VPN/游戏加速器双开抢占端口与网卡', '检查任务栏右下角和网络适配器', '只保留一款活跃客户端，退出其余全部软件'],
          ['NO.4', '订阅配置太旧节点群早已整批迁移变更端口', '检查配置文件“上次更新日期”是否已过数月', '打开代理/切换 5G 热点重新拉取一次新订阅'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、全节点全红时为什么千万别第一时间先卸载软件或冲动重买？',
        lead: '本地时间慢了三分钟、或上个软件崩溃留了个端口尸体，就算换买十家新机场一样照样全红超时。',
        paragraphs: [
          '现代 TLS 1.3、VMess、VLESS 与 Trojan 加密握手协议为了防重放攻击，严格校对客户端本地时间戳与境外节点时间差。只要双端差值超过约 60–90 秒（常见于 Windows 双系统切换后时区乱跳、主板电池耗尽或久未联网重启设备），**全世界所有正规节点都会在一秒钟内全部拒绝与你握手**！这也是新手排查时最常忽略却恢复最快的一个开关。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '全灭级故障联动排除',
        intent: '紧急止损',
        articles: [
          { title: '订阅拉取更新超时怎么通过热点救回？', targetKeyword: '订阅拉取失败', plannedUrl: '/diagnostics/subscription-failed/', summary: '解除订阅接口阻断顺利拉下新节点列表', existingHref: '/diagnostics/subscription-failed/' },
          { title: '确定非本地原因后：核查全站服务异常与停运日志', targetKeyword: '机场是不是跑路了', plannedUrl: '/intelligence/outages/', summary: '查验官方运营状态而非盲目焦虑', existingHref: '/intelligence/outages/' },
        ],
      },
    ],
    faqs: [
      { q: '时间也是对的、套餐也还有 100GB 没到期，手机和电脑突然同时全节点超时了怎么判断？', a: '先把手机断开 Wi-Fi 用 5G 蜂窝网络单测一次；如果 5G 也全灭，去官网首页或电报公告看看是否全节点换域名/迁移服务器需要手动更新订阅；如连官网都完全消失失联再检查 /intelligence/shutdowns/。' },
      { q: '为什么只是拔插了一下路由器或换了个公司 Wi-Fi，本来绿色的全部节点全红？', a: '部分企业内网或校园网防火墙阻断非常规海外加密端口（或开启了强认证登录弹窗未登录），先打开国内网页核实本地基础物理网络已过认证联网。' },
    ],
  },

  'subscription-failed': {
    steps: [
      { title: '1. 排除“本来就没有第三方订阅”的专属端误会', detail: '如果你购买的是飞猫云、隐形人、无忧链接、灵猫、Firefly、SOGO、闪跃或全球云，官网本身不提供外部导入 URL。' },
      { title: '2. 检查是否错复制了登录网址而非专用 Subscription Token URL', detail: '订阅地址应长包含 token、sub 或 api 授权参数，而不是官网首页地址或 `https://xxx/#/dashboard`。' },
      { title: '3. 突破本地直连拉取拦截（核心救活操作）', detail: '用手机开 4G/5G 热点拉取，或在桌面软件把“使用系统代理更新订阅”打勾依靠其他可用节点中转更新。' },
    ],
    sections: [
      {
        heading: '二、把订阅拉回本地后的“YAML / Base64 格式不兼容”报错识别',
        lead: '报错写了 `Invalid YAML` 或 `Unsupported scheme` 往往是因为拿错格式配给不兼容软件。',
        paragraphs: [
          '如果在浏览器的空白页直接粘贴订阅链接打开，里面返回了一大串类似 `403 Forbidden`、`<!DOCTYPE html>` 网页登录页代码、或者写着 `套餐已过期`，客户端理所当然无法把 HTML 网页当节点解析。确保你复制的 URL 在返回正文上是标准的 `proxies:` YAML 片段或一串 Base64 密文，且没有漏掉末尾的 Token 字符。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '格式核对与导入手册',
        intent: '拉取修复',
        articles: [
          { title: '通用机场订阅格式与粘贴规范详解', targetKeyword: '订阅链接格式怎么看', plannedUrl: '/guides/subscription/', summary: '辨别 Clash YAML 与 V2Ray Base64 适用客户端', existingHref: '/guides/subscription/' },
          { title: '品牌官网与防失联最新入口核查', targetKeyword: '机场官网地址变更', plannedUrl: '/brands/official-links/', summary: '防止因老官网失效导致拉取订阅 404', existingHref: '/brands/official-links/' },
        ],
      },
    ],
    faqs: [
      { q: '机场面板网页已经能正常登录看到节点了，为什么点一键导入或更新还是报错？', a: '很多面板把官网主站域名和底层的“订阅分发服务器域名”分开部署；如果主站通了而订阅专用域名恰巧遭遇地区 DNS 干扰，用客户端“允许通过代理更新”或者切手机热点瞬间就能拉下来。' },
      { q: '提示 `User-Agent not allowed` 或拉取到空的无节点列表怎么回事？', a: '极少数机场后台会对访问 UA 做客户端识别过滤（比如默认拒绝普通浏览器直接看订阅），或者该面板要求在 Clash Verge 订阅属性里把 User-Agent 保持默认的 `clash-verge / mihomo`。' },
    ],
  },

  'connection-failed': {
    tables: [
      {
        title: '“明明显示已连接（绿色延迟），但浏览器死活打不开外网”排障矩阵',
        columns: ['最隐蔽诱因', '判断现象特征', '一分钟恢复方法'],
        rows: [
          ['没点开系统代理开关', '软件顶部运行状态亮着但浏览器请求直接撞国内直连墙', '在客户端主面板开启“系统代理 (System Proxy)”按钮'],
          ['浏览器装了冲突扩展插件', '比如残留的 SwitchyOmega / 广告清理 / 购物助手强制指去失效端口', '关闭扩展程序里的一切代理接管设为“使用系统代理”，或在无痕无扩展窗口测验'],
          ['Windows/Mac 系统代理填错遗留端口', '比如系统代理里还留着停用的旧版软件 `7890` 端口而新客户端监听 `7897`', '关一次系统代理再重开客户端，使端口自动写入匹配'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、用 Chrome “无痕窗口”一秒把浏览器插件污染与真正网络断开分离出来',
        lead: '90% 的“客户端绿了、桌面软件通了，唯独 Chrome 报错连不上”问题都死在装了互相冲突的浏览器扩展上。',
        paragraphs: [
          '如果你以前用过 Proxy SwitchyOmega、某款网购比价插件、或者装过其他 VPN 官方浏览器拓展，它们拥有比 Windows/macOS 系统全局代理更高的流量接管优先级！当你切换了新版客户端后，这些扩展依然死死把浏览器往旧端口送从而报出 `ERR_PROXY_CONNECTION_FAILED`。按下 `Ctrl+Shift+N` 打开无插件污染的浏览器无痕窗口访问一次 Google，往往一秒定位真相。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '浏览与桌面端口冲突清理',
        intent: '连接修复',
        articles: [
          { title: 'DNS 解析报错导致已连上却打不开网页排查', targetKeyword: '连上代理打不开网页DNS', plannedUrl: '/diagnostics/dns-error/', summary: '清除浏览器 DoH 干扰与残留 DNS', existingHref: '/diagnostics/dns-error/' },
          { title: 'TUN 模式开启指南：治好终端命令忽略系统代理问题', targetKeyword: '系统代理和TUN区别', plannedUrl: '/guides/tun-mode/', summary: '解决命令行 Git 与 AI 桌面端不走代理', existingHref: '/guides/tun-mode/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么微信电脑版和桌面下载器都通了，只有 Microsoft Edge 浏览器报代理错误？', a: '先去 Edge 扩展中心检查是否启用过代理管理或学校统一安装插件；其次去系统 Internet 选项确认局域网设置没有留存无效固定 PAC 自动配置脚本地址。' },
      { q: 'Clash Verge Rev 默认监听端口是多少，怎么防止跟本机其他开发服务撞端口？', a: '常见版本默认混合端口为 `7897`（部分旧系配置为 `7890`）；如果本机恰好跑了本地开发服务器占用同端口，只需去客户端设置页改成一个空闲高位端口（如 `17897`）并重开系统代理即可。' },
    ],
  },

  'dns-error': {
    steps: [
      { title: '1. 先把 Windows/Mac 本机网卡 DNS 恢复为“自动获取（DHCP）”', detail: '切忌在电脑网卡属性里永久手写不可达 DNS 或遗留的 `198.18.0.2`，这会导致一关闭客户端就全面断网。' },
      { title: '2. 在 Chrome/Edge 隐私设置里关闭“使用安全 DNS (Browser DoH)”', detail: '让浏览器把 DNS 请求乖乖交还客户端规则引擎，防止二者打架或绕过 Fake-IP 分流。' },
      { title: '3. 执行系统 DNS 缓存刷新验证', detail: 'Windows 运行 `ipconfig /flushdns`，macOS 清除 mDNSResponder 缓存并用无痕窗口重开页面。' },
    ],
    sections: [
      {
        heading: '二、为什么 Fake-IP 未正常还原或者多处写死 DNS 会造成连国内站都报错？',
        lead: '客户端运行期间依赖本地 DNS 服务劫持分配保留段地址；一旦强杀进程未还原适配器 DNS，就会留下解析黑洞。',
        paragraphs: [
          '当出现网页明确报错 `DNS_PROBE_FINISHED_NXDOMAIN` 并且连国内百度、淘宝一起找不到服务器时，90% 与机场节点毫无关系，而是本地网卡的 DNS 服务器地址停留在失效端口（如停在了已退出客户端设置的 `127.0.0.1` 或残留 `198.18.0.2`）。把系统网卡 DNS 拨回自动获取即可立刻恢复正常联网，然后再从干净基线重开代理客户端。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'DNS 机制深入与配置规范',
        intent: '解析恢复',
        articles: [
          { title: 'Fake-IP 与 Redir-Host DNS 原理白话对比', targetKeyword: 'Fake-IP和Redir-Host区别', plannedUrl: '/guides/dns/', summary: '合理选取兼容企业内网和防泄漏方案', existingHref: '/guides/dns/' },
          { title: 'AI 地区错误或 YouTube 定位漂移跟 DNS 的关系', targetKeyword: 'DNS泄露导致无法用ChatGPT', plannedUrl: '/diagnostics/ai-blocked/', summary: '阻断本地运营商污染影响位置判断', existingHref: '/diagnostics/ai-blocked/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么重启一次路由器或者断掉代理，本机还是显示没有 Internet 访问（其实能上 QQ）？', a: '这是典型 DNS 挂掉特征（QQ 直连部分 IP 不完全依赖标准网页 DNS）。去控制面板把 IPv4 DNS 恢复自动，或者电脑终端执行 `ipconfig /flushdns` 即可立刻起死回生。' },
      { q: '需要把电脑系统的“首选 DNS”长期改成 `8.8.8.8` 或 `1.1.1.1` 吗？', a: '日常开代理时不推荐在物理网卡长期写死海外 DNS，因为国内网站会被分配到海外极慢的 CDN 节点；保持物理网卡自动 DNS，让 Clash/sing-box 内部规则去分流国内外 DoH 最优。' },
    ],
  },

  'client-launch': {
    steps: [
      { title: '1. 检查安全软件隔离区是否误杀了内核程序', detail: 'Windows Defender 或国内安全软件常把正版开源包里的 `mihomo.exe / xray.exe / sing-box.exe` 误报清走，导致壳能开但一连就报 Core Error。' },
      { title: '2. 确认安装包完全来自正版仓库且没有旧版本后台驻留进程', detail: '任务管理器彻底结束所有残余内核与 GUI 进程后重新安装覆盖，并验证是否缺失 Microsoft `.NET` 或 `WebView2` 运行库。' },
      { title: '3. 如遇配置文件损坏导致无限闪退，重命名旧配置目录干净重置', detail: '有时一段语法写错的覆写脚本会导致客户端刚打开就崩溃闪退。' },
    ],
    sections: [
      {
        heading: '二、区分“运行库缺失打不开”和“配置文件写坏无限闪退”',
        lead: '直接从命令行窗口或日志路径查看最后三行退出代码，比反复卸载重装十遍更有用。',
        paragraphs: [
          '如果软件双击后屏幕上完全没有任何窗口闪过，通常是 Windows 缺少 `.NET Desktop Runtime`（v2rayN 典型提示）或者缺失 `WebView2 Runtime`（Clash Verge Rev 典型提示）。如果窗口能弹出来半秒钟然后立刻闪退，或者顶部弹出 `Kernel failed to start`，则大概率是上一次错误覆盖了一份格式损坏的 YAML 配置文件、或存在另一个内核进程锁住了控制端口（如 `9090` / `9097`）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '安装环境与各端软件参考',
        intent: '启动修复',
        articles: [
          { title: '六大平台客户端安装包与运行库核验指南', targetKeyword: '代理软件安装打不开', plannedUrl: '/guides/installation/', summary: '确认架构、WebView2 与签名源安全', existingHref: '/guides/installation/' },
          { title: 'Windows 客户端安装与代替停更旧版指引', targetKeyword: 'Windows Clash无法启动', plannedUrl: '/clients/windows/', summary: '平滑升级至 Clash Verge Rev 或 FlClash', existingHref: '/clients/windows/' },
        ],
      },
    ],
    faqs: [
      { q: '杀毒软件报毒木马拦截 `mihomo.exe` 是不是意味着软件真的带毒？', a: '前提是你必须严格在作者官方 GitHub Releases 页面下载且校验过文件 Hash！代理程序因为涉及底层接管路由与网络加密隧道常遭启发式引擎误报。若是从未知第三方百度网盘下载，请立刻删除绝勿放行！' },
      { q: 'Mac 安装好新软件点击图标一直跳动但弹窗显示“无权限/已损坏”怎么办？', a: '进入 Mac “系统设置→隐私与安全性”看底部的允许开关；确认源自正版开源 Release 后授权运行即可。' },
    ],
  },

  'tun-error': {
    steps: [
      { title: '1. 一旦开 TUN 全机断网，立即先关闭 TUN 并退出全部加速软件', detail: '检查是否同时开启了网游加速器、公司 SSL VPN、其他代理软件或安全防护墙虚拟网卡。' },
      { title: '2. 确认 Windows/macOS 客户端里确实已安装“服务模式（Service Mode）”', detail: '未授予服务管理员权限时拨动 TUN 开关不仅不会生效，还经常把原有系统代理连接也一并打乱。' },
      { title: '3. 检查虚拟网卡驱动（Wintun / sing-tun）是否与当前系统安全规则碰撞', detail: '尝试在客户端设置切换 TUN 协议栈模式（如 `System` vs `gVisor` vs `Mixed`）以化解特定系统适配异常。' },
    ],
    sections: [
      {
        heading: '二、为什么不能在一台电脑里让两个带 TUN 驱动的软件并行工作？',
        lead: '操作系统底层只有一张最高优先级的默认网关路由指针，两套驱动抢着往同一个路口发牌必然导致死循环断网。',
        paragraphs: [
          '正常模式下，TUN 虚拟网卡会把系统的默认路由指向本地 `198.18.0.1` 交由代理引擎处理，再经物理网卡送出。如果此时你电脑上还开着一款网游加速器或者办公 VPN，它们同样在抢着把系统默认路由改写成自己的虚拟适配器！结果就是软件 A 把包交给软件 B，软件 B 又把包转回给软件 A，短短几毫秒本地全部内外网连接一起报废。退出多余软件后重开一次单工具即可解决。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'TUN 正确开启与兼容替代',
        intent: '网卡排障',
        articles: [
          { title: 'TUN 模式安装服务权限与正确适用边界教程', targetKeyword: 'TUN模式怎么开', plannedUrl: '/guides/tun-mode/', summary: '看清何时用系统代理，何时切 TUN', existingHref: '/guides/tun-mode/' },
          { title: '游戏加速器与代理分时切换不冲突规范', targetKeyword: '游戏加速器和Clash冲突', plannedUrl: '/vpn/game-accelerator/', summary: '避免虚拟网卡驱动并发争夺路由表', existingHref: '/vpn/game-accelerator/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么我在 Windows 上开了 TUN 之后，访问本地公司内网 IP（192.168.x.x）也变慢甚至断开了？', a: '检查 TUN 配置下的“跳过/排除网段（Route Exclude Address）”或国内私有 IP 段直连策略；在 Clash/Mihomo 中确保私有保留地址不进入远程代理隧道。' },
      { q: 'Clash Verge Rev 里切换 TUN 的 Stack：System 和 gVisor 选哪个好？', a: '日常 Windows 10/11 下默认 `gVisor` 或 `Mixed` 兼容性往往最稳且很少与杀软驱动硬碰；部分追求最高带宽吞吐环境下可测试 `System` 栈。' },
    ],
  },

  'slow-speed': {
    tables: [
      {
        title: '“能连上但加载极慢（视频卡顿 / 360p）”五层原因排查对照',
        columns: ['降速位置', '辨别证据特征', '立刻缓解方案'],
        rows: [
          ['客户端自动选了慢节点', 'url-test 组只因 Ping 低误选中高拥塞边缘节点', '切回手动选择同机场 B/C 其他节点测试 1080p 流畅度'],
          ['国内宽带与入口不契合', '跨运营商（如移动直连电信专属入口）在晚高峰丢包严重', '切换带 `BGP` 多线或标明对应运营商友好的入口地址'],
          ['路由没分流全走全局', '误点在 Global 全局模式导致国内软件与境外视频抢同一条线', '立刻改回 `Rule` 规则分流释放本地流量'],
          ['开启后台限速或套餐余量阈值', '部分极低价体验包有明确限速规则或流量即将耗尽降档', '核查控制台剩余额度与套餐详情'],
        ],
      },
    ],
    sections: [
      {
        heading: '二、别被“延迟毫秒数”误导：为什么 20ms 的节点有时还没 55ms 的流畅？',
        lead: '延迟测算的是小包往返时间（RTT），视频与文件下载比拼的是高丢包环境下单线程拥塞窗口的抗干扰持续带宽。',
        paragraphs: [
          '晚间 20:00–23:30 是跨太平洋及亚太国际出海带宽最紧张的时间。若某条中转线路虽然入口就在临省且延迟只有 25ms，但同时间被数千名大流量下载用户跑满、或者跨境端走公网直连出现 5% 丢包，TCP 单线程速率会直接从 200Mbps 断崖跌到 3Mbps，看 YouTube 就只剩 480p 转圈；这时手动切到一条稍微远一点但空载率高的 55ms 新加坡/日本专线反而丝般顺滑看 4K。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '带宽性能实测与线路进阶',
        intent: '提速诊断',
        articles: [
          { title: '全库 39 份网络测速原图与运营商峰值对照', targetKeyword: '机场真实测速', plannedUrl: '/network/speedtest/', summary: '了解电信/移动/联通各自实测特征', existingHref: '/network/speedtest/' },
          { title: 'IEPL/IPLC 专线为什么能解决晚高峰掉速卡顿', targetKeyword: '晚高峰稳定的机场', plannedUrl: '/network/iepl/', summary: '对比普通直连与二层专线的丢包差异', existingHref: '/network/iepl/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么我在浏览器 Speedtest 跑出 500Mbps，看视频还是觉得打开网页前几秒很慢？', a: '首包打开网页主要受 DNS 解析速度与并发小包握手（TTFB）影响！如果电脑同时运行着错乱 DNS 或浏览器安全 DNS，哪怕下载 500Mbps 每次点开网页都要白白卡 2 秒解析。' },
      { q: '笔记本连 Wi-Fi 慢，插上网线立刻飞快怎么办？', a: '这是典型无线路由器 2.4GHz 拥塞或穿墙信号衰减引起的基础局域网降速，先确认连入 5GHz Wi-Fi 且未处于信号死角。' },
    ],
  },

  'ai-blocked': {
    steps: [
      { title: '1. 立即核查代理策略组：绝不用香港或澳门节点打开 AI', detail: 'OpenAI、Anthropic（Claude）与 Google（Gemini）均官方封锁香港地区，这是所有 AI 报错第一高发原因。' },
      { title: '2. 打开浏览器无痕窗口 + 刷新或切换固定单国出口（新加坡/日本/美西）', detail: '跳过旧浏览器 Cookie 里的中国大陆或香港历史风控标识，并禁止把 AI 放进自动测速乱跳组。' },
      { title: '3. 确认桌面客户端（如 ChatGPT Desktop）开启 TUN 与远端 DNS', detail: '防止原生客户端绕开浏览器代理或发出本地未加密 DNS 查询暴露国内位置。' },
    ],
    sections: [
      {
        heading: '二、区分“区域限制报错”、“Cloudflare 盾卡死”与“账号级风控封号”',
        lead: '不同错误页面背后对应完全不同的解决动作，别拿着“换个节点”去硬试已经死掉的账号。',
        bullets: [
          '页面写着 `OpenAI services are not available in your country` / `Gemini is currently unavailable`：纯粹出口地区不对（命中港澳或受限段）或旧会话 Cookie 未清理，切去新加坡/日本/美国配合无痕窗口立刻生效。',
          '反复转圈打勾验证人类身份或报 `Access denied / Error 1020`：当前共享机房 IP 被大量用户刷接口引发临时信誉拉黑，换同一机场的其他备用地区组或改换具备 2026-08-19 实测解锁证明的线路。',
          '提示 `Your account has been disabled`：账号自身已在服务商风控后台禁用（多因高频跨国漂移跳登录或支付风控），必须换新稳定环境重新注册而非单靠切节点救回旧号。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '三大 AI 模型专题与实测对照',
        intent: 'AI 修复',
        articles: [
          { title: 'ChatGPT 机场地区支持条件与防降智配置', targetKeyword: 'ChatGPT打不开', plannedUrl: '/streaming-ai/chatgpt/', summary: '稳定切区与客户端 TUN 配合要点', existingHref: '/streaming-ai/chatgpt/' },
          { title: 'Gemini 访问地区报错专项修复与证据记录', targetKeyword: 'Gemini地区不可用', plannedUrl: '/streaming-ai/gemini/', summary: '核查新/日/美可用区与灵动云/光速云实测', existingHref: '/streaming-ai/gemini/' },
        ],
      },
    ],
    faqs: [
      { q: '连上了美国节点但桌面版 ChatGPT 或 Cursor 还是报地区限制怎么处理？', a: '检查 Clash Verge Rev 是否已经安装服务模式且开启“TUN 模式”，同时检查代理配置内是否对 `openai.com / oaiusercontent.com / cursor.sh` 漏写了匹配规则。' },
      { q: '为什么同一个机场昨天能登 Gemini，今天提示不支持了？', a: '除了部分品牌可能临时更换了落地机 IP 被谷歌库短暂重标记归属地之外，最常见是你在客户端更新过一次订阅后策略组自动回退跳回了香港默认节点！手动重指回新加坡或日本即可。' },
    ],
  },

  'streaming-region': {
    steps: [
      { title: '1. 区分目标流媒体是否屏蔽香港与当前 IP 归属', detail: '例如 TikTok 已退出香港，用港节点必黑屏；Netflix 识别为机房 IP 时则会隐藏第三方版权只留自制剧。' },
      { title: '2. 清理流媒体 App 缓存/定位授权并确认远端 DNS 未“送中”', detail: '若浏览器端 YouTube 地区跑到国内或出现无法播放的版权错，清理 Cookie、停用国内浏览器安全 DNS 并开启客户端 Fake-IP。' },
      { title: '3. 对照站内带解锁截图实证的节点组合验证', detail: '参考 /streaming-ai/ 矩阵切换同一服务内标有解锁能力的新加坡、台湾、日本或美区出口节点。' },
    ],
    sections: [
      {
        heading: '二、为什么 Netflix 只剩寥寥几部自制剧、而 Disney+ 直接弹 Error 73/83？',
        lead: '不同流媒体平台对数据中心机房 IP 与广播 IP 的容忍阈值不同。',
        paragraphs: [
          '当某个机房 IP 段被广泛判定为“商业托管服务器（非家庭住宅或本土原生宽带）”时，Netflix 采取温和降级策略——账号仍准登录观看它拥有全球完整版权的 Originals 自制剧，但彻底屏蔽其它付费授权大片；Disney+ 则往往直接返回 73/83 地区报错拒之门外；TikTok 除排查香港禁区外还要清理本地定位与 SIM 卡残余判断信息。日常观影务必先在 /streaming-ai/ 区分哪些品牌具有实测解锁依据，不要轻信无截图背书的“全解锁”口号。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '主流流媒体专项解析',
        intent: '解锁排错',
        articles: [
          { title: 'Netflix 自制剧 vs 非自制全解锁详细区分', targetKeyword: 'Netflix只能看自制剧', plannedUrl: '/streaming-ai/netflix/', summary: '了解原生 IP 与 DNS 解锁机制区别', existingHref: '/streaming-ai/netflix/' },
          { title: '原生 IP、广播 IP 与住宅宽带 IP 判定逻辑', targetKeyword: '流媒体送中怎么解决', plannedUrl: '/network/native-ip/', summary: '避免地区飘移与 CDN 降速', existingHref: '/network/native-ip/' },
        ],
      },
    ],
    faqs: [
      { q: 'YouTube 突然不显示广告、会员功能灰色或位置跑到大陆（送中）怎么挽救？', a: '关闭手机 Google 地图/谷歌相关 App 在后台的国内高精度定位上报权限，然后切去另一组尚未被同平台位置纠偏污染的新加坡或台湾节点使用。' },
      { q: '苹果手机看 Disney+ 明明切去台湾或新加坡节点还是打不开怎么回事？', a: '先在后台彻底划掉杀掉 Disney+ App 进程，换好目标解锁节点并确认开启完整规则（或全局）后再重新冷启动打开 App，避免读取切换前的地理状态缓存。' },
    ],
  },
};
