import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/main';

import THEME from '../theme';
import { ProductProvider } from '../contexts/ProductContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <ProductProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </ProductProvider>
    </ThemeProvider>
  );
}
