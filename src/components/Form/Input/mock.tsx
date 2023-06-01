import { useReducer } from 'react';

import { PropertyType } from '~/@types/Form';

import { reducer } from '~/helpers/reducer';

import Input from '.';

type InputMockType = {
  label: string;
  type: string;
  placeholder: string;
  property: PropertyType;
  min: number;
  max: number;
  handleChange: (...params: any) => void;
};

export const initialValueMock = {
  recipeName: { value: '', error: null },
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};

export function InputMock({
  label,
  type,
  placeholder,
  property,
  handleChange,
  min,
  max,
}: InputMockType) {
  const [state, dispatch] = useReducer(reducer, initialValueMock);

  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      error={state[property]!.error}
      state={state[property]!.value}
      onChange={(e) => handleChange(e, dispatch, property, min, max)}
    />
  );
}
