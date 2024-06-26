'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { RiCheckDoubleLine, RiCloseCircleLine } from '@remixicon/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SubmitButton } from '@/features/submit-form';
import { useGetUserByEmail } from '@/shared';
import { Error, Input } from '@/shared/ui';

export const Form: FC<{ setCategoryListState: (state: boolean) => void }> = ({
  setCategoryListState,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { user, trigger, error, isMutating } = useGetUserByEmail();

  const [email, setEmail] = useState('');

  const handleCustomerIdQueryParam = useCallback(() => {
    //TODO - Single query param helper
    const params = new URLSearchParams(searchParams);
    params.set('customer_id', user.id);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [user, searchParams, pathname, router]);

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    trigger({ email });
  };

  useEffect(() => {
    if (user) {
      handleCustomerIdQueryParam();
      setCategoryListState(true);
    }
  }, [user]);

  useEffect(() => {
    error && setCategoryListState(false);
  }, [error]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="h-full w-full"
          onChange={handleEmailOnChange}
        />
        <SubmitButton className="w-1/4" isMutating={isMutating}>
          Check
        </SubmitButton>
        {user && !error ? (
          <RiCheckDoubleLine className="h-[50px] w-[50px] fill-green-500" />
        ) : null}
        {error ? (
          <RiCloseCircleLine className="h-[50px] w-[50px] fill-red-500" />
        ) : null}
      </form>

      {error && (
        <Error className="my-1">User with provided email does not exist.</Error>
      )}
    </>
  );
};
