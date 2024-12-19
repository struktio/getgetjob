/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8A8FFF',
          DEFAULT: '#6B74FF',
          dark: '#5158CC',
        },
        secondary: {
          light: '#FF8FEE',
          DEFAULT: '#FF72E7',
          dark: '#CC5BB9',
        },
        brand: {
          blue: '#6B74FF',
          pink: '#FF72E7',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #6B74FF, #FF72E7)',
        'brand-gradient-hover': 'linear-gradient(to right, #5158CC, #CC5BB9)',
      },
    },
  },
  plugins: [],
};