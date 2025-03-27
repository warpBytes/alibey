import localFont from 'next/font/local';

const switzer = localFont({
  src: './Switzer.otf',
  variable: '--font-switzer',
  weight: '100 900',
});

const gambarino = localFont({
  src: './Gambarino.otf',
  variable: '--font-gambarino',
  weight: '100 900',
});

export { gambarino, switzer };
