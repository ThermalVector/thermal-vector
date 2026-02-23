import ComparatorContent from './ComparatorContent';
import Link from 'next/link';

export const metadata = {
  title: 'Сравнение товаров | Thermal Vector',
  description: 'Сравните товары Thermal Vector по характеристикам и ценам',
};

export default function ComparatorPage() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <ComparatorContent />
    </div>
  );
}
