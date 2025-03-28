import { CocktailIcon, DrinksIcon, FoodIcon, WineIcon } from '@/lib/svgs';

export const menuHeaderIcons = [
  {
    id: 1,
    icon: <FoodIcon className="h-[116px] w-[116px] text-foreground" />,
  },
  {
    id: 2,
    icon: (
      <CocktailIcon className="h-[136px] w-[131px] rotate-[-4deg] text-foreground" />
    ),
  },
  {
    id: 3,
    icon: (
      <DrinksIcon className="h-[124px] w-[100px] rotate-[2deg] text-foreground" />
    ),
  },
  {
    id: 4,
    icon: (
      <WineIcon className="h-[128px] w-[56px] rotate-[-4deg] text-foreground" />
    ),
  },
];
