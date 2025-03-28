import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

import { ArrowRightIcon } from '@/lib/svgs';
import { cn } from '@/lib/utils';

import { navigationLinks } from './navigation.const';

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileNavigation = ({ toggle, setToggle }: IProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex w-full items-center justify-end md:hidden">
      <button
        className="z-50 flex flex-col gap-2"
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
          'absolute right-0 top-20 z-50 w-full border border-foreground bg-background transition-all duration-300',
          !toggle
            ? '-translate-x-full transform opacity-0'
            : 'flex translate-x-0 transform opacity-100',
        )}
      >
        <nav className="flex w-full flex-col text-3xl">
          {navigationLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.target}
              className={cn(
                'p-4 text-xl transition-colors',
                isActive(link.href) && 'underline',
                index === navigationLinks.length - 1 &&
                  'bg-pampas flex items-center justify-between',
              )}
              onClick={() => setToggle(false)}
            >
              {link.label}
              {index === navigationLinks.length - 1 && (
                <ArrowRightIcon className="h-[15px] w-[18px] text-black" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
