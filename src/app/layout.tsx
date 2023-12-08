import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import Header from '@/components/Layout/Header';
import ReactQueryProviderUseClient from '@/providers/ReactQueryProviderUseClient';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '400', '700', '900'],
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
      <body className={`${lato.variable} flex flex-col`}>
        <ReactQueryProviderUseClient>
          <Header />
          {children}
        </ReactQueryProviderUseClient>
      </body>
    </html>
  );
}
