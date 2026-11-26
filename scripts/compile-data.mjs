import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');
const brands = fs.existsSync(path.join(dataDir, 'brands-a.json'))
  ? [
      ...JSON.parse(fs.readFileSync(path.join(dataDir, 'brands-a.json'), 'utf8')),
      ...JSON.parse(fs.readFileSync(path.join(dataDir, 'brands-b.json'), 'utf8')),
    ]
  : JSON.parse(fs.readFileSync(path.join(dataDir, 'brands.json'), 'utf8'));
const clients = JSON.parse(fs.readFileSync(path.join(dataDir, 'clients.json'), 'utf8'));
if (brands.length !== 31) {
  throw new Error(`Expected 31 brands, got ${brands.length}`);
}

fs.writeFileSync(path.join(dataDir, 'brands.json'), JSON.stringify(brands, null, 2) + '\n', 'utf8');

// Derive plans.json
const plans = [];
for (const b of brands) {
  for (const p of b.plans) {
    const costPerGb = p.trafficGb && p.price ? Number((p.price / p.trafficGb).toFixed(3)) : null;
    plans.push({
      brandId: b.brandId,
      brandName: b.brandName,
      brandSlug: b.slug,
      promotionPriority: b.promotionPriority,
      dataStatus: b.dataStatus,
      hasSubscriptionLink: b.hasSubscriptionLink,
      officialClient: b.officialClient,
      thirdPartyClientSupport: b.thirdPartyClientSupport,
      ...p,
      costPerGb,
    });
  }
}
fs.writeFileSync(path.join(dataDir, 'plans.json'), JSON.stringify(plans, null, 2) + '\n', 'utf8');

// Derive test-results.json
const testResults = [];
for (const b of brands) {
  for (const ht of b.historicalTests) {
    testResults.push({
      brandId: b.brandId,
      brandName: b.brandName,
      brandSlug: b.slug,
      recordType: 'table',
      testDate: ht.testDate,
      condition: ht.condition,
      source: ht.source,
      dataStatus: ht.dataStatus,
      metrics: ht.metrics,
    });
  }
  for (const img of b.testImages) {
    testResults.push({
      brandId: b.brandId,
      brandName: b.brandName,
      brandSlug: b.slug,
      recordType: 'screenshot',
      file: img.file,
      testedAt: img.testedAt,
      backend: img.backend,
      protocol: img.protocol,
      dataStatus: img.dataStatus,
      caption: img.caption,
    });
  }
}
fs.writeFileSync(path.join(dataDir, 'test-results.json'), JSON.stringify(testResults, null, 2) + '\n', 'utf8');

// Derive client-compatibility.json
const compatibility = brands.map((b) => ({
  brandId: b.brandId,
  brandName: b.brandName,
  slug: b.slug,
  hasSubscriptionLink: b.hasSubscriptionLink,
  officialClient: b.officialClient,
  thirdPartyClientSupport: b.thirdPartyClientSupport,
  compatibleClients: b.compatibleClients,
  note:
    b.thirdPartyClientSupport === false
      ? '仅支持官方专属客户端，不提供第三方订阅链接（严禁标注 Clash/Shadowrocket 兼容）'
      : b.thirdPartyClientSupport === null
        ? '第三方客户端兼容性待核实'
        : '支持第三方通用订阅导入',
}));
fs.writeFileSync(path.join(dataDir, 'client-compatibility.json'), JSON.stringify(compatibility, null, 2) + '\n', 'utf8');

console.log(`Compiled: ${brands.length} brands, ${plans.length} plans, ${testResults.length} test records, ${clients.length} core clients.`);
