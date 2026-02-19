import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to Thermal Vector</h1>
      <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
        Your one-stop destination for thermal solutions and vector graphics.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl'>
        <div className='p-6 border rounded-lg hover:shadow-lg transition-shadow'>
          <h2 className='text-2xl font-semibold mb-3'>Explore Catalog</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Browse our extensive collection of thermal vectors and designs.
          </p>
          <Link
            href='/catalog'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            View Catalog →
          </Link>
        </div>

        <div className='p-6 border rounded-lg hover:shadow-lg transition-shadow'>
          <h2 className='text-2xl font-semibold mb-3'>About Us</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Learn more about Thermal Vector and our mission.
          </p>
          <Link
            href='/about'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            About Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
