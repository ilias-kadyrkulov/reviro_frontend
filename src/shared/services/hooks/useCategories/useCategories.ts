'use client';

import { useMemo } from 'react';
import useSWR from 'swr';

import { fetcher } from '@/shared';

import { CategoriesProps, TCategoriesResponse } from './types';

export const useCategories = ({ page, limit }: CategoriesProps) => {
  const offset = (page - 1) * limit;

  const { data: categoryData, isLoading } = useSWR<TCategoriesResponse>(
    `/categories/?offset=${offset}&limit=${limit}`,
    fetcher,
    {
      refreshInterval: 20000,
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  useSWR(`/categories/?offset=${offset + limit}&limit=${limit}`, fetcher);

  const memoizedCategories = useMemo(() => {
    return categoryData?.results;
  }, [categoryData?.results]);

  const data = {
    ...categoryData,
    pages: categoryData && Math.ceil(categoryData.count / limit),
  };

  return {
    categories: memoizedCategories,
    data,
    isLoading,
  };
};