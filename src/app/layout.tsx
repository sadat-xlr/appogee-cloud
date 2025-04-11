import { Metadata } from 'next';

import { geist, inter } from './font';

import './globals.css';

import { cn } from '@/lib/utils/cn';
import NextProgress from '@/components/atoms/next-progress';

export const metadata: Metadata = {
  title: 'Appogee Cloud',
  description: 'A digital cloud solution for File management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(inter.className, geist.variable)}
      >
        <NextProgress />
        {children}
      </body>
    </html>
  );
}
