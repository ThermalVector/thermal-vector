import { Card, CardBody, CardHeader } from '@heroui/react';
import { ArrowPathIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Section from '@/components/ui/layout/Section';
import Container from '@/components/ui/layout/Container';

export default function ComparatorPage() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <Container className='py-16'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Product Comparator
            </h1>
            <p className='text-xl text-blue-100'>
              Compare thermal imaging products side by side to find the perfect
              solution for your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Placeholder Content */}
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Feature Card 1 */}
            <Card className='border-none shadow-lg'>
              <CardHeader className='flex gap-3 pb-0'>
                <ScaleIcon className='w-8 h-8 text-blue-500' />
                <h2 className='text-2xl font-semibold'>
                  Side-by-Side Comparison
                </h2>
              </CardHeader>
              <CardBody>
                <p className='text-gray-600 dark:text-gray-300'>
                  Compare specifications, features, and pricing of different
                  thermal imaging products.
                </p>
                <div className='mt-6 space-y-3'>
                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <span className='w-24'>Resolution</span>
                    <span className='flex-1 h-2 bg-gray-200 rounded-full'></span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <span className='w-24'>Temperature</span>
                    <span className='flex-1 h-2 bg-gray-200 rounded-full'></span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <span className='w-24'>Battery Life</span>
                    <span className='flex-1 h-2 bg-gray-200 rounded-full'></span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Feature Card 2 */}
            <Card className='border-none shadow-lg'>
              <CardHeader className='flex gap-3 pb-0'>
                <ArrowPathIcon className='w-8 h-8 text-blue-500' />
                <h2 className='text-2xl font-semibold'>Coming Soon</h2>
              </CardHeader>
              <CardBody>
                <p className='text-gray-600 dark:text-gray-300'>
                  Our comprehensive comparison tool is under development. Soon
                  you'll be able to:
                </p>
                <ul className='mt-4 space-y-2 text-gray-600 dark:text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
                    Compare up to 4 products simultaneously
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
                    View detailed technical specifications
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
                    See side-by-side feature comparisons
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
                    Get personalized recommendations
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* Placeholder for future comparison table */}
          <div className='mt-16 text-center'>
            <h3 className='text-xl font-semibold mb-4'>Ready to Compare?</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-8'>
              Select products from our catalog to start comparing
            </p>
            <div className='inline-flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow'>
              <span className='text-sm text-gray-500'>Coming Q2 2026</span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
