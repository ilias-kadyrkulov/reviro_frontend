'use client';

import useSWR from 'swr';

import { fetcher } from '@/shared/lib';

import { CustomerProps, CustomerResponse } from './types';

export const useGetCustomer = ({ id }: CustomerProps) => {
  const { data, isLoading } = useSWR<CustomerResponse>(
    `/orders/partner-customers/${id}`,
    fetcher,
  );

  return {
    customer: data,
    isLoading,
  };
};
