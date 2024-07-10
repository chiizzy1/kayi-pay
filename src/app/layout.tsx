import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AOSInit } from '@/components/ui/aos';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import './globals.scss';
const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kayi App',
  description: 'Kayi app - revolutionizing contemporary banking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <AOSInit />
      <body className={sora.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
