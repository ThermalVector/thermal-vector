import { products } from './products';

export const categories = [
  { value: 'all', label: 'All Categories' },
  ...Array.from(new Set(products.map(p => p.category_id))).map(category => ({
    value: category_id.toLowerCase(),
    label: category,
  })),
];

export type Category = typeof categories[number];