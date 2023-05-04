import { Suspense as ReactSuspense, isValidElement, useEffect, useState } from 'react';
import type { SuspenseProps } from 'react';

export const Suspense = ({ fallback, children }: SuspenseProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
  }

  if (!isValidElement(fallback)) {
    return <span>{fallback}</span>;
  }

  return fallback;
};
