import { AppProps } from 'next/app';

export type AppPropsWithLayout = AppProps & {
  Component: any;
  pageProps: any;
};
