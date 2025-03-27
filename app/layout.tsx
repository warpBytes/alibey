import metadataConfig from '@/lib/metadata';

import Navigation from '@/components/navigation';

import { switzer } from './fonts';
import './globals.css';

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} bg-background antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
