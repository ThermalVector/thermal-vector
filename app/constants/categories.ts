import { products } from './products';

export const categories = [
  { value: 'all', label: 'All Categories' },
  ...Array.from(new Set(products.map(p => p.category))).map(category => ({
    value: category.toLowerCase(),
    label: category,
  })),
];

export type Category = typeof categories[number];