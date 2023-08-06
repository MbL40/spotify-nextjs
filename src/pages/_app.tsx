import { SessionProvider } from 'next-auth/react';

import type { AppPropsWithLayout } from '@/shared/types/app/app.types';

export default function Spotify({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}
