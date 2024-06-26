import { Suspense } from 'react';
import type { Metadata } from 'next';

import { Container } from '@/shared/ui/Container/Container';
import { BeverageList } from '@/widgets/beverage-list';
import { Modal } from '@/widgets/modal';

export const metadata: Metadata = {
  title: 'Menu',
};

export default function PartnerMenuPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  return (
    <Container title="Menu">
      <BeverageList />
      <Suspense key={searchParams.id} fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    </Container>
  );
}
