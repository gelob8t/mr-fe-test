/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'mr-',
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#F6F6F7',
        'dark-grey': '#222222',
        'taupe-grey': '#888888',
        'red': '#C90000',
        'light-grey': '#CCCCCC'
      }
    },
    screens: {
      'sm': '750px', // => @media (min-width: 750px) { ... }
      'md': '990px', // => @media (min-width: 990px) { ... },
      'lg': '1200px', // => @media (min-width: 990px) { ... }
    },
    fontFamily: {
      'sans-serif': ['sans-serif']
    }
  },
  plugins: [],
}
