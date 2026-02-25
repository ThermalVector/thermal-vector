import { notFound } from 'next/navigation';
import { getProductById } from '@/app/constants/products';
import ProductClient from './ProductClient';

export async function generateStaticParams() {
  const { products } = await import('@/app/constants/products');
  return products.map((product) => ({
    itemId: product.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;
  const product = getProductById(parseInt(itemId));

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Thermal Vector`,
    description: product.description,
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params; 
  const product = getProductById(parseInt(itemId));

  // If product doesn't exist, show 404
  if (!product) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12'>
      <div className='container mx-auto px-4'>
        <ProductClient product={product} />
      </div>
    </div>
  );
}
