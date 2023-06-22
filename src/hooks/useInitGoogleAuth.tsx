import { useState, useEffect } from 'react';

export function useInitGoogleAuth(callback: (mounted: boolean) => void) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (mounted) callback(mounted);
  }, [mounted, callback]);
}
