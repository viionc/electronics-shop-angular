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
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
};

export type Category = (typeof categories)[number];

const PRODUCTS: Product[] = [
  {
    id: 0,
    name: 'Mega Keyboard X2 Silent Pro',
    description:
      'Newest Keyboard from Mega series. Your roommates will love the silent PeachMX Red switches, clicks are almost as silent as people when you tell a joke.',
    price: 129,
    category: 'Keyboards',
  },
  {
    id: 1,
    name: 'Mega Keyboard X1',
    description:
      "Clicks so loud, Japan's seismometers sound an alarm. Use at night is not recommended.",
    price: 89,
    category: 'Keyboards',
  },
  {
    id: 2,
    name: 'Mega Keyboard P3',
    description:
      'The best budget keyboard version. To make the build cheaper we made it so only half the keys are properly working, and we made it random so every keyboard is different! So unique!.',
    price: 49,
    category: 'Keyboards',
  },
  {
    id: 3,
    name: 'Mega Mouse L502 Pro',
    description:
      'Mega Mouse L502 Pro is latest addition to our pro gaming (c) portfolio. Lighter than light this mouse will let you move faster than speed of light. Built-in aim bot!.',
    price: 99,
    category: 'Mouses',
  },
  {
    id: 4,
    name: 'Mega Mouse LBO 1',
    description:
      'Are you tried of right clicking? Then this mouse is for you, because it only has left button! Context menus are no more, embrace left clicking.',
    price: 49,
    category: 'Mouses',
  },
  {
    id: 5,
    name: 'Mega Mouse Wireless W920',
    description:
      'Our newest state of the art creation! Randomly drops connection so you have to be always on alert and ready to reconnect it. No more napping during work!',
    price: 249,
    category: 'Mouses',
  },
];
export default PRODUCTS;
