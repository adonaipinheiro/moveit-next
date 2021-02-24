import type { AppProps } from 'next/app';

// GlobalStyles
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
