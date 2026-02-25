'use client';

import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  price: string;
  description?: string;
};

export default function ProductCard({
  id,
  name,
  category,
  price,
  description,
}: ProductCardProps) {
  return (
    <Card className='hover:shadow-xl transition-shadow'>
      <CardBody className='p-0'>
        <Link href={`/catalog/${id}`} className='block'>
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
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-500'>{category}</span>
              <span className='text-xl font-bold text-blue-600'>{price}</span>
            </div>
          </div>
        </Link>
      </CardBody>
      <CardFooter className='border-t dark:border-gray-700'>
        <Button
          as={Link}
          href={`/catalog/${id}`}
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
