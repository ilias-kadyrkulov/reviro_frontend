import { twMerge } from 'tailwind-merge';

import { BreadCrumbs } from '../Breadcrumbs';
import { Typography } from '../Typography';

import { ContainerProps } from './types/Container.types';

export const Container = (props: ContainerProps) => {
  const { children, title, className, ...rest } = props;
  return (
    <div {...rest} className="h-full min-h-[inherit] pb-14 pt-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-8 px-8 md:max-w-none md:px-4">
        <div className="md:space-y-2">
          <div className="hidden md:block">
            <BreadCrumbs />
          </div>

          <Typography variant="h2" weight="bold" className="sm:text-2xl">
            {title}
          </Typography>
        </div>

        <div
          className={twMerge(
            'h-full space-y-8 rounded-md bg-theme-white p-6',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
