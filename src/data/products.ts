export const categories = [
  'Computers',
  'Laptops',
  'TVs',
  'Smart Phones',
  'Displays',
  'Keyboards',
  'Mouses',
] as const;

export type Product = {
  name: string;
  description: string;
  price: number;
  category: (typeof categories)[number];
};

const PRODUCTS: Product[] = [
  {
    name: 'Mega Keyboard X2 Silent Pro',
    description:
      'Newest Keyboard from Mega series. Your roommates will love the silent PeachMX Red switches, clicks are almost as silent as people when you tell a joke.',
    price: 129,
    category: 'Keyboards',
  },
];

export default PRODUCTS;
