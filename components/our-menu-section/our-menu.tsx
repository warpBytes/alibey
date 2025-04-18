import Link from 'next/link';

import { MENU_ROUTE } from '@/constants';

import { formatPrice } from '@/lib/price';
import { cn } from '@/lib/utils';

import DietaryLabel from '../dietary-label';
import SectionHeading from '../section-heading';
import { menuPreviewItems } from './our-menu.const';

const OurMenu = () => {
  return (
    <div className="content-wrapper mt-[160px] flex flex-col gap-12 md:mt-[120px] md:gap-16">
      <SectionHeading title="Our menu" />

      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-foreground md:block" />

        {menuPreviewItems.map((item) => (
          <div
            key={item.title}
            className={cn(
              'relative space-y-6 overflow-hidden border-b border-foreground py-8 md:border-b-0 md:p-[56px]',
              item.className,
            )}
          >
            <div className="flex items-center gap-4">
              <div className="relative block text-foreground md:absolute md:right-20 md:top-24">
                {item.icon}
              </div>

              <h2 className="relative font-gambarino text-heading-sm md:text-heading-md">
                {item.title}
              </h2>
            </div>
            <div>
              {item.items.map((data, index) => (
                <div
                  key={index}
                  className={cn(
                    'border-foreground/5 border-b py-4 last:border-b-0',
                    index === 0 && 'pt-0',
                    index === item.items.length - 1 && 'pb-0',
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="flex flex-wrap items-center gap-2 font-medium">
                        {data.name}
                        {data.dietary && <DietaryLabel type={data.dietary} />}
                      </h3>
                      <p className="mt-1 text-sm text-neutral600">
                        {data.description}
                      </p>
                    </div>
                    <span>{formatPrice(data.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link
        href={MENU_ROUTE}
        className="mx-auto h-[30px] w-fit border-b border-foreground text-xl font-medium"
      >
        Check menu
      </Link>
    </div>
  );
};

export default OurMenu;
