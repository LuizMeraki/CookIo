import { cookies } from 'next/dist/client/components/headers';

const path = 'path=/';
const cookieName = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME!;

export function setToken(token: string) {
  const date = new Date();
  date.setDate(date.getDate() + 30);

  const encodedToken = `${cookieName}=${encodeURI(token)}`;
  const expiration = `expires=${date.toUTCString()}`;

  document.cookie = `${encodedToken};${expiration};${path}`;
}

export function getServerSideToken() {
  const cookiesStore = cookies();
  const cookieValue = cookiesStore.get(cookieName)?.value;

  if (!cookieValue) return null;

  return decodeURI(cookieValue);
}

export function getClientSideToken() {
  const cookiesStore = document.cookie;
  const tokenProperty = cookiesStore.split(';').find((str) => str.includes(cookieName));

  if (!tokenProperty) return null;

  const equalSymbolIndex = tokenProperty.indexOf('=') + 1;
  const token = tokenProperty.slice(equalSymbolIndex);

  return decodeURI(token);
}

export function deleteToken() {
  document.cookie = `${cookieName}=;Mon, 01 Jan 2023 00:00:00 GMT;${path}`;
}
