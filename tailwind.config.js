/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font: 'Open Sans , sans-serif'
      },
      colors: {
        'poc-red': '#8a1e27ff',
        'poc-red-bg': '#c90616ff',
      }
    }
  },
  plugins: []
}
