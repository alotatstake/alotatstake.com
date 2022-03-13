const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },

    extend: {
      colors: {
        gray: colors.trueGray,
      },

      width: {
        '3.5': '0.875rem',
      },

      padding: {
        '0.5': '0.1875rem'
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Alegreya', ...defaultTheme.fontFamily.serif],
        'sans-uc': ['Alegreya Sans SC', ...defaultTheme.fontFamily.serif],
      }
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}