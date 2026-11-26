import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');
const brands = JSON.parse(fs.readFileSync(path.join(dataDir, 'brands.json'), 'utf8'));
const affiliate = JSON.parse(fs.readFileSync(path.join(dataDir, 'affiliate-links.json'), 'utf8'));
const conflicts = JSON.parse(fs.readFileSync(path.join(dataDir, 'data-conflicts.json'), 'utf8'));
const urlMap = JSON.parse(fs.readFileSync(path.join(dataDir, 'keyword-url-map.json'), 'utf8'));

const issues = [];
const slugs = new Set();
const ids = new Set();

for (const b of brands) {
  if (slugs.has(b.slug)) issues.push(`Duplicate slug: ${b.slug}`);
  slugs.add(b.slug);
  if (ids.has(b.brandId)) issues.push(`Duplicate brandId: ${b.brandId}`);
  ids.add(b.brandId);

  if (b.logo) {
    const logoPath = path.resolve('src/assets/logos', b.logo);
    if (!fs.existsSync(logoPath)) issues.push(`Missing logo file for ${b.slug}: ${b.logo}`);
  }
  for (const img of b.testImages) {
    const imgPath = path.resolve('src/assets', img.file);
    if (!fs.existsSync(imgPath)) issues.push(`Missing test image for ${b.slug}: ${img.file}`);
  }
  if (!affiliate.links[b.slug]) {
    issues.push(`Missing affiliate entry for ${b.slug}`);
  }
  if (b.thirdPartyClientSupport === false && b.compatibleClients.length > 0) {
    issues.push(`Exclusive-client brand ${b.slug} should not list third-party compatibleClients`);
  }
}

const mappedUrls = new Set();
for (const entry of urlMap) {
  if (mappedUrls.has(entry.canonicalUrl)) issues.push(`Duplicate URL map entry: ${entry.canonicalUrl}`);
  mappedUrls.add(entry.canonicalUrl);
}

const reportLines = [
  '# 数据审计与冲突核查报告（Data & Conflict Audit Report）',
  '',
  `- 审计时间：${new Date().toISOString().slice(0, 10)}`,
  `- 独立品牌总数：${brands.length}`,
  `- 联盟注册表条目：${Object.keys(affiliate.links).length}`,
  `- 冲突审计条目：${conflicts.length}`,
  `- 关键校验问题数：${issues.length}`,
  '',
  '## 1. 结构化校验结果',
  issues.length === 0 ? '- 全部通过：无重复 slug/ID、无缺失资源图片、无专属客户端误标兼容。' : issues.map((i) => `- [FAIL] ${i}`).join('\n'),
  '',
  '## 2. 已公开披露的来源冲突与实体合并（摘要）',
  ...conflicts.map((c) => `- **${c.conflictId} (${c.brandName})** [${c.status}] — ${c.field}：${c.resolution}`),
];

fs.mkdirSync(path.resolve('reports'), { recursive: true });
fs.writeFileSync(path.resolve('reports/data-audit-report.md'), reportLines.join('\n') + '\n', 'utf8');
console.log(`Data audit complete: ${brands.length} brands, ${issues.length} issues.`);
if (issues.length > 0) {
  console.error(issues);
  process.exit(1);
}
