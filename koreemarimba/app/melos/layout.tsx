import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--melos-font-outfit',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--melos-font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Melos AI | Intelligent Co-Composer',
  description: 'The intelligent co-composer designed to amplify your musical artistry.',
};

export default function MelosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`melos-brand ${outfit.variable} ${dmSans.variable}`}>{children}</div>;
}