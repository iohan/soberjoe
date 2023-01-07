/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './hooks/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        'green-medium': '#87c5ae',
        'green-dark': '#659281',
        'blue-dark': '#1d2324',
        'blue-medium': '#242a2c',
        offwhite: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
