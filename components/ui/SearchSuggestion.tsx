'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { products } from '@/app/constants/products';

export default function SearchSuggestion() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const sortedProductNames = useMemo(
    () =>
      [...products]
        .map((p) => ({ id: p.id, name: p.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const filteredProductNames = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedProductNames;
    return sortedProductNames.filter(({ name }) =>
      name.toLowerCase().includes(q)
    );
  }, [sortedProductNames, query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='mt-12 pt-8 border-t border-gray-700'>
      <p className='text-gray-400 mb-4'>
        Ищете что-то конкретное? Попробуйте поиск по каталогу:
      </p>
      <div className='max-w-md mx-auto'>
        <div className='relative' ref={containerRef}>
          <input
            type='text'
            placeholder='Поиск товаров...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
            onFocus={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
          />
          <MagnifyingGlassIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
          {isOpen && (
            <ul className='absolute z-10 top-full left-0 right-0 mt-1 py-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
              {filteredProductNames.length === 0 ? (
                <li className='px-4 py-2 text-gray-400'>Ничего не найдено</li>
              ) : (
                filteredProductNames.map(({ id, name }) => (
                  <li key={id}>
                    <Link
                      href={`/catalog/${id}`}
                      className='block px-4 py-2 text-white hover:bg-gray-700 transition-colors'
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
