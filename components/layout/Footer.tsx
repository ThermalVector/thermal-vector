import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 mt-auto py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-semibold text-lg mb-3 dark:text-white'>
              Thermal Vector
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Нам доверяют миллионы.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-3 dark:text-white'>
              Навигация
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/catalog'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-3 dark:text-white'>
              Контакты
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Email: bolgarev@suncti.ru
            </p>
            <p className='text-gray-600 dark:text-gray-300'>
              Phone: +7 999 998-98-46
            </p>
          </div>
        </div>

        <div className='border-t dark:border-gray-800 mt-8 pt-6 text-center text-gray-600 dark:text-gray-300'>
          <p>
            &copy; {new Date().getFullYear()} Thermal Vector. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
