'use client';

import menu from '@/assets/menu.json';

import { formatPrice } from '@/lib/price';
import { cn } from '@/lib/utils';

import DietaryLabel from '../dietary-label';

const MenuItems = ({ activeFilter }: { activeFilter: string }) => {
  const menuItems = Object.entries(menu[activeFilter as keyof typeof menu]).map(
    ([key, value]) => ({
      id: key,
      items: [...value],
    }),
  );

  return (
    <div className="mx-auto flex w-full max-w-[950px] flex-col gap-20">
      <div className="flex flex-col gap-16 md:gap-20">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-10">
            <h2 className="text-center font-gambarino text-heading-md">
              {item.id}
            </h2>
            <div>
              {item.items.map((data, index) => (
                <div
                  key={index}
                  className={cn(
                    'border-foreground/5 border-b py-4 last:border-b-0',
                    index === 0 && 'pt-0',
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="flex flex-wrap items-center gap-2 font-medium">
                        {data.name}
                        {data.dietary && <DietaryLabel type={data.dietary} />}
                      </h3>
                      <p className="mt-1 text-sm text-neutral600">
                        {data.description}
                      </p>
                    </div>
                    {data.price ? (
                      <span>{formatPrice(data.price)}</span>
                    ) : (
                      <div className="flex flex-col gap-[2px]">
                        {Object.entries(data.prices).map(([key, value]) => (
                          <span key={key}>
                            {key}: {formatPrice(value as number)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
