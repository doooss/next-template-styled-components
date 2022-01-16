import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalstyle';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
