/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'brown': '#47291C',
      'tan': '#DDD6BE',
      'white': '#FFFFFF',
      'red': 'EF493F',
      'blue': '5A85F1',
      'light-tan': 'E9E5D9'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.07em' }],
      sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.07em' }],
      base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.07em' }],
      lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.07em' }],
      xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.07em' }],
      '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.07em'}],
      '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.07em'}],
      '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.07em'}],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.07em'}],
      '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.07em'}],
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.07em'}],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.07em'}],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.07em'}],
    },
    fontFamily: {
      'pop': ['Poppins', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}
