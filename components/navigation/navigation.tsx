'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { BOOK_NOW_LINK } from '@/constants';

import { ArrowRightIcon } from '@/lib/svgs';
import { cn } from '@/lib/utils';

import MobileNavigation from './mobile-navigation';
import { CONTACT_HREF, navigationLinks } from './navigation.const';

const Navigation = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.hash || pathname);
  }, [pathname]);

  const handleContactClick = () => {
    if (pathname !== '/') {
      window.location.href = `/${CONTACT_HREF}`;
      return;
    }

    setActiveLink(CONTACT_HREF);
  };

  const handleLinkClick = (href: string) => {
    if (href.includes(CONTACT_HREF)) handleContactClick();
    else {
      setActiveLink(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="relative sticky top-0 z-20 h-12 bg-background px-4 md:h-16 md:px-10">
      <div className="relative flex h-full items-center justify-between border-b border-foreground">
        <Link href="/" className="shrink-0 text-xl md:text-2xl">
          <span className="text-foreground">ALI </span>
          <span className="text-red700">BEY</span>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
            >
              <span
                className={cn(
                  '!text-xl text-foreground hover:underline',
                  activeLink === link.href && 'underline',
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href={BOOK_NOW_LINK}
            target="_blank"
            className="flex h-[63px] items-center justify-center gap-4 border-x border-foreground bg-pampas px-6 transition-colors duration-300 hover:bg-neutral100"
          >
            <span className="text-xl">Book now</span>
            <ArrowRightIcon className="h-[15px] w-[18px]" />
          </Link>
        </div>

        <MobileNavigation
          toggle={toggle}
          setToggle={setToggle}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </nav>
  );
};

export default Navigation;
