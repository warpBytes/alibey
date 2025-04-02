'use client';

import { useState, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';
import { menuFilters } from './constants';
import { reverseMenuSections, menuSections } from './constants/menu-sections';
import MenuHeader from './menu-header';
import MenuItems from './menu-items';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState(menuFilters[0].label);
  const [isSticky, setIsSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const { top } = filterRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }

      const sections = Object.entries(sectionRefs.current);

      for (const [sectionId, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 100;

          if (
            isInView &&
            reverseMenuSections[sectionId as keyof typeof reverseMenuSections]
          ) {
            setActiveFilter(
              reverseMenuSections[
                sectionId as keyof typeof reverseMenuSections
              ],
            );
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterClick = (label: string) => {
    setActiveFilter(label);

    const targetSubsection = menuSections[label as keyof typeof menuSections];
    const sectionRef = sectionRefs.current[targetSubsection];

    if (sectionRef) {
      const offset = isSticky ? 64 : 0;
      const topOffset = sectionRef.offsetTop - offset;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-20 w-full">
      <MenuHeader />
      <div className="z-20 flex flex-col gap-12 md:gap-16">
        <SectionHeading title="Menu" className="z-10 md:mt-[-38px]" />
        <div className="sticky top-0 z-30 px-4 md:px-10">
          <div
            ref={filterRef}
            className={cn(
              'flex h-16 w-full items-center justify-between border-b bg-background transition-all duration-300 sm:justify-center sm:gap-10',
              isSticky ? 'border-foreground' : 'border-transparent',
            )}
          >
            {menuFilters.map(({ label }) => (
              <button key={label} onClick={() => handleFilterClick(label)}>
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
        </div>

        {menuFilters.map(({ label }) => (
          <MenuItems
            key={label}
            activeFilter={label}
            sectionRefs={sectionRefs}
          />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center">
        <BookNow />
      </div>
    </div>
  );
};

export default Menu;
