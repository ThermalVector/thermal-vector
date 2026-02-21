'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { Product } from '@/app/constants';

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({ product }: ProductClientProps) {
  return (
    <>
      {/* Back button */}
      <Link
        href='/catalog'
        className='inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors'
      >
        <ArrowLeftIcon className='w-4 h-4' />
        Back to Catalog
      </Link>

      {/* Product details */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
        <div className='md:flex'>
          {/* Product image */}
          <div className='md:w-1/2'>
            <div className='bg-gray-200 h-96 md:h-full flex items-center justify-center text-gray-400'>
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='w-full h-full object-cover'
                />
              ) : (
                `Product Image ${product.id}`
              )}
            </div>
          </div>

          {/* Product info */}
          <div className='md:w-1/2 p-8'>
            <div className='mb-4'>
              <span className='text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide'>
                {product.category}
              </span>
              <h1 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>
                {product.name}
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 mb-6'>
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className='mb-8'>
              <span className='text-3xl font-bold text-blue-600'>
                {product.price}
              </span>
            </div>

            {/* Actions */}
            <div className='space-y-4'>
              <Button color='primary' size='lg' className='w-full text-lg'>
                Add to Cart
              </Button>

              <Button
                variant='bordered'
                size='lg'
                className='w-full text-lg border-gray-300 dark:border-gray-600'
              >
                Download Preview
              </Button>
            </div>

            {/* Product details */}
            <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
              <h2 className='text-lg font-semibold mb-4'>Product Details</h2>
              <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                {(
                  product.features || [
                    'High-resolution vector file',
                    'Compatible with all major design software',
                    'Instant download after purchase',
                    'Commercial use license included',
                  ]
                ).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
