import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': ['text-heading-xl'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
