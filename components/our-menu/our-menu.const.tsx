import menu from '@/assets/menu.json';
import { FoodType } from '@/constants';

import { CocktailIcon, DrinksIcon, WineIcon } from '@/lib/svgs';
import { FoodIcon } from '@/lib/svgs';

interface IMenuPreviewItem {
  title: string;
  items: {
    name: string;
    price: number;
    description?: string;
    dietary?: FoodType;
  }[];
  icon: React.ReactNode;
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
    icon: (
      <FoodIcon className="h-[35px] w-[35px] md:h-[218px] md:w-[218px] md:opacity-[3%]" />
    ),
  },
  {
    title: 'Cocktails',
    items: previewCocktailsItems,
    icon: (
      <CocktailIcon className="h-[35px] w-[35px] md:h-[256px] md:w-[246px] md:opacity-[3%]" />
    ),
  },
  {
    title: 'Drinks',
    items: previewDrinksItems,
    className: 'md:border-t border-foreground',
    icon: (
      <DrinksIcon className="h-[35px] w-[35px] md:h-[234px] md:w-[188px] md:opacity-[3%]" />
    ),
  },
  {
    title: 'Wines',
    items: previewRedWines,
    className: 'md:border-t border-foreground',
    icon: (
      <WineIcon className="h-[35px] w-[35px] md:h-[241px] md:w-[106px] md:opacity-[3%]" />
    ),
  },
] as IMenuPreviewItem[];
