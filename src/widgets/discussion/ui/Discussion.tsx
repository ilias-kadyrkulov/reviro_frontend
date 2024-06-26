'use client';

import { useParams } from 'next/navigation';

import { CommentInput } from '@/features/comment-input';
import { dateToRelative, useGetPost } from '@/shared';
import { Section, Typography } from '@/shared/ui';
import { Avatar } from '@/shared/ui/Avatar';
import { CommentsList } from '@/widgets/comments-list';

export const Discussion = () => {
  const params = useParams<{ id: string }>();
  const { post } = useGetPost({ id: params.id });

  return (
    <Section>
      <div className="space-y-6">
        <div className="space-y-4 pr-8">
          <Typography variant="h5" weight="medium">
            {post?.title}
          </Typography>

          <div className="inline-flex space-x-2">
            <Avatar
              avatar={post?.author.avatar}
              alt="User"
              name={post?.author.first_name}
              className="mt-1"
              isAdmin={!post?.author.first_name}
            />

            <div>
              {post?.author.first_name || post?.author.last_name ? (
                <Typography variant="paragraph" color="blue">
                  {post?.author.first_name} {post?.author.last_name}
                </Typography>
              ) : (
                <Typography variant="paragraph" color="blue">
                  Admin
                </Typography>
              )}

              <Typography variant="caption" color="grey">
                {dateToRelative(post?.created_at)}
              </Typography>
            </div>
          </div>

          <Typography variant="caption">{post?.content}</Typography>
        </div>

        <CommentInput id={params.id} />
      </div>

      <CommentsList />
    </Section>
  );
};
