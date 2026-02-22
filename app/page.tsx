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
      title: 'Каталог товаров',
      description: 'Выберите среди всех представленных товаров.',
      href: '/catalog',
    },
    {
      iconName: 'sparkles',
      title: 'Премиальное качество',
      description: 'Наша оптика- высочайшего класса.',
      href: '/catalog',
    },
    {
      iconName: 'users',
      title: 'Выбор покупателя',
      description: 'Нас выбирают тысячи.',
      href: '/about',
    },
    {
      iconName: 'scale',
      title: 'Сравнить',
      description: 'Можете воспользоваться функцией сравнения.',
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
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                Thermal Vector
              </span>
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Самый лучший бренд высококачественной оптики и линз.
            </p>
            {/* <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <PrimaryButton
                href='/catalog'
                endContent={<ArrowRightIcon className='w-5 h-5' />}
              >
                Сделайте выбор
              </PrimaryButton>
              <OutlineButton href='/about'>Learn More</OutlineButton>
            </div> */}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          Почему Thermal Vector?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-gray-50 dark:bg-gray-800 dark:text-white'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Хотите ознакомиться с полным перечнем товаров?
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            Перейтидет в каталог и выберите среди множества различной оптики.
          </p>
          <PrimaryButton href='/catalog'>Перейти в каталог</PrimaryButton>
        </div>
      </Section>
    </div>
  );
}
