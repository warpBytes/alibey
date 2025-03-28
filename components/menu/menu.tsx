'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import SectionHeading from '../section-heading';
import { menuFilters } from './constants';
import MenuHeader from './menu-header';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState(menuFilters[0].label);

  return (
    <div>
      <MenuHeader />
      <div className="flex flex-col gap-20">
        <SectionHeading title="Menu" />
        <div className="flex items-center justify-center gap-10">
          {menuFilters.map(({ label }) => (
            <button key={label} onClick={() => setActiveFilter(label)}>
              <span
                className={cn(
                  'text-xl font-medium',
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
      </div>
    </div>
  );
};

export default Menu;
