/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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
        'hero-mobile-img': "url('/images/hero-min.jpg')",
        'store-mobile-img': "url('/images/store-min.jpg')",
        'mywork-mobile-img': "url('/images/about-me.webp')",
        'hero-desktop-img': "url('/images/hero.jpg')",
        'store-desktop-img': "url('/images/store.jpg')",
        'mywork-desktop-img': "url('/images/about-me.webp')",
        'pottery-mobile-img': "url('/images/pottery.webp')",
        'choices-collection-desktop-img': "url('/images/choices-collection.png')",
        'choices-collection-mobile-img': "url('/images/choices-collection.png')",
        'maine-collection-desktop-img': "url('/images/maine-collection.webp')",
        'maine-collection-mobile-img': "url('/images/maine-collection.webp')"
      },    
      colors: {
        'brown': '#47291C',
        'tan': '#E9E5D9',
        'white': '#FFFFFF',
        'red': '#DF2228',
        'orange': '#EB6424',
        'green': '#359C49',
        'blue': '#3569B4',
        'yellow': 'F1DB18',
        'pink': '#F497DA',
        'purple': '#58355E',
        'grey': '#303633',
        'product': '#e2dccd'
      },
      screens: {
        'xs': '325px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
