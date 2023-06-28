import { useState, useRef, useEffect } from 'react';

export function useClientSide(callback: () => any) {
  const [mounted, setMounted] = useState(false);
  const functionReturn = useRef<any>(null);

  useEffect(() => {
    setMounted(true);

    if (mounted) functionReturn.current = callback();
  }, [mounted, callback]);

  return functionReturn.current;
}
