import { FoodType } from '@/constants';

import { LeafIcon } from '@/lib/svgs';

interface IProps {
  type: FoodType;
}

const DietaryLabel = ({ type }: IProps) => {
  return (
    <span className="flex w-fit items-center gap-2 border border-foreground px-1 py-[2px] text-xs">
      {type === FoodType.VEGAN && <LeafIcon className="h-[10.5px] w-[11px]" />}
      {type.toUpperCase()}
    </span>
  );
};

export default DietaryLabel;
