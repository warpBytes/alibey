import { BOOK_NOW_LINK, MENU_ROUTE } from '@/constants';

export const navigationLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Menu',
    href: MENU_ROUTE,
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Book now',
    href: BOOK_NOW_LINK,
    target: '_blank',
  },
];
