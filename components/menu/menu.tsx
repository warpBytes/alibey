'use client';

import { useState, useEffect, useRef } from 'react';

import Lenis from 'lenis';

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
    // Set initial filter from URL hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const filter = menuFilters.find(filter => filter.label === hash);
      if (filter) {
        setActiveFilter(filter.label);
      }
    }

    new Lenis({
      autoRaf: true,
    });

    const handleScroll = () => {
      if (filterRef.current) {
        const { top } = filterRef.current.getBoundingClientRect();
        setIsSticky(top <= 64);
      }

      const sections = Object.entries(sectionRefs.current);

      for (const [sectionId, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 164 && rect.bottom >= 164;

          if (
            isInView &&
            reverseMenuSections[sectionId as keyof typeof reverseMenuSections]
          ) {
            const newFilter = reverseMenuSections[
              sectionId as keyof typeof reverseMenuSections
            ];
            setActiveFilter(newFilter);
            // Update URL hash when filter changes from scroll
            window.location.hash = newFilter;
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
    // Update URL hash when filter is clicked
    window.location.hash = label;

    const targetSubsection = menuSections[label as keyof typeof menuSections];
    const sectionRef = sectionRefs.current[targetSubsection];

    if (sectionRef) {
      const offset = isSticky ? 140 : 0;
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
        <div className="sticky top-[64px] z-30 px-4 md:px-10">
          <div
            ref={filterRef}
            className={cn(
              'flex h-16 w-full items-center justify-between border-b bg-background transition-all duration-300 sm:justify-center sm:gap-10',
              isSticky ? 'border-foreground' : 'border-transparent',
            )}
          >
            {menuFilters.map(({ label }) => (
              <button
                key={label}
                onClick={() => handleFilterClick(label)}
                className="group"
              >
                <span
                  className={cn(
                    '!text-xl font-medium transition-colors duration-700 group-hover:text-foreground',
                    label !== activeFilter && 'text-neutral500',
                  )}
                >
                  {label}
                </span>
                <div
                  className={cn(
                    'h-[1px] w-0 bg-foreground opacity-0 transition-all duration-700 group-hover:w-full group-hover:opacity-100',
                    label === activeFilter && 'w-full opacity-100',
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
