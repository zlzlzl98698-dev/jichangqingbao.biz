/**
 * Keyword Intelligence Engine — CSV/JSON Importer
 * Usage: node scripts/import-keywords.mjs <path-to-gsc-or-bing.csv|json>
 * Reads search export data without fabricating metrics, deduplicates against keywords.json,
 * matches canonical URLs in keyword-url-map.json, and writes reports/keyword-gap-report.md.
 */
import fs from 'node:fs';
import path from 'node:path';

const inputFile = process.argv[2];
const dataDir = path.resolve('src/data');
const existingKeywords = JSON.parse(fs.readFileSync(path.join(dataDir, 'keywords.json'), 'utf8'));
const urlMap = JSON.parse(fs.readFileSync(path.join(dataDir, 'keyword-url-map.json'), 'utf8'));

let importedRows = [];
if (inputFile && fs.existsSync(inputFile)) {
  const raw = fs.readFileSync(inputFile, 'utf8').trim();
  if (inputFile.endsWith('.json')) {
    importedRows = JSON.parse(raw);
  } else {
    const lines = raw.split(/\r?\n/);
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const cols = lines[i].split(',');
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = (cols[idx] ?? '').trim();
      });
      importedRows.push({
        keyword: obj.keyword || obj.query || obj['top queries'] || '',
        impressions: obj.impressions ? Number(obj.impressions) : null,
        clicks: obj.clicks ? Number(obj.clicks) : null,
        ctr: obj.ctr || null,
        position: obj.position ? Number(obj.position) : null,
      });
    }
  }
}

const existingSet = new Set(existingKeywords.map((k) => k.normalizedKeyword.toLowerCase()));
const gaps = importedRows.filter((r) => r.keyword && !existingSet.has(r.keyword.toLowerCase()));

const report = [
  '# Keyword Intelligence Engine — 关键词缺口与防互抢分析报告',
  '',
  `- 运行日期：${new Date().toISOString().slice(0, 10)}`,
  `- 当前核心词库数量：${existingKeywords.length}`,
  `- 受保护规范 URL 映射数：${urlMap.length}`,
  `- 本次导入外部记录数：${importedRows.length}`,
  `- 识别新增内容缺口词数：${gaps.length}`,
  '',
  '## 核心承接 URL 防互抢映射',
  ...urlMap.map((u) => `- \`${u.canonicalUrl}\` ← **${u.primaryKeyword}**（${u.searchIntent}）`),
  '',
  gaps.length > 0
    ? `## 待评估新增词\n${gaps.map((g) => `- ${g.keyword} (Imp: ${g.impressions ?? 'N/A'}, Pos: ${g.position ?? 'N/A'})`).join('\n')}`
    : '## 外部导入状态\n- 未传入外部 GSC/Bing 导出文件（可用 `node scripts/import-keywords.mjs path/to/queries.csv` 导入真实搜索数据）。严禁在缺乏导出数据时伪造曝光、点击或排名。',
];

fs.mkdirSync(path.resolve('reports'), { recursive: true });
fs.writeFileSync(path.resolve('reports/keyword-gap-report.md'), report.join('\n') + '\n', 'utf8');
console.log(`Keyword gap report generated (${existingKeywords.length} tracked keywords, ${gaps.length} new gaps).`);
