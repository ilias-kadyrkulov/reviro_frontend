'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { CREATE_CATEGORY, useCloseForm } from '@/shared';
import { Button, Typography } from '@/shared/ui';

import { CreateCategoryForm } from '.';

export const CreateCategory = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOnCreate = () => {
    setIsModalActive(true);
  };

  useCloseForm({ elementId: CREATE_CATEGORY, setter: setIsModalActive });

  return (
    <>
      <div className="flex justify-end">
        <Button variant="primary" onClick={handleOnCreate}>
          <Typography variant="paragraph">Create category</Typography>
        </Button>
      </div>

      <div
        id="create-category"
        className={clsx(
          'fixed left-2/4 top-2/4 z-50 flex w-[400px] -translate-x-2/4 -translate-y-2/4 flex-col items-center justify-center gap-1 transition-all duration-300',
          {
            'invisible opacity-0': !isModalActive,
            'visible opacity-100': isModalActive,
          },
        )}
      >
        <div className="w-full rounded-lg bg-white p-[24px] shadow-[0px_0px_30px_3000px_rgba(0,0,0,0.7)]">
          <Typography variant="paragraph" weight="medium">
            Create Category
          </Typography>
          <CreateCategoryForm setModalState={setIsModalActive} />
        </div>
      </div>
    </>
  );
};
