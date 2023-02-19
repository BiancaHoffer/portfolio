import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import Aos from "aos";
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Component  {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
