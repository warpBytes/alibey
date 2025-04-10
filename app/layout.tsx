import metadataConfig from '@/lib/metadata';

import CookieBanner from '@/components/cookie-banner';
import Navigation from '@/components/navigation';

import { gambarino, switzer } from './fonts';
import './globals.css';
import AnimatedCursor from 'react-animated-cursor';

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${gambarino.variable} bg-background antialiased`}
      >
        <AnimatedCursor color='0, 0, 0'  innerSize={8} outerSize={24} innerScale={1} outerScale={1.5} outerAlpha={0.2} hasBlendMode={true} outerStyle={{
          backgroundColor: '#ece8e1'
        }}/>
        <Navigation />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
