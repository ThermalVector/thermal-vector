'use client';

import { Card, CardBody, Button } from '@heroui/react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { Product } from '@/app/constants';

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({ product }: ProductClientProps) {
  return (
    <>
      {/* Back to catalog */}
      <Button
        as={Link}
        href='/catalog'
        variant='light'
        startContent={<ArrowLeftIcon className='w-4 h-4' />}
        className='-ml-2 mb-6 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
      >
        Назад в каталог
      </Button>

      {/* Product details — HeroUI Card to match catalog ProductCard */}
      <Card className='overflow-hidden transition-shadow'>
        <CardBody className='p-0'>
          <div className='md:flex'>
            {/* Product image — same placeholder as ProductCard */}
            <div className='md:w-1/2'>
              <div className='relative h-96 md:h-full bg-gray-200 flex items-center justify-center text-gray-400'>
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <>Изображение {product.id}</>
                )}
              </div>
            </div>

            {/* Product info — catalog palette: blue-600 price/category, gray text */}
            <div className='md:w-1/2 p-6 md:p-8'>
              <div className='mb-4'>
                <span className='text-sm text-blue-600 font-semibold uppercase tracking-wide'>
                  {product.category}
                </span>
                <h1 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>
                  {product.name}
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
                  {product.description}
                </p>
              </div>

              <div className='mb-6'>
                <span className='text-3xl font-bold text-blue-600'>
                  {product.price}
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

              <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
                <h2 className='text-lg font-semibold mb-4'>Детали продукта</h2>
                <ul className='space-y-2 text-gray-600 dark:text-gray-300 text-sm'>
                  {product.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
