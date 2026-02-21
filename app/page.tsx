import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import OutlineButton from '@/components/ui/buttons/OutlineButton';
import FeatureCard from '@/components/ui/cards/FeatureCard';
import Section from '@/components/ui/layout/Section';
import Container from '@/components/ui/layout/Container';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { IconName } from '@/app/constants/icons';

export default function HomePage() {
  const features: Array<{
    iconName: IconName;
    title: string;
    description: string;
    href: string;
  }> = [
    {
      iconName: 'cube',
      title: 'Extensive Catalog',
      description:
        'Browse through hundreds of high-quality thermal vectors and designs.',
      href: '/catalog',
    },
    {
      iconName: 'sparkles',
      title: 'Premium Quality',
      description:
        'All vectors are carefully crafted and optimized for thermal printing.',
      href: '/catalog',
    },
    {
      iconName: 'users',
      title: 'Community Driven',
      description:
        'Join thousands of designers and thermal printing enthusiasts.',
      href: '/about',
    },
    {
      iconName: 'scale', // You'll need to add ScaleIcon to your ICONS constant
      title: 'Product Comparator',
      description:
        'Compare products side by side to find the perfect fit for your needs.',
      href: '/comparator',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
        <Container className='py-24 md:py-32'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Welcome to{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                Thermal Vector
              </span>
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Your premier destination for high-quality thermal vectors and
              designs. Perfect for professionals and enthusiasts alike.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <PrimaryButton
                href='/catalog'
                endContent={<ArrowRightIcon className='w-5 h-5' />}
              >
                Explore Catalog
              </PrimaryButton>
              <OutlineButton href='/about'>Learn More</OutlineButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section className='bg-white dark:bg-gray-900'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          Why Choose Thermal Vector?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-gray-50 dark:bg-gray-800'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            Browse our catalog of premium thermal vectors and find the perfect
            design for your next project.
          </p>
          <PrimaryButton href='/catalog'>Browse Catalog</PrimaryButton>
        </div>
      </Section>
    </div>
  );
}
