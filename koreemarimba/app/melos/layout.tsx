import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melos - Music Industry AI Guide | Koree Arndt Music',
  description: 'Chat with Melos, your AI expert on music distributors, industry trends, and career advice for young artists.',
};

export default function MelosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}