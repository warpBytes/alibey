'use client';

import { useState, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';
import { menuFilters } from './constants';
import MenuHeader from './menu-header';
import MenuItems from './menu-items';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState(menuFilters[0].label);
  const [isSticky, setIsSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const { top } = filterRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mb-20 w-full">
      <MenuHeader />
      <div className="content-wrapper z-20 flex flex-col gap-12 md:gap-16">
        <SectionHeading title="Menu" className="z-10 md:mt-[-38px]" />
        <div
          ref={filterRef}
          className={cn(
            'sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background transition-all duration-300 sm:justify-center sm:gap-10',
            isSticky ? 'border-foreground' : 'border-transparent',
          )}
        >
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
