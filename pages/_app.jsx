import '../styles/globals.css';
import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import uiSpec from '../src/ui-spec';

// Self-host JetBrains Mono via next/font
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export default function App({ Component, pageProps }) {
  return (
    <div className={jetbrainsMono.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={uiSpec.main.favicon} />
        <title>erichy</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
