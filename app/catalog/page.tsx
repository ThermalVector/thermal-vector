'use client';

import Link from 'next/link';
import { products } from '@/app/constants';
import {
  categories,
  getCategoryUrlById,
} from '@/app/constants/types/categoryTypes';
import ProductCard from '@/components/ui/cards/ProductCard';

// аналог - https://security.thermeyetec.com/product/

function getCategoryRu(categoryId: number) {
  return categories.find((c) => c.id === categoryId)?.ru ?? '';
}

export default function CatalogPage() {
  const productsByCategory = categories.map((category) => ({
    category,
    products: products.filter((p) => p.info.category_id === category.id),
  }));

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-6'>Каталог</h1>
      <p className='text-lg text-gray-600 mb-8 max-w-3xl'>
        Компания ThermalVector предоставляет самые современные и лучшие
        тепловизионные продукты и решения и создает более безопасные и
        эффективные условия жизни и работы.
      </p>
      {productsByCategory.map(({ category, products: categoryProducts }) => {
        const categoryUrl = getCategoryUrlById(category.id);
        return (
          <section key={category.id} className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              {category.ru}
            </h2>
            <p className='text-sm text-gray-600 mb-6'>
              {category.descriptionShort}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {categoryProducts.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={getCategoryRu(product.info.category_id)}
                  price={product.info.price}
                  description={product.info.description}
                  categorySlug={categoryUrl}
                />
              ))}
            </div>
            {categoryUrl && (
              <Link
                href={`/catalog/${categoryUrl}`}
                className='mt-6 inline-block text-gray-700 font-medium hover:text-gray-900 underline underline-offset-2'
              >
                Подробнее
              </Link>
            )}
          </section>
        );
      })}
    </div>
  );
}
