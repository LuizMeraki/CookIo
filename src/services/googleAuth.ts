import { handleModalRender } from '~/utils/handleModal';

import { api } from './api';
import { setToken } from './token';

export function redirectUserToGoogleAuth() {
  const scopes = {
    profile: 'https://www.googleapis.com/auth/userinfo.profile',
    email: 'https://www.googleapis.com/auth/userinfo.email',
  };

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: 'http://localhost:3000/redirect',
    response_type: 'token',
    scope: `${scopes.profile} ${scopes.email}`,
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

export async function handleGoogleAuth() {
  let redirectPath = '/';

  try {
    const hash = window.location.hash.substring(1);
    const accessToken = new URLSearchParams(hash).get('access_token');

    const response = await api.post('/auth/me', { access_token: accessToken });
    const token = response.data.resultUser.token;

    setToken(token);
  } catch (e: any) {
    handleModalRender('modal-error');
    redirectPath = '/login';
  }

  return redirectPath;
}
