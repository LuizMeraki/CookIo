import { Dispatch } from 'react';

export type ActionType = 'RECIPE_NAME' | 'USERNAME' | 'EMAIL' | 'PASSWORD'

export type ReducerActionType = {
  type: ActionType
  payload: { value: string, error: string | null }
}

export type DispatchType = Dispatch<ReducerActionType>

export type InitialValueType = {
  recipeName?: { value: string; error: string | null };
  username?: { value: string; error: string | null };
  email?: { value: string; error: string | null };
  password?: { value: string; error: string | null };
};
