import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/GlobalStyle';
import pallete from 'src/styles/pallete';
import 'src/styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={pallete}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
