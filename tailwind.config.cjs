/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'brown': '#47291C',
      'tan': '#DDD6BE',
      'white': '#FFFFFF',
      'red': '#EF493F',
      'blue': '#5A85F1',
      'light-tan': '#E9E5D9',
      'grey': '#1E1E1E'
    },
    letterSpacing: {
      normal: '-0.075em',
      wide: '-0.05em',
      wider: '-0.025',
      widest: '0em',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem', 
      lg: '1.125rem',
      xl: '1.25rem', 
      '2xl': '1.5rem',
      '3xl': '1.875rem', 
      '4xl': '2.25rem', 
      '5xl': '3rem',
      '6xl': '3.75rem', 
      '7xl': '4.5rem',
      '8xl': '6rem', 
      '9xl': '8rem',
    },
    fontFamily: {
      'pop': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('./images/hero-min.jpg')",
        'store-img': "url('./images/store-min.jpg')",
        'mywork-img': "url('./images/mywork-min.jpg')",
      }
    },
  },
  plugins: [],
}
