import type { TopicEnrichment } from './enrich';

export const STREAMING_AI_ENRICHMENTS: Record<string, TopicEnrichment> = {
  chatgpt: {
    steps: [
      { title: '1. 在分流规则里彻底排除香港与澳门节点', detail: 'OpenAI 官方政策严格阻断港澳出口 IP，切勿让 ChatGPT 走自动测速节点组（经常选中低延迟香港）。' },
      { title: '2. 优先指向新加坡、日本、台湾或美国独立分组', detail: '结合实测基线，新加坡（约 42–46ms）和日本（约 53–57ms）是兼顾响应速度与 ChatGPT 稳定性的核心入口。' },
      { title: '3. 启用防风控与隐私防护习惯', detail: '避免一小时内在三个国家之间频繁跳跃切换节点；若网页提示报错，先用浏览器无痕窗口配合远端 DNS 测试。' },
    ],
    sections: [
      {
        heading: '二、区分“网页版可用”、“iOS/Desktop 客户端可用”与“API 稳定度”',
        lead: '网页登录成功只是基础，iOS ChatGPT App 与开发 API 调用对出口 IP 纯净度要求显著更高。',
        paragraphs: [
          '当大量共享机场用户同时经由同一组便宜机房 IPv4 段访问 OpenAI 时，网页端往往还能勉强通过 Cloudflare 检查继续聊天，但移动端官方 App 会频繁弹出 `Something went wrong / Unusual activity detected` 拦截，或者对话模型被静默降级、强制滑块验证。',
          '站内目前已具备明确归档解锁证据的品牌为光速云（2026-08-19 长沙电信 2Gbps 62/62 MiaoKo 截图含 OpenAI）、无忧链接（2026-07-18 截图）以及灵动云（2026-07-20/21 报告写明全支持）。其余写明支持但无同批次第三方截图的品牌在本库标示“品牌方宣称”，使用前建议以最小月付搭配分流策略组实测一周。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'AI 分流与风控排查集群',
        intent: 'AI 访问优化',
        articles: [
          { title: 'ChatGPT / Claude / Gemini 访问报错系统诊断', targetKeyword: 'ChatGPT无法访问怎么办', plannedUrl: '/diagnostics/ai-blocked/', summary: '解决地区错误、Cookie 残留与频繁验证', existingHref: '/diagnostics/ai-blocked/' },
          { title: '如何设置策略组让 ChatGPT 自动避开香港节点', targetKeyword: 'Clash分流ChatGPT', plannedUrl: '/guides/routing-rules/', summary: '把 AI 服务固定绑定在日/新/美分组', existingHref: '/guides/routing-rules/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么我连的日本节点也能刷网页，打开 ChatGPT App 却报错？', a: 'App 端风控检查比网页版更严苛，常见于当前节点出口 IP 已被识别为高并发商业机房段，或者此前设备切换 IP 太频繁残留风控状态。尝试切去同一机场另一组美国或新加坡备用落地节点。' },
      { q: '2026-08-11 测速包里写着 15 家机场跑很快，是不是它们都能用 ChatGPT？', a: '不是。2026-08-11 测速只测下行带宽，不代表解锁状态。目前有归档解锁截图证明含 OpenAI 的主要是光速云（08-19）、无忧链接（07-18）及灵动云（07-20/21）。' },
      { q: '电脑桌面版 ChatGPT 不听 Clash 系统代理的话怎么办？', a: '部分桌面应用或终端工具会忽略系统 HTTP 代理，请在 Clash Verge Rev / FlClash 安装服务模式后打开 TUN 虚拟网卡模式。' },
    ],
  },

  claude: {
    steps: [
      { title: '1. 强约束绑定固定国家出口（如美西或稳定新加坡）', detail: 'Claude（Anthropic）风控模型对短时间频繁跨大洲漂移会话极其敏感，绝对不要放在自动测速切换组。' },
      { title: '2. 剔除低信誉滥用 IP 机场节点', detail: '优先挑选对商业机房并发做过清理或标注具备高纯净度 AI 落地节点的档位。' },
    ],
    sections: [
      {
        heading: '二、为什么全网用户普遍反映“Claude 比 ChatGPT 更容易封号”？',
        lead: 'Anthropic 对注册 IP、绑卡归属、并发访问速率与多账号同 IP 复用采取业界最严格的零容忍策略。',
        paragraphs: [
          '在日常开发编码使用 Claude 网页或 Anthropic API 时，最致命的错误往往是“今天用日本机场写需求、中午换美国免费节点登录、晚上在公司不小心用香港节点刷新”。这种跨国家剧烈轨迹在多用户共享同一批机房 IP 的放大下，几乎必定触发即时封号且极难申诉恢复。',
          '保护账号最稳妥的网络操作原则是：专门给 `anthropic.com / claude.ai` 配一个只含单个稳定国家（如美国或新加坡特定高质量节点）的独立策略组，尽量减少换线频率，并在必要重度研发下配合低频纯净落地备用路线。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'AI 高风控防护集群',
        intent: '保号稳连',
        articles: [
          { title: 'AI 开发环境网络纯净度与稳定基线要求', targetKeyword: 'Claude防封号网络环境', plannedUrl: '/streaming-ai/ai-environment/', summary: '理解原生 IP、固定出口与 DNS 防泄露机制', existingHref: '/streaming-ai/ai-environment/' },
          { title: '原生 IP 与普通广播机房 IP 区别指南', targetKeyword: '什么是原生IP', plannedUrl: '/network/native-ip/', summary: '了解 ASN 归属地与平台判定逻辑', existingHref: '/network/native-ip/' },
        ],
      },
    ],
    faqs: [
      { q: '用机场能稳定用 Claude Pro 网页版和写代码吗？', a: '前提是你必须固定绑定非香港且较为干净的单国节点（如新加坡/美西），不把 Claude 交给自动延迟跳线组。如在团队重度开发使用，更要留意独立出口隔离。' },
      { q: '为什么我在本站品牌矩阵里看到多数品牌对 Claude 标注为“品牌方宣称”或“待核实”？', a: '因为当前已归档的第三方脚本截图中以 OpenAI、Gemini、Netflix、Disney+ 为主，对 Claude 的长周期活号封控率尚无统一批量自动化验证样本，因此绝不凭文案硬写“实测全支持”。' },
      { q: '突然跳出 Your account has been disabled 跟节点有关吗？', a: '高度相关，多半源自共享机房 IP 上同时间出现他人高风险自动化请求或自身多次跨国家跳转切换导致。' },
    ],
  },

  gemini: {
    steps: [
      { title: '1. 首先将 google.com / gemini.google.com 规则移出香港组', detail: '虽然 Google 搜索在港可用，但 Gemini 在区域合规层面长期屏蔽香港节点。' },
      { title: '2. 确认启用远端 DNS 解析并清理浏览器旧位置状态', detail: '防止本地宽带 DNS 或历史 Google 位置 Cookie 引发“地区不受支持”。' },
    ],
    sections: [
      {
        heading: '二、实测证据对照：光速云、无忧链接与灵动云 Gemini 表现记录',
        lead: '并非全节点都通，即便是支持解锁的品牌也强烈依赖所选地区分组。',
        paragraphs: [
          '从可追溯归档证据来看，光速云在 2026-08-19 62/62 节点 MiaoKo 测试截图明确包含 Gemini 解锁列；无忧链接在 2026-07-18 留存御三家及流媒体测试截图；灵动云在 2026-07-20/21 解锁摘要中更细化写明了“美、日、新、台、澳、韩、英以及部分香港节点”的差异化解锁结果。这再次说明选 Gemini 节点务必优先用新加坡、日本、台湾或美国区节点，不能无脑挂默认香港。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: 'AI 地区限制与 DNS 排查',
        intent: '解锁修复',
        articles: [
          { title: 'Gemini 报错“所在地区不受支持”三步修复法', targetKeyword: 'Gemini地区不支持怎么办', plannedUrl: '/diagnostics/ai-blocked/', summary: '切离香港节点、清缓存与开启远程 DNS', existingHref: '/diagnostics/ai-blocked/' },
          { title: 'Fake-IP 与远程 DoH 防地区判定漂移设置', targetKeyword: 'Clash DNS防泄露', plannedUrl: '/guides/dns/', summary: '让谷歌位置识别与节点国家保持同步', existingHref: '/guides/dns/' },
        ],
      },
    ],
    faqs: [
      { q: '明明连了日本节点看 YouTube 正常，打开 Gemini 还是说地区不支持为什么？', a: '最常见原因有两个：1) 客户端没有把 `gemini.google.com` 等域名写进代理规则导致其实走了国内或香港备用分流（可暂时切到 Global 全局验证）；2) 本机浏览器残留先前登录过国内/香港状态的 Google Session 缓存。' },
      { q: '为什么有些机场号称“香港节点也能解锁 Gemini”？', a: '少数服务商会在部分香港机房做针对性的 DNS 流媒体/AI 落地分流（例如灵动云报告中也标注部分香港节点可用），但这类方案随时可能随平台风控收紧而失效，主力还是建议用新加坡、日本或美国节点。' },
      { q: 'Google AI Studio 和 Gemini API 调用对节点要求一样吗？', a: '是的，同样必须避开中国大陆和香港出口 IP，建议使用美国、日本或新加坡可用节点配合终端 TUN 模式运行。' },
    ],
  },

  'ai-environment': {
    sections: [
      {
        heading: '二、构建长期不轻易触发验证的 AI 网络环境四大硬件标准',
        lead: '对写代码、读论文或跨境协作而言，稳定的中速干净线路远胜过万人挤在一起的满速脏 IP。',
        bullets: [
          '出口地理稳定一致：确保 `AI` 独立策略组只指向特定一到两个非受限国家（日/新/美），关闭每 5 分钟自动测速乱跳。',
          '防 DNS 污染漏泄：开启 Clash/sing-box 客户端的 Fake-IP 或 Encrypted DoH 远端查询，绝不让本地运营商直接解析 OpenAI/Anthropic 域名。',
          '独立浏览器工作区隔离：把日常国内上网与 AI 工作区分成两个 Chrome Profile，减少无关插件和国内定位扩展污染环境指纹。',
          '双订阅灾备冗余：保留一套极低成本的不限时流量包当备份，避免单家临时出口被拉黑时手头工作卡死。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '底层环境搭建',
        intent: '系统工程',
        articles: [
          { title: 'TUN 模式开启教程：让桌面 AI 客户端与命令行全部稳定走线', targetKeyword: 'AI命令行走代理TUN', plannedUrl: '/guides/tun-mode/', summary: '接管 IDE、Terminal 与原生桌面 App 流量', existingHref: '/guides/tun-mode/' },
          { title: 'AI 与流媒体可用性自检脚本及矩阵页', targetKeyword: 'AI解锁检测方法', plannedUrl: '/streaming-ai/checker/', summary: '了解怎么在电脑自查出口状态', existingHref: '/streaming-ai/checker/' },
        ],
      },
    ],
    faqs: [
      { q: '在机场普通共享套餐上跑大模型 API 和用 Cursor/Windsurf 编程，容易封号吗？', a: '日常合理人类频率对话与代码补全配合固定国别节点通常可行；但若涉及高频并发自动化请求、多线程刷任务或频繁跨洲切节点，普通共享机场 IP 极易触发风控。' },
      { q: '什么是 AI 专属家宽 / 独享定制线路（例如光速云 550–680 元/月方案）？', a: '面向极高稳定性要求的企业或个人工作室提供独立隔离带宽与高纯净度 IP 分配，避免共享机场万人同时并发带来的“连坐验证”，普通个人轻度使用者无需承担此高成本。' },
      { q: '手机端和电脑端同时登录同一个 ChatGPT 账号分别挂不同国家的节点会封号吗？', a: '同一账号短期跨不同国家大跨度跳登录会被视为异常盗号或共享行为，建议电脑与手机都绑定同一国家节点（例如同走新加坡或同走日本）。' },
    ],
  },

  netflix: {
    steps: [
      { title: '1. 先分清当前节点是“只看自制剧”还是“非自制全解锁”', detail: '在浏览器搜一台常见第三方版权电影（如部分非 Netflix 出品的热门韩剧、动漫）能搜到即为全解锁。' },
      { title: '2. 对应国家片库需求挑选香港/台湾/新加坡/日本/美区节点', detail: '港台新片库中文字幕丰富，美区剧库体量最大，日区动漫资源最全。' },
    ],
    sections: [
      {
        heading: '二、为什么 Netflix 经常只能搜到有限剧集且画质上不去 4K？',
        lead: '全解锁靠的是原生住宅 IP 或专门配合的高质量 DNS 解锁方案，而 4K HDR 靠的是单线程带宽稳态输出。',
        paragraphs: [
          '在流媒体界“能登录 Netflix 主页”毫无技术门槛，因为全球绝大多数数据中心机房 IP 都被允许观看 Netflix 自有版权出品的剧集（Originals Only）。但如果你想看到《周刊动漫新番》《老友记》或台湾/新加坡地区第三方授权热剧，机场必须拥有当地原生 IP 或架设专门的流媒体解锁落地下游。',
          '此外，Netflix 对带宽要求与 YouTube 不同——它更依赖单线程连续吞吐稳态（至少 25–40Mbps 持续稳定且不丢包）以及合规设备硬件 DRM 认证（Windows Edge 或原生应用，Chrome 浏览器端由于 DRM 限制往往止步 720p）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '流媒体解锁机制排查',
        intent: '观影排障',
        articles: [
          { title: '流媒体区域报错与“送中”定位排除指南', targetKeyword: 'Netflix提示Proxy错误', plannedUrl: '/diagnostics/streaming-region/', summary: '解除机房被识别为代理与非预期地区判定', existingHref: '/diagnostics/streaming-region/' },
          { title: 'Disney+ 与 YouTube 4K 跨区流畅播放条件', targetKeyword: 'Disney+解锁节点', plannedUrl: '/streaming-ai/disney-plus/', summary: '对比两家主流流媒体的检测严苛差异', existingHref: '/streaming-ai/disney-plus/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么明明节点标注“解锁 Netflix”，点进去只看到几部剧？', a: '说明该节点当下处于“仅解锁自制剧（Originals Only）”状态，或者你刚切过来未清理流媒体 App 缓存重刷；换用标明全解锁的同地区备选节点或查阅 2026-08-19 截图支持品牌。' },
      { q: '用 Chrome 浏览器看 Netflix 为什么永远模糊，不像 4K？', a: '这是浏览器版权加密协议（Widevine L3 vs L1）限制，与机场网速无关；Windows 请改用官方 Edge 浏览器或 Netflix UWP 桌面端，Mac 请使用 Safari。' },
      { q: '灵动云历史报告写的“Netflix 非自制剧全解锁”代表什么？', a: '意味着在 2026-07-20/21 测试批次内，对应测试节点能够完整打开第三方授权片库而不受自制剧缩水限制；不过随时间推移仍应以实时测得为准。' },
    ],
  },

  'disney-plus': {
    sections: [
      {
        heading: '二、Disney+ 为什么经常连自制内容也不给看，直接报错地区不可用？',
        lead: '与 Netflix 容许看自制剧不同，Disney+ 对未授权地区及数据中心代理段往往采取硬性一刀切拦截。',
        paragraphs: [
          'Disney+ 的风控校验非常直接：一旦出口 IP 被识别为非支持服务地区或已知未做解锁处理的常规机房 IP，App 或网页端往往直接报 Error Code 73 / 83 或永久转圈无法进入片库。站内已归档带有 Disney+ 解锁实测列截图证据的包括光速云（2026-08-19 62/62 MiaoKo 图）与无忧链接（2026-07-18 流媒体截图）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '全能流媒体组合对比',
        intent: '流媒体解锁',
        articles: [
          { title: 'Netflix 解锁分级：自制剧与全解锁差异', targetKeyword: 'Netflix和Disney+节点', plannedUrl: '/streaming-ai/netflix/', summary: '了解跨片库解锁标准', existingHref: '/streaming-ai/netflix/' },
          { title: '31 品牌 AI 与流媒体全状态总矩阵', targetKeyword: 'Disney+解锁机场', plannedUrl: '/streaming-ai/', summary: '核查实测记录与品牌方声明分布', existingHref: '/streaming-ai/' },
        ],
      },
    ],
    faqs: [
      { q: 'Disney+ 看香港区、台湾区还是新加坡区内容最好？', a: '香港与台湾区自带完整繁中字幕且部分院线同步极快；新加坡区常兼顾英文双语及东南亚合集，建议尽量使用稳定标注支持解锁的港/台/新节点。' },
      { q: '手机 Disney+ 提示当前位置无法连接但网络很好怎么办？', a: '确认客户端分流把 `disneyplus.com` 及其认证 CDN 全部纳进对应解锁节点组里，同时关闭手机位置隐私定位授权防止 GPS 与 IP 冲突。' },
      { q: '哪几家有公开的 Disney+ 截图测试材料？', a: '站内目前收录了光速云 2026-08-19（MiaoKo 截图列含 Disney+）与无忧链接 2026-07-18 截图档案。' },
    ],
  },

  youtube: {
    sections: [
      {
        heading: '二、YouTube 4K 缓冲卡顿与“送中无广告”现象解析',
        lead: 'YouTube 几乎不封杀代理 IP，但它极其考验单线程持续带宽以及避免被位置误标。',
        paragraphs: [
          '如果你看 YouTube 4K60fps 视频时发现视频缓冲条涨得很慢（点“详细统计信息 / Stats for nerds”显示 Connection Speed 只有 10,000 Kbps 以下），核心原因并非解锁失败，而是晚高峰跨境链路丢包率偏高或节点带宽过载。香港（21–27ms）、新加坡与日本高质量 IEPL/BGP 节点最适合拉高 4K 连接速率。',
          '另一类常见问题叫“YouTube 送中”：当太多开启定位上报的国内设备同时在同一批固定代理 IP 上刷 YouTube 时，Google 会把该出口 IP 的定位历史拉回中国大陆，表现为页面出现极少广告或 YouTube Premium 会员背景播放失效。如遇此现象，可在策略组切换另外地区或刷新干净出口节点。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '带宽优化与节点对比',
        intent: '高速影音',
        articles: [
          { title: '网络速度慢与 4K 缓冲排查六项核查', targetKeyword: 'YouTube 4K卡顿', plannedUrl: '/diagnostics/slow-speed/', summary: '定位单线程慢还是本地路由器干扰', existingHref: '/diagnostics/slow-speed/' },
          { title: '全库 39 份测速档案与各网速率对比', targetKeyword: 'YouTube秒开测速', plannedUrl: '/network/speedtest/', summary: '核看真实多运营商测试表现', existingHref: '/network/speedtest/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么测速软件测出 400Mbps，看 YouTube 还是只跑 15,000 Kbps 左右？', a: '测速工具常用 16–32 并发多线程拉满吞吐，而 YouTube 视频播放主要考验单线程长连接拥塞控制和抗抖动能力；同时检查有没有打开客户端硬件解码与排除低速备选节点。' },
      { q: 'YouTube 送中（地区漂移回国内）对个人账号有什么坏处？', a: '日常观看影响有限，主要是推荐流区域判定错乱或部分 Premium/音乐版权功能受限；遇到只需切去一个纯净度更高的日本、台湾或新加坡节点即可恢复。' },
      { q: '用 99 元/年的轻度套餐适合每天看 4K YouTube 吗？', a: '不推荐！1 小时 4K YouTube 可消耗约 8–12GB 流量，59–69GB 月额套餐看 5–7 小时就耗空了，重度影音务必看 200GB 以上乃至 500GB 大流量档。' },
    ],
  },

  tiktok: {
    sections: [
      {
        heading: '二、区分“日常刷看海外视频”与“跨境电商矩阵运营/直播”',
        lead: '二者在网络成本与合规风控门槛上相差两个数量级，千万不能用 20 元共享机场硬上商业带货账号。',
        paragraphs: [
          '如果只是个人娱乐想刷看美区、日区或东南亚区 TikTok 短视频内容，选用普通口碑良好的机场节点（避开香港节点——因为 TikTok 已退出香港市场）配合清洁的手机环境即可顺利播放；但如果你从事 TikTok Shop 跨境电商运营、海外矩阵短视频发片或无人/真人直播，多人共享的多租户机场节点 IP 往往已经历成百上千台不同设备复用，极易引发“零播放（0 views）”、限流乃至直接封店风控。此场景务必考量独享静态住宅 IP 或企业独享定制方案（如光速云提供 550–680 元/月商业级定制接入评估）。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '地区策略与商业级隔离',
        intent: 'TikTok 合规',
        articles: [
          { title: '流媒体区域报错与 TikTok 黑屏无网排查', targetKeyword: 'TikTok连不上网', plannedUrl: '/diagnostics/streaming-region/', summary: '排查香港节点拦截与本地定位/语言缓存', existingHref: '/diagnostics/streaming-region/' },
          { title: '原生住宅 IP vs 广播机房 IP 核心分辨法', targetKeyword: 'TikTok原生IP', plannedUrl: '/network/native-ip/', summary: '搞懂运营商归属与商业直播需求门槛', existingHref: '/network/native-ip/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么挂上机场香港节点，打开 TikTok 永远一片黑屏刷不出任何视频？', a: '因为 TikTok 官方已停止服务香港地区！使用 TikTok 请切勿选用香港节点，务必切换至日本、台湾、新加坡或美国可用地区节点。' },
      { q: '看 TikTok 一定要把手机里的国内 SIM 卡拔掉吗？', a: '旧版机制极依赖 SIM 卡 MCC 识别，现在配合合规客户端开启完善分流、禁用定位或用隔离备用手机与清理相关缓存即可明显缓解；核心依然取决于目标出口 IP 是否干净与正确非港地区。' },
      { q: '为什么有些机场写着“支持 TikTok 解锁”，商用发视频还是零播放？', a: '“支持解锁”仅代表节点能拉取视频流和正常刷看（媒体可用），并不等于给商用账号背书为“独享洁净无风控住宅环境”。' },
    ],
  },

  spotify: {
    sections: [
      {
        heading: '二、Spotify 免费账号 14 天漂移验证与家庭组匹配原则',
        lead: '对于 Spotify 用户，核心不在节点下载有多快，而在登录 IP 国家要与你的账号资料所在国一致。',
        paragraphs: [
          '如果你使用的是 Spotify 免费版账户，系统每隔 14 天允许你在境外使用一次漫游，超时后若节点国家与账号国家不匹配便会报错 `You can only use Spotify abroad for 14 days`，必须切回与你账号注册国（如美区、港区或菲区）一致的节点重新登录一次方可续期 14 天。而对于已升级 Premium 个人或家庭组的付费用户，一般不受 14 天限制，主要是在接受家庭成员邀请验证地址瞬间，节点地区务必对准主账号发卡国家。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '跨区影音应用规则',
        intent: '应用匹配',
        articles: [
          { title: 'Rule 规则分流中为 Spotify 指定固定地区出口', targetKeyword: 'Spotify代理分流', plannedUrl: '/guides/routing-rules/', summary: '避免音频缓冲与 14 天登录国错乱', existingHref: '/guides/routing-rules/' },
          { title: '流媒体综合解锁可用性矩阵查证', targetKeyword: '流媒体机场清单', plannedUrl: '/streaming-ai/', summary: '核对 31 家品牌多媒体支持状态', existingHref: '/streaming-ai/' },
        ],
      },
    ],
    faqs: [
      { q: 'Spotify 平时听歌耗机场流量多吗？怎么设置能不走代理省流量？', a: '音频流码率较低，一天听 2 小时约消耗 150–250MB；Premium 用户正常登陆后如果平时只想让 Spotify 直连省流量，可在分流规则设置好除登录验证外按地区放行策略。' },
      { q: '接收 Spotify Family 家庭组邀请时总提示地址不匹配怎么处理？', a: '接受邀请的一瞬间开启无痕浏览器窗口、挂上跟家庭组长账号完全同一国家的机场节点（如同一日本或美国节点），然后再提交匹配地址。' },
      { q: '为什么切换了一首歌突然跳转出现所在国不支持弹窗？', a: '常见于本地客户端配置把 Spotify 域名扔进了自动负载均衡节点池，导致从日区节点突然跳到香港或英国节点引发认证异常，把它锁死单国出口组即可。' },
    ],
  },

  checker: {
    steps: [
      { title: '1. 先辨清测速脚本（MAI-TEST-BOT）与解锁脚本（MiaoKo）的功能差异', detail: '前者仅验证通道速度与延迟；后者才会模拟访问 OpenAI、Gemini、Netflix 与 Disney+ 检查真实返回状态。' },
      { title: '2. 自己动手使用浏览器无痕模式叠加本地检测核实', detail: '新购首月月付后，依次挂新加坡、日本与美国节点，用无痕窗口直接访问目标业务官网登录测试最真实。' },
    ],
    sections: [
      {
        heading: '二、全库实测证据披露现状：为何我们绝不篡改“品牌方宣称”字段',
        lead: '只有自带测试日期、执行前端与完整节点表的证据，才被机场情报标记为“独立实测”。',
        paragraphs: [
          '市面上充斥着大量由卖家自绘“全部绿色支持全解锁”的推广海报。在本站可验证档案体系里，截止目前拥有完整流媒体与 AI 检测截图/报告归档的仅限三家：光速云（2026-08-19 5 张 MiaoKo 截图，62/62 节点涵盖 Disney+、Netflix、YouTube、OpenAI、Gemini）、无忧链接（2026-07-18 两张流媒体与御三家截图，另注其 2026-10 已转专属端）以及灵动云（2026-07-20/21 解锁报告摘要）。',
          '对于其余明确在商品描述中声明支持 ChatGPT/Netflix 的品牌（如星岛梦、飞猫云、唯兔云等），我们在对照总表中严格标注“品牌方宣称”或“部分/视节点”，提醒用户在购入前保持首单月付试水验证心态。',
        ],
      },
    ],
    clusters: [
      {
        clusterName: '实测原图与总矩阵入口',
        intent: '证据查证',
        articles: [
          { title: '31 品牌 AI 与流媒体总矩阵对照面板', targetKeyword: '机场AI可用性矩阵', plannedUrl: '/streaming-ai/', summary: '一键扫视全部品牌的实测与宣传口径区分', existingHref: '/streaming-ai/' },
          { title: '全站 39 份网络测速原始截图档案库', targetKeyword: '机场测速工具截图', plannedUrl: '/network/speedtest/', summary: '对照 MAI-TEST-BOT 与 MiaoKo 实测原图', existingHref: '/network/speedtest/' },
        ],
      },
    ],
    faqs: [
      { q: '为什么不能提供一个输入订阅链接就能网页在线跑解锁的工具？', a: '一方面把私人订阅链接粘贴到任意第三方在线网页存在严重流量与隐私泄露风险（本站明确反对将订阅传给第三方网页）；另一方面本地出口风控往往受浏览器与个人操作环境影响，本地实测无痕窗口验证既安全又准确。' },
      { q: '怎么用自己电脑快速测出一台节点对 Netflix 究竟是自制剧还是全解锁？', a: '连上该节点后在 Netflix 搜几部非 Netflix 原创的知名美剧、韩剧或港台授权电影，能正常搜出播放按钮即全解锁；若完全搜不到非原创剧，则是仅解锁自制剧。' },
      { q: '为什么今天脚本测出来解锁的节点，下个月又不能解锁了？', a: '因为流媒体与 AI 厂商的 IP 风控数据库会周期性清扫热门机场机房段，机场运维也需要同步更换落地或刷新解锁路由，因此解锁状态本质上是动态的，永远需要结合最新月付实测与备用节点应对。' },
    ],
  },
};
