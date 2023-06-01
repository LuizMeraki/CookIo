import { Dispatch } from 'react';

export type PropertyType = 'recipeName' | 'username' | 'email' | 'password';

export type ReducerActionType = {
  property: PropertyType;
  payload: { value: string; error: string | null };
};

export type DispatchType = Dispatch<ReducerActionType>;

export type InitialValueType = {
  recipeName?: { value: string; error: string | null };
  username?: { value: string; error: string | null };
  email?: { value: string; error: string | null };
  password?: { value: string; error: string | null };
};
