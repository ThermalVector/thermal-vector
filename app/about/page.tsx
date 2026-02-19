export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-12 max-w-3xl'>
      <h1 className='text-4xl font-bold mb-6'>About Thermal Vector</h1>

      <div className='prose dark:prose-invert'>
        <p className='text-lg mb-4'>
          Welcome to Thermal Vector, your premier destination for high-quality
          thermal vectors and designs.
        </p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Our Mission</h2>
        <p>
          We strive to provide the best thermal vector solutions for
          professionals and enthusiasts alike. Our collection is carefully
          curated to ensure quality and usability.
        </p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Why Choose Us</h2>
        <ul className='list-disc pl-6 mb-6'>
          <li>High-quality thermal vectors</li>
          <li>Regular updates with new designs</li>
          <li>Easy to use and integrate</li>
          <li>Excellent customer support</li>
        </ul>
      </div>
    </div>
  );
}
