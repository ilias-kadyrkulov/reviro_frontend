import { TBeverage } from '@/entities/beverage';

export type TFormEditBeverageState = {
  message?: 'success' | 'error' | '' | string;
  errors?: {
    name?: string[];
    category?: string[];
    price?: string[];
    description?: string[];
    image?: string[];
    in_stock?: string[];
  };
  errorMessage?: string;
  fieldValues?: Partial<TBeverage>;
};
