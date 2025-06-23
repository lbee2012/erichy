module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-browser.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
