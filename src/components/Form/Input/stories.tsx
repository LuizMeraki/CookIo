import { Meta, StoryObj } from '@storybook/react';

import { useReducer } from 'react';

import { ReducerActionType } from '~/@types/form';

import {
  validateLength,
  validateEmail,
  validateName,
  validatePassword,
} from '~/helpers/validations';

import Input from '.';

type StoryType = StoryObj<typeof Input>;

type InitialValueType = {
  recipeName: { value: string; error: string | null };
  username: { value: string; error: string | null };
  email: { value: string; error: string | null };
  password: { value: string; error: string | null };
};

export default {
  title: 'Components/Input',
  component: Input,
  args: { type: 'text' },
} as Meta<typeof Input>;

const initialValue: InitialValueType = {
  recipeName: { value: '', error: null },
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};

function reducer(state: InitialValueType, action: ReducerActionType) {
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

function SharedReducer() {
  return useReducer(reducer, initialValue);
}

export const RecipeName: StoryType = {
  render: (args) => {
    const [state, dispatch] = SharedReducer();

    return (
      <Input
        {...args}
        label="Nome da Receita"
        placeholder="dê um nome para receita"
        state={state.recipeName.value}
        error={state.recipeName.error}
        onChange={(e) => validateLength(e, dispatch, 'RECIPE_NAME', 2, 50)}
      />
    );
  },
};

export const Username: StoryType = {
  render: (args) => {
    const [state, dispatch] = SharedReducer();

    return (
      <Input
        {...args}
        label="Nome"
        placeholder="seu nome"
        state={state.username.value}
        error={state.username.error}
        onChange={(e) => validateName(e, dispatch, 'USERNAME', 2, 50)}
      />
    );
  },
};

export const Email: StoryType = {
  render: (args) => {
    const [state, dispatch] = SharedReducer();

    return (
      <Input
        {...args}
        label="E-mail"
        placeholder="exemplo@gmail.com"
        state={state.email.value}
        error={state.email.error}
        onChange={(e) => validateEmail(e, dispatch, 'EMAIL')}
      />
    );
  },
};

export const Password: StoryType = {
  render: (args) => {
    const [state, dispatch] = SharedReducer();

    return (
      <Input
        {...args}
        label="Senha"
        placeholder="digite sua senha"
        state={state.password.value}
        error={state.password.error}
        onChange={(e) => validatePassword(e, dispatch, 'USERNAME', 2, 10)}
      />
    );
  },
};
