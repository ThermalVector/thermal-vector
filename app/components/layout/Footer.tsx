import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 mt-auto py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-semibold text-lg mb-3'>Thermal Vector</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Your trusted source for thermal vectors and designs.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-3'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/catalog'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-3'>Contact</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Email: info@thermalvector.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className='border-t dark:border-gray-800 mt-8 pt-6 text-center text-gray-600 dark:text-gray-300'>
          <p>
            &copy; {new Date().getFullYear()} Thermal Vector. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
