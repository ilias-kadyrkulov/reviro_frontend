import useSWR from 'swr';

import { UserResponse } from '../types';

import { testFetcher } from './../../helper/testFetcher';

export const useGetUser = (id: number) => {
  const { data } = useSWR<UserResponse>(`/users/${id}`, testFetcher);

  return {
    user: data,
  };
};