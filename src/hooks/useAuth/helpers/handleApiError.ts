import { handleModalRender } from '~/utils/handleModal';
import { handleExternalErrors } from '~/utils/handleChange';

import { DispatchType } from '~/types/Form';

function getStateProperty(error: string) {
  if (error.includes('e-mail')) return 'email';
  if (error.includes('senha')) return 'password';

  return null;
}

export function handleApiError(error: any, dispatch: DispatchType) {
  const property = getStateProperty(error);

  if (property) {
    handleExternalErrors(error, dispatch, property);
  } else {
    handleModalRender('modal-error');
  }
}
