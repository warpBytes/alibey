import { CocktailIcon, DrinksIcon, FoodIcon, WineIcon } from '@/lib/svgs';

export const menuHeaderIcons = [
  {
    id: 1,
    icon: (
      <FoodIcon className="h-[56px] w-[58px] translate-y-[-32px] text-foreground md:h-[116px] md:w-[116px] md:translate-y-0" />
    ),
  },
  {
    id: 2,
    icon: (
      <CocktailIcon className="h-[68px] w-[65px] translate-y-[32px] text-foreground md:h-[136px] md:w-[131px] md:translate-y-0 md:rotate-[-4deg]" />
    ),
  },
  {
    id: 3,
    icon: (
      <DrinksIcon className="h-[62px] w-[50px] translate-y-[-32px] text-foreground md:h-[124px] md:w-[100px] md:translate-y-0 md:rotate-[2deg]" />
    ),
  },
  {
    id: 4,
    icon: (
      <WineIcon className="h-[63px] w-[31px] translate-y-[32px] text-foreground md:h-[128px] md:w-[56px] md:translate-y-0 md:rotate-[-4deg]" />
    ),
  },
];
