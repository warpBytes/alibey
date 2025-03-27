import Navigation from "@/components/navigation";
import "./globals.css";
import { switzer } from "./fonts";

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
