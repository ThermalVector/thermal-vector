import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thermal Vector',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col'>
        <Providers>
          <Navbar />
          <main className='flex-grow pt-16'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
