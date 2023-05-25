import { Meta, StoryObj } from '@storybook/react';
import { useReducer } from 'react';
import { ActionType } from '~/@types/form';
import { validatePassword, validateName, validateEmail } from '~/helpers/validations';
import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta<typeof Input>;

type StoryType = StoryObj<typeof Input>

const initialValue = {
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};

function reducer(state: typeof initialValue, action: ActionType) {
  switch (action.actionType) {
    case 'username':
      return {
        ...state,
        username: { ...state.username, [action.propKey]: action.payload },
      };
    case 'email':
      return { ...state, email: { ...state.email, [action.propKey]: action.payload } };
    case 'password':
      return {
        ...state,
        password: { ...state.password, [action.propKey]: action.payload },
      };
    default:
      return state;
  }
}

function UsernameTemplate(args: any) {
  const [ state, dispatch ] = useReducer(reducer, initialValue);

  return (
    <Input
      {...args}
      label='Nome'
      type='text'
      placeholder='seu nome'
      actionType='username'
      state={state.username.value}
      dispatch={dispatch}
      error={state.username.error}
      onKeyUp={() => validateName(dispatch, 'username', state.username.value, 2, 50)}
    />
  );
}

function EmailTemplate(args: any) {
  const [ state, dispatch ] = useReducer(reducer, initialValue);

  return (
    <Input
      {...args}
      label='E-mail'
      type='text'
      placeholder='exemplo@gmail.com'
      actionType='email'
      state={state.email.value}
      dispatch={dispatch}
      error={state.email.error}
      onKeyUp={() => validateEmail(dispatch, 'email', state.email.value)}
    />
  );
}

function PasswordTemplate(args: any) {
  const [ state, dispatch ] = useReducer(reducer, initialValue);

  return (
    <Input
      {...args}
      label='Senha'
      type='password'
      placeholder='########'
      actionType='password'
      state={state.password.value}
      dispatch={dispatch}
      error={state.password.error}
      onKeyUp={() => validatePassword(dispatch, 'password', state.password.value, 8, 50)}
    />
  );
}

export const Username: StoryType = {
  render: (args) => <UsernameTemplate {...args} />,
};

export const Email: StoryType = {
  render: (args) => <EmailTemplate {...args} />,
};

export const Password: StoryType = {
  render: (args) => <PasswordTemplate {...args} />,
};
