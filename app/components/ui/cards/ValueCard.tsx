import { Card, CardBody } from '@heroui/react';
import { ComponentType } from 'react';

interface ValueCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <Card className='border-none shadow-md'>
      <CardBody className='text-center p-6'>
        <Icon className='w-12 h-12 text-blue-600 mx-auto mb-4' />
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      </CardBody>
    </Card>
  );
}
