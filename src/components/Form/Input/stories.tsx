import { Meta, StoryObj } from '@storybook/react';

import { useReducer } from 'react';

import { reducerMock, initialValueMock } from './mock';

import Input from '.';

import {
  validateLength,
  validateEmail,
  validateName,
  validatePassword,
} from '~/helpers/validations';

type StoryType = StoryObj<typeof Input>;

export default {
  title: 'Components/Input',
  component: Input,
  args: { type: 'text' },
} as Meta<typeof Input>;

function SharedReducer() {
  return useReducer(reducerMock, initialValueMock);
}

export const RecipeName: StoryType = {
  render: (args) => {
    const [state, dispatch] = SharedReducer();

    return (
      <Input
        {...args}
        label="Nome da Receita"
        placeholder="dê um nome para receita"
        state={state.recipeName!.value}
        error={state.recipeName!.error}
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
        state={state.username!.value}
        error={state.username!.error}
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
        state={state.email!.value}
        error={state.email!.error}
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
        state={state.password!.value}
        error={state.password!.error}
        onChange={(e) => validatePassword(e, dispatch, 'USERNAME', 2, 10)}
      />
    );
  },
};
