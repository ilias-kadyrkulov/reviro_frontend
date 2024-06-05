import { Form as EstablishmentBannersForm } from '@/features/partner-banners-form';
import { Form as EstablishmentInfoForm } from '@/features/partner-info-form';
import { Typography } from '@/shared/ui';

export const PartnerProfile = () => {
  return (
    <div className="profile min-h-[calc(100dvh-144px)] p-10 lg:mx-[56px] lg:my-[72px] lg:p-0 sm:mx-[24px]">
      <div className="mb-10">
        <Typography variant="h2">Establishment details</Typography>

        <Typography variant="h5" className="text-theme-grey-500">
          Create establishment
        </Typography>
      </div>

      <div className="flex flex-col gap-5">
        <EstablishmentInfoForm />
        <EstablishmentBannersForm />
      </div>
    </div>
  );
};