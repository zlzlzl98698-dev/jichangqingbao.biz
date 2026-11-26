import fs from 'node:fs';
import path from 'node:path';

const pillars = [
  { id: '01', name: '机场推荐', url: '/recommend/', file: 'dist/recommend/index.html' },
  { id: '02', name: '价格与套餐', url: '/pricing/', file: 'dist/pricing/index.html' },
  { id: '03', name: '机场品牌', url: '/brands/', file: 'dist/brands/index.html' },
  { id: '04', name: 'VPN 与加速器', url: '/vpn/', file: 'dist/vpn/index.html' },
  { id: '05', name: '客户端软件', url: '/clients/', file: 'dist/clients/index.html' },
  { id: '06', name: 'AI 与流媒体', url: '/streaming-ai/', file: 'dist/streaming-ai/index.html' },
  { id: '07', name: '线路与节点', url: '/network/', file: 'dist/network/index.html' },
  { id: '08', name: '使用教程', url: '/guides/', file: 'dist/guides/index.html' },
  { id: '09', name: '故障排查', url: '/diagnostics/', file: 'dist/diagnostics/index.html' },
  { id: '10', name: '风险与替代', url: '/intelligence/', file: 'dist/intelligence/index.html' },
];

for (const p of pillars) {
  const html = fs.readFileSync(path.resolve(p.file), 'utf8');
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let body = mainMatch ? mainMatch[1] : html;
  body = body.replace(/<script[\s\S]*?<\/script>/gi, ' ')
             .replace(/<style[\s\S]*?<\/style>/gi, ' ')
             .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
             .replace(/<[^>]+>/g, ' ');
  const hanziCount = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const faqCount = (html.match(/"@type":"Question"/g) || []).length;
  console.log(`${p.id} ${p.name} (${p.url}): ${hanziCount} 汉字 | FAQ Schema: ${faqCount} | Title: ${titleMatch?.[1]?.trim()}`);
}
