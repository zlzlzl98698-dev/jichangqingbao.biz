import type { SubtopicEntry } from '../topics-commercial';
import type { SectionBlock, TopicTable, TopicStep, TopicClusterGroup, TopicCta } from '../../components/seo/TopicPageTemplate.astro';
import type { FaqItem } from '../../components/seo/FaqSection.astro';

export interface TopicEnrichment {
  sections?: SectionBlock[];
  tables?: TopicTable[];
  steps?: TopicStep[];
  clusters?: TopicClusterGroup[];
  cta?: TopicCta;
  faqs?: FaqItem[];
  extraLinks?: { label: string; href: string; note?: string }[];
}

/** Merge verified secondary topic enrichments onto a SubtopicEntry without duplicating headings or FAQs. */
export function mergeTopicEnrichment(
  entry: SubtopicEntry,
  patch?: TopicEnrichment,
  dynamicTables: TopicTable[] = []
): SubtopicEntry {
  const existingHeadings = new Set(entry.sections.map((s) => s.heading));
  const extraSections = (patch?.sections ?? []).filter((s) => !existingHeadings.has(s.heading));

  const existingFaqQs = new Set(entry.faqs.map((f) => f.q));
  const extraFaqs = (patch?.faqs ?? []).filter((f) => !existingFaqQs.has(f.q));

  const existingHrefs = new Set(entry.relatedLinks.map((l) => l.href));
  const extraLinks = (patch?.extraLinks ?? []).filter((l) => !existingHrefs.has(l.href));

  return {
    ...entry,
    sections: [...entry.sections, ...extraSections],
    tables: [...dynamicTables, ...(patch?.tables ?? []), ...(entry.tables ?? [])],
    steps: patch?.steps ?? entry.steps,
    clusters: patch?.clusters ?? entry.clusters,
    cta: patch?.cta ?? entry.cta,
    faqs: [...entry.faqs, ...extraFaqs],
    relatedLinks: [...entry.relatedLinks, ...extraLinks],
  };
}
