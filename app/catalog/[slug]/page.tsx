import { notFound } from 'next/navigation';
import {
  categories,
  getCategoryIdByUrl,
} from '@/app/constants/types/categoryTypes';
import { products } from '@/app/constants';
import ProductCard from '@/components/ui/cards/ProductCard';
import BackToCatalogLink from '@/components/ui/BackToCatalogLink';

function getCategoryRu(categoryId: number) {
  return categories.find((c) => c.id === categoryId)?.ru ?? '';
}

export async function generateStaticParams() {
  const { categoryURL } = await import(
    '@/app/constants/types/categoryTypes'
  );
  return categoryURL.map((c) => ({ slug: c.url }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryId = getCategoryIdByUrl(slug);
  if (categoryId === undefined) return { title: 'Not Found' };
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return { title: 'Not Found' };
  return {
    title: `${category.ru} | Thermal Vector`,
    description: category.descriptionShort,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryId = getCategoryIdByUrl(slug);
  if (categoryId === undefined) notFound();
  const category = categories.find((c) => c.id === categoryId);
  if (!category) notFound();

  const categoryProducts = products.filter(
    (p) => p.info.category_id === category.id
  );

  return (
    <div className='container mx-auto px-4 py-12'>
      <BackToCatalogLink href='/catalog' />
      <h1 className='text-4xl font-bold mb-6'>{category.ru}</h1>
      <p className='text-sm text-gray-600 mb-6 max-w-3xl'>
        {category.descriptionShort}
      </p>
      {category.descriptionLong && (
        <div className='mb-6 max-w-3xl'>
          <p className='text-gray-600 leading-relaxed'>
            {category.descriptionLong}
          </p>
        </div>
      )}
      {category.application && (
        <div className='mb-8 max-w-3xl'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>
            Применение
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            {category.application}
          </p>
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={getCategoryRu(product.info.category_id)}
            price={product.info.price}
            description={product.info.description}
            categorySlug={slug}
            imageUrl={product.info.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
