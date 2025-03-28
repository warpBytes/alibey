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

  return (
    <nav className="relative mx-4 flex h-16 items-center justify-between border-b border-foreground md:mx-10">
      <Link href="/" className="shrink-0 text-xl md:text-2xl">
        <span className="text-foreground">ALI </span>
        <span className="text-red700">BEY</span>
      </Link>

      <div className="hidden space-x-8 md:flex">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href} target={link.target}>
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
    </nav>
  );
};

export default Navigation;
