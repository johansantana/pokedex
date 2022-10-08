/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Ubuntu Mono', 'mono']
    }
  },
  plugins: [require('daisyui')]
}
