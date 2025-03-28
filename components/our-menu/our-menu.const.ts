import { StaticImageData } from 'next/image';

import menu from '@/assets/menu.json';
import { FoodType } from '@/constants';

import { Cocktails, Drinks, Food, Wines } from '@/lib/images';

interface IMenuPreviewItem {
  title: string;
  bgImage: StaticImageData;
  items: {
    name: string;
    price: number;
    description?: string;
    dietary?: FoodType;
  }[];
  className?: string;
}

const previewFoodItems = menu.Food['Hot Starter'].slice(0, 5);
const previewCocktailsItems = menu.Cocktails['Cocktails'].slice(0, 5);
const previewDrinksItems = menu.Drinks['Beers'].slice(0, 5);

const redWines = menu.Wine['Red Wines'].slice(0, 5);
const previewRedWines = redWines.map((wine) => ({
  ...wine,
  price: wine.prices['Bottle'],
}));

export const menuPreviewItems = [
  {
    title: 'Food',
    items: previewFoodItems,
    bgImage: Food,
  },
  {
    title: 'Cocktails',
    items: previewCocktailsItems,
    bgImage: Cocktails,
  },
  {
    title: 'Drinks',
    items: previewDrinksItems,
    bgImage: Drinks,
    className: 'md:border-t border-foreground',
  },
  {
    title: 'Wines',
    items: previewRedWines,
    bgImage: Wines,
    className: 'md:border-t border-foreground',
  },
] as IMenuPreviewItem[];
