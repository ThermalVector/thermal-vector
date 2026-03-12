'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type BackToCatalogLinkProps = {
  href: string;
  children?: React.ReactNode;
};

export default function BackToCatalogLink({
  href,
  children = 'В каталог',
}: BackToCatalogLinkProps) {
  return (
    <Button
      as={Link}
      href={href}
      variant='light'
      startContent={<ArrowLeftIcon className='w-4 h-4' />}
      className='-ml-2 mb-6 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
    >
      {children}
    </Button>
  );
}
