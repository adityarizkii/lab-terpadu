import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], // atau 'latin-ext', tergantung kebutuhan
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
