import 'src/styles/fonts.css';

import type { AppProps } from 'next/app';
import GlobalStyle from 'src/styles/GlobalStyle';
import pallete from 'src/styles/pallete';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={pallete}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
