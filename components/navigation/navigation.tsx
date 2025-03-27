'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { navigationLinks } from './navigation.const';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="mx-4 flex h-16 items-center justify-between border-b border-foreground sm:mx-10">
      <Link href="/" className="text-2xl">
        <span>ALI </span>
        <span className="text-red700">BEY</span>
      </Link>

      <div className="flex space-x-8">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href} target={link.target}>
            <span
              className={cn(
                'hover:underline',
                isActive(link.href) && 'underline',
              )}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
