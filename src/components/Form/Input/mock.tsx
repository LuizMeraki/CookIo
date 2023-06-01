import { useReducer } from 'react';

import { InitialValueType, ReducerActionType, ActionType } from '~/@types/Form';

import Input from '.';

type InputMockType = {
  label: string;
  type: string;
  placeholder: string;
  stateType: 'username' | 'email' | 'password' | 'recipeName';
  actionType: ActionType;
  min: number;
  max: number;
  handleChange: (...params: any) => void;
};

export const initialValueMock: InitialValueType = {
  recipeName: { value: '', error: null },
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};

export function reducerMock(state: InitialValueType, action: ReducerActionType) {
  const value = action.payload.value;
  const error = action.payload.error;

  switch (action.type) {
    case 'RECIPE_NAME':
      return { ...state, recipeName: { value, error } };
    case 'USERNAME':
      return { ...state, username: { value, error } };
    case 'EMAIL':
      return { ...state, email: { value, error } };
    case 'PASSWORD':
      return { ...state, password: { value, error } };
    default:
      return state;
  }
}

export function InputMock({
  label,
  type,
  placeholder,
  stateType,
  actionType,
  handleChange,
  min,
  max,
}: InputMockType) {
  const [state, dispatch] = useReducer(reducerMock, initialValueMock);

  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      error={state[stateType]!.error}
      state={state[stateType]!.value}
      onChange={(e) => handleChange(e, dispatch, actionType, min, max)}
    />
  );
}
