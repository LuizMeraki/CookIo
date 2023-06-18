import {
  handleName,
  handleEmail,
  handleLength,
  handlePassword,
} from '~/utils/handleChange';

import { InputMock } from '~/mocks/InputMock';

const errorClassName = 'styles_error_7YWZd';

describe('Input - Length test', () => {
  const minLength = 2;
  const maxLength = 100;

  beforeEach(() => {
    cy.mount(
      <InputMock
        label="Nome da Receita"
        type="text"
        placeholder="nomeie sua receita"
        property="recipeName"
        handleChange={handleLength}
        min={minLength}
        max={maxLength}
      />
    );
  });

  it('Should have input focus on label click', () => {
    cy.get('label').click();
    cy.get('input').focused();
  });

  it('Should have min length error', () => {
    cy.get('input').type('J');
    cy.get('span').should('have.text', `informe no mínimo ${minLength} caracteres`);
  });

  it('Should have max length error', () => {
    cy.get('input').type('recipe-name'.repeat(10));
    cy.get('span').should('have.text', `informe no máximo ${maxLength} caracteres`);
  });

  it('Should be valid length', () => {
    cy.get('input').type('Jhon Doe').should('not.have.class', errorClassName);
  });
});

describe('Input - E-mail test', () => {
  beforeEach(() => {
    cy.mount(
      <InputMock
        label="E-mail"
        type="text"
        placeholder="exemplo@gmail.com"
        property="email"
        handleChange={handleEmail}
        min={0}
        max={0}
      />
    );
  });

  it('Should have error on e-mail username', () => {
    cy.get('input').type('jhon#doe@gmail.com');
    cy.get('span').should('have.text', 'informe um e-mail válido');
  });

  it('Should have error on e-mail arroba', () => {
    cy.get('input').type('jhondoegmail.com');
    cy.get('span').should('have.text', 'informe um e-mail válido');
  });

  it('Should have error on e-mail provider', () => {
    cy.get('input').type('jhondoe@.com');
    cy.get('span').should('have.text', 'informe um e-mail válido');
  });

  it('Should have error on email domain', () => {
    cy.get('input').type('jhondoe@gmail');
    cy.get('span').should('have.text', 'informe um e-mail válido');
  });

  it('Should be valid email', () => {
    cy.get('input').type('jhondoe@gmail.com').should('not.have.class', errorClassName);
    cy.get('input').clear();

    cy.get('input').type('jhondoe@yahoo.com.br').should('not.have.class', errorClassName);
    cy.get('input').clear();

    cy.get('input').type('jhondoe@hotmail.com').should('not.have.class', errorClassName);
    cy.get('input').clear();

    cy.get('input')
      .type('jhondoe@outlook.com.br')
      .should('not.have.class', errorClassName);
  });
});

describe('Input - Name test', () => {
  const minLength = 2;
  const maxLength = 50;

  beforeEach(() => {
    cy.mount(
      <InputMock
        label="Nome"
        type="text"
        placeholder="seu nome"
        property="username"
        handleChange={handleName}
        min={minLength}
        max={maxLength}
      />
    );
  });

  it('Should be invalid name', () => {
    cy.get('input').type('Jhon-Doe');
    cy.get('span').should('have.text', 'informe apenas caracteres alfabéticos');
  });

  it('Should be valid name', () => {
    cy.get('input').type('Jhon Doe').should('not.have.class', errorClassName);
  });

  it('Should have min length error', () => {
    cy.get('input').type('J');
    cy.get('span').should('have.text', `informe no mínimo ${minLength} caracteres`);
  });

  it('Should have max length error', () => {
    cy.get('input').type('JhonDoe'.repeat(8));
    cy.get('span').should('have.text', `informe no máximo ${maxLength} caracteres`);
  });

  it('Should be valid length', () => {
    cy.get('input').type('Jhon Doe').should('not.have.class', errorClassName);
  });
});

describe('Input - Password test', () => {
  const error = 'informe apenas caracteres de a-z, 0-9 ou ._!@#$%&';
  const minLength = 8;
  const maxLength = 50;

  beforeEach(() => {
    cy.mount(
      <InputMock
        label="Senha"
        type="password"
        placeholder="########"
        property="password"
        handleChange={handlePassword}
        min={minLength}
        max={maxLength}
      />
    );
  });

  it('Should be invalid password', () => {
    cy.get('input').type('my_password_1234*');
    cy.get('span').should('have.text', error);
  });

  it('Should be valid password', () => {
    cy.get('input').type('!my._p@s$word#1%_&').should('not.have.class', errorClassName);
  });

  it('Should have min length error', () => {
    cy.get('input').type('my_pass');
    cy.get('span').should('have.text', `informe no mínimo ${minLength} caracteres`);
  });

  it('Should have max length error', () => {
    cy.get('input').type('my_psw'.repeat(10));
    cy.get('span').should('have.text', `informe no máximo ${maxLength} caracteres`);
  });

  it('Should be valid length', () => {
    cy.get('input').type('!my._p@s$word#1%_&');
    cy.get('input').should('not.have.class', errorClassName);
  });
});
