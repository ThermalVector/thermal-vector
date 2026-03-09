import { products } from './products';
import { ProductType } from './types/productTypes';
import { categories as categoriesFromTypes } from './types/categoryTypes';

// Helper functions
export const getProductById = (id: number): ProductType | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category_id: number): ProductType[] => {
  return products.filter(
    (product) => product.info.category_id === category_id
  );
};

export const getCategories = () => {
  return categoriesFromTypes;
};

export const getFeaturedProducts = (count: number = 3): ProductType[] => {
  return products.slice(0, count);
};

export const categoryOptions = [
  { value: 'all', label: 'All Categories' },
  ...categoriesFromTypes.map((category) => ({
    value: String(category.id),
    label: category.ru,
  })),
];

export type CategoryOption = (typeof categoryOptions)[number];