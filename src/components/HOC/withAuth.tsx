import { redirect } from 'next/navigation';

import { getServerSideToken } from '~/services/token';

type ComponentProps = { token: string | null };

export default function withAuth(Component: React.ComponentType<ComponentProps>) {
  return function WithAuthComponent() {
    const token = getServerSideToken();

    if (!token) redirect('/login');

    return <Component token={token} />;
  };
}
