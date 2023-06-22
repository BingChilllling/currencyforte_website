import React, { useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css';
import { Layout } from '@/components';
import '@/styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6469406013541860" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

