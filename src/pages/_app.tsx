import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], // atau 'latin-ext', tergantung kebutuhan
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      delay: 50,
      duration: 600,
    });
  }, []);

  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
