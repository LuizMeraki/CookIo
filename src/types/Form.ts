import { Dispatch } from 'react';

type StateValueType = {
  value: string;
  error: string | null;
};

export type PropertyType =
  | 'recipeName'
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword';

export type ReducerStateType = {
  recipeName?: StateValueType;
  username?: StateValueType;
  email?: StateValueType;
  password?: StateValueType;
  confirmPassword?: StateValueType;
};

export type ReducerActionType = {
  property: PropertyType;
  payload: { value: string; error: string | null };
};

export type DispatchType = Dispatch<ReducerActionType>;

export type AuthDataType = {
  name?: string;
  email: string;
  password: string;
};

export type AuthParamsType = (endpoint: string, data: AuthDataType) => Promise<void>;
