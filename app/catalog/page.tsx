import { products } from '@/app/constants';
import ProductCard from '@/components/ui/cards/ProductCard';

export default function CatalogPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-6'>Catalog</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
