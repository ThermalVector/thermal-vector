import type { ProductType, productFeature } from '@/app/constants/types/productTypes';

/** Flatten nested features object into path -> string (only string values). */
export function flattenFeatures(
  obj: Record<string, unknown>,
  prefix = ''
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      out[path] = value;
    } else if (
      value != null &&
      typeof value === 'object' &&
      !Array.isArray(value)
    ) {
      Object.assign(
        out,
        flattenFeatures(value as Record<string, unknown>, path)
      );
    }
  }
  return out;
}

/** Get value at dot path from features, or undefined if missing. */
export function getFeatureValueAtPath(
  features: productFeature,
  path: string
): string | undefined {
  const parts = path.split('.');
  let current: unknown = features;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

/** All unique feature paths across the given products, sorted. */
export function getAllFeaturePaths(products: ProductType[]): string[] {
  const set = new Set<string>();
  for (const p of products) {
    const flat = flattenFeatures(
      p.info.features as unknown as Record<string, unknown>
    );
    Object.keys(flat).forEach((k) => set.add(k));
  }
  return Array.from(set).sort();
}

/** Feature paths for a single product, sorted. */
export function getProductFeaturePaths(product: ProductType): string[] {
  const flat = flattenFeatures(
    product.info.features as unknown as Record<string, unknown>
  );
  return Object.keys(flat).sort();
}

export const FEATURE_SECTION_LABELS: Record<string, string> = {
  item: 'Модуль',
  imageEffect: 'Изображение',
  general: 'Общие',
  interface: 'Интерфейс',
  measurementTemperature: 'Температура',
  network: 'Сеть',
  opticalModule: 'Оптика',
  ptz: 'PTZ',
  videoAudio: 'Видео/аудио',
  smartFunction: 'Умные функции',
};

/** Sub-key label only (e.g. "item.resolution" -> "Resolution"). */
export function keyLabelFromPath(path: string): string {
  const parts = path.split('.');
  const key = parts.length > 1 ? parts.slice(1).join('.') : path;
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/** Group feature paths by section, ordered by FEATURE_SECTION_LABELS then rest. */
export function getFeaturePathsBySection(
  paths: string[]
): [string, string[]][] {
  const sectionOrder = Object.keys(FEATURE_SECTION_LABELS);
  const bySection = new Map<string, string[]>();
  for (const path of paths) {
    const section = path.split('.')[0];
    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section)!.push(path);
  }
  const ordered: [string, string[]][] = [];
  for (const section of sectionOrder) {
    const group = bySection.get(section);
    if (group?.length) ordered.push([section, group.sort()]);
  }
  for (const [section, group] of bySection) {
    if (!sectionOrder.includes(section)) ordered.push([section, group.sort()]);
  }
  return ordered;
}
