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
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        red700: 'var(--red700)',
        neutral600: 'var(--neutral600)',
      },
    },
  },
};

export default config;
