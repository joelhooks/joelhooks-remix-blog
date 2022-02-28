const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')
const fromRoot = (p) => path.join(__dirname, p)

module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '545px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1920px',
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
