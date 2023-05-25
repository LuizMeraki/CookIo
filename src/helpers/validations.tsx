import { Dispatch } from 'react';
import { ActionType } from '~/@types/form';

export function validateLength(
  dispatch: Dispatch<ActionType>,
  actionType: string,
  value: string,
  min: number,
  max: number
) {
  const length = value.trim().length;

  if (length < min) {
    dispatch({
      actionType,
      propKey: 'error',
      payload: `informe no mínimo ${min} caracteres`,
    });
  } else if (length > max) {
    dispatch({
      actionType,
      propKey: 'error',
      payload: `informe no máximo ${max} caracteres`,
    });
  } else {
    dispatch({ actionType, propKey: 'error', payload: null });
  }
}
