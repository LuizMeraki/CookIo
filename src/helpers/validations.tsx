import { ChangeEvent } from 'react';
import { DispatchType, ActionType } from '~/@types/Form';

function verifyLength(value: string, min: number, max: number) {
  const length = value.trim().length;

  if (length < min) return `informe no mínimo ${min} caracteres`;
  if (length > max) return `informe no máximo ${max} caracteres`;

  return null;
}

export function validateLength(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  type: ActionType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const validationValue = verifyLength(value, min, max);

  dispatch({
    type,
    payload: { value, error: validationValue },
  });
}

export function validateName(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  type: ActionType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const validationValue = verifyLength(value, min, max);
  const hasNonAlphabeticCharacters = /[^A-Za-z\s]/.test(value);

  if (hasNonAlphabeticCharacters) {
    dispatch({
      type,
      payload: { value, error: 'informe apenas caracteres alfabéticos' },
    });
  } else {
    dispatch({ type, payload: { value, error: validationValue } });
  }
}

export function validateEmail(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  type: ActionType
) {
  const value = e.target.value;
  const regularExpression = /^[a-z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
  const isEmailValid = regularExpression.test(value);

  if (!isEmailValid) {
    dispatch({
      type,
      payload: { value, error: 'informe um e-mail válido' },
    });
  } else {
    dispatch({ type, payload: { value, error: null } });
  }
}

export function validatePassword(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  type: ActionType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const isPasswordValid = /^[a-zA-Z0-9._!@#$%&]+$/g.test(value);
  const validationValue = verifyLength(value, min, max);

  if (!isPasswordValid) {
    dispatch({
      type,
      payload: { value, error: 'informe apenas caracteres de a-z, 0-9 ou ._!@#$%&' },
    });
  } else {
    dispatch({ type, payload: { value, error: validationValue } });
  }
}
