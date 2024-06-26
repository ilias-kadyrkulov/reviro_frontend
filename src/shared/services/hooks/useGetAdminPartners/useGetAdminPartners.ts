'use client';

import useSWR from 'swr';

import { fetcher } from '@/shared/lib';

import { AdminPartnersProps, AdminPartnersResponse } from './types';

export const useGetAdminPartners = ({ page, limit }: AdminPartnersProps) => {
  const offset = (page - 1) * limit;

  const {
    data: partnerData,
    isLoading,
    mutate,
  } = useSWR<AdminPartnersResponse>(
    `/users/register/partner/?offset=${offset}&limit=${limit}`,
    fetcher,
    { keepPreviousData: true },
  );

  useSWR(
    `/users/register/partner/?offset=${offset + limit}&limit=${limit}`,
    fetcher,
  );

  const data = {
    ...partnerData,
    pages: partnerData && Math.ceil(partnerData.count / limit),
    results: partnerData?.results.toSorted((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;

      return 0;
    }),
  };

  return {
    data,
    isLoading,
    mutate,
  };
};
