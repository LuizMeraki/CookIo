import { ReducerType } from '~/@types/form';

const defaultPropKey = 'error';

export function validateLength(
  dispatch: ReducerType,
  actionType: string,
  value: string,
  min: number,
  max: number
) {
  const length = value.trim().length;

  if (length < min) {
    dispatch({
      actionType,
      propKey: defaultPropKey,
      payload: `informe no mínimo ${min} caracteres`,
    });

    return true;
  } else if (length > max) {
    dispatch({
      actionType,
      propKey: defaultPropKey,
      payload: `informe no máximo ${max} caracteres`,
    });

    return true;
  } else {
    dispatch({ actionType, propKey: defaultPropKey, payload: null });

    return false;
  }
}

export function validateName(
  dispatch: ReducerType,
  actionType: string,
  value: string,
  min: number,
  max: number
) {
  const hasNonAlphabeticCharacters = /[^A-Za-z\s]/.test(value);
  const hasLengthError = validateLength(dispatch, actionType, value, min, max);

  if (hasNonAlphabeticCharacters) {
    dispatch({
      actionType,
      propKey: defaultPropKey,
      payload: 'informe apenas caracteres alfabéticos',
    });
  } else if (!hasLengthError) {
    dispatch({ actionType, propKey: defaultPropKey, payload: null });
  }
}

export function validateEmail(dispatch: ReducerType, actionType: string, value: string) {
  const trimmedValue = value.trim();
  const regularExpression = /^[a-z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
  const isEmailValid = regularExpression.test(trimmedValue);

  if (!isEmailValid) {
    dispatch({
      actionType,
      propKey: defaultPropKey,
      payload: 'informe um e-mail válido',
    });
  } else {
    dispatch({ actionType, propKey: defaultPropKey, payload: null });
  }
}

export function validatePassword(
  dispatch: ReducerType,
  actionType: string,
  value: string,
  min: number,
  max: number
) {
  const trimmedValue = value.trim();
  const isPasswordValid = /^[a-zA-Z0-9._!@#$%&]+$/g.test(trimmedValue);
  const hasLengthError = validateLength(dispatch, actionType, value, min, max);

  if (!isPasswordValid) {
    dispatch({
      actionType,
      propKey: defaultPropKey,
      payload: 'informe apenas caracteres de a-z, 0-9 ou ._!@#$%&',
    });
  } else if (!hasLengthError && isPasswordValid){
    dispatch({ actionType, propKey: defaultPropKey, payload: null });
  }
}
