import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Bey",
  description: "A Turkish Mediterranean restaurant in the heart of Sutton",
  openGraph: {
    type: "website",
    url: "https://www.alibey.co.uk",
    title: "Ali Bey",
    description: "A Turkish Mediterranean restaurant in the heart of Sutton",
    siteName: "Ali Bey",
    images: [{
      url: "https://www.alibey.co.uk/restaurant-hero.jpg",
      type: "image/jpeg",
      width: 1400,
      height: 1050,
      alt: "Restaurant interior"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
