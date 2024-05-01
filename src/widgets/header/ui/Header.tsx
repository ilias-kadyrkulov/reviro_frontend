import { RiProfileLine } from '@remixicon/react';

import { Typography } from '@/shared/ui';

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-20 ml-[138px] h-[76px] w-header bg-theme-white shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex">
          <Typography variant="paragraph" color="grey">
            Establishment
          </Typography>
        </div>

        <div className="flex gap-2">
          <Typography variant="paragraph" color="grey">
            Bublik
          </Typography>

          <RiProfileLine />
        </div>
      </div>
    </header>
  );
};