import React, { useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css';
import { Layout } from '@/components';
import '@/styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

