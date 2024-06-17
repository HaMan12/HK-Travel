/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      colors:{
        'custdarkgray': '#505050',
        'red':'#E13636',
        'p':'#878787'
      },
    },
  },
  plugins: [],
  mode: 'jit'
}

