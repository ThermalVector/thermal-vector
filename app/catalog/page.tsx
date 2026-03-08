import { products } from '@/app/constants';
import ProductCard from '@/components/ui/cards/ProductCard';

// аналог - https://security.thermeyetec.com/product/

export default function CatalogPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-6'>Каталог</h1>
      <p className='text-lg text-gray-600 mb-8 max-w-3xl'>
        Компания ThermalVector предоставляет самые современные и лучшие
        тепловизионные продукты и решения и создает более безопасные и
        эффективные условия жизни и работы.
      </p>
      <h2 className='text-2xl font-semibold text-gray-800 mb-8'>
        Тепловизионные решения для обеспечения безопасности
      </h2>
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
