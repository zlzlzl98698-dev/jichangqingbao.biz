import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const affiliateData = JSON.parse(fs.readFileSync(path.resolve('src/data/affiliate-links.json'), 'utf8'));
const affiliateUrls = new Set(
  Object.values(affiliateData.links || {})
    .map((x) => x.affiliateUrl)
    .filter(Boolean)
);
const affiliateHosts = new Set(
  Array.from(affiliateUrls).map((u) => {
    try {
      return new URL(u).hostname;
    } catch {
      return '';
    }
  }).filter(Boolean)
);
if (!fs.existsSync(distDir)) {
  console.error('dist/ directory not found. Run npm run build first.');
  process.exit(1);
}

function walkHtml(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'pagefind' || entry.name === '_astro') continue;
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = walkHtml(distDir);
const routeSet = new Set();
for (const f of htmlFiles) {
  let rel = '/' + path.relative(distDir, f).replace(/\\/g, '/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'index.html'.length);
  routeSet.add(rel);
}

const titles = new Map();
const descriptions = new Map();
const errors = [];
const warnings = [];
let affiliateLinksChecked = 0;

for (const file of htmlFiles) {
  const relFile = path.relative(distDir, file).replace(/\\/g, '/');
  const isUtility = relFile === '404.html' || relFile === 'search/index.html';
  const html = fs.readFileSync(file, 'utf8');

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const jsonLdMatches = html.match(/<script\s+type="application\/ld\+json">/gi) || [];

  if (!titleMatch) errors.push(`${relFile}: Missing <title>`);
  else if (!isUtility) {
    const t = titleMatch[1].trim();
    if (titles.has(t)) warnings.push(`Duplicate title "${t}" on ${relFile} and ${titles.get(t)}`);
    titles.set(t, relFile);
  }

  if (!descMatch || !descMatch[1].trim()) errors.push(`${relFile}: Missing meta description`);
  else if (!isUtility) {
    const d = descMatch[1].trim();
    if (descriptions.has(d)) warnings.push(`Duplicate description on ${relFile} and ${descriptions.get(d)}`);
    descriptions.set(d, relFile);
  }

  if (h1Matches.length !== 1) errors.push(`${relFile}: Expected 1 H1, found ${h1Matches.length}`);
  if (!canonicalMatch) errors.push(`${relFile}: Missing canonical URL`);
  if (!html.includes('property="og:image"')) errors.push(`${relFile}: Missing og:image meta tag`);
  if (jsonLdMatches.length === 0) errors.push(`${relFile}: Missing JSON-LD structured data`);

  // Check internal links
  const hrefRegex = /href="(\/[^"#?]*)/g;
  let m;
  while ((m = hrefRegex.exec(html)) !== null) {
    const target = m[1];
    if (
      target.startsWith('/_astro/') ||
      target.startsWith('/pagefind/') ||
      target === '/rss.xml' ||
      target === '/llms.txt' ||
      target === '/sitemap-index.xml' ||
      target === '/og-default.png' ||
      target === '/favicon.png' ||
      target === '/favicon.ico' ||
      target === '/favicon.webp'
    )
      continue;
    const normalized = target.endsWith('/') ? target : `${target}/`;
    if (!routeSet.has(normalized) && !fs.existsSync(path.join(distDir, target))) {
      errors.push(`${relFile}: Broken internal link -> ${target}`);
    }
  }

  // Check affiliate links attributes against complete affiliate-links.json registry
  const aTagRegex = /<a\s+[^>]*href="(https?:\/\/[^"]+)"[^>]*>/gi;
  let am;
  while ((am = aTagRegex.exec(html)) !== null) {
    const tag = am[0];
    const url = am[1];
    let isAff = affiliateUrls.has(url);
    if (!isAff) {
      try {
        isAff = affiliateHosts.has(new URL(url).hostname);
      } catch {
        isAff = false;
      }
    }
    if (isAff) {
      affiliateLinksChecked++;
      if (!tag.includes('target="_blank"')) errors.push(`${relFile}: Affiliate link missing target="_blank": ${url}`);
      if (!tag.includes('rel="nofollow sponsored noopener"')) errors.push(`${relFile}: Affiliate link missing rel="nofollow sponsored noopener": ${url}`);
    }
  }
}

const hasSitemap = fs.existsSync(path.join(distDir, 'sitemap-index.xml'));
const hasRobots = fs.existsSync(path.join(distDir, 'robots.txt'));
const hasHtaccess = fs.existsSync(path.join(distDir, '.htaccess'));
const hasPagefind = fs.existsSync(path.join(distDir, 'pagefind', 'pagefind.js'));
const hasRss = fs.existsSync(path.join(distDir, 'rss.xml'));
const hasLlms = fs.existsSync(path.join(distDir, 'llms.txt'));
const hasOg = fs.existsSync(path.join(distDir, 'og-default.png'));

if (!hasSitemap) errors.push('Missing dist/sitemap-index.xml');
if (!hasRobots) errors.push('Missing dist/robots.txt');
if (!hasHtaccess) errors.push('Missing dist/.htaccess');
if (!hasPagefind) errors.push('Missing dist/pagefind/pagefind.js');
if (!hasRss) errors.push('Missing dist/rss.xml');
if (!hasLlms) errors.push('Missing dist/llms.txt');
if (!hasOg) errors.push('Missing dist/og-default.png');

const report = [
  '# 全站 SEO / GEO / 静态构建 QA 检查报告',
  '',
  `- 检查时间：${new Date().toISOString().slice(0, 10)}`,
  `- 扫描静态 HTML 页面数：${htmlFiles.length}`,
  `- 检查推广链接次数：${affiliateLinksChecked}`,
  `- Sitemap / RSS / robots.txt / .htaccess / Pagefind：${hasSitemap && hasRss && hasRobots && hasHtaccess && hasPagefind ? '全部就绪' : '存在缺失'}`,
  `- 致命错误数：${errors.length}`,
  `- 告警数：${warnings.length}`,
  '',
  '## 1. 错误明细',
  errors.length === 0 ? '- 0 个错误：全部页面具备唯一 Title、Description、单一 H1、Canonical、JSON-LD 及有效内链与规范推广属性。' : errors.map((e) => `- [ERROR] ${e}`).join('\n'),
  '',
  '## 2. 告警明细',
  warnings.length === 0 ? '- 0 个告警。' : warnings.map((w) => `- [WARN] ${w}`).join('\n'),
];

fs.mkdirSync(path.resolve('reports'), { recursive: true });
fs.writeFileSync(path.resolve('reports/seo-qa-report.md'), report.join('\n') + '\n', 'utf8');
console.log(`SEO QA complete: ${htmlFiles.length} HTML pages, ${affiliateLinksChecked} affiliate links checked, ${errors.length} errors, ${warnings.length} warnings.`);
if (errors.length > 0) {
  console.error(errors.slice(0, 20));
  process.exit(1);
}
