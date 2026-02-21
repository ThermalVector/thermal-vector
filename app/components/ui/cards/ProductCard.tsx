'use client';

import { Card, CardBody, CardFooter, Button } from '@heroui/react';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: string;
  onViewDetails?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  onViewDetails,
}: ProductCardProps) {
  return (
    <Card className='hover:shadow-xl transition-shadow' isPressable>
      <CardBody className='p-0'>
        <div className='relative h-48 bg-gray-200'>
          <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
            Product Image
          </div>
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2'>{name}</h3>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-500'>{category}</span>
            <span className='text-xl font-bold text-blue-600'>{price}</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className='border-t dark:border-gray-700'>
        <Button
          color='primary'
          className='w-full'
          size='md'
          onPress={() => onViewDetails?.(id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
