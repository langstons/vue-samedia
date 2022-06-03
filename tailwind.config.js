module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      background: '#000000',
      black: '#000000',
      white: '#ffffff',
      red: '#D60D34',
      darkred: '#A00D2A',
      darktext: '#787A7E',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      xs: '380px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1440px'
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
      },
      padding: {
        DEFAULT: '1.25rem',
      },
    },
  },
  plugins: [],
}