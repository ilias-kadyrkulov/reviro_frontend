'use client';

import { useRouter } from 'next/navigation';
import useSWRMutation from 'swr/mutation';

import { TRole } from '@/shared';

import { authorize } from '../api/authorize';

export const useLogin = ({ role }: TRole) => {
  const router = useRouter();
  return useSWRMutation('/users/token/', authorize, {
    onError() {
      console.log('error');
    },
    onSuccess: () => {
      console.log('success');
      role === 'partner'
        ? router.push('/establishment')
        : router.push('/admin/menu');
    },
  });
};