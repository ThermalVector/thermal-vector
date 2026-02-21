export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl?: string;
  features?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Thermal Vector 1',
    description: 'High-quality thermal vector design for professional use.',
    price: '$29.99',
    category: 'Animals',
    features: [
      'High-resolution vector file',
      'Compatible with all major design software',
      'Instant download after purchase',
      'Commercial use license included',
    ],
  },
  {
    id: 2,
    name: 'Thermal Vector 2',
    description: 'Premium thermal vector with detailed patterns.',
    price: '$34.99',
    category: 'Nature',
    features: [
      'High-resolution vector file',
      'Multiple file formats (AI, SVG, EPS)',
      'Layered design for easy editing',
      'Commercial use license included',
    ],
  },
  {
    id: 3,
    name: 'Thermal Vector 3',
    description: 'Advanced thermal imaging vector for specialists.',
    price: '$39.99',
    category: 'Abstract',
    features: [
      'Ultra-high resolution (600 dpi)',
      'Scientific accuracy',
      'Color variants included',
      'Technical documentation',
    ],
  },
  {
    id: 4,
    name: 'Thermal Vector 4',
    description: 'Versatile thermal vector suitable for various applications.',
    price: '$24.99',
    category: 'Geometric',
    features: [
      'Scalable vector graphics',
      'Pattern variations',
      'Easy customization',
      'Web and print ready',
    ],
  },
  {
    id: 5,
    name: 'Thermal Vector 5',
    description: 'Professional-grade thermal vector with high detail.',
    price: '$44.99',
    category: 'Animals',
    features: [
      'Museum-quality detail',
      'Scientific accuracy',
      'Multiple perspectives',
      'Research-grade quality',
    ],
  },
  {
    id: 6,
    name: 'Thermal Vector 6',
    description: 'Creative thermal vector for artistic projects.',
    price: '$19.99',
    category: 'Floral',
    features: [
      'Artistic interpretation',
      'Color variations',
      'Perfect for digital art',
      'Social media ready',
    ],
  },
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getCategories = (): string[] => {
  return [...new Set(products.map((product) => product.category))];
};

export const getFeaturedProducts = (count: number = 3): Product[] => {
  return products.slice(0, count);
};