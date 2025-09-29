import '../styles/globals.css';
import React, { useEffect, useMemo, useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import uiSpec from '../src/ui-spec';
import { ThemeContext } from '../src/theme/ThemeContext';

// Self-host JetBrains Mono via next/font
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export default function App({ Component, pageProps }) {
  const themes = useMemo(() => uiSpec.theme || {}, []);
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    if (storedTheme && themes[storedTheme]) {
      setThemeName(storedTheme);
      return;
    }

    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeName(prefersDark && themes.dark ? 'dark' : 'light');
    }
  }, [themes]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
  }, [themeName]);

  const palette = useMemo(() => themes[themeName] || themes.light || {}, [themes, themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => {
      if (prev === 'light' && themes.dark) return 'dark';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ themeName, palette, toggleTheme }}>
      <div className={jetbrainsMono.className} style={{ backgroundColor: palette.mainBg, minHeight: '100vh' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={uiSpec.main.favicon} />
          <title>erichy</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}
