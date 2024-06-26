import { TEstablishment } from '@/shared';
import { extractStructuredErrors } from '@/shared/lib';

import { drinkjoyApi } from '../../interceptors/interceptors';

import { CreateEstablishmentArg } from './types';

export const createEstablishment = async (
  url: string,
  {
    arg,
  }: {
    arg: CreateEstablishmentArg;
  },
) => {
  try {
    const formData = createFormData(arg);

    const { data } = await drinkjoyApi.post<TEstablishment>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    localStorage.setItem('establishment_id', String(data.id));
    return data;
  } catch (error: any) {
    throw extractStructuredErrors(error.response.data);
  }
};

const createFormData = (arg: Record<string, any>) => {
  const formData = new FormData();

  Object.entries(arg).forEach(([key, value]) => {
    if (!!value) {
      formData.append(key, value);
    }
  });

  return formData;
};
