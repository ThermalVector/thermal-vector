'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Button,
} from '@heroui/react';
import {
  ArrowPathIcon,
  ScaleIcon,
  TrashIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/layout/Container';
import { products, type Product } from '@/app/constants/products';

export default function ComparatorContent() {
  const [selectedProducts, setSelectedProducts] = useState<(Product | null)[]>([
    null,
    null,
    null,
  ]);
  const [compareStarted, setCompareStarted] = useState(false);

  const handleProductSelect = (index: number, productId: string) => {
    const product = products.find((p) => p.id === parseInt(productId)) || null;
    const newSelected = [...selectedProducts];
    newSelected[index] = product;
    setSelectedProducts(newSelected);
  };

  const handleRemoveProduct = (index: number) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = null;
    setSelectedProducts(newSelected);
  };

  const handleCompare = () => {
    if (selectedProducts.some((p) => p !== null)) {
      setCompareStarted(true);
    }
  };

  const handleReset = () => {
    setSelectedProducts([null, null, null]);
    setCompareStarted(false);
  };

  const hasSelection = selectedProducts.some((p) => p !== null);

  return (
    <>
      {/* Hero Section - Matching screenshot style */}
      <section className='bg-[#1e1e1e] text-white'>
        <Container className='py-20'>
          <div className='max-w-3xl pl-4 md:pl-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Сравнение товаров
            </h1>
            <p className='text-xl text-gray-300 max-w-2xl'>
              Найдите идеальное решение для ваших задач
            </p>
          </div>
        </Container>
      </section>

      {/* Selection Section - White card on light background */}
      <section className='py-12 bg-gray-50'>
        <Container>
          <div className='max-w-5xl mx-auto'>
            <Card className='border-none shadow-xl rounded-2xl overflow-hidden'>
              <CardBody className='p-8'>
                <div className='flex items-center gap-3 mb-8'>
                  <div className='p-3 bg-blue-100 rounded-xl'>
                    <ScaleIcon className='w-6 h-6 text-blue-600' />
                  </div>
                  <h2 className='text-2xl font-semibold text-gray-900'>
                    Выберите товары для сравнения
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                  {[0, 1, 2].map((index) => (
                    <div key={index} className='space-y-3'>
                      <div className='flex items-center justify-between'>
                        <label className='text-sm font-medium text-gray-600'>
                          Товар {index + 1}
                        </label>
                        {selectedProducts[index] && (
                          <button
                            onClick={() => handleRemoveProduct(index)}
                            className='text-gray-400 hover:text-red-500 transition-colors'
                            aria-label={`Remove product ${index + 1}`}
                          >
                            <TrashIcon className='w-4 h-4' />
                          </button>
                        )}
                      </div>

                      <Select
                        aria-label={`Select product ${index + 1}`}
                        placeholder={`Выберите товар ${index + 1}`}
                        selectedKeys={
                          selectedProducts[index]
                            ? [selectedProducts[index]?.id.toString()]
                            : []
                        }
                        onSelectionChange={(keys) => {
                          const value = Array.from(keys)[0];
                          if (value)
                            handleProductSelect(index, value.toString());
                        }}
                        className='w-full'
                        size='lg'
                        radius='lg'
                        variant='bordered'
                        scrollRef={null}
                        selectorIcon={
                          <ChevronDownIcon className='w-5 h-5 text-gray-500' />
                        }
                        classNames={{
                          base: 'w-full',
                          trigger:
                            'bg-white border-2 border-gray-200 hover:border-blue-500 transition-colors rounded-xl',
                          value: 'text-gray-900 font-medium pl-3',
                          innerWrapper: 'px-3',
                          listbox: 'bg-white rounded-xl',
                          popoverContent: [
                            'bg-white border border-gray-200 shadow-xl rounded-xl',
                            'max-h-[300px] overflow-y-auto', // Fixed height with scroll
                          ].join(' '),
                          selectorIcon: 'hidden',
                          listboxWrapper:
                            'px-4 py-3 data-[hover=true]:bg-gray-50 data-[selectable=true]:focus:bg-gray-50 rounded-lg',
                        }}
                        popoverProps={{
                          shouldBlockScroll: false, // Allow scroll in popover
                          placement: 'bottom',
                          offset: 5,
                        }}
                      >
                        {products
                          .filter(
                            (p) =>
                              !selectedProducts.includes(p) ||
                              selectedProducts[index]?.id === p.id,
                          )
                          .map((product) => (
                            <SelectItem
                              key={product.id}
                              textValue={product.name}
                              // Remove any default icon classes
                              className='data-[selected=true]:bg-blue-50 data-[selected=true]:text-blue-700'
                            >
                              <div className='flex flex-col'>
                                <span className='font-medium text-gray-900'>
                                  {product.name}
                                </span>
                                <span className='text-sm text-gray-500'>
                                  {product.category} • {product.price}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                      </Select>

                      {selectedProducts[index] && (
                        <div className='mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl'>
                          <p className='text-sm font-medium text-blue-900'>
                            {selectedProducts[index]?.name}
                          </p>
                          <p className='text-xs text-blue-700 mt-1'>
                            {selectedProducts[index]?.category} •{' '}
                            {selectedProducts[index]?.price}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  {/* Сравнить button - Darker */}
                  <Button
                    size='lg'
                    className='text-lg font-medium bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white transition-colors px-8 shadow-md hover:shadow-lg border-none'
                    onPress={handleCompare}
                    isDisabled={!hasSelection}
                  >
                    Сравнить
                  </Button>

                  {/* Сбросить button - Lighter dark */}
                  <Button
                    size='lg'
                    className='text-lg font-medium bg-[#3a3a3a] hover:bg-[#4a4a4a] text-gray-200 transition-colors px-8 shadow-md hover:shadow-lg border-none'
                    onPress={handleReset}
                    isDisabled={!hasSelection}
                  >
                    Сбросить
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comparison Results */}
      {compareStarted && hasSelection && (
        <section className='py-12 bg-gray-50'>
          <Container>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-8 text-center'>
                Результаты сравнения
              </h2>

              <Card className='border-none shadow-xl rounded-2xl overflow-hidden'>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='bg-gray-50 border-b border-gray-200'>
                        <th className='p-6 text-left font-semibold text-gray-600 w-48'>
                          Характеристика
                        </th>
                        {selectedProducts.map(
                          (product, index) =>
                            product && (
                              <th
                                key={index}
                                className='p-6 text-left font-semibold text-gray-900 min-w-[200px]'
                              >
                                {product.name}
                              </th>
                            ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Price row */}
                      <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                        <td className='p-6 font-medium text-gray-600'>Цена</td>
                        {selectedProducts.map(
                          (product, index) =>
                            product && (
                              <td key={index} className='p-6'>
                                <span className='text-xl font-bold text-blue-600'>
                                  {product.price}
                                </span>
                              </td>
                            ),
                        )}
                      </tr>

                      {/* Category row */}
                      <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                        <td className='p-6 font-medium text-gray-600'>
                          Категория
                        </td>
                        {selectedProducts.map(
                          (product, index) =>
                            product && (
                              <td key={index} className='p-6 text-gray-700'>
                                {product.category}
                              </td>
                            ),
                        )}
                      </tr>

                      {/* Description row */}
                      <tr className='border-b border-gray-100 hover:bg-gray-50/50'>
                        <td className='p-6 font-medium text-gray-600'>
                          Описание
                        </td>
                        {selectedProducts.map(
                          (product, index) =>
                            product && (
                              <td key={index} className='p-6 text-gray-700'>
                                {product.description}
                              </td>
                            ),
                        )}
                      </tr>

                      {/* Features row */}
                      <tr className='hover:bg-gray-50/50'>
                        <td className='p-4 sm:p-6 font-medium text-gray-600'>
                          Особенности
                        </td>
                        {selectedProducts.map(
                          (product, index) =>
                            product && (
                              <td key={index} className='p-4 sm:p-6'>
                                <ul className='space-y-2'>
                                  {product.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className='flex items-start gap-2 text-sm text-gray-600'
                                    >
                                      <span className='text-blue-500 font-bold text-lg leading-none'>
                                        •
                                      </span>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            ),
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Action buttons after comparison */}
                <div className='p-6 bg-gray-50 border-t border-gray-200'>
                  <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none'>
                    <Button
                      size='lg'
                      className='w-full text-lg font-medium bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white transition-colors px-4 py-4 sm:py-3 shadow-md hover:shadow-lg border-none'
                      onPress={() => setCompareStarted(false)}
                    >
                      Новое сравнение
                    </Button>
                    <Button
                      as={Link}
                      href='/catalog'
                      size='lg'
                      className='w-full text-lg font-medium bg-[#333333] hover:bg-[#404040] text-gray-200 transition-colors px-4 py-4 sm:py-3 shadow-md hover:shadow-lg border-none text-center'
                    >
                      В каталог
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      )}

      {/* Placeholder when no comparison */}
      {!compareStarted && (
        <section className='py-12 bg-gray-50'>
          <Container>
            <Card className='border-none shadow-xl rounded-2xl p-12 max-w-2xl mx-auto'>
              <div className='text-center'>
                <div className='inline-flex p-4 bg-blue-100 rounded-full mb-6'>
                  <ArrowPathIcon className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Начните сравнение
                </h3>
                <p className='text-gray-600 mb-8'>
                  Выберите до трех товаров из выпадающих списков выше и нажмите
                  &quot;Сравнить&quot;
                </p>
                <Button
                  as={Link}
                  href='/catalog'
                  size='lg'
                  className='text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors'
                  variant='light'
                >
                  Перейти в каталог →
                </Button>
              </div>
            </Card>
          </Container>
        </section>
      )}
    </>
  );
}
