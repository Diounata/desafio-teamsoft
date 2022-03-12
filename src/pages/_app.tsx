import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/main';

import THEME from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
