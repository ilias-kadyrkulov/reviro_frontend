import type { Metadata } from 'next';

import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';

import { Providers } from '../providers';

export const metadata: Metadata = {
  title: {
    template: '%s | DrinkJoy',
    default: 'DrinkJoy',
  },
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mt-[76px] grid grid-cols-[138px_auto]">
        <Sidebar />

        <div className="min-h-main overflow-auto">
          <Providers>{children}</Providers>
        </div>
      </main>
    </>
  );
}