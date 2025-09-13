import '../styles/globals.css';    // your migrated src/styles/global.css
import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
