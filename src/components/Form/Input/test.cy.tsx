import { useReducer } from 'react';

import { validateName } from '~/helpers/validations';

import { reducerMock, initialValueMock } from './mock';

import Input from '.';

function InputInstance() {
  const [state, dispatch] = useReducer(reducerMock, initialValueMock);

  return (
    <Input
      label="Nome"
      type="text"
      placeholder="seu nome"
      error={state.username!.error}
      state={state.username!.value}
      onChange={(e) => validateName(e, dispatch, 'USERNAME', 2, 50)}
    />
  );
}

describe('Input', () => {
  it('Should mount', () => {
    cy.mount(<InputInstance />);
  });
});
