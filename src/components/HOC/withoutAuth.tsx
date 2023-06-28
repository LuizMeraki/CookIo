'use client';

import { redirect } from 'next/navigation';

import { useClientSide } from '~/hooks/useClientSide';
import { getClientSideToken } from '~/services/token';

export default function withoutAuth(Component: React.ComponentType) {
  return function WithoutAuthComponent() {
    const token = useClientSide(getClientSideToken);

    if (typeof token === 'string') redirect('/');

    return <Component />;
  };
}
