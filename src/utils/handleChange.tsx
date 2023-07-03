import { ChangeEvent } from 'react';
import { DispatchType, PropertyType } from '~/types/Form';

function verifyLength(value: string, min: number, max: number) {
  const length = value.trim().length;

  if (length < min) return `informe no mínimo ${min} caracteres`;
  if (length > max) return `informe no máximo ${max} caracteres`;

  return null;
}

function verifyPasswords(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

export function handleExternalErrors(
  value: string,
  error: string | null,
  dispatch: DispatchType,
  property: PropertyType
) {
  dispatch({
    property,
    payload: { value, error },
  });
}

export function handleLength(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  property: PropertyType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const validationValue = verifyLength(value, min, max);

  dispatch({
    property,
    payload: { value, error: validationValue },
  });
}

export function handleName(e: ChangeEvent<HTMLInputElement>, dispatch: DispatchType) {
  const value = e.target.value;
  const usernameProperty = 'username';
  const validationValue = verifyLength(value, 2, 50);
  const hasNonAlphabeticCharacters = /[^A-Za-z\s]/.test(value);

  if (hasNonAlphabeticCharacters) {
    dispatch({
      property: usernameProperty,
      payload: { value, error: 'informe apenas caracteres alfabéticos' },
    });
  } else {
    dispatch({ property: usernameProperty, payload: { value, error: validationValue } });
  }
}

export function handleEmail(e: ChangeEvent<HTMLInputElement>, dispatch: DispatchType) {
  const value = e.target.value;
  const emailProperty = 'email';
  const regularExpression = /^[a-z0-9._-]+@(gmail|hotmail|outlook|yahoo).(com|com.br)$/;
  const isEmailValid = regularExpression.test(value);

  if (!isEmailValid) {
    dispatch({
      property: emailProperty,
      payload: { value, error: 'informe um e-mail válido' },
    });
  } else {
    dispatch({ property: emailProperty, payload: { value, error: null } });
  }
}

export function handlePassword(
  e: ChangeEvent<HTMLInputElement>,
  confirmPassword: { value: string; error: string | null },
  dispatch: DispatchType
) {
  const value = e.target.value;
  const passwordProperty = 'password';
  const confirmPasswordProperty = 'confirmPassword';

  const isConfirmPasswordFilled = confirmPassword.value !== '';
  const isPasswordValid = /^[a-zA-Z0-9._!@#$%&]+$/g.test(value);
  const isPasswordsEqual = verifyPasswords(value, confirmPassword.value);
  const validationValue = verifyLength(value, 8, 50);

  if (!isPasswordValid) {
    dispatch({
      property: passwordProperty,
      payload: { value, error: 'informe apenas caracteres de a-z, 0-9 ou ._!@#$%&' },
    });

    return;
  } else {
    dispatch({ property: passwordProperty, payload: { value, error: validationValue } });
  }

  if (!isPasswordsEqual && isConfirmPasswordFilled) {
    dispatch({
      property: confirmPasswordProperty,
      payload: { value: confirmPassword.value, error: 'as senhas não correspondem' },
    });
  } else {
    dispatch({
      property: confirmPasswordProperty,
      payload: { value: confirmPassword.value, error: null },
    });
  }
}

export function handleConfirmPassword(
  e: ChangeEvent<HTMLInputElement>,
  password: string,
  dispatch: DispatchType
) {
  const confirmPassword = e.target.value;
  const confirmPasswordProperty = 'confirmPassword';
  const isPasswordsEqual = verifyPasswords(password, confirmPassword);

  if (!isPasswordsEqual) {
    dispatch({
      property: confirmPasswordProperty,
      payload: { value: confirmPassword, error: 'as senhas não correspondem' },
    });
  } else {
    dispatch({
      property: confirmPasswordProperty,
      payload: { value: confirmPassword, error: null },
    });
  }
}
