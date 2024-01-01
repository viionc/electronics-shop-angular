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
      'The best budget keyboard version. To make the build cheaper we made it so only half the keys are properly working, and we made it random so every keyboard is different! So unique!',
    price: 49,
    category: 'Keyboards',
  },
  {
    id: 3,
    name: 'Mega Mouse L502 Pro',
    description:
      'Mega Mouse L502 Pro is latest addition to our pro gaming (c) portfolio. Lighter than light this mouse will let you move faster than speed of light. Built-in aim bot!',
    price: 99,
    category: 'Mouses',
  },
  {
    id: 4,
    name: 'Mega Mouse LBO 1',
    description:
      'Are you tired of right clicking? Then this mouse is for you, because it only has left button! Context menus are no more, embrace left clicking.',
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
  {
    id: 6,
    name: 'Mega Monitor 100" 560hz',
    description:
      "Revolutionary display made specificaly for gamers (unite)! You won't miss anything while gaming except your mom calling you for dinner.",
    price: 409,
    category: 'Displays',
  },
  {
    id: 7,
    name: 'Mega Monitor 3" 120ghz',
    description:
      "Newest addition to our monitors stock, 3 inch (that's average right) display will help you train your eyesight!",
    price: 59,
    category: 'Displays',
  },
  {
    id: 8,
    name: 'Mega Monitor Waller',
    description: 'Custom made monitor, you choose how wide you want it to be! ',
    price: 999,
    category: 'Displays',
  },
  {
    id: 9,
    name: 'Mega Smart Phone Folded',
    description:
      "This amazing phone is locked in permanent folded at 60 degree angle. You can't open or close it! Wow!",
    price: 299,
    category: 'Smart Phones',
  },
  {
    id: 10,
    name: 'Mega Dumb Phone 20',
    description:
      "Budget friendly phone that can't do anything. Calls? Will randomly call someone else. Messages? Will replace words with emojis. (oh wait...)",
    price: 39,
    category: 'Smart Phones',
  },
  {
    id: 11,
    name: 'Mega Phone Fidget',
    description:
      'The coolest phone ever! You will be the craziest person on every party. Warning: Not recommended for married people, this phone is a magnet for love.',
    price: 109,
    category: 'Smart Phones',
  },
  {
    id: 12,
    name: 'Mega TV QLED 69" 16k 240Hz',
    description:
      'Best Quality, 16 times the detail, 200 trillion colors, non-scripted tv shows. It just works!',
    price: 1099,
    category: 'TVs',
  },
  {
    id: 13,
    name: 'Mega TV Oldschool',
    description:
      'Blast (warning: TV might explode) from the past! Time travel back to times where houses were affordable!',
    price: 59,
    category: 'TVs',
  },
  {
    id: 14,
    name: 'Mega Cinema TV',
    description:
      'Screen bigger than your room, role play being in cinema, without any kids screaming and crying. (Does not include chairs)',
    price: 10009,
    category: 'TVs',
  },
];
export default PRODUCTS;
