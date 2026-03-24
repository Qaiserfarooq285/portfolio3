'use client';

import { useLayoutEffect } from 'react';

export default function ScrollToTopOnLoad() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });

    const forceTop = () => window.scrollTo({ top: 0, behavior: 'auto' });
    const frameId = window.requestAnimationFrame(forceTop);
    const timeoutId = window.setTimeout(forceTop, 120);

    window.addEventListener('load', forceTop);
    window.addEventListener('pageshow', forceTop);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('load', forceTop);
      window.removeEventListener('pageshow', forceTop);
    };
  }, []);

  return null;
}
