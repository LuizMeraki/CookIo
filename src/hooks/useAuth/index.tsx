import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { api } from '~/services/api';
import { setToken } from '~/services/token';

import { AuthDataType, AuthParamsType, DispatchType } from '~/types/Form';

import { handleApiError } from './helpers/handleApiError';

export function useAuth(): [AuthParamsType, boolean] {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function auth(endpoint: string, data: AuthDataType, dispatch: DispatchType) {
    setIsLoading(true);

    try {
      const response = await api.post(endpoint, data);
      const token = response.data.resultUser.token;

      setToken(token);
      router.push('/');
    } catch (e: any) {
      const error = e.response?.data.error ?? '';
      handleApiError(error, dispatch);
    } finally {
      setIsLoading(false);
    }
  }

  return [auth, isLoading];
}
