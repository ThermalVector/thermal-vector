import { notFound } from 'next/navigation';
import { getProductById } from '@/app/constants/productMethods';
import { getCategoryIdByUrl } from '@/app/constants/types/categoryTypes';
import ProductClient from './ProductClient';

export async function generateStaticParams() {
  const { products: productsList } = await import('@/app/constants/products');
  const { getCategoryUrlById } = await import(
    '@/app/constants/types/categoryTypes'
  );
  return productsList
    .map((product) => {
      const slug = getCategoryUrlById(product.info.category_id);
      if (!slug) return null;
      return { slug, itemId: product.id.toString() };
    })
    .filter((p): p is { slug: string; itemId: string } => p !== null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>;
}) {
  const { slug, itemId } = await params;
  const categoryId = getCategoryIdByUrl(slug);
  if (categoryId === undefined) return { title: 'Not Found' };
  const product = getProductById(parseInt(itemId));
  if (!product || product.info.category_id !== categoryId) {
    return { title: 'Not Found' };
  }
  return {
    title: `${product.name} | Thermal Vector`,
    description: product.info.featuresShort,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>;
}) {
  const { slug, itemId } = await params;
  const categoryId = getCategoryIdByUrl(slug);
  if (categoryId === undefined) notFound();

  const product = getProductById(parseInt(itemId));
  if (!product || product.info.category_id !== categoryId) notFound();

  return (
    <div className='container mx-auto px-4 py-12'>
      <ProductClient product={product} categorySlug={slug} />
    </div>
  );
}
