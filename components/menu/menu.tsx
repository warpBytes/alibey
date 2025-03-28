'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';
import { menuFilters } from './constants';
import MenuHeader from './menu-header';
import MenuItems from './menu-items';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState(menuFilters[0].label);

  return (
    <div className="mb-20 w-full">
      <MenuHeader />
      <div className="content-wrapper flex flex-col gap-16 md:gap-20">
        <SectionHeading title="Menu" />
        <div className="flex items-center justify-between sm:justify-center sm:gap-10">
          {menuFilters.map(({ label }) => (
            <button key={label} onClick={() => setActiveFilter(label)}>
              <span
                className={cn(
                  '!text-xl font-medium transition-colors duration-200',
                  label !== activeFilter && 'text-neutral500',
                )}
              >
                {label}
              </span>
              <div
                className={cn(
                  'h-[1px] w-full bg-foreground transition-opacity duration-200',
                  label === activeFilter ? 'opacity-100' : 'opacity-0',
                )}
              />
            </button>
          ))}
        </div>
        <MenuItems activeFilter={activeFilter} />
      </div>
      <div className="mt-16 flex items-center justify-center">
        <BookNow />
      </div>
    </div>
  );
};

export default Menu;
