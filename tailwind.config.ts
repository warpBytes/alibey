import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gambarino: ['var(--font-gambarino)'],
      },
      fontSize: {
        'heading-2xl': [
          'var(--heading-2xl-size)',
          { lineHeight: 'var(--heading-2xl-height)' },
        ],
        'heading-xl': [
          'var(--heading-xl-size)',
          { lineHeight: 'var(--heading-xl-height)' },
        ],
        'heading-lg': [
          'var(--heading-lg-size)',
          { lineHeight: 'var(--heading-lg-height)' },
        ],
        'heading-md': [
          'var(--heading-md-size)',
          { lineHeight: 'var(--heading-md-height)' },
        ],
        'heading-sm': [
          'var(--heading-sm-size)',
          { lineHeight: 'var(--heading-sm-height)' },
        ],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        red700: 'var(--red700)',
        neutral500: 'var(--neutral500)',
        neutral600: 'var(--neutral600)',
        pampas: 'var(--pampas)',
      },
    },
  },
};

export default config;
