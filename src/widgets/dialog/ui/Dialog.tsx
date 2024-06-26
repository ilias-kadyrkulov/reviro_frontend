'use client';

import { ComponentProps } from 'react';
import { RiCloseFill } from '@remixicon/react';

import { Button, Typography } from '@/shared/ui';

interface DialogProps extends ComponentProps<'dialog'> {
  title: string;
  open: boolean;
  btnLabel?: string;
  isDelete?: boolean;
  onOpenChange: () => void;
  onSubmit?: () => void;
}

export const Dialog = (props: DialogProps) => {
  const { title, open, children, btnLabel, isDelete, onOpenChange, onSubmit } =
    props;

  const dialog: JSX.Element | null = open ? (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-theme-black/50"
        onClick={onOpenChange}
      ></div>

      <div className="z-50 w-full max-w-lg overflow-hidden rounded-md bg-theme-white">
        <div className="flex px-9 pt-6">
          <Typography variant="h4" className="flex-1" weight="medium">
            {title}
          </Typography>

          <Button
            btnType="icon"
            variant="outline"
            size="sm"
            onClick={onOpenChange}
          >
            <RiCloseFill />
          </Button>
        </div>

        <div className="px-9 py-8">{children}</div>

        <div className="flex justify-end gap-2 border border-t bg-theme-grey-100 px-9 py-4">
          <Button
            variant="outline"
            onClick={onOpenChange}
            size="md"
            className="font-medium"
          >
            Cancel
          </Button>

          <Button
            variant={!isDelete ? 'primary' : 'delete'}
            type="submit"
            form="form"
            size="md"
            className="font-medium"
            onClick={onSubmit}
          >
            {btnLabel || 'Create'}
          </Button>
        </div>
      </div>
    </div>
  ) : null;

  return dialog;
};
