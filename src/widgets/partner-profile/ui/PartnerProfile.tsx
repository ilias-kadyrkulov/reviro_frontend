'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Form as EstablishmentBannersForm } from '@/features/partner-banners-form';
import { Form as EstablishmentInfoForm } from '@/features/partner-info-form';
import { ESTABLISHMENT_EDIT_PATH, ESTABLISHMENT_PATH } from '@/shared';
import { Button, Typography } from '@/shared/ui';

export const PartnerProfile = () => {
  const pathname = usePathname();
  return (
    <div className="profile min-h-[calc(100dvh-144px)] p-10 lg:mx-[56px] lg:my-[72px] lg:p-0 sm:mx-[24px]">
      <div className="mb-10 flex justify-between">
        <div>
          <Typography variant="h2">Establishment details</Typography>

          <Typography variant="h5" className="text-theme-grey-500">
            {pathname === ESTABLISHMENT_PATH && 'Create establishment'}
            {pathname === ESTABLISHMENT_EDIT_PATH && 'Edit establishment'}
          </Typography>
        </div>
        <Button variant="outline">
          <Link
            href={`${pathname === ESTABLISHMENT_PATH ? ESTABLISHMENT_EDIT_PATH : ESTABLISHMENT_PATH}`}
          >
            {pathname === ESTABLISHMENT_PATH
              ? 'Edit establishments'
              : 'Create an establishment'}
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <EstablishmentInfoForm />
        <EstablishmentBannersForm />
      </div>
    </div>
  );
};
