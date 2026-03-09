'use client';

import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  price: string;
  description?: string;
  /** Category URL slug for product link, e.g. "thermal-cores". When set, link is /catalog/{categorySlug}/{id} */
  categorySlug?: string;
};

export default function ProductCard({
  id,
  name,
  category,
  price,
  description,
  categorySlug,
}: ProductCardProps) {
  const productHref = categorySlug
    ? `/catalog/${categorySlug}/${id}`
    : `/catalog/${id}`;
  return (
    <Card className='hover:shadow-xl transition-shadow'>
      <CardBody className='p-0'>
        <Link href={productHref} className='block'>
          <div className='relative h-48 bg-gray-200'>
            <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
              Изображение {name}
            </div>
          </div>
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>{name}</h3>
            <div className='h-10 mb-2 overflow-hidden'>
              <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>
                {description ?? '\u00A0'}
              </p>
            </div>
          </div>
        </Link>
      </CardBody>
      <CardFooter className='border-t dark:border-gray-700'>
        <Button
          as={Link}
          href={productHref}
          color='primary'
          className='w-full'
          size='md'
        >
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}
