'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import MobileNavigation from './mobile-navigation';
import { navigationLinks } from './navigation.const';

const Navigation = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleContactClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes('#contact')) {
      e.preventDefault();

      if (pathname !== '/') {
        window.location.href = '/#contact';
        return;
      }

      document
        .querySelector('#contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative sticky top-0 z-20 h-[58px] bg-background px-4 md:h-16 md:px-10">
      <div className="relative flex h-full items-center justify-between border-b border-foreground">
        <Link href="/" className="shrink-0 text-xl md:text-2xl">
          <span className="text-foreground">ALI </span>
          <span className="text-red700">BEY</span>
        </Link>

        <div className="hidden space-x-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              onClick={(e) => handleContactClick(e, link.href)}
            >
              <span
                className={cn(
                  'text-foreground hover:underline',
                  isActive(link.href) && 'underline',
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <MobileNavigation toggle={toggle} setToggle={setToggle} />
      </div>
    </nav>
  );
};

export default Navigation;
