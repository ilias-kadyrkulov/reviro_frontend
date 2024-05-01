'use client';

import { FC, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import clsx from 'clsx';

import { SubmitButton } from '@/features';
import { createBeverage } from '@/features/add-beverage-form';
import { CREATE_BEVERAGE_FORM, useCloseForm, useCreateModal } from '@/shared';
import { Button, Typography } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/Input';

export const Form: FC = () => {
  const { isActive, setModalState } = useCreateModal();

  const initialState = {
    message: '',
    errors: undefined,
    errorMessage: '',
    fieldValues: {
      name: '',
      category: '',
      price: '',
      desc: '',
      quantity: '',
      image: {},
    },
  };

  const [formState, formAction] = useFormState(createBeverage, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const handleCreateModalOnClose = () => {
    setModalState(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isActive) {
      timeoutId = setTimeout(() => {
        formState.errors = undefined;
      }, 200);
    }

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  useEffect(() => {
    if (formState.message === 'success') {
      setModalState(false);
      formRef.current?.reset();
    }
    console.log(formState, 'create');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  useCloseForm(CREATE_BEVERAGE_FORM, setModalState);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="mt-[16px] flex flex-col gap-3"
    >
      {formState.errorMessage && (
        <Typography variant="paragraph" className="text-red-400">
          {formState.errorMessage}
        </Typography>
      )}
      <Input
        type="text"
        name="name"
        placeholder="Name"
        className={clsx({
          'border-red-400': formState.errors?.name,
        })}
        defaultValue={formState.fieldValues?.name}
      />
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.name}
      </Typography>

      <Input
        type="text"
        name="category"
        placeholder="Category"
        className={clsx({
          'border-red-400': formState.errors?.category,
        })}
        defaultValue={formState.fieldValues?.category}
      />
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.category}
      </Typography>

      <Input
        type="text"
        name="price"
        placeholder="Price"
        className={clsx({
          'border-red-400': formState.errors?.price,
        })}
        defaultValue={formState.fieldValues?.price}
      />
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.price}
      </Typography>

      <Input
        type="text"
        name="desc"
        placeholder="Description"
        className={clsx('pb-[50px]', {
          'border-red-400': formState.errors?.desc,
        })}
        defaultValue={formState.fieldValues?.desc}
      />
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.desc}
      </Typography>

      <label className="relative inline-block">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="bg-theme-grey-200"
        >
          <Input
            type="file"
            name="image"
            placeholder="Choose image"
            className={clsx(
              'absolute left-0 top-0 z-10 block h-full w-full opacity-0',
              {
                'border-red-400': formState.errors?.image,
              },
            )}
          />
          Choose image
        </Button>
      </label>
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.image}
      </Typography>

      <Input
        type="text"
        name="quantity"
        placeholder="Quantity"
        className={clsx({
          'border-red-400': formState.errors?.quantity,
        })}
        defaultValue={formState.fieldValues?.quantity}
      />
      <Typography variant="paragraph" className="text-red-400">
        {formState.errors?.quantity}
      </Typography>

      <div className="flex gap-2.5">
        <Button
          type="button"
          variant="outline"
          width="full"
          onClick={handleCreateModalOnClose}
        >
          Close
        </Button>

        <SubmitButton type="create" />
      </div>
    </form>
  );
};