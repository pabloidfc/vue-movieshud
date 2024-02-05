/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.ts', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
