'use client';

import { ComponentPropsWithoutRef, FC } from 'react';
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';

import { SubmitButton } from '@/features/submit-form';
import { logo } from '@/shared';
import { useLogin } from '@/shared/services/mutations/useLogin';
import { Typography } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/Input';

type TFormValues = {
  email: string;
  password: string;
};

export const Form = () => {
  const { trigger, isMutating, error } = useLogin();

  const handleLogin = async ({ email, password }: TFormValues) => {
    if (email && password) {
      trigger({ email: email, password: password });
    }
  };

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required('Required.').email(),
    password: Yup.string().required('Required.'),
  });

  return (
    <div className="flex w-[762px] rounded-xl bg-[#fdfdfd]">
      <div className="flex w-2/4 flex-col items-center justify-center gap-[56px] px-[56px] py-[129px]">
        <Typography variant="h2" weight="bold">
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
          validationSchema={LoginFormSchema}
        >
          <FormikForm className="flex flex-col gap-2">
            <Field
              name="email"
              type="email"
              as={Input}
              className="w-full"
              placeholder="Email"
            />
            <ErrorMessage name="email" render={msg => <Error>{msg}</Error>} />
            <Field
              name="password"
              type="password"
              as={Input}
              className=" w-full"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              render={msg => <Error className="mb-6">{msg}</Error>}
            />
            {error && <Error>{error}</Error>}
            <SubmitButton isMutating={isMutating}>Login</SubmitButton>
          </FormikForm>
        </Formik>
      </div>
      <div className="w-2/4 rounded-r-xl bg-[#292B74] px-[70px] py-[56px]">
        <Image src={logo} alt="logo" width={240} height={400} />
      </div>
    </div>
  );
};

const Error: FC<ComponentPropsWithoutRef<'div'>> = ({
  children,
  className,
}) => <div className={twMerge(' text-red-300', className)}>{children}</div>;
