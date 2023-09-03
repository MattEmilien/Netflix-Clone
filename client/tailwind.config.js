/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          "pge": "#181818",
        },
        fontFamily: {
          "Default": ['Lato', 'Segoe'],
        },
  
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}