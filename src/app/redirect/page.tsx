'use client';

import { useEffect } from 'react';

import withoutAuth from '~/components/HOC/withoutAuth';
import PageLoading from '~/components/PageLoading';

import { handleGoogleAuth } from '~/services/googleAuth';

function Redirect() {
  useEffect(() => {
    handleGoogleAuth();
  }, []);

  return <PageLoading />;
}

export default withoutAuth(Redirect);
