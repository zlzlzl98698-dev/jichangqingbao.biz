import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const articlesDir = path.resolve('src/content/articles');
const reviewsDir = path.resolve('src/content/reviews');
const brands = JSON.parse(fs.readFileSync(path.resolve('src/data/brands.json'), 'utf8'));

let errors = 0;
let warnings = 0;

function fail(msg) {
  console.error('[CONTENT FAIL]', msg);
  errors++;
}
function warn(msg) {
  console.warn('[CONTENT WARN]', msg);
  warnings++;
}

// 1. Check 31 brand Markdown reviews exist & check unique brandSlug
const reviewFiles = fs.readdirSync(reviewsDir).filter((f) => f.endsWith('.md'));
const reviewSlugs = new Set();
for (const f of reviewFiles) {
  const txt = fs.readFileSync(path.join(reviewsDir, f), 'utf8');
  const m = txt.match(/brandSlug:\s*([^\r\n]+)/);
  if (!m) fail(`Missing brandSlug in reviews/${f}`);
  else {
    const slug = m[1].trim().replace(/['"]/g, '');
    if (reviewSlugs.has(slug)) fail(`Duplicate brandSlug in reviews: ${slug}`);
    reviewSlugs.add(slug);
  }
}
for (const b of brands) {
  if (!reviewSlugs.has(b.slug)) fail(`Brand ${b.slug} (${b.brandName}) is missing Markdown review in src/content/reviews/`);
}

// 2. Check tertiary articles for unique primaryKeyword, Answer-First, forbidden filler, and inbound link presence in dist/
const articleFiles = fs.existsSync(articlesDir) ? fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md')) : [];
const primaryKeywords = new Map();
const forbiddenPhrases = ['随着互联网的发展', '在数字化时代', '选择合适的服务十分重要'];

const allHtmlFiles = [];
function collectHtml(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collectHtml(p);
    else if (e.name.endsWith('.html')) allHtmlFiles.push(p);
  }
}
if (fs.existsSync(distDir)) collectHtml(distDir);

const distHtmlCorpus = allHtmlFiles.map((f) => ({
  file: path.relative(distDir, f),
  html: fs.readFileSync(f, 'utf8'),
}));

for (const f of articleFiles) {
  const slug = f.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(articlesDir, f), 'utf8');
  const pkMatch = raw.match(/primaryKeyword:\s*"([^"]+)"/);
  if (!pkMatch) fail(`Article ${f} missing primaryKeyword`);
  else {
    const pk = pkMatch[1].trim();
    if (primaryKeywords.has(pk)) fail(`Keyword collision: "${pk}" in ${primaryKeywords.get(pk)} and ${f}`);
    primaryKeywords.set(pk, f);
  }

  for (const bad of forbiddenPhrases) {
    if (raw.includes(bad)) fail(`Forbidden generic filler "${bad}" detected in articles/${f}`);
  }

  const body = raw.replace(/^---[\s\S]*?---/, '');
  const zhCount = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  if (zhCount < 500) warn(`Article ${f} markdown body has only ${zhCount} Hanzi (< 500)`);

  // Check rendered <main> visible Hanzi for full depth (Answer-First + prose + FAQ)
  const renderedEntry = distHtmlCorpus.find(
    (x) => x.file === `articles/${slug}/index.html` || x.file === `articles\\${slug}\\index.html`
  );
  if (renderedEntry) {
    const renderedMain = (renderedEntry.html.match(/<main[\s\S]*?<\/main>/i) || [''])[0].replace(/<[^>]+>/g, ' ');
    const renderedZh = (renderedMain.match(/[\u4e00-\u9fff]/g) || []).length;
    if (renderedZh < 1200) warn(`Rendered article /articles/${slug}/ has only ${renderedZh} visible Hanzi (< 1200)`);
  }

  // Check inbound links in built dist/ outside of self & sitemap
  const targetHref = `/articles/${slug}/`;
  const inboundCount = distHtmlCorpus.filter(
    (x) => !x.file.startsWith(`articles\\${slug}\\`) && !x.file.startsWith(`articles/${slug}/`) && x.html.includes(targetHref)
  ).length;
  if (inboundCount === 0) fail(`Orphan article detected: ${targetHref} has zero inbound internal links in dist/`);
}

// 3. Verify all comparison pages have FAQPage and >= 900 Hanzi
for (const x of distHtmlCorpus) {
  if (x.file.includes('compare') && x.file.includes('-vs-') && x.file.endsWith('index.html')) {
    if (!x.html.includes('FAQPage')) fail(`Comparison page missing FAQPage JSON-LD: ${x.file}`);
    const main = (x.html.match(/<main[\s\S]*?<\/main>/i) || [''])[0].replace(/<[^>]+>/g, ' ');
    const zh = (main.match(/[\u4e00-\u9fff]/g) || []).length;
    if (zh < 900) warn(`Comparison page ${x.file} below 900 Hanzi (${zh})`);
  }
}

console.log(`Content audit complete: ${reviewFiles.length} brand MD reviews, ${articleFiles.length} tertiary articles, ${errors} errors, ${warnings} warnings.`);
if (errors > 0) process.exit(1);
