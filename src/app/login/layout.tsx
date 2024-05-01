import type { Metadata } from 'next';

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
    <main>
      <div className="min-h-main overflow-auto">
        <Providers>{children}</Providers>
      </div>
    </main>
  );
}