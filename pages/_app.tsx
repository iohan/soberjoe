import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [openSlot, setOpenSlot] = useState<number>(0);
  return (
    <Layout>
      <Component {...pageProps} openSlot={openSlot} setOpenSlot={setOpenSlot} />
    </Layout>
  );
}
