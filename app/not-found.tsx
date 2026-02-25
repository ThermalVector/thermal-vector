'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Section from '@/components/ui/layout/Section';
import Container from '@/components/ui/layout/Container';
import SearchSuggestion from '@/components/ui/SearchSuggestion';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <div className='absolute inset-0 overflow-hidden opacity-10'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl'></div>
      </div>

      <Section className='relative z-10'>
        <Container className='py-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'>
              404
            </h1>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Страница не найдена
            </h2>

            <div className='flex justify-center mb-8'>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
            </div>

            {/* Suggestions */}
            <div className='mb-12'>
              <h3 className='text-lg font-semibold mb-4 text-gray-300'>
                Вот несколько полезных ссылок:
              </h3>
              <div className='flex flex-wrap justify-center gap-4'>
                <Link
                  href='/catalog'
                  className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white'
                >
                  Каталог
                </Link>
                <Link
                  href='/about'
                  className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white'
                >
                  О нас
                </Link>
                <Link
                  href='/comparator'
                  className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white'
                >
                  Сравнение товаров
                </Link>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                as={Link}
                href='/'
                color='primary'
                size='lg'
                className='text-lg'
                startContent={<HomeIcon className='w-5 h-5' />}
              >
                На главную
              </Button>

            </div>

            <SearchSuggestion />
          </div>
        </Container>
      </Section>

    </div>
  );
}
