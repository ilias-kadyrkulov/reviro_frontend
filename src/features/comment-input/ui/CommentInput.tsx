'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { mutate } from 'swr';

import { useAddComment } from '@/shared';
import { Button } from '@/shared/ui';

interface CommentInput {
  id: string;
}

export const CommentInput = (props: CommentInput) => {
  const { id } = props;
  const { trigger } = useAddComment();
  const [comment, setComment] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const sendComment: MouseEventHandler = e => {
    e.preventDefault();

    trigger({ message: comment, post: id });
    mutate(`/support/posts/${id}`);

    setComment('');
  };

  return (
    <div className="rounded-md border border-theme-grey-200 focus-within:border-theme-grey-400">
      <TextareaAutosize
        maxRows={10}
        ref={textareaRef}
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Add a comment"
        className="block w-full resize-none border-0 bg-transparent px-4 py-2.5 text-sm text-theme-black outline-none placeholder:text-sm placeholder:text-theme-grey-400 focus:ring-0 disabled:bg-theme-grey-300 disabled:placeholder:text-theme-grey-400"
      />

      <div
        className="flex justify-end gap-2 px-2 py-1"
        onClick={() => textareaRef.current?.focus()}
      >
        <Button
          size="sm"
          disabled={!comment}
          className="border border-theme-grey-200"
          onClick={sendComment}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};
