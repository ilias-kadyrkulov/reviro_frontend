'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { TFormState } from '@/features/add-beverage-form';
import { IUserJwtPayload } from '@/shared';

const FormSchema = z.object({
  name: z
    .string({ required_error: 'Name is required.' })
    .min(1, { message: 'Name should not be empty.' })
    .max(50, { message: 'Name should not be more than 50 characters.' }),
  category: z
    .number({
      required_error: 'Category is required.',
    })
    .min(1, { message: 'Category should not be empty.' })
    .max(50, { message: 'Category should not be more than 50 characters.' }),
  price: z
    .number({ required_error: 'Price is required.' })
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  description: z
    .string({ required_error: 'Description is required.' })
    .min(1, { message: 'Description should not be empty.' })
    .max(100, {
      message: 'Description should not be more than 100 characters.',
    }),
  in_stock: z
    .number({ required_error: 'Quantity is required.' })
    .gte(0, { message: 'Please enter an amount greater or equal than 0.' })
    .min(1, { message: 'Quantity should not be empty.' }),
  image: z.instanceof(File).refine(file => file.size > 0, {
    message: 'Image file is required and should not be empty.',
  }),
});

export const createBeverage = async (
  menuId: number,
  user: IUserJwtPayload,
  currentState: TFormState,
  formData: FormData,
) => {
  const name = formData.get('name') as string;
  const category = formData.get('category') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;
  const in_stock = formData.get('in_stock') as string;
  const image = formData.get('image');

  const validatedFields = FormSchema.safeParse({
    name,
    category: Number(category),
    price: Number(price),
    description,
    in_stock: Number(in_stock),
    image,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'error',
    };
  }

  const reqBody = {
    menu: menuId,
    ...validatedFields.data,
  };
  console.log(reqBody, 'req body handler');

  try {
    const response = await fetch(
      `${process.env.DEPLOY_URL}/api/partner/beverages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
        body: JSON.stringify(reqBody),
      },
    ).then(res => res.json());

    console.log(response, 'add bev response handler');

    return {
      message: 'success',
      errors: undefined,
      fieldValues: {
        name: '',
        category: '',
        price: '',
        description: '',
        in_stock: '',
        image: null,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      message: 'error',
      errors: undefined,
      errorMessage: 'Could not add the beverage.',
      fieldValues: {
        name,
        category,
        price,
        description,
        in_stock,
        image,
      },
    };
  } finally {
    revalidatePath('/partner/menu');
  }
};
