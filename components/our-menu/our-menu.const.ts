import { Coctails, Drinks, Food, Wines } from '@/lib/images';

const previewItems = {
  Food: [
    {
      name: 'Daily Soup',
      description: 'Served with olives, pickles & homemade Turkish bread',
      price: 6.9,
    },
    {
      name: 'Falafel',
      description:
        'Crushed chickpeas, broad beans, onions, carrots toasted in spices, deep-fried served with celery and spinach',
      price: 6.9,
      dietary: 'Vegan',
    },
    {
      name: 'Sigara Boregi',
      description: 'Freshly fried pastry filled with feta cheese & parsley',
      price: 6.9,
      dietary: 'Vegetarian',
    },
    {
      name: 'Mantar Sote',
      description:
        'Mushroom sauteed with garlic, onions, topped with cheddar cheese',
      price: 7.1,
      dietary: 'Vegetarian',
    },
    {
      name: 'Imam Bayildi',
      description:
        'Aubergines stuffed with onions, pepper, tomato sauce, red & green peppers',
      price: 7.9,
      dietary: 'Vegan',
    },
  ],
};

export const menuItems = [
  {
    title: 'Food',
    items: previewItems.Food,
    bgImage: Food,
  },
  {
    title: 'Cocktails',
    items: previewItems.Food,
    bgImage: Coctails,
  },
  {
    title: 'Drinks',
    items: previewItems.Food,
    bgImage: Drinks,
  },
  {
    title: 'Wines',
    items: previewItems.Food,
    bgImage: Wines,
  },
];
