import { FC } from 'react';

import { TUser } from '@/entities/user';

export const User: FC<TUser> = ({ name, email, phone }) => {
  return (
    <li className="flex gap-5 divide-x rounded-lg p-2">
      <h2>{name}</h2>
      <span>{email}</span>
      <span>{phone}</span>
    </li>
  );
};