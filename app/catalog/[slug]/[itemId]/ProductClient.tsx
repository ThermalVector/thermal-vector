'use client';

import { Card, CardBody, Button } from '@heroui/react';
import { Fragment } from 'react';
import type { ProductType } from '@/app/constants/types/productTypes';
import { categories } from '@/app/constants/types/categoryTypes';
import BackToCatalogLink from '@/components/ui/BackToCatalogLink';
import {
  getProductFeaturePaths,
  getFeaturePathsBySection,
  getFeatureValueAtPath,
  FEATURE_SECTION_LABELS,
  keyLabelFromPath,
} from '@/lib/productFeatureUtils';

type ProductClientProps = {
  product: ProductType;
  categorySlug: string;
};

export default function ProductClient({
  product,
  categorySlug,
}: ProductClientProps) {
  return (
    <>
      <BackToCatalogLink href={`/catalog/${categorySlug}`}>
        В категорию
      </BackToCatalogLink>

      {/* Product details — HeroUI Card to match catalog ProductCard */}
      <Card className='overflow-hidden transition-shadow'>
        <CardBody className='p-0'>
          <div className='md:flex'>
            {/* Product image — same placeholder as ProductCard */}
            <div className='md:w-1/3'>
              <div className='relative h-80 md:h-full bg-gray-200 flex items-center justify-center text-gray-400'>
                {product.info.imageUrl ? (
                  <img
                    src={product.info.imageUrl}
                    alt={product.name}
                    className='w-full h-full object-contain p-4'
                  />
                ) : (
                  <>Изображение {product.id}</>
                )}
              </div>
            </div>

            {/* Product info — catalog palette: blue-600 price/category, gray text */}
            <div className='md:w-2/3 p-6 md:p-8'>
              <div className='mb-4'>
                <span className='text-sm text-blue-600 font-semibold uppercase tracking-wide'>
                  {categories.find((c) => c.id === product.info.category_id)?.ru ?? ''}
                </span>
                <h1 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>
                  {product.name}
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
                  {product.info.description}
                </p>
              </div>

              <div className='mb-6'>
                <span className='text-3xl font-bold text-blue-600'>
                  {product.info.price}
                </span>
              </div>

              <div className='space-y-4'>
                <Button
                  color='primary'
                  size='lg'
                  className='w-full text-lg'
                  variant='flat'
                >
                  Скачать документацию
                </Button>
              </div>

            </div>
          </div>
        </CardBody>
      </Card>

      {/* Product specs table — same design as comparator */}
      <div className='mt-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
          Характеристики
        </h2>
        <Card className='border-none shadow-xl rounded-2xl overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-50 border-b border-gray-200'>
                  <th className='p-6 text-left font-semibold text-gray-600 w-48'>
                    Характеристика
                  </th>
                  <th className='p-6 text-left font-semibold text-gray-900 min-w-[200px]'>
                    Значение
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                  <td className='p-6 font-medium text-gray-600'>Цена</td>
                  <td className='p-6'>
                    <span className='text-xl font-bold text-blue-600'>
                      {product.info.price}
                    </span>
                  </td>
                </tr>
                <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                  <td className='p-6 font-medium text-gray-600'>Категория</td>
                  <td className='p-6 text-gray-700'>
                    {categories.find((c) => c.id === product.info.category_id)?.ru ?? ''}
                  </td>
                </tr>
                <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                  <td className='p-6 font-medium text-gray-600'>Описание</td>
                  <td className='p-6 text-gray-700'>
                    {product.info.description}
                  </td>
                </tr>
                {getFeaturePathsBySection(getProductFeaturePaths(product)).map(
                  ([section, paths]) => {
                    const sectionLabel =
                      FEATURE_SECTION_LABELS[section] ?? section;
                    return (
                      <Fragment key={section}>
                        <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                          <td
                            colSpan={2}
                            className='p-6 font-semibold text-gray-900'
                          >
                            {sectionLabel}
                          </td>
                        </tr>
                        {paths.map((path) => {
                          const value = getFeatureValueAtPath(
                            product.info.features,
                            path
                          );
                          return (
                            <tr
                              key={path}
                              className='border-b border-gray-100 hover:bg-gray-50/50'
                            >
                              <td className='p-4 sm:p-6 pl-8 font-medium text-gray-600'>
                                {keyLabelFromPath(path)}
                              </td>
                              <td className='p-4 sm:p-6 text-gray-700'>
                                {value ?? '—'}
                              </td>
                            </tr>
                          );
                        })}
                      </Fragment>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
