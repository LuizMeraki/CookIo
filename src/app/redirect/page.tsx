'use client';

import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

import withoutAuth from '~/components/HOC/withoutAuth';
import PageLoading from '~/components/PageLoading';

import { handleGoogleAuth } from '~/services/googleAuth';

function Redirect() {
  const { push } = useRouter();

  useEffect(() => {
    (async () => push(await handleGoogleAuth()))();
  }, [push]);

  return <PageLoading />;
}

export default withoutAuth(Redirect);
