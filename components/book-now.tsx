import Link from 'next/link';

import { BOOK_NOW_LINK } from '@/constants';

import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

const BookNow = ({ className }: IProps) => {
  return (
    <Link
      href={BOOK_NOW_LINK}
      target="_blank"
      className={cn(
        'h-[30px] w-fit border-b border-foreground text-xl font-medium',
        className,
      )}
    >
      Book now
    </Link>
  );
};

export default BookNow;
