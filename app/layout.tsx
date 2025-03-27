import metadataConfig from '@/lib/metadata';

import Navigation from '@/components/navigation';

import { gambarino, switzer } from './fonts';
import './globals.css';

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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
