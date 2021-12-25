import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import pallete from 'styles/pallete';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={pallete}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
