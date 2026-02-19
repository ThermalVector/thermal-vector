export default function CatalogPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-6'>Catalog</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Placeholder catalog items */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className='border rounded-lg p-4 hover:shadow-lg transition-shadow'
          >
            <div className='bg-gray-200 h-48 rounded-md mb-4'></div>
            <h3 className='font-semibold text-lg'>Product {item}</h3>
            <p className='text-gray-600'>Description for product {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
