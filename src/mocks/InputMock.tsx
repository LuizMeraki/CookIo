import { useReducer, ChangeEvent } from 'react';

import { PropertyType } from '~/types/Form';

import {
  handleLength,
  handleName,
  handleEmail,
  handlePassword,
} from '~/utils/handleChange';

import { reducer } from '~/utils/reducer';

import Input from '~/components/Form/Input';

type InputMockType = {
  label: string;
  type: string;
  placeholder: string;
  property: PropertyType;
};

export const initialValueMock = {
  recipeName: { value: '', error: null },
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};

export function InputMock({ label, type, placeholder, property }: InputMockType) {
  const [state, dispatch] = useReducer(reducer, initialValueMock);

  function switchHandler(e: ChangeEvent<HTMLInputElement>) {
    switch (property) {
      case 'recipeName':
        return handleLength(e, dispatch, property, 2, 100);
      case 'username':
        return handleName(e, dispatch, property, 2, 50);
      case 'email':
        return handleEmail(e, dispatch, property);
      case 'password':
        return handlePassword(e, dispatch, property, 8, 50);
      default:
        return null;
    }
  }

  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      error={state[property].error}
      state={state[property].value}
      onChange={switchHandler}
    />
  );
}
