import { BOOK_NOW_LINK } from '@/constants';

import { LetterIcon, LocationIcon, PhoneIcon } from '@/lib/svgs';

export const contactLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alibeyrestaurantbar/',
  },
  {
    label: 'Tripadvisor',
    href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g504182-d32980817-Reviews-Ali_Bey-Sutton_Greater_London_England.html',
  },
  {
    label: 'JustEat',
    href: 'https://www.just-eat.co.uk/restaurants-ali-bey-sutton/menu',
  },
  {
    label: 'Book now',
    href: BOOK_NOW_LINK,
  },
];

export const contactInfo = [
  {
    label: '12 High Street, SM1 1HN Sutton',
    icon: <LocationIcon />,
  },
  {
    label: '021 7953 4291',
    icon: <PhoneIcon />,
  },
  {
    label: 'info@alibey.co.uk',
    icon: <LetterIcon />,
  },
];
