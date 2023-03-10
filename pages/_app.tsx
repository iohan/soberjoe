import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { useState } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }: AppProps) {
  const [openSlot, setOpenSlot] = useState<number>(0);
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Layout>
        <Component {...pageProps} openSlot={openSlot} setOpenSlot={setOpenSlot} />
      </Layout>
    </>
  );
}
