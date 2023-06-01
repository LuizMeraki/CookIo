import { Dispatch } from 'react';

export type PropertyType = 'recipeName' | 'username' | 'email' | 'password';

export type ReducerActionType = {
  property: PropertyType;
  payload: { value: string; error: string | null };
};

export type DispatchType = Dispatch<ReducerActionType>;
