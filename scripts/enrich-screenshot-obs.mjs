import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');
const brands = JSON.parse(fs.readFileSync(path.join(dataDir, 'brands.json'), 'utf8'));

const OBSERVATIONS = {
  'speedtests/光速云-节点测速实测.png': [
    { group: 'HK 香港 02–20（19行）', rtt: '14–33ms（HK20 201ms）', speed: '平均 54.43–75.07MB（HK02 为 0B）', note: 'UDP: Unknown' },
    { group: 'TW 台湾 01–05（5行）', rtt: '82–120ms', speed: '平均 52.40–61.07MB（TW04 为 8.40MB）', note: 'UDP: Unknown' },
    { group: 'SG 新加坡 01–10（10行）', rtt: '51–138ms', speed: '平均 55.35–73.13MB', note: '最高 86.47MB' },
    { group: 'JP 日本 01–10（10行）', rtt: '69–74ms', speed: '平均 60.15–67.56MB', note: '最高 79.63MB' },
    { group: 'US 美国 01–10（10行）', rtt: '161–163ms', speed: '平均 54.20–71.58MB', note: '最高 127.04MB' },
  ],
  'speedtests/飞猫云-节点测速实测.png': [
    { group: '香港专线 01–20（含前2行账号信息节点）', rtt: '16–82ms', speed: '最高速度 59.57–81.00MB（平均列原始图显示 561–735MB 数值异常）', note: '保留原始图异常渲染不作改写' },
    { group: '台湾 01–05 / 新加坡 01–10 / 日本 01–10', rtt: '45–212ms', speed: '最高速度 55.28–86.47MB', note: '部分地区平均列同存原图数值异常' },
    { group: '美国 01–10 / 欧亚小众节点', rtt: '127–721ms', speed: '美国最高 62.62–80.48MB；泰国 1.91MB/6.42MB，德国 1.88MB/3.45MB', note: 'UDP: Unknown' },
  ],
  'speedtests/星岛梦-节点测速实测.png': [
    { group: 'HK 香港 01–20（20行）', rtt: '25–107ms', speed: '平均 54.87–69.76MB（HK01 为 0B）', note: 'UDP: Unknown' },
    { group: 'TW 台湾 01–04（4行）', rtt: '129–259ms', speed: '平均 5.89–46.25MB', note: 'TW03 偏低' },
    { group: 'SG 新加坡 00–10（11行）', rtt: '62–145ms', speed: '平均 44.76–65.87MB（SG08 为 8.22MB）', note: 'UDP: Unknown' },
    { group: 'JP 日本 01–10（10行）', rtt: '79–107ms', speed: '平均 25.91–53.87MB', note: '最高 64.26MB' },
    { group: 'US 美国 01–10（10行）', rtt: '170–349ms', speed: '平均 14.20–33.64MB', note: '最高 60.29MB' },
  ],
  'speedtests/二猫云-节点测速实测.png': [
    { group: '香港 01–20（20行）', rtt: '24–31ms', speed: '平均 66.94–91.19MB', note: '最高 96.01MB' },
    { group: '台湾 01–05 / 新加坡 01–10', rtt: '63–132ms', speed: '台湾 60.92–79.92MB；新加坡 72.49–88.44MB', note: '原图实证存在 10 个新加坡节点' },
    { group: '日本 01–10 / 美国 01–10', rtt: '77–176ms', speed: '日本 54.15–87.65MB；美国 20.65–74.31MB', note: '英国 483B、土耳其 0B、泰国 45.31KB' },
  ],
  'speedtests/唯兔云-节点测速实测.png': [
    { group: 'ss-HK-香港BGP-IEPL01–20', rtt: '19–30ms', speed: '平均 40.75–65.38MB', note: '节点名含 BGP-IEPL 标识' },
    { group: 'ss-TW 01–05 / ss-JP 01–09 / ss-SG 01–08', rtt: '60–282ms', speed: 'TW 39.90–52.61MB；JP 45.48–61.80MB；SG 26.41–63.34MB（SG07 为 0B）', note: '马来西亚 01–02 为 0B' },
    { group: 'ss-US-美国BGP-IEPL01–10', rtt: '168–336ms', speed: '平均 31.61–60.82MB', note: '最高 92.83MB' },
  ],
  'speedtests/一翻云-节点测速实测.png': [
    { group: 'HK 香港 01–20（20行）', rtt: '16–101ms', speed: '平均 80.98–92.27MB（HK01 为 0B，HK11 为 42.70MB）', note: '最高 98.24MB' },
    { group: 'TW 台湾 01–05 / SG 新加坡 01–10', rtt: '54–121ms', speed: 'TW 25.82–82.81MB；SG 29.08–89.00MB', note: 'UDP: Unknown' },
    { group: 'JP 日本 01–10 / US 美国 01–10', rtt: '66–162ms', speed: 'JP 26.45–86.53MB；US 61.12–81.67MB（最高 149.82MB）', note: 'UDP: Unknown' },
  ],
  'speedtests/U1S1-节点测速实测.png': [
    { group: '香港专线 02–20（含3行账号信息）', rtt: '14–92ms（HK20 191ms）', speed: '平均 93.59–106.84MB', note: 'HK20 HTTP 延迟 3561ms' },
    { group: '台湾 01–04 / 新加坡 01–10 / 日本 01–10', rtt: '53–955ms', speed: 'TW 30.24–100.48MB；SG01 17.35MB 其余 99–107MB；JP 80–110MB', note: 'UDP: Unknown' },
    { group: '美国 01–10 / 欧亚节点', rtt: '135–358ms', speed: 'US 5.37–67.63MB；英国另一节点 61.34KB', note: '局部美国节点波动明显' },
  ],
  'speedtests/灵猫网络-节点测速实测.png': [
    { group: '香港 01–20（20行）', rtt: '13–203ms', speed: '平均 17.91–33.22MB（HK01 为 0B）', note: 'UDP: Unknown' },
    { group: '美国 01–10 / 日本 01–09', rtt: '66–674ms', speed: 'US 16.40–23.59MB；JP 19.31–24.26MB', note: 'JP03 HTTP 2146ms' },
    { group: '新加坡 01–10 / 台湾 01–05', rtt: '50–181ms', speed: 'SG01 1.74MB、SG02 9.32MB、SG03–10 65.69–71.36MB；TW 11.04–62.72MB', note: '傍晚 18:45 采集' },
  ],
  'speedtests/SOGO云-节点测速实测.png': [
    { group: 'HK 香港 01–19（含信息行）', rtt: '14–23ms', speed: '平均 44.00–60.76MB（HK11 为 0B）', note: '球速联通 5Gbps 后端' },
    { group: 'TW 01–05 / SG 01–10 / JP 01–10', rtt: '51–124ms', speed: 'TW 41.72–49.62MB；SG 47.22–98.66MB；JP 71.50–106.22MB', note: '覆盖 15 个地区' },
    { group: 'US 01–09 / 欧亚小众（MY/TR/UK/DE/FR/TH/KR）', rtt: '140–486ms', speed: 'US 50.21–85.59MB；MY01–02 为 0B；欧亚 2.14–7.89MB', note: '傍晚 18:57 采集' },
  ],
  'speedtests/全球云-节点测速实测.png': [
    { group: 'HK 香港 01–20（含信息行）', rtt: '14–89ms', speed: '平均 73.41–91.42MB', note: 'UDP: Unknown' },
    { group: 'TW 01–05 / SG 01–10 / JP 01–10', rtt: '49–219ms', speed: 'TW 72.86–80.12MB；SG 13.81–83.44MB；JP08 为 80.52KB 其余 64–83MB', note: 'UDP: Unknown' },
    { group: 'US 01–10 / 小众节点', rtt: '104–445ms', speed: 'US 45.73–67.90MB；泰国 3.41KB；韩国 2.25MB', note: 'UDP: Unknown' },
  ],
  'speedtests/可信云-节点测速实测.png': [
    { group: 'HK 香港 01–20（20行）', rtt: '24–104ms', speed: '平均 28.64–53.40MB', note: '日期仅见 15:32:35，按批次推断为 2026-08-11（待复核）' },
    { group: 'TW 01–05 / SG 01–10', rtt: '63–238ms', speed: 'TW 3.86–27.49MB；SG 36.86–47.75MB', note: 'UDP: Unknown' },
    { group: 'JP 01–10 / US 01–10', rtt: '87–201ms', speed: 'JP07 12.61KB、JP06 5.90MB、其余 21–43MB；US05 688.93KB、其余 11–20MB', note: 'UDP: Unknown' },
  ],
  'speedtests/极连云-节点测速实测.png': [
    { group: '香港专线 01–20（含信息行）', rtt: '24–291ms', speed: '平均 34.87–98.95MB（HK01 为 0B）', note: '晚间 22:46 采集' },
    { group: 'TW 01–05 / SG 01–09 / JP 01–10', rtt: '61–316ms', speed: 'TW 7.50–73.73MB；SG 11.50–83.72MB；JP 1.39–67.65MB', note: '晚间时段分化明显' },
    { group: 'US 01–10 / 欧亚小众', rtt: '153–1787ms', speed: 'US 5.19–73.05MB；德国 42.50KB；法国 43.02MB', note: 'UDP: Unknown' },
  ],
  'speedtests/光年梯-节点测速实测.png': [
    { group: '香港 01–20（20行）', rtt: '25–151ms', speed: '平均 43.14–95.57MB', note: 'UDP: Unknown' },
    { group: 'TW 01–05 / SG 01–10 / JP 01–10', rtt: '63–244ms', speed: 'TW 11.11–75.78MB；SG 87.40–95.69MB；JP 15.27–90.16MB', note: '新加坡与日本表现较稳定' },
    { group: 'US 01–10 / MY / 欧洲', rtt: '160–343ms', speed: 'US 1.16–38.23MB；MY01 与德国01 为 0B；MY02 为 52.65KB', note: 'UDP: Unknown' },
  ],
  'speedtests/速界-节点测速实测.png': [
    { group: '香港 01–20（20行）', rtt: '13–29ms', speed: '平均 41.24–68.80MB（HK20 为 0B）', note: 'UDP: Unknown' },
    { group: 'TW 01–05 / SG 01–10 / JP 01–10', rtt: '48–279ms', speed: 'TW 27.87–37.48MB；SG01 7.44MB 其余 40–48MB；JP 30.93–48.80MB', note: 'UDP: Unknown' },
    { group: 'US 01–10 / 欧亚小众', rtt: '165–590ms', speed: 'US 35.51–51.70MB；英国01 为 0B；德国 26.91MB', note: 'UDP: Unknown' },
  ],
  'speedtests/宇宙云-节点测速实测.png': [
    { group: '【香港】01–15（15行）', rtt: 'TLS 91–121ms / HTTPS 446–830ms', speed: '平均 470.34–550.00MB（HK01 为 0.00B）', note: 'HK02–15 全为 FullCone' },
    { group: '【台湾】01–05 / 【新加坡】01–10', rtt: 'TLS 86–184ms', speed: 'TW 29.17–77.48MB；SG07 为 9.60KB 其余 331–523MB', note: '多数 FullCone，少数 Unknown/Restricted' },
    { group: '【日本】01–10 / 【美国】01–10', rtt: 'TLS 137–247ms', speed: 'JP 22.38–169.86MB；US 8.33–12.36MB', note: '全部节点标为 Vless，晚间 21:04 采集' },
  ],
  'speedtests/微风-节点测速实测.png': [
    { group: '香港 01–15（15行）', rtt: 'TLS 97–211ms / HTTPS 490–1172ms', speed: '平均 468.91–546.20MB', note: '全部 FullCone' },
    { group: '台湾 01–05 / 新加坡 01–10', rtt: 'TLS 78–213ms', speed: 'TW02 为 0.00B 其余 73–103MB；SG 135.34–401.25MB', note: '2026-07-19 18:38 采集' },
    { group: '日本 01–10 / 美国 01–10', rtt: 'TLS 135–250ms', speed: 'JP05 为 8.00KB 其余 79–257MB；US 9.90–21.03MB', note: '全部 FullCone（JP 除个别 Unknown）' },
  ],
  'speedtests/无忧链接.jpg': [
    { group: '香港HKG 01–15（15行）', rtt: 'TLS 100–130ms', speed: '平均 392.62–547.22MB', note: '全部 FullCone' },
    { group: '新加坡SIN 01–10 / 台湾TPE 01–05', rtt: 'TLS 102–269ms', speed: 'SIN02 为 17.59KB 其余 94–352MB；TPE 65.74–94.72MB', note: '2026-07-18 21:40 采集' },
    { group: '日本TYO 01–10 / 美国LAX 01–10', rtt: 'TLS 130–253ms', speed: 'TYO 60.17–198.31MB；LAX 12.13–18.13MB', note: '配套无忧链接2.jpg显示 HK01 YouTube 送中，其余御三家解锁' },
  ],
  'lightspeed/photo_2026-08-19_12-20-10.jpg': [
    { group: '香港 01–20（单线程 VLESS）', rtt: 'TLS 108–217ms', speed: '平均 375.35–424.21MB', note: '全部 FullCone' },
    { group: '新加坡 01–10 / 台湾 01–10 / 日本 01–10', rtt: 'TLS 140–522ms', speed: 'SG 219.96–315.87MB；TW 71.22–126.35MB；JP 98.89–104.16MB', note: '珠海联通 9Gbps 单线程' },
    { group: '美国 01–10（10行）', rtt: 'TLS 276–290ms', speed: '美国02 为 1.60KB，其余 313.77–370.94MB', note: '保留美国02单线程异常' },
  ],
};

let enrichedCount = 0;
for (const b of brands) {
  for (const img of b.testImages) {
    if (OBSERVATIONS[img.file]) {
      img.observedBreakdown = OBSERVATIONS[img.file];
      enrichedCount++;
    }
  }
}

fs.writeFileSync(path.join(dataDir, 'brands.json'), JSON.stringify(brands, null, 2) + '\n', 'utf8');
console.log(`Enriched ${enrichedCount} testImages with directly observed screenshot breakdown tables.`);
