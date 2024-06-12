import { ComponentPropsWithRef } from 'react';
import { FieldProps } from 'formik';

export type TFormProps = {
  isActive?: boolean;
  setModalState: (bool: boolean) => void;
};

export type ExtendedFieldProps = ComponentPropsWithRef<'input'> &
  FieldProps & {
    label?: string;
    onClick?: () => void;
  };
