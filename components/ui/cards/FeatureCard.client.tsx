'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';
import Link from 'next/link';
import { ICONS, type IconName } from '@/app/constants/icons';

type FeatureCardProps = {
  iconName: IconName;
  title: string;
  description: string;
  href: string;
};

export default function FeatureCardClient({
  iconName,
  title,
  description,
  href,
}: FeatureCardProps) {
  const Icon = ICONS[iconName];

  return (
    <Card
      className='hover:shadow-xl transition-shadow'
      isPressable
      as={Link}
      href={href}
    >
      <CardHeader className='flex gap-3'>
        <Icon className='w-8 h-8 text-blue-500' />
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
          {title}
        </h3>
      </CardHeader>
      <CardBody>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      </CardBody>
    </Card>
  );
}
