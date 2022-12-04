/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Ubuntu Mono', 'mono']
    }
  },
  daisyui: {
    themes: [
      {
        pokelight: {
          primary: '#fde047',
          secondary: '#c7d2fe',
          accent: '#f5d0fe',
          neutral: '#f1f5f9',
          'base-100': '#ffffff',
          info: '#7dd3fc',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f43f5e'
        }
      }
    ]
  }
}
