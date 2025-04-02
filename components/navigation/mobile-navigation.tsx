'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import { BOOK_NOW_LINK } from '@/constants';

import { ArrowRightIcon } from '@/lib/svgs';
import { cn } from '@/lib/utils';

import { navigationLinks } from './navigation.const';

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  activeLink: string;
  handleLinkClick: (href: string) => void;
}

const MobileNavigation = ({
  toggle,
  setToggle,
  activeLink,
  handleLinkClick,
}: IProps) => {
  const handleClick = (href: string) => {
    handleLinkClick(href);
    setToggle(false);
  };

  return (
    <div className="flex w-full items-center justify-end md:hidden">
      <Link
        href={BOOK_NOW_LINK}
        target="_blank"
        className="flex h-[47px] items-center justify-center gap-3 border-x border-foreground bg-pampas px-4 transition-colors duration-300 hover:bg-neutral100"
      >
        <span className="text-base">Book now</span>
        <ArrowRightIcon className="h-[12.5px] w-[15px]" />
      </Link>
      <button
        className="z-50 mx-4 flex flex-col gap-2"
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={cn(
            'h-[1px] w-5 bg-foreground transition-all duration-300',
            toggle && 'translate-y-1 rotate-45',
          )}
        />
        <div
          className={cn(
            'h-[1px] w-5 bg-foreground transition-all duration-300',
            toggle && 'translate-y-[-5px] rotate-[-45deg]',
          )}
        />
      </button>

      <div
        className={cn(
          'absolute right-0 top-16 z-50 w-full border border-foreground bg-background transition-all duration-300',
          !toggle
            ? '-translate-x-full transform opacity-0'
            : 'flex translate-x-0 transform opacity-100',
        )}
      >
        <nav className="flex w-full flex-col">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'p-4 text-xl transition-colors',
                activeLink === link.href && 'underline',
              )}
              onClick={() => handleClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
