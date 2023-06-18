import { ChangeEvent } from 'react';
import { DispatchType, PropertyType } from '~/@types/Form';

function verifyLength(value: string, min: number, max: number) {
  const length = value.trim().length;

  if (length < min) return `informe no mínimo ${min} caracteres`;
  if (length > max) return `informe no máximo ${max} caracteres`;

  return null;
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

export function handleName(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  property: PropertyType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const validationValue = verifyLength(value, min, max);
  const hasNonAlphabeticCharacters = /[^A-Za-z\s]/.test(value);

  if (hasNonAlphabeticCharacters) {
    dispatch({
      property,
      payload: { value, error: 'informe apenas caracteres alfabéticos' },
    });
  } else {
    dispatch({ property, payload: { value, error: validationValue } });
  }
}

export function handleEmail(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  property: PropertyType
) {
  const value = e.target.value;
  const regularExpression = /^[a-z0-9._-]+@(gmail|hotmail|outlook|yahoo).(com|com.br)$/;
  const isEmailValid = regularExpression.test(value);

  if (!isEmailValid) {
    dispatch({
      property,
      payload: { value, error: 'informe um e-mail válido' },
    });
  } else {
    dispatch({ property, payload: { value, error: null } });
  }
}

export function handlePassword(
  e: ChangeEvent<HTMLInputElement>,
  dispatch: DispatchType,
  property: PropertyType,
  min: number,
  max: number
) {
  const value = e.target.value;
  const isPasswordValid = /^[a-zA-Z0-9._!@#$%&]+$/g.test(value);
  const validationValue = verifyLength(value, min, max);

  if (!isPasswordValid) {
    dispatch({
      property,
      payload: { value, error: 'informe apenas caracteres de a-z, 0-9 ou ._!@#$%&' },
    });
  } else {
    dispatch({ property, payload: { value, error: validationValue } });
  }
}
