module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-browser.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
