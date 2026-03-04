export default function AboutPage() {
  return (
    <div className='flex flex-1 flex-col justify-center min-h-full'>
      <div className='container mx-auto px-4 py-12 max-w-3xl'>
      <h1 className='text-4xl font-bold mb-6'>О компании Thermal Vector</h1>

      <div className='prose dark:prose-invert'>
        <p className='text-lg mb-4'>
          Добро пожаловать в Thermal Vector — ваш надежный источник
          высококачественных термальных векторов и дизайнов.
        </p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Наша миссия</h2>
        <p>
          Мы стремимся предоставлять лучшие решения в области термальных
          векторов как для профессионалов, так и для энтузиастов. Наша коллекция
          тщательно подобрана, чтобы гарантировать качество и удобство
          использования.
        </p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>
          Почему выбирают нас
        </h2>
        <ul className='list-disc pl-6 mb-6'>
          <li>Высококачественные термальные векторы</li>
          <li>Регулярное пополнение коллекции новыми дизайнами</li>
          <li>Простота использования и интеграции</li>
          <li>Превосходная поддержка клиентов</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
