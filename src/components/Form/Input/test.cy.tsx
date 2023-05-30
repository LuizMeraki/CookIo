import { useReducer } from 'react';

import { validateName } from '~/helpers/validations';

import { reducerMock, initialValueMock } from './mock';

import Input from '.';

const minLength = 2;
const maxLength = 2;

function InputMock() {
  const [state, dispatch] = useReducer(reducerMock, initialValueMock);

  return (
    <Input
      label="Nome"
      type="text"
      placeholder="seu nome"
      error={state.username!.error}
      state={state.username!.value}
      onChange={(e) => validateName(e, dispatch, 'USERNAME', minLength, maxLength)}
    />
  );
}

describe('Input', () => {
  beforeEach(() => {
    cy.mount(<InputMock />);
  });

  it('Should have input focus on label click', () => {
    cy.get('label').click();
    cy.get('input').focused();
  });

  it('Should not have typing error', () => {
    cy.get('input').type('Jhon Doe');
    cy.get('label').should('not.have.text', 'informe apenas caracteres alfabéticos');
  });

  it('Should have typing error', () => {
    cy.get('input').type('#');
    cy.get('span').should('have.text', 'informe apenas caracteres alfabéticos');
  });

  it('Should have error class', () => {
    cy.get('input').type('#').should('have.class', 'styles_error__7YWZd');
  });

  it('Should have min length error', () => {
    cy.get('input').type('J');
    cy.get('span').should('have.text', `informe no mínimo ${minLength} caracteres`);
  });

  it('Should have max length error', () => {
    cy.get('input').type('JhonDoe'.repeat(5));
    cy.get('span').should('have.text', `informe no máximo ${maxLength} caracteres`);
  });
});
