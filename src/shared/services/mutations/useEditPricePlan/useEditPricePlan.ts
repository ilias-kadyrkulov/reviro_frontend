'use client';

import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';

import { editPricePlan } from '../../api';

export const useEditPricePlan = () => {
  const { mutate } = useSWRConfig();
  return useSWRMutation(
    '/subscriptions/plans/update-pricing-scheme/',
    editPricePlan,
    {
      onError() {
        toast.error('The error occurred');
      },
      onSuccess() {
        mutate(
          key =>
            typeof key === 'string' && key.startsWith('/subscriptions/plans/'),
          undefined,
        );
      },
    },
  );
};
