import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { wrapper } from 'store/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import pallete from 'styles/pallete';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={pallete}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
