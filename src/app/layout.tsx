import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'E-Commerce JDG',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
