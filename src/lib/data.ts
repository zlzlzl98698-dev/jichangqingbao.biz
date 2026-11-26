import brandsData from '../data/brands.json';
import plansData from '../data/plans.json';
import testsData from '../data/test-results.json';
import eventsData from '../data/intelligence-events.json';
import clientsData from '../data/clients.json';
import affiliateData from '../data/affiliate-links.json';
import conflictsData from '../data/data-conflicts.json';
import sourcesData from '../data/sources.json';
import keywordsData from '../data/keywords.json';
import geoQuestionsData from '../data/geo-questions.json';

export type Brand = (typeof brandsData)[number];
export type Plan = (typeof plansData)[number];
export type IntelEvent = (typeof eventsData)[number];
export type ClientApp = (typeof clientsData)[number];
export type DataConflict = (typeof conflictsData)[number];

export const brands = brandsData as Brand[];
export const plans = plansData as Plan[];
export const testResults = testsData;
export const intelligenceEvents = eventsData as IntelEvent[];
export const clients = clientsData as ClientApp[];
export const affiliateRegistry = affiliateData;
export const dataConflicts = conflictsData as DataConflict[];
export const sources = sourcesData;
export const keywords = keywordsData;
export const geoQuestions = geoQuestionsData;

export const SITE_META = {
  name: '机场情报',
  englishName: 'Airport Intelligence',
  domain: 'jichangqingbao.biz',
  url: 'https://jichangqingbao.biz',
  lastUpdated: '2026-11-26',
  verifiedSnapshotDate: '2026-10-19',
};

/**
 * Optional static search-engine ownership verification tokens rendered into <head> at build time.
 * Leave empty until official platform codes are supplied; never fabricate placeholder codes.
 */
export const SITE_VERIFICATION = {
  google: import.meta.env.PUBLIC_GOOGLE_VERIFICATION || '',
  bing: import.meta.env.PUBLIC_BING_VERIFICATION || '',
  shenma: import.meta.env.PUBLIC_SHENMA_VERIFICATION || '',
  baidu: import.meta.env.PUBLIC_BAIDU_VERIFICATION || '',
};

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Normalize internal engineering filenames into readable editorial provenance labels for public HTML. */
export function formatSourceLabel(raw?: string): string {
  if (!raw) return '';
  return raw
    .replaceAll('32家机场品牌清单.txt', '核实品牌主清单')
    .replaceAll('光速云品牌信息.txt', '光速云核实档案')
    .replaceAll('第三方代理客户端.txt', '第三方客户端资料')
    .replaceAll('机场品牌图表样式.txt', '技术指标规范')
    .replaceAll('speedtest-manifest.json', '节点测速实测归档库')
    .replaceAll('data-conflicts.json', '字段冲突审计档案')
    .replaceAll('affiliate-links.json', '官方入口核验档案')
    .replaceAll('intelligence-events.json', '品牌动态追踪日志')
    .replaceAll('test-results.json', '节点测试报告档案')
    .replaceAll('brands.json', '品牌实体数据库')
    .replaceAll('plans.json', '套餐报价数据库')
    .replaceAll('clients.json', '客户端兼容档案')
    .replaceAll('sources.json', '资料来源台账')
    .replaceAll('src/content/articles/*.md', '站内长尾技术指南库')
    .replaceAll('src/content/reviews/', '独立品牌评测档案库');
}

export function getAffiliateEntry(slug: string) {
  return (affiliateData.links as Record<string, (typeof affiliateData.links)['guangsuyun']>)[slug];
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.promotionPriority <= 11).sort((a, b) => a.promotionPriority - b.promotionPriority);
}

export function getBrandsSortedByPriority(): Brand[] {
  return [...brands].sort((a, b) => a.promotionPriority - b.promotionPriority);
}

export function getEntryPlan(brand: Brand) {
  const monthlyPlans = brand.plans.filter((p) => p.billingCycle === '月付');
  const annualPlans = brand.plans.filter((p) => p.billingCycle === '年付');
  const sortedAnnual = [...annualPlans].sort((a, b) => (a.monthlyEquivalent ?? 999) - (b.monthlyEquivalent ?? 999));
  const sortedMonthly = [...monthlyPlans].sort((a, b) => a.price - b.price);
  return {
    cheapestMonthly: sortedMonthly[0] ?? null,
    cheapestAnnual: sortedAnnual[0] ?? null,
    hasNoExpiry: brand.plans.some((p) => p.billingCycle === '一次性付费'),
  };
}

export function getStatusBadgeStyle(status: string): { bg: string; text: string; dot: string } {
  switch (status) {
    case '独立实测':
    case '暂无已核实异常记录':
    case '历史实测已归档':
      return { bg: 'bg-teal-50 border-teal-200', text: 'text-teal-800', dot: 'bg-teal-600' };
    case '历史测试资料':
    case '品牌方提供':
    case '第三方来源':
      return { bg: 'bg-slate-100 border-slate-200', text: 'text-slate-700', dot: 'bg-slate-500' };
    case '存在待核实信息':
    case '待核实':
      return { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' };
    case '来源冲突':
    case '已确认服务异常':
    case '已确认停止运营':
      return { bg: 'bg-red-50 border-red-200', text: 'text-red-800', dot: 'bg-red-600' };
    default:
      return { bg: 'bg-slate-100 border-slate-200', text: 'text-slate-700', dot: 'bg-slate-400' };
  }
}

// Dynamic Vite/Astro asset loaders for optimized astro:assets Image rendering
const logoModules = import.meta.glob<{ default: ImageMetadata }>('../assets/logos/*.{png,jpg,jpeg,webp}', { eager: true });
const speedtestModules = import.meta.glob<{ default: ImageMetadata }>('../assets/speedtests/*.{png,jpg,jpeg,webp}', { eager: true });
const lightspeedModules = import.meta.glob<{ default: ImageMetadata }>('../assets/lightspeed/*.{png,jpg,jpeg,webp}', { eager: true });

export function resolveLogoImage(filename: string | null): ImageMetadata | null {
  if (!filename) return null;
  const key = `../assets/logos/${filename}`;
  return logoModules[key]?.default ?? null;
}

export function resolveEvidenceImage(relPath: string): ImageMetadata | null {
  if (relPath.startsWith('speedtests/')) {
    const name = relPath.slice('speedtests/'.length);
    return speedtestModules[`../assets/speedtests/${name}`]?.default ?? null;
  }
  if (relPath.startsWith('lightspeed/')) {
    const name = relPath.slice('lightspeed/'.length);
    return lightspeedModules[`../assets/lightspeed/${name}`]?.default ?? null;
  }
  return null;
}
