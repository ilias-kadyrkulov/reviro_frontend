import { TEstablishmentInfoForm } from '@/features/partner-info-form';
import { extractStructuredErrors } from '@/shared/helper';

import { drinkjoyApi } from '../interceptors';

export const createEstablishment = async (
  url: string,
  {
    arg,
  }: {
    arg: TEstablishmentInfoForm;
  },
) => {
  try {
    const formData = createFormData(arg);

    const { data } = await drinkjoyApi.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    localStorage.setItem('establishment_id', data.id);
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
