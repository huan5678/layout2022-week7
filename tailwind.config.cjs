/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './main.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#707070',
        primary: '#891818',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans TC', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
