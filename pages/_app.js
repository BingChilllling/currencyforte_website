import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Layout } from '@/components';
import '@/styles/globals.scss';
import { GoogleAdSense } from "nextjs-google-adsense"
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <GoogleAdSense publisherId="ca-pub-6469406013541860" />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp;

