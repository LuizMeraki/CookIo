import { useState, useEffect } from 'react';

export function useInitGoogleAuth(callback: () => void) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (mounted) callback();
  }, [mounted, callback]);
}
