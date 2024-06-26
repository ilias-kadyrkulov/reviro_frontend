import { FC } from 'react';
import { cva } from 'cva';
import { twMerge } from 'tailwind-merge';

import { Typography } from '@/shared/ui';
import { CardTitle, TCardProps } from '@/widgets/dashboard';

export const Card: FC<TCardProps> = props => {
  const { className, data, variant } = props;

  const cardVariants = cva(
    [
      'flex w-2/4 flex-col items-center justify-center gap-6 rounded-md py-[98px] lg:w-full',
    ],
    {
      variants: {
        variant: {
          quantity: 'bg-[#292B74]',
          sum: 'bg-[#137AF1]',
        },
      },
    },
  );

  const classNames = twMerge(cardVariants({ variant }), className);

  return (
    <div className={classNames}>
      <Typography variant="h1" className="text-7xl text-white" weight="bold">
        {variant === 'sum' ? `${data}⃀` : data}
      </Typography>
      {variant === 'quantity' && <CardTitle>Total number of orders</CardTitle>}
      {variant === 'sum' && <CardTitle>Total sum of beverages sold</CardTitle>}
    </div>
  );
};
