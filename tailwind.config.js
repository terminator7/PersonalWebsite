const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      ...defaultTheme.screens,
    },
    extend: {
      transitionProperty: {
        'maxHeight': 'max-height'
      },
      spacing: {
        100: "100rem"
      }
    }
  },
  plugins: [],
}